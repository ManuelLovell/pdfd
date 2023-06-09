import { FlatePredictor, flatePredictors, StreamFilter, 
  streamFilters, StreamType, supportedFilters, valueTypes } from "../../spec-constants";

import { CryptInfo } from "../../encryption/interfaces";
import { DecodeParamsDict } from "../encoding/decode-params-dict";
import { keywordCodes } from "../../encoding/char-codes";
import { FlateDecoder } from "../../encoding/flate-decoder";

import { DataParser, ParserResult } from "../../data-parse/data-parser";
import { ParserInfo } from "../../data-parse/parser-info";

import { PdfObject } from "./pdf-object";

export abstract class PdfStream extends PdfObject {
  /** (Optional) The  type  of  PDF  object  that  this  dictionary  describes */
  readonly Type: StreamType;

  /**
   * (Required) The number of bytes from the beginning of the line 
   * following the keyword stream to the last byte just before the keyword endstream. 
   * (There may be an additional EOL marker, preceding endstream, 
   * that is not included in the count and is not logically part of the stream data.
   */
  Length: number;
  /**
   * (Optional) The name of a filter that shall be applied in processing the stream data 
   * found between the keywords stream and endstream, or an array of zero, one or several names. 
   * Multiple filters shall be specified in the order in which they are to be applied
   */
  Filter: StreamFilter; // | StreamFilter[]; TODO: Add support to filter arrays
  /**
   * (Optional) A parameter dictionary or an array of such dictionaries, 
   * used by the filters specified by Filter
   */
  DecodeParms: DecodeParamsDict; // | Dict | (Dict | FlateParamsDict)[];
  /**
   * (Optional; PDF 1.5+) A non-negative integer representing the number of bytes 
   * in the decoded (defiltered) stream. It can be used to determine, for example, 
   * whether enough disk space is available to write a stream to a file
   */
  DL: number;
  
  protected _streamData: Uint8Array;
  /**encoded stream data */
  get streamData(): Uint8Array {
    return this._streamData;
  }
  /**encoded stream data */
  set streamData(data: Uint8Array) { 
    this.setStreamData(data);
    this._edited = true;
  }
  
  protected _decodedStreamData: Uint8Array;
  get decodedStreamData(): Uint8Array {
    if (!this._decodedStreamData) {
      this.decodeStreamData();
    }
    return this._decodedStreamData;
  }

  /**
   * return decoded stream data as ansi text (intended for debug purposes)
   */
  get decodedStreamDataChars(): string {
    const decoder = new TextDecoder();
    return decoder.decode(this.decodedStreamData);
  }
  
  protected constructor(type: StreamType) {
    super();
    this.Type = type;
  }

  /**
   * get a new instance of the decoded stream data parser
   */
  async getStreamDataParserAsync(): Promise<DataParser> {
    return await PdfStream.getDataParserAsync(this.decodedStreamData);
  }

  toArray(cryptInfo?: CryptInfo): Uint8Array {
    
    const streamData = cryptInfo?.ref && cryptInfo.streamCryptor
      ? cryptInfo.streamCryptor.encrypt(this.streamData, cryptInfo.ref)
      : this.streamData; 
    
    const encoder = new TextEncoder();
    const bytes: number[] = [...keywordCodes.DICT_START];
    bytes.push(...encoder.encode("/Length "), ...encoder.encode(" " + streamData.length));
    if (this.Type) {
      bytes.push(...keywordCodes.TYPE, ...encoder.encode(this.Type));
    }
    if (this.Filter) {
      bytes.push(...encoder.encode("/Filter "), ...encoder.encode(this.Filter));
    }
    if (this.DecodeParms) {
      bytes.push(...encoder.encode("/DecodeParms "), ...this.DecodeParms.toArray(cryptInfo));
    } 
    bytes.push(    
      ...keywordCodes.DICT_END, ...keywordCodes.END_OF_LINE,
      ...keywordCodes.STREAM_START, ...keywordCodes.END_OF_LINE,
    );  
    for (let i = 0; i < streamData.length; i++) {
      bytes.push(streamData[i]);
    }  
    bytes.push(
      ...keywordCodes.END_OF_LINE, ...keywordCodes.STREAM_END, // ...keywordCodes.END_OF_LINE
    );

    return new Uint8Array(bytes);
  }

  /**
   * encode provided text and set it as the stream data
   * @param data ansi string
   */
  setTextStreamData(text: string) {    
    const encoder = new TextEncoder();    
    const bytes = encoder.encode(text);
    this.streamData = bytes;
  }

  /**
   * try to parse and fill public properties from data using parse info
   */
  protected async parsePropsAsync(parseInfo: ParserInfo) {
    if (!parseInfo) {
      throw new Error("Parse info is empty");
    }

    const {parser, bounds} = parseInfo;
    const start = bounds.contentStart || bounds.start;
    const end = bounds.contentEnd || bounds.end;

    this._ref = parseInfo.cryptInfo?.ref;
    this._sourceBytes = await parser.sliceCharCodesAsync(start, end);

    const streamEndIndex = await parser.findSubarrayIndexAsync(keywordCodes.STREAM_END, { 
      direction: false, 
      minIndex: start, 
      maxIndex: end, 
      closedOnly: true,
    });
    if (!streamEndIndex) {
      throw new Error("Object is not a stream");
    }   
    const streamStartIndex = await parser.findSubarrayIndexAsync(keywordCodes.STREAM_START, {
      direction: false, 
      minIndex: start,
      maxIndex: streamEndIndex.start - 1, 
      closedOnly: true
    });
    if (!streamStartIndex) {
      throw new Error("Stream start is out of the data bounds");
    }   
    
    const dictBounds = await parser.getDictBoundsAtAsync(start);
    let i = await parser.skipToNextNameAsync(dictBounds.contentStart, dictBounds.contentEnd);
    if (i === -1) {
      throw new Error("Dict is empty (has no properties)");
    }    

    let name: string;
    let parseResult: ParserResult<string>;
    while (true) {
      parseResult = await parser.parseNameAtAsync(i);
      if (parseResult) {      
        i = parseResult.end + 1;
        name = parseResult.value;
        switch (name) {
          case "/Type":
            const type = await parser.parseNameAtAsync(i);
            if (type) {
              if (this.Type && this.Type !== type.value) {
                // wrong object type
                throw new Error(`Ivalid dict type: '${type.value}' instead of '${this.Type}'`);
              }
              i = type.end + 1;
            } else {
              throw new Error("Can't parse /Type property value");
            }
            break;
          
          case "/Length":
          case "/DL":
            i = await this.parseNumberPropAsync(name, parser, i, false);
            break;
            
          case "/Filter":
            const entryType = await parser.getValueTypeAtAsync(i);
            if (entryType === valueTypes.NAME) {  
              const filter = await parser.parseNameAtAsync(i);  
              if (filter && supportedFilters.has(filter.value)) {
                this.Filter = <StreamFilter>filter.value;
                i = filter.end + 1;
                break;
              } else {  
                throw new Error(`Unsupported /Filter property value: ${filter.value}`);
              }
            } else if (entryType === valueTypes.ARRAY) {              
              const filterNames = await parser.parseNameArrayAtAsync(i);
              if (filterNames) {
                const filterArray = filterNames.value;
                // TODO: add support for multiple filters
                if (filterArray.length === 1 && supportedFilters.has(filterArray[0])) {
                  this.Filter = <StreamFilter>filterArray[0];
                  i = filterNames.end + 1;
                  break;
                } else {  
                  throw new Error(`Unsupported /Filter property value: ${filterArray.toString()}`);
                }
              }
            }
            throw new Error(`Unsupported /Filter property value type: ${entryType}`);
          case "/DecodeParms":
            const paramsEntryType = await parser.getValueTypeAtAsync(i);
            if (paramsEntryType === valueTypes.DICTIONARY) {  
              const decodeParamsBounds = await parser.getDictBoundsAtAsync(i);
              if (decodeParamsBounds) {
                const params = await DecodeParamsDict.parseAsync({parser, 
                  bounds: decodeParamsBounds, cryptInfo: parseInfo.cryptInfo});
                if (params) {
                  this.DecodeParms = params.value;
                  i = decodeParamsBounds.end + 1;
                  break;
                }
              }              
              throw new Error("Can't parse /DecodeParms property value");
            } else if (paramsEntryType === valueTypes.ARRAY) {               
              const paramsDicts = await DecodeParamsDict.parseArrayAsync(parser, i, parseInfo.cryptInfo);
              if (paramsDicts) {
                const paramsArray = paramsDicts.value;
                // TODO: add support for multiple filters
                if (paramsArray.length === 1) {
                  this.DecodeParms = paramsArray[0];
                  i = paramsDicts.end + 1;
                  break;
                }
              }
              throw new Error("Can't parse /DecodeParms property value");
            }
            throw new Error(`Unsupported /DecodeParms property value type: ${paramsEntryType}`);      

          default:
            // skip value to next name
            i = await parser.skipToNextNameAsync(i, dictBounds.contentEnd);
            break;
        }
      } else {
        break;
      }
    };
    
    const streamStart = await parser.findNewLineIndexAsync(true, streamStartIndex.end + 1);
    const streamEnd = await parser.findNewLineIndexAsync(false, streamEndIndex.start - 1);
    const streamBytes = await parser.sliceCharCodesAsync(streamStart, streamEnd);
    const encodedData = parseInfo.cryptInfo?.ref && parseInfo.cryptInfo.streamCryptor
      ? parseInfo.cryptInfo.streamCryptor.decrypt(streamBytes, parseInfo.cryptInfo.ref)
      : streamBytes;
    this._streamData = encodedData;
  }

  protected setStreamData(data: Uint8Array) {   
    if (!data?.length) {
      throw new Error("Can't set emprty stream data");
    }
    
    let params: DecodeParamsDict;
    if (this.DecodeParms) {
      params = this.DecodeParms;
    } else { 
      let columns: number;
      let i = 10;
      while (true) {
        if (data.length % i === 0) {
          columns = i;
          break;
        }
        i--;
      }

      params = new DecodeParamsDict();
      params.setIntProp("/Predictor", flatePredictors.PNG_UP);
      params.setIntProp("/Columns", columns);
      this.DecodeParms = params;
    }

    const encodedData = FlateDecoder.Encode(data,
      <FlatePredictor>params?.getIntProp("/Predictor") || flatePredictors.NONE,
      params?.getIntProp("/Columns") || 1,
      params?.getIntProp("/Colors") || 1,
      params?.getIntProp("/BitsPerComponent") || 8); 

    this._streamData = encodedData;
    this.Length = encodedData.length;
    this.DL = data.length;
    this._decodedStreamData = data;
  }

  /**decode the stream data and assign it to the corresponding property */
  protected decodeStreamData() {    
    let decodedData: Uint8Array;

    switch (this.Filter) {
      case streamFilters.FLATE:
        if (this.DecodeParms) {
          const params = this.DecodeParms;
          decodedData = FlateDecoder.Decode(this._streamData,
            <FlatePredictor>params.getIntProp("/Predictor") || flatePredictors.NONE,
            params.getIntProp("/Columns") || 1,
            params.getIntProp("/Colors") || 1,
            params.getIntProp("/BitsPerComponent") || 8); 
        } else {      
          decodedData = FlateDecoder.Decode(this._streamData);
        }
        break;
      default:
        decodedData = new Uint8Array(this._streamData);
        break;
    }

    this._decodedStreamData = decodedData;
  }
}
