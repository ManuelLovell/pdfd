(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const mobileVhHack=()=>{const c=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${c}px`)};mobileVhHack();window.addEventListener("resize",mobileVhHack);function getAugmentedNamespace(c){if(c.__esModule)return c;var e=c.default;if(typeof e=="function"){var t=function s(){if(this instanceof s){var r=[null];r.push.apply(r,arguments);var o=Function.bind.apply(e,r);return new o}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(c).forEach(function(s){var r=Object.getOwnPropertyDescriptor(c,s);Object.defineProperty(t,s,r.get?r:{enumerable:!0,get:function(){return c[s]}})}),t}function commonjsRequire(c){throw new Error('Could not dynamically require "'+c+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var pdf={exports:{}};const __viteBrowserExternal={},__viteBrowserExternal$1=Object.freeze(Object.defineProperty({__proto__:null,default:__viteBrowserExternal},Symbol.toStringTag,{value:"Module"})),require$$5=getAugmentedNamespace(__viteBrowserExternal$1);(function(module,exports){(function(e,t){module.exports=t()})(globalThis,()=>(()=>{var __webpack_modules__=[,(c,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.VerbosityLevel=e.Util=e.UnknownErrorException=e.UnexpectedResponseException=e.TextRenderingMode=e.RenderingIntentFlag=e.PromiseCapability=e.PermissionFlag=e.PasswordResponses=e.PasswordException=e.PageActionEventType=e.OPS=e.MissingPDFException=e.MAX_IMAGE_SIZE_TO_CACHE=e.LINE_FACTOR=e.LINE_DESCENT_FACTOR=e.InvalidPDFException=e.ImageKind=e.IDENTITY_MATRIX=e.FormatError=e.FeatureTest=e.FONT_IDENTITY_MATRIX=e.DocumentActionEventType=e.CMapCompressionType=e.BaseException=e.BASELINE_FACTOR=e.AnnotationType=e.AnnotationStateModelType=e.AnnotationReviewState=e.AnnotationReplyType=e.AnnotationMode=e.AnnotationMarkedState=e.AnnotationFlag=e.AnnotationFieldFlag=e.AnnotationEditorType=e.AnnotationEditorPrefix=e.AnnotationEditorParamsType=e.AnnotationBorderStyleType=e.AnnotationActionEventType=e.AbortException=void 0,e.assert=P,e.bytesToString=ne,e.createValidAbsoluteUrl=q,e.getModificationDate=Ne,e.getVerbosityLevel=J,e.info=se,e.isArrayBuffer=Fe,e.isArrayEqual=Pe,e.normalizeUnicode=Ue,e.objectFromMap=ge,e.objectSize=ue,e.setVerbosityLevel=le,e.shadow=b,e.string32=fe,e.stringToBytes=de,e.stringToPDFString=ve,e.stringToUTF8String=ke,e.unreachable=I,e.utf8StringToString=Ee,e.warn=Y;const t=[1,0,0,1,0,0];e.IDENTITY_MATRIX=t;const s=[.001,0,0,.001,0,0];e.FONT_IDENTITY_MATRIX=s;const r=1e7;e.MAX_IMAGE_SIZE_TO_CACHE=r;const o=1.35;e.LINE_FACTOR=o;const a=.35;e.LINE_DESCENT_FACTOR=a;const f=a/o;e.BASELINE_FACTOR=f;const m={ANY:1,DISPLAY:2,PRINT:4,SAVE:8,ANNOTATIONS_FORMS:16,ANNOTATIONS_STORAGE:32,ANNOTATIONS_DISABLE:64,OPLIST:256};e.RenderingIntentFlag=m;const g={DISABLE:0,ENABLE:1,ENABLE_FORMS:2,ENABLE_STORAGE:3};e.AnnotationMode=g;const p="pdfjs_internal_editor_";e.AnnotationEditorPrefix=p;const y={DISABLE:-1,NONE:0,FREETEXT:3,INK:15};e.AnnotationEditorType=y;const C={FREETEXT_SIZE:1,FREETEXT_COLOR:2,FREETEXT_OPACITY:3,INK_COLOR:11,INK_THICKNESS:12,INK_OPACITY:13};e.AnnotationEditorParamsType=C;const A={PRINT:4,MODIFY_CONTENTS:8,COPY:16,MODIFY_ANNOTATIONS:32,FILL_INTERACTIVE_FORMS:256,COPY_FOR_ACCESSIBILITY:512,ASSEMBLE:1024,PRINT_HIGH_QUALITY:2048};e.PermissionFlag=A;const w={FILL:0,STROKE:1,FILL_STROKE:2,INVISIBLE:3,FILL_ADD_TO_PATH:4,STROKE_ADD_TO_PATH:5,FILL_STROKE_ADD_TO_PATH:6,ADD_TO_PATH:7,FILL_STROKE_MASK:3,ADD_TO_PATH_FLAG:4};e.TextRenderingMode=w;const _={GRAYSCALE_1BPP:1,RGB_24BPP:2,RGBA_32BPP:3};e.ImageKind=_;const E={TEXT:1,LINK:2,FREETEXT:3,LINE:4,SQUARE:5,CIRCLE:6,POLYGON:7,POLYLINE:8,HIGHLIGHT:9,UNDERLINE:10,SQUIGGLY:11,STRIKEOUT:12,STAMP:13,CARET:14,INK:15,POPUP:16,FILEATTACHMENT:17,SOUND:18,MOVIE:19,WIDGET:20,SCREEN:21,PRINTERMARK:22,TRAPNET:23,WATERMARK:24,THREED:25,REDACT:26};e.AnnotationType=E;const v={MARKED:"Marked",REVIEW:"Review"};e.AnnotationStateModelType=v;const k={MARKED:"Marked",UNMARKED:"Unmarked"};e.AnnotationMarkedState=k;const R={ACCEPTED:"Accepted",REJECTED:"Rejected",CANCELLED:"Cancelled",COMPLETED:"Completed",NONE:"None"};e.AnnotationReviewState=R;const L={GROUP:"Group",REPLY:"R"};e.AnnotationReplyType=L;const B={INVISIBLE:1,HIDDEN:2,PRINT:4,NOZOOM:8,NOROTATE:16,NOVIEW:32,READONLY:64,LOCKED:128,TOGGLENOVIEW:256,LOCKEDCONTENTS:512};e.AnnotationFlag=B;const X={READONLY:1,REQUIRED:2,NOEXPORT:4,MULTILINE:4096,PASSWORD:8192,NOTOGGLETOOFF:16384,RADIO:32768,PUSHBUTTON:65536,COMBO:131072,EDIT:262144,SORT:524288,FILESELECT:1048576,MULTISELECT:2097152,DONOTSPELLCHECK:4194304,DONOTSCROLL:8388608,COMB:16777216,RICHTEXT:33554432,RADIOSINUNISON:33554432,COMMITONSELCHANGE:67108864};e.AnnotationFieldFlag=X;const U={SOLID:1,DASHED:2,BEVELED:3,INSET:4,UNDERLINE:5};e.AnnotationBorderStyleType=U;const M={E:"Mouse Enter",X:"Mouse Exit",D:"Mouse Down",U:"Mouse Up",Fo:"Focus",Bl:"Blur",PO:"PageOpen",PC:"PageClose",PV:"PageVisible",PI:"PageInvisible",K:"Keystroke",F:"Format",V:"Validate",C:"Calculate"};e.AnnotationActionEventType=M;const F={WC:"WillClose",WS:"WillSave",DS:"DidSave",WP:"WillPrint",DP:"DidPrint"};e.DocumentActionEventType=F;const $={O:"PageOpen",C:"PageClose"};e.PageActionEventType=$;const ee={ERRORS:0,WARNINGS:1,INFOS:5};e.VerbosityLevel=ee;const te={NONE:0,BINARY:1};e.CMapCompressionType=te;const he={dependency:1,setLineWidth:2,setLineCap:3,setLineJoin:4,setMiterLimit:5,setDash:6,setRenderingIntent:7,setFlatness:8,setGState:9,save:10,restore:11,transform:12,moveTo:13,lineTo:14,curveTo:15,curveTo2:16,curveTo3:17,closePath:18,rectangle:19,stroke:20,closeStroke:21,fill:22,eoFill:23,fillStroke:24,eoFillStroke:25,closeFillStroke:26,closeEOFillStroke:27,endPath:28,clip:29,eoClip:30,beginText:31,endText:32,setCharSpacing:33,setWordSpacing:34,setHScale:35,setLeading:36,setFont:37,setTextRenderingMode:38,setTextRise:39,moveText:40,setLeadingMoveText:41,setTextMatrix:42,nextLine:43,showText:44,showSpacedText:45,nextLineShowText:46,nextLineSetSpacingShowText:47,setCharWidth:48,setCharWidthAndBounds:49,setStrokeColorSpace:50,setFillColorSpace:51,setStrokeColor:52,setStrokeColorN:53,setFillColor:54,setFillColorN:55,setStrokeGray:56,setFillGray:57,setStrokeRGBColor:58,setFillRGBColor:59,setStrokeCMYKColor:60,setFillCMYKColor:61,shadingFill:62,beginInlineImage:63,beginImageData:64,endInlineImage:65,paintXObject:66,markPoint:67,markPointProps:68,beginMarkedContent:69,beginMarkedContentProps:70,endMarkedContent:71,beginCompat:72,endCompat:73,paintFormXObjectBegin:74,paintFormXObjectEnd:75,beginGroup:76,endGroup:77,beginAnnotation:80,endAnnotation:81,paintImageMaskXObject:83,paintImageMaskXObjectGroup:84,paintImageXObject:85,paintInlineImageXObject:86,paintInlineImageXObjectGroup:87,paintImageXObjectRepeat:88,paintImageMaskXObjectRepeat:89,paintSolidColorImageMask:90,constructPath:91};e.OPS=he;const re={NEED_PASSWORD:1,INCORRECT_PASSWORD:2};e.PasswordResponses=re;let pe=ee.WARNINGS;function le(me){Number.isInteger(me)&&(pe=me)}function J(){return pe}function se(me){pe>=ee.INFOS&&console.log(`Info: ${me}`)}function Y(me){pe>=ee.WARNINGS&&console.log(`Warning: ${me}`)}function I(me){throw new Error(me)}function P(me,oe){me||I(oe)}function O(me){switch(me?.protocol){case"http:":case"https:":case"ftp:":case"mailto:":case"tel:":return!0;default:return!1}}function q(me,oe=null,ae=null){if(!me)return null;try{if(ae&&typeof me=="string"&&(ae.addDefaultProtocol&&me.startsWith("www.")&&me.match(/\./g)?.length>=2&&(me=`http://${me}`),ae.tryConvertEncoding))try{me=ke(me)}catch{}const Ce=oe?new URL(me,oe):new URL(me);if(O(Ce))return Ce}catch{}return null}function b(me,oe,ae,Ce=!1){return Object.defineProperty(me,oe,{value:ae,enumerable:!Ce,configurable:!0,writable:!1}),ae}const D=function(){function oe(ae,Ce){this.constructor===oe&&I("Cannot initialize BaseException."),this.message=ae,this.name=Ce}return oe.prototype=new Error,oe.constructor=oe,oe}();e.BaseException=D;class N extends D{constructor(oe,ae){super(oe,"PasswordException"),this.code=ae}}e.PasswordException=N;class j extends D{constructor(oe,ae){super(oe,"UnknownErrorException"),this.details=ae}}e.UnknownErrorException=j;class V extends D{constructor(oe){super(oe,"InvalidPDFException")}}e.InvalidPDFException=V;class Z extends D{constructor(oe){super(oe,"MissingPDFException")}}e.MissingPDFException=Z;class Q extends D{constructor(oe,ae){super(oe,"UnexpectedResponseException"),this.status=ae}}e.UnexpectedResponseException=Q;class ie extends D{constructor(oe){super(oe,"FormatError")}}e.FormatError=ie;class ce extends D{constructor(oe){super(oe,"AbortException")}}e.AbortException=ce;function ne(me){(typeof me!="object"||me?.length===void 0)&&I("Invalid argument for bytesToString");const oe=me.length,ae=8192;if(oe<ae)return String.fromCharCode.apply(null,me);const Ce=[];for(let Se=0;Se<oe;Se+=ae){const Re=Math.min(Se+ae,oe),Te=me.subarray(Se,Re);Ce.push(String.fromCharCode.apply(null,Te))}return Ce.join("")}function de(me){typeof me!="string"&&I("Invalid argument for stringToBytes");const oe=me.length,ae=new Uint8Array(oe);for(let Ce=0;Ce<oe;++Ce)ae[Ce]=me.charCodeAt(Ce)&255;return ae}function fe(me){return String.fromCharCode(me>>24&255,me>>16&255,me>>8&255,me&255)}function ue(me){return Object.keys(me).length}function ge(me){const oe=Object.create(null);for(const[ae,Ce]of me)oe[ae]=Ce;return oe}function Ae(){const me=new Uint8Array(4);return me[0]=1,new Uint32Array(me.buffer,0,1)[0]===1}function ye(){try{return new Function(""),!0}catch{return!1}}class we{static get isLittleEndian(){return b(this,"isLittleEndian",Ae())}static get isEvalSupported(){return b(this,"isEvalSupported",ye())}static get isOffscreenCanvasSupported(){return b(this,"isOffscreenCanvasSupported",typeof OffscreenCanvas<"u")}static get platform(){return typeof navigator>"u"?b(this,"platform",{isWin:!1,isMac:!1}):b(this,"platform",{isWin:navigator.platform.includes("Win"),isMac:navigator.platform.includes("Mac")})}}e.FeatureTest=we;const xe=[...Array(256).keys()].map(me=>me.toString(16).padStart(2,"0"));class be{static makeHexColor(oe,ae,Ce){return`#${xe[oe]}${xe[ae]}${xe[Ce]}`}static scaleMinMax(oe,ae){let Ce;oe[0]?(oe[0]<0&&(Ce=ae[0],ae[0]=ae[1],ae[1]=Ce),ae[0]*=oe[0],ae[1]*=oe[0],oe[3]<0&&(Ce=ae[2],ae[2]=ae[3],ae[3]=Ce),ae[2]*=oe[3],ae[3]*=oe[3]):(Ce=ae[0],ae[0]=ae[2],ae[2]=Ce,Ce=ae[1],ae[1]=ae[3],ae[3]=Ce,oe[1]<0&&(Ce=ae[2],ae[2]=ae[3],ae[3]=Ce),ae[2]*=oe[1],ae[3]*=oe[1],oe[2]<0&&(Ce=ae[0],ae[0]=ae[1],ae[1]=Ce),ae[0]*=oe[2],ae[1]*=oe[2]),ae[0]+=oe[4],ae[1]+=oe[4],ae[2]+=oe[5],ae[3]+=oe[5]}static transform(oe,ae){return[oe[0]*ae[0]+oe[2]*ae[1],oe[1]*ae[0]+oe[3]*ae[1],oe[0]*ae[2]+oe[2]*ae[3],oe[1]*ae[2]+oe[3]*ae[3],oe[0]*ae[4]+oe[2]*ae[5]+oe[4],oe[1]*ae[4]+oe[3]*ae[5]+oe[5]]}static applyTransform(oe,ae){const Ce=oe[0]*ae[0]+oe[1]*ae[2]+ae[4],Se=oe[0]*ae[1]+oe[1]*ae[3]+ae[5];return[Ce,Se]}static applyInverseTransform(oe,ae){const Ce=ae[0]*ae[3]-ae[1]*ae[2],Se=(oe[0]*ae[3]-oe[1]*ae[2]+ae[2]*ae[5]-ae[4]*ae[3])/Ce,Re=(-oe[0]*ae[1]+oe[1]*ae[0]+ae[4]*ae[1]-ae[5]*ae[0])/Ce;return[Se,Re]}static getAxialAlignedBoundingBox(oe,ae){const Ce=be.applyTransform(oe,ae),Se=be.applyTransform(oe.slice(2,4),ae),Re=be.applyTransform([oe[0],oe[3]],ae),Te=be.applyTransform([oe[2],oe[1]],ae);return[Math.min(Ce[0],Se[0],Re[0],Te[0]),Math.min(Ce[1],Se[1],Re[1],Te[1]),Math.max(Ce[0],Se[0],Re[0],Te[0]),Math.max(Ce[1],Se[1],Re[1],Te[1])]}static inverseTransform(oe){const ae=oe[0]*oe[3]-oe[1]*oe[2];return[oe[3]/ae,-oe[1]/ae,-oe[2]/ae,oe[0]/ae,(oe[2]*oe[5]-oe[4]*oe[3])/ae,(oe[4]*oe[1]-oe[5]*oe[0])/ae]}static singularValueDecompose2dScale(oe){const ae=[oe[0],oe[2],oe[1],oe[3]],Ce=oe[0]*ae[0]+oe[1]*ae[2],Se=oe[0]*ae[1]+oe[1]*ae[3],Re=oe[2]*ae[0]+oe[3]*ae[2],Te=oe[2]*ae[1]+oe[3]*ae[3],He=(Ce+Te)/2,Oe=Math.sqrt((Ce+Te)**2-4*(Ce*Te-Re*Se))/2,ze=He+Oe||1,Me=He-Oe||1;return[Math.sqrt(ze),Math.sqrt(Me)]}static normalizeRect(oe){const ae=oe.slice(0);return oe[0]>oe[2]&&(ae[0]=oe[2],ae[2]=oe[0]),oe[1]>oe[3]&&(ae[1]=oe[3],ae[3]=oe[1]),ae}static intersect(oe,ae){const Ce=Math.max(Math.min(oe[0],oe[2]),Math.min(ae[0],ae[2])),Se=Math.min(Math.max(oe[0],oe[2]),Math.max(ae[0],ae[2]));if(Ce>Se)return null;const Re=Math.max(Math.min(oe[1],oe[3]),Math.min(ae[1],ae[3])),Te=Math.min(Math.max(oe[1],oe[3]),Math.max(ae[1],ae[3]));return Re>Te?null:[Ce,Re,Se,Te]}static bezierBoundingBox(oe,ae,Ce,Se,Re,Te,He,Oe){const ze=[],Me=[[],[]];let je,Ge,$e,De,Ke,Ve,Ye,Ze;for(let Qe=0;Qe<2;++Qe){if(Qe===0?(Ge=6*oe-12*Ce+6*Re,je=-3*oe+9*Ce-9*Re+3*He,$e=3*Ce-3*oe):(Ge=6*ae-12*Se+6*Te,je=-3*ae+9*Se-9*Te+3*Oe,$e=3*Se-3*ae),Math.abs(je)<1e-12){if(Math.abs(Ge)<1e-12)continue;De=-$e/Ge,0<De&&De<1&&ze.push(De);continue}Ye=Ge*Ge-4*$e*je,Ze=Math.sqrt(Ye),!(Ye<0)&&(Ke=(-Ge+Ze)/(2*je),0<Ke&&Ke<1&&ze.push(Ke),Ve=(-Ge-Ze)/(2*je),0<Ve&&Ve<1&&ze.push(Ve))}let Xe=ze.length,Be;const qe=Xe;for(;Xe--;)De=ze[Xe],Be=1-De,Me[0][Xe]=Be*Be*Be*oe+3*Be*Be*De*Ce+3*Be*De*De*Re+De*De*De*He,Me[1][Xe]=Be*Be*Be*ae+3*Be*Be*De*Se+3*Be*De*De*Te+De*De*De*Oe;return Me[0][qe]=oe,Me[1][qe]=ae,Me[0][qe+1]=He,Me[1][qe+1]=Oe,Me[0].length=Me[1].length=qe+2,[Math.min(...Me[0]),Math.min(...Me[1]),Math.max(...Me[0]),Math.max(...Me[1])]}}e.Util=be;const _e=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,728,711,710,729,733,731,730,732,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8226,8224,8225,8230,8212,8211,402,8260,8249,8250,8722,8240,8222,8220,8221,8216,8217,8218,8482,64257,64258,321,338,352,376,381,305,322,339,353,382,0,8364];function ve(me){if(me[0]>="ï"){let ae;if(me[0]==="þ"&&me[1]==="ÿ"?ae="utf-16be":me[0]==="ÿ"&&me[1]==="þ"?ae="utf-16le":me[0]==="ï"&&me[1]==="»"&&me[2]==="¿"&&(ae="utf-8"),ae)try{const Ce=new TextDecoder(ae,{fatal:!0}),Se=de(me);return Ce.decode(Se)}catch(Ce){Y(`stringToPDFString: "${Ce}".`)}}const oe=[];for(let ae=0,Ce=me.length;ae<Ce;ae++){const Se=_e[me.charCodeAt(ae)];oe.push(Se?String.fromCharCode(Se):me.charAt(ae))}return oe.join("")}function ke(me){return decodeURIComponent(escape(me))}function Ee(me){return unescape(encodeURIComponent(me))}function Fe(me){return typeof me=="object"&&me?.byteLength!==void 0}function Pe(me,oe){if(me.length!==oe.length)return!1;for(let ae=0,Ce=me.length;ae<Ce;ae++)if(me[ae]!==oe[ae])return!1;return!0}function Ne(me=new Date){return[me.getUTCFullYear().toString(),(me.getUTCMonth()+1).toString().padStart(2,"0"),me.getUTCDate().toString().padStart(2,"0"),me.getUTCHours().toString().padStart(2,"0"),me.getUTCMinutes().toString().padStart(2,"0"),me.getUTCSeconds().toString().padStart(2,"0")].join("")}class Ie{#e=!1;constructor(){this.promise=new Promise((oe,ae)=>{this.resolve=Ce=>{this.#e=!0,oe(Ce)},this.reject=Ce=>{this.#e=!0,ae(Ce)}})}get settled(){return this.#e}}e.PromiseCapability=Ie;let Le=null,We=null;function Ue(me){return Le||(Le=/([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu,We=new Map([["ﬅ","ſt"]])),me.replaceAll(Le,(oe,ae,Ce)=>ae?ae.normalize("NFKC"):We.get(Ce))}},(__unused_webpack_module,exports,__w_pdfjs_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.build=exports.RenderTask=exports.PDFWorkerUtil=exports.PDFWorker=exports.PDFPageProxy=exports.PDFDocumentProxy=exports.PDFDocumentLoadingTask=exports.PDFDataRangeTransport=exports.LoopbackPort=exports.DefaultStandardFontDataFactory=exports.DefaultFilterFactory=exports.DefaultCanvasFactory=exports.DefaultCMapReaderFactory=void 0,exports.getDocument=getDocument,exports.version=void 0;var _util=__w_pdfjs_require__(1),_annotation_storage=__w_pdfjs_require__(3),_display_utils=__w_pdfjs_require__(6),_font_loader=__w_pdfjs_require__(9),_canvas=__w_pdfjs_require__(11),_worker_options=__w_pdfjs_require__(14),_is_node=__w_pdfjs_require__(10),_message_handler=__w_pdfjs_require__(15),_metadata=__w_pdfjs_require__(16),_optional_content_config=__w_pdfjs_require__(17),_transport_stream=__w_pdfjs_require__(18),_xfa_text=__w_pdfjs_require__(19);const DEFAULT_RANGE_CHUNK_SIZE=65536,RENDERING_CANCELLED_TIMEOUT=100,DELAYED_CLEANUP_TIMEOUT=5e3;let DefaultCanvasFactory=_display_utils.DOMCanvasFactory;exports.DefaultCanvasFactory=DefaultCanvasFactory;let DefaultCMapReaderFactory=_display_utils.DOMCMapReaderFactory;exports.DefaultCMapReaderFactory=DefaultCMapReaderFactory;let DefaultFilterFactory=_display_utils.DOMFilterFactory;exports.DefaultFilterFactory=DefaultFilterFactory;let DefaultStandardFontDataFactory=_display_utils.DOMStandardFontDataFactory;if(exports.DefaultStandardFontDataFactory=DefaultStandardFontDataFactory,_is_node.isNodeJS){const{NodeCanvasFactory:c,NodeCMapReaderFactory:e,NodeFilterFactory:t,NodeStandardFontDataFactory:s}=__w_pdfjs_require__(20);exports.DefaultCanvasFactory=DefaultCanvasFactory=c,exports.DefaultCMapReaderFactory=DefaultCMapReaderFactory=e,exports.DefaultFilterFactory=DefaultFilterFactory=t,exports.DefaultStandardFontDataFactory=DefaultStandardFontDataFactory=s}let createPDFNetworkStream;if(_is_node.isNodeJS){const{PDFNodeStream:c}=__w_pdfjs_require__(21);createPDFNetworkStream=e=>new c(e)}else{const{PDFNetworkStream:c}=__w_pdfjs_require__(24),{PDFFetchStream:e}=__w_pdfjs_require__(25);createPDFNetworkStream=t=>(0,_display_utils.isValidFetchUrl)(t.url)?new e(t):new c(t)}function getDocument(c){if(typeof c=="string"||c instanceof URL?c={url:c}:(0,_util.isArrayBuffer)(c)&&(c={data:c}),typeof c!="object")throw new Error("Invalid parameter in getDocument, need parameter object.");if(!c.url&&!c.data&&!c.range)throw new Error("Invalid parameter object: need either .data, .range or .url");const e=new PDFDocumentLoadingTask,{docId:t}=e,s=c.url?getUrlProp(c.url):null,r=c.data?getDataProp(c.data):null,o=c.httpHeaders||null,a=c.withCredentials===!0,f=c.password??null,m=c.range instanceof PDFDataRangeTransport?c.range:null,g=Number.isInteger(c.rangeChunkSize)&&c.rangeChunkSize>0?c.rangeChunkSize:DEFAULT_RANGE_CHUNK_SIZE;let p=c.worker instanceof _PDFWorker?c.worker:null;const y=c.verbosity,C=typeof c.docBaseUrl=="string"&&!(0,_display_utils.isDataScheme)(c.docBaseUrl)?c.docBaseUrl:null,A=typeof c.cMapUrl=="string"?c.cMapUrl:null,w=c.cMapPacked!==!1,_=c.CMapReaderFactory||DefaultCMapReaderFactory,E=typeof c.standardFontDataUrl=="string"?c.standardFontDataUrl:null,v=c.StandardFontDataFactory||DefaultStandardFontDataFactory,k=c.stopAtErrors!==!0,R=Number.isInteger(c.maxImageSize)&&c.maxImageSize>-1?c.maxImageSize:-1,L=c.isEvalSupported!==!1,B=typeof c.isOffscreenCanvasSupported=="boolean"?c.isOffscreenCanvasSupported:!_is_node.isNodeJS,X=Number.isInteger(c.canvasMaxAreaInBytes)?c.canvasMaxAreaInBytes:-1,U=typeof c.disableFontFace=="boolean"?c.disableFontFace:_is_node.isNodeJS,M=c.fontExtraProperties===!0,F=c.enableXfa===!0,$=c.ownerDocument||globalThis.document,ee=c.disableRange===!0,te=c.disableStream===!0,he=c.disableAutoFetch===!0,re=c.pdfBug===!0,pe=m?m.length:c.length??NaN,le=typeof c.useSystemFonts=="boolean"?c.useSystemFonts:!_is_node.isNodeJS&&!U,J=typeof c.useWorkerFetch=="boolean"?c.useWorkerFetch:_===_display_utils.DOMCMapReaderFactory&&v===_display_utils.DOMStandardFontDataFactory&&(0,_display_utils.isValidFetchUrl)(A,document.baseURI)&&(0,_display_utils.isValidFetchUrl)(E,document.baseURI),se=c.canvasFactory||new DefaultCanvasFactory({ownerDocument:$}),Y=c.filterFactory||new DefaultFilterFactory({docId:t,ownerDocument:$}),I=null;(0,_util.setVerbosityLevel)(y);const P={canvasFactory:se,filterFactory:Y};if(J||(P.cMapReaderFactory=new _({baseUrl:A,isCompressed:w}),P.standardFontDataFactory=new v({baseUrl:E})),!p){const b={verbosity:y,port:_worker_options.GlobalWorkerOptions.workerPort};p=b.port?_PDFWorker.fromPort(b):new _PDFWorker(b),e._worker=p}const O={docId:t,apiVersion:"3.6.172",data:r,password:f,disableAutoFetch:he,rangeChunkSize:g,length:pe,docBaseUrl:C,enableXfa:F,evaluatorOptions:{maxImageSize:R,disableFontFace:U,ignoreErrors:k,isEvalSupported:L,isOffscreenCanvasSupported:B,canvasMaxAreaInBytes:X,fontExtraProperties:M,useSystemFonts:le,cMapUrl:J?A:null,standardFontDataUrl:J?E:null}},q={ignoreErrors:k,isEvalSupported:L,disableFontFace:U,fontExtraProperties:M,enableXfa:F,ownerDocument:$,disableAutoFetch:he,pdfBug:re,styleElement:I};return p.promise.then(function(){if(e.destroyed)throw new Error("Loading aborted");const b=_fetchDocument(p,O),D=new Promise(function(N){let j;m?j=new _transport_stream.PDFDataTransportStream({length:pe,initialData:m.initialData,progressiveDone:m.progressiveDone,contentDispositionFilename:m.contentDispositionFilename,disableRange:ee,disableStream:te},m):r||(j=createPDFNetworkStream({url:s,length:pe,httpHeaders:o,withCredentials:a,rangeChunkSize:g,disableRange:ee,disableStream:te})),N(j)});return Promise.all([b,D]).then(function([N,j]){if(e.destroyed)throw new Error("Loading aborted");const V=new _message_handler.MessageHandler(t,N,p.port),Z=new WorkerTransport(V,e,j,q,P);e._transport=Z,V.send("Ready",null)})}).catch(e._capability.reject),e}async function _fetchDocument(c,e){if(c.destroyed)throw new Error("Worker was destroyed");const t=await c.messageHandler.sendWithPromise("GetDocRequest",e,e.data?[e.data.buffer]:null);if(c.destroyed)throw new Error("Worker was destroyed");return t}function getUrlProp(c){if(c instanceof URL)return c.href;try{return new URL(c,window.location).href}catch{if(_is_node.isNodeJS&&typeof c=="string")return c}throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.")}function getDataProp(c){if(_is_node.isNodeJS&&typeof Buffer<"u"&&c instanceof Buffer)return(0,_display_utils.deprecated)("Please provide binary data as `Uint8Array`, rather than `Buffer`."),new Uint8Array(c);if(c instanceof Uint8Array&&c.byteLength===c.buffer.byteLength)return c;if(typeof c=="string")return(0,_util.stringToBytes)(c);if(typeof c=="object"&&!isNaN(c?.length)||(0,_util.isArrayBuffer)(c))return new Uint8Array(c);throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.")}class PDFDocumentLoadingTask{static#e=0;constructor(){this._capability=new _util.PromiseCapability,this._transport=null,this._worker=null,this.docId=`d${PDFDocumentLoadingTask.#e++}`,this.destroyed=!1,this.onPassword=null,this.onProgress=null}get promise(){return this._capability.promise}async destroy(){this.destroyed=!0,await this._transport?.destroy(),this._transport=null,this._worker&&(this._worker.destroy(),this._worker=null)}}exports.PDFDocumentLoadingTask=PDFDocumentLoadingTask;class PDFDataRangeTransport{constructor(e,t,s=!1,r=null){this.length=e,this.initialData=t,this.progressiveDone=s,this.contentDispositionFilename=r,this._rangeListeners=[],this._progressListeners=[],this._progressiveReadListeners=[],this._progressiveDoneListeners=[],this._readyCapability=new _util.PromiseCapability}addRangeListener(e){this._rangeListeners.push(e)}addProgressListener(e){this._progressListeners.push(e)}addProgressiveReadListener(e){this._progressiveReadListeners.push(e)}addProgressiveDoneListener(e){this._progressiveDoneListeners.push(e)}onDataRange(e,t){for(const s of this._rangeListeners)s(e,t)}onDataProgress(e,t){this._readyCapability.promise.then(()=>{for(const s of this._progressListeners)s(e,t)})}onDataProgressiveRead(e){this._readyCapability.promise.then(()=>{for(const t of this._progressiveReadListeners)t(e)})}onDataProgressiveDone(){this._readyCapability.promise.then(()=>{for(const e of this._progressiveDoneListeners)e()})}transportReady(){this._readyCapability.resolve()}requestDataRange(e,t){(0,_util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange")}abort(){}}exports.PDFDataRangeTransport=PDFDataRangeTransport;class PDFDocumentProxy{constructor(e,t){this._pdfInfo=e,this._transport=t}get annotationStorage(){return this._transport.annotationStorage}get filterFactory(){return this._transport.filterFactory}get numPages(){return this._pdfInfo.numPages}get fingerprints(){return this._pdfInfo.fingerprints}get isPureXfa(){return(0,_util.shadow)(this,"isPureXfa",!!this._transport._htmlForXfa)}get allXfaHtml(){return this._transport._htmlForXfa}getPage(e){return this._transport.getPage(e)}getPageIndex(e){return this._transport.getPageIndex(e)}getDestinations(){return this._transport.getDestinations()}getDestination(e){return this._transport.getDestination(e)}getPageLabels(){return this._transport.getPageLabels()}getPageLayout(){return this._transport.getPageLayout()}getPageMode(){return this._transport.getPageMode()}getViewerPreferences(){return this._transport.getViewerPreferences()}getOpenAction(){return this._transport.getOpenAction()}getAttachments(){return this._transport.getAttachments()}getJavaScript(){return this._transport.getJavaScript()}getJSActions(){return this._transport.getDocJSActions()}getOutline(){return this._transport.getOutline()}getOptionalContentConfig(){return this._transport.getOptionalContentConfig()}getPermissions(){return this._transport.getPermissions()}getMetadata(){return this._transport.getMetadata()}getMarkInfo(){return this._transport.getMarkInfo()}getData(){return this._transport.getData()}saveDocument(){return this._transport.saveDocument()}getDownloadInfo(){return this._transport.downloadInfoCapability.promise}cleanup(e=!1){return this._transport.startCleanup(e||this.isPureXfa)}destroy(){return this.loadingTask.destroy()}get loadingParams(){return this._transport.loadingParams}get loadingTask(){return this._transport.loadingTask}getFieldObjects(){return this._transport.getFieldObjects()}hasJSActions(){return this._transport.hasJSActions()}getCalculationOrderIds(){return this._transport.getCalculationOrderIds()}}exports.PDFDocumentProxy=PDFDocumentProxy;class PDFPageProxy{#e=null;#t=!1;constructor(e,t,s,r=!1){this._pageIndex=e,this._pageInfo=t,this._transport=s,this._stats=r?new _display_utils.StatTimer:null,this._pdfBug=r,this.commonObjs=s.commonObjs,this.objs=new PDFObjects,this._maybeCleanupAfterRender=!1,this._intentStates=new Map,this.destroyed=!1}get pageNumber(){return this._pageIndex+1}get rotate(){return this._pageInfo.rotate}get ref(){return this._pageInfo.ref}get userUnit(){return this._pageInfo.userUnit}get view(){return this._pageInfo.view}getViewport({scale:e,rotation:t=this.rotate,offsetX:s=0,offsetY:r=0,dontFlip:o=!1}={}){return new _display_utils.PageViewport({viewBox:this.view,scale:e,rotation:t,offsetX:s,offsetY:r,dontFlip:o})}getAnnotations({intent:e="display"}={}){const t=this._transport.getRenderingIntent(e);return this._transport.getAnnotations(this._pageIndex,t.renderingIntent)}getJSActions(){return this._transport.getPageJSActions(this._pageIndex)}get isPureXfa(){return(0,_util.shadow)(this,"isPureXfa",!!this._transport._htmlForXfa)}async getXfa(){return this._transport._htmlForXfa?.children[this._pageIndex]||null}render({canvasContext:e,viewport:t,intent:s="display",annotationMode:r=_util.AnnotationMode.ENABLE,transform:o=null,background:a=null,optionalContentConfigPromise:f=null,annotationCanvasMap:m=null,pageColors:g=null,printAnnotationStorage:p=null}){if(arguments[0]?.canvasFactory)throw new Error("render no longer accepts the `canvasFactory`-option, please pass it to the `getDocument`-function instead.");this._stats?.time("Overall");const y=this._transport.getRenderingIntent(s,r,p);this.#t=!1,this.#n(),f||(f=this._transport.getOptionalContentConfig());let C=this._intentStates.get(y.cacheKey);C||(C=Object.create(null),this._intentStates.set(y.cacheKey,C)),C.streamReaderCancelTimeout&&(clearTimeout(C.streamReaderCancelTimeout),C.streamReaderCancelTimeout=null);const A=!!(y.renderingIntent&_util.RenderingIntentFlag.PRINT);C.displayReadyCapability||(C.displayReadyCapability=new _util.PromiseCapability,C.operatorList={fnArray:[],argsArray:[],lastChunk:!1,separateAnnots:null},this._stats?.time("Page Request"),this._pumpOperatorList(y));const w=v=>{C.renderTasks.delete(_),(this._maybeCleanupAfterRender||A)&&(this.#t=!0),this.#s(!A),v?(_.capability.reject(v),this._abortOperatorList({intentState:C,reason:v instanceof Error?v:new Error(v)})):_.capability.resolve(),this._stats?.timeEnd("Rendering"),this._stats?.timeEnd("Overall")},_=new InternalRenderTask({callback:w,params:{canvasContext:e,viewport:t,transform:o,background:a},objs:this.objs,commonObjs:this.commonObjs,annotationCanvasMap:m,operatorList:C.operatorList,pageIndex:this._pageIndex,canvasFactory:this._transport.canvasFactory,filterFactory:this._transport.filterFactory,useRequestAnimationFrame:!A,pdfBug:this._pdfBug,pageColors:g});(C.renderTasks||=new Set).add(_);const E=_.task;return Promise.all([C.displayReadyCapability.promise,f]).then(([v,k])=>{if(this.#t){w();return}this._stats?.time("Rendering"),_.initializeGraphics({transparency:v,optionalContentConfig:k}),_.operatorListChanged()}).catch(w),E}getOperatorList({intent:e="display",annotationMode:t=_util.AnnotationMode.ENABLE,printAnnotationStorage:s=null}={}){function r(){a.operatorList.lastChunk&&(a.opListReadCapability.resolve(a.operatorList),a.renderTasks.delete(f))}const o=this._transport.getRenderingIntent(e,t,s,!0);let a=this._intentStates.get(o.cacheKey);a||(a=Object.create(null),this._intentStates.set(o.cacheKey,a));let f;return a.opListReadCapability||(f=Object.create(null),f.operatorListChanged=r,a.opListReadCapability=new _util.PromiseCapability,(a.renderTasks||=new Set).add(f),a.operatorList={fnArray:[],argsArray:[],lastChunk:!1,separateAnnots:null},this._stats?.time("Page Request"),this._pumpOperatorList(o)),a.opListReadCapability.promise}streamTextContent({includeMarkedContent:e=!1,disableNormalization:t=!1}={}){return this._transport.messageHandler.sendWithStream("GetTextContent",{pageIndex:this._pageIndex,includeMarkedContent:e===!0,disableNormalization:t===!0},{highWaterMark:100,size(r){return r.items.length}})}getTextContent(e={}){if(this._transport._htmlForXfa)return this.getXfa().then(s=>_xfa_text.XfaText.textContent(s));const t=this.streamTextContent(e);return new Promise(function(s,r){function o(){a.read().then(function({value:m,done:g}){if(g){s(f);return}Object.assign(f.styles,m.styles),f.items.push(...m.items),o()},r)}const a=t.getReader(),f={items:[],styles:Object.create(null)};o()})}getStructTree(){return this._transport.getStructTree(this._pageIndex)}_destroy(){this.destroyed=!0;const e=[];for(const t of this._intentStates.values())if(this._abortOperatorList({intentState:t,reason:new Error("Page was destroyed."),force:!0}),!t.opListReadCapability)for(const s of t.renderTasks)e.push(s.completed),s.cancel();return this.objs.clear(),this.#t=!1,this.#n(),Promise.all(e)}cleanup(e=!1){this.#t=!0;const t=this.#s(!1);return e&&t&&(this._stats&&=new _display_utils.StatTimer),t}#s(e=!1){if(this.#n(),!this.#t)return!1;if(e)return this.#e=setTimeout(()=>{this.#e=null,this.#s(!1)},DELAYED_CLEANUP_TIMEOUT),!1;for(const{renderTasks:t,operatorList:s}of this._intentStates.values())if(t.size>0||!s.lastChunk)return!1;return this._intentStates.clear(),this.objs.clear(),this.#t=!1,!0}#n(){this.#e&&(clearTimeout(this.#e),this.#e=null)}_startRenderPage(e,t){const s=this._intentStates.get(t);s&&(this._stats?.timeEnd("Page Request"),s.displayReadyCapability?.resolve(e))}_renderPageChunk(e,t){for(let s=0,r=e.length;s<r;s++)t.operatorList.fnArray.push(e.fnArray[s]),t.operatorList.argsArray.push(e.argsArray[s]);t.operatorList.lastChunk=e.lastChunk,t.operatorList.separateAnnots=e.separateAnnots;for(const s of t.renderTasks)s.operatorListChanged();e.lastChunk&&this.#s(!0)}_pumpOperatorList({renderingIntent:e,cacheKey:t,annotationStorageMap:s}){const o=this._transport.messageHandler.sendWithStream("GetOperatorList",{pageIndex:this._pageIndex,intent:e,cacheKey:t,annotationStorage:s}).getReader(),a=this._intentStates.get(t);a.streamReader=o;const f=()=>{o.read().then(({value:m,done:g})=>{if(g){a.streamReader=null;return}this._transport.destroyed||(this._renderPageChunk(m,a),f())},m=>{if(a.streamReader=null,!this._transport.destroyed){if(a.operatorList){a.operatorList.lastChunk=!0;for(const g of a.renderTasks)g.operatorListChanged();this.#s(!0)}if(a.displayReadyCapability)a.displayReadyCapability.reject(m);else if(a.opListReadCapability)a.opListReadCapability.reject(m);else throw m}})};f()}_abortOperatorList({intentState:e,reason:t,force:s=!1}){if(e.streamReader){if(e.streamReaderCancelTimeout&&(clearTimeout(e.streamReaderCancelTimeout),e.streamReaderCancelTimeout=null),!s){if(e.renderTasks.size>0)return;if(t instanceof _display_utils.RenderingCancelledException){let r=RENDERING_CANCELLED_TIMEOUT;t.extraDelay>0&&t.extraDelay<1e3&&(r+=t.extraDelay),e.streamReaderCancelTimeout=setTimeout(()=>{e.streamReaderCancelTimeout=null,this._abortOperatorList({intentState:e,reason:t,force:!0})},r);return}}if(e.streamReader.cancel(new _util.AbortException(t.message)).catch(()=>{}),e.streamReader=null,!this._transport.destroyed){for(const[r,o]of this._intentStates)if(o===e){this._intentStates.delete(r);break}this.cleanup()}}}get stats(){return this._stats}}exports.PDFPageProxy=PDFPageProxy;class LoopbackPort{#e=new Set;#t=Promise.resolve();postMessage(e,t){const s={data:structuredClone(e,t?{transfer:t}:null)};this.#t.then(()=>{for(const r of this.#e)r.call(this,s)})}addEventListener(e,t){this.#e.add(t)}removeEventListener(e,t){this.#e.delete(t)}terminate(){this.#e.clear()}}exports.LoopbackPort=LoopbackPort;const PDFWorkerUtil={isWorkerDisabled:!1,fallbackWorkerSrc:null,fakeWorkerId:0};exports.PDFWorkerUtil=PDFWorkerUtil;{if(_is_node.isNodeJS&&typeof commonjsRequire=="function")PDFWorkerUtil.isWorkerDisabled=!0,PDFWorkerUtil.fallbackWorkerSrc="./pdf.worker.js";else if(typeof document=="object"){const c=document?.currentScript?.src;c&&(PDFWorkerUtil.fallbackWorkerSrc=c.replace(/(\.(?:min\.)?js)(\?.*)?$/i,".worker$1$2"))}PDFWorkerUtil.isSameOrigin=function(c,e){let t;try{if(t=new URL(c),!t.origin||t.origin==="null")return!1}catch{return!1}const s=new URL(e,t);return t.origin===s.origin},PDFWorkerUtil.createCDNWrapper=function(c){const e=`importScripts("${c}");`;return URL.createObjectURL(new Blob([e]))}}class _PDFWorker{static#workerPorts=new WeakMap;constructor({name:c=null,port:e=null,verbosity:t=(0,_util.getVerbosityLevel)()}={}){if(e&&_PDFWorker.#workerPorts.has(e))throw new Error("Cannot use more than one PDFWorker per port.");if(this.name=c,this.destroyed=!1,this.verbosity=t,this._readyCapability=new _util.PromiseCapability,this._port=null,this._webWorker=null,this._messageHandler=null,e){_PDFWorker.#workerPorts.set(e,this),this._initializeFromPort(e);return}this._initialize()}get promise(){return this._readyCapability.promise}get port(){return this._port}get messageHandler(){return this._messageHandler}_initializeFromPort(c){this._port=c,this._messageHandler=new _message_handler.MessageHandler("main","worker",c),this._messageHandler.on("ready",function(){}),this._readyCapability.resolve(),this._messageHandler.send("configure",{verbosity:this.verbosity})}_initialize(){if(!PDFWorkerUtil.isWorkerDisabled&&!_PDFWorker._mainThreadWorkerMessageHandler){let{workerSrc:c}=_PDFWorker;try{PDFWorkerUtil.isSameOrigin(window.location.href,c)||(c=PDFWorkerUtil.createCDNWrapper(new URL(c,window.location).href));const e=new Worker(c),t=new _message_handler.MessageHandler("main","worker",e),s=()=>{e.removeEventListener("error",r),t.destroy(),e.terminate(),this.destroyed?this._readyCapability.reject(new Error("Worker was destroyed")):this._setupFakeWorker()},r=()=>{this._webWorker||s()};e.addEventListener("error",r),t.on("test",a=>{if(e.removeEventListener("error",r),this.destroyed){s();return}a?(this._messageHandler=t,this._port=e,this._webWorker=e,this._readyCapability.resolve(),t.send("configure",{verbosity:this.verbosity})):(this._setupFakeWorker(),t.destroy(),e.terminate())}),t.on("ready",a=>{if(e.removeEventListener("error",r),this.destroyed){s();return}try{o()}catch{this._setupFakeWorker()}});const o=()=>{const a=new Uint8Array;t.send("test",a,[a.buffer])};o();return}catch{(0,_util.info)("The worker has been disabled.")}}this._setupFakeWorker()}_setupFakeWorker(){PDFWorkerUtil.isWorkerDisabled||((0,_util.warn)("Setting up fake worker."),PDFWorkerUtil.isWorkerDisabled=!0),_PDFWorker._setupFakeWorkerGlobal.then(c=>{if(this.destroyed){this._readyCapability.reject(new Error("Worker was destroyed"));return}const e=new LoopbackPort;this._port=e;const t=`fake${PDFWorkerUtil.fakeWorkerId++}`,s=new _message_handler.MessageHandler(t+"_worker",t,e);c.setup(s,e);const r=new _message_handler.MessageHandler(t,t+"_worker",e);this._messageHandler=r,this._readyCapability.resolve(),r.send("configure",{verbosity:this.verbosity})}).catch(c=>{this._readyCapability.reject(new Error(`Setting up fake worker failed: "${c.message}".`))})}destroy(){this.destroyed=!0,this._webWorker&&(this._webWorker.terminate(),this._webWorker=null),_PDFWorker.#workerPorts.delete(this._port),this._port=null,this._messageHandler&&(this._messageHandler.destroy(),this._messageHandler=null)}static fromPort(c){if(!c?.port)throw new Error("PDFWorker.fromPort - invalid method signature.");return this.#workerPorts.has(c.port)?this.#workerPorts.get(c.port):new _PDFWorker(c)}static get workerSrc(){if(_worker_options.GlobalWorkerOptions.workerSrc)return _worker_options.GlobalWorkerOptions.workerSrc;if(PDFWorkerUtil.fallbackWorkerSrc!==null)return _is_node.isNodeJS||(0,_display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.'),PDFWorkerUtil.fallbackWorkerSrc;throw new Error('No "GlobalWorkerOptions.workerSrc" specified.')}static get _mainThreadWorkerMessageHandler(){try{return globalThis.pdfjsWorker?.WorkerMessageHandler||null}catch{return null}}static get _setupFakeWorkerGlobal(){const loader=async()=>{const mainWorkerMessageHandler=this._mainThreadWorkerMessageHandler;if(mainWorkerMessageHandler)return mainWorkerMessageHandler;if(_is_node.isNodeJS&&typeof commonjsRequire=="function"){const worker=eval("require")(this.workerSrc);return worker.WorkerMessageHandler}return await(0,_display_utils.loadScript)(this.workerSrc),window.pdfjsWorker.WorkerMessageHandler};return(0,_util.shadow)(this,"_setupFakeWorkerGlobal",loader())}}exports.PDFWorker=_PDFWorker;class WorkerTransport{#e=new Map;#t=new Map;#s=new Map;constructor(e,t,s,r,o){this.messageHandler=e,this.loadingTask=t,this.commonObjs=new PDFObjects,this.fontLoader=new _font_loader.FontLoader({ownerDocument:r.ownerDocument,styleElement:r.styleElement}),this._params=r,this.canvasFactory=o.canvasFactory,this.filterFactory=o.filterFactory,this.cMapReaderFactory=o.cMapReaderFactory,this.standardFontDataFactory=o.standardFontDataFactory,this.destroyed=!1,this.destroyCapability=null,this._passwordCapability=null,this._networkStream=s,this._fullReader=null,this._lastProgress=null,this.downloadInfoCapability=new _util.PromiseCapability,this.setupMessageHandler()}#n(e,t=null){const s=this.#e.get(e);if(s)return s;const r=this.messageHandler.sendWithPromise(e,t);return this.#e.set(e,r),r}get annotationStorage(){return(0,_util.shadow)(this,"annotationStorage",new _annotation_storage.AnnotationStorage)}getRenderingIntent(e,t=_util.AnnotationMode.ENABLE,s=null,r=!1){let o=_util.RenderingIntentFlag.DISPLAY,a=null;switch(e){case"any":o=_util.RenderingIntentFlag.ANY;break;case"display":break;case"print":o=_util.RenderingIntentFlag.PRINT;break;default:(0,_util.warn)(`getRenderingIntent - invalid intent: ${e}`)}switch(t){case _util.AnnotationMode.DISABLE:o+=_util.RenderingIntentFlag.ANNOTATIONS_DISABLE;break;case _util.AnnotationMode.ENABLE:break;case _util.AnnotationMode.ENABLE_FORMS:o+=_util.RenderingIntentFlag.ANNOTATIONS_FORMS;break;case _util.AnnotationMode.ENABLE_STORAGE:o+=_util.RenderingIntentFlag.ANNOTATIONS_STORAGE,a=(o&_util.RenderingIntentFlag.PRINT&&s instanceof _annotation_storage.PrintAnnotationStorage?s:this.annotationStorage).serializable;break;default:(0,_util.warn)(`getRenderingIntent - invalid annotationMode: ${t}`)}return r&&(o+=_util.RenderingIntentFlag.OPLIST),{renderingIntent:o,cacheKey:`${o}_${_annotation_storage.AnnotationStorage.getHash(a)}`,annotationStorageMap:a}}destroy(){if(this.destroyCapability)return this.destroyCapability.promise;this.destroyed=!0,this.destroyCapability=new _util.PromiseCapability,this._passwordCapability&&this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"));const e=[];for(const s of this.#t.values())e.push(s._destroy());this.#t.clear(),this.#s.clear(),this.hasOwnProperty("annotationStorage")&&this.annotationStorage.resetModified();const t=this.messageHandler.sendWithPromise("Terminate",null);return e.push(t),Promise.all(e).then(()=>{this.commonObjs.clear(),this.fontLoader.clear(),this.#e.clear(),this.filterFactory.destroy(),this._networkStream&&this._networkStream.cancelAllRequests(new _util.AbortException("Worker was terminated.")),this.messageHandler&&(this.messageHandler.destroy(),this.messageHandler=null),this.destroyCapability.resolve()},this.destroyCapability.reject),this.destroyCapability.promise}setupMessageHandler(){const{messageHandler:e,loadingTask:t}=this;e.on("GetReader",(s,r)=>{(0,_util.assert)(this._networkStream,"GetReader - no `IPDFStream` instance available."),this._fullReader=this._networkStream.getFullReader(),this._fullReader.onProgress=o=>{this._lastProgress={loaded:o.loaded,total:o.total}},r.onPull=()=>{this._fullReader.read().then(function({value:o,done:a}){if(a){r.close();return}(0,_util.assert)(o instanceof ArrayBuffer,"GetReader - expected an ArrayBuffer."),r.enqueue(new Uint8Array(o),1,[o])}).catch(o=>{r.error(o)})},r.onCancel=o=>{this._fullReader.cancel(o),r.ready.catch(a=>{if(!this.destroyed)throw a})}}),e.on("ReaderHeadersReady",s=>{const r=new _util.PromiseCapability,o=this._fullReader;return o.headersReady.then(()=>{(!o.isStreamingSupported||!o.isRangeSupported)&&(this._lastProgress&&t.onProgress?.(this._lastProgress),o.onProgress=a=>{t.onProgress?.({loaded:a.loaded,total:a.total})}),r.resolve({isStreamingSupported:o.isStreamingSupported,isRangeSupported:o.isRangeSupported,contentLength:o.contentLength})},r.reject),r.promise}),e.on("GetRangeReader",(s,r)=>{(0,_util.assert)(this._networkStream,"GetRangeReader - no `IPDFStream` instance available.");const o=this._networkStream.getRangeReader(s.begin,s.end);if(!o){r.close();return}r.onPull=()=>{o.read().then(function({value:a,done:f}){if(f){r.close();return}(0,_util.assert)(a instanceof ArrayBuffer,"GetRangeReader - expected an ArrayBuffer."),r.enqueue(new Uint8Array(a),1,[a])}).catch(a=>{r.error(a)})},r.onCancel=a=>{o.cancel(a),r.ready.catch(f=>{if(!this.destroyed)throw f})}}),e.on("GetDoc",({pdfInfo:s})=>{this._numPages=s.numPages,this._htmlForXfa=s.htmlForXfa,delete s.htmlForXfa,t._capability.resolve(new PDFDocumentProxy(s,this))}),e.on("DocException",function(s){let r;switch(s.name){case"PasswordException":r=new _util.PasswordException(s.message,s.code);break;case"InvalidPDFException":r=new _util.InvalidPDFException(s.message);break;case"MissingPDFException":r=new _util.MissingPDFException(s.message);break;case"UnexpectedResponseException":r=new _util.UnexpectedResponseException(s.message,s.status);break;case"UnknownErrorException":r=new _util.UnknownErrorException(s.message,s.details);break;default:(0,_util.unreachable)("DocException - expected a valid Error.")}t._capability.reject(r)}),e.on("PasswordRequest",s=>{if(this._passwordCapability=new _util.PromiseCapability,t.onPassword){const r=o=>{o instanceof Error?this._passwordCapability.reject(o):this._passwordCapability.resolve({password:o})};try{t.onPassword(r,s.code)}catch(o){this._passwordCapability.reject(o)}}else this._passwordCapability.reject(new _util.PasswordException(s.message,s.code));return this._passwordCapability.promise}),e.on("DataLoaded",s=>{t.onProgress?.({loaded:s.length,total:s.length}),this.downloadInfoCapability.resolve(s)}),e.on("StartRenderPage",s=>{if(this.destroyed)return;this.#t.get(s.pageIndex)._startRenderPage(s.transparency,s.cacheKey)}),e.on("commonobj",([s,r,o])=>{if(!this.destroyed&&!this.commonObjs.has(s))switch(r){case"Font":const a=this._params;if("error"in o){const g=o.error;(0,_util.warn)(`Error during font loading: ${g}`),this.commonObjs.resolve(s,g);break}const f=a.pdfBug&&globalThis.FontInspector?.enabled?(g,p)=>globalThis.FontInspector.fontAdded(g,p):null,m=new _font_loader.FontFaceObject(o,{isEvalSupported:a.isEvalSupported,disableFontFace:a.disableFontFace,ignoreErrors:a.ignoreErrors,inspectFont:f});this.fontLoader.bind(m).catch(g=>e.sendWithPromise("FontFallback",{id:s})).finally(()=>{!a.fontExtraProperties&&m.data&&(m.data=null),this.commonObjs.resolve(s,m)});break;case"FontPath":case"Image":case"Pattern":this.commonObjs.resolve(s,o);break;default:throw new Error(`Got unknown common object type ${r}`)}}),e.on("obj",([s,r,o,a])=>{if(this.destroyed)return;const f=this.#t.get(r);if(!f.objs.has(s))switch(o){case"Image":if(f.objs.resolve(s,a),a){let m;if(a.bitmap){const{width:g,height:p}=a;m=g*p*4}else m=a.data?.length||0;m>_util.MAX_IMAGE_SIZE_TO_CACHE&&(f._maybeCleanupAfterRender=!0)}break;case"Pattern":f.objs.resolve(s,a);break;default:throw new Error(`Got unknown object type ${o}`)}}),e.on("DocProgress",s=>{this.destroyed||t.onProgress?.({loaded:s.loaded,total:s.total})}),e.on("FetchBuiltInCMap",s=>this.destroyed?Promise.reject(new Error("Worker was destroyed.")):this.cMapReaderFactory?this.cMapReaderFactory.fetch(s):Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."))),e.on("FetchStandardFontData",s=>this.destroyed?Promise.reject(new Error("Worker was destroyed.")):this.standardFontDataFactory?this.standardFontDataFactory.fetch(s):Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.")))}getData(){return this.messageHandler.sendWithPromise("GetData",null)}saveDocument(){return this.annotationStorage.size<=0&&(0,_util.warn)("saveDocument called while `annotationStorage` is empty, please use the getData-method instead."),this.messageHandler.sendWithPromise("SaveDocument",{isPureXfa:!!this._htmlForXfa,numPages:this._numPages,annotationStorage:this.annotationStorage.serializable,filename:this._fullReader?.filename??null}).finally(()=>{this.annotationStorage.resetModified()})}getPage(e){if(!Number.isInteger(e)||e<=0||e>this._numPages)return Promise.reject(new Error("Invalid page request."));const t=e-1,s=this.#s.get(t);if(s)return s;const r=this.messageHandler.sendWithPromise("GetPage",{pageIndex:t}).then(o=>{if(this.destroyed)throw new Error("Transport destroyed");const a=new PDFPageProxy(t,o,this,this._params.pdfBug);return this.#t.set(t,a),a});return this.#s.set(t,r),r}getPageIndex(e){return typeof e!="object"||e===null||!Number.isInteger(e.num)||e.num<0||!Number.isInteger(e.gen)||e.gen<0?Promise.reject(new Error("Invalid pageIndex request.")):this.messageHandler.sendWithPromise("GetPageIndex",{num:e.num,gen:e.gen})}getAnnotations(e,t){return this.messageHandler.sendWithPromise("GetAnnotations",{pageIndex:e,intent:t})}getFieldObjects(){return this.#n("GetFieldObjects")}hasJSActions(){return this.#n("HasJSActions")}getCalculationOrderIds(){return this.messageHandler.sendWithPromise("GetCalculationOrderIds",null)}getDestinations(){return this.messageHandler.sendWithPromise("GetDestinations",null)}getDestination(e){return typeof e!="string"?Promise.reject(new Error("Invalid destination request.")):this.messageHandler.sendWithPromise("GetDestination",{id:e})}getPageLabels(){return this.messageHandler.sendWithPromise("GetPageLabels",null)}getPageLayout(){return this.messageHandler.sendWithPromise("GetPageLayout",null)}getPageMode(){return this.messageHandler.sendWithPromise("GetPageMode",null)}getViewerPreferences(){return this.messageHandler.sendWithPromise("GetViewerPreferences",null)}getOpenAction(){return this.messageHandler.sendWithPromise("GetOpenAction",null)}getAttachments(){return this.messageHandler.sendWithPromise("GetAttachments",null)}getJavaScript(){return this.messageHandler.sendWithPromise("GetJavaScript",null)}getDocJSActions(){return this.messageHandler.sendWithPromise("GetDocJSActions",null)}getPageJSActions(e){return this.messageHandler.sendWithPromise("GetPageJSActions",{pageIndex:e})}getStructTree(e){return this.messageHandler.sendWithPromise("GetStructTree",{pageIndex:e})}getOutline(){return this.messageHandler.sendWithPromise("GetOutline",null)}getOptionalContentConfig(){return this.messageHandler.sendWithPromise("GetOptionalContentConfig",null).then(e=>new _optional_content_config.OptionalContentConfig(e))}getPermissions(){return this.messageHandler.sendWithPromise("GetPermissions",null)}getMetadata(){const e="GetMetadata",t=this.#e.get(e);if(t)return t;const s=this.messageHandler.sendWithPromise(e,null).then(r=>({info:r[0],metadata:r[1]?new _metadata.Metadata(r[1]):null,contentDispositionFilename:this._fullReader?.filename??null,contentLength:this._fullReader?.contentLength??null}));return this.#e.set(e,s),s}getMarkInfo(){return this.messageHandler.sendWithPromise("GetMarkInfo",null)}async startCleanup(e=!1){if(!this.destroyed){await this.messageHandler.sendWithPromise("Cleanup",null);for(const t of this.#t.values())if(!t.cleanup())throw new Error(`startCleanup: Page ${t.pageNumber} is currently rendering.`);this.commonObjs.clear(),e||this.fontLoader.clear(),this.#e.clear(),this.filterFactory.destroy(!0)}}get loadingParams(){const{disableAutoFetch:e,enableXfa:t}=this._params;return(0,_util.shadow)(this,"loadingParams",{disableAutoFetch:e,enableXfa:t})}}class PDFObjects{#e=Object.create(null);#t(e){const t=this.#e[e];return t||(this.#e[e]={capability:new _util.PromiseCapability,data:null})}get(e,t=null){if(t){const r=this.#t(e);return r.capability.promise.then(()=>t(r.data)),null}const s=this.#e[e];if(!s?.capability.settled)throw new Error(`Requesting object that isn't resolved yet ${e}.`);return s.data}has(e){return this.#e[e]?.capability.settled||!1}resolve(e,t=null){const s=this.#t(e);s.data=t,s.capability.resolve()}clear(){for(const e in this.#e){const{data:t}=this.#e[e];t?.bitmap?.close()}this.#e=Object.create(null)}}class RenderTask{#e=null;constructor(e){this.#e=e,this.onContinue=null}get promise(){return this.#e.capability.promise}cancel(e=0){this.#e.cancel(null,e)}get separateAnnots(){const{separateAnnots:e}=this.#e.operatorList;if(!e)return!1;const{annotationCanvasMap:t}=this.#e;return e.form||e.canvas&&t?.size>0}}exports.RenderTask=RenderTask;class InternalRenderTask{static#e=new WeakSet;constructor({callback:e,params:t,objs:s,commonObjs:r,annotationCanvasMap:o,operatorList:a,pageIndex:f,canvasFactory:m,filterFactory:g,useRequestAnimationFrame:p=!1,pdfBug:y=!1,pageColors:C=null}){this.callback=e,this.params=t,this.objs=s,this.commonObjs=r,this.annotationCanvasMap=o,this.operatorListIdx=null,this.operatorList=a,this._pageIndex=f,this.canvasFactory=m,this.filterFactory=g,this._pdfBug=y,this.pageColors=C,this.running=!1,this.graphicsReadyCallback=null,this.graphicsReady=!1,this._useRequestAnimationFrame=p===!0&&typeof window<"u",this.cancelled=!1,this.capability=new _util.PromiseCapability,this.task=new RenderTask(this),this._cancelBound=this.cancel.bind(this),this._continueBound=this._continue.bind(this),this._scheduleNextBound=this._scheduleNext.bind(this),this._nextBound=this._next.bind(this),this._canvas=t.canvasContext.canvas}get completed(){return this.capability.promise.catch(function(){})}initializeGraphics({transparency:e=!1,optionalContentConfig:t}){if(this.cancelled)return;if(this._canvas){if(InternalRenderTask.#e.has(this._canvas))throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");InternalRenderTask.#e.add(this._canvas)}this._pdfBug&&globalThis.StepperManager?.enabled&&(this.stepper=globalThis.StepperManager.create(this._pageIndex),this.stepper.init(this.operatorList),this.stepper.nextBreakPoint=this.stepper.getNextBreakPoint());const{canvasContext:s,viewport:r,transform:o,background:a}=this.params;this.gfx=new _canvas.CanvasGraphics(s,this.commonObjs,this.objs,this.canvasFactory,this.filterFactory,{optionalContentConfig:t},this.annotationCanvasMap,this.pageColors),this.gfx.beginDrawing({transform:o,viewport:r,transparency:e,background:a}),this.operatorListIdx=0,this.graphicsReady=!0,this.graphicsReadyCallback?.()}cancel(e=null,t=0){this.running=!1,this.cancelled=!0,this.gfx?.endDrawing(),this._canvas&&InternalRenderTask.#e.delete(this._canvas),this.callback(e||new _display_utils.RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex+1}`,"canvas",t))}operatorListChanged(){if(!this.graphicsReady){this.graphicsReadyCallback||=this._continueBound;return}this.stepper?.updateOperatorList(this.operatorList),!this.running&&this._continue()}_continue(){this.running=!0,!this.cancelled&&(this.task.onContinue?this.task.onContinue(this._scheduleNextBound):this._scheduleNext())}_scheduleNext(){this._useRequestAnimationFrame?window.requestAnimationFrame(()=>{this._nextBound().catch(this._cancelBound)}):Promise.resolve().then(this._nextBound).catch(this._cancelBound)}async _next(){this.cancelled||(this.operatorListIdx=this.gfx.executeOperatorList(this.operatorList,this.operatorListIdx,this._continueBound,this.stepper),this.operatorListIdx===this.operatorList.argsArray.length&&(this.running=!1,this.operatorList.lastChunk&&(this.gfx.endDrawing(this.pageColors),this._canvas&&InternalRenderTask.#e.delete(this._canvas),this.callback())))}}const version="3.6.172";exports.version=version;const build="4d3dfe254";exports.build=build},(c,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.PrintAnnotationStorage=e.AnnotationStorage=void 0;var s=t(1),r=t(4),o=t(8);class a{#e=!1;#t=new Map;constructor(){this.onSetModified=null,this.onResetModified=null,this.onAnnotationEditor=null}getValue(g,p){const y=this.#t.get(g);return y===void 0?p:Object.assign(p,y)}getRawValue(g){return this.#t.get(g)}remove(g){if(this.#t.delete(g),this.#t.size===0&&this.resetModified(),typeof this.onAnnotationEditor=="function"){for(const p of this.#t.values())if(p instanceof r.AnnotationEditor)return;this.onAnnotationEditor(null)}}setValue(g,p){const y=this.#t.get(g);let C=!1;if(y!==void 0)for(const[A,w]of Object.entries(p))y[A]!==w&&(C=!0,y[A]=w);else C=!0,this.#t.set(g,p);C&&this.#s(),p instanceof r.AnnotationEditor&&typeof this.onAnnotationEditor=="function"&&this.onAnnotationEditor(p.constructor._type)}has(g){return this.#t.has(g)}getAll(){return this.#t.size>0?(0,s.objectFromMap)(this.#t):null}setAll(g){for(const[p,y]of Object.entries(g))this.setValue(p,y)}get size(){return this.#t.size}#s(){this.#e||(this.#e=!0,typeof this.onSetModified=="function"&&this.onSetModified())}resetModified(){this.#e&&(this.#e=!1,typeof this.onResetModified=="function"&&this.onResetModified())}get print(){return new f(this)}get serializable(){if(this.#t.size===0)return null;const g=new Map;for(const[p,y]of this.#t){const C=y instanceof r.AnnotationEditor?y.serialize():y;C&&g.set(p,C)}return g}static getHash(g){if(!g)return"";const p=new o.MurmurHash3_64;for(const[y,C]of g)p.update(`${y}:${JSON.stringify(C)}`);return p.hexdigest()}}e.AnnotationStorage=a;class f extends a{#e=null;constructor(g){super(),this.#e=structuredClone(g.serializable)}get print(){(0,s.unreachable)("Should not call PrintAnnotationStorage.print")}get serializable(){return this.#e}}e.PrintAnnotationStorage=f},(c,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.AnnotationEditor=void 0;var s=t(5),r=t(1);class o{#e=this.focusin.bind(this);#t=this.focusout.bind(this);#s=!1;#n=!1;#r=!1;_uiManager=null;#d=o._zIndex++;static _colorManager=new s.ColorManager;static _zIndex=1;constructor(f){this.constructor===o&&(0,r.unreachable)("Cannot initialize AnnotationEditor."),this.parent=f.parent,this.id=f.id,this.width=this.height=null,this.pageIndex=f.parent.pageIndex,this.name=f.name,this.div=null,this._uiManager=f.uiManager;const{rotation:m,rawDims:{pageWidth:g,pageHeight:p,pageX:y,pageY:C}}=this.parent.viewport;this.rotation=m,this.pageRotation=(360+m-this._uiManager.viewParameters.rotation)%360,this.pageDimensions=[g,p],this.pageTranslation=[y,C];const[A,w]=this.parentDimensions;this.x=f.x/A,this.y=f.y/w,this.isAttachedToDOM=!1}static get _defaultLineColor(){return(0,r.shadow)(this,"_defaultLineColor",this._colorManager.getHexCode("CanvasText"))}addCommands(f){this._uiManager.addCommands(f)}get currentLayer(){return this._uiManager.currentLayer}setInBackground(){this.div.style.zIndex=0}setInForeground(){this.div.style.zIndex=this.#d}setParent(f){f!==null&&(this.pageIndex=f.pageIndex,this.pageDimensions=f.pageDimensions),this.parent=f}focusin(f){this.#s?this.#s=!1:this.parent.setSelected(this)}focusout(f){!this.isAttachedToDOM||f.relatedTarget?.closest(`#${this.id}`)||(f.preventDefault(),this.parent?.isMultipleSelection||this.commitOrRemove())}commitOrRemove(){this.isEmpty()?this.remove():this.commit()}commit(){this.addToAnnotationStorage()}addToAnnotationStorage(){this._uiManager.addToAnnotationStorage(this)}dragstart(f){const m=this.parent.div.getBoundingClientRect();this.startX=f.clientX-m.x,this.startY=f.clientY-m.y,f.dataTransfer.setData("text/plain",this.id),f.dataTransfer.effectAllowed="move"}setAt(f,m,g,p){const[y,C]=this.parentDimensions;[g,p]=this.screenToPageTranslation(g,p),this.x=(f+g)/y,this.y=(m+p)/C,this.div.style.left=`${100*this.x}%`,this.div.style.top=`${100*this.y}%`}translate(f,m){const[g,p]=this.parentDimensions;[f,m]=this.screenToPageTranslation(f,m),this.x+=f/g,this.y+=m/p,this.div.style.left=`${100*this.x}%`,this.div.style.top=`${100*this.y}%`}screenToPageTranslation(f,m){switch(this.parentRotation){case 90:return[m,-f];case 180:return[-f,-m];case 270:return[-m,f];default:return[f,m]}}get parentScale(){return this._uiManager.viewParameters.realScale}get parentRotation(){return(this._uiManager.viewParameters.rotation+this.pageRotation)%360}get parentDimensions(){const{realScale:f}=this._uiManager.viewParameters,[m,g]=this.pageDimensions;return[m*f,g*f]}setDims(f,m){const[g,p]=this.parentDimensions;this.div.style.width=`${100*f/g}%`,this.div.style.height=`${100*m/p}%`}fixDims(){const{style:f}=this.div,{height:m,width:g}=f,p=g.endsWith("%"),y=m.endsWith("%");if(p&&y)return;const[C,A]=this.parentDimensions;p||(f.width=`${100*parseFloat(g)/C}%`),y||(f.height=`${100*parseFloat(m)/A}%`)}getInitialTranslation(){return[0,0]}render(){this.div=document.createElement("div"),this.div.setAttribute("data-editor-rotation",(360-this.rotation)%360),this.div.className=this.name,this.div.setAttribute("id",this.id),this.div.setAttribute("tabIndex",0),this.setInForeground(),this.div.addEventListener("focusin",this.#e),this.div.addEventListener("focusout",this.#t);const[f,m]=this.getInitialTranslation();return this.translate(f,m),(0,s.bindEvents)(this,this.div,["dragstart","pointerdown"]),this.div}pointerdown(f){const{isMac:m}=r.FeatureTest.platform;if(f.button!==0||f.ctrlKey&&m){f.preventDefault();return}f.ctrlKey&&!m||f.shiftKey||f.metaKey&&m?this.parent.toggleSelected(this):this.parent.setSelected(this),this.#s=!0}getRect(f,m){const g=this.parentScale,[p,y]=this.pageDimensions,[C,A]=this.pageTranslation,w=f/g,_=m/g,E=this.x*p,v=this.y*y,k=this.width*p,R=this.height*y;switch(this.rotation){case 0:return[E+w+C,y-v-_-R+A,E+w+k+C,y-v-_+A];case 90:return[E+_+C,y-v+w+A,E+_+R+C,y-v+w+k+A];case 180:return[E-w-k+C,y-v+_+A,E-w+C,y-v+_+R+A];case 270:return[E-_-R+C,y-v-w-k+A,E-_+C,y-v-w+A];default:throw new Error("Invalid rotation")}}getRectInCurrentCoords(f,m){const[g,p,y,C]=f,A=y-g,w=C-p;switch(this.rotation){case 0:return[g,m-C,A,w];case 90:return[g,m-p,w,A];case 180:return[y,m-p,A,w];case 270:return[y,m-C,w,A];default:throw new Error("Invalid rotation")}}onceAdded(){}isEmpty(){return!1}enableEditMode(){this.#r=!0}disableEditMode(){this.#r=!1}isInEditMode(){return this.#r}shouldGetKeyboardEvents(){return!1}needsToBeRebuilt(){return this.div&&!this.isAttachedToDOM}rebuild(){this.div?.addEventListener("focusin",this.#e)}serialize(){(0,r.unreachable)("An editor must be serializable")}static deserialize(f,m,g){const p=new this.prototype.constructor({parent:m,id:m.getNextId(),uiManager:g});p.rotation=f.rotation;const[y,C]=p.pageDimensions,[A,w,_,E]=p.getRectInCurrentCoords(f.rect,C);return p.x=A/y,p.y=w/C,p.width=_/y,p.height=E/C,p}remove(){this.div.removeEventListener("focusin",this.#e),this.div.removeEventListener("focusout",this.#t),this.isEmpty()||this.commit(),this.parent.remove(this)}select(){this.div?.classList.add("selectedEditor")}unselect(){this.div?.classList.remove("selectedEditor")}updateParams(f,m){}disableEditing(){}enableEditing(){}get propertiesToUpdate(){return{}}get contentDiv(){return this.div}get isEditing(){return this.#n}set isEditing(f){this.#n=f,f?(this.parent.setSelected(this),this.parent.setActiveEditor(this)):this.parent.setActiveEditor(null)}}e.AnnotationEditor=o},(c,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.KeyboardManager=e.CommandManager=e.ColorManager=e.AnnotationEditorUIManager=void 0,e.bindEvents=o,e.opacityToHex=a;var s=t(1),r=t(6);function o(C,A,w){for(const _ of w)A.addEventListener(_,C[_].bind(C))}function a(C){return Math.round(Math.min(255,Math.max(1,255*C))).toString(16).padStart(2,"0")}class f{#e=0;getId(){return`${s.AnnotationEditorPrefix}${this.#e++}`}}class m{#e=[];#t=!1;#s;#n=-1;constructor(A=128){this.#s=A}add({cmd:A,undo:w,mustExec:_,type:E=NaN,overwriteIfSameType:v=!1,keepUndo:k=!1}){if(_&&A(),this.#t)return;const R={cmd:A,undo:w,type:E};if(this.#n===-1){this.#e.length>0&&(this.#e.length=0),this.#n=0,this.#e.push(R);return}if(v&&this.#e[this.#n].type===E){k&&(R.undo=this.#e[this.#n].undo),this.#e[this.#n]=R;return}const L=this.#n+1;L===this.#s?this.#e.splice(0,1):(this.#n=L,L<this.#e.length&&this.#e.splice(L)),this.#e.push(R)}undo(){this.#n!==-1&&(this.#t=!0,this.#e[this.#n].undo(),this.#t=!1,this.#n-=1)}redo(){this.#n<this.#e.length-1&&(this.#n+=1,this.#t=!0,this.#e[this.#n].cmd(),this.#t=!1)}hasSomethingToUndo(){return this.#n!==-1}hasSomethingToRedo(){return this.#n<this.#e.length-1}destroy(){this.#e=null}}e.CommandManager=m;class g{constructor(A){this.buffer=[],this.callbacks=new Map,this.allKeys=new Set;const{isMac:w}=s.FeatureTest.platform;for(const[_,E]of A)for(const v of _){const k=v.startsWith("mac+");w&&k?(this.callbacks.set(v.slice(4),E),this.allKeys.add(v.split("+").at(-1))):!w&&!k&&(this.callbacks.set(v,E),this.allKeys.add(v.split("+").at(-1)))}}#e(A){A.altKey&&this.buffer.push("alt"),A.ctrlKey&&this.buffer.push("ctrl"),A.metaKey&&this.buffer.push("meta"),A.shiftKey&&this.buffer.push("shift"),this.buffer.push(A.key);const w=this.buffer.join("+");return this.buffer.length=0,w}exec(A,w){if(!this.allKeys.has(w.key))return;const _=this.callbacks.get(this.#e(w));_&&(_.bind(A)(),w.stopPropagation(),w.preventDefault())}}e.KeyboardManager=g;class p{static _colorsMapping=new Map([["CanvasText",[0,0,0]],["Canvas",[255,255,255]]]);get _colors(){const A=new Map([["CanvasText",null],["Canvas",null]]);return(0,r.getColorValues)(A),(0,s.shadow)(this,"_colors",A)}convert(A){const w=(0,r.getRGB)(A);if(!window.matchMedia("(forced-colors: active)").matches)return w;for(const[_,E]of this._colors)if(E.every((v,k)=>v===w[k]))return p._colorsMapping.get(_);return w}getHexCode(A){const w=this._colors.get(A);return w?s.Util.makeHexColor(...w):A}}e.ColorManager=p;class y{#e=null;#t=new Map;#s=new Map;#n=null;#r=new m;#d=0;#l=null;#i=new Set;#a=null;#h=new f;#c=!1;#u=s.AnnotationEditorType.NONE;#o=new Set;#m=this.copy.bind(this);#S=this.cut.bind(this);#v=this.paste.bind(this);#E=this.keydown.bind(this);#T=this.onEditingAction.bind(this);#w=this.onPageChanging.bind(this);#P=this.onScaleChanging.bind(this);#R=this.onRotationChanging.bind(this);#k={isEditing:!1,isEmpty:!0,hasSomethingToUndo:!1,hasSomethingToRedo:!1,hasSelectedEditor:!1};#p=null;static _keyboardManager=new g([[["ctrl+a","mac+meta+a"],y.prototype.selectAll],[["ctrl+z","mac+meta+z"],y.prototype.undo],[["ctrl+y","ctrl+shift+Z","mac+meta+shift+Z"],y.prototype.redo],[["Backspace","alt+Backspace","ctrl+Backspace","shift+Backspace","mac+Backspace","mac+alt+Backspace","mac+ctrl+Backspace","Delete","ctrl+Delete","shift+Delete"],y.prototype.delete],[["Escape","mac+Escape"],y.prototype.unselectAll]]);constructor(A,w,_){this.#p=A,this.#a=w,this.#a._on("editingaction",this.#T),this.#a._on("pagechanging",this.#w),this.#a._on("scalechanging",this.#P),this.#a._on("rotationchanging",this.#R),this.#n=_,this.viewParameters={realScale:r.PixelsPerInch.PDF_TO_CSS_UNITS,rotation:0}}destroy(){this.#y(),this.#a._off("editingaction",this.#T),this.#a._off("pagechanging",this.#w),this.#a._off("scalechanging",this.#P),this.#a._off("rotationchanging",this.#R);for(const A of this.#s.values())A.destroy();this.#s.clear(),this.#t.clear(),this.#i.clear(),this.#e=null,this.#o.clear(),this.#r.destroy()}onPageChanging({pageNumber:A}){this.#d=A-1}focusMainContainer(){this.#p.focus()}addShouldRescale(A){this.#i.add(A)}removeShouldRescale(A){this.#i.delete(A)}onScaleChanging({scale:A}){this.commitOrRemove(),this.viewParameters.realScale=A*r.PixelsPerInch.PDF_TO_CSS_UNITS;for(const w of this.#i)w.onScaleChanging()}onRotationChanging({pagesRotation:A}){this.commitOrRemove(),this.viewParameters.rotation=A}addToAnnotationStorage(A){!A.isEmpty()&&this.#n&&!this.#n.has(A.id)&&this.#n.setValue(A.id,A)}#D(){this.#p.addEventListener("keydown",this.#E)}#y(){this.#p.removeEventListener("keydown",this.#E)}#_(){document.addEventListener("copy",this.#m),document.addEventListener("cut",this.#S),document.addEventListener("paste",this.#v)}#A(){document.removeEventListener("copy",this.#m),document.removeEventListener("cut",this.#S),document.removeEventListener("paste",this.#v)}copy(A){if(A.preventDefault(),this.#e&&this.#e.commitOrRemove(),!this.hasSelection)return;const w=[];for(const _ of this.#o)_.isEmpty()||w.push(_.serialize());w.length!==0&&A.clipboardData.setData("application/pdfjs",JSON.stringify(w))}cut(A){this.copy(A),this.delete()}paste(A){A.preventDefault();let w=A.clipboardData.getData("application/pdfjs");if(!w)return;try{w=JSON.parse(w)}catch(E){(0,s.warn)(`paste: "${E.message}".`);return}if(!Array.isArray(w))return;this.unselectAll();const _=this.#s.get(this.#d);try{const E=[];for(const R of w){const L=_.deserialize(R);if(!L)return;E.push(L)}const v=()=>{for(const R of E)this.#M(R);this.#x(E)},k=()=>{for(const R of E)R.remove()};this.addCommands({cmd:v,undo:k,mustExec:!0})}catch(E){(0,s.warn)(`paste: "${E.message}".`)}}keydown(A){this.getActive()?.shouldGetKeyboardEvents()||y._keyboardManager.exec(this,A)}onEditingAction(A){["undo","redo","delete","selectAll"].includes(A.name)&&this[A.name]()}#f(A){Object.entries(A).some(([_,E])=>this.#k[_]!==E)&&this.#a.dispatch("annotationeditorstateschanged",{source:this,details:Object.assign(this.#k,A)})}#g(A){this.#a.dispatch("annotationeditorparamschanged",{source:this,details:A})}setEditingState(A){A?(this.#D(),this.#_(),this.#f({isEditing:this.#u!==s.AnnotationEditorType.NONE,isEmpty:this.#C(),hasSomethingToUndo:this.#r.hasSomethingToUndo(),hasSomethingToRedo:this.#r.hasSomethingToRedo(),hasSelectedEditor:!1})):(this.#y(),this.#A(),this.#f({isEditing:!1}))}registerEditorTypes(A){if(!this.#l){this.#l=A;for(const w of this.#l)this.#g(w.defaultPropertiesToUpdate)}}getId(){return this.#h.getId()}get currentLayer(){return this.#s.get(this.#d)}get currentPageIndex(){return this.#d}addLayer(A){this.#s.set(A.pageIndex,A),this.#c?A.enable():A.disable()}removeLayer(A){this.#s.delete(A.pageIndex)}updateMode(A){if(this.#u=A,A===s.AnnotationEditorType.NONE)this.setEditingState(!1),this.#L();else{this.setEditingState(!0),this.#I();for(const w of this.#s.values())w.updateMode(A)}}updateToolbar(A){A!==this.#u&&this.#a.dispatch("switchannotationeditormode",{source:this,mode:A})}updateParams(A,w){if(this.#l){for(const _ of this.#o)_.updateParams(A,w);for(const _ of this.#l)_.updateDefaultParams(A,w)}}#I(){if(!this.#c){this.#c=!0;for(const A of this.#s.values())A.enable()}}#L(){if(this.unselectAll(),this.#c){this.#c=!1;for(const A of this.#s.values())A.disable()}}getEditors(A){const w=[];for(const _ of this.#t.values())_.pageIndex===A&&w.push(_);return w}getEditor(A){return this.#t.get(A)}addEditor(A){this.#t.set(A.id,A)}removeEditor(A){this.#t.delete(A.id),this.unselect(A),this.#n?.remove(A.id)}#M(A){const w=this.#s.get(A.pageIndex);w?w.addOrRebuild(A):this.addEditor(A)}setActiveEditor(A){this.#e!==A&&(this.#e=A,A&&this.#g(A.propertiesToUpdate))}toggleSelected(A){if(this.#o.has(A)){this.#o.delete(A),A.unselect(),this.#f({hasSelectedEditor:this.hasSelection});return}this.#o.add(A),A.select(),this.#g(A.propertiesToUpdate),this.#f({hasSelectedEditor:!0})}setSelected(A){for(const w of this.#o)w!==A&&w.unselect();this.#o.clear(),this.#o.add(A),A.select(),this.#g(A.propertiesToUpdate),this.#f({hasSelectedEditor:!0})}isSelected(A){return this.#o.has(A)}unselect(A){A.unselect(),this.#o.delete(A),this.#f({hasSelectedEditor:this.hasSelection})}get hasSelection(){return this.#o.size!==0}undo(){this.#r.undo(),this.#f({hasSomethingToUndo:this.#r.hasSomethingToUndo(),hasSomethingToRedo:!0,isEmpty:this.#C()})}redo(){this.#r.redo(),this.#f({hasSomethingToUndo:!0,hasSomethingToRedo:this.#r.hasSomethingToRedo(),isEmpty:this.#C()})}addCommands(A){this.#r.add(A),this.#f({hasSomethingToUndo:!0,hasSomethingToRedo:!1,isEmpty:this.#C()})}#C(){if(this.#t.size===0)return!0;if(this.#t.size===1)for(const A of this.#t.values())return A.isEmpty();return!1}delete(){if(this.commitOrRemove(),!this.hasSelection)return;const A=[...this.#o],w=()=>{for(const E of A)E.remove()},_=()=>{for(const E of A)this.#M(E)};this.addCommands({cmd:w,undo:_,mustExec:!0})}commitOrRemove(){this.#e?.commitOrRemove()}#x(A){this.#o.clear();for(const w of A)w.isEmpty()||(this.#o.add(w),w.select());this.#f({hasSelectedEditor:!0})}selectAll(){for(const A of this.#o)A.commit();this.#x(this.#t.values())}unselectAll(){if(this.#e){this.#e.commitOrRemove();return}if(this.#o.size!==0){for(const A of this.#o)A.unselect();this.#o.clear(),this.#f({hasSelectedEditor:!1})}}isActive(A){return this.#e===A}getActive(){return this.#e}getMode(){return this.#u}}e.AnnotationEditorUIManager=y},(c,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.StatTimer=e.RenderingCancelledException=e.PixelsPerInch=e.PageViewport=e.PDFDateString=e.DOMStandardFontDataFactory=e.DOMSVGFactory=e.DOMFilterFactory=e.DOMCanvasFactory=e.DOMCMapReaderFactory=e.AnnotationPrefix=void 0,e.deprecated=U,e.getColorValues=te,e.getCurrentTransform=he,e.getCurrentTransformInverse=re,e.getFilenameFromUrl=k,e.getPdfFilenameFromUrl=R,e.getRGB=ee,e.getXfaPageViewport=$,e.isDataScheme=E,e.isPdfFile=v,e.isValidFetchUrl=B,e.loadScript=X,e.setLayerDimensions=pe;var s=t(7),r=t(1);const o="http://www.w3.org/2000/svg",a="pdfjs_internal_id_";e.AnnotationPrefix=a;class f{static CSS=96;static PDF=72;static PDF_TO_CSS_UNITS=this.CSS/this.PDF}e.PixelsPerInch=f;class m extends s.BaseFilterFactory{#e;#t;#s;#n;#r;#d;#l;#i=0;constructor({docId:J,ownerDocument:se=globalThis.document}={}){super(),this.#s=J,this.#n=se}get#a(){return this.#e||=new Map}get#h(){if(!this.#t){const J=this.#n.createElement("div"),{style:se}=J;se.visibility="hidden",se.contain="strict",se.width=se.height=0,se.position="absolute",se.top=se.left=0,se.zIndex=-1;const Y=this.#n.createElementNS(o,"svg");Y.setAttribute("width",0),Y.setAttribute("height",0),this.#t=this.#n.createElementNS(o,"defs"),J.append(Y),Y.append(this.#t),this.#n.body.append(J)}return this.#t}#c(J,se,Y){const I=this.#n.createElementNS(o,se);I.setAttribute("type","discrete"),I.setAttribute("tableValues",Y),J.append(I)}addFilter(J){if(!J)return"none";let se=this.#a.get(J);if(se)return se;let Y,I,P,O;if(J.length===1){const j=J[0],V=new Array(256);for(let Z=0;Z<256;Z++)V[Z]=j[Z]/255;O=Y=I=P=V.join(",")}else{const[j,V,Z]=J,Q=new Array(256),ie=new Array(256),ce=new Array(256);for(let ne=0;ne<256;ne++)Q[ne]=j[ne]/255,ie[ne]=V[ne]/255,ce[ne]=Z[ne]/255;Y=Q.join(","),I=ie.join(","),P=ce.join(","),O=`${Y}${I}${P}`}if(se=this.#a.get(O),se)return this.#a.set(J,se),se;const q=`g_${this.#s}_transfer_map_${this.#i++}`,b=`url(#${q})`;this.#a.set(J,b),this.#a.set(O,b);const D=this.#n.createElementNS(o,"filter",o);D.setAttribute("id",q),D.setAttribute("color-interpolation-filters","sRGB");const N=this.#n.createElementNS(o,"feComponentTransfer");return D.append(N),this.#c(N,"feFuncR",Y),this.#c(N,"feFuncG",I),this.#c(N,"feFuncB",P),this.#h.append(D),b}addHCMFilter(J,se){const Y=`${J}-${se}`;if(this.#d===Y)return this.#l;if(this.#d=Y,this.#l="none",this.#r?.remove(),!J||!se)return this.#l;this.#h.style.color=J,J=getComputedStyle(this.#h).getPropertyValue("color");const I=ee(J);J=r.Util.makeHexColor(...I),this.#h.style.color=se,se=getComputedStyle(this.#h).getPropertyValue("color");const P=ee(se);if(se=r.Util.makeHexColor(...P),this.#h.style.color="",J==="#000000"&&se==="#ffffff"||J===se)return this.#l;const O=new Array(256);for(let Z=0;Z<=255;Z++){const Q=Z/255;O[Z]=Q<=.03928?Q/12.92:((Q+.055)/1.055)**2.4}const q=O.join(","),b=`g_${this.#s}_hcm_filter`,D=this.#r=this.#n.createElementNS(o,"filter",o);D.setAttribute("id",b),D.setAttribute("color-interpolation-filters","sRGB");let N=this.#n.createElementNS(o,"feComponentTransfer");D.append(N),this.#c(N,"feFuncR",q),this.#c(N,"feFuncG",q),this.#c(N,"feFuncB",q);const j=this.#n.createElementNS(o,"feColorMatrix");j.setAttribute("type","matrix"),j.setAttribute("values","0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"),D.append(j),N=this.#n.createElementNS(o,"feComponentTransfer"),D.append(N);const V=(Z,Q)=>{const ie=I[Z]/255,ce=P[Z]/255,ne=new Array(Q+1);for(let de=0;de<=Q;de++)ne[de]=ie+de/Q*(ce-ie);return ne.join(",")};return this.#c(N,"feFuncR",V(0,5)),this.#c(N,"feFuncG",V(1,5)),this.#c(N,"feFuncB",V(2,5)),this.#h.append(D),this.#l=`url(#${b})`,this.#l}destroy(J=!1){J&&this.#l||(this.#t&&(this.#t.parentNode.parentNode.remove(),this.#t=null),this.#e&&(this.#e.clear(),this.#e=null),this.#i=0)}}e.DOMFilterFactory=m;class g extends s.BaseCanvasFactory{constructor({ownerDocument:J=globalThis.document}={}){super(),this._document=J}_createCanvas(J,se){const Y=this._document.createElement("canvas");return Y.width=J,Y.height=se,Y}}e.DOMCanvasFactory=g;async function p(le,J=!1){if(B(le,document.baseURI)){const se=await fetch(le);if(!se.ok)throw new Error(se.statusText);return J?new Uint8Array(await se.arrayBuffer()):(0,r.stringToBytes)(await se.text())}return new Promise((se,Y)=>{const I=new XMLHttpRequest;I.open("GET",le,!0),J&&(I.responseType="arraybuffer"),I.onreadystatechange=()=>{if(I.readyState===XMLHttpRequest.DONE){if(I.status===200||I.status===0){let P;if(J&&I.response?P=new Uint8Array(I.response):!J&&I.responseText&&(P=(0,r.stringToBytes)(I.responseText)),P){se(P);return}}Y(new Error(I.statusText))}},I.send(null)})}class y extends s.BaseCMapReaderFactory{_fetchData(J,se){return p(J,this.isCompressed).then(Y=>({cMapData:Y,compressionType:se}))}}e.DOMCMapReaderFactory=y;class C extends s.BaseStandardFontDataFactory{_fetchData(J){return p(J,!0)}}e.DOMStandardFontDataFactory=C;class A extends s.BaseSVGFactory{_createSVG(J){return document.createElementNS(o,J)}}e.DOMSVGFactory=A;class w{constructor({viewBox:J,scale:se,rotation:Y,offsetX:I=0,offsetY:P=0,dontFlip:O=!1}){this.viewBox=J,this.scale=se,this.rotation=Y,this.offsetX=I,this.offsetY=P;const q=(J[2]+J[0])/2,b=(J[3]+J[1])/2;let D,N,j,V;switch(Y%=360,Y<0&&(Y+=360),Y){case 180:D=-1,N=0,j=0,V=1;break;case 90:D=0,N=1,j=1,V=0;break;case 270:D=0,N=-1,j=-1,V=0;break;case 0:D=1,N=0,j=0,V=-1;break;default:throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.")}O&&(j=-j,V=-V);let Z,Q,ie,ce;D===0?(Z=Math.abs(b-J[1])*se+I,Q=Math.abs(q-J[0])*se+P,ie=(J[3]-J[1])*se,ce=(J[2]-J[0])*se):(Z=Math.abs(q-J[0])*se+I,Q=Math.abs(b-J[1])*se+P,ie=(J[2]-J[0])*se,ce=(J[3]-J[1])*se),this.transform=[D*se,N*se,j*se,V*se,Z-D*se*q-j*se*b,Q-N*se*q-V*se*b],this.width=ie,this.height=ce}get rawDims(){const{viewBox:J}=this;return(0,r.shadow)(this,"rawDims",{pageWidth:J[2]-J[0],pageHeight:J[3]-J[1],pageX:J[0],pageY:J[1]})}clone({scale:J=this.scale,rotation:se=this.rotation,offsetX:Y=this.offsetX,offsetY:I=this.offsetY,dontFlip:P=!1}={}){return new w({viewBox:this.viewBox.slice(),scale:J,rotation:se,offsetX:Y,offsetY:I,dontFlip:P})}convertToViewportPoint(J,se){return r.Util.applyTransform([J,se],this.transform)}convertToViewportRectangle(J){const se=r.Util.applyTransform([J[0],J[1]],this.transform),Y=r.Util.applyTransform([J[2],J[3]],this.transform);return[se[0],se[1],Y[0],Y[1]]}convertToPdfPoint(J,se){return r.Util.applyInverseTransform([J,se],this.transform)}}e.PageViewport=w;class _ extends r.BaseException{constructor(J,se,Y=0){super(J,"RenderingCancelledException"),this.type=se,this.extraDelay=Y}}e.RenderingCancelledException=_;function E(le){const J=le.length;let se=0;for(;se<J&&le[se].trim()==="";)se++;return le.substring(se,se+5).toLowerCase()==="data:"}function v(le){return typeof le=="string"&&/\.pdf$/i.test(le)}function k(le,J=!1){return J||([le]=le.split(/[#?]/,1)),le.substring(le.lastIndexOf("/")+1)}function R(le,J="document.pdf"){if(typeof le!="string")return J;if(E(le))return(0,r.warn)('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'),J;const se=/^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/,Y=/[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i,I=se.exec(le);let P=Y.exec(I[1])||Y.exec(I[2])||Y.exec(I[3]);if(P&&(P=P[0],P.includes("%")))try{P=Y.exec(decodeURIComponent(P))[0]}catch{}return P||J}class L{started=Object.create(null);times=[];time(J){J in this.started&&(0,r.warn)(`Timer is already running for ${J}`),this.started[J]=Date.now()}timeEnd(J){J in this.started||(0,r.warn)(`Timer has not been started for ${J}`),this.times.push({name:J,start:this.started[J],end:Date.now()}),delete this.started[J]}toString(){const J=[];let se=0;for(const{name:Y}of this.times)se=Math.max(Y.length,se);for(const{name:Y,start:I,end:P}of this.times)J.push(`${Y.padEnd(se)} ${P-I}ms
`);return J.join("")}}e.StatTimer=L;function B(le,J){try{const{protocol:se}=J?new URL(le,J):new URL(le);return se==="http:"||se==="https:"}catch{return!1}}function X(le,J=!1){return new Promise((se,Y)=>{const I=document.createElement("script");I.src=le,I.onload=function(P){J&&I.remove(),se(P)},I.onerror=function(){Y(new Error(`Cannot load script at: ${I.src}`))},(document.head||document.documentElement).append(I)})}function U(le){console.log("Deprecated API usage: "+le)}let M;class F{static toDateObject(J){if(!J||typeof J!="string")return null;M||(M=new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));const se=M.exec(J);if(!se)return null;const Y=parseInt(se[1],10);let I=parseInt(se[2],10);I=I>=1&&I<=12?I-1:0;let P=parseInt(se[3],10);P=P>=1&&P<=31?P:1;let O=parseInt(se[4],10);O=O>=0&&O<=23?O:0;let q=parseInt(se[5],10);q=q>=0&&q<=59?q:0;let b=parseInt(se[6],10);b=b>=0&&b<=59?b:0;const D=se[7]||"Z";let N=parseInt(se[8],10);N=N>=0&&N<=23?N:0;let j=parseInt(se[9],10)||0;return j=j>=0&&j<=59?j:0,D==="-"?(O+=N,q+=j):D==="+"&&(O-=N,q-=j),new Date(Date.UTC(Y,I,P,O,q,b))}}e.PDFDateString=F;function $(le,{scale:J=1,rotation:se=0}){const{width:Y,height:I}=le.attributes.style,P=[0,0,parseInt(Y),parseInt(I)];return new w({viewBox:P,scale:J,rotation:se})}function ee(le){if(le.startsWith("#")){const J=parseInt(le.slice(1),16);return[(J&16711680)>>16,(J&65280)>>8,J&255]}return le.startsWith("rgb(")?le.slice(4,-1).split(",").map(J=>parseInt(J)):le.startsWith("rgba(")?le.slice(5,-1).split(",").map(J=>parseInt(J)).slice(0,3):((0,r.warn)(`Not a valid color format: "${le}"`),[0,0,0])}function te(le){const J=document.createElement("span");J.style.visibility="hidden",document.body.append(J);for(const se of le.keys()){J.style.color=se;const Y=window.getComputedStyle(J).color;le.set(se,ee(Y))}J.remove()}function he(le){const{a:J,b:se,c:Y,d:I,e:P,f:O}=le.getTransform();return[J,se,Y,I,P,O]}function re(le){const{a:J,b:se,c:Y,d:I,e:P,f:O}=le.getTransform().invertSelf();return[J,se,Y,I,P,O]}function pe(le,J,se=!1,Y=!0){if(J instanceof w){const{pageWidth:I,pageHeight:P}=J.rawDims,{style:O}=le,q=`calc(var(--scale-factor) * ${I}px)`,b=`calc(var(--scale-factor) * ${P}px)`;!se||J.rotation%180===0?(O.width=q,O.height=b):(O.width=b,O.height=q)}Y&&le.setAttribute("data-main-rotation",J.rotation)}},(c,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.BaseStandardFontDataFactory=e.BaseSVGFactory=e.BaseFilterFactory=e.BaseCanvasFactory=e.BaseCMapReaderFactory=void 0;var s=t(1);class r{constructor(){this.constructor===r&&(0,s.unreachable)("Cannot initialize BaseFilterFactory.")}addFilter(p){return"none"}addHCMFilter(p,y){return"none"}destroy(p=!1){}}e.BaseFilterFactory=r;class o{constructor(){this.constructor===o&&(0,s.unreachable)("Cannot initialize BaseCanvasFactory.")}create(p,y){if(p<=0||y<=0)throw new Error("Invalid canvas size");const C=this._createCanvas(p,y);return{canvas:C,context:C.getContext("2d")}}reset(p,y,C){if(!p.canvas)throw new Error("Canvas is not specified");if(y<=0||C<=0)throw new Error("Invalid canvas size");p.canvas.width=y,p.canvas.height=C}destroy(p){if(!p.canvas)throw new Error("Canvas is not specified");p.canvas.width=0,p.canvas.height=0,p.canvas=null,p.context=null}_createCanvas(p,y){(0,s.unreachable)("Abstract method `_createCanvas` called.")}}e.BaseCanvasFactory=o;class a{constructor({baseUrl:p=null,isCompressed:y=!0}){this.constructor===a&&(0,s.unreachable)("Cannot initialize BaseCMapReaderFactory."),this.baseUrl=p,this.isCompressed=y}async fetch({name:p}){if(!this.baseUrl)throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');if(!p)throw new Error("CMap name must be specified.");const y=this.baseUrl+p+(this.isCompressed?".bcmap":""),C=this.isCompressed?s.CMapCompressionType.BINARY:s.CMapCompressionType.NONE;return this._fetchData(y,C).catch(A=>{throw new Error(`Unable to load ${this.isCompressed?"binary ":""}CMap at: ${y}`)})}_fetchData(p,y){(0,s.unreachable)("Abstract method `_fetchData` called.")}}e.BaseCMapReaderFactory=a;class f{constructor({baseUrl:p=null}){this.constructor===f&&(0,s.unreachable)("Cannot initialize BaseStandardFontDataFactory."),this.baseUrl=p}async fetch({filename:p}){if(!this.baseUrl)throw new Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.');if(!p)throw new Error("Font filename must be specified.");const y=`${this.baseUrl}${p}`;return this._fetchData(y).catch(C=>{throw new Error(`Unable to load font data at: ${y}`)})}_fetchData(p){(0,s.unreachable)("Abstract method `_fetchData` called.")}}e.BaseStandardFontDataFactory=f;class m{constructor(){this.constructor===m&&(0,s.unreachable)("Cannot initialize BaseSVGFactory.")}create(p,y,C=!1){if(p<=0||y<=0)throw new Error("Invalid SVG dimensions");const A=this._createSVG("svg:svg");return A.setAttribute("version","1.1"),C||(A.setAttribute("width",`${p}px`),A.setAttribute("height",`${y}px`)),A.setAttribute("preserveAspectRatio","none"),A.setAttribute("viewBox",`0 0 ${p} ${y}`),A}createElement(p){if(typeof p!="string")throw new Error("Invalid SVG element type");return this._createSVG(p)}_createSVG(p){(0,s.unreachable)("Abstract method `_createSVG` called.")}}e.BaseSVGFactory=m},(c,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.MurmurHash3_64=void 0;var s=t(1);const r=3285377520,o=4294901760,a=65535;class f{constructor(g){this.h1=g?g&4294967295:r,this.h2=g?g&4294967295:r}update(g){let p,y;if(typeof g=="string"){p=new Uint8Array(g.length*2),y=0;for(let U=0,M=g.length;U<M;U++){const F=g.charCodeAt(U);F<=255?p[y++]=F:(p[y++]=F>>>8,p[y++]=F&255)}}else if((0,s.isArrayBuffer)(g))p=g.slice(),y=p.byteLength;else throw new Error("Wrong data format in MurmurHash3_64_update. Input must be a string or array.");const C=y>>2,A=y-C*4,w=new Uint32Array(p.buffer,0,C);let _=0,E=0,v=this.h1,k=this.h2;const R=3432918353,L=461845907,B=R&a,X=L&a;for(let U=0;U<C;U++)U&1?(_=w[U],_=_*R&o|_*B&a,_=_<<15|_>>>17,_=_*L&o|_*X&a,v^=_,v=v<<13|v>>>19,v=v*5+3864292196):(E=w[U],E=E*R&o|E*B&a,E=E<<15|E>>>17,E=E*L&o|E*X&a,k^=E,k=k<<13|k>>>19,k=k*5+3864292196);switch(_=0,A){case 3:_^=p[C*4+2]<<16;case 2:_^=p[C*4+1]<<8;case 1:_^=p[C*4],_=_*R&o|_*B&a,_=_<<15|_>>>17,_=_*L&o|_*X&a,C&1?v^=_:k^=_}this.h1=v,this.h2=k}hexdigest(){let g=this.h1,p=this.h2;return g^=p>>>1,g=g*3981806797&o|g*36045&a,p=p*4283543511&o|((p<<16|g>>>16)*2950163797&o)>>>16,g^=p>>>1,g=g*444984403&o|g*60499&a,p=p*3301882366&o|((p<<16|g>>>16)*3120437893&o)>>>16,g^=p>>>1,(g>>>0).toString(16).padStart(8,"0")+(p>>>0).toString(16).padStart(8,"0")}}e.MurmurHash3_64=f},(c,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.FontLoader=e.FontFaceObject=void 0;var s=t(1),r=t(10);class o{constructor({ownerDocument:m=globalThis.document,styleElement:g=null}){this._document=m,this.nativeFontFaces=[],this.styleElement=null,this.loadingRequests=[],this.loadTestFontId=0}addNativeFontFace(m){this.nativeFontFaces.push(m),this._document.fonts.add(m)}insertRule(m){this.styleElement||(this.styleElement=this._document.createElement("style"),this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));const g=this.styleElement.sheet;g.insertRule(m,g.cssRules.length)}clear(){for(const m of this.nativeFontFaces)this._document.fonts.delete(m);this.nativeFontFaces.length=0,this.styleElement&&(this.styleElement.remove(),this.styleElement=null)}async bind(m){if(m.attached||m.missingFile)return;if(m.attached=!0,this.isFontLoadingAPISupported){const p=m.createNativeFontFace();if(p){this.addNativeFontFace(p);try{await p.loaded}catch(y){throw(0,s.warn)(`Failed to load font '${p.family}': '${y}'.`),m.disableFontFace=!0,y}}return}const g=m.createFontFaceRule();if(g){if(this.insertRule(g),this.isSyncFontLoadingSupported)return;await new Promise(p=>{const y=this._queueLoadingCallback(p);this._prepareFontLoadEvent(m,y)})}}get isFontLoadingAPISupported(){const m=!!this._document?.fonts;return(0,s.shadow)(this,"isFontLoadingAPISupported",m)}get isSyncFontLoadingSupported(){let m=!1;return(r.isNodeJS||typeof navigator<"u"&&/Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent))&&(m=!0),(0,s.shadow)(this,"isSyncFontLoadingSupported",m)}_queueLoadingCallback(m){function g(){for((0,s.assert)(!y.done,"completeRequest() cannot be called twice."),y.done=!0;p.length>0&&p[0].done;){const C=p.shift();setTimeout(C.callback,0)}}const{loadingRequests:p}=this,y={done:!1,complete:g,callback:m};return p.push(y),y}get _loadTestFont(){const m=atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");return(0,s.shadow)(this,"_loadTestFont",m)}_prepareFontLoadEvent(m,g){function p(ee,te){return ee.charCodeAt(te)<<24|ee.charCodeAt(te+1)<<16|ee.charCodeAt(te+2)<<8|ee.charCodeAt(te+3)&255}function y(ee,te,he,re){const pe=ee.substring(0,te),le=ee.substring(te+he);return pe+re+le}let C,A;const w=this._document.createElement("canvas");w.width=1,w.height=1;const _=w.getContext("2d");let E=0;function v(ee,te){if(++E>30){(0,s.warn)("Load test font never loaded."),te();return}if(_.font="30px "+ee,_.fillText(".",0,20),_.getImageData(0,0,1,1).data[3]>0){te();return}setTimeout(v.bind(null,ee,te))}const k=`lt${Date.now()}${this.loadTestFontId++}`;let R=this._loadTestFont;R=y(R,976,k.length,k);const B=16,X=1482184792;let U=p(R,B);for(C=0,A=k.length-3;C<A;C+=4)U=U-X+p(k,C)|0;C<k.length&&(U=U-X+p(k+"XXX",C)|0),R=y(R,B,4,(0,s.string32)(U));const M=`url(data:font/opentype;base64,${btoa(R)});`,F=`@font-face {font-family:"${k}";src:${M}}`;this.insertRule(F);const $=this._document.createElement("div");$.style.visibility="hidden",$.style.width=$.style.height="10px",$.style.position="absolute",$.style.top=$.style.left="0px";for(const ee of[m.loadedName,k]){const te=this._document.createElement("span");te.textContent="Hi",te.style.fontFamily=ee,$.append(te)}this._document.body.append($),v(k,()=>{$.remove(),g.complete()})}}e.FontLoader=o;class a{constructor(m,{isEvalSupported:g=!0,disableFontFace:p=!1,ignoreErrors:y=!1,inspectFont:C=null}){this.compiledGlyphs=Object.create(null);for(const A in m)this[A]=m[A];this.isEvalSupported=g!==!1,this.disableFontFace=p===!0,this.ignoreErrors=y===!0,this._inspectFont=C}createNativeFontFace(){if(!this.data||this.disableFontFace)return null;let m;if(!this.cssFontInfo)m=new FontFace(this.loadedName,this.data,{});else{const g={weight:this.cssFontInfo.fontWeight};this.cssFontInfo.italicAngle&&(g.style=`oblique ${this.cssFontInfo.italicAngle}deg`),m=new FontFace(this.cssFontInfo.fontFamily,this.data,g)}return this._inspectFont?.(this),m}createFontFaceRule(){if(!this.data||this.disableFontFace)return null;const m=(0,s.bytesToString)(this.data),g=`url(data:${this.mimetype};base64,${btoa(m)});`;let p;if(!this.cssFontInfo)p=`@font-face {font-family:"${this.loadedName}";src:${g}}`;else{let y=`font-weight: ${this.cssFontInfo.fontWeight};`;this.cssFontInfo.italicAngle&&(y+=`font-style: oblique ${this.cssFontInfo.italicAngle}deg;`),p=`@font-face {font-family:"${this.cssFontInfo.fontFamily}";${y}src:${g}}`}return this._inspectFont?.(this,g),p}getPathGenerator(m,g){if(this.compiledGlyphs[g]!==void 0)return this.compiledGlyphs[g];let p;try{p=m.get(this.loadedName+"_path_"+g)}catch(y){if(!this.ignoreErrors)throw y;return(0,s.warn)(`getPathGenerator - ignoring character: "${y}".`),this.compiledGlyphs[g]=function(C,A){}}if(this.isEvalSupported&&s.FeatureTest.isEvalSupported){const y=[];for(const C of p){const A=C.args!==void 0?C.args.join(","):"";y.push("c.",C.cmd,"(",A,`);
`)}return this.compiledGlyphs[g]=new Function("c","size",y.join(""))}return this.compiledGlyphs[g]=function(y,C){for(const A of p)A.cmd==="scale"&&(A.args=[C,-C]),y[A.cmd].apply(y,A.args)}}}e.FontFaceObject=a},(c,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.isNodeJS=void 0;const t=typeof process=="object"&&process+""=="[object process]"&&!process.versions.nw&&!(process.versions.electron&&process.type&&process.type!=="browser");e.isNodeJS=t},(c,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.CanvasGraphics=void 0;var s=t(1),r=t(6),o=t(12),a=t(13),f=t(10);const m=16,g=100,p=4096,y=15,C=10,A=1e3,w=16;function _(Y,I){if(Y._removeMirroring)throw new Error("Context is already forwarding operations.");Y.__originalSave=Y.save,Y.__originalRestore=Y.restore,Y.__originalRotate=Y.rotate,Y.__originalScale=Y.scale,Y.__originalTranslate=Y.translate,Y.__originalTransform=Y.transform,Y.__originalSetTransform=Y.setTransform,Y.__originalResetTransform=Y.resetTransform,Y.__originalClip=Y.clip,Y.__originalMoveTo=Y.moveTo,Y.__originalLineTo=Y.lineTo,Y.__originalBezierCurveTo=Y.bezierCurveTo,Y.__originalRect=Y.rect,Y.__originalClosePath=Y.closePath,Y.__originalBeginPath=Y.beginPath,Y._removeMirroring=()=>{Y.save=Y.__originalSave,Y.restore=Y.__originalRestore,Y.rotate=Y.__originalRotate,Y.scale=Y.__originalScale,Y.translate=Y.__originalTranslate,Y.transform=Y.__originalTransform,Y.setTransform=Y.__originalSetTransform,Y.resetTransform=Y.__originalResetTransform,Y.clip=Y.__originalClip,Y.moveTo=Y.__originalMoveTo,Y.lineTo=Y.__originalLineTo,Y.bezierCurveTo=Y.__originalBezierCurveTo,Y.rect=Y.__originalRect,Y.closePath=Y.__originalClosePath,Y.beginPath=Y.__originalBeginPath,delete Y._removeMirroring},Y.save=function(){I.save(),this.__originalSave()},Y.restore=function(){I.restore(),this.__originalRestore()},Y.translate=function(O,q){I.translate(O,q),this.__originalTranslate(O,q)},Y.scale=function(O,q){I.scale(O,q),this.__originalScale(O,q)},Y.transform=function(O,q,b,D,N,j){I.transform(O,q,b,D,N,j),this.__originalTransform(O,q,b,D,N,j)},Y.setTransform=function(O,q,b,D,N,j){I.setTransform(O,q,b,D,N,j),this.__originalSetTransform(O,q,b,D,N,j)},Y.resetTransform=function(){I.resetTransform(),this.__originalResetTransform()},Y.rotate=function(O){I.rotate(O),this.__originalRotate(O)},Y.clip=function(O){I.clip(O),this.__originalClip(O)},Y.moveTo=function(P,O){I.moveTo(P,O),this.__originalMoveTo(P,O)},Y.lineTo=function(P,O){I.lineTo(P,O),this.__originalLineTo(P,O)},Y.bezierCurveTo=function(P,O,q,b,D,N){I.bezierCurveTo(P,O,q,b,D,N),this.__originalBezierCurveTo(P,O,q,b,D,N)},Y.rect=function(P,O,q,b){I.rect(P,O,q,b),this.__originalRect(P,O,q,b)},Y.closePath=function(){I.closePath(),this.__originalClosePath()},Y.beginPath=function(){I.beginPath(),this.__originalBeginPath()}}class E{constructor(I){this.canvasFactory=I,this.cache=Object.create(null)}getCanvas(I,P,O){let q;return this.cache[I]!==void 0?(q=this.cache[I],this.canvasFactory.reset(q,P,O)):(q=this.canvasFactory.create(P,O),this.cache[I]=q),q}delete(I){delete this.cache[I]}clear(){for(const I in this.cache){const P=this.cache[I];this.canvasFactory.destroy(P),delete this.cache[I]}}}function v(Y,I,P,O,q,b,D,N,j,V){const[Z,Q,ie,ce,ne,de]=(0,r.getCurrentTransform)(Y);if(Q===0&&ie===0){const ge=D*Z+ne,Ae=Math.round(ge),ye=N*ce+de,we=Math.round(ye),xe=(D+j)*Z+ne,be=Math.abs(Math.round(xe)-Ae)||1,_e=(N+V)*ce+de,ve=Math.abs(Math.round(_e)-we)||1;return Y.setTransform(Math.sign(Z),0,0,Math.sign(ce),Ae,we),Y.drawImage(I,P,O,q,b,0,0,be,ve),Y.setTransform(Z,Q,ie,ce,ne,de),[be,ve]}if(Z===0&&ce===0){const ge=N*ie+ne,Ae=Math.round(ge),ye=D*Q+de,we=Math.round(ye),xe=(N+V)*ie+ne,be=Math.abs(Math.round(xe)-Ae)||1,_e=(D+j)*Q+de,ve=Math.abs(Math.round(_e)-we)||1;return Y.setTransform(0,Math.sign(Q),Math.sign(ie),0,Ae,we),Y.drawImage(I,P,O,q,b,0,0,ve,be),Y.setTransform(Z,Q,ie,ce,ne,de),[ve,be]}Y.drawImage(I,P,O,q,b,D,N,j,V);const fe=Math.hypot(Z,Q),ue=Math.hypot(ie,ce);return[fe*j,ue*V]}function k(Y){const{width:I,height:P}=Y;if(I>A||P>A)return null;const O=1e3,q=new Uint8Array([0,2,4,0,1,0,5,4,8,10,0,8,0,2,1,0]),b=I+1;let D=new Uint8Array(b*(P+1)),N,j,V;const Z=I+7&-8;let Q=new Uint8Array(Z*P),ie=0;for(const ue of Y.data){let ge=128;for(;ge>0;)Q[ie++]=ue&ge?0:255,ge>>=1}let ce=0;for(ie=0,Q[ie]!==0&&(D[0]=1,++ce),j=1;j<I;j++)Q[ie]!==Q[ie+1]&&(D[j]=Q[ie]?2:1,++ce),ie++;for(Q[ie]!==0&&(D[j]=2,++ce),N=1;N<P;N++){ie=N*Z,V=N*b,Q[ie-Z]!==Q[ie]&&(D[V]=Q[ie]?1:8,++ce);let ue=(Q[ie]?4:0)+(Q[ie-Z]?8:0);for(j=1;j<I;j++)ue=(ue>>2)+(Q[ie+1]?4:0)+(Q[ie-Z+1]?8:0),q[ue]&&(D[V+j]=q[ue],++ce),ie++;if(Q[ie-Z]!==Q[ie]&&(D[V+j]=Q[ie]?2:4,++ce),ce>O)return null}for(ie=Z*(P-1),V=N*b,Q[ie]!==0&&(D[V]=8,++ce),j=1;j<I;j++)Q[ie]!==Q[ie+1]&&(D[V+j]=Q[ie]?4:8,++ce),ie++;if(Q[ie]!==0&&(D[V+j]=4,++ce),ce>O)return null;const ne=new Int32Array([0,b,-1,0,-b,0,0,0,1]),de=new Path2D;for(N=0;ce&&N<=P;N++){let ue=N*b;const ge=ue+I;for(;ue<ge&&!D[ue];)ue++;if(ue===ge)continue;de.moveTo(ue%b,N);const Ae=ue;let ye=D[ue];do{const we=ne[ye];do ue+=we;while(!D[ue]);const xe=D[ue];xe!==5&&xe!==10?(ye=xe,D[ue]=0):(ye=xe&51*ye>>4,D[ue]&=ye>>2|ye<<2),de.lineTo(ue%b,ue/b|0),D[ue]||--ce}while(Ae!==ue);--N}return Q=null,D=null,function(ue){ue.save(),ue.scale(1/I,-1/P),ue.translate(0,-P),ue.fill(de),ue.beginPath(),ue.restore()}}class R{constructor(I,P){this.alphaIsShape=!1,this.fontSize=0,this.fontSizeScale=1,this.textMatrix=s.IDENTITY_MATRIX,this.textMatrixScale=1,this.fontMatrix=s.FONT_IDENTITY_MATRIX,this.leading=0,this.x=0,this.y=0,this.lineX=0,this.lineY=0,this.charSpacing=0,this.wordSpacing=0,this.textHScale=1,this.textRenderingMode=s.TextRenderingMode.FILL,this.textRise=0,this.fillColor="#000000",this.strokeColor="#000000",this.patternFill=!1,this.fillAlpha=1,this.strokeAlpha=1,this.lineWidth=1,this.activeSMask=null,this.transferMaps="none",this.startNewPathAndClipBox([0,0,I,P])}clone(){const I=Object.create(this);return I.clipBox=this.clipBox.slice(),I}setCurrentPoint(I,P){this.x=I,this.y=P}updatePathMinMax(I,P,O){[P,O]=s.Util.applyTransform([P,O],I),this.minX=Math.min(this.minX,P),this.minY=Math.min(this.minY,O),this.maxX=Math.max(this.maxX,P),this.maxY=Math.max(this.maxY,O)}updateRectMinMax(I,P){const O=s.Util.applyTransform(P,I),q=s.Util.applyTransform(P.slice(2),I);this.minX=Math.min(this.minX,O[0],q[0]),this.minY=Math.min(this.minY,O[1],q[1]),this.maxX=Math.max(this.maxX,O[0],q[0]),this.maxY=Math.max(this.maxY,O[1],q[1])}updateScalingPathMinMax(I,P){s.Util.scaleMinMax(I,P),this.minX=Math.min(this.minX,P[0]),this.maxX=Math.max(this.maxX,P[1]),this.minY=Math.min(this.minY,P[2]),this.maxY=Math.max(this.maxY,P[3])}updateCurvePathMinMax(I,P,O,q,b,D,N,j,V,Z){const Q=s.Util.bezierBoundingBox(P,O,q,b,D,N,j,V);if(Z){Z[0]=Math.min(Z[0],Q[0],Q[2]),Z[1]=Math.max(Z[1],Q[0],Q[2]),Z[2]=Math.min(Z[2],Q[1],Q[3]),Z[3]=Math.max(Z[3],Q[1],Q[3]);return}this.updateRectMinMax(I,Q)}getPathBoundingBox(I=o.PathType.FILL,P=null){const O=[this.minX,this.minY,this.maxX,this.maxY];if(I===o.PathType.STROKE){P||(0,s.unreachable)("Stroke bounding box must include transform.");const q=s.Util.singularValueDecompose2dScale(P),b=q[0]*this.lineWidth/2,D=q[1]*this.lineWidth/2;O[0]-=b,O[1]-=D,O[2]+=b,O[3]+=D}return O}updateClipFromPath(){const I=s.Util.intersect(this.clipBox,this.getPathBoundingBox());this.startNewPathAndClipBox(I||[0,0,0,0])}isEmptyClip(){return this.minX===1/0}startNewPathAndClipBox(I){this.clipBox=I,this.minX=1/0,this.minY=1/0,this.maxX=0,this.maxY=0}getClippedPathBoundingBox(I=o.PathType.FILL,P=null){return s.Util.intersect(this.clipBox,this.getPathBoundingBox(I,P))}}function L(Y,I){if(typeof ImageData<"u"&&I instanceof ImageData){Y.putImageData(I,0,0);return}const P=I.height,O=I.width,q=P%w,b=(P-q)/w,D=q===0?b:b+1,N=Y.createImageData(O,w);let j=0,V;const Z=I.data,Q=N.data;let ie,ce,ne,de;if(I.kind===s.ImageKind.GRAYSCALE_1BPP){const fe=Z.byteLength,ue=new Uint32Array(Q.buffer,0,Q.byteLength>>2),ge=ue.length,Ae=O+7>>3,ye=4294967295,we=s.FeatureTest.isLittleEndian?4278190080:255;for(ie=0;ie<D;ie++){for(ne=ie<b?w:q,V=0,ce=0;ce<ne;ce++){const xe=fe-j;let be=0;const _e=xe>Ae?O:xe*8-7,ve=_e&-8;let ke=0,Ee=0;for(;be<ve;be+=8)Ee=Z[j++],ue[V++]=Ee&128?ye:we,ue[V++]=Ee&64?ye:we,ue[V++]=Ee&32?ye:we,ue[V++]=Ee&16?ye:we,ue[V++]=Ee&8?ye:we,ue[V++]=Ee&4?ye:we,ue[V++]=Ee&2?ye:we,ue[V++]=Ee&1?ye:we;for(;be<_e;be++)ke===0&&(Ee=Z[j++],ke=128),ue[V++]=Ee&ke?ye:we,ke>>=1}for(;V<ge;)ue[V++]=0;Y.putImageData(N,0,ie*w)}}else if(I.kind===s.ImageKind.RGBA_32BPP){for(ce=0,de=O*w*4,ie=0;ie<b;ie++)Q.set(Z.subarray(j,j+de)),j+=de,Y.putImageData(N,0,ce),ce+=w;ie<D&&(de=O*q*4,Q.set(Z.subarray(j,j+de)),Y.putImageData(N,0,ce))}else if(I.kind===s.ImageKind.RGB_24BPP)for(ne=w,de=O*ne,ie=0;ie<D;ie++){for(ie>=b&&(ne=q,de=O*ne),V=0,ce=de;ce--;)Q[V++]=Z[j++],Q[V++]=Z[j++],Q[V++]=Z[j++],Q[V++]=255;Y.putImageData(N,0,ie*w)}else throw new Error(`bad image kind: ${I.kind}`)}function B(Y,I){if(I.bitmap){Y.drawImage(I.bitmap,0,0);return}const P=I.height,O=I.width,q=P%w,b=(P-q)/w,D=q===0?b:b+1,N=Y.createImageData(O,w);let j=0;const V=I.data,Z=N.data;for(let Q=0;Q<D;Q++){const ie=Q<b?w:q;({srcPos:j}=(0,a.convertBlackAndWhiteToRGBA)({src:V,srcPos:j,dest:Z,width:O,height:ie,nonBlackColor:0})),Y.putImageData(N,0,Q*w)}}function X(Y,I){const P=["strokeStyle","fillStyle","fillRule","globalAlpha","lineWidth","lineCap","lineJoin","miterLimit","globalCompositeOperation","font","filter"];for(const O of P)Y[O]!==void 0&&(I[O]=Y[O]);Y.setLineDash!==void 0&&(I.setLineDash(Y.getLineDash()),I.lineDashOffset=Y.lineDashOffset)}function U(Y){Y.strokeStyle=Y.fillStyle="#000000",Y.fillRule="nonzero",Y.globalAlpha=1,Y.lineWidth=1,Y.lineCap="butt",Y.lineJoin="miter",Y.miterLimit=10,Y.globalCompositeOperation="source-over",Y.font="10px sans-serif",Y.setLineDash!==void 0&&(Y.setLineDash([]),Y.lineDashOffset=0),f.isNodeJS||(Y.filter="none")}function M(Y,I,P,O){const q=Y.length;for(let b=3;b<q;b+=4){const D=Y[b];if(D===0)Y[b-3]=I,Y[b-2]=P,Y[b-1]=O;else if(D<255){const N=255-D;Y[b-3]=Y[b-3]*D+I*N>>8,Y[b-2]=Y[b-2]*D+P*N>>8,Y[b-1]=Y[b-1]*D+O*N>>8}}}function F(Y,I,P){const O=Y.length,q=1/255;for(let b=3;b<O;b+=4){const D=P?P[Y[b]]:Y[b];I[b]=I[b]*D*q|0}}function $(Y,I,P){const O=Y.length;for(let q=3;q<O;q+=4){const b=Y[q-3]*77+Y[q-2]*152+Y[q-1]*28;I[q]=P?I[q]*P[b>>8]>>8:I[q]*b>>16}}function ee(Y,I,P,O,q,b,D,N,j,V,Z){const Q=!!b,ie=Q?b[0]:0,ce=Q?b[1]:0,ne=Q?b[2]:0;let de;q==="Luminosity"?de=$:de=F;const ue=Math.min(O,Math.ceil(1048576/P));for(let ge=0;ge<O;ge+=ue){const Ae=Math.min(ue,O-ge),ye=Y.getImageData(N-V,ge+(j-Z),P,Ae),we=I.getImageData(N,ge+j,P,Ae);Q&&M(ye.data,ie,ce,ne),de(ye.data,we.data,D),I.putImageData(we,N,ge+j)}}function te(Y,I,P,O){const q=O[0],b=O[1],D=O[2]-q,N=O[3]-b;D===0||N===0||(ee(I.context,P,D,N,I.subtype,I.backdrop,I.transferMap,q,b,I.offsetX,I.offsetY),Y.save(),Y.globalAlpha=1,Y.globalCompositeOperation="source-over",Y.setTransform(1,0,0,1,0,0),Y.drawImage(P.canvas,0,0),Y.restore())}function he(Y,I){const P=s.Util.singularValueDecompose2dScale(Y);P[0]=Math.fround(P[0]),P[1]=Math.fround(P[1]);const O=Math.fround((globalThis.devicePixelRatio||1)*r.PixelsPerInch.PDF_TO_CSS_UNITS);return I!==void 0?I:P[0]<=O||P[1]<=O}const re=["butt","round","square"],pe=["miter","round","bevel"],le={},J={};class se{constructor(I,P,O,q,b,{optionalContentConfig:D,markedContentStack:N=null},j,V){this.ctx=I,this.current=new R(this.ctx.canvas.width,this.ctx.canvas.height),this.stateStack=[],this.pendingClip=null,this.pendingEOFill=!1,this.res=null,this.xobjs=null,this.commonObjs=P,this.objs=O,this.canvasFactory=q,this.filterFactory=b,this.groupStack=[],this.processingType3=null,this.baseTransform=null,this.baseTransformStack=[],this.groupLevel=0,this.smaskStack=[],this.smaskCounter=0,this.tempSMask=null,this.suspendedCtx=null,this.contentVisible=!0,this.markedContentStack=N||[],this.optionalContentConfig=D,this.cachedCanvases=new E(this.canvasFactory),this.cachedPatterns=new Map,this.annotationCanvasMap=j,this.viewportScale=1,this.outputScaleX=1,this.outputScaleY=1,this.pageColors=V,this._cachedScaleForStroking=null,this._cachedGetSinglePixelWidth=null,this._cachedBitmapsMap=new Map}getObject(I,P=null){return typeof I=="string"?I.startsWith("g_")?this.commonObjs.get(I):this.objs.get(I):P}beginDrawing({transform:I,viewport:P,transparency:O=!1,background:q=null}){const b=this.ctx.canvas.width,D=this.ctx.canvas.height,N=this.ctx.fillStyle;if(this.ctx.fillStyle=q||"#ffffff",this.ctx.fillRect(0,0,b,D),this.ctx.fillStyle=N,O){const j=this.cachedCanvases.getCanvas("transparent",b,D);this.compositeCtx=this.ctx,this.transparentCanvas=j.canvas,this.ctx=j.context,this.ctx.save(),this.ctx.transform(...(0,r.getCurrentTransform)(this.compositeCtx))}this.ctx.save(),U(this.ctx),I&&(this.ctx.transform(...I),this.outputScaleX=I[0],this.outputScaleY=I[0]),this.ctx.transform(...P.transform),this.viewportScale=P.scale,this.baseTransform=(0,r.getCurrentTransform)(this.ctx)}executeOperatorList(I,P,O,q){const b=I.argsArray,D=I.fnArray;let N=P||0;const j=b.length;if(j===N)return N;const V=j-N>C&&typeof O=="function",Z=V?Date.now()+y:0;let Q=0;const ie=this.commonObjs,ce=this.objs;let ne;for(;;){if(q!==void 0&&N===q.nextBreakPoint)return q.breakIt(N,O),N;if(ne=D[N],ne!==s.OPS.dependency)this[ne].apply(this,b[N]);else for(const de of b[N]){const fe=de.startsWith("g_")?ie:ce;if(!fe.has(de))return fe.get(de,O),N}if(N++,N===j)return N;if(V&&++Q>C){if(Date.now()>Z)return O(),N;Q=0}}}#e(){for(;this.stateStack.length||this.inSMaskMode;)this.restore();this.ctx.restore(),this.transparentCanvas&&(this.ctx=this.compositeCtx,this.ctx.save(),this.ctx.setTransform(1,0,0,1,0,0),this.ctx.drawImage(this.transparentCanvas,0,0),this.ctx.restore(),this.transparentCanvas=null)}endDrawing(){this.#e(),this.cachedCanvases.clear(),this.cachedPatterns.clear();for(const I of this._cachedBitmapsMap.values()){for(const P of I.values())typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement&&(P.width=P.height=0);I.clear()}this._cachedBitmapsMap.clear(),this.#t()}#t(){if(this.pageColors){const I=this.filterFactory.addHCMFilter(this.pageColors.foreground,this.pageColors.background);if(I!=="none"){const P=this.ctx.filter;this.ctx.filter=I,this.ctx.drawImage(this.ctx.canvas,0,0),this.ctx.filter=P}}}_scaleImage(I,P){const O=I.width,q=I.height;let b=Math.max(Math.hypot(P[0],P[1]),1),D=Math.max(Math.hypot(P[2],P[3]),1),N=O,j=q,V="prescale1",Z,Q;for(;b>2&&N>1||D>2&&j>1;){let ie=N,ce=j;b>2&&N>1&&(ie=N>=16384?Math.floor(N/2)-1||1:Math.ceil(N/2),b/=N/ie),D>2&&j>1&&(ce=j>=16384?Math.floor(j/2)-1||1:Math.ceil(j)/2,D/=j/ce),Z=this.cachedCanvases.getCanvas(V,ie,ce),Q=Z.context,Q.clearRect(0,0,ie,ce),Q.drawImage(I,0,0,N,j,0,0,ie,ce),I=Z.canvas,N=ie,j=ce,V=V==="prescale1"?"prescale2":"prescale1"}return{img:I,paintWidth:N,paintHeight:j}}_createMaskCanvas(I){const P=this.ctx,{width:O,height:q}=I,b=this.current.fillColor,D=this.current.patternFill,N=(0,r.getCurrentTransform)(P);let j,V,Z,Q;if((I.bitmap||I.data)&&I.count>1){const be=I.bitmap||I.data.buffer;V=JSON.stringify(D?N:[N.slice(0,4),b]),j=this._cachedBitmapsMap.get(be),j||(j=new Map,this._cachedBitmapsMap.set(be,j));const _e=j.get(V);if(_e&&!D){const ve=Math.round(Math.min(N[0],N[2])+N[4]),ke=Math.round(Math.min(N[1],N[3])+N[5]);return{canvas:_e,offsetX:ve,offsetY:ke}}Z=_e}Z||(Q=this.cachedCanvases.getCanvas("maskCanvas",O,q),B(Q.context,I));let ie=s.Util.transform(N,[1/O,0,0,-1/q,0,0]);ie=s.Util.transform(ie,[1,0,0,1,0,-q]);const ce=s.Util.applyTransform([0,0],ie),ne=s.Util.applyTransform([O,q],ie),de=s.Util.normalizeRect([ce[0],ce[1],ne[0],ne[1]]),fe=Math.round(de[2]-de[0])||1,ue=Math.round(de[3]-de[1])||1,ge=this.cachedCanvases.getCanvas("fillCanvas",fe,ue),Ae=ge.context,ye=Math.min(ce[0],ne[0]),we=Math.min(ce[1],ne[1]);Ae.translate(-ye,-we),Ae.transform(...ie),Z||(Z=this._scaleImage(Q.canvas,(0,r.getCurrentTransformInverse)(Ae)),Z=Z.img,j&&D&&j.set(V,Z)),Ae.imageSmoothingEnabled=he((0,r.getCurrentTransform)(Ae),I.interpolate),v(Ae,Z,0,0,Z.width,Z.height,0,0,O,q),Ae.globalCompositeOperation="source-in";const xe=s.Util.transform((0,r.getCurrentTransformInverse)(Ae),[1,0,0,1,-ye,-we]);return Ae.fillStyle=D?b.getPattern(P,this,xe,o.PathType.FILL):b,Ae.fillRect(0,0,O,q),j&&!D&&(this.cachedCanvases.delete("fillCanvas"),j.set(V,ge.canvas)),{canvas:ge.canvas,offsetX:Math.round(ye),offsetY:Math.round(we)}}setLineWidth(I){I!==this.current.lineWidth&&(this._cachedScaleForStroking=null),this.current.lineWidth=I,this.ctx.lineWidth=I}setLineCap(I){this.ctx.lineCap=re[I]}setLineJoin(I){this.ctx.lineJoin=pe[I]}setMiterLimit(I){this.ctx.miterLimit=I}setDash(I,P){const O=this.ctx;O.setLineDash!==void 0&&(O.setLineDash(I),O.lineDashOffset=P)}setRenderingIntent(I){}setFlatness(I){}setGState(I){for(const[P,O]of I)switch(P){case"LW":this.setLineWidth(O);break;case"LC":this.setLineCap(O);break;case"LJ":this.setLineJoin(O);break;case"ML":this.setMiterLimit(O);break;case"D":this.setDash(O[0],O[1]);break;case"RI":this.setRenderingIntent(O);break;case"FL":this.setFlatness(O);break;case"Font":this.setFont(O[0],O[1]);break;case"CA":this.current.strokeAlpha=O;break;case"ca":this.current.fillAlpha=O,this.ctx.globalAlpha=O;break;case"BM":this.ctx.globalCompositeOperation=O;break;case"SMask":this.current.activeSMask=O?this.tempSMask:null,this.tempSMask=null,this.checkSMaskState();break;case"TR":this.ctx.filter=this.current.transferMaps=this.filterFactory.addFilter(O);break}}get inSMaskMode(){return!!this.suspendedCtx}checkSMaskState(){const I=this.inSMaskMode;this.current.activeSMask&&!I?this.beginSMaskMode():!this.current.activeSMask&&I&&this.endSMaskMode()}beginSMaskMode(){if(this.inSMaskMode)throw new Error("beginSMaskMode called while already in smask mode");const I=this.ctx.canvas.width,P=this.ctx.canvas.height,O="smaskGroupAt"+this.groupLevel,q=this.cachedCanvases.getCanvas(O,I,P);this.suspendedCtx=this.ctx,this.ctx=q.context;const b=this.ctx;b.setTransform(...(0,r.getCurrentTransform)(this.suspendedCtx)),X(this.suspendedCtx,b),_(b,this.suspendedCtx),this.setGState([["BM","source-over"],["ca",1],["CA",1]])}endSMaskMode(){if(!this.inSMaskMode)throw new Error("endSMaskMode called while not in smask mode");this.ctx._removeMirroring(),X(this.ctx,this.suspendedCtx),this.ctx=this.suspendedCtx,this.suspendedCtx=null}compose(I){if(!this.current.activeSMask)return;I?(I[0]=Math.floor(I[0]),I[1]=Math.floor(I[1]),I[2]=Math.ceil(I[2]),I[3]=Math.ceil(I[3])):I=[0,0,this.ctx.canvas.width,this.ctx.canvas.height];const P=this.current.activeSMask,O=this.suspendedCtx;te(O,P,this.ctx,I),this.ctx.save(),this.ctx.setTransform(1,0,0,1,0,0),this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height),this.ctx.restore()}save(){this.inSMaskMode?(X(this.ctx,this.suspendedCtx),this.suspendedCtx.save()):this.ctx.save();const I=this.current;this.stateStack.push(I),this.current=I.clone()}restore(){this.stateStack.length===0&&this.inSMaskMode&&this.endSMaskMode(),this.stateStack.length!==0&&(this.current=this.stateStack.pop(),this.inSMaskMode?(this.suspendedCtx.restore(),X(this.suspendedCtx,this.ctx)):this.ctx.restore(),this.checkSMaskState(),this.pendingClip=null,this._cachedScaleForStroking=null,this._cachedGetSinglePixelWidth=null)}transform(I,P,O,q,b,D){this.ctx.transform(I,P,O,q,b,D),this._cachedScaleForStroking=null,this._cachedGetSinglePixelWidth=null}constructPath(I,P,O){const q=this.ctx,b=this.current;let D=b.x,N=b.y,j,V;const Z=(0,r.getCurrentTransform)(q),Q=Z[0]===0&&Z[3]===0||Z[1]===0&&Z[2]===0,ie=Q?O.slice(0):null;for(let ce=0,ne=0,de=I.length;ce<de;ce++)switch(I[ce]|0){case s.OPS.rectangle:D=P[ne++],N=P[ne++];const fe=P[ne++],ue=P[ne++],ge=D+fe,Ae=N+ue;q.moveTo(D,N),fe===0||ue===0?q.lineTo(ge,Ae):(q.lineTo(ge,N),q.lineTo(ge,Ae),q.lineTo(D,Ae)),Q||b.updateRectMinMax(Z,[D,N,ge,Ae]),q.closePath();break;case s.OPS.moveTo:D=P[ne++],N=P[ne++],q.moveTo(D,N),Q||b.updatePathMinMax(Z,D,N);break;case s.OPS.lineTo:D=P[ne++],N=P[ne++],q.lineTo(D,N),Q||b.updatePathMinMax(Z,D,N);break;case s.OPS.curveTo:j=D,V=N,D=P[ne+4],N=P[ne+5],q.bezierCurveTo(P[ne],P[ne+1],P[ne+2],P[ne+3],D,N),b.updateCurvePathMinMax(Z,j,V,P[ne],P[ne+1],P[ne+2],P[ne+3],D,N,ie),ne+=6;break;case s.OPS.curveTo2:j=D,V=N,q.bezierCurveTo(D,N,P[ne],P[ne+1],P[ne+2],P[ne+3]),b.updateCurvePathMinMax(Z,j,V,D,N,P[ne],P[ne+1],P[ne+2],P[ne+3],ie),D=P[ne+2],N=P[ne+3],ne+=4;break;case s.OPS.curveTo3:j=D,V=N,D=P[ne+2],N=P[ne+3],q.bezierCurveTo(P[ne],P[ne+1],D,N,D,N),b.updateCurvePathMinMax(Z,j,V,P[ne],P[ne+1],D,N,D,N,ie),ne+=4;break;case s.OPS.closePath:q.closePath();break}Q&&b.updateScalingPathMinMax(Z,ie),b.setCurrentPoint(D,N)}closePath(){this.ctx.closePath()}stroke(I=!0){const P=this.ctx,O=this.current.strokeColor;P.globalAlpha=this.current.strokeAlpha,this.contentVisible&&(typeof O=="object"&&O?.getPattern?(P.save(),P.strokeStyle=O.getPattern(P,this,(0,r.getCurrentTransformInverse)(P),o.PathType.STROKE),this.rescaleAndStroke(!1),P.restore()):this.rescaleAndStroke(!0)),I&&this.consumePath(this.current.getClippedPathBoundingBox()),P.globalAlpha=this.current.fillAlpha}closeStroke(){this.closePath(),this.stroke()}fill(I=!0){const P=this.ctx,O=this.current.fillColor,q=this.current.patternFill;let b=!1;q&&(P.save(),P.fillStyle=O.getPattern(P,this,(0,r.getCurrentTransformInverse)(P),o.PathType.FILL),b=!0);const D=this.current.getClippedPathBoundingBox();this.contentVisible&&D!==null&&(this.pendingEOFill?(P.fill("evenodd"),this.pendingEOFill=!1):P.fill()),b&&P.restore(),I&&this.consumePath(D)}eoFill(){this.pendingEOFill=!0,this.fill()}fillStroke(){this.fill(!1),this.stroke(!1),this.consumePath()}eoFillStroke(){this.pendingEOFill=!0,this.fillStroke()}closeFillStroke(){this.closePath(),this.fillStroke()}closeEOFillStroke(){this.pendingEOFill=!0,this.closePath(),this.fillStroke()}endPath(){this.consumePath()}clip(){this.pendingClip=le}eoClip(){this.pendingClip=J}beginText(){this.current.textMatrix=s.IDENTITY_MATRIX,this.current.textMatrixScale=1,this.current.x=this.current.lineX=0,this.current.y=this.current.lineY=0}endText(){const I=this.pendingTextPaths,P=this.ctx;if(I===void 0){P.beginPath();return}P.save(),P.beginPath();for(const O of I)P.setTransform(...O.transform),P.translate(O.x,O.y),O.addToPath(P,O.fontSize);P.restore(),P.clip(),P.beginPath(),delete this.pendingTextPaths}setCharSpacing(I){this.current.charSpacing=I}setWordSpacing(I){this.current.wordSpacing=I}setHScale(I){this.current.textHScale=I/100}setLeading(I){this.current.leading=-I}setFont(I,P){const O=this.commonObjs.get(I),q=this.current;if(!O)throw new Error(`Can't find font for ${I}`);if(q.fontMatrix=O.fontMatrix||s.FONT_IDENTITY_MATRIX,(q.fontMatrix[0]===0||q.fontMatrix[3]===0)&&(0,s.warn)("Invalid font matrix for font "+I),P<0?(P=-P,q.fontDirection=-1):q.fontDirection=1,this.current.font=O,this.current.fontSize=P,O.isType3Font)return;const b=O.loadedName||"sans-serif";let D="normal";O.black?D="900":O.bold&&(D="bold");const N=O.italic?"italic":"normal",j=`"${b}", ${O.fallbackName}`;let V=P;P<m?V=m:P>g&&(V=g),this.current.fontSizeScale=P/V,this.ctx.font=`${N} ${D} ${V}px ${j}`}setTextRenderingMode(I){this.current.textRenderingMode=I}setTextRise(I){this.current.textRise=I}moveText(I,P){this.current.x=this.current.lineX+=I,this.current.y=this.current.lineY+=P}setLeadingMoveText(I,P){this.setLeading(-P),this.moveText(I,P)}setTextMatrix(I,P,O,q,b,D){this.current.textMatrix=[I,P,O,q,b,D],this.current.textMatrixScale=Math.hypot(I,P),this.current.x=this.current.lineX=0,this.current.y=this.current.lineY=0}nextLine(){this.moveText(0,this.current.leading)}paintChar(I,P,O,q){const b=this.ctx,D=this.current,N=D.font,j=D.textRenderingMode,V=D.fontSize/D.fontSizeScale,Z=j&s.TextRenderingMode.FILL_STROKE_MASK,Q=!!(j&s.TextRenderingMode.ADD_TO_PATH_FLAG),ie=D.patternFill&&!N.missingFile;let ce;(N.disableFontFace||Q||ie)&&(ce=N.getPathGenerator(this.commonObjs,I)),N.disableFontFace||ie?(b.save(),b.translate(P,O),b.beginPath(),ce(b,V),q&&b.setTransform(...q),(Z===s.TextRenderingMode.FILL||Z===s.TextRenderingMode.FILL_STROKE)&&b.fill(),(Z===s.TextRenderingMode.STROKE||Z===s.TextRenderingMode.FILL_STROKE)&&b.stroke(),b.restore()):((Z===s.TextRenderingMode.FILL||Z===s.TextRenderingMode.FILL_STROKE)&&b.fillText(I,P,O),(Z===s.TextRenderingMode.STROKE||Z===s.TextRenderingMode.FILL_STROKE)&&b.strokeText(I,P,O)),Q&&(this.pendingTextPaths||(this.pendingTextPaths=[])).push({transform:(0,r.getCurrentTransform)(b),x:P,y:O,fontSize:V,addToPath:ce})}get isFontSubpixelAAEnabled(){const{context:I}=this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled",10,10);I.scale(1.5,1),I.fillText("I",0,10);const P=I.getImageData(0,0,10,10).data;let O=!1;for(let q=3;q<P.length;q+=4)if(P[q]>0&&P[q]<255){O=!0;break}return(0,s.shadow)(this,"isFontSubpixelAAEnabled",O)}showText(I){const P=this.current,O=P.font;if(O.isType3Font)return this.showType3Text(I);const q=P.fontSize;if(q===0)return;const b=this.ctx,D=P.fontSizeScale,N=P.charSpacing,j=P.wordSpacing,V=P.fontDirection,Z=P.textHScale*V,Q=I.length,ie=O.vertical,ce=ie?1:-1,ne=O.defaultVMetrics,de=q*P.fontMatrix[0],fe=P.textRenderingMode===s.TextRenderingMode.FILL&&!O.disableFontFace&&!P.patternFill;b.save(),b.transform(...P.textMatrix),b.translate(P.x,P.y+P.textRise),V>0?b.scale(Z,-1):b.scale(Z,1);let ue;if(P.patternFill){b.save();const xe=P.fillColor.getPattern(b,this,(0,r.getCurrentTransformInverse)(b),o.PathType.FILL);ue=(0,r.getCurrentTransform)(b),b.restore(),b.fillStyle=xe}let ge=P.lineWidth;const Ae=P.textMatrixScale;if(Ae===0||ge===0){const xe=P.textRenderingMode&s.TextRenderingMode.FILL_STROKE_MASK;(xe===s.TextRenderingMode.STROKE||xe===s.TextRenderingMode.FILL_STROKE)&&(ge=this.getSinglePixelWidth())}else ge/=Ae;if(D!==1&&(b.scale(D,D),ge/=D),b.lineWidth=ge,O.isInvalidPDFjsFont){const xe=[];let be=0;for(const _e of I)xe.push(_e.unicode),be+=_e.width;b.fillText(xe.join(""),0,0),P.x+=be*de*Z,b.restore(),this.compose();return}let ye=0,we;for(we=0;we<Q;++we){const xe=I[we];if(typeof xe=="number"){ye+=ce*xe*q/1e3;continue}let be=!1;const _e=(xe.isSpace?j:0)+N,ve=xe.fontChar,ke=xe.accent;let Ee,Fe,Pe=xe.width;if(ie){const Ie=xe.vmetric||ne,Le=-(xe.vmetric?Ie[1]:Pe*.5)*de,We=Ie[2]*de;Pe=Ie?-Ie[0]:Pe,Ee=Le/D,Fe=(ye+We)/D}else Ee=ye/D,Fe=0;if(O.remeasure&&Pe>0){const Ie=b.measureText(ve).width*1e3/q*D;if(Pe<Ie&&this.isFontSubpixelAAEnabled){const Le=Pe/Ie;be=!0,b.save(),b.scale(Le,1),Ee/=Le}else Pe!==Ie&&(Ee+=(Pe-Ie)/2e3*q/D)}if(this.contentVisible&&(xe.isInFont||O.missingFile)){if(fe&&!ke)b.fillText(ve,Ee,Fe);else if(this.paintChar(ve,Ee,Fe,ue),ke){const Ie=Ee+q*ke.offset.x/D,Le=Fe-q*ke.offset.y/D;this.paintChar(ke.fontChar,Ie,Le,ue)}}let Ne;ie?Ne=Pe*de-_e*V:Ne=Pe*de+_e*V,ye+=Ne,be&&b.restore()}ie?P.y-=ye:P.x+=ye*Z,b.restore(),this.compose()}showType3Text(I){const P=this.ctx,O=this.current,q=O.font,b=O.fontSize,D=O.fontDirection,N=q.vertical?1:-1,j=O.charSpacing,V=O.wordSpacing,Z=O.textHScale*D,Q=O.fontMatrix||s.FONT_IDENTITY_MATRIX,ie=I.length,ce=O.textRenderingMode===s.TextRenderingMode.INVISIBLE;let ne,de,fe,ue;if(!(ce||b===0)){for(this._cachedScaleForStroking=null,this._cachedGetSinglePixelWidth=null,P.save(),P.transform(...O.textMatrix),P.translate(O.x,O.y),P.scale(Z,D),ne=0;ne<ie;++ne){if(de=I[ne],typeof de=="number"){ue=N*de*b/1e3,this.ctx.translate(ue,0),O.x+=ue*Z;continue}const ge=(de.isSpace?V:0)+j,Ae=q.charProcOperatorList[de.operatorListId];if(!Ae){(0,s.warn)(`Type3 character "${de.operatorListId}" is not available.`);continue}this.contentVisible&&(this.processingType3=de,this.save(),P.scale(b,b),P.transform(...Q),this.executeOperatorList(Ae),this.restore()),fe=s.Util.applyTransform([de.width,0],Q)[0]*b+ge,P.translate(fe,0),O.x+=fe*Z}P.restore(),this.processingType3=null}}setCharWidth(I,P){}setCharWidthAndBounds(I,P,O,q,b,D){this.ctx.rect(O,q,b-O,D-q),this.ctx.clip(),this.endPath()}getColorN_Pattern(I){let P;if(I[0]==="TilingPattern"){const O=I[1],q=this.baseTransform||(0,r.getCurrentTransform)(this.ctx),b={createCanvasGraphics:D=>new se(D,this.commonObjs,this.objs,this.canvasFactory,this.filterFactory,{optionalContentConfig:this.optionalContentConfig,markedContentStack:this.markedContentStack})};P=new o.TilingPattern(I,O,this.ctx,b,q)}else P=this._getPattern(I[1],I[2]);return P}setStrokeColorN(){this.current.strokeColor=this.getColorN_Pattern(arguments)}setFillColorN(){this.current.fillColor=this.getColorN_Pattern(arguments),this.current.patternFill=!0}setStrokeRGBColor(I,P,O){const q=s.Util.makeHexColor(I,P,O);this.ctx.strokeStyle=q,this.current.strokeColor=q}setFillRGBColor(I,P,O){const q=s.Util.makeHexColor(I,P,O);this.ctx.fillStyle=q,this.current.fillColor=q,this.current.patternFill=!1}_getPattern(I,P=null){let O;return this.cachedPatterns.has(I)?O=this.cachedPatterns.get(I):(O=(0,o.getShadingPattern)(this.getObject(I)),this.cachedPatterns.set(I,O)),P&&(O.matrix=P),O}shadingFill(I){if(!this.contentVisible)return;const P=this.ctx;this.save();const O=this._getPattern(I);P.fillStyle=O.getPattern(P,this,(0,r.getCurrentTransformInverse)(P),o.PathType.SHADING);const q=(0,r.getCurrentTransformInverse)(P);if(q){const b=P.canvas,D=b.width,N=b.height,j=s.Util.applyTransform([0,0],q),V=s.Util.applyTransform([0,N],q),Z=s.Util.applyTransform([D,0],q),Q=s.Util.applyTransform([D,N],q),ie=Math.min(j[0],V[0],Z[0],Q[0]),ce=Math.min(j[1],V[1],Z[1],Q[1]),ne=Math.max(j[0],V[0],Z[0],Q[0]),de=Math.max(j[1],V[1],Z[1],Q[1]);this.ctx.fillRect(ie,ce,ne-ie,de-ce)}else this.ctx.fillRect(-1e10,-1e10,2e10,2e10);this.compose(this.current.getClippedPathBoundingBox()),this.restore()}beginInlineImage(){(0,s.unreachable)("Should not call beginInlineImage")}beginImageData(){(0,s.unreachable)("Should not call beginImageData")}paintFormXObjectBegin(I,P){if(this.contentVisible&&(this.save(),this.baseTransformStack.push(this.baseTransform),Array.isArray(I)&&I.length===6&&this.transform(...I),this.baseTransform=(0,r.getCurrentTransform)(this.ctx),P)){const O=P[2]-P[0],q=P[3]-P[1];this.ctx.rect(P[0],P[1],O,q),this.current.updateRectMinMax((0,r.getCurrentTransform)(this.ctx),P),this.clip(),this.endPath()}}paintFormXObjectEnd(){this.contentVisible&&(this.restore(),this.baseTransform=this.baseTransformStack.pop())}beginGroup(I){if(!this.contentVisible)return;this.save(),this.inSMaskMode&&(this.endSMaskMode(),this.current.activeSMask=null);const P=this.ctx;I.isolated||(0,s.info)("TODO: Support non-isolated groups."),I.knockout&&(0,s.warn)("Knockout groups not supported.");const O=(0,r.getCurrentTransform)(P);if(I.matrix&&P.transform(...I.matrix),!I.bbox)throw new Error("Bounding box is required.");let q=s.Util.getAxialAlignedBoundingBox(I.bbox,(0,r.getCurrentTransform)(P));const b=[0,0,P.canvas.width,P.canvas.height];q=s.Util.intersect(q,b)||[0,0,0,0];const D=Math.floor(q[0]),N=Math.floor(q[1]);let j=Math.max(Math.ceil(q[2])-D,1),V=Math.max(Math.ceil(q[3])-N,1),Z=1,Q=1;j>p&&(Z=j/p,j=p),V>p&&(Q=V/p,V=p),this.current.startNewPathAndClipBox([0,0,j,V]);let ie="groupAt"+this.groupLevel;I.smask&&(ie+="_smask_"+this.smaskCounter++%2);const ce=this.cachedCanvases.getCanvas(ie,j,V),ne=ce.context;ne.scale(1/Z,1/Q),ne.translate(-D,-N),ne.transform(...O),I.smask?this.smaskStack.push({canvas:ce.canvas,context:ne,offsetX:D,offsetY:N,scaleX:Z,scaleY:Q,subtype:I.smask.subtype,backdrop:I.smask.backdrop,transferMap:I.smask.transferMap||null,startTransformInverse:null}):(P.setTransform(1,0,0,1,0,0),P.translate(D,N),P.scale(Z,Q),P.save()),X(P,ne),this.ctx=ne,this.setGState([["BM","source-over"],["ca",1],["CA",1]]),this.groupStack.push(P),this.groupLevel++}endGroup(I){if(!this.contentVisible)return;this.groupLevel--;const P=this.ctx,O=this.groupStack.pop();if(this.ctx=O,this.ctx.imageSmoothingEnabled=!1,I.smask)this.tempSMask=this.smaskStack.pop(),this.restore();else{this.ctx.restore();const q=(0,r.getCurrentTransform)(this.ctx);this.restore(),this.ctx.save(),this.ctx.setTransform(...q);const b=s.Util.getAxialAlignedBoundingBox([0,0,P.canvas.width,P.canvas.height],q);this.ctx.drawImage(P.canvas,0,0),this.ctx.restore(),this.compose(b)}}beginAnnotation(I,P,O,q,b){if(this.#e(),U(this.ctx),this.ctx.save(),this.save(),this.baseTransform&&this.ctx.setTransform(...this.baseTransform),Array.isArray(P)&&P.length===4){const D=P[2]-P[0],N=P[3]-P[1];if(b&&this.annotationCanvasMap){O=O.slice(),O[4]-=P[0],O[5]-=P[1],P=P.slice(),P[0]=P[1]=0,P[2]=D,P[3]=N;const[j,V]=s.Util.singularValueDecompose2dScale((0,r.getCurrentTransform)(this.ctx)),{viewportScale:Z}=this,Q=Math.ceil(D*this.outputScaleX*Z),ie=Math.ceil(N*this.outputScaleY*Z);this.annotationCanvas=this.canvasFactory.create(Q,ie);const{canvas:ce,context:ne}=this.annotationCanvas;this.annotationCanvasMap.set(I,ce),this.annotationCanvas.savedCtx=this.ctx,this.ctx=ne,this.ctx.save(),this.ctx.setTransform(j,0,0,-V,0,N*V),U(this.ctx)}else U(this.ctx),this.ctx.rect(P[0],P[1],D,N),this.ctx.clip(),this.endPath()}this.current=new R(this.ctx.canvas.width,this.ctx.canvas.height),this.transform(...O),this.transform(...q)}endAnnotation(){this.annotationCanvas&&(this.ctx.restore(),this.#t(),this.ctx=this.annotationCanvas.savedCtx,delete this.annotationCanvas.savedCtx,delete this.annotationCanvas)}paintImageMaskXObject(I){if(!this.contentVisible)return;const P=I.count;I=this.getObject(I.data,I),I.count=P;const O=this.ctx,q=this.processingType3;if(q&&(q.compiled===void 0&&(q.compiled=k(I)),q.compiled)){q.compiled(O);return}const b=this._createMaskCanvas(I),D=b.canvas;O.save(),O.setTransform(1,0,0,1,0,0),O.drawImage(D,b.offsetX,b.offsetY),O.restore(),this.compose()}paintImageMaskXObjectRepeat(I,P,O=0,q=0,b,D){if(!this.contentVisible)return;I=this.getObject(I.data,I);const N=this.ctx;N.save();const j=(0,r.getCurrentTransform)(N);N.transform(P,O,q,b,0,0);const V=this._createMaskCanvas(I);N.setTransform(1,0,0,1,V.offsetX-j[4],V.offsetY-j[5]);for(let Z=0,Q=D.length;Z<Q;Z+=2){const ie=s.Util.transform(j,[P,O,q,b,D[Z],D[Z+1]]),[ce,ne]=s.Util.applyTransform([0,0],ie);N.drawImage(V.canvas,ce,ne)}N.restore(),this.compose()}paintImageMaskXObjectGroup(I){if(!this.contentVisible)return;const P=this.ctx,O=this.current.fillColor,q=this.current.patternFill;for(const b of I){const{data:D,width:N,height:j,transform:V}=b,Z=this.cachedCanvases.getCanvas("maskCanvas",N,j),Q=Z.context;Q.save();const ie=this.getObject(D,b);B(Q,ie),Q.globalCompositeOperation="source-in",Q.fillStyle=q?O.getPattern(Q,this,(0,r.getCurrentTransformInverse)(P),o.PathType.FILL):O,Q.fillRect(0,0,N,j),Q.restore(),P.save(),P.transform(...V),P.scale(1,-1),v(P,Z.canvas,0,0,N,j,0,-1,1,1),P.restore()}this.compose()}paintImageXObject(I){if(!this.contentVisible)return;const P=this.getObject(I);if(!P){(0,s.warn)("Dependent image isn't ready yet");return}this.paintInlineImageXObject(P)}paintImageXObjectRepeat(I,P,O,q){if(!this.contentVisible)return;const b=this.getObject(I);if(!b){(0,s.warn)("Dependent image isn't ready yet");return}const D=b.width,N=b.height,j=[];for(let V=0,Z=q.length;V<Z;V+=2)j.push({transform:[P,0,0,O,q[V],q[V+1]],x:0,y:0,w:D,h:N});this.paintInlineImageXObjectGroup(b,j)}applyTransferMapsToCanvas(I){return this.current.transferMaps!=="none"&&(I.filter=this.current.transferMaps,I.drawImage(I.canvas,0,0),I.filter="none"),I.canvas}applyTransferMapsToBitmap(I){if(this.current.transferMaps==="none")return I.bitmap;const{bitmap:P,width:O,height:q}=I,b=this.cachedCanvases.getCanvas("inlineImage",O,q),D=b.context;return D.filter=this.current.transferMaps,D.drawImage(P,0,0),D.filter="none",b.canvas}paintInlineImageXObject(I){if(!this.contentVisible)return;const P=I.width,O=I.height,q=this.ctx;this.save(),f.isNodeJS||(q.filter="none"),q.scale(1/P,-1/O);let b;if(I.bitmap)b=this.applyTransferMapsToBitmap(I);else if(typeof HTMLElement=="function"&&I instanceof HTMLElement||!I.data)b=I;else{const j=this.cachedCanvases.getCanvas("inlineImage",P,O).context;L(j,I),b=this.applyTransferMapsToCanvas(j)}const D=this._scaleImage(b,(0,r.getCurrentTransformInverse)(q));q.imageSmoothingEnabled=he((0,r.getCurrentTransform)(q),I.interpolate),v(q,D.img,0,0,D.paintWidth,D.paintHeight,0,-O,P,O),this.compose(),this.restore()}paintInlineImageXObjectGroup(I,P){if(!this.contentVisible)return;const O=this.ctx;let q;if(I.bitmap)q=I.bitmap;else{const b=I.width,D=I.height,j=this.cachedCanvases.getCanvas("inlineImage",b,D).context;L(j,I),q=this.applyTransferMapsToCanvas(j)}for(const b of P)O.save(),O.transform(...b.transform),O.scale(1,-1),v(O,q,b.x,b.y,b.w,b.h,0,-1,1,1),O.restore();this.compose()}paintSolidColorImageMask(){this.contentVisible&&(this.ctx.fillRect(0,0,1,1),this.compose())}markPoint(I){}markPointProps(I,P){}beginMarkedContent(I){this.markedContentStack.push({visible:!0})}beginMarkedContentProps(I,P){I==="OC"?this.markedContentStack.push({visible:this.optionalContentConfig.isVisible(P)}):this.markedContentStack.push({visible:!0}),this.contentVisible=this.isContentVisible()}endMarkedContent(){this.markedContentStack.pop(),this.contentVisible=this.isContentVisible()}beginCompat(){}endCompat(){}consumePath(I){const P=this.current.isEmptyClip();this.pendingClip&&this.current.updateClipFromPath(),this.pendingClip||this.compose(I);const O=this.ctx;this.pendingClip&&(P||(this.pendingClip===J?O.clip("evenodd"):O.clip()),this.pendingClip=null),this.current.startNewPathAndClipBox(this.current.clipBox),O.beginPath()}getSinglePixelWidth(){if(!this._cachedGetSinglePixelWidth){const I=(0,r.getCurrentTransform)(this.ctx);if(I[1]===0&&I[2]===0)this._cachedGetSinglePixelWidth=1/Math.min(Math.abs(I[0]),Math.abs(I[3]));else{const P=Math.abs(I[0]*I[3]-I[2]*I[1]),O=Math.hypot(I[0],I[2]),q=Math.hypot(I[1],I[3]);this._cachedGetSinglePixelWidth=Math.max(O,q)/P}}return this._cachedGetSinglePixelWidth}getScaleForStroking(){if(!this._cachedScaleForStroking){const{lineWidth:I}=this.current,P=(0,r.getCurrentTransform)(this.ctx);let O,q;if(P[1]===0&&P[2]===0){const b=Math.abs(P[0]),D=Math.abs(P[3]);if(I===0)O=1/b,q=1/D;else{const N=b*I,j=D*I;O=N<1?1/N:1,q=j<1?1/j:1}}else{const b=Math.abs(P[0]*P[3]-P[2]*P[1]),D=Math.hypot(P[0],P[1]),N=Math.hypot(P[2],P[3]);if(I===0)O=N/b,q=D/b;else{const j=I*b;O=N>j?N/j:1,q=D>j?D/j:1}}this._cachedScaleForStroking=[O,q]}return this._cachedScaleForStroking}rescaleAndStroke(I){const{ctx:P}=this,{lineWidth:O}=this.current,[q,b]=this.getScaleForStroking();if(P.lineWidth=O||1,q===1&&b===1){P.stroke();return}let D,N,j;I&&(D=(0,r.getCurrentTransform)(P),N=P.getLineDash().slice(),j=P.lineDashOffset),P.scale(q,b);const V=Math.max(q,b);P.setLineDash(P.getLineDash().map(Z=>Z/V)),P.lineDashOffset/=V,P.stroke(),I&&(P.setTransform(...D),P.setLineDash(N),P.lineDashOffset=j)}isContentVisible(){for(let I=this.markedContentStack.length-1;I>=0;I--)if(!this.markedContentStack[I].visible)return!1;return!0}}e.CanvasGraphics=se;for(const Y in s.OPS)se.prototype[Y]!==void 0&&(se.prototype[s.OPS[Y]]=se.prototype[Y])},(c,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.TilingPattern=e.PathType=void 0,e.getShadingPattern=A;var s=t(1),r=t(6);const o={FILL:"Fill",STROKE:"Stroke",SHADING:"Shading"};e.PathType=o;function a(E,v){if(!v)return;const k=v[2]-v[0],R=v[3]-v[1],L=new Path2D;L.rect(v[0],v[1],k,R),E.clip(L)}class f{constructor(){this.constructor===f&&(0,s.unreachable)("Cannot initialize BaseShadingPattern.")}getPattern(){(0,s.unreachable)("Abstract method `getPattern` called.")}}class m extends f{constructor(v){super(),this._type=v[1],this._bbox=v[2],this._colorStops=v[3],this._p0=v[4],this._p1=v[5],this._r0=v[6],this._r1=v[7],this.matrix=null}_createGradient(v){let k;this._type==="axial"?k=v.createLinearGradient(this._p0[0],this._p0[1],this._p1[0],this._p1[1]):this._type==="radial"&&(k=v.createRadialGradient(this._p0[0],this._p0[1],this._r0,this._p1[0],this._p1[1],this._r1));for(const R of this._colorStops)k.addColorStop(R[0],R[1]);return k}getPattern(v,k,R,L){let B;if(L===o.STROKE||L===o.FILL){const X=k.current.getClippedPathBoundingBox(L,(0,r.getCurrentTransform)(v))||[0,0,0,0],U=Math.ceil(X[2]-X[0])||1,M=Math.ceil(X[3]-X[1])||1,F=k.cachedCanvases.getCanvas("pattern",U,M,!0),$=F.context;$.clearRect(0,0,$.canvas.width,$.canvas.height),$.beginPath(),$.rect(0,0,$.canvas.width,$.canvas.height),$.translate(-X[0],-X[1]),R=s.Util.transform(R,[1,0,0,1,X[0],X[1]]),$.transform(...k.baseTransform),this.matrix&&$.transform(...this.matrix),a($,this._bbox),$.fillStyle=this._createGradient($),$.fill(),B=v.createPattern(F.canvas,"no-repeat");const ee=new DOMMatrix(R);B.setTransform(ee)}else a(v,this._bbox),B=this._createGradient(v);return B}}function g(E,v,k,R,L,B,X,U){const M=v.coords,F=v.colors,$=E.data,ee=E.width*4;let te;M[k+1]>M[R+1]&&(te=k,k=R,R=te,te=B,B=X,X=te),M[R+1]>M[L+1]&&(te=R,R=L,L=te,te=X,X=U,U=te),M[k+1]>M[R+1]&&(te=k,k=R,R=te,te=B,B=X,X=te);const he=(M[k]+v.offsetX)*v.scaleX,re=(M[k+1]+v.offsetY)*v.scaleY,pe=(M[R]+v.offsetX)*v.scaleX,le=(M[R+1]+v.offsetY)*v.scaleY,J=(M[L]+v.offsetX)*v.scaleX,se=(M[L+1]+v.offsetY)*v.scaleY;if(re>=se)return;const Y=F[B],I=F[B+1],P=F[B+2],O=F[X],q=F[X+1],b=F[X+2],D=F[U],N=F[U+1],j=F[U+2],V=Math.round(re),Z=Math.round(se);let Q,ie,ce,ne,de,fe,ue,ge;for(let Ae=V;Ae<=Z;Ae++){if(Ae<le){let _e;Ae<re?_e=0:_e=(re-Ae)/(re-le),Q=he-(he-pe)*_e,ie=Y-(Y-O)*_e,ce=I-(I-q)*_e,ne=P-(P-b)*_e}else{let _e;Ae>se?_e=1:le===se?_e=0:_e=(le-Ae)/(le-se),Q=pe-(pe-J)*_e,ie=O-(O-D)*_e,ce=q-(q-N)*_e,ne=b-(b-j)*_e}let ye;Ae<re?ye=0:Ae>se?ye=1:ye=(re-Ae)/(re-se),de=he-(he-J)*ye,fe=Y-(Y-D)*ye,ue=I-(I-N)*ye,ge=P-(P-j)*ye;const we=Math.round(Math.min(Q,de)),xe=Math.round(Math.max(Q,de));let be=ee*Ae+we*4;for(let _e=we;_e<=xe;_e++)ye=(Q-_e)/(Q-de),ye<0?ye=0:ye>1&&(ye=1),$[be++]=ie-(ie-fe)*ye|0,$[be++]=ce-(ce-ue)*ye|0,$[be++]=ne-(ne-ge)*ye|0,$[be++]=255}}function p(E,v,k){const R=v.coords,L=v.colors;let B,X;switch(v.type){case"lattice":const U=v.verticesPerRow,M=Math.floor(R.length/U)-1,F=U-1;for(B=0;B<M;B++){let $=B*U;for(let ee=0;ee<F;ee++,$++)g(E,k,R[$],R[$+1],R[$+U],L[$],L[$+1],L[$+U]),g(E,k,R[$+U+1],R[$+1],R[$+U],L[$+U+1],L[$+1],L[$+U])}break;case"triangles":for(B=0,X=R.length;B<X;B+=3)g(E,k,R[B],R[B+1],R[B+2],L[B],L[B+1],L[B+2]);break;default:throw new Error("illegal figure")}}class y extends f{constructor(v){super(),this._coords=v[2],this._colors=v[3],this._figures=v[4],this._bounds=v[5],this._bbox=v[7],this._background=v[8],this.matrix=null}_createMeshCanvas(v,k,R){const U=Math.floor(this._bounds[0]),M=Math.floor(this._bounds[1]),F=Math.ceil(this._bounds[2])-U,$=Math.ceil(this._bounds[3])-M,ee=Math.min(Math.ceil(Math.abs(F*v[0]*1.1)),3e3),te=Math.min(Math.ceil(Math.abs($*v[1]*1.1)),3e3),he=F/ee,re=$/te,pe={coords:this._coords,colors:this._colors,offsetX:-U,offsetY:-M,scaleX:1/he,scaleY:1/re},le=ee+2*2,J=te+2*2,se=R.getCanvas("mesh",le,J,!1),Y=se.context,I=Y.createImageData(ee,te);if(k){const O=I.data;for(let q=0,b=O.length;q<b;q+=4)O[q]=k[0],O[q+1]=k[1],O[q+2]=k[2],O[q+3]=255}for(const O of this._figures)p(I,O,pe);return Y.putImageData(I,2,2),{canvas:se.canvas,offsetX:U-2*he,offsetY:M-2*re,scaleX:he,scaleY:re}}getPattern(v,k,R,L){a(v,this._bbox);let B;if(L===o.SHADING)B=s.Util.singularValueDecompose2dScale((0,r.getCurrentTransform)(v));else if(B=s.Util.singularValueDecompose2dScale(k.baseTransform),this.matrix){const U=s.Util.singularValueDecompose2dScale(this.matrix);B=[B[0]*U[0],B[1]*U[1]]}const X=this._createMeshCanvas(B,L===o.SHADING?null:this._background,k.cachedCanvases);return L!==o.SHADING&&(v.setTransform(...k.baseTransform),this.matrix&&v.transform(...this.matrix)),v.translate(X.offsetX,X.offsetY),v.scale(X.scaleX,X.scaleY),v.createPattern(X.canvas,"no-repeat")}}class C extends f{getPattern(){return"hotpink"}}function A(E){switch(E[0]){case"RadialAxial":return new m(E);case"Mesh":return new y(E);case"Dummy":return new C}throw new Error(`Unknown IR type: ${E[0]}`)}const w={COLORED:1,UNCOLORED:2};class _{static MAX_PATTERN_SIZE=3e3;constructor(v,k,R,L,B){this.operatorList=v[2],this.matrix=v[3]||[1,0,0,1,0,0],this.bbox=v[4],this.xstep=v[5],this.ystep=v[6],this.paintType=v[7],this.tilingType=v[8],this.color=k,this.ctx=R,this.canvasGraphicsFactory=L,this.baseTransform=B}createPatternCanvas(v){const k=this.operatorList,R=this.bbox,L=this.xstep,B=this.ystep,X=this.paintType,U=this.tilingType,M=this.color,F=this.canvasGraphicsFactory;(0,s.info)("TilingType: "+U);const $=R[0],ee=R[1],te=R[2],he=R[3],re=s.Util.singularValueDecompose2dScale(this.matrix),pe=s.Util.singularValueDecompose2dScale(this.baseTransform),le=[re[0]*pe[0],re[1]*pe[1]],J=this.getSizeAndScale(L,this.ctx.canvas.width,le[0]),se=this.getSizeAndScale(B,this.ctx.canvas.height,le[1]),Y=v.cachedCanvases.getCanvas("pattern",J.size,se.size,!0),I=Y.context,P=F.createCanvasGraphics(I);P.groupLevel=v.groupLevel,this.setFillAndStrokeStyleToContext(P,X,M);let O=$,q=ee,b=te,D=he;return $<0&&(O=0,b+=Math.abs($)),ee<0&&(q=0,D+=Math.abs(ee)),I.translate(-(J.scale*O),-(se.scale*q)),P.transform(J.scale,0,0,se.scale,0,0),I.save(),this.clipBbox(P,O,q,b,D),P.baseTransform=(0,r.getCurrentTransform)(P.ctx),P.executeOperatorList(k),P.endDrawing(),{canvas:Y.canvas,scaleX:J.scale,scaleY:se.scale,offsetX:O,offsetY:q}}getSizeAndScale(v,k,R){v=Math.abs(v);const L=Math.max(_.MAX_PATTERN_SIZE,k);let B=Math.ceil(v*R);return B>=L?B=L:R=B/v,{scale:R,size:B}}clipBbox(v,k,R,L,B){const X=L-k,U=B-R;v.ctx.rect(k,R,X,U),v.current.updateRectMinMax((0,r.getCurrentTransform)(v.ctx),[k,R,L,B]),v.clip(),v.endPath()}setFillAndStrokeStyleToContext(v,k,R){const L=v.ctx,B=v.current;switch(k){case w.COLORED:const X=this.ctx;L.fillStyle=X.fillStyle,L.strokeStyle=X.strokeStyle,B.fillColor=X.fillStyle,B.strokeColor=X.strokeStyle;break;case w.UNCOLORED:const U=s.Util.makeHexColor(R[0],R[1],R[2]);L.fillStyle=U,L.strokeStyle=U,B.fillColor=U,B.strokeColor=U;break;default:throw new s.FormatError(`Unsupported paint type: ${k}`)}}getPattern(v,k,R,L){let B=R;L!==o.SHADING&&(B=s.Util.transform(B,k.baseTransform),this.matrix&&(B=s.Util.transform(B,this.matrix)));const X=this.createPatternCanvas(k);let U=new DOMMatrix(B);U=U.translate(X.offsetX,X.offsetY),U=U.scale(1/X.scaleX,1/X.scaleY);const M=v.createPattern(X.canvas,"repeat");return M.setTransform(U),M}}e.TilingPattern=_},(c,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.convertBlackAndWhiteToRGBA=o,e.convertToRGBA=r,e.grayToRGBA=f;var s=t(1);function r(m){switch(m.kind){case s.ImageKind.GRAYSCALE_1BPP:return o(m);case s.ImageKind.RGB_24BPP:return a(m)}return null}function o({src:m,srcPos:g=0,dest:p,width:y,height:C,nonBlackColor:A=4294967295,inverseDecode:w=!1}){const _=s.FeatureTest.isLittleEndian?4278190080:255,[E,v]=w?[A,_]:[_,A],k=y>>3,R=y&7,L=m.length;p=new Uint32Array(p.buffer);let B=0;for(let X=0;X<C;X++){for(const M=g+k;g<M;g++){const F=g<L?m[g]:255;p[B++]=F&128?v:E,p[B++]=F&64?v:E,p[B++]=F&32?v:E,p[B++]=F&16?v:E,p[B++]=F&8?v:E,p[B++]=F&4?v:E,p[B++]=F&2?v:E,p[B++]=F&1?v:E}if(R===0)continue;const U=g<L?m[g++]:255;for(let M=0;M<R;M++)p[B++]=U&1<<7-M?v:E}return{srcPos:g,destPos:B}}function a({src:m,srcPos:g=0,dest:p,destPos:y=0,width:C,height:A}){let w=0;const _=m.length>>2,E=new Uint32Array(m.buffer,g,_);if(s.FeatureTest.isLittleEndian){for(;w<_-2;w+=3,y+=4){const v=E[w],k=E[w+1],R=E[w+2];p[y]=v|4278190080,p[y+1]=v>>>24|k<<8|4278190080,p[y+2]=k>>>16|R<<16|4278190080,p[y+3]=R>>>8|4278190080}for(let v=w*4,k=m.length;v<k;v+=3)p[y++]=m[v]|m[v+1]<<8|m[v+2]<<16|4278190080}else{for(;w<_-2;w+=3,y+=4){const v=E[w],k=E[w+1],R=E[w+2];p[y]=v|255,p[y+1]=v<<24|k>>>8|255,p[y+2]=k<<16|R>>>16|255,p[y+3]=R<<8|255}for(let v=w*4,k=m.length;v<k;v+=3)p[y++]=m[v]<<24|m[v+1]<<16|m[v+2]<<8|255}return{srcPos:g,destPos:y}}function f(m,g){if(s.FeatureTest.isLittleEndian)for(let p=0,y=m.length;p<y;p++)g[p]=m[p]*65793|4278190080;else for(let p=0,y=m.length;p<y;p++)g[p]=m[p]*16843008|255}},(c,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.GlobalWorkerOptions=void 0;const t=Object.create(null);e.GlobalWorkerOptions=t,t.workerPort=null,t.workerSrc=""},(c,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.MessageHandler=void 0;var s=t(1);const r={UNKNOWN:0,DATA:1,ERROR:2},o={UNKNOWN:0,CANCEL:1,CANCEL_COMPLETE:2,CLOSE:3,ENQUEUE:4,ERROR:5,PULL:6,PULL_COMPLETE:7,START_COMPLETE:8};function a(m){switch(m instanceof Error||typeof m=="object"&&m!==null||(0,s.unreachable)('wrapReason: Expected "reason" to be a (possibly cloned) Error.'),m.name){case"AbortException":return new s.AbortException(m.message);case"MissingPDFException":return new s.MissingPDFException(m.message);case"PasswordException":return new s.PasswordException(m.message,m.code);case"UnexpectedResponseException":return new s.UnexpectedResponseException(m.message,m.status);case"UnknownErrorException":return new s.UnknownErrorException(m.message,m.details);default:return new s.UnknownErrorException(m.message,m.toString())}}class f{constructor(g,p,y){this.sourceName=g,this.targetName=p,this.comObj=y,this.callbackId=1,this.streamId=1,this.streamSinks=Object.create(null),this.streamControllers=Object.create(null),this.callbackCapabilities=Object.create(null),this.actionHandler=Object.create(null),this._onComObjOnMessage=C=>{const A=C.data;if(A.targetName!==this.sourceName)return;if(A.stream){this.#t(A);return}if(A.callback){const _=A.callbackId,E=this.callbackCapabilities[_];if(!E)throw new Error(`Cannot resolve callback ${_}`);if(delete this.callbackCapabilities[_],A.callback===r.DATA)E.resolve(A.data);else if(A.callback===r.ERROR)E.reject(a(A.reason));else throw new Error("Unexpected callback case");return}const w=this.actionHandler[A.action];if(!w)throw new Error(`Unknown action from worker: ${A.action}`);if(A.callbackId){const _=this.sourceName,E=A.sourceName;new Promise(function(v){v(w(A.data))}).then(function(v){y.postMessage({sourceName:_,targetName:E,callback:r.DATA,callbackId:A.callbackId,data:v})},function(v){y.postMessage({sourceName:_,targetName:E,callback:r.ERROR,callbackId:A.callbackId,reason:a(v)})});return}if(A.streamId){this.#e(A);return}w(A.data)},y.addEventListener("message",this._onComObjOnMessage)}on(g,p){const y=this.actionHandler;if(y[g])throw new Error(`There is already an actionName called "${g}"`);y[g]=p}send(g,p,y){this.comObj.postMessage({sourceName:this.sourceName,targetName:this.targetName,action:g,data:p},y)}sendWithPromise(g,p,y){const C=this.callbackId++,A=new s.PromiseCapability;this.callbackCapabilities[C]=A;try{this.comObj.postMessage({sourceName:this.sourceName,targetName:this.targetName,action:g,callbackId:C,data:p},y)}catch(w){A.reject(w)}return A.promise}sendWithStream(g,p,y,C){const A=this.streamId++,w=this.sourceName,_=this.targetName,E=this.comObj;return new ReadableStream({start:v=>{const k=new s.PromiseCapability;return this.streamControllers[A]={controller:v,startCall:k,pullCall:null,cancelCall:null,isClosed:!1},E.postMessage({sourceName:w,targetName:_,action:g,streamId:A,data:p,desiredSize:v.desiredSize},C),k.promise},pull:v=>{const k=new s.PromiseCapability;return this.streamControllers[A].pullCall=k,E.postMessage({sourceName:w,targetName:_,stream:o.PULL,streamId:A,desiredSize:v.desiredSize}),k.promise},cancel:v=>{(0,s.assert)(v instanceof Error,"cancel must have a valid reason");const k=new s.PromiseCapability;return this.streamControllers[A].cancelCall=k,this.streamControllers[A].isClosed=!0,E.postMessage({sourceName:w,targetName:_,stream:o.CANCEL,streamId:A,reason:a(v)}),k.promise}},y)}#e(g){const p=g.streamId,y=this.sourceName,C=g.sourceName,A=this.comObj,w=this,_=this.actionHandler[g.action],E={enqueue(v,k=1,R){if(this.isCancelled)return;const L=this.desiredSize;this.desiredSize-=k,L>0&&this.desiredSize<=0&&(this.sinkCapability=new s.PromiseCapability,this.ready=this.sinkCapability.promise),A.postMessage({sourceName:y,targetName:C,stream:o.ENQUEUE,streamId:p,chunk:v},R)},close(){this.isCancelled||(this.isCancelled=!0,A.postMessage({sourceName:y,targetName:C,stream:o.CLOSE,streamId:p}),delete w.streamSinks[p])},error(v){(0,s.assert)(v instanceof Error,"error must have a valid reason"),!this.isCancelled&&(this.isCancelled=!0,A.postMessage({sourceName:y,targetName:C,stream:o.ERROR,streamId:p,reason:a(v)}))},sinkCapability:new s.PromiseCapability,onPull:null,onCancel:null,isCancelled:!1,desiredSize:g.desiredSize,ready:null};E.sinkCapability.resolve(),E.ready=E.sinkCapability.promise,this.streamSinks[p]=E,new Promise(function(v){v(_(g.data,E))}).then(function(){A.postMessage({sourceName:y,targetName:C,stream:o.START_COMPLETE,streamId:p,success:!0})},function(v){A.postMessage({sourceName:y,targetName:C,stream:o.START_COMPLETE,streamId:p,reason:a(v)})})}#t(g){const p=g.streamId,y=this.sourceName,C=g.sourceName,A=this.comObj,w=this.streamControllers[p],_=this.streamSinks[p];switch(g.stream){case o.START_COMPLETE:g.success?w.startCall.resolve():w.startCall.reject(a(g.reason));break;case o.PULL_COMPLETE:g.success?w.pullCall.resolve():w.pullCall.reject(a(g.reason));break;case o.PULL:if(!_){A.postMessage({sourceName:y,targetName:C,stream:o.PULL_COMPLETE,streamId:p,success:!0});break}_.desiredSize<=0&&g.desiredSize>0&&_.sinkCapability.resolve(),_.desiredSize=g.desiredSize,new Promise(function(E){E(_.onPull?.())}).then(function(){A.postMessage({sourceName:y,targetName:C,stream:o.PULL_COMPLETE,streamId:p,success:!0})},function(E){A.postMessage({sourceName:y,targetName:C,stream:o.PULL_COMPLETE,streamId:p,reason:a(E)})});break;case o.ENQUEUE:if((0,s.assert)(w,"enqueue should have stream controller"),w.isClosed)break;w.controller.enqueue(g.chunk);break;case o.CLOSE:if((0,s.assert)(w,"close should have stream controller"),w.isClosed)break;w.isClosed=!0,w.controller.close(),this.#s(w,p);break;case o.ERROR:(0,s.assert)(w,"error should have stream controller"),w.controller.error(a(g.reason)),this.#s(w,p);break;case o.CANCEL_COMPLETE:g.success?w.cancelCall.resolve():w.cancelCall.reject(a(g.reason)),this.#s(w,p);break;case o.CANCEL:if(!_)break;new Promise(function(E){E(_.onCancel?.(a(g.reason)))}).then(function(){A.postMessage({sourceName:y,targetName:C,stream:o.CANCEL_COMPLETE,streamId:p,success:!0})},function(E){A.postMessage({sourceName:y,targetName:C,stream:o.CANCEL_COMPLETE,streamId:p,reason:a(E)})}),_.sinkCapability.reject(a(g.reason)),_.isCancelled=!0,delete this.streamSinks[p];break;default:throw new Error("Unexpected stream case")}}async#s(g,p){await Promise.allSettled([g.startCall?.promise,g.pullCall?.promise,g.cancelCall?.promise]),delete this.streamControllers[p]}destroy(){this.comObj.removeEventListener("message",this._onComObjOnMessage)}}e.MessageHandler=f},(c,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Metadata=void 0;var s=t(1);class r{#e;#t;constructor({parsedData:a,rawData:f}){this.#e=a,this.#t=f}getRaw(){return this.#t}get(a){return this.#e.get(a)??null}getAll(){return(0,s.objectFromMap)(this.#e)}has(a){return this.#e.has(a)}}e.Metadata=r},(c,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.OptionalContentConfig=void 0;var s=t(1),r=t(8);const o=Symbol("INTERNAL");class a{#e=!0;constructor(g,p){this.name=g,this.intent=p}get visible(){return this.#e}_setVisible(g,p){g!==o&&(0,s.unreachable)("Internal method `_setVisible` called."),this.#e=p}}class f{#e=null;#t=new Map;#s=null;#n=null;constructor(g){if(this.name=null,this.creator=null,g!==null){this.name=g.name,this.creator=g.creator,this.#n=g.order;for(const p of g.groups)this.#t.set(p.id,new a(p.name,p.intent));if(g.baseState==="OFF")for(const p of this.#t.values())p._setVisible(o,!1);for(const p of g.on)this.#t.get(p)._setVisible(o,!0);for(const p of g.off)this.#t.get(p)._setVisible(o,!1);this.#s=this.getHash()}}#r(g){const p=g.length;if(p<2)return!0;const y=g[0];for(let C=1;C<p;C++){const A=g[C];let w;if(Array.isArray(A))w=this.#r(A);else if(this.#t.has(A))w=this.#t.get(A).visible;else return(0,s.warn)(`Optional content group not found: ${A}`),!0;switch(y){case"And":if(!w)return!1;break;case"Or":if(w)return!0;break;case"Not":return!w;default:return!0}}return y==="And"}isVisible(g){if(this.#t.size===0)return!0;if(!g)return(0,s.warn)("Optional content group not defined."),!0;if(g.type==="OCG")return this.#t.has(g.id)?this.#t.get(g.id).visible:((0,s.warn)(`Optional content group not found: ${g.id}`),!0);if(g.type==="OCMD"){if(g.expression)return this.#r(g.expression);if(!g.policy||g.policy==="AnyOn"){for(const p of g.ids){if(!this.#t.has(p))return(0,s.warn)(`Optional content group not found: ${p}`),!0;if(this.#t.get(p).visible)return!0}return!1}else if(g.policy==="AllOn"){for(const p of g.ids){if(!this.#t.has(p))return(0,s.warn)(`Optional content group not found: ${p}`),!0;if(!this.#t.get(p).visible)return!1}return!0}else if(g.policy==="AnyOff"){for(const p of g.ids){if(!this.#t.has(p))return(0,s.warn)(`Optional content group not found: ${p}`),!0;if(!this.#t.get(p).visible)return!0}return!1}else if(g.policy==="AllOff"){for(const p of g.ids){if(!this.#t.has(p))return(0,s.warn)(`Optional content group not found: ${p}`),!0;if(this.#t.get(p).visible)return!1}return!0}return(0,s.warn)(`Unknown optional content policy ${g.policy}.`),!0}return(0,s.warn)(`Unknown group type ${g.type}.`),!0}setVisibility(g,p=!0){if(!this.#t.has(g)){(0,s.warn)(`Optional content group not found: ${g}`);return}this.#t.get(g)._setVisible(o,!!p),this.#e=null}get hasInitialVisibility(){return this.getHash()===this.#s}getOrder(){return this.#t.size?this.#n?this.#n.slice():[...this.#t.keys()]:null}getGroups(){return this.#t.size>0?(0,s.objectFromMap)(this.#t):null}getGroup(g){return this.#t.get(g)||null}getHash(){if(this.#e!==null)return this.#e;const g=new r.MurmurHash3_64;for(const[p,y]of this.#t)g.update(`${p}:${y.visible}`);return this.#e=g.hexdigest()}}e.OptionalContentConfig=f},(c,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.PDFDataTransportStream=void 0;var s=t(1),r=t(6);class o{constructor({length:g,initialData:p,progressiveDone:y=!1,contentDispositionFilename:C=null,disableRange:A=!1,disableStream:w=!1},_){if((0,s.assert)(_,'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.'),this._queuedChunks=[],this._progressiveDone=y,this._contentDispositionFilename=C,p?.length>0){const E=p instanceof Uint8Array&&p.byteLength===p.buffer.byteLength?p.buffer:new Uint8Array(p).buffer;this._queuedChunks.push(E)}this._pdfDataRangeTransport=_,this._isStreamingSupported=!w,this._isRangeSupported=!A,this._contentLength=g,this._fullRequestReader=null,this._rangeReaders=[],this._pdfDataRangeTransport.addRangeListener((E,v)=>{this._onReceiveData({begin:E,chunk:v})}),this._pdfDataRangeTransport.addProgressListener((E,v)=>{this._onProgress({loaded:E,total:v})}),this._pdfDataRangeTransport.addProgressiveReadListener(E=>{this._onReceiveData({chunk:E})}),this._pdfDataRangeTransport.addProgressiveDoneListener(()=>{this._onProgressiveDone()}),this._pdfDataRangeTransport.transportReady()}_onReceiveData({begin:g,chunk:p}){const y=p instanceof Uint8Array&&p.byteLength===p.buffer.byteLength?p.buffer:new Uint8Array(p).buffer;if(g===void 0)this._fullRequestReader?this._fullRequestReader._enqueue(y):this._queuedChunks.push(y);else{const C=this._rangeReaders.some(function(A){return A._begin!==g?!1:(A._enqueue(y),!0)});(0,s.assert)(C,"_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.")}}get _progressiveDataLength(){return this._fullRequestReader?._loaded??0}_onProgress(g){g.total===void 0?this._rangeReaders[0]?.onProgress?.({loaded:g.loaded}):this._fullRequestReader?.onProgress?.({loaded:g.loaded,total:g.total})}_onProgressiveDone(){this._fullRequestReader?.progressiveDone(),this._progressiveDone=!0}_removeRangeReader(g){const p=this._rangeReaders.indexOf(g);p>=0&&this._rangeReaders.splice(p,1)}getFullReader(){(0,s.assert)(!this._fullRequestReader,"PDFDataTransportStream.getFullReader can only be called once.");const g=this._queuedChunks;return this._queuedChunks=null,new a(this,g,this._progressiveDone,this._contentDispositionFilename)}getRangeReader(g,p){if(p<=this._progressiveDataLength)return null;const y=new f(this,g,p);return this._pdfDataRangeTransport.requestDataRange(g,p),this._rangeReaders.push(y),y}cancelAllRequests(g){this._fullRequestReader?.cancel(g);for(const p of this._rangeReaders.slice(0))p.cancel(g);this._pdfDataRangeTransport.abort()}}e.PDFDataTransportStream=o;class a{constructor(g,p,y=!1,C=null){this._stream=g,this._done=y||!1,this._filename=(0,r.isPdfFile)(C)?C:null,this._queuedChunks=p||[],this._loaded=0;for(const A of this._queuedChunks)this._loaded+=A.byteLength;this._requests=[],this._headersReady=Promise.resolve(),g._fullRequestReader=this,this.onProgress=null}_enqueue(g){this._done||(this._requests.length>0?this._requests.shift().resolve({value:g,done:!1}):this._queuedChunks.push(g),this._loaded+=g.byteLength)}get headersReady(){return this._headersReady}get filename(){return this._filename}get isRangeSupported(){return this._stream._isRangeSupported}get isStreamingSupported(){return this._stream._isStreamingSupported}get contentLength(){return this._stream._contentLength}async read(){if(this._queuedChunks.length>0)return{value:this._queuedChunks.shift(),done:!1};if(this._done)return{value:void 0,done:!0};const g=new s.PromiseCapability;return this._requests.push(g),g.promise}cancel(g){this._done=!0;for(const p of this._requests)p.resolve({value:void 0,done:!0});this._requests.length=0}progressiveDone(){this._done||(this._done=!0)}}class f{constructor(g,p,y){this._stream=g,this._begin=p,this._end=y,this._queuedChunk=null,this._requests=[],this._done=!1,this.onProgress=null}_enqueue(g){if(!this._done){if(this._requests.length===0)this._queuedChunk=g;else{this._requests.shift().resolve({value:g,done:!1});for(const y of this._requests)y.resolve({value:void 0,done:!0});this._requests.length=0}this._done=!0,this._stream._removeRangeReader(this)}}get isStreamingSupported(){return!1}async read(){if(this._queuedChunk){const p=this._queuedChunk;return this._queuedChunk=null,{value:p,done:!1}}if(this._done)return{value:void 0,done:!0};const g=new s.PromiseCapability;return this._requests.push(g),g.promise}cancel(g){this._done=!0;for(const p of this._requests)p.resolve({value:void 0,done:!0});this._requests.length=0,this._stream._removeRangeReader(this)}}},(c,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.XfaText=void 0;class t{static textContent(r){const o=[],a={items:o,styles:Object.create(null)};function f(m){if(!m)return;let g=null;const p=m.name;if(p==="#text")g=m.value;else if(t.shouldBuildText(p))m?.attributes?.textContent?g=m.attributes.textContent:m.value&&(g=m.value);else return;if(g!==null&&o.push({str:g}),!!m.children)for(const y of m.children)f(y)}return f(r),a}static shouldBuildText(r){return!(r==="textarea"||r==="input"||r==="option"||r==="select")}}e.XfaText=t},(c,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.NodeStandardFontDataFactory=e.NodeFilterFactory=e.NodeCanvasFactory=e.NodeCMapReaderFactory=void 0;var s=t(7);const r=function(g){return new Promise((p,y)=>{require$$5.readFile(g,(A,w)=>{if(A||!w){y(new Error(A));return}p(new Uint8Array(w))})})};class o extends s.BaseFilterFactory{}e.NodeFilterFactory=o;class a extends s.BaseCanvasFactory{_createCanvas(p,y){return require$$5.createCanvas(p,y)}}e.NodeCanvasFactory=a;class f extends s.BaseCMapReaderFactory{_fetchData(p,y){return r(p).then(C=>({cMapData:C,compressionType:y}))}}e.NodeCMapReaderFactory=f;class m extends s.BaseStandardFontDataFactory{_fetchData(p){return r(p)}}e.NodeStandardFontDataFactory=m},(c,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.PDFNodeStream=void 0;var s=t(1),r=t(22);const o=require$$5,a=require$$5,f=require$$5,m=require$$5,g=/^file:\/\/\/[a-zA-Z]:\//;function p(R){const L=m.parse(R);return L.protocol==="file:"||L.host?L:/^[a-z]:[/\\]/i.test(R)?m.parse(`file:///${R}`):(L.host||(L.protocol="file:"),L)}class y{constructor(L){this.source=L,this.url=p(L.url),this.isHttp=this.url.protocol==="http:"||this.url.protocol==="https:",this.isFsUrl=this.url.protocol==="file:",this.httpHeaders=this.isHttp&&L.httpHeaders||{},this._fullRequestReader=null,this._rangeRequestReaders=[]}get _progressiveDataLength(){return this._fullRequestReader?._loaded??0}getFullReader(){return(0,s.assert)(!this._fullRequestReader,"PDFNodeStream.getFullReader can only be called once."),this._fullRequestReader=this.isFsUrl?new v(this):new _(this),this._fullRequestReader}getRangeReader(L,B){if(B<=this._progressiveDataLength)return null;const X=this.isFsUrl?new k(this,L,B):new E(this,L,B);return this._rangeRequestReaders.push(X),X}cancelAllRequests(L){this._fullRequestReader?.cancel(L);for(const B of this._rangeRequestReaders.slice(0))B.cancel(L)}}e.PDFNodeStream=y;class C{constructor(L){this._url=L.url,this._done=!1,this._storedError=null,this.onProgress=null;const B=L.source;this._contentLength=B.length,this._loaded=0,this._filename=null,this._disableRange=B.disableRange||!1,this._rangeChunkSize=B.rangeChunkSize,!this._rangeChunkSize&&!this._disableRange&&(this._disableRange=!0),this._isStreamingSupported=!B.disableStream,this._isRangeSupported=!B.disableRange,this._readableStream=null,this._readCapability=new s.PromiseCapability,this._headersCapability=new s.PromiseCapability}get headersReady(){return this._headersCapability.promise}get filename(){return this._filename}get contentLength(){return this._contentLength}get isRangeSupported(){return this._isRangeSupported}get isStreamingSupported(){return this._isStreamingSupported}async read(){if(await this._readCapability.promise,this._done)return{value:void 0,done:!0};if(this._storedError)throw this._storedError;const L=this._readableStream.read();return L===null?(this._readCapability=new s.PromiseCapability,this.read()):(this._loaded+=L.length,this.onProgress?.({loaded:this._loaded,total:this._contentLength}),{value:new Uint8Array(L).buffer,done:!1})}cancel(L){if(!this._readableStream){this._error(L);return}this._readableStream.destroy(L)}_error(L){this._storedError=L,this._readCapability.resolve()}_setReadableStream(L){this._readableStream=L,L.on("readable",()=>{this._readCapability.resolve()}),L.on("end",()=>{L.destroy(),this._done=!0,this._readCapability.resolve()}),L.on("error",B=>{this._error(B)}),!this._isStreamingSupported&&this._isRangeSupported&&this._error(new s.AbortException("streaming is disabled")),this._storedError&&this._readableStream.destroy(this._storedError)}}class A{constructor(L){this._url=L.url,this._done=!1,this._storedError=null,this.onProgress=null,this._loaded=0,this._readableStream=null,this._readCapability=new s.PromiseCapability;const B=L.source;this._isStreamingSupported=!B.disableStream}get isStreamingSupported(){return this._isStreamingSupported}async read(){if(await this._readCapability.promise,this._done)return{value:void 0,done:!0};if(this._storedError)throw this._storedError;const L=this._readableStream.read();return L===null?(this._readCapability=new s.PromiseCapability,this.read()):(this._loaded+=L.length,this.onProgress?.({loaded:this._loaded}),{value:new Uint8Array(L).buffer,done:!1})}cancel(L){if(!this._readableStream){this._error(L);return}this._readableStream.destroy(L)}_error(L){this._storedError=L,this._readCapability.resolve()}_setReadableStream(L){this._readableStream=L,L.on("readable",()=>{this._readCapability.resolve()}),L.on("end",()=>{L.destroy(),this._done=!0,this._readCapability.resolve()}),L.on("error",B=>{this._error(B)}),this._storedError&&this._readableStream.destroy(this._storedError)}}function w(R,L){return{protocol:R.protocol,auth:R.auth,host:R.hostname,port:R.port,path:R.path,method:"GET",headers:L}}class _ extends C{constructor(L){super(L);const B=X=>{if(X.statusCode===404){const $=new s.MissingPDFException(`Missing PDF "${this._url}".`);this._storedError=$,this._headersCapability.reject($);return}this._headersCapability.resolve(),this._setReadableStream(X);const U=$=>this._readableStream.headers[$.toLowerCase()],{allowRangeRequests:M,suggestedLength:F}=(0,r.validateRangeRequestCapabilities)({getResponseHeader:U,isHttp:L.isHttp,rangeChunkSize:this._rangeChunkSize,disableRange:this._disableRange});this._isRangeSupported=M,this._contentLength=F||this._contentLength,this._filename=(0,r.extractFilenameFromHeader)(U)};this._request=null,this._url.protocol==="http:"?this._request=a.request(w(this._url,L.httpHeaders),B):this._request=f.request(w(this._url,L.httpHeaders),B),this._request.on("error",X=>{this._storedError=X,this._headersCapability.reject(X)}),this._request.end()}}class E extends A{constructor(L,B,X){super(L),this._httpHeaders={};for(const M in L.httpHeaders){const F=L.httpHeaders[M];F!==void 0&&(this._httpHeaders[M]=F)}this._httpHeaders.Range=`bytes=${B}-${X-1}`;const U=M=>{if(M.statusCode===404){const F=new s.MissingPDFException(`Missing PDF "${this._url}".`);this._storedError=F;return}this._setReadableStream(M)};this._request=null,this._url.protocol==="http:"?this._request=a.request(w(this._url,this._httpHeaders),U):this._request=f.request(w(this._url,this._httpHeaders),U),this._request.on("error",M=>{this._storedError=M}),this._request.end()}}class v extends C{constructor(L){super(L);let B=decodeURIComponent(this._url.path);g.test(this._url.href)&&(B=B.replace(/^\//,"")),o.lstat(B,(X,U)=>{if(X){X.code==="ENOENT"&&(X=new s.MissingPDFException(`Missing PDF "${B}".`)),this._storedError=X,this._headersCapability.reject(X);return}this._contentLength=U.size,this._setReadableStream(o.createReadStream(B)),this._headersCapability.resolve()})}}class k extends A{constructor(L,B,X){super(L);let U=decodeURIComponent(this._url.path);g.test(this._url.href)&&(U=U.replace(/^\//,"")),this._setReadableStream(o.createReadStream(U,{start:B,end:X-1}))}}},(c,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.createResponseStatusError=m,e.extractFilenameFromHeader=f,e.validateRangeRequestCapabilities=a,e.validateResponseStatus=g;var s=t(1),r=t(23),o=t(6);function a({getResponseHeader:p,isHttp:y,rangeChunkSize:C,disableRange:A}){const w={allowRangeRequests:!1,suggestedLength:void 0},_=parseInt(p("Content-Length"),10);return!Number.isInteger(_)||(w.suggestedLength=_,_<=2*C)||A||!y||p("Accept-Ranges")!=="bytes"||(p("Content-Encoding")||"identity")!=="identity"||(w.allowRangeRequests=!0),w}function f(p){const y=p("Content-Disposition");if(y){let C=(0,r.getFilenameFromContentDispositionHeader)(y);if(C.includes("%"))try{C=decodeURIComponent(C)}catch{}if((0,o.isPdfFile)(C))return C}return null}function m(p,y){return p===404||p===0&&y.startsWith("file:")?new s.MissingPDFException('Missing PDF "'+y+'".'):new s.UnexpectedResponseException(`Unexpected server response (${p}) while retrieving PDF "${y}".`,p)}function g(p){return p===200||p===206}},(c,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getFilenameFromContentDispositionHeader=r;var s=t(1);function r(o){let a=!0,f=m("filename\\*","i").exec(o);if(f){f=f[1];let _=C(f);return _=unescape(_),_=A(_),_=w(_),p(_)}if(f=y(o),f){const _=w(f);return p(_)}if(f=m("filename","i").exec(o),f){f=f[1];let _=C(f);return _=w(_),p(_)}function m(_,E){return new RegExp("(?:^|;)\\s*"+_+'\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)',E)}function g(_,E){if(_){if(!/^[\x00-\xFF]+$/.test(E))return E;try{const v=new TextDecoder(_,{fatal:!0}),k=(0,s.stringToBytes)(E);E=v.decode(k),a=!1}catch{}}return E}function p(_){return a&&/[\x80-\xff]/.test(_)&&(_=g("utf-8",_),a&&(_=g("iso-8859-1",_))),_}function y(_){const E=[];let v;const k=m("filename\\*((?!0\\d)\\d+)(\\*?)","ig");for(;(v=k.exec(_))!==null;){let[,L,B,X]=v;if(L=parseInt(L,10),L in E){if(L===0)break;continue}E[L]=[B,X]}const R=[];for(let L=0;L<E.length&&L in E;++L){let[B,X]=E[L];X=C(X),B&&(X=unescape(X),L===0&&(X=A(X))),R.push(X)}return R.join("")}function C(_){if(_.startsWith('"')){const E=_.slice(1).split('\\"');for(let v=0;v<E.length;++v){const k=E[v].indexOf('"');k!==-1&&(E[v]=E[v].slice(0,k),E.length=v+1),E[v]=E[v].replaceAll(/\\(.)/g,"$1")}_=E.join('"')}return _}function A(_){const E=_.indexOf("'");if(E===-1)return _;const v=_.slice(0,E),R=_.slice(E+1).replace(/^[^']*'/,"");return g(v,R)}function w(_){return!_.startsWith("=?")||/[\x00-\x19\x80-\xff]/.test(_)?_:_.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g,function(E,v,k,R){if(k==="q"||k==="Q")return R=R.replaceAll("_"," "),R=R.replaceAll(/=([0-9a-fA-F]{2})/g,function(L,B){return String.fromCharCode(parseInt(B,16))}),g(v,R);try{R=atob(R)}catch{}return g(v,R)})}return""}},(c,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.PDFNetworkStream=void 0;var s=t(1),r=t(22);const o=200,a=206;function f(C){const A=C.response;return typeof A!="string"?A:(0,s.stringToBytes)(A).buffer}class m{constructor(A,w={}){this.url=A,this.isHttp=/^https?:/i.test(A),this.httpHeaders=this.isHttp&&w.httpHeaders||Object.create(null),this.withCredentials=w.withCredentials||!1,this.currXhrId=0,this.pendingRequests=Object.create(null)}requestRange(A,w,_){const E={begin:A,end:w};for(const v in _)E[v]=_[v];return this.request(E)}requestFull(A){return this.request(A)}request(A){const w=new XMLHttpRequest,_=this.currXhrId++,E=this.pendingRequests[_]={xhr:w};w.open("GET",this.url),w.withCredentials=this.withCredentials;for(const v in this.httpHeaders){const k=this.httpHeaders[v];k!==void 0&&w.setRequestHeader(v,k)}return this.isHttp&&"begin"in A&&"end"in A?(w.setRequestHeader("Range",`bytes=${A.begin}-${A.end-1}`),E.expectedStatus=a):E.expectedStatus=o,w.responseType="arraybuffer",A.onError&&(w.onerror=function(v){A.onError(w.status)}),w.onreadystatechange=this.onStateChange.bind(this,_),w.onprogress=this.onProgress.bind(this,_),E.onHeadersReceived=A.onHeadersReceived,E.onDone=A.onDone,E.onError=A.onError,E.onProgress=A.onProgress,w.send(null),_}onProgress(A,w){const _=this.pendingRequests[A];_&&_.onProgress?.(w)}onStateChange(A,w){const _=this.pendingRequests[A];if(!_)return;const E=_.xhr;if(E.readyState>=2&&_.onHeadersReceived&&(_.onHeadersReceived(),delete _.onHeadersReceived),E.readyState!==4||!(A in this.pendingRequests))return;if(delete this.pendingRequests[A],E.status===0&&this.isHttp){_.onError?.(E.status);return}const v=E.status||o;if(!(v===o&&_.expectedStatus===a)&&v!==_.expectedStatus){_.onError?.(E.status);return}const R=f(E);if(v===a){const L=E.getResponseHeader("Content-Range"),B=/bytes (\d+)-(\d+)\/(\d+)/.exec(L);_.onDone({begin:parseInt(B[1],10),chunk:R})}else R?_.onDone({begin:0,chunk:R}):_.onError?.(E.status)}getRequestXhr(A){return this.pendingRequests[A].xhr}isPendingRequest(A){return A in this.pendingRequests}abortRequest(A){const w=this.pendingRequests[A].xhr;delete this.pendingRequests[A],w.abort()}}class g{constructor(A){this._source=A,this._manager=new m(A.url,{httpHeaders:A.httpHeaders,withCredentials:A.withCredentials}),this._rangeChunkSize=A.rangeChunkSize,this._fullRequestReader=null,this._rangeRequestReaders=[]}_onRangeRequestReaderClosed(A){const w=this._rangeRequestReaders.indexOf(A);w>=0&&this._rangeRequestReaders.splice(w,1)}getFullReader(){return(0,s.assert)(!this._fullRequestReader,"PDFNetworkStream.getFullReader can only be called once."),this._fullRequestReader=new p(this._manager,this._source),this._fullRequestReader}getRangeReader(A,w){const _=new y(this._manager,A,w);return _.onClosed=this._onRangeRequestReaderClosed.bind(this),this._rangeRequestReaders.push(_),_}cancelAllRequests(A){this._fullRequestReader?.cancel(A);for(const w of this._rangeRequestReaders.slice(0))w.cancel(A)}}e.PDFNetworkStream=g;class p{constructor(A,w){this._manager=A;const _={onHeadersReceived:this._onHeadersReceived.bind(this),onDone:this._onDone.bind(this),onError:this._onError.bind(this),onProgress:this._onProgress.bind(this)};this._url=w.url,this._fullRequestId=A.requestFull(_),this._headersReceivedCapability=new s.PromiseCapability,this._disableRange=w.disableRange||!1,this._contentLength=w.length,this._rangeChunkSize=w.rangeChunkSize,!this._rangeChunkSize&&!this._disableRange&&(this._disableRange=!0),this._isStreamingSupported=!1,this._isRangeSupported=!1,this._cachedChunks=[],this._requests=[],this._done=!1,this._storedError=void 0,this._filename=null,this.onProgress=null}_onHeadersReceived(){const A=this._fullRequestId,w=this._manager.getRequestXhr(A),_=k=>w.getResponseHeader(k),{allowRangeRequests:E,suggestedLength:v}=(0,r.validateRangeRequestCapabilities)({getResponseHeader:_,isHttp:this._manager.isHttp,rangeChunkSize:this._rangeChunkSize,disableRange:this._disableRange});E&&(this._isRangeSupported=!0),this._contentLength=v||this._contentLength,this._filename=(0,r.extractFilenameFromHeader)(_),this._isRangeSupported&&this._manager.abortRequest(A),this._headersReceivedCapability.resolve()}_onDone(A){if(A&&(this._requests.length>0?this._requests.shift().resolve({value:A.chunk,done:!1}):this._cachedChunks.push(A.chunk)),this._done=!0,!(this._cachedChunks.length>0)){for(const w of this._requests)w.resolve({value:void 0,done:!0});this._requests.length=0}}_onError(A){this._storedError=(0,r.createResponseStatusError)(A,this._url),this._headersReceivedCapability.reject(this._storedError);for(const w of this._requests)w.reject(this._storedError);this._requests.length=0,this._cachedChunks.length=0}_onProgress(A){this.onProgress?.({loaded:A.loaded,total:A.lengthComputable?A.total:this._contentLength})}get filename(){return this._filename}get isRangeSupported(){return this._isRangeSupported}get isStreamingSupported(){return this._isStreamingSupported}get contentLength(){return this._contentLength}get headersReady(){return this._headersReceivedCapability.promise}async read(){if(this._storedError)throw this._storedError;if(this._cachedChunks.length>0)return{value:this._cachedChunks.shift(),done:!1};if(this._done)return{value:void 0,done:!0};const A=new s.PromiseCapability;return this._requests.push(A),A.promise}cancel(A){this._done=!0,this._headersReceivedCapability.reject(A);for(const w of this._requests)w.resolve({value:void 0,done:!0});this._requests.length=0,this._manager.isPendingRequest(this._fullRequestId)&&this._manager.abortRequest(this._fullRequestId),this._fullRequestReader=null}}class y{constructor(A,w,_){this._manager=A;const E={onDone:this._onDone.bind(this),onError:this._onError.bind(this),onProgress:this._onProgress.bind(this)};this._url=A.url,this._requestId=A.requestRange(w,_,E),this._requests=[],this._queuedChunk=null,this._done=!1,this._storedError=void 0,this.onProgress=null,this.onClosed=null}_close(){this.onClosed?.(this)}_onDone(A){const w=A.chunk;this._requests.length>0?this._requests.shift().resolve({value:w,done:!1}):this._queuedChunk=w,this._done=!0;for(const _ of this._requests)_.resolve({value:void 0,done:!0});this._requests.length=0,this._close()}_onError(A){this._storedError=(0,r.createResponseStatusError)(A,this._url);for(const w of this._requests)w.reject(this._storedError);this._requests.length=0,this._queuedChunk=null}_onProgress(A){this.isStreamingSupported||this.onProgress?.({loaded:A.loaded})}get isStreamingSupported(){return!1}async read(){if(this._storedError)throw this._storedError;if(this._queuedChunk!==null){const w=this._queuedChunk;return this._queuedChunk=null,{value:w,done:!1}}if(this._done)return{value:void 0,done:!0};const A=new s.PromiseCapability;return this._requests.push(A),A.promise}cancel(A){this._done=!0;for(const w of this._requests)w.resolve({value:void 0,done:!0});this._requests.length=0,this._manager.isPendingRequest(this._requestId)&&this._manager.abortRequest(this._requestId),this._close()}}},(c,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.PDFFetchStream=void 0;var s=t(1),r=t(22);function o(y,C,A){return{method:"GET",headers:y,signal:A.signal,mode:"cors",credentials:C?"include":"same-origin",redirect:"follow"}}function a(y){const C=new Headers;for(const A in y){const w=y[A];w!==void 0&&C.append(A,w)}return C}function f(y){return y instanceof Uint8Array?y.buffer:y instanceof ArrayBuffer?y:((0,s.warn)(`getArrayBuffer - unexpected data format: ${y}`),new Uint8Array(y).buffer)}class m{constructor(C){this.source=C,this.isHttp=/^https?:/i.test(C.url),this.httpHeaders=this.isHttp&&C.httpHeaders||{},this._fullRequestReader=null,this._rangeRequestReaders=[]}get _progressiveDataLength(){return this._fullRequestReader?._loaded??0}getFullReader(){return(0,s.assert)(!this._fullRequestReader,"PDFFetchStream.getFullReader can only be called once."),this._fullRequestReader=new g(this),this._fullRequestReader}getRangeReader(C,A){if(A<=this._progressiveDataLength)return null;const w=new p(this,C,A);return this._rangeRequestReaders.push(w),w}cancelAllRequests(C){this._fullRequestReader?.cancel(C);for(const A of this._rangeRequestReaders.slice(0))A.cancel(C)}}e.PDFFetchStream=m;class g{constructor(C){this._stream=C,this._reader=null,this._loaded=0,this._filename=null;const A=C.source;this._withCredentials=A.withCredentials||!1,this._contentLength=A.length,this._headersCapability=new s.PromiseCapability,this._disableRange=A.disableRange||!1,this._rangeChunkSize=A.rangeChunkSize,!this._rangeChunkSize&&!this._disableRange&&(this._disableRange=!0),this._abortController=new AbortController,this._isStreamingSupported=!A.disableStream,this._isRangeSupported=!A.disableRange,this._headers=a(this._stream.httpHeaders);const w=A.url;fetch(w,o(this._headers,this._withCredentials,this._abortController)).then(_=>{if(!(0,r.validateResponseStatus)(_.status))throw(0,r.createResponseStatusError)(_.status,w);this._reader=_.body.getReader(),this._headersCapability.resolve();const E=R=>_.headers.get(R),{allowRangeRequests:v,suggestedLength:k}=(0,r.validateRangeRequestCapabilities)({getResponseHeader:E,isHttp:this._stream.isHttp,rangeChunkSize:this._rangeChunkSize,disableRange:this._disableRange});this._isRangeSupported=v,this._contentLength=k||this._contentLength,this._filename=(0,r.extractFilenameFromHeader)(E),!this._isStreamingSupported&&this._isRangeSupported&&this.cancel(new s.AbortException("Streaming is disabled."))}).catch(this._headersCapability.reject),this.onProgress=null}get headersReady(){return this._headersCapability.promise}get filename(){return this._filename}get contentLength(){return this._contentLength}get isRangeSupported(){return this._isRangeSupported}get isStreamingSupported(){return this._isStreamingSupported}async read(){await this._headersCapability.promise;const{value:C,done:A}=await this._reader.read();return A?{value:C,done:A}:(this._loaded+=C.byteLength,this.onProgress?.({loaded:this._loaded,total:this._contentLength}),{value:f(C),done:!1})}cancel(C){this._reader?.cancel(C),this._abortController.abort()}}class p{constructor(C,A,w){this._stream=C,this._reader=null,this._loaded=0;const _=C.source;this._withCredentials=_.withCredentials||!1,this._readCapability=new s.PromiseCapability,this._isStreamingSupported=!_.disableStream,this._abortController=new AbortController,this._headers=a(this._stream.httpHeaders),this._headers.append("Range",`bytes=${A}-${w-1}`);const E=_.url;fetch(E,o(this._headers,this._withCredentials,this._abortController)).then(v=>{if(!(0,r.validateResponseStatus)(v.status))throw(0,r.createResponseStatusError)(v.status,E);this._readCapability.resolve(),this._reader=v.body.getReader()}).catch(this._readCapability.reject),this.onProgress=null}get isStreamingSupported(){return this._isStreamingSupported}async read(){await this._readCapability.promise;const{value:C,done:A}=await this._reader.read();return A?{value:C,done:A}:(this._loaded+=C.byteLength,this.onProgress?.({loaded:this._loaded}),{value:f(C),done:!1})}cancel(C){this._reader?.cancel(C),this._abortController.abort()}}},(c,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.TextLayerRenderTask=void 0,e.renderTextLayer=_,e.updateTextLayer=E;var s=t(1),r=t(6);const o=1e5,a=30,f=.8,m=new Map;function g(v,k){let R;if(k&&s.FeatureTest.isOffscreenCanvasSupported)R=new OffscreenCanvas(v,v).getContext("2d",{alpha:!1});else{const L=document.createElement("canvas");L.width=L.height=v,R=L.getContext("2d",{alpha:!1})}return R}function p(v,k){const R=m.get(v);if(R)return R;const L=g(a,k);L.font=`${a}px ${v}`;const B=L.measureText("");let X=B.fontBoundingBoxAscent,U=Math.abs(B.fontBoundingBoxDescent);if(X){const F=X/(X+U);return m.set(v,F),L.canvas.width=L.canvas.height=0,F}L.strokeStyle="red",L.clearRect(0,0,a,a),L.strokeText("g",0,0);let M=L.getImageData(0,0,a,a).data;U=0;for(let F=M.length-1-3;F>=0;F-=4)if(M[F]>0){U=Math.ceil(F/4/a);break}L.clearRect(0,0,a,a),L.strokeText("A",0,a),M=L.getImageData(0,0,a,a).data,X=0;for(let F=0,$=M.length;F<$;F+=4)if(M[F]>0){X=a-Math.floor(F/4/a);break}if(L.canvas.width=L.canvas.height=0,X){const F=X/(X+U);return m.set(v,F),F}return m.set(v,f),f}function y(v,k,R){const L=document.createElement("span"),B={angle:0,canvasWidth:0,hasText:k.str!=="",hasEOL:k.hasEOL,fontSize:0};v._textDivs.push(L);const X=s.Util.transform(v._transform,k.transform);let U=Math.atan2(X[1],X[0]);const M=R[k.fontName];M.vertical&&(U+=Math.PI/2);const F=Math.hypot(X[2],X[3]),$=F*p(M.fontFamily,v._isOffscreenCanvasSupported);let ee,te;U===0?(ee=X[4],te=X[5]-$):(ee=X[4]+$*Math.sin(U),te=X[5]-$*Math.cos(U));const he="calc(var(--scale-factor)*",re=L.style;v._container===v._rootContainer?(re.left=`${(100*ee/v._pageWidth).toFixed(2)}%`,re.top=`${(100*te/v._pageHeight).toFixed(2)}%`):(re.left=`${he}${ee.toFixed(2)}px)`,re.top=`${he}${te.toFixed(2)}px)`),re.fontSize=`${he}${F.toFixed(2)}px)`,re.fontFamily=M.fontFamily,B.fontSize=F,L.setAttribute("role","presentation"),L.textContent=k.str,L.dir=k.dir,v._fontInspectorEnabled&&(L.dataset.fontName=k.fontName),U!==0&&(B.angle=U*(180/Math.PI));let pe=!1;if(k.str.length>1)pe=!0;else if(k.str!==" "&&k.transform[0]!==k.transform[3]){const le=Math.abs(k.transform[0]),J=Math.abs(k.transform[3]);le!==J&&Math.max(le,J)/Math.min(le,J)>1.5&&(pe=!0)}pe&&(B.canvasWidth=M.vertical?k.height:k.width),v._textDivProperties.set(L,B),v._isReadableStream&&v._layoutText(L)}function C(v){const{div:k,scale:R,properties:L,ctx:B,prevFontSize:X,prevFontFamily:U}=v,{style:M}=k;let F="";if(L.canvasWidth!==0&&L.hasText){const{fontFamily:$}=M,{canvasWidth:ee,fontSize:te}=L;(X!==te||U!==$)&&(B.font=`${te*R}px ${$}`,v.prevFontSize=te,v.prevFontFamily=$);const{width:he}=B.measureText(k.textContent);he>0&&(F=`scaleX(${ee*R/he})`)}L.angle!==0&&(F=`rotate(${L.angle}deg) ${F}`),F.length>0&&(M.transform=F)}function A(v){if(v._canceled)return;const k=v._textDivs,R=v._capability;if(k.length>o){R.resolve();return}if(!v._isReadableStream)for(const B of k)v._layoutText(B);R.resolve()}class w{constructor({textContentSource:k,container:R,viewport:L,textDivs:B,textDivProperties:X,textContentItemsStr:U,isOffscreenCanvasSupported:M}){this._textContentSource=k,this._isReadableStream=k instanceof ReadableStream,this._container=this._rootContainer=R,this._textDivs=B||[],this._textContentItemsStr=U||[],this._isOffscreenCanvasSupported=M,this._fontInspectorEnabled=!!globalThis.FontInspector?.enabled,this._reader=null,this._textDivProperties=X||new WeakMap,this._canceled=!1,this._capability=new s.PromiseCapability,this._layoutTextParams={prevFontSize:null,prevFontFamily:null,div:null,scale:L.scale*(globalThis.devicePixelRatio||1),properties:null,ctx:g(0,M)};const{pageWidth:F,pageHeight:$,pageX:ee,pageY:te}=L.rawDims;this._transform=[1,0,0,-1,-ee,te+$],this._pageWidth=F,this._pageHeight=$,(0,r.setLayerDimensions)(R,L),this._capability.promise.finally(()=>{this._layoutTextParams=null}).catch(()=>{})}get promise(){return this._capability.promise}cancel(){this._canceled=!0,this._reader&&(this._reader.cancel(new s.AbortException("TextLayer task cancelled.")).catch(()=>{}),this._reader=null),this._capability.reject(new s.AbortException("TextLayer task cancelled."))}_processItems(k,R){for(const L of k){if(L.str===void 0){if(L.type==="beginMarkedContentProps"||L.type==="beginMarkedContent"){const B=this._container;this._container=document.createElement("span"),this._container.classList.add("markedContent"),L.id!==null&&this._container.setAttribute("id",`${L.id}`),B.append(this._container)}else L.type==="endMarkedContent"&&(this._container=this._container.parentNode);continue}this._textContentItemsStr.push(L.str),y(this,L,R)}}_layoutText(k){const R=this._layoutTextParams.properties=this._textDivProperties.get(k);if(this._layoutTextParams.div=k,C(this._layoutTextParams),R.hasText&&this._container.append(k),R.hasEOL){const L=document.createElement("br");L.setAttribute("role","presentation"),this._container.append(L)}}_render(){const k=new s.PromiseCapability;let R=Object.create(null);if(this._isReadableStream){const L=()=>{this._reader.read().then(({value:B,done:X})=>{if(X){k.resolve();return}Object.assign(R,B.styles),this._processItems(B.items,R),L()},k.reject)};this._reader=this._textContentSource.getReader(),L()}else if(this._textContentSource){const{items:L,styles:B}=this._textContentSource;this._processItems(L,B),k.resolve()}else throw new Error('No "textContentSource" parameter specified.');k.promise.then(()=>{R=null,A(this)},this._capability.reject)}}e.TextLayerRenderTask=w;function _(v){!v.textContentSource&&(v.textContent||v.textContentStream)&&((0,r.deprecated)("The TextLayerRender `textContent`/`textContentStream` parameters will be removed in the future, please use `textContentSource` instead."),v.textContentSource=v.textContent||v.textContentStream);const{container:k,viewport:R}=v,L=getComputedStyle(k),B=L.getPropertyValue("visibility"),X=parseFloat(L.getPropertyValue("--scale-factor"));B==="visible"&&(!X||Math.abs(X-R.scale)>1e-5)&&console.error("The `--scale-factor` CSS-variable must be set, to the same value as `viewport.scale`, either on the `container`-element itself or higher up in the DOM.");const U=new w(v);return U._render(),U}function E({container:v,viewport:k,textDivs:R,textDivProperties:L,isOffscreenCanvasSupported:B,mustRotate:X=!0,mustRescale:U=!0}){if(X&&(0,r.setLayerDimensions)(v,{rotation:k.rotation}),U){const M=g(0,B),$={prevFontSize:null,prevFontFamily:null,div:null,scale:k.scale*(globalThis.devicePixelRatio||1),properties:null,ctx:M};for(const ee of R)$.properties=L.get(ee),$.div=ee,C($)}}},(c,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.AnnotationEditorLayer=void 0;var s=t(1),r=t(5),o=t(28),a=t(29),f=t(6);class m{#e;#t=!1;#s=this.pointerup.bind(this);#n=this.pointerdown.bind(this);#r=new Map;#d=!1;#l=!1;#i;static _initialized=!1;constructor(p){m._initialized||(m._initialized=!0,o.FreeTextEditor.initialize(p.l10n),a.InkEditor.initialize(p.l10n)),p.uiManager.registerEditorTypes([o.FreeTextEditor,a.InkEditor]),this.#i=p.uiManager,this.pageIndex=p.pageIndex,this.div=p.div,this.#e=p.accessibilityManager,this.#i.addLayer(this)}get isEmpty(){return this.#r.size===0}updateToolbar(p){this.#i.updateToolbar(p)}updateMode(p=this.#i.getMode()){this.#u(),p===s.AnnotationEditorType.INK?(this.addInkEditorIfNeeded(!1),this.disableClick()):this.enableClick(),this.#i.unselectAll(),p!==s.AnnotationEditorType.NONE&&(this.div.classList.toggle("freeTextEditing",p===s.AnnotationEditorType.FREETEXT),this.div.classList.toggle("inkEditing",p===s.AnnotationEditorType.INK),this.div.hidden=!1)}addInkEditorIfNeeded(p){if(!p&&this.#i.getMode()!==s.AnnotationEditorType.INK)return;if(!p){for(const C of this.#r.values())if(C.isEmpty()){C.setInBackground();return}}this.#c({offsetX:0,offsetY:0}).setInBackground()}setEditingState(p){this.#i.setEditingState(p)}addCommands(p){this.#i.addCommands(p)}enable(){this.div.style.pointerEvents="auto";for(const p of this.#r.values())p.enableEditing()}disable(){this.div.style.pointerEvents="none";for(const p of this.#r.values())p.disableEditing();this.#u(),this.isEmpty&&(this.div.hidden=!0)}setActiveEditor(p){this.#i.getActive()!==p&&this.#i.setActiveEditor(p)}enableClick(){this.div.addEventListener("pointerdown",this.#n),this.div.addEventListener("pointerup",this.#s)}disableClick(){this.div.removeEventListener("pointerdown",this.#n),this.div.removeEventListener("pointerup",this.#s)}attach(p){this.#r.set(p.id,p)}detach(p){this.#r.delete(p.id),this.#e?.removePointerInTextLayer(p.contentDiv)}remove(p){this.#i.removeEditor(p),this.detach(p),p.div.style.display="none",setTimeout(()=>{p.div.style.display="",p.div.remove(),p.isAttachedToDOM=!1,document.activeElement===document.body&&this.#i.focusMainContainer()},0),this.#l||this.addInkEditorIfNeeded(!1)}#a(p){p.parent!==this&&(this.attach(p),p.parent?.detach(p),p.setParent(this),p.div&&p.isAttachedToDOM&&(p.div.remove(),this.div.append(p.div)))}add(p){if(this.#a(p),this.#i.addEditor(p),this.attach(p),!p.isAttachedToDOM){const y=p.render();this.div.append(y),p.isAttachedToDOM=!0}this.moveEditorInDOM(p),p.onceAdded(),this.#i.addToAnnotationStorage(p)}moveEditorInDOM(p){this.#e?.moveElementInDOM(this.div,p.div,p.contentDiv,!0)}addOrRebuild(p){p.needsToBeRebuilt()?p.rebuild():this.add(p)}addANewEditor(p){const y=()=>{this.addOrRebuild(p)},C=()=>{p.remove()};this.addCommands({cmd:y,undo:C,mustExec:!0})}addUndoableEditor(p){const y=()=>{this.addOrRebuild(p)},C=()=>{p.remove()};this.addCommands({cmd:y,undo:C,mustExec:!1})}getNextId(){return this.#i.getId()}#h(p){switch(this.#i.getMode()){case s.AnnotationEditorType.FREETEXT:return new o.FreeTextEditor(p);case s.AnnotationEditorType.INK:return new a.InkEditor(p)}return null}deserialize(p){switch(p.annotationType){case s.AnnotationEditorType.FREETEXT:return o.FreeTextEditor.deserialize(p,this,this.#i);case s.AnnotationEditorType.INK:return a.InkEditor.deserialize(p,this,this.#i)}return null}#c(p){const y=this.getNextId(),C=this.#h({parent:this,id:y,x:p.offsetX,y:p.offsetY,uiManager:this.#i});return C&&this.add(C),C}setSelected(p){this.#i.setSelected(p)}toggleSelected(p){this.#i.toggleSelected(p)}isSelected(p){return this.#i.isSelected(p)}unselect(p){this.#i.unselect(p)}pointerup(p){const{isMac:y}=s.FeatureTest.platform;if(!(p.button!==0||p.ctrlKey&&y)&&p.target===this.div&&this.#d){if(this.#d=!1,!this.#t){this.#t=!0;return}this.#c(p)}}pointerdown(p){const{isMac:y}=s.FeatureTest.platform;if(p.button!==0||p.ctrlKey&&y||p.target!==this.div)return;this.#d=!0;const C=this.#i.getActive();this.#t=!C||C.isEmpty()}drop(p){const y=p.dataTransfer.getData("text/plain"),C=this.#i.getEditor(y);if(!C)return;p.preventDefault(),p.dataTransfer.dropEffect="move",this.#a(C);const A=this.div.getBoundingClientRect(),w=p.clientX-A.x,_=p.clientY-A.y;C.translate(w-C.startX,_-C.startY),this.moveEditorInDOM(C),C.div.focus()}dragover(p){p.preventDefault()}destroy(){this.#i.getActive()?.parent===this&&this.#i.setActiveEditor(null);for(const p of this.#r.values())this.#e?.removePointerInTextLayer(p.contentDiv),p.setParent(null),p.isAttachedToDOM=!1,p.div.remove();this.div=null,this.#r.clear(),this.#i.removeLayer(this)}#u(){this.#l=!0;for(const p of this.#r.values())p.isEmpty()&&p.remove();this.#l=!1}render({viewport:p}){this.viewport=p,(0,f.setLayerDimensions)(this.div,p),(0,r.bindEvents)(this,this.div,["dragover","drop"]);for(const y of this.#i.getEditors(this.pageIndex))this.add(y);this.updateMode()}update({viewport:p}){this.#i.commitOrRemove(),this.viewport=p,(0,f.setLayerDimensions)(this.div,{rotation:p.rotation}),this.updateMode()}get pageDimensions(){const{pageWidth:p,pageHeight:y}=this.viewport.rawDims;return[p,y]}}e.AnnotationEditorLayer=m},(c,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.FreeTextEditor=void 0;var s=t(1),r=t(5),o=t(4);class a extends o.AnnotationEditor{#e=this.editorDivBlur.bind(this);#t=this.editorDivFocus.bind(this);#s=this.editorDivInput.bind(this);#n=this.editorDivKeydown.bind(this);#r;#d="";#l=`${this.id}-editor`;#i=!1;#a;static _freeTextDefaultContent="";static _l10nPromise;static _internalPadding=0;static _defaultColor=null;static _defaultFontSize=10;static _keyboardManager=new r.KeyboardManager([[["ctrl+Enter","mac+meta+Enter","Escape","mac+Escape"],a.prototype.commitOrRemove]]);static _type="freetext";constructor(m){super({...m,name:"freeTextEditor"}),this.#r=m.color||a._defaultColor||o.AnnotationEditor._defaultLineColor,this.#a=m.fontSize||a._defaultFontSize}static initialize(m){this._l10nPromise=new Map(["free_text2_default_content","editor_free_text2_aria_label"].map(p=>[p,m.get(p)]));const g=getComputedStyle(document.documentElement);this._internalPadding=parseFloat(g.getPropertyValue("--freetext-padding"))}static updateDefaultParams(m,g){switch(m){case s.AnnotationEditorParamsType.FREETEXT_SIZE:a._defaultFontSize=g;break;case s.AnnotationEditorParamsType.FREETEXT_COLOR:a._defaultColor=g;break}}updateParams(m,g){switch(m){case s.AnnotationEditorParamsType.FREETEXT_SIZE:this.#h(g);break;case s.AnnotationEditorParamsType.FREETEXT_COLOR:this.#c(g);break}}static get defaultPropertiesToUpdate(){return[[s.AnnotationEditorParamsType.FREETEXT_SIZE,a._defaultFontSize],[s.AnnotationEditorParamsType.FREETEXT_COLOR,a._defaultColor||o.AnnotationEditor._defaultLineColor]]}get propertiesToUpdate(){return[[s.AnnotationEditorParamsType.FREETEXT_SIZE,this.#a],[s.AnnotationEditorParamsType.FREETEXT_COLOR,this.#r]]}#h(m){const g=y=>{this.editorDiv.style.fontSize=`calc(${y}px * var(--scale-factor))`,this.translate(0,-(y-this.#a)*this.parentScale),this.#a=y,this.#o()},p=this.#a;this.addCommands({cmd:()=>{g(m)},undo:()=>{g(p)},mustExec:!0,type:s.AnnotationEditorParamsType.FREETEXT_SIZE,overwriteIfSameType:!0,keepUndo:!0})}#c(m){const g=this.#r;this.addCommands({cmd:()=>{this.#r=this.editorDiv.style.color=m},undo:()=>{this.#r=this.editorDiv.style.color=g},mustExec:!0,type:s.AnnotationEditorParamsType.FREETEXT_COLOR,overwriteIfSameType:!0,keepUndo:!0})}getInitialTranslation(){const m=this.parentScale;return[-a._internalPadding*m,-(a._internalPadding+this.#a)*m]}rebuild(){super.rebuild(),this.div!==null&&(this.isAttachedToDOM||this.parent.add(this))}enableEditMode(){this.isInEditMode()||(this.parent.setEditingState(!1),this.parent.updateToolbar(s.AnnotationEditorType.FREETEXT),super.enableEditMode(),this.overlayDiv.classList.remove("enabled"),this.editorDiv.contentEditable=!0,this.div.draggable=!1,this.div.removeAttribute("aria-activedescendant"),this.editorDiv.addEventListener("keydown",this.#n),this.editorDiv.addEventListener("focus",this.#t),this.editorDiv.addEventListener("blur",this.#e),this.editorDiv.addEventListener("input",this.#s))}disableEditMode(){this.isInEditMode()&&(this.parent.setEditingState(!0),super.disableEditMode(),this.overlayDiv.classList.add("enabled"),this.editorDiv.contentEditable=!1,this.div.setAttribute("aria-activedescendant",this.#l),this.div.draggable=!0,this.editorDiv.removeEventListener("keydown",this.#n),this.editorDiv.removeEventListener("focus",this.#t),this.editorDiv.removeEventListener("blur",this.#e),this.editorDiv.removeEventListener("input",this.#s),this.div.focus({preventScroll:!0}),this.isEditing=!1,this.parent.div.classList.add("freeTextEditing"))}focusin(m){super.focusin(m),m.target!==this.editorDiv&&this.editorDiv.focus()}onceAdded(){this.width||(this.enableEditMode(),this.editorDiv.focus())}isEmpty(){return!this.editorDiv||this.editorDiv.innerText.trim()===""}remove(){this.isEditing=!1,this.parent.setEditingState(!0),this.parent.div.classList.add("freeTextEditing"),super.remove()}#u(){const m=this.editorDiv.getElementsByTagName("div");if(m.length===0)return this.editorDiv.innerText;const g=[];for(const p of m)g.push(p.innerText.replace(/\r\n?|\n/,""));return g.join(`
`)}#o(){const[m,g]=this.parentDimensions;let p;if(this.isAttachedToDOM)p=this.div.getBoundingClientRect();else{const{currentLayer:y,div:C}=this,A=C.style.display;C.style.display="hidden",y.div.append(this.div),p=C.getBoundingClientRect(),C.remove(),C.style.display=A}this.width=p.width/m,this.height=p.height/g}commit(){this.isInEditMode()&&(super.commit(),this.#i||(this.#i=!0,this.parent.addUndoableEditor(this)),this.disableEditMode(),this.#d=this.#u().trimEnd(),this.#o())}shouldGetKeyboardEvents(){return this.isInEditMode()}dblclick(m){this.enableEditMode(),this.editorDiv.focus()}keydown(m){m.target===this.div&&m.key==="Enter"&&(this.enableEditMode(),this.editorDiv.focus())}editorDivKeydown(m){a._keyboardManager.exec(this,m)}editorDivFocus(m){this.isEditing=!0}editorDivBlur(m){this.isEditing=!1}editorDivInput(m){this.parent.div.classList.toggle("freeTextEditing",this.isEmpty())}disableEditing(){this.editorDiv.setAttribute("role","comment"),this.editorDiv.removeAttribute("aria-multiline")}enableEditing(){this.editorDiv.setAttribute("role","textbox"),this.editorDiv.setAttribute("aria-multiline",!0)}render(){if(this.div)return this.div;let m,g;this.width&&(m=this.x,g=this.y),super.render(),this.editorDiv=document.createElement("div"),this.editorDiv.className="internal",this.editorDiv.setAttribute("id",this.#l),this.enableEditing(),a._l10nPromise.get("editor_free_text2_aria_label").then(y=>this.editorDiv?.setAttribute("aria-label",y)),a._l10nPromise.get("free_text2_default_content").then(y=>this.editorDiv?.setAttribute("default-content",y)),this.editorDiv.contentEditable=!0;const{style:p}=this.editorDiv;if(p.fontSize=`calc(${this.#a}px * var(--scale-factor))`,p.color=this.#r,this.div.append(this.editorDiv),this.overlayDiv=document.createElement("div"),this.overlayDiv.classList.add("overlay","enabled"),this.div.append(this.overlayDiv),(0,r.bindEvents)(this,this.div,["dblclick","keydown"]),this.width){const[y,C]=this.parentDimensions;this.setAt(m*y,g*C,this.width*y,this.height*C);for(const A of this.#d.split(`
`)){const w=document.createElement("div");w.append(A?document.createTextNode(A):document.createElement("br")),this.editorDiv.append(w)}this.div.draggable=!0,this.editorDiv.contentEditable=!1}else this.div.draggable=!1,this.editorDiv.contentEditable=!0;return this.div}get contentDiv(){return this.editorDiv}static deserialize(m,g,p){const y=super.deserialize(m,g,p);return y.#a=m.fontSize,y.#r=s.Util.makeHexColor(...m.color),y.#d=m.value,y}serialize(){if(this.isEmpty())return null;const m=a._internalPadding*this.parentScale,g=this.getRect(m,m),p=o.AnnotationEditor._colorManager.convert(this.isAttachedToDOM?getComputedStyle(this.editorDiv).color:this.#r);return{annotationType:s.AnnotationEditorType.FREETEXT,color:p,fontSize:this.#a,value:this.#d,pageIndex:this.pageIndex,rect:g,rotation:this.rotation}}}e.FreeTextEditor=a},(c,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.InkEditor=void 0,Object.defineProperty(e,"fitCurve",{enumerable:!0,get:function(){return o.fitCurve}});var s=t(1),r=t(4),o=t(30),a=t(5);const f=16;class m extends r.AnnotationEditor{#e=0;#t=0;#s=0;#n=this.canvasPointermove.bind(this);#r=this.canvasPointerleave.bind(this);#d=this.canvasPointerup.bind(this);#l=this.canvasPointerdown.bind(this);#i=!1;#a=!1;#h=null;#c=null;#u=0;#o=0;#m=null;static _defaultColor=null;static _defaultOpacity=1;static _defaultThickness=1;static _l10nPromise;static _type="ink";constructor(p){super({...p,name:"inkEditor"}),this.color=p.color||null,this.thickness=p.thickness||null,this.opacity=p.opacity||null,this.paths=[],this.bezierPath2D=[],this.currentPath=[],this.scaleFactor=1,this.translationX=this.translationY=0,this.x=0,this.y=0}static initialize(p){this._l10nPromise=new Map(["editor_ink_canvas_aria_label","editor_ink2_aria_label"].map(y=>[y,p.get(y)]))}static updateDefaultParams(p,y){switch(p){case s.AnnotationEditorParamsType.INK_THICKNESS:m._defaultThickness=y;break;case s.AnnotationEditorParamsType.INK_COLOR:m._defaultColor=y;break;case s.AnnotationEditorParamsType.INK_OPACITY:m._defaultOpacity=y/100;break}}updateParams(p,y){switch(p){case s.AnnotationEditorParamsType.INK_THICKNESS:this.#S(y);break;case s.AnnotationEditorParamsType.INK_COLOR:this.#v(y);break;case s.AnnotationEditorParamsType.INK_OPACITY:this.#E(y);break}}static get defaultPropertiesToUpdate(){return[[s.AnnotationEditorParamsType.INK_THICKNESS,m._defaultThickness],[s.AnnotationEditorParamsType.INK_COLOR,m._defaultColor||r.AnnotationEditor._defaultLineColor],[s.AnnotationEditorParamsType.INK_OPACITY,Math.round(m._defaultOpacity*100)]]}get propertiesToUpdate(){return[[s.AnnotationEditorParamsType.INK_THICKNESS,this.thickness||m._defaultThickness],[s.AnnotationEditorParamsType.INK_COLOR,this.color||m._defaultColor||r.AnnotationEditor._defaultLineColor],[s.AnnotationEditorParamsType.INK_OPACITY,Math.round(100*(this.opacity??m._defaultOpacity))]]}#S(p){const y=this.thickness;this.addCommands({cmd:()=>{this.thickness=p,this.#b()},undo:()=>{this.thickness=y,this.#b()},mustExec:!0,type:s.AnnotationEditorParamsType.INK_THICKNESS,overwriteIfSameType:!0,keepUndo:!0})}#v(p){const y=this.color;this.addCommands({cmd:()=>{this.color=p,this.#p()},undo:()=>{this.color=y,this.#p()},mustExec:!0,type:s.AnnotationEditorParamsType.INK_COLOR,overwriteIfSameType:!0,keepUndo:!0})}#E(p){p/=100;const y=this.opacity;this.addCommands({cmd:()=>{this.opacity=p,this.#p()},undo:()=>{this.opacity=y,this.#p()},mustExec:!0,type:s.AnnotationEditorParamsType.INK_OPACITY,overwriteIfSameType:!0,keepUndo:!0})}rebuild(){super.rebuild(),this.div!==null&&(this.canvas||(this.#y(),this.#_()),this.isAttachedToDOM||(this.parent.add(this),this.#A()),this.#b())}remove(){this.canvas!==null&&(this.isEmpty()||this.commit(),this.canvas.width=this.canvas.height=0,this.canvas.remove(),this.canvas=null,this.#c.disconnect(),this.#c=null,super.remove())}setParent(p){!this.parent&&p?this._uiManager.removeShouldRescale(this):this.parent&&p===null&&this._uiManager.addShouldRescale(this),super.setParent(p)}onScaleChanging(){const[p,y]=this.parentDimensions,C=this.width*p,A=this.height*y;this.setDimensions(C,A)}enableEditMode(){this.#i||this.canvas===null||(super.enableEditMode(),this.div.draggable=!1,this.canvas.addEventListener("pointerdown",this.#l),this.canvas.addEventListener("pointerup",this.#d))}disableEditMode(){!this.isInEditMode()||this.canvas===null||(super.disableEditMode(),this.div.draggable=!this.isEmpty(),this.div.classList.remove("editing"),this.canvas.removeEventListener("pointerdown",this.#l),this.canvas.removeEventListener("pointerup",this.#d))}onceAdded(){this.div.draggable=!this.isEmpty()}isEmpty(){return this.paths.length===0||this.paths.length===1&&this.paths[0].length===0}#T(){const{parentRotation:p,parentDimensions:[y,C]}=this;switch(p){case 90:return[0,C,C,y];case 180:return[y,C,y,C];case 270:return[y,0,C,y];default:return[0,0,y,C]}}#w(){const{ctx:p,color:y,opacity:C,thickness:A,parentScale:w,scaleFactor:_}=this;p.lineWidth=A*w/_,p.lineCap="round",p.lineJoin="round",p.miterLimit=10,p.strokeStyle=`${y}${(0,a.opacityToHex)(C)}`}#P(p,y){this.isEditing=!0,this.#a||(this.#a=!0,this.#A(),this.thickness||=m._defaultThickness,this.color||=m._defaultColor||r.AnnotationEditor._defaultLineColor,this.opacity??=m._defaultOpacity),this.currentPath.push([p,y]),this.#h=null,this.#w(),this.ctx.beginPath(),this.ctx.moveTo(p,y),this.#m=()=>{this.#m&&(this.#h&&(this.isEmpty()?(this.ctx.setTransform(1,0,0,1,0,0),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)):this.#p(),this.ctx.lineTo(...this.#h),this.#h=null,this.ctx.stroke()),window.requestAnimationFrame(this.#m))},window.requestAnimationFrame(this.#m)}#R(p,y){const[C,A]=this.currentPath.at(-1);p===C&&y===A||(this.currentPath.push([p,y]),this.#h=[p,y])}#k(p,y){this.ctx.closePath(),this.#m=null,p=Math.min(Math.max(p,0),this.canvas.width),y=Math.min(Math.max(y,0),this.canvas.height);const[C,A]=this.currentPath.at(-1);(p!==C||y!==A)&&this.currentPath.push([p,y]);let w;if(this.currentPath.length!==1)w=(0,o.fitCurve)(this.currentPath,30,null);else{const k=[p,y];w=[[k,k.slice(),k.slice(),k]]}const _=m.#I(w);this.currentPath.length=0;const E=()=>{this.paths.push(w),this.bezierPath2D.push(_),this.rebuild()},v=()=>{this.paths.pop(),this.bezierPath2D.pop(),this.paths.length===0?this.remove():(this.canvas||(this.#y(),this.#_()),this.#b())};this.addCommands({cmd:E,undo:v,mustExec:!0})}#p(){if(this.isEmpty()){this.#g();return}this.#w();const{canvas:p,ctx:y}=this;y.setTransform(1,0,0,1,0,0),y.clearRect(0,0,p.width,p.height),this.#g();for(const C of this.bezierPath2D)y.stroke(C)}commit(){this.#i||(super.commit(),this.isEditing=!1,this.disableEditMode(),this.setInForeground(),this.#i=!0,this.div.classList.add("disabled"),this.#b(!0),this.parent.addInkEditorIfNeeded(!0),this.parent.moveEditorInDOM(this),this.div.focus({preventScroll:!0}))}focusin(p){super.focusin(p),this.enableEditMode()}canvasPointerdown(p){p.button!==0||!this.isInEditMode()||this.#i||(this.setInForeground(),p.type!=="mouse"&&this.div.focus(),p.stopPropagation(),this.canvas.addEventListener("pointerleave",this.#r),this.canvas.addEventListener("pointermove",this.#n),this.#P(p.offsetX,p.offsetY))}canvasPointermove(p){p.stopPropagation(),this.#R(p.offsetX,p.offsetY)}canvasPointerup(p){p.button===0&&this.isInEditMode()&&this.currentPath.length!==0&&(p.stopPropagation(),this.#D(p),this.setInBackground())}canvasPointerleave(p){this.#D(p),this.setInBackground()}#D(p){this.#k(p.offsetX,p.offsetY),this.canvas.removeEventListener("pointerleave",this.#r),this.canvas.removeEventListener("pointermove",this.#n),this.addToAnnotationStorage()}#y(){this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=0,this.canvas.className="inkEditorCanvas",m._l10nPromise.get("editor_ink_canvas_aria_label").then(p=>this.canvas?.setAttribute("aria-label",p)),this.div.append(this.canvas),this.ctx=this.canvas.getContext("2d")}#_(){this.#c=new ResizeObserver(p=>{const y=p[0].contentRect;y.width&&y.height&&this.setDimensions(y.width,y.height)}),this.#c.observe(this.div)}render(){if(this.div)return this.div;let p,y;this.width&&(p=this.x,y=this.y),super.render(),m._l10nPromise.get("editor_ink2_aria_label").then(E=>this.div?.setAttribute("aria-label",E));const[C,A,w,_]=this.#T();if(this.setAt(C,A,0,0),this.setDims(w,_),this.#y(),this.width){const[E,v]=this.parentDimensions;this.setAt(p*E,y*v,this.width*E,this.height*v),this.#a=!0,this.#A(),this.setDims(this.width*E,this.height*v),this.#p(),this.#N(),this.div.classList.add("disabled")}else this.div.classList.add("editing"),this.enableEditMode();return this.#_(),this.div}#A(){if(!this.#a)return;const[p,y]=this.parentDimensions;this.canvas.width=Math.ceil(this.width*p),this.canvas.height=Math.ceil(this.height*y),this.#g()}setDimensions(p,y){const C=Math.round(p),A=Math.round(y);if(this.#u===C&&this.#o===A)return;this.#u=C,this.#o=A,this.canvas.style.visibility="hidden",this.#e&&Math.abs(this.#e-p/y)>.01&&(y=Math.ceil(p/this.#e),this.setDims(p,y));const[w,_]=this.parentDimensions;this.width=p/w,this.height=y/_,this.#i&&this.#f(p,y),this.#A(),this.#p(),this.canvas.style.visibility="visible",this.fixDims()}#f(p,y){const C=this.#B(),A=(p-C)/this.#s,w=(y-C)/this.#t;this.scaleFactor=Math.min(A,w)}#g(){const p=this.#B()/2;this.ctx.setTransform(this.scaleFactor,0,0,this.scaleFactor,this.translationX*this.scaleFactor+p,this.translationY*this.scaleFactor+p)}static#I(p){const y=new Path2D;for(let C=0,A=p.length;C<A;C++){const[w,_,E,v]=p[C];C===0&&y.moveTo(...w),y.bezierCurveTo(_[0],_[1],E[0],E[1],v[0],v[1])}return y}#L(p,y,C,A){const _=[],E=this.thickness/2;let v,k;for(const R of this.paths){v=[],k=[];for(let L=0,B=R.length;L<B;L++){const[X,U,M,F]=R[L],$=p*(X[0]+y)+E,ee=A-p*(X[1]+C)-E,te=p*(U[0]+y)+E,he=A-p*(U[1]+C)-E,re=p*(M[0]+y)+E,pe=A-p*(M[1]+C)-E,le=p*(F[0]+y)+E,J=A-p*(F[1]+C)-E;L===0&&(v.push($,ee),k.push($,ee)),v.push(te,he,re,pe,le,J),this.#M($,ee,te,he,re,pe,le,J,4,k)}_.push({bezier:v,points:k})}return _}#M(p,y,C,A,w,_,E,v,k,R){if(this.#C(p,y,C,A,w,_,E,v)){R.push(E,v);return}for(let L=1;L<k-1;L++){const B=L/k,X=1-B;let U=B*p+X*C,M=B*y+X*A,F=B*C+X*w,$=B*A+X*_;const ee=B*w+X*E,te=B*_+X*v;U=B*U+X*F,M=B*M+X*$,F=B*F+X*ee,$=B*$+X*te,U=B*U+X*F,M=B*M+X*$,R.push(U,M)}R.push(E,v)}#C(p,y,C,A,w,_,E,v){const R=(3*C-2*p-E)**2,L=(3*A-2*y-v)**2,B=(3*w-p-2*E)**2,X=(3*_-y-2*v)**2;return Math.max(R,B)+Math.max(L,X)<=10}#x(){let p=1/0,y=-1/0,C=1/0,A=-1/0;for(const w of this.paths)for(const[_,E,v,k]of w){const R=s.Util.bezierBoundingBox(..._,...E,...v,...k);p=Math.min(p,R[0]),C=Math.min(C,R[1]),y=Math.max(y,R[2]),A=Math.max(A,R[3])}return[p,C,y,A]}#B(){return this.#i?Math.ceil(this.thickness*this.parentScale):0}#b(p=!1){if(this.isEmpty())return;if(!this.#i){this.#p();return}const y=this.#x(),C=this.#B();this.#s=Math.max(f,y[2]-y[0]),this.#t=Math.max(f,y[3]-y[1]);const A=Math.ceil(C+this.#s*this.scaleFactor),w=Math.ceil(C+this.#t*this.scaleFactor),[_,E]=this.parentDimensions;this.width=A/_,this.height=w/E,this.#e=A/w,this.#N();const v=this.translationX,k=this.translationY;this.translationX=-y[0],this.translationY=-y[1],this.#A(),this.#p(),this.#u=A,this.#o=w,this.setDims(A,w);const R=p?C/this.scaleFactor/2:0;this.translate(v-this.translationX-R,k-this.translationY-R)}#N(){const{style:p}=this.div;this.#e>=1?(p.minHeight=`${f}px`,p.minWidth=`${Math.round(this.#e*f)}px`):(p.minWidth=`${f}px`,p.minHeight=`${Math.round(f/this.#e)}px`)}static deserialize(p,y,C){const A=super.deserialize(p,y,C);A.thickness=p.thickness,A.color=s.Util.makeHexColor(...p.color),A.opacity=p.opacity;const[w,_]=A.pageDimensions,E=A.width*w,v=A.height*_,k=A.parentScale,R=p.thickness/2;A.#e=E/v,A.#i=!0,A.#u=Math.round(E),A.#o=Math.round(v);for(const{bezier:B}of p.paths){const X=[];A.paths.push(X);let U=k*(B[0]-R),M=k*(v-B[1]-R);for(let $=2,ee=B.length;$<ee;$+=6){const te=k*(B[$]-R),he=k*(v-B[$+1]-R),re=k*(B[$+2]-R),pe=k*(v-B[$+3]-R),le=k*(B[$+4]-R),J=k*(v-B[$+5]-R);X.push([[U,M],[te,he],[re,pe],[le,J]]),U=le,M=J}const F=this.#I(X);A.bezierPath2D.push(F)}const L=A.#x();return A.#s=Math.max(f,L[2]-L[0]),A.#t=Math.max(f,L[3]-L[1]),A.#f(E,v),A}serialize(){if(this.isEmpty())return null;const p=this.getRect(0,0),y=this.rotation%180===0?p[3]-p[1]:p[2]-p[0],C=r.AnnotationEditor._colorManager.convert(this.ctx.strokeStyle);return{annotationType:s.AnnotationEditorType.INK,color:C,thickness:this.thickness,opacity:this.opacity,paths:this.#L(this.scaleFactor/this.parentScale,this.translationX,this.translationY,y),pageIndex:this.pageIndex,rect:p,rotation:this.rotation}}}e.InkEditor=m},(c,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.fitCurve=void 0;const s=t(31);e.fitCurve=s},c=>{function e(w,_,E){if(!Array.isArray(w))throw new TypeError("First argument should be an array");if(w.forEach(L=>{if(!Array.isArray(L)||L.some(B=>typeof B!="number")||L.length!==w[0].length)throw Error("Each point should be an array of numbers. Each point should have the same amount of numbers.")}),w=w.filter((L,B)=>B===0||!L.every((X,U)=>X===w[B-1][U])),w.length<2)return[];const v=w.length,k=y(w[1],w[0]),R=y(w[v-2],w[v-1]);return t(w,k,R,_,E)}function t(w,_,E,v,k){var L,B,X,U,M,F,$,ee,te,he,re,pe,le;if(w.length===2)return pe=C.vectorLen(C.subtract(w[0],w[1]))/3,L=[w[0],C.addArrays(w[0],C.mulItems(_,pe)),C.addArrays(w[1],C.mulItems(E,pe)),w[1]],[L];if(B=f(w),[L,U,F]=s(w,B,B,_,E,k),U===0||U<v)return[L];if(U<v*v)for(X=B,M=U,$=F,le=0;le<20;le++){if(X=o(L,w,X),[L,U,F]=s(w,B,X,_,E,k),U<v)return[L];if(F===$){let J=U/M;if(J>.9999&&J<1.0001)break}M=U,$=F}return re=[],ee=C.subtract(w[F-1],w[F+1]),ee.every(J=>J===0)&&(ee=C.subtract(w[F-1],w[F]),[ee[0],ee[1]]=[-ee[1],ee[0]]),te=C.normalize(ee),he=C.mulItems(te,-1),re=re.concat(t(w.slice(0,F+1),_,te,v,k)),re=re.concat(t(w.slice(F),he,E,v,k)),re}function s(w,_,E,v,k,R){var L,B,X;return L=r(w,E,v,k),[B,X]=m(w,L,_),R&&R({bez:L,points:w,params:_,maxErr:B,maxPoint:X}),[L,B,X]}function r(w,_,E,v){var k,R,L,B,X,U,M,F,$,ee,te,he,re,pe,le,J,se,Y=w[0],I=w[w.length-1];for(k=[Y,null,null,I],R=C.zeros_Xx2x2(_.length),re=0,pe=_.length;re<pe;re++)J=_[re],se=1-J,L=R[re],L[0]=C.mulItems(E,3*J*(se*se)),L[1]=C.mulItems(v,3*se*(J*J));for(B=[[0,0],[0,0]],X=[0,0],re=0,pe=w.length;re<pe;re++)J=_[re],L=R[re],B[0][0]+=C.dot(L[0],L[0]),B[0][1]+=C.dot(L[0],L[1]),B[1][0]+=C.dot(L[0],L[1]),B[1][1]+=C.dot(L[1],L[1]),le=C.subtract(w[re],A.q([Y,Y,I,I],J)),X[0]+=C.dot(L[0],le),X[1]+=C.dot(L[1],le);return U=B[0][0]*B[1][1]-B[1][0]*B[0][1],M=B[0][0]*X[1]-B[1][0]*X[0],F=X[0]*B[1][1]-X[1]*B[0][1],$=U===0?0:F/U,ee=U===0?0:M/U,he=C.vectorLen(C.subtract(Y,I)),te=1e-6*he,$<te||ee<te?(k[1]=C.addArrays(Y,C.mulItems(E,he/3)),k[2]=C.addArrays(I,C.mulItems(v,he/3))):(k[1]=C.addArrays(Y,C.mulItems(E,$)),k[2]=C.addArrays(I,C.mulItems(v,ee))),k}function o(w,_,E){return E.map((v,k)=>a(w,_[k],v))}function a(w,_,E){var v=C.subtract(A.q(w,E),_),k=A.qprime(w,E),R=C.mulMatrix(v,k),L=C.sum(C.squareItems(k))+2*C.mulMatrix(v,A.qprimeprime(w,E));return L===0?E:E-R/L}function f(w){var _=[],E,v,k;return w.forEach((R,L)=>{E=L?v+C.vectorLen(C.subtract(R,k)):0,_.push(E),v=E,k=R}),_=_.map(R=>R/v),_}function m(w,_,E){var v,k,R,L,B,X,U,M;k=0,R=Math.floor(w.length/2);const F=g(_,10);for(B=0,X=w.length;B<X;B++)U=w[B],M=p(_,E[B],F,10),L=C.subtract(A.q(_,M),U),v=L[0]*L[0]+L[1]*L[1],v>k&&(k=v,R=B);return[k,R]}var g=function(w,_){for(var E,v=[0],k=w[0],R=0,L=1;L<=_;L++)E=A.q(w,L/_),R+=C.vectorLen(C.subtract(E,k)),v.push(R),k=E;return v=v.map(B=>B/R),v};function p(w,_,E,v){if(_<0)return 0;if(_>1)return 1;for(var k,R,L,B,X,U=1;U<=v;U++)if(_<=E[U]){B=(U-1)/v,L=U/v,R=E[U-1],k=E[U],X=(_-R)/(k-R)*(L-B)+B;break}return X}function y(w,_){return C.normalize(C.subtract(w,_))}class C{static zeros_Xx2x2(_){for(var E=[];_--;)E.push([0,0]);return E}static mulItems(_,E){return _.map(v=>v*E)}static mulMatrix(_,E){return _.reduce((v,k,R)=>v+k*E[R],0)}static subtract(_,E){return _.map((v,k)=>v-E[k])}static addArrays(_,E){return _.map((v,k)=>v+E[k])}static addItems(_,E){return _.map(v=>v+E)}static sum(_){return _.reduce((E,v)=>E+v)}static dot(_,E){return C.mulMatrix(_,E)}static vectorLen(_){return Math.hypot(..._)}static divItems(_,E){return _.map(v=>v/E)}static squareItems(_){return _.map(E=>E*E)}static normalize(_){return this.divItems(_,this.vectorLen(_))}}class A{static q(_,E){var v=1-E,k=C.mulItems(_[0],v*v*v),R=C.mulItems(_[1],3*v*v*E),L=C.mulItems(_[2],3*v*E*E),B=C.mulItems(_[3],E*E*E);return C.addArrays(C.addArrays(k,R),C.addArrays(L,B))}static qprime(_,E){var v=1-E,k=C.mulItems(C.subtract(_[1],_[0]),3*v*v),R=C.mulItems(C.subtract(_[2],_[1]),6*v*E),L=C.mulItems(C.subtract(_[3],_[2]),3*E*E);return C.addArrays(C.addArrays(k,R),L)}static qprimeprime(_,E){return C.addArrays(C.mulItems(C.addArrays(C.subtract(_[2],C.mulItems(_[1],2)),_[0]),6*(1-E)),C.mulItems(C.addArrays(C.subtract(_[3],C.mulItems(_[2],2)),_[1]),6*E))}}c.exports=e,c.exports.fitCubic=t,c.exports.createTangent=y},(c,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.AnnotationLayer=void 0;var s=t(1),r=t(6),o=t(3),a=t(33),f=t(34);const m=1e3,g=9,p=new WeakSet;function y(q){return{width:q[2]-q[0],height:q[3]-q[1]}}class C{static create(b){switch(b.data.annotationType){case s.AnnotationType.LINK:return new w(b);case s.AnnotationType.TEXT:return new _(b);case s.AnnotationType.WIDGET:switch(b.data.fieldType){case"Tx":return new v(b);case"Btn":return b.data.radioButton?new R(b):b.data.checkBox?new k(b):new L(b);case"Ch":return new B(b)}return new E(b);case s.AnnotationType.POPUP:return new X(b);case s.AnnotationType.FREETEXT:return new M(b);case s.AnnotationType.LINE:return new F(b);case s.AnnotationType.SQUARE:return new $(b);case s.AnnotationType.CIRCLE:return new ee(b);case s.AnnotationType.POLYLINE:return new te(b);case s.AnnotationType.CARET:return new re(b);case s.AnnotationType.INK:return new pe(b);case s.AnnotationType.POLYGON:return new he(b);case s.AnnotationType.HIGHLIGHT:return new le(b);case s.AnnotationType.UNDERLINE:return new J(b);case s.AnnotationType.SQUIGGLY:return new se(b);case s.AnnotationType.STRIKEOUT:return new Y(b);case s.AnnotationType.STAMP:return new I(b);case s.AnnotationType.FILEATTACHMENT:return new P(b);default:return new A(b)}}}class A{constructor(b,{isRenderable:D=!1,ignoreBorder:N=!1,createQuadrilaterals:j=!1}={}){this.isRenderable=D,this.data=b.data,this.layer=b.layer,this.page=b.page,this.viewport=b.viewport,this.linkService=b.linkService,this.downloadManager=b.downloadManager,this.imageResourcesPath=b.imageResourcesPath,this.renderForms=b.renderForms,this.svgFactory=b.svgFactory,this.annotationStorage=b.annotationStorage,this.enableScripting=b.enableScripting,this.hasJSActions=b.hasJSActions,this._fieldObjects=b.fieldObjects,D&&(this.container=this._createContainer(N)),j&&(this.quadrilaterals=this._createQuadrilaterals(N))}_createContainer(b=!1){const{data:D,page:N,viewport:j}=this,V=document.createElement("section");V.setAttribute("data-annotation-id",D.id),D.noRotate&&V.classList.add("norotate");const{pageWidth:Z,pageHeight:Q,pageX:ie,pageY:ce}=j.rawDims,{width:ne,height:de}=y(D.rect),fe=s.Util.normalizeRect([D.rect[0],N.view[3]-D.rect[1]+N.view[1],D.rect[2],N.view[3]-D.rect[3]+N.view[1]]);if(!b&&D.borderStyle.width>0){V.style.borderWidth=`${D.borderStyle.width}px`;const ge=D.borderStyle.horizontalCornerRadius,Ae=D.borderStyle.verticalCornerRadius;if(ge>0||Ae>0){const we=`calc(${ge}px * var(--scale-factor)) / calc(${Ae}px * var(--scale-factor))`;V.style.borderRadius=we}else if(this instanceof R){const we=`calc(${ne}px * var(--scale-factor)) / calc(${de}px * var(--scale-factor))`;V.style.borderRadius=we}switch(D.borderStyle.style){case s.AnnotationBorderStyleType.SOLID:V.style.borderStyle="solid";break;case s.AnnotationBorderStyleType.DASHED:V.style.borderStyle="dashed";break;case s.AnnotationBorderStyleType.BEVELED:(0,s.warn)("Unimplemented border style: beveled");break;case s.AnnotationBorderStyleType.INSET:(0,s.warn)("Unimplemented border style: inset");break;case s.AnnotationBorderStyleType.UNDERLINE:V.style.borderBottomStyle="solid";break}const ye=D.borderColor||null;ye?V.style.borderColor=s.Util.makeHexColor(ye[0]|0,ye[1]|0,ye[2]|0):V.style.borderWidth=0}V.style.left=`${100*(fe[0]-ie)/Z}%`,V.style.top=`${100*(fe[1]-ce)/Q}%`;const{rotation:ue}=D;return D.hasOwnCanvas||ue===0?(V.style.width=`${100*ne/Z}%`,V.style.height=`${100*de/Q}%`):this.setRotation(ue,V),V}setRotation(b,D=this.container){const{pageWidth:N,pageHeight:j}=this.viewport.rawDims,{width:V,height:Z}=y(this.data.rect);let Q,ie;b%180===0?(Q=100*V/N,ie=100*Z/j):(Q=100*Z/N,ie=100*V/j),D.style.width=`${Q}%`,D.style.height=`${ie}%`,D.setAttribute("data-main-rotation",(360-b)%360)}get _commonActions(){const b=(D,N,j)=>{const V=j.detail[D];j.target.style[N]=a.ColorConverters[`${V[0]}_HTML`](V.slice(1))};return(0,s.shadow)(this,"_commonActions",{display:D=>{const N=D.detail.display%2===1;this.container.style.visibility=N?"hidden":"visible",this.annotationStorage.setValue(this.data.id,{hidden:N,print:D.detail.display===0||D.detail.display===3})},print:D=>{this.annotationStorage.setValue(this.data.id,{print:D.detail.print})},hidden:D=>{this.container.style.visibility=D.detail.hidden?"hidden":"visible",this.annotationStorage.setValue(this.data.id,{hidden:D.detail.hidden})},focus:D=>{setTimeout(()=>D.target.focus({preventScroll:!1}),0)},userName:D=>{D.target.title=D.detail.userName},readonly:D=>{D.detail.readonly?D.target.setAttribute("readonly",""):D.target.removeAttribute("readonly")},required:D=>{this._setRequired(D.target,D.detail.required)},bgColor:D=>{b("bgColor","backgroundColor",D)},fillColor:D=>{b("fillColor","backgroundColor",D)},fgColor:D=>{b("fgColor","color",D)},textColor:D=>{b("textColor","color",D)},borderColor:D=>{b("borderColor","borderColor",D)},strokeColor:D=>{b("strokeColor","borderColor",D)},rotation:D=>{const N=D.detail.rotation;this.setRotation(N),this.annotationStorage.setValue(this.data.id,{rotation:N})}})}_dispatchEventFromSandbox(b,D){const N=this._commonActions;for(const j of Object.keys(D.detail))(b[j]||N[j])?.(D)}_setDefaultPropertiesFromJS(b){if(!this.enableScripting)return;const D=this.annotationStorage.getRawValue(this.data.id);if(!D)return;const N=this._commonActions;for(const[j,V]of Object.entries(D)){const Z=N[j];if(Z){const Q={detail:{[j]:V},target:b};Z(Q),delete D[j]}}}_createQuadrilaterals(b=!1){if(!this.data.quadPoints)return null;const D=[],N=this.data.rect;for(const j of this.data.quadPoints)this.data.rect=[j[2].x,j[2].y,j[1].x,j[1].y],D.push(this._createContainer(b));return this.data.rect=N,D}_createPopup(b,D){let N=this.container;this.quadrilaterals&&(b||=this.quadrilaterals,N=this.quadrilaterals[0]),b||(b=document.createElement("div"),b.classList.add("popupTriggerArea"),N.append(b));const V=new U({container:N,trigger:b,color:D.color,titleObj:D.titleObj,modificationDate:D.modificationDate,contentsObj:D.contentsObj,richText:D.richText,hideWrapper:!0}).render();V.style.left="100%",N.append(V)}_renderQuadrilaterals(b){for(const D of this.quadrilaterals)D.classList.add(b);return this.quadrilaterals}render(){(0,s.unreachable)("Abstract method `AnnotationElement.render` called")}_getElementsByName(b,D=null){const N=[];if(this._fieldObjects){const j=this._fieldObjects[b];if(j)for(const{page:V,id:Z,exportValues:Q}of j){if(V===-1||Z===D)continue;const ie=typeof Q=="string"?Q:null,ce=document.querySelector(`[data-element-id="${Z}"]`);if(ce&&!p.has(ce)){(0,s.warn)(`_getElementsByName - element not allowed: ${Z}`);continue}N.push({id:Z,exportValue:ie,domElement:ce})}return N}for(const j of document.getElementsByName(b)){const{exportValue:V}=j,Z=j.getAttribute("data-element-id");Z!==D&&p.has(j)&&N.push({id:Z,exportValue:V,domElement:j})}return N}}class w extends A{constructor(b,D=null){super(b,{isRenderable:!0,ignoreBorder:!!D?.ignoreBorder,createQuadrilaterals:!0}),this.isTooltipOnly=b.data.isTooltipOnly}render(){const{data:b,linkService:D}=this,N=document.createElement("a");N.setAttribute("data-element-id",b.id);let j=!1;return b.url?(D.addLinkAttributes(N,b.url,b.newWindow),j=!0):b.action?(this._bindNamedAction(N,b.action),j=!0):b.attachment?(this._bindAttachment(N,b.attachment),j=!0):b.setOCGState?(this.#t(N,b.setOCGState),j=!0):b.dest?(this._bindLink(N,b.dest),j=!0):(b.actions&&(b.actions.Action||b.actions["Mouse Up"]||b.actions["Mouse Down"])&&this.enableScripting&&this.hasJSActions&&(this._bindJSAction(N,b),j=!0),b.resetForm?(this._bindResetFormAction(N,b.resetForm),j=!0):this.isTooltipOnly&&!j&&(this._bindLink(N,""),j=!0)),this.quadrilaterals?this._renderQuadrilaterals("linkAnnotation").map((V,Z)=>{const Q=Z===0?N:N.cloneNode();return V.append(Q),V}):(this.container.classList.add("linkAnnotation"),j&&this.container.append(N),this.container)}#e(){this.container.setAttribute("data-internal-link","")}_bindLink(b,D){b.href=this.linkService.getDestinationHash(D),b.onclick=()=>(D&&this.linkService.goToDestination(D),!1),(D||D==="")&&this.#e()}_bindNamedAction(b,D){b.href=this.linkService.getAnchorUrl(""),b.onclick=()=>(this.linkService.executeNamedAction(D),!1),this.#e()}_bindAttachment(b,D){b.href=this.linkService.getAnchorUrl(""),b.onclick=()=>(this.downloadManager?.openOrDownloadData(this.container,D.content,D.filename),!1),this.#e()}#t(b,D){b.href=this.linkService.getAnchorUrl(""),b.onclick=()=>(this.linkService.executeSetOCGState(D),!1),this.#e()}_bindJSAction(b,D){b.href=this.linkService.getAnchorUrl("");const N=new Map([["Action","onclick"],["Mouse Up","onmouseup"],["Mouse Down","onmousedown"]]);for(const j of Object.keys(D.actions)){const V=N.get(j);V&&(b[V]=()=>(this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id:D.id,name:j}}),!1))}b.onclick||(b.onclick=()=>!1),this.#e()}_bindResetFormAction(b,D){const N=b.onclick;if(N||(b.href=this.linkService.getAnchorUrl("")),this.#e(),!this._fieldObjects){(0,s.warn)('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'),N||(b.onclick=()=>!1);return}b.onclick=()=>{N?.();const{fields:j,refs:V,include:Z}=D,Q=[];if(j.length!==0||V.length!==0){const ne=new Set(V);for(const de of j){const fe=this._fieldObjects[de]||[];for(const{id:ue}of fe)ne.add(ue)}for(const de of Object.values(this._fieldObjects))for(const fe of de)ne.has(fe.id)===Z&&Q.push(fe)}else for(const ne of Object.values(this._fieldObjects))Q.push(...ne);const ie=this.annotationStorage,ce=[];for(const ne of Q){const{id:de}=ne;switch(ce.push(de),ne.type){case"text":{const ue=ne.defaultValue||"";ie.setValue(de,{value:ue});break}case"checkbox":case"radiobutton":{const ue=ne.defaultValue===ne.exportValues;ie.setValue(de,{value:ue});break}case"combobox":case"listbox":{const ue=ne.defaultValue||"";ie.setValue(de,{value:ue});break}default:continue}const fe=document.querySelector(`[data-element-id="${de}"]`);if(fe){if(!p.has(fe)){(0,s.warn)(`_bindResetFormAction - element not allowed: ${de}`);continue}}else continue;fe.dispatchEvent(new Event("resetform"))}return this.enableScripting&&this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id:"app",ids:ce,name:"ResetForm"}}),!1}}}class _ extends A{constructor(b){const D=!!(b.data.hasPopup||b.data.titleObj?.str||b.data.contentsObj?.str||b.data.richText?.str);super(b,{isRenderable:D})}render(){this.container.classList.add("textAnnotation");const b=document.createElement("img");return b.src=this.imageResourcesPath+"annotation-"+this.data.name.toLowerCase()+".svg",b.alt="[{{type}} Annotation]",b.dataset.l10nId="text_annotation_type",b.dataset.l10nArgs=JSON.stringify({type:this.data.name}),this.data.hasPopup||this._createPopup(b,this.data),this.container.append(b),this.container}}class E extends A{render(){return this.data.alternativeText&&(this.container.title=this.data.alternativeText),this.container}showElementAndHideCanvas(b){this.data.hasOwnCanvas&&(b.previousSibling?.nodeName==="CANVAS"&&(b.previousSibling.hidden=!0),b.hidden=!1)}_getKeyModifier(b){const{isWin:D,isMac:N}=s.FeatureTest.platform;return D&&b.ctrlKey||N&&b.metaKey}_setEventListener(b,D,N,j){D.includes("mouse")?b.addEventListener(D,V=>{this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id:this.data.id,name:N,value:j(V),shift:V.shiftKey,modifier:this._getKeyModifier(V)}})}):b.addEventListener(D,V=>{this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id:this.data.id,name:N,value:j(V)}})})}_setEventListeners(b,D,N){for(const[j,V]of D)(V==="Action"||this.data.actions?.[V])&&this._setEventListener(b,j,V,N)}_setBackgroundColor(b){const D=this.data.backgroundColor||null;b.style.backgroundColor=D===null?"transparent":s.Util.makeHexColor(D[0],D[1],D[2])}_setTextStyle(b){const D=["left","center","right"],{fontColor:N}=this.data.defaultAppearanceData,j=this.data.defaultAppearanceData.fontSize||g,V=b.style;let Z;const Q=2,ie=ce=>Math.round(10*ce)/10;if(this.data.multiLine){const ce=Math.abs(this.data.rect[3]-this.data.rect[1]-Q),ne=Math.round(ce/(s.LINE_FACTOR*j))||1,de=ce/ne;Z=Math.min(j,ie(de/s.LINE_FACTOR))}else{const ce=Math.abs(this.data.rect[3]-this.data.rect[1]-Q);Z=Math.min(j,ie(ce/s.LINE_FACTOR))}V.fontSize=`calc(${Z}px * var(--scale-factor))`,V.color=s.Util.makeHexColor(N[0],N[1],N[2]),this.data.textAlignment!==null&&(V.textAlign=D[this.data.textAlignment])}_setRequired(b,D){D?b.setAttribute("required",!0):b.removeAttribute("required"),b.setAttribute("aria-required",D)}}class v extends E{constructor(b){const D=b.renderForms||!b.data.hasAppearance&&!!b.data.fieldValue;super(b,{isRenderable:D})}setPropertyOnSiblings(b,D,N,j){const V=this.annotationStorage;for(const Z of this._getElementsByName(b.name,b.id))Z.domElement&&(Z.domElement[D]=N),V.setValue(Z.id,{[j]:N})}render(){const b=this.annotationStorage,D=this.data.id;this.container.classList.add("textWidgetAnnotation");let N=null;if(this.renderForms){const j=b.getValue(D,{value:this.data.fieldValue});let V=j.formattedValue||j.value||"";const Z=b.getValue(D,{charLimit:this.data.maxLen}).charLimit;Z&&V.length>Z&&(V=V.slice(0,Z));const Q={userValue:V,formattedValue:null,lastCommittedValue:null,commitKey:1};this.data.multiLine?(N=document.createElement("textarea"),N.textContent=V,this.data.doNotScroll&&(N.style.overflowY="hidden")):(N=document.createElement("input"),N.type="text",N.setAttribute("value",V),this.data.doNotScroll&&(N.style.overflowX="hidden")),this.data.hasOwnCanvas&&(N.hidden=!0),p.add(N),N.setAttribute("data-element-id",D),N.disabled=this.data.readOnly,N.name=this.data.fieldName,N.tabIndex=m,this._setRequired(N,this.data.required),Z&&(N.maxLength=Z),N.addEventListener("input",ce=>{b.setValue(D,{value:ce.target.value}),this.setPropertyOnSiblings(N,"value",ce.target.value,"value")}),N.addEventListener("resetform",ce=>{const ne=this.data.defaultFieldValue??"";N.value=Q.userValue=ne,Q.formattedValue=null});let ie=ce=>{const{formattedValue:ne}=Q;ne!=null&&(ce.target.value=ne),ce.target.scrollLeft=0};if(this.enableScripting&&this.hasJSActions){N.addEventListener("focus",ne=>{const{target:de}=ne;Q.userValue&&(de.value=Q.userValue),Q.lastCommittedValue=de.value,Q.commitKey=1}),N.addEventListener("updatefromsandbox",ne=>{this.showElementAndHideCanvas(ne.target);const de={value(fe){Q.userValue=fe.detail.value??"",b.setValue(D,{value:Q.userValue.toString()}),fe.target.value=Q.userValue},formattedValue(fe){const{formattedValue:ue}=fe.detail;Q.formattedValue=ue,ue!=null&&fe.target!==document.activeElement&&(fe.target.value=ue),b.setValue(D,{formattedValue:ue})},selRange(fe){fe.target.setSelectionRange(...fe.detail.selRange)},charLimit:fe=>{const{charLimit:ue}=fe.detail,{target:ge}=fe;if(ue===0){ge.removeAttribute("maxLength");return}ge.setAttribute("maxLength",ue);let Ae=Q.userValue;!Ae||Ae.length<=ue||(Ae=Ae.slice(0,ue),ge.value=Q.userValue=Ae,b.setValue(D,{value:Ae}),this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id:D,name:"Keystroke",value:Ae,willCommit:!0,commitKey:1,selStart:ge.selectionStart,selEnd:ge.selectionEnd}}))}};this._dispatchEventFromSandbox(de,ne)}),N.addEventListener("keydown",ne=>{Q.commitKey=1;let de=-1;if(ne.key==="Escape"?de=0:ne.key==="Enter"&&!this.data.multiLine?de=2:ne.key==="Tab"&&(Q.commitKey=3),de===-1)return;const{value:fe}=ne.target;Q.lastCommittedValue!==fe&&(Q.lastCommittedValue=fe,Q.userValue=fe,this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id:D,name:"Keystroke",value:fe,willCommit:!0,commitKey:de,selStart:ne.target.selectionStart,selEnd:ne.target.selectionEnd}}))});const ce=ie;ie=null,N.addEventListener("blur",ne=>{if(!ne.relatedTarget)return;const{value:de}=ne.target;Q.userValue=de,Q.lastCommittedValue!==de&&this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id:D,name:"Keystroke",value:de,willCommit:!0,commitKey:Q.commitKey,selStart:ne.target.selectionStart,selEnd:ne.target.selectionEnd}}),ce(ne)}),this.data.actions?.Keystroke&&N.addEventListener("beforeinput",ne=>{Q.lastCommittedValue=null;const{data:de,target:fe}=ne,{value:ue,selectionStart:ge,selectionEnd:Ae}=fe;let ye=ge,we=Ae;switch(ne.inputType){case"deleteWordBackward":{const xe=ue.substring(0,ge).match(/\w*[^\w]*$/);xe&&(ye-=xe[0].length);break}case"deleteWordForward":{const xe=ue.substring(ge).match(/^[^\w]*\w*/);xe&&(we+=xe[0].length);break}case"deleteContentBackward":ge===Ae&&(ye-=1);break;case"deleteContentForward":ge===Ae&&(we+=1);break}ne.preventDefault(),this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id:D,name:"Keystroke",value:ue,change:de||"",willCommit:!1,selStart:ye,selEnd:we}})}),this._setEventListeners(N,[["focus","Focus"],["blur","Blur"],["mousedown","Mouse Down"],["mouseenter","Mouse Enter"],["mouseleave","Mouse Exit"],["mouseup","Mouse Up"]],ne=>ne.target.value)}if(ie&&N.addEventListener("blur",ie),this.data.comb){const ne=(this.data.rect[2]-this.data.rect[0])/Z;N.classList.add("comb"),N.style.letterSpacing=`calc(${ne}px * var(--scale-factor) - 1ch)`}}else N=document.createElement("div"),N.textContent=this.data.fieldValue,N.style.verticalAlign="middle",N.style.display="table-cell";return this._setTextStyle(N),this._setBackgroundColor(N),this._setDefaultPropertiesFromJS(N),this.container.append(N),this.container}}class k extends E{constructor(b){super(b,{isRenderable:b.renderForms})}render(){const b=this.annotationStorage,D=this.data,N=D.id;let j=b.getValue(N,{value:D.exportValue===D.fieldValue}).value;typeof j=="string"&&(j=j!=="Off",b.setValue(N,{value:j})),this.container.classList.add("buttonWidgetAnnotation","checkBox");const V=document.createElement("input");return p.add(V),V.setAttribute("data-element-id",N),V.disabled=D.readOnly,this._setRequired(V,this.data.required),V.type="checkbox",V.name=D.fieldName,j&&V.setAttribute("checked",!0),V.setAttribute("exportValue",D.exportValue),V.tabIndex=m,V.addEventListener("change",Z=>{const{name:Q,checked:ie}=Z.target;for(const ce of this._getElementsByName(Q,N)){const ne=ie&&ce.exportValue===D.exportValue;ce.domElement&&(ce.domElement.checked=ne),b.setValue(ce.id,{value:ne})}b.setValue(N,{value:ie})}),V.addEventListener("resetform",Z=>{const Q=D.defaultFieldValue||"Off";Z.target.checked=Q===D.exportValue}),this.enableScripting&&this.hasJSActions&&(V.addEventListener("updatefromsandbox",Z=>{const Q={value(ie){ie.target.checked=ie.detail.value!=="Off",b.setValue(N,{value:ie.target.checked})}};this._dispatchEventFromSandbox(Q,Z)}),this._setEventListeners(V,[["change","Validate"],["change","Action"],["focus","Focus"],["blur","Blur"],["mousedown","Mouse Down"],["mouseenter","Mouse Enter"],["mouseleave","Mouse Exit"],["mouseup","Mouse Up"]],Z=>Z.target.checked)),this._setBackgroundColor(V),this._setDefaultPropertiesFromJS(V),this.container.append(V),this.container}}class R extends E{constructor(b){super(b,{isRenderable:b.renderForms})}render(){this.container.classList.add("buttonWidgetAnnotation","radioButton");const b=this.annotationStorage,D=this.data,N=D.id;let j=b.getValue(N,{value:D.fieldValue===D.buttonValue}).value;typeof j=="string"&&(j=j!==D.buttonValue,b.setValue(N,{value:j}));const V=document.createElement("input");if(p.add(V),V.setAttribute("data-element-id",N),V.disabled=D.readOnly,this._setRequired(V,this.data.required),V.type="radio",V.name=D.fieldName,j&&V.setAttribute("checked",!0),V.tabIndex=m,V.addEventListener("change",Z=>{const{name:Q,checked:ie}=Z.target;for(const ce of this._getElementsByName(Q,N))b.setValue(ce.id,{value:!1});b.setValue(N,{value:ie})}),V.addEventListener("resetform",Z=>{const Q=D.defaultFieldValue;Z.target.checked=Q!=null&&Q===D.buttonValue}),this.enableScripting&&this.hasJSActions){const Z=D.buttonValue;V.addEventListener("updatefromsandbox",Q=>{const ie={value:ce=>{const ne=Z===ce.detail.value;for(const de of this._getElementsByName(ce.target.name)){const fe=ne&&de.id===N;de.domElement&&(de.domElement.checked=fe),b.setValue(de.id,{value:fe})}}};this._dispatchEventFromSandbox(ie,Q)}),this._setEventListeners(V,[["change","Validate"],["change","Action"],["focus","Focus"],["blur","Blur"],["mousedown","Mouse Down"],["mouseenter","Mouse Enter"],["mouseleave","Mouse Exit"],["mouseup","Mouse Up"]],Q=>Q.target.checked)}return this._setBackgroundColor(V),this._setDefaultPropertiesFromJS(V),this.container.append(V),this.container}}class L extends w{constructor(b){super(b,{ignoreBorder:b.data.hasAppearance})}render(){const b=super.render();b.classList.add("buttonWidgetAnnotation","pushButton"),this.data.alternativeText&&(b.title=this.data.alternativeText);const D=b.lastChild;return this.enableScripting&&this.hasJSActions&&D&&(this._setDefaultPropertiesFromJS(D),D.addEventListener("updatefromsandbox",N=>{this._dispatchEventFromSandbox({},N)})),b}}class B extends E{constructor(b){super(b,{isRenderable:b.renderForms})}render(){this.container.classList.add("choiceWidgetAnnotation");const b=this.annotationStorage,D=this.data.id,N=b.getValue(D,{value:this.data.fieldValue}),j=document.createElement("select");p.add(j),j.setAttribute("data-element-id",D),j.disabled=this.data.readOnly,this._setRequired(j,this.data.required),j.name=this.data.fieldName,j.tabIndex=m;let V=this.data.combo&&this.data.options.length>0;this.data.combo||(j.size=this.data.options.length,this.data.multiSelect&&(j.multiple=!0)),j.addEventListener("resetform",ne=>{const de=this.data.defaultFieldValue;for(const fe of j.options)fe.selected=fe.value===de});for(const ne of this.data.options){const de=document.createElement("option");de.textContent=ne.displayValue,de.value=ne.exportValue,N.value.includes(ne.exportValue)&&(de.setAttribute("selected",!0),V=!1),j.append(de)}let Z=null;if(V){const ne=document.createElement("option");ne.value=" ",ne.setAttribute("hidden",!0),ne.setAttribute("selected",!0),j.prepend(ne),Z=()=>{ne.remove(),j.removeEventListener("input",Z),Z=null},j.addEventListener("input",Z)}const Q=ne=>{const de=ne?"value":"textContent",{options:fe,multiple:ue}=j;return ue?Array.prototype.filter.call(fe,ge=>ge.selected).map(ge=>ge[de]):fe.selectedIndex===-1?null:fe[fe.selectedIndex][de]};let ie=Q(!1);const ce=ne=>{const de=ne.target.options;return Array.prototype.map.call(de,fe=>({displayValue:fe.textContent,exportValue:fe.value}))};return this.enableScripting&&this.hasJSActions?(j.addEventListener("updatefromsandbox",ne=>{const de={value(fe){Z?.();const ue=fe.detail.value,ge=new Set(Array.isArray(ue)?ue:[ue]);for(const Ae of j.options)Ae.selected=ge.has(Ae.value);b.setValue(D,{value:Q(!0)}),ie=Q(!1)},multipleSelection(fe){j.multiple=!0},remove(fe){const ue=j.options,ge=fe.detail.remove;ue[ge].selected=!1,j.remove(ge),ue.length>0&&Array.prototype.findIndex.call(ue,ye=>ye.selected)===-1&&(ue[0].selected=!0),b.setValue(D,{value:Q(!0),items:ce(fe)}),ie=Q(!1)},clear(fe){for(;j.length!==0;)j.remove(0);b.setValue(D,{value:null,items:[]}),ie=Q(!1)},insert(fe){const{index:ue,displayValue:ge,exportValue:Ae}=fe.detail.insert,ye=j.children[ue],we=document.createElement("option");we.textContent=ge,we.value=Ae,ye?ye.before(we):j.append(we),b.setValue(D,{value:Q(!0),items:ce(fe)}),ie=Q(!1)},items(fe){const{items:ue}=fe.detail;for(;j.length!==0;)j.remove(0);for(const ge of ue){const{displayValue:Ae,exportValue:ye}=ge,we=document.createElement("option");we.textContent=Ae,we.value=ye,j.append(we)}j.options.length>0&&(j.options[0].selected=!0),b.setValue(D,{value:Q(!0),items:ce(fe)}),ie=Q(!1)},indices(fe){const ue=new Set(fe.detail.indices);for(const ge of fe.target.options)ge.selected=ue.has(ge.index);b.setValue(D,{value:Q(!0)}),ie=Q(!1)},editable(fe){fe.target.disabled=!fe.detail.editable}};this._dispatchEventFromSandbox(de,ne)}),j.addEventListener("input",ne=>{const de=Q(!0);b.setValue(D,{value:de}),ne.preventDefault(),this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id:D,name:"Keystroke",value:ie,changeEx:de,willCommit:!1,commitKey:1,keyDown:!1}})}),this._setEventListeners(j,[["focus","Focus"],["blur","Blur"],["mousedown","Mouse Down"],["mouseenter","Mouse Enter"],["mouseleave","Mouse Exit"],["mouseup","Mouse Up"],["input","Action"],["input","Validate"]],ne=>ne.target.value)):j.addEventListener("input",function(ne){b.setValue(D,{value:Q(!0)})}),this.data.combo&&this._setTextStyle(j),this._setBackgroundColor(j),this._setDefaultPropertiesFromJS(j),this.container.append(j),this.container}}class X extends A{static IGNORE_TYPES=new Set(["Line","Square","Circle","PolyLine","Polygon","Ink"]);constructor(b){const{data:D}=b,N=!X.IGNORE_TYPES.has(D.parentType)&&!!(D.titleObj?.str||D.contentsObj?.str||D.richText?.str);super(b,{isRenderable:N})}render(){this.container.classList.add("popupAnnotation");const b=this.layer.querySelectorAll(`[data-annotation-id="${this.data.parentId}"]`);if(b.length===0)return this.container;const D=new U({container:this.container,trigger:Array.from(b),color:this.data.color,titleObj:this.data.titleObj,modificationDate:this.data.modificationDate,contentsObj:this.data.contentsObj,richText:this.data.richText}),N=this.page,j=s.Util.normalizeRect([this.data.parentRect[0],N.view[3]-this.data.parentRect[1]+N.view[1],this.data.parentRect[2],N.view[3]-this.data.parentRect[3]+N.view[1]]),V=j[0]+this.data.parentRect[2]-this.data.parentRect[0],Z=j[1],{pageWidth:Q,pageHeight:ie,pageX:ce,pageY:ne}=this.viewport.rawDims;return this.container.style.left=`${100*(V-ce)/Q}%`,this.container.style.top=`${100*(Z-ne)/ie}%`,this.container.append(D.render()),this.container}}class U{constructor(b){this.container=b.container,this.trigger=b.trigger,this.color=b.color,this.titleObj=b.titleObj,this.modificationDate=b.modificationDate,this.contentsObj=b.contentsObj,this.richText=b.richText,this.hideWrapper=b.hideWrapper||!1,this.pinned=!1}render(){const D=document.createElement("div");D.classList.add("popupWrapper"),this.hideElement=this.hideWrapper?D:this.container,this.hideElement.hidden=!0;const N=document.createElement("div");N.classList.add("popup");const j=this.color;if(j){const Q=.7*(255-j[0])+j[0],ie=.7*(255-j[1])+j[1],ce=.7*(255-j[2])+j[2];N.style.backgroundColor=s.Util.makeHexColor(Q|0,ie|0,ce|0)}const V=document.createElement("h1");V.dir=this.titleObj.dir,V.textContent=this.titleObj.str,N.append(V);const Z=r.PDFDateString.toDateObject(this.modificationDate);if(Z){const Q=document.createElement("span");Q.classList.add("popupDate"),Q.textContent="{{date}}, {{time}}",Q.dataset.l10nId="annotation_date_string",Q.dataset.l10nArgs=JSON.stringify({date:Z.toLocaleDateString(),time:Z.toLocaleTimeString()}),N.append(Q)}if(this.richText?.str&&(!this.contentsObj?.str||this.contentsObj.str===this.richText.str))f.XfaLayer.render({xfaHtml:this.richText.html,intent:"richText",div:N}),N.lastChild.classList.add("richText","popupContent");else{const Q=this._formatContents(this.contentsObj);N.append(Q)}Array.isArray(this.trigger)||(this.trigger=[this.trigger]);for(const Q of this.trigger)Q.addEventListener("click",this._toggle.bind(this)),Q.addEventListener("mouseover",this._show.bind(this,!1)),Q.addEventListener("mouseout",this._hide.bind(this,!1));return N.addEventListener("click",this._hide.bind(this,!0)),D.append(N),D}_formatContents({str:b,dir:D}){const N=document.createElement("p");N.classList.add("popupContent"),N.dir=D;const j=b.split(/(?:\r\n?|\n)/);for(let V=0,Z=j.length;V<Z;++V){const Q=j[V];N.append(document.createTextNode(Q)),V<Z-1&&N.append(document.createElement("br"))}return N}_toggle(){this.pinned?this._hide(!0):this._show(!0)}_show(b=!1){b&&(this.pinned=!0),this.hideElement.hidden&&(this.hideElement.hidden=!1,this.container.style.zIndex=parseInt(this.container.style.zIndex)+1e3)}_hide(b=!0){b&&(this.pinned=!1),!this.hideElement.hidden&&!this.pinned&&(this.hideElement.hidden=!0,this.container.style.zIndex=parseInt(this.container.style.zIndex)-1e3)}}class M extends A{constructor(b){const D=!!(b.data.hasPopup||b.data.titleObj?.str||b.data.contentsObj?.str||b.data.richText?.str);super(b,{isRenderable:D,ignoreBorder:!0}),this.textContent=b.data.textContent}render(){if(this.container.classList.add("freeTextAnnotation"),this.textContent){const b=document.createElement("div");b.classList.add("annotationTextContent"),b.setAttribute("role","comment");for(const D of this.textContent){const N=document.createElement("span");N.textContent=D,b.append(N)}this.container.append(b)}return this.data.hasPopup||this._createPopup(null,this.data),this.container}}class F extends A{constructor(b){const D=!!(b.data.hasPopup||b.data.titleObj?.str||b.data.contentsObj?.str||b.data.richText?.str);super(b,{isRenderable:D,ignoreBorder:!0})}render(){this.container.classList.add("lineAnnotation");const b=this.data,{width:D,height:N}=y(b.rect),j=this.svgFactory.create(D,N,!0),V=this.svgFactory.createElement("svg:line");return V.setAttribute("x1",b.rect[2]-b.lineCoordinates[0]),V.setAttribute("y1",b.rect[3]-b.lineCoordinates[1]),V.setAttribute("x2",b.rect[2]-b.lineCoordinates[2]),V.setAttribute("y2",b.rect[3]-b.lineCoordinates[3]),V.setAttribute("stroke-width",b.borderStyle.width||1),V.setAttribute("stroke","transparent"),V.setAttribute("fill","transparent"),j.append(V),this.container.append(j),this._createPopup(V,b),this.container}}class $ extends A{constructor(b){const D=!!(b.data.hasPopup||b.data.titleObj?.str||b.data.contentsObj?.str||b.data.richText?.str);super(b,{isRenderable:D,ignoreBorder:!0})}render(){this.container.classList.add("squareAnnotation");const b=this.data,{width:D,height:N}=y(b.rect),j=this.svgFactory.create(D,N,!0),V=b.borderStyle.width,Z=this.svgFactory.createElement("svg:rect");return Z.setAttribute("x",V/2),Z.setAttribute("y",V/2),Z.setAttribute("width",D-V),Z.setAttribute("height",N-V),Z.setAttribute("stroke-width",V||1),Z.setAttribute("stroke","transparent"),Z.setAttribute("fill","transparent"),j.append(Z),this.container.append(j),this._createPopup(Z,b),this.container}}class ee extends A{constructor(b){const D=!!(b.data.hasPopup||b.data.titleObj?.str||b.data.contentsObj?.str||b.data.richText?.str);super(b,{isRenderable:D,ignoreBorder:!0})}render(){this.container.classList.add("circleAnnotation");const b=this.data,{width:D,height:N}=y(b.rect),j=this.svgFactory.create(D,N,!0),V=b.borderStyle.width,Z=this.svgFactory.createElement("svg:ellipse");return Z.setAttribute("cx",D/2),Z.setAttribute("cy",N/2),Z.setAttribute("rx",D/2-V/2),Z.setAttribute("ry",N/2-V/2),Z.setAttribute("stroke-width",V||1),Z.setAttribute("stroke","transparent"),Z.setAttribute("fill","transparent"),j.append(Z),this.container.append(j),this._createPopup(Z,b),this.container}}class te extends A{constructor(b){const D=!!(b.data.hasPopup||b.data.titleObj?.str||b.data.contentsObj?.str||b.data.richText?.str);super(b,{isRenderable:D,ignoreBorder:!0}),this.containerClassName="polylineAnnotation",this.svgElementName="svg:polyline"}render(){this.container.classList.add(this.containerClassName);const b=this.data,{width:D,height:N}=y(b.rect),j=this.svgFactory.create(D,N,!0);let V=[];for(const Q of b.vertices){const ie=Q.x-b.rect[0],ce=b.rect[3]-Q.y;V.push(ie+","+ce)}V=V.join(" ");const Z=this.svgFactory.createElement(this.svgElementName);return Z.setAttribute("points",V),Z.setAttribute("stroke-width",b.borderStyle.width||1),Z.setAttribute("stroke","transparent"),Z.setAttribute("fill","transparent"),j.append(Z),this.container.append(j),this._createPopup(Z,b),this.container}}class he extends te{constructor(b){super(b),this.containerClassName="polygonAnnotation",this.svgElementName="svg:polygon"}}class re extends A{constructor(b){const D=!!(b.data.hasPopup||b.data.titleObj?.str||b.data.contentsObj?.str||b.data.richText?.str);super(b,{isRenderable:D,ignoreBorder:!0})}render(){return this.container.classList.add("caretAnnotation"),this.data.hasPopup||this._createPopup(null,this.data),this.container}}class pe extends A{constructor(b){const D=!!(b.data.hasPopup||b.data.titleObj?.str||b.data.contentsObj?.str||b.data.richText?.str);super(b,{isRenderable:D,ignoreBorder:!0}),this.containerClassName="inkAnnotation",this.svgElementName="svg:polyline"}render(){this.container.classList.add(this.containerClassName);const b=this.data,{width:D,height:N}=y(b.rect),j=this.svgFactory.create(D,N,!0);for(const V of b.inkLists){let Z=[];for(const ie of V){const ce=ie.x-b.rect[0],ne=b.rect[3]-ie.y;Z.push(`${ce},${ne}`)}Z=Z.join(" ");const Q=this.svgFactory.createElement(this.svgElementName);Q.setAttribute("points",Z),Q.setAttribute("stroke-width",b.borderStyle.width||1),Q.setAttribute("stroke","transparent"),Q.setAttribute("fill","transparent"),this._createPopup(Q,b),j.append(Q)}return this.container.append(j),this.container}}class le extends A{constructor(b){const D=!!(b.data.hasPopup||b.data.titleObj?.str||b.data.contentsObj?.str||b.data.richText?.str);super(b,{isRenderable:D,ignoreBorder:!0,createQuadrilaterals:!0})}render(){return this.data.hasPopup||this._createPopup(null,this.data),this.quadrilaterals?this._renderQuadrilaterals("highlightAnnotation"):(this.container.classList.add("highlightAnnotation"),this.container)}}class J extends A{constructor(b){const D=!!(b.data.hasPopup||b.data.titleObj?.str||b.data.contentsObj?.str||b.data.richText?.str);super(b,{isRenderable:D,ignoreBorder:!0,createQuadrilaterals:!0})}render(){return this.data.hasPopup||this._createPopup(null,this.data),this.quadrilaterals?this._renderQuadrilaterals("underlineAnnotation"):(this.container.classList.add("underlineAnnotation"),this.container)}}class se extends A{constructor(b){const D=!!(b.data.hasPopup||b.data.titleObj?.str||b.data.contentsObj?.str||b.data.richText?.str);super(b,{isRenderable:D,ignoreBorder:!0,createQuadrilaterals:!0})}render(){return this.data.hasPopup||this._createPopup(null,this.data),this.quadrilaterals?this._renderQuadrilaterals("squigglyAnnotation"):(this.container.classList.add("squigglyAnnotation"),this.container)}}class Y extends A{constructor(b){const D=!!(b.data.hasPopup||b.data.titleObj?.str||b.data.contentsObj?.str||b.data.richText?.str);super(b,{isRenderable:D,ignoreBorder:!0,createQuadrilaterals:!0})}render(){return this.data.hasPopup||this._createPopup(null,this.data),this.quadrilaterals?this._renderQuadrilaterals("strikeoutAnnotation"):(this.container.classList.add("strikeoutAnnotation"),this.container)}}class I extends A{constructor(b){const D=!!(b.data.hasPopup||b.data.titleObj?.str||b.data.contentsObj?.str||b.data.richText?.str);super(b,{isRenderable:D,ignoreBorder:!0})}render(){return this.container.classList.add("stampAnnotation"),this.data.hasPopup||this._createPopup(null,this.data),this.container}}class P extends A{constructor(b){super(b,{isRenderable:!0});const{filename:D,content:N}=this.data.file;this.filename=(0,r.getFilenameFromUrl)(D,!0),this.content=N,this.linkService.eventBus?.dispatch("fileattachmentannotation",{source:this,filename:D,content:N})}render(){this.container.classList.add("fileAttachmentAnnotation");let b;return this.data.hasAppearance?b=document.createElement("div"):(b=document.createElement("img"),b.src=`${this.imageResourcesPath}annotation-${/paperclip/i.test(this.data.name)?"paperclip":"pushpin"}.svg`),b.classList.add("popupTriggerArea"),b.addEventListener("dblclick",this._download.bind(this)),!this.data.hasPopup&&(this.data.titleObj?.str||this.data.contentsObj?.str||this.data.richText)&&this._createPopup(b,this.data),this.container.append(b),this.container}_download(){this.downloadManager?.openOrDownloadData(this.container,this.content,this.filename)}}class O{static#e(b,D,N,j){const V=b.firstChild||b;V.id=`${r.AnnotationPrefix}${D}`,N.append(b),j?.moveElementInDOM(N,b,V,!1)}static render(b){const{annotations:D,div:N,viewport:j,accessibilityManager:V}=b;(0,r.setLayerDimensions)(N,j);const Z={data:null,layer:N,page:b.page,viewport:j,linkService:b.linkService,downloadManager:b.downloadManager,imageResourcesPath:b.imageResourcesPath||"",renderForms:b.renderForms!==!1,svgFactory:new r.DOMSVGFactory,annotationStorage:b.annotationStorage||new o.AnnotationStorage,enableScripting:b.enableScripting===!0,hasJSActions:b.hasJSActions,fieldObjects:b.fieldObjects};let Q=0;for(const ie of D){if(ie.noHTML)continue;if(ie.annotationType!==s.AnnotationType.POPUP){const{width:de,height:fe}=y(ie.rect);if(de<=0||fe<=0)continue}Z.data=ie;const ce=C.create(Z);if(!ce.isRenderable)continue;const ne=ce.render();if(ie.hidden&&(ne.style.visibility="hidden"),Array.isArray(ne))for(const de of ne)de.style.zIndex=Q++,O.#e(de,ie.id,N,V);else ne.style.zIndex=Q++,ce instanceof X?N.prepend(ne):O.#e(ne,ie.id,N,V)}this.#t(N,b.annotationCanvasMap)}static update(b){const{annotationCanvasMap:D,div:N,viewport:j}=b;(0,r.setLayerDimensions)(N,{rotation:j.rotation}),this.#t(N,D),N.hidden=!1}static#t(b,D){if(D){for(const[N,j]of D){const V=b.querySelector(`[data-annotation-id="${N}"]`);if(!V)continue;const{firstChild:Z}=V;Z?Z.nodeName==="CANVAS"?Z.replaceWith(j):Z.before(j):V.append(j)}D.clear()}}}e.AnnotationLayer=O},(c,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ColorConverters=void 0;function t(r){return Math.floor(Math.max(0,Math.min(1,r))*255).toString(16).padStart(2,"0")}class s{static CMYK_G([o,a,f,m]){return["G",1-Math.min(1,.3*o+.59*f+.11*a+m)]}static G_CMYK([o]){return["CMYK",0,0,0,1-o]}static G_RGB([o]){return["RGB",o,o,o]}static G_HTML([o]){const a=t(o);return`#${a}${a}${a}`}static RGB_G([o,a,f]){return["G",.3*o+.59*a+.11*f]}static RGB_HTML([o,a,f]){const m=t(o),g=t(a),p=t(f);return`#${m}${g}${p}`}static T_HTML(){return"#00000000"}static CMYK_RGB([o,a,f,m]){return["RGB",1-Math.min(1,o+m),1-Math.min(1,f+m),1-Math.min(1,a+m)]}static CMYK_HTML(o){const a=this.CMYK_RGB(o).slice(1);return this.RGB_HTML(a)}static RGB_CMYK([o,a,f]){const m=1-o,g=1-a,p=1-f,y=Math.min(m,g,p);return["CMYK",m,g,p,y]}}e.ColorConverters=s},(c,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.XfaLayer=void 0;var s=t(19);class r{static setupStorage(a,f,m,g,p){const y=g.getValue(f,{value:null});switch(m.name){case"textarea":if(y.value!==null&&(a.textContent=y.value),p==="print")break;a.addEventListener("input",C=>{g.setValue(f,{value:C.target.value})});break;case"input":if(m.attributes.type==="radio"||m.attributes.type==="checkbox"){if(y.value===m.attributes.xfaOn?a.setAttribute("checked",!0):y.value===m.attributes.xfaOff&&a.removeAttribute("checked"),p==="print")break;a.addEventListener("change",C=>{g.setValue(f,{value:C.target.checked?C.target.getAttribute("xfaOn"):C.target.getAttribute("xfaOff")})})}else{if(y.value!==null&&a.setAttribute("value",y.value),p==="print")break;a.addEventListener("input",C=>{g.setValue(f,{value:C.target.value})})}break;case"select":if(y.value!==null)for(const C of m.children)C.attributes.value===y.value&&(C.attributes.selected=!0);a.addEventListener("input",C=>{const A=C.target.options,w=A.selectedIndex===-1?"":A[A.selectedIndex].value;g.setValue(f,{value:w})});break}}static setAttributes({html:a,element:f,storage:m=null,intent:g,linkService:p}){const{attributes:y}=f,C=a instanceof HTMLAnchorElement;y.type==="radio"&&(y.name=`${y.name}-${g}`);for(const[A,w]of Object.entries(y))if(w!=null)switch(A){case"class":w.length&&a.setAttribute(A,w.join(" "));break;case"dataId":break;case"id":a.setAttribute("data-element-id",w);break;case"style":Object.assign(a.style,w);break;case"textContent":a.textContent=w;break;default:(!C||A!=="href"&&A!=="newWindow")&&a.setAttribute(A,w)}C&&p.addLinkAttributes(a,y.href,y.newWindow),m&&y.dataId&&this.setupStorage(a,y.dataId,f,m)}static render(a){const f=a.annotationStorage,m=a.linkService,g=a.xfaHtml,p=a.intent||"display",y=document.createElement(g.name);g.attributes&&this.setAttributes({html:y,element:g,intent:p,linkService:m});const C=[[g,-1,y]],A=a.div;if(A.append(y),a.viewport){const _=`matrix(${a.viewport.transform.join(",")})`;A.style.transform=_}p!=="richText"&&A.setAttribute("class","xfaLayer xfaFont");const w=[];for(;C.length>0;){const[_,E,v]=C.at(-1);if(E+1===_.children.length){C.pop();continue}const k=_.children[++C.at(-1)[1]];if(k===null)continue;const{name:R}=k;if(R==="#text"){const B=document.createTextNode(k.value);w.push(B),v.append(B);continue}let L;if(k?.attributes?.xmlns?L=document.createElementNS(k.attributes.xmlns,R):L=document.createElement(R),v.append(L),k.attributes&&this.setAttributes({html:L,element:k,storage:f,intent:p,linkService:m}),k.children&&k.children.length>0)C.push([k,-1,L]);else if(k.value){const B=document.createTextNode(k.value);s.XfaText.shouldBuildText(R)&&w.push(B),L.append(B)}}for(const _ of A.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))_.setAttribute("readOnly",!0);return{textDivs:w}}static update(a){const f=`matrix(${a.viewport.transform.join(",")})`;a.div.style.transform=f,a.div.hidden=!1}}e.XfaLayer=r},(c,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.SVGGraphics=void 0;var s=t(6),r=t(1),o=t(10);let a=class{constructor(){(0,r.unreachable)("Not implemented: SVGGraphics")}};e.SVGGraphics=a;{let k=function(M){let F=[];const $=[];for(const ee of M){if(ee.fn==="save"){F.push({fnId:92,fn:"group",items:[]}),$.push(F),F=F.at(-1).items;continue}ee.fn==="restore"?F=$.pop():F.push(ee)}return F},R=function(M){if(Number.isInteger(M))return M.toString();const F=M.toFixed(10);let $=F.length-1;if(F[$]!=="0")return F;do $--;while(F[$]==="0");return F.substring(0,F[$]==="."?$:$+1)},L=function(M){if(M[4]===0&&M[5]===0){if(M[1]===0&&M[2]===0)return M[0]===1&&M[3]===1?"":`scale(${R(M[0])} ${R(M[3])})`;if(M[0]===M[3]&&M[1]===-M[2]){const F=Math.acos(M[0])*180/Math.PI;return`rotate(${R(F)})`}}else if(M[0]===1&&M[1]===0&&M[2]===0&&M[3]===1)return`translate(${R(M[4])} ${R(M[5])})`;return`matrix(${R(M[0])} ${R(M[1])} ${R(M[2])} ${R(M[3])} ${R(M[4])} ${R(M[5])})`};var f=k,m=R,g=L;const p={fontStyle:"normal",fontWeight:"normal",fillColor:"#000000"},y="http://www.w3.org/XML/1998/namespace",C="http://www.w3.org/1999/xlink",A=["butt","round","square"],w=["miter","round","bevel"],_=function(M,F="",$=!1){if(URL.createObjectURL&&typeof Blob<"u"&&!$)return URL.createObjectURL(new Blob([M],{type:F}));const ee="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";let te=`data:${F};base64,`;for(let he=0,re=M.length;he<re;he+=3){const pe=M[he]&255,le=M[he+1]&255,J=M[he+2]&255,se=pe>>2,Y=(pe&3)<<4|le>>4,I=he+1<re?(le&15)<<2|J>>6:64,P=he+2<re?J&63:64;te+=ee[se]+ee[Y]+ee[I]+ee[P]}return te},E=function(){const M=new Uint8Array([137,80,78,71,13,10,26,10]),F=12,$=new Int32Array(256);for(let J=0;J<256;J++){let se=J;for(let Y=0;Y<8;Y++)se&1?se=3988292384^se>>1&2147483647:se=se>>1&2147483647;$[J]=se}function ee(J,se,Y){let I=-1;for(let P=se;P<Y;P++){const O=(I^J[P])&255,q=$[O];I=I>>>8^q}return I^-1}function te(J,se,Y,I){let P=I;const O=se.length;Y[P]=O>>24&255,Y[P+1]=O>>16&255,Y[P+2]=O>>8&255,Y[P+3]=O&255,P+=4,Y[P]=J.charCodeAt(0)&255,Y[P+1]=J.charCodeAt(1)&255,Y[P+2]=J.charCodeAt(2)&255,Y[P+3]=J.charCodeAt(3)&255,P+=4,Y.set(se,P),P+=se.length;const q=ee(Y,I+4,P);Y[P]=q>>24&255,Y[P+1]=q>>16&255,Y[P+2]=q>>8&255,Y[P+3]=q&255}function he(J,se,Y){let I=1,P=0;for(let O=se;O<Y;++O)I=(I+(J[O]&255))%65521,P=(P+I)%65521;return P<<16|I}function re(J){if(!o.isNodeJS)return pe(J);try{let se;parseInt(process.versions.node)>=8?se=J:se=Buffer.from(J);const Y=require$$5.deflateSync(se,{level:9});return Y instanceof Uint8Array?Y:new Uint8Array(Y)}catch(se){(0,r.warn)("Not compressing PNG because zlib.deflateSync is unavailable: "+se)}return pe(J)}function pe(J){let se=J.length;const Y=65535,I=Math.ceil(se/Y),P=new Uint8Array(2+se+I*5+4);let O=0;P[O++]=120,P[O++]=156;let q=0;for(;se>Y;)P[O++]=0,P[O++]=255,P[O++]=255,P[O++]=0,P[O++]=0,P.set(J.subarray(q,q+Y),O),O+=Y,q+=Y,se-=Y;P[O++]=1,P[O++]=se&255,P[O++]=se>>8&255,P[O++]=~se&65535&255,P[O++]=(~se&65535)>>8&255,P.set(J.subarray(q),O),O+=J.length-q;const b=he(J,0,J.length);return P[O++]=b>>24&255,P[O++]=b>>16&255,P[O++]=b>>8&255,P[O++]=b&255,P}function le(J,se,Y,I){const P=J.width,O=J.height;let q,b,D;const N=J.data;switch(se){case r.ImageKind.GRAYSCALE_1BPP:b=0,q=1,D=P+7>>3;break;case r.ImageKind.RGB_24BPP:b=2,q=8,D=P*3;break;case r.ImageKind.RGBA_32BPP:b=6,q=8,D=P*4;break;default:throw new Error("invalid format")}const j=new Uint8Array((1+D)*O);let V=0,Z=0;for(let fe=0;fe<O;++fe)j[V++]=0,j.set(N.subarray(Z,Z+D),V),Z+=D,V+=D;if(se===r.ImageKind.GRAYSCALE_1BPP&&I){V=0;for(let fe=0;fe<O;fe++){V++;for(let ue=0;ue<D;ue++)j[V++]^=255}}const Q=new Uint8Array([P>>24&255,P>>16&255,P>>8&255,P&255,O>>24&255,O>>16&255,O>>8&255,O&255,q,b,0,0,0]),ie=re(j),ce=M.length+F*3+Q.length+ie.length,ne=new Uint8Array(ce);let de=0;return ne.set(M,de),de+=M.length,te("IHDR",Q,ne,de),de+=F+Q.length,te("IDATA",ie,ne,de),de+=F+ie.length,te("IEND",new Uint8Array(0),ne,de),_(ne,"image/png",Y)}return function(se,Y,I){const P=se.kind===void 0?r.ImageKind.GRAYSCALE_1BPP:se.kind;return le(se,P,Y,I)}}();class v{constructor(){this.fontSizeScale=1,this.fontWeight=p.fontWeight,this.fontSize=0,this.textMatrix=r.IDENTITY_MATRIX,this.fontMatrix=r.FONT_IDENTITY_MATRIX,this.leading=0,this.textRenderingMode=r.TextRenderingMode.FILL,this.textMatrixScale=1,this.x=0,this.y=0,this.lineX=0,this.lineY=0,this.charSpacing=0,this.wordSpacing=0,this.textHScale=1,this.textRise=0,this.fillColor=p.fillColor,this.strokeColor="#000000",this.fillAlpha=1,this.strokeAlpha=1,this.lineWidth=1,this.lineJoin="",this.lineCap="",this.miterLimit=0,this.dashArray=[],this.dashPhase=0,this.dependencies=[],this.activeClipUrl=null,this.clipGroup=null,this.maskId=""}clone(){return Object.create(this)}setCurrentPoint(F,$){this.x=F,this.y=$}}let B=0,X=0,U=0;e.SVGGraphics=a=class{constructor(M,F,$=!1){(0,s.deprecated)("The SVG back-end is no longer maintained and *may* be removed in the future."),this.svgFactory=new s.DOMSVGFactory,this.current=new v,this.transformMatrix=r.IDENTITY_MATRIX,this.transformStack=[],this.extraStack=[],this.commonObjs=M,this.objs=F,this.pendingClip=null,this.pendingEOFill=!1,this.embedFonts=!1,this.embeddedFonts=Object.create(null),this.cssStyle=null,this.forceDataSchema=!!$,this._operatorIdMapping=[];for(const ee in r.OPS)this._operatorIdMapping[r.OPS[ee]]=ee}getObject(M,F=null){return typeof M=="string"?M.startsWith("g_")?this.commonObjs.get(M):this.objs.get(M):F}save(){this.transformStack.push(this.transformMatrix);const M=this.current;this.extraStack.push(M),this.current=M.clone()}restore(){this.transformMatrix=this.transformStack.pop(),this.current=this.extraStack.pop(),this.pendingClip=null,this.tgrp=null}group(M){this.save(),this.executeOpTree(M),this.restore()}loadDependencies(M){const F=M.fnArray,$=M.argsArray;for(let ee=0,te=F.length;ee<te;ee++)if(F[ee]===r.OPS.dependency)for(const he of $[ee]){const re=he.startsWith("g_")?this.commonObjs:this.objs,pe=new Promise(le=>{re.get(he,le)});this.current.dependencies.push(pe)}return Promise.all(this.current.dependencies)}transform(M,F,$,ee,te,he){const re=[M,F,$,ee,te,he];this.transformMatrix=r.Util.transform(this.transformMatrix,re),this.tgrp=null}getSVG(M,F){this.viewport=F;const $=this._initialize(F);return this.loadDependencies(M).then(()=>(this.transformMatrix=r.IDENTITY_MATRIX,this.executeOpTree(this.convertOpList(M)),$))}convertOpList(M){const F=this._operatorIdMapping,$=M.argsArray,ee=M.fnArray,te=[];for(let he=0,re=ee.length;he<re;he++){const pe=ee[he];te.push({fnId:pe,fn:F[pe],args:$[he]})}return k(te)}executeOpTree(M){for(const F of M){const $=F.fn,ee=F.fnId,te=F.args;switch(ee|0){case r.OPS.beginText:this.beginText();break;case r.OPS.dependency:break;case r.OPS.setLeading:this.setLeading(te);break;case r.OPS.setLeadingMoveText:this.setLeadingMoveText(te[0],te[1]);break;case r.OPS.setFont:this.setFont(te);break;case r.OPS.showText:this.showText(te[0]);break;case r.OPS.showSpacedText:this.showText(te[0]);break;case r.OPS.endText:this.endText();break;case r.OPS.moveText:this.moveText(te[0],te[1]);break;case r.OPS.setCharSpacing:this.setCharSpacing(te[0]);break;case r.OPS.setWordSpacing:this.setWordSpacing(te[0]);break;case r.OPS.setHScale:this.setHScale(te[0]);break;case r.OPS.setTextMatrix:this.setTextMatrix(te[0],te[1],te[2],te[3],te[4],te[5]);break;case r.OPS.setTextRise:this.setTextRise(te[0]);break;case r.OPS.setTextRenderingMode:this.setTextRenderingMode(te[0]);break;case r.OPS.setLineWidth:this.setLineWidth(te[0]);break;case r.OPS.setLineJoin:this.setLineJoin(te[0]);break;case r.OPS.setLineCap:this.setLineCap(te[0]);break;case r.OPS.setMiterLimit:this.setMiterLimit(te[0]);break;case r.OPS.setFillRGBColor:this.setFillRGBColor(te[0],te[1],te[2]);break;case r.OPS.setStrokeRGBColor:this.setStrokeRGBColor(te[0],te[1],te[2]);break;case r.OPS.setStrokeColorN:this.setStrokeColorN(te);break;case r.OPS.setFillColorN:this.setFillColorN(te);break;case r.OPS.shadingFill:this.shadingFill(te[0]);break;case r.OPS.setDash:this.setDash(te[0],te[1]);break;case r.OPS.setRenderingIntent:this.setRenderingIntent(te[0]);break;case r.OPS.setFlatness:this.setFlatness(te[0]);break;case r.OPS.setGState:this.setGState(te[0]);break;case r.OPS.fill:this.fill();break;case r.OPS.eoFill:this.eoFill();break;case r.OPS.stroke:this.stroke();break;case r.OPS.fillStroke:this.fillStroke();break;case r.OPS.eoFillStroke:this.eoFillStroke();break;case r.OPS.clip:this.clip("nonzero");break;case r.OPS.eoClip:this.clip("evenodd");break;case r.OPS.paintSolidColorImageMask:this.paintSolidColorImageMask();break;case r.OPS.paintImageXObject:this.paintImageXObject(te[0]);break;case r.OPS.paintInlineImageXObject:this.paintInlineImageXObject(te[0]);break;case r.OPS.paintImageMaskXObject:this.paintImageMaskXObject(te[0]);break;case r.OPS.paintFormXObjectBegin:this.paintFormXObjectBegin(te[0],te[1]);break;case r.OPS.paintFormXObjectEnd:this.paintFormXObjectEnd();break;case r.OPS.closePath:this.closePath();break;case r.OPS.closeStroke:this.closeStroke();break;case r.OPS.closeFillStroke:this.closeFillStroke();break;case r.OPS.closeEOFillStroke:this.closeEOFillStroke();break;case r.OPS.nextLine:this.nextLine();break;case r.OPS.transform:this.transform(te[0],te[1],te[2],te[3],te[4],te[5]);break;case r.OPS.constructPath:this.constructPath(te[0],te[1]);break;case r.OPS.endPath:this.endPath();break;case 92:this.group(F.items);break;default:(0,r.warn)(`Unimplemented operator ${$}`);break}}}setWordSpacing(M){this.current.wordSpacing=M}setCharSpacing(M){this.current.charSpacing=M}nextLine(){this.moveText(0,this.current.leading)}setTextMatrix(M,F,$,ee,te,he){const re=this.current;re.textMatrix=re.lineMatrix=[M,F,$,ee,te,he],re.textMatrixScale=Math.hypot(M,F),re.x=re.lineX=0,re.y=re.lineY=0,re.xcoords=[],re.ycoords=[],re.tspan=this.svgFactory.createElement("svg:tspan"),re.tspan.setAttributeNS(null,"font-family",re.fontFamily),re.tspan.setAttributeNS(null,"font-size",`${R(re.fontSize)}px`),re.tspan.setAttributeNS(null,"y",R(-re.y)),re.txtElement=this.svgFactory.createElement("svg:text"),re.txtElement.append(re.tspan)}beginText(){const M=this.current;M.x=M.lineX=0,M.y=M.lineY=0,M.textMatrix=r.IDENTITY_MATRIX,M.lineMatrix=r.IDENTITY_MATRIX,M.textMatrixScale=1,M.tspan=this.svgFactory.createElement("svg:tspan"),M.txtElement=this.svgFactory.createElement("svg:text"),M.txtgrp=this.svgFactory.createElement("svg:g"),M.xcoords=[],M.ycoords=[]}moveText(M,F){const $=this.current;$.x=$.lineX+=M,$.y=$.lineY+=F,$.xcoords=[],$.ycoords=[],$.tspan=this.svgFactory.createElement("svg:tspan"),$.tspan.setAttributeNS(null,"font-family",$.fontFamily),$.tspan.setAttributeNS(null,"font-size",`${R($.fontSize)}px`),$.tspan.setAttributeNS(null,"y",R(-$.y))}showText(M){const F=this.current,$=F.font,ee=F.fontSize;if(ee===0)return;const te=F.fontSizeScale,he=F.charSpacing,re=F.wordSpacing,pe=F.fontDirection,le=F.textHScale*pe,J=$.vertical,se=J?1:-1,Y=$.defaultVMetrics,I=ee*F.fontMatrix[0];let P=0;for(const b of M){if(b===null){P+=pe*re;continue}else if(typeof b=="number"){P+=se*b*ee/1e3;continue}const D=(b.isSpace?re:0)+he,N=b.fontChar;let j,V,Z=b.width;if(J){let ie;const ce=b.vmetric||Y;ie=b.vmetric?ce[1]:Z*.5,ie=-ie*I;const ne=ce[2]*I;Z=ce?-ce[0]:Z,j=ie/te,V=(P+ne)/te}else j=P/te,V=0;(b.isInFont||$.missingFile)&&(F.xcoords.push(F.x+j),J&&F.ycoords.push(-F.y+V),F.tspan.textContent+=N);let Q;J?Q=Z*I-D*pe:Q=Z*I+D*pe,P+=Q}F.tspan.setAttributeNS(null,"x",F.xcoords.map(R).join(" ")),J?F.tspan.setAttributeNS(null,"y",F.ycoords.map(R).join(" ")):F.tspan.setAttributeNS(null,"y",R(-F.y)),J?F.y-=P:F.x+=P*le,F.tspan.setAttributeNS(null,"font-family",F.fontFamily),F.tspan.setAttributeNS(null,"font-size",`${R(F.fontSize)}px`),F.fontStyle!==p.fontStyle&&F.tspan.setAttributeNS(null,"font-style",F.fontStyle),F.fontWeight!==p.fontWeight&&F.tspan.setAttributeNS(null,"font-weight",F.fontWeight);const O=F.textRenderingMode&r.TextRenderingMode.FILL_STROKE_MASK;if(O===r.TextRenderingMode.FILL||O===r.TextRenderingMode.FILL_STROKE?(F.fillColor!==p.fillColor&&F.tspan.setAttributeNS(null,"fill",F.fillColor),F.fillAlpha<1&&F.tspan.setAttributeNS(null,"fill-opacity",F.fillAlpha)):F.textRenderingMode===r.TextRenderingMode.ADD_TO_PATH?F.tspan.setAttributeNS(null,"fill","transparent"):F.tspan.setAttributeNS(null,"fill","none"),O===r.TextRenderingMode.STROKE||O===r.TextRenderingMode.FILL_STROKE){const b=1/(F.textMatrixScale||1);this._setStrokeAttributes(F.tspan,b)}let q=F.textMatrix;F.textRise!==0&&(q=q.slice(),q[5]+=F.textRise),F.txtElement.setAttributeNS(null,"transform",`${L(q)} scale(${R(le)}, -1)`),F.txtElement.setAttributeNS(y,"xml:space","preserve"),F.txtElement.append(F.tspan),F.txtgrp.append(F.txtElement),this._ensureTransformGroup().append(F.txtElement)}setLeadingMoveText(M,F){this.setLeading(-F),this.moveText(M,F)}addFontStyle(M){if(!M.data)throw new Error('addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.');this.cssStyle||(this.cssStyle=this.svgFactory.createElement("svg:style"),this.cssStyle.setAttributeNS(null,"type","text/css"),this.defs.append(this.cssStyle));const F=_(M.data,M.mimetype,this.forceDataSchema);this.cssStyle.textContent+=`@font-face { font-family: "${M.loadedName}"; src: url(${F}); }
`}setFont(M){const F=this.current,$=this.commonObjs.get(M[0]);let ee=M[1];F.font=$,this.embedFonts&&!$.missingFile&&!this.embeddedFonts[$.loadedName]&&(this.addFontStyle($),this.embeddedFonts[$.loadedName]=$),F.fontMatrix=$.fontMatrix||r.FONT_IDENTITY_MATRIX;let te="normal";$.black?te="900":$.bold&&(te="bold");const he=$.italic?"italic":"normal";ee<0?(ee=-ee,F.fontDirection=-1):F.fontDirection=1,F.fontSize=ee,F.fontFamily=$.loadedName,F.fontWeight=te,F.fontStyle=he,F.tspan=this.svgFactory.createElement("svg:tspan"),F.tspan.setAttributeNS(null,"y",R(-F.y)),F.xcoords=[],F.ycoords=[]}endText(){const M=this.current;M.textRenderingMode&r.TextRenderingMode.ADD_TO_PATH_FLAG&&M.txtElement?.hasChildNodes()&&(M.element=M.txtElement,this.clip("nonzero"),this.endPath())}setLineWidth(M){M>0&&(this.current.lineWidth=M)}setLineCap(M){this.current.lineCap=A[M]}setLineJoin(M){this.current.lineJoin=w[M]}setMiterLimit(M){this.current.miterLimit=M}setStrokeAlpha(M){this.current.strokeAlpha=M}setStrokeRGBColor(M,F,$){this.current.strokeColor=r.Util.makeHexColor(M,F,$)}setFillAlpha(M){this.current.fillAlpha=M}setFillRGBColor(M,F,$){this.current.fillColor=r.Util.makeHexColor(M,F,$),this.current.tspan=this.svgFactory.createElement("svg:tspan"),this.current.xcoords=[],this.current.ycoords=[]}setStrokeColorN(M){this.current.strokeColor=this._makeColorN_Pattern(M)}setFillColorN(M){this.current.fillColor=this._makeColorN_Pattern(M)}shadingFill(M){const F=this.viewport.width,$=this.viewport.height,ee=r.Util.inverseTransform(this.transformMatrix),te=r.Util.applyTransform([0,0],ee),he=r.Util.applyTransform([0,$],ee),re=r.Util.applyTransform([F,0],ee),pe=r.Util.applyTransform([F,$],ee),le=Math.min(te[0],he[0],re[0],pe[0]),J=Math.min(te[1],he[1],re[1],pe[1]),se=Math.max(te[0],he[0],re[0],pe[0]),Y=Math.max(te[1],he[1],re[1],pe[1]),I=this.svgFactory.createElement("svg:rect");I.setAttributeNS(null,"x",le),I.setAttributeNS(null,"y",J),I.setAttributeNS(null,"width",se-le),I.setAttributeNS(null,"height",Y-J),I.setAttributeNS(null,"fill",this._makeShadingPattern(M)),this.current.fillAlpha<1&&I.setAttributeNS(null,"fill-opacity",this.current.fillAlpha),this._ensureTransformGroup().append(I)}_makeColorN_Pattern(M){return M[0]==="TilingPattern"?this._makeTilingPattern(M):this._makeShadingPattern(M)}_makeTilingPattern(M){const F=M[1],$=M[2],ee=M[3]||r.IDENTITY_MATRIX,[te,he,re,pe]=M[4],le=M[5],J=M[6],se=M[7],Y=`shading${U++}`,[I,P,O,q]=r.Util.normalizeRect([...r.Util.applyTransform([te,he],ee),...r.Util.applyTransform([re,pe],ee)]),[b,D]=r.Util.singularValueDecompose2dScale(ee),N=le*b,j=J*D,V=this.svgFactory.createElement("svg:pattern");V.setAttributeNS(null,"id",Y),V.setAttributeNS(null,"patternUnits","userSpaceOnUse"),V.setAttributeNS(null,"width",N),V.setAttributeNS(null,"height",j),V.setAttributeNS(null,"x",`${I}`),V.setAttributeNS(null,"y",`${P}`);const Z=this.svg,Q=this.transformMatrix,ie=this.current.fillColor,ce=this.current.strokeColor,ne=this.svgFactory.create(O-I,q-P);if(this.svg=ne,this.transformMatrix=ee,se===2){const de=r.Util.makeHexColor(...F);this.current.fillColor=de,this.current.strokeColor=de}return this.executeOpTree(this.convertOpList($)),this.svg=Z,this.transformMatrix=Q,this.current.fillColor=ie,this.current.strokeColor=ce,V.append(ne.childNodes[0]),this.defs.append(V),`url(#${Y})`}_makeShadingPattern(M){switch(typeof M=="string"&&(M=this.objs.get(M)),M[0]){case"RadialAxial":const F=`shading${U++}`,$=M[3];let ee;switch(M[1]){case"axial":const te=M[4],he=M[5];ee=this.svgFactory.createElement("svg:linearGradient"),ee.setAttributeNS(null,"id",F),ee.setAttributeNS(null,"gradientUnits","userSpaceOnUse"),ee.setAttributeNS(null,"x1",te[0]),ee.setAttributeNS(null,"y1",te[1]),ee.setAttributeNS(null,"x2",he[0]),ee.setAttributeNS(null,"y2",he[1]);break;case"radial":const re=M[4],pe=M[5],le=M[6],J=M[7];ee=this.svgFactory.createElement("svg:radialGradient"),ee.setAttributeNS(null,"id",F),ee.setAttributeNS(null,"gradientUnits","userSpaceOnUse"),ee.setAttributeNS(null,"cx",pe[0]),ee.setAttributeNS(null,"cy",pe[1]),ee.setAttributeNS(null,"r",J),ee.setAttributeNS(null,"fx",re[0]),ee.setAttributeNS(null,"fy",re[1]),ee.setAttributeNS(null,"fr",le);break;default:throw new Error(`Unknown RadialAxial type: ${M[1]}`)}for(const te of $){const he=this.svgFactory.createElement("svg:stop");he.setAttributeNS(null,"offset",te[0]),he.setAttributeNS(null,"stop-color",te[1]),ee.append(he)}return this.defs.append(ee),`url(#${F})`;case"Mesh":return(0,r.warn)("Unimplemented pattern Mesh"),null;case"Dummy":return"hotpink";default:throw new Error(`Unknown IR type: ${M[0]}`)}}setDash(M,F){this.current.dashArray=M,this.current.dashPhase=F}constructPath(M,F){const $=this.current;let ee=$.x,te=$.y,he=[],re=0;for(const pe of M)switch(pe|0){case r.OPS.rectangle:ee=F[re++],te=F[re++];const le=F[re++],J=F[re++],se=ee+le,Y=te+J;he.push("M",R(ee),R(te),"L",R(se),R(te),"L",R(se),R(Y),"L",R(ee),R(Y),"Z");break;case r.OPS.moveTo:ee=F[re++],te=F[re++],he.push("M",R(ee),R(te));break;case r.OPS.lineTo:ee=F[re++],te=F[re++],he.push("L",R(ee),R(te));break;case r.OPS.curveTo:ee=F[re+4],te=F[re+5],he.push("C",R(F[re]),R(F[re+1]),R(F[re+2]),R(F[re+3]),R(ee),R(te)),re+=6;break;case r.OPS.curveTo2:he.push("C",R(ee),R(te),R(F[re]),R(F[re+1]),R(F[re+2]),R(F[re+3])),ee=F[re+2],te=F[re+3],re+=4;break;case r.OPS.curveTo3:ee=F[re+2],te=F[re+3],he.push("C",R(F[re]),R(F[re+1]),R(ee),R(te),R(ee),R(te)),re+=4;break;case r.OPS.closePath:he.push("Z");break}he=he.join(" "),$.path&&M.length>0&&M[0]!==r.OPS.rectangle&&M[0]!==r.OPS.moveTo?he=$.path.getAttributeNS(null,"d")+he:($.path=this.svgFactory.createElement("svg:path"),this._ensureTransformGroup().append($.path)),$.path.setAttributeNS(null,"d",he),$.path.setAttributeNS(null,"fill","none"),$.element=$.path,$.setCurrentPoint(ee,te)}endPath(){const M=this.current;if(M.path=null,!this.pendingClip)return;if(!M.element){this.pendingClip=null;return}const F=`clippath${B++}`,$=this.svgFactory.createElement("svg:clipPath");$.setAttributeNS(null,"id",F),$.setAttributeNS(null,"transform",L(this.transformMatrix));const ee=M.element.cloneNode(!0);if(this.pendingClip==="evenodd"?ee.setAttributeNS(null,"clip-rule","evenodd"):ee.setAttributeNS(null,"clip-rule","nonzero"),this.pendingClip=null,$.append(ee),this.defs.append($),M.activeClipUrl){M.clipGroup=null;for(const te of this.extraStack)te.clipGroup=null;$.setAttributeNS(null,"clip-path",M.activeClipUrl)}M.activeClipUrl=`url(#${F})`,this.tgrp=null}clip(M){this.pendingClip=M}closePath(){const M=this.current;if(M.path){const F=`${M.path.getAttributeNS(null,"d")}Z`;M.path.setAttributeNS(null,"d",F)}}setLeading(M){this.current.leading=-M}setTextRise(M){this.current.textRise=M}setTextRenderingMode(M){this.current.textRenderingMode=M}setHScale(M){this.current.textHScale=M/100}setRenderingIntent(M){}setFlatness(M){}setGState(M){for(const[F,$]of M)switch(F){case"LW":this.setLineWidth($);break;case"LC":this.setLineCap($);break;case"LJ":this.setLineJoin($);break;case"ML":this.setMiterLimit($);break;case"D":this.setDash($[0],$[1]);break;case"RI":this.setRenderingIntent($);break;case"FL":this.setFlatness($);break;case"Font":this.setFont($);break;case"CA":this.setStrokeAlpha($);break;case"ca":this.setFillAlpha($);break;default:(0,r.warn)(`Unimplemented graphic state operator ${F}`);break}}fill(){const M=this.current;M.element&&(M.element.setAttributeNS(null,"fill",M.fillColor),M.element.setAttributeNS(null,"fill-opacity",M.fillAlpha),this.endPath())}stroke(){const M=this.current;M.element&&(this._setStrokeAttributes(M.element),M.element.setAttributeNS(null,"fill","none"),this.endPath())}_setStrokeAttributes(M,F=1){const $=this.current;let ee=$.dashArray;F!==1&&ee.length>0&&(ee=ee.map(function(te){return F*te})),M.setAttributeNS(null,"stroke",$.strokeColor),M.setAttributeNS(null,"stroke-opacity",$.strokeAlpha),M.setAttributeNS(null,"stroke-miterlimit",R($.miterLimit)),M.setAttributeNS(null,"stroke-linecap",$.lineCap),M.setAttributeNS(null,"stroke-linejoin",$.lineJoin),M.setAttributeNS(null,"stroke-width",R(F*$.lineWidth)+"px"),M.setAttributeNS(null,"stroke-dasharray",ee.map(R).join(" ")),M.setAttributeNS(null,"stroke-dashoffset",R(F*$.dashPhase)+"px")}eoFill(){this.current.element?.setAttributeNS(null,"fill-rule","evenodd"),this.fill()}fillStroke(){this.stroke(),this.fill()}eoFillStroke(){this.current.element?.setAttributeNS(null,"fill-rule","evenodd"),this.fillStroke()}closeStroke(){this.closePath(),this.stroke()}closeFillStroke(){this.closePath(),this.fillStroke()}closeEOFillStroke(){this.closePath(),this.eoFillStroke()}paintSolidColorImageMask(){const M=this.svgFactory.createElement("svg:rect");M.setAttributeNS(null,"x","0"),M.setAttributeNS(null,"y","0"),M.setAttributeNS(null,"width","1px"),M.setAttributeNS(null,"height","1px"),M.setAttributeNS(null,"fill",this.current.fillColor),this._ensureTransformGroup().append(M)}paintImageXObject(M){const F=this.getObject(M);if(!F){(0,r.warn)(`Dependent image with object ID ${M} is not ready yet`);return}this.paintInlineImageXObject(F)}paintInlineImageXObject(M,F){const $=M.width,ee=M.height,te=E(M,this.forceDataSchema,!!F),he=this.svgFactory.createElement("svg:rect");he.setAttributeNS(null,"x","0"),he.setAttributeNS(null,"y","0"),he.setAttributeNS(null,"width",R($)),he.setAttributeNS(null,"height",R(ee)),this.current.element=he,this.clip("nonzero");const re=this.svgFactory.createElement("svg:image");re.setAttributeNS(C,"xlink:href",te),re.setAttributeNS(null,"x","0"),re.setAttributeNS(null,"y",R(-ee)),re.setAttributeNS(null,"width",R($)+"px"),re.setAttributeNS(null,"height",R(ee)+"px"),re.setAttributeNS(null,"transform",`scale(${R(1/$)} ${R(-1/ee)})`),F?F.append(re):this._ensureTransformGroup().append(re)}paintImageMaskXObject(M){const F=this.getObject(M.data,M);if(F.bitmap){(0,r.warn)("paintImageMaskXObject: ImageBitmap support is not implemented, ensure that the `isOffscreenCanvasSupported` API parameter is disabled.");return}const $=this.current,ee=F.width,te=F.height,he=$.fillColor;$.maskId=`mask${X++}`;const re=this.svgFactory.createElement("svg:mask");re.setAttributeNS(null,"id",$.maskId);const pe=this.svgFactory.createElement("svg:rect");pe.setAttributeNS(null,"x","0"),pe.setAttributeNS(null,"y","0"),pe.setAttributeNS(null,"width",R(ee)),pe.setAttributeNS(null,"height",R(te)),pe.setAttributeNS(null,"fill",he),pe.setAttributeNS(null,"mask",`url(#${$.maskId})`),this.defs.append(re),this._ensureTransformGroup().append(pe),this.paintInlineImageXObject(F,re)}paintFormXObjectBegin(M,F){if(Array.isArray(M)&&M.length===6&&this.transform(M[0],M[1],M[2],M[3],M[4],M[5]),F){const $=F[2]-F[0],ee=F[3]-F[1],te=this.svgFactory.createElement("svg:rect");te.setAttributeNS(null,"x",F[0]),te.setAttributeNS(null,"y",F[1]),te.setAttributeNS(null,"width",R($)),te.setAttributeNS(null,"height",R(ee)),this.current.element=te,this.clip("nonzero"),this.endPath()}}paintFormXObjectEnd(){}_initialize(M){const F=this.svgFactory.create(M.width,M.height),$=this.svgFactory.createElement("svg:defs");F.append($),this.defs=$;const ee=this.svgFactory.createElement("svg:g");return ee.setAttributeNS(null,"transform",L(M.transform)),F.append(ee),this.svg=ee,F}_ensureClipGroup(){if(!this.current.clipGroup){const M=this.svgFactory.createElement("svg:g");M.setAttributeNS(null,"clip-path",this.current.activeClipUrl),this.svg.append(M),this.current.clipGroup=M}return this.current.clipGroup}_ensureTransformGroup(){return this.tgrp||(this.tgrp=this.svgFactory.createElement("svg:g"),this.tgrp.setAttributeNS(null,"transform",L(this.transformMatrix)),this.current.activeClipUrl?this._ensureClipGroup().append(this.tgrp):this.svg.append(this.tgrp)),this.tgrp}}}}],__webpack_module_cache__={};function __w_pdfjs_require__(c){var e=__webpack_module_cache__[c];if(e!==void 0)return e.exports;var t=__webpack_module_cache__[c]={exports:{}};return __webpack_modules__[c](t,t.exports,__w_pdfjs_require__),t.exports}var __webpack_exports__={};return(()=>{var c=__webpack_exports__;Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"AbortException",{enumerable:!0,get:function(){return e.AbortException}}),Object.defineProperty(c,"AnnotationEditorLayer",{enumerable:!0,get:function(){return o.AnnotationEditorLayer}}),Object.defineProperty(c,"AnnotationEditorParamsType",{enumerable:!0,get:function(){return e.AnnotationEditorParamsType}}),Object.defineProperty(c,"AnnotationEditorType",{enumerable:!0,get:function(){return e.AnnotationEditorType}}),Object.defineProperty(c,"AnnotationEditorUIManager",{enumerable:!0,get:function(){return a.AnnotationEditorUIManager}}),Object.defineProperty(c,"AnnotationLayer",{enumerable:!0,get:function(){return f.AnnotationLayer}}),Object.defineProperty(c,"AnnotationMode",{enumerable:!0,get:function(){return e.AnnotationMode}}),Object.defineProperty(c,"CMapCompressionType",{enumerable:!0,get:function(){return e.CMapCompressionType}}),Object.defineProperty(c,"FeatureTest",{enumerable:!0,get:function(){return e.FeatureTest}}),Object.defineProperty(c,"GlobalWorkerOptions",{enumerable:!0,get:function(){return m.GlobalWorkerOptions}}),Object.defineProperty(c,"InvalidPDFException",{enumerable:!0,get:function(){return e.InvalidPDFException}}),Object.defineProperty(c,"MissingPDFException",{enumerable:!0,get:function(){return e.MissingPDFException}}),Object.defineProperty(c,"OPS",{enumerable:!0,get:function(){return e.OPS}}),Object.defineProperty(c,"PDFDataRangeTransport",{enumerable:!0,get:function(){return t.PDFDataRangeTransport}}),Object.defineProperty(c,"PDFDateString",{enumerable:!0,get:function(){return s.PDFDateString}}),Object.defineProperty(c,"PDFWorker",{enumerable:!0,get:function(){return t.PDFWorker}}),Object.defineProperty(c,"PasswordResponses",{enumerable:!0,get:function(){return e.PasswordResponses}}),Object.defineProperty(c,"PermissionFlag",{enumerable:!0,get:function(){return e.PermissionFlag}}),Object.defineProperty(c,"PixelsPerInch",{enumerable:!0,get:function(){return s.PixelsPerInch}}),Object.defineProperty(c,"PromiseCapability",{enumerable:!0,get:function(){return e.PromiseCapability}}),Object.defineProperty(c,"RenderingCancelledException",{enumerable:!0,get:function(){return s.RenderingCancelledException}}),Object.defineProperty(c,"SVGGraphics",{enumerable:!0,get:function(){return g.SVGGraphics}}),Object.defineProperty(c,"UnexpectedResponseException",{enumerable:!0,get:function(){return e.UnexpectedResponseException}}),Object.defineProperty(c,"Util",{enumerable:!0,get:function(){return e.Util}}),Object.defineProperty(c,"VerbosityLevel",{enumerable:!0,get:function(){return e.VerbosityLevel}}),Object.defineProperty(c,"XfaLayer",{enumerable:!0,get:function(){return p.XfaLayer}}),Object.defineProperty(c,"build",{enumerable:!0,get:function(){return t.build}}),Object.defineProperty(c,"createValidAbsoluteUrl",{enumerable:!0,get:function(){return e.createValidAbsoluteUrl}}),Object.defineProperty(c,"getDocument",{enumerable:!0,get:function(){return t.getDocument}}),Object.defineProperty(c,"getFilenameFromUrl",{enumerable:!0,get:function(){return s.getFilenameFromUrl}}),Object.defineProperty(c,"getPdfFilenameFromUrl",{enumerable:!0,get:function(){return s.getPdfFilenameFromUrl}}),Object.defineProperty(c,"getXfaPageViewport",{enumerable:!0,get:function(){return s.getXfaPageViewport}}),Object.defineProperty(c,"isDataScheme",{enumerable:!0,get:function(){return s.isDataScheme}}),Object.defineProperty(c,"isPdfFile",{enumerable:!0,get:function(){return s.isPdfFile}}),Object.defineProperty(c,"loadScript",{enumerable:!0,get:function(){return s.loadScript}}),Object.defineProperty(c,"normalizeUnicode",{enumerable:!0,get:function(){return e.normalizeUnicode}}),Object.defineProperty(c,"renderTextLayer",{enumerable:!0,get:function(){return r.renderTextLayer}}),Object.defineProperty(c,"setLayerDimensions",{enumerable:!0,get:function(){return s.setLayerDimensions}}),Object.defineProperty(c,"shadow",{enumerable:!0,get:function(){return e.shadow}}),Object.defineProperty(c,"updateTextLayer",{enumerable:!0,get:function(){return r.updateTextLayer}}),Object.defineProperty(c,"version",{enumerable:!0,get:function(){return t.version}});var e=__w_pdfjs_require__(1),t=__w_pdfjs_require__(2),s=__w_pdfjs_require__(6),r=__w_pdfjs_require__(26),o=__w_pdfjs_require__(27),a=__w_pdfjs_require__(5),f=__w_pdfjs_require__(32),m=__w_pdfjs_require__(14),g=__w_pdfjs_require__(35),p=__w_pdfjs_require__(34)})(),__webpack_exports__})())})(pdf);var pdfExports=pdf.exports;function h(c,e,t,s){const r=t-c,o=s-e;return Math.sqrt(r*r+o*o)}function n$1(c,e,t){return Math.max(e,Math.min(c,t))}class u{constructor(e=0,t=0){this.length=2,this.x=e,this.y=t}static multiplyByScalar(e,t){return new u(e.x*t,e.y*t)}static addScalar(e,t){return new u(e.x+t,e.y+t)}static normalize(e){return new u().setFromVec2(e).normalize()}static add(e,t){return new u(e.x+t.x,e.y+t.y)}static subtract(e,t){return new u(e.x-t.x,e.y-t.y)}static dotProduct(e,t){return e.x*t.x+e.y*t.y}static applyMat3(e,t){return e.clone().applyMat3(t)}static lerp(e,t,s){return e.clone().lerp(t,s)}static rotate(e,t,s){return e.clone().rotate(t,s)}static equals(e,t,s=6){return!!e&&e.equals(t)}static getDistance(e,t){const s=t.x-e.x,r=t.y-e.y;return Math.sqrt(s*s+r*r)}static getAngle(e,t){return e.getAngle(t)}static minMax(...e){return(e=(e||[]).filter(t=>t)).length?{min:new u(Math.min(...e.map(t=>t.x)),Math.min(...e.map(t=>t.y))),max:new u(Math.max(...e.map(t=>t.x)),Math.max(...e.map(t=>t.y)))}:{min:new u,max:new u}}clone(){return new u(this.x,this.y)}set(e,t){return this.x=e,this.y=t,this}setFromVec2(e){return this.x=e.x,this.y=e.y,this}multiplyByScalar(e){return this.x*=e,this.y*=e,this}addScalar(e){return this.x+=e,this.y+=e,this}getMagnitude(){return Math.sqrt(this.x*this.x+this.y*this.y)}getAngle(e){const t=Math.atan2(this.x,this.y);let s=Math.atan2(e.x,e.y)-t;return s>Math.PI?s-=2*Math.PI:s<=-Math.PI&&(s+=2*Math.PI),s}normalize(){const e=this.getMagnitude();return e&&(this.x/=e,this.y/=e),this}add(e){return this.x+=e.x,this.y+=e.y,this}subtract(e){return this.x-=e.x,this.y-=e.y,this}dotProduct(e){return u.dotProduct(this,e)}applyMat3(e){if(e.length!==9)throw new Error("Matrix must contain 9 elements");const{x:t,y:s}=this,[r,o,,a,f,,m,g]=e;return this.x=t*r+s*a+m,this.y=t*o+s*f+g,this}lerp(e,t){return this.x+=t*(e.x-this.x),this.y+=t*(e.y-this.y),this}rotate(e,t){const s=Math.sin(t),r=Math.cos(t),o=this.x-e.x,a=this.y-e.y;return this.x=o*r-a*s+e.x,this.y=o*s+a*r+e.y,this}truncate(e=5){return this.x=+this.x.toFixed(e),this.y=+this.y.toFixed(e),this}equals(e,t=6){return!!e&&+this.x.toFixed(t)==+e.x.toFixed(t)&&+this.y.toFixed(t)==+e.y.toFixed(t)}toArray(){return[this.x,this.y]}toIntArray(){return new Int32Array(this)}toFloatArray(){return new Float32Array(this)}*[Symbol.iterator](){yield this.x,yield this.y}}class l{constructor(){this.length=9,this._matrix=new Array(this.length),this._matrix[0]=1,this._matrix[1]=0,this._matrix[2]=0,this._matrix[3]=0,this._matrix[4]=1,this._matrix[5]=0,this._matrix[6]=0,this._matrix[7]=0,this._matrix[8]=1}get x_x(){return this._matrix[0]}get x_y(){return this._matrix[1]}get x_z(){return this._matrix[2]}get y_x(){return this._matrix[3]}get y_y(){return this._matrix[4]}get y_z(){return this._matrix[5]}get z_x(){return this._matrix[6]}get z_y(){return this._matrix[7]}get z_z(){return this._matrix[8]}static fromMat3(e){return new l().setFromMat3(e)}static fromMat4(e){return new l().setFromMat4(e)}static from4Vec2(e,t,s,r,o=!1){const a=new l;a.applyTranslation(-e.x,-e.y);const f=u.subtract(t,e).getMagnitude(),m=u.subtract(r,s).getMagnitude()/f;if(a.applyScaling(m),!o){const g=Math.atan2(t.y-e.y,t.x-e.x)-Math.atan2(r.y-s.y,r.x-s.x);a.applyRotation(g)}return a.applyTranslation(s.x,s.y),a}static multiply(e,t){const[s,r,o,a,f,m,g,p,y]=e._matrix,[C,A,w,_,E,v,k,R,L]=t._matrix,B=new l;return B.set(s*C+r*_+o*k,s*A+r*E+o*R,s*w+r*v+o*L,a*C+f*_+m*k,a*A+f*E+m*R,a*w+f*v+m*L,g*C+p*_+y*k,g*A+p*E+y*R,g*w+p*v+y*L),B}static multiplyScalar(e,t){const s=new l;for(let r=0;r<this.length;r++)s._matrix[r]=e._matrix[r]*t;return s}static transpose(e){const t=new l;return t.set(e.x_x,e.y_x,e.z_x,e.x_y,e.y_y,e.z_y,e.x_z,e.y_z,e.z_z),t}static invert(e){const t=new l;t.set(e.y_y*e.z_z-e.z_y*e.y_z,e.y_x*e.z_z-e.z_x*e.y_z,e.y_x*e.z_y-e.z_x*e.y_y,e.x_y*e.z_z-e.z_y*e.x_z,e.x_x*e.z_z-e.z_x*e.x_z,e.x_x*e.z_y-e.z_x*e.x_y,e.x_y*e.y_z-e.y_y*e.x_z,e.x_x*e.y_z-e.y_x*e.x_z,e.x_x*e.y_y-e.y_x*e.x_y),t.set(t.x_x,-t.x_y,t.x_z,-t.y_x,t.y_y,-t.y_z,t.z_x,-t.z_y,t.z_z);const s=e.x_x*t.x_x+e.x_y*t.x_y+e.x_z*t.x_z,r=new l;if(s){const o=1/s;r.set(o*t.x_x,o*t.y_x,o*t.z_x,o*t.x_y,o*t.y_y,o*t.z_y,o*t.x_z,o*t.y_z,o*t.z_z)}else r.set(0,0,0,0,0,0,0,0,0);return r}static buildScale(e,t){return t!=null||(t=e),new l().set(e,0,0,0,t,0,0,0,1)}static buildRotation(e){const t=Math.cos(e),s=Math.sin(e);return new l().set(t,-s,0,s,t,0,0,0,1)}static buildTranslate(e,t){return new l().set(1,0,0,0,1,0,e,t,1)}static equals(e,t,s=6){return e.equals(t,s)}clone(){return new l().set(this.x_x,this.x_y,this.x_z,this.y_x,this.y_y,this.y_z,this.z_x,this.z_y,this.z_z)}set(e,t,s,r,o,a,f,m,g){return this._matrix[0]=e,this._matrix[1]=t,this._matrix[2]=s,this._matrix[3]=r,this._matrix[4]=o,this._matrix[5]=a,this._matrix[6]=f,this._matrix[7]=m,this._matrix[8]=g,this}reset(){return this._matrix[0]=1,this._matrix[1]=0,this._matrix[2]=0,this._matrix[3]=0,this._matrix[4]=1,this._matrix[5]=0,this._matrix[6]=0,this._matrix[7]=0,this._matrix[8]=1,this}setFromMat3(e){for(let t=0;t<this.length;t++)this._matrix[t]=e._matrix[t];return this}setFromMat4(e){const t=e.toArray();if(t.length!==16)throw new Error("Matrix must contain 16 elements");const[s,r,o,,a,f,m,,g,p,y]=t;for(let C=0;C<this.length;C++)this._matrix[0]=s,this._matrix[1]=r,this._matrix[2]=o,this._matrix[3]=a,this._matrix[4]=f,this._matrix[5]=m,this._matrix[6]=g,this._matrix[7]=p,this._matrix[8]=y;return this}multiply(e){const[t,s,r,o,a,f,m,g,p]=this._matrix,[y,C,A,w,_,E,v,k,R]=e._matrix;return this._matrix[0]=t*y+s*w+r*v,this._matrix[1]=t*C+s*_+r*k,this._matrix[2]=t*A+s*E+r*R,this._matrix[3]=o*y+a*w+f*v,this._matrix[4]=o*C+a*_+f*k,this._matrix[5]=o*A+a*E+f*R,this._matrix[6]=m*y+g*w+p*v,this._matrix[7]=m*C+g*_+p*k,this._matrix[8]=m*A+g*E+p*R,this}multiplyScalar(e){for(let t=0;t<this.length;t++)this._matrix[t]*=e;return this}transpose(){const e=new l().setFromMat3(this);return this.set(e.x_x,e.y_x,e.z_x,e.x_y,e.y_y,e.z_y,e.x_z,e.y_z,e.z_z),this}invert(){const e=new l;e.set(this.y_y*this.z_z-this.z_y*this.y_z,this.y_x*this.z_z-this.z_x*this.y_z,this.y_x*this.z_y-this.z_x*this.y_y,this.x_y*this.z_z-this.z_y*this.x_z,this.x_x*this.z_z-this.z_x*this.x_z,this.x_x*this.z_y-this.z_x*this.x_y,this.x_y*this.y_z-this.y_y*this.x_z,this.x_x*this.y_z-this.y_x*this.x_z,this.x_x*this.y_y-this.y_x*this.x_y),e.set(e.x_x,-e.x_y,e.x_z,-e.y_x,e.y_y,-e.y_z,e.z_x,-e.z_y,e.z_z);const t=this.x_x*e.x_x+this.x_y*e.x_y+this.x_z*e.x_z;if(t){const s=1/t;this.set(s*e.x_x,s*e.y_x,s*e.z_x,s*e.x_y,s*e.y_y,s*e.z_y,s*e.x_z,s*e.y_z,s*e.z_z)}else this.set(0,0,0,0,0,0,0,0,0);return this}getDeterminant(){const[e,t,s,r,o,a,f,m,g]=this._matrix;return e*o*g-e*a*m+t*a*f-t*r*g+s*r*m-s*o*f}getTRS(){const e=new u(this.z_x,this.z_y),t=Math.sqrt(this.x_x*this.x_x+this.x_y*this.x_y),s=Math.sqrt(this.y_x*this.y_x+this.y_y*this.y_y),r=new u(t,s),o=Math.atan(-this.x_y/this.x_x),a=Math.acos(this.x_x/t);let f;return f=a>Math.PI/2&&o>0||a<Math.PI/2&&o<0?2*Math.PI-a:a,{t:e,r:f,s:r}}truncate(e=5){for(let t=0;t<this.length;t++)this._matrix[t]=+this._matrix[t].toFixed(e);return this}equals(e,t=6){for(let s=0;s<this.length;s++)if(+this._matrix[s].toFixed(t)!=+e._matrix[s].toFixed(t))return!1;return!0}applyScaling(e,t){const s=l.buildScale(e,t);return this.multiply(s)}applyTranslation(e,t){const s=l.buildTranslate(e,t);return this.multiply(s)}applyRotation(e){const t=l.buildRotation(e);return this.multiply(t)}toArray(){return this._matrix.slice()}toIntArray(){return new Int32Array(this)}toFloatArray(){return new Float32Array(this)}toIntShortArray(){return new Int32Array([this._matrix[0],this._matrix[1],this._matrix[3],this._matrix[4],this._matrix[6],this._matrix[7]])}toFloatShortArray(){return new Float32Array([+this._matrix[0].toFixed(5),+this._matrix[1].toFixed(5),+this._matrix[3].toFixed(5),+this._matrix[4].toFixed(5),+this._matrix[6].toFixed(5),+this._matrix[7].toFixed(5)])}*[Symbol.iterator](){for(let e=0;e<9;e++)yield this._matrix[e]}}class z{constructor(e=0,t=0,s=0){this.length=3,this.x=e,this.y=t,this.z=s}static multiplyByScalar(e,t){return new z(e.x*t,e.y*t,e.z*t)}static addScalar(e,t){return new z(e.x+t,e.y+t,e.z+t)}static normalize(e){return new z().setFromVec3(e).normalize()}static add(e,t){return new z(e.x+t.x,e.y+t.y,e.z+t.z)}static subtract(e,t){return new z(e.x-t.x,e.y-t.y,e.z-t.z)}static dotProduct(e,t){return e.x*t.x+e.y*t.y+e.z*t.z}static crossProduct(e,t){return new z(e.y*t.z-e.z*t.y,e.z*t.x-e.x*t.z,e.x*t.y-e.y*t.x)}static onVector(e,t){return e.clone().onVector(t)}static onPlane(e,t){return e.clone().onPlane(t)}static applyMat3(e,t){return e.clone().applyMat3(t)}static applyMat4(e,t){return e.clone().applyMat4(t)}static lerp(e,t,s){return e.clone().lerp(t,s)}static equals(e,t,s=6){return!!e&&e.equals(t,s)}static getDistance(e,t){const s=t.x-e.x,r=t.y-e.y,o=t.z-e.z;return Math.sqrt(s*s+r*r+o*o)}static getAngle(e,t){return e.getAngle(t)}clone(){return new z(this.x,this.y,this.z)}set(e,t,s){return this.x=e,this.y=t,this.z=s,this}setFromVec3(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}multiplyByScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}getMagnitude(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}getAngle(e){const t=this.getMagnitude()*e.getMagnitude();if(!t)return Math.PI/2;const s=this.dotProduct(e)/t;return Math.acos(n$1(s,-1,1))}normalize(){const e=this.getMagnitude();return e&&(this.x/=e,this.y/=e,this.z/=e),this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}subtract(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}dotProduct(e){return z.dotProduct(this,e)}crossProduct(e){return this.x=this.y*e.z-this.z*e.y,this.y=this.z*e.x-this.x*e.z,this.z=this.x*e.y-this.y*e.x,this}onVector(e){const t=this.getMagnitude();return t?e.clone().multiplyByScalar(e.clone().dotProduct(this)/(t*t)):this.set(0,0,0)}onPlane(e){return this.subtract(this.clone().onVector(e))}applyMat3(e){if(e.length!==9)throw new Error("Matrix must contain 9 elements");const{x:t,y:s,z:r}=this,[o,a,f,m,g,p,y,C,A]=e;return this.x=t*o+s*m+r*y,this.y=t*a+s*g+r*C,this.z=t*f+s*p+r*A,this}applyMat4(e){if(e.length!==16)throw new Error("Matrix must contain 16 elements");const{x:t,y:s,z:r}=this,[o,a,f,m,g,p,y,C,A,w,_,E,v,k,R,L]=e,B=1/(t*m+s*C+r*E+L);return this.x=(t*o+s*g+r*A+v)*B,this.y=(t*a+s*p+r*w+k)*B,this.z=(t*f+s*y+r*_+R)*B,this}lerp(e,t){return this.x+=t*(e.x-this.x),this.y+=t*(e.y-this.y),this.z+=t*(e.z-this.z),this}truncate(e=5){return this.x=+this.x.toFixed(e),this.y=+this.y.toFixed(e),this.z=+this.z.toFixed(e),this}equals(e,t=6){return!!e&&+this.x.toFixed(t)==+e.x.toFixed(t)&&+this.y.toFixed(t)==+e.y.toFixed(t)&&+this.z.toFixed(t)==+e.z.toFixed(t)}toArray(){return[this.x,this.y,this.z]}toIntArray(){return new Int32Array(this)}toFloatArray(){return new Float32Array(this)}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var getRandomValues,rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&(getRandomValues=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!getRandomValues))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}const REGEX=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function validate(c){return typeof c=="string"&&REGEX.test(c)}var byteToHex=[];for(var i=0;i<256;++i)byteToHex.push((i+256).toString(16).substr(1));function stringify(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=(byteToHex[c[e+0]]+byteToHex[c[e+1]]+byteToHex[c[e+2]]+byteToHex[c[e+3]]+"-"+byteToHex[c[e+4]]+byteToHex[c[e+5]]+"-"+byteToHex[c[e+6]]+byteToHex[c[e+7]]+"-"+byteToHex[c[e+8]]+byteToHex[c[e+9]]+"-"+byteToHex[c[e+10]]+byteToHex[c[e+11]]+byteToHex[c[e+12]]+byteToHex[c[e+13]]+byteToHex[c[e+14]]+byteToHex[c[e+15]]).toLowerCase();if(!validate(t))throw TypeError("Stringified UUID is invalid");return t}function v4(c,e,t){c=c||{};var s=c.random||(c.rng||rng)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,e){t=t||0;for(var r=0;r<16;++r)e[t+r]=s[r];return e}return stringify(s)}var img$J="data:image/png;base64,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",img$I="data:image/png;base64,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",img$H="data:image/png;base64,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",img$G="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABb2lDQ1BpY2MAACiRdZE7SwNBFIW/JIoSE1JoISKYQsUiAVEUS4mgTbSIEYzaZNc8hDyW3Q0SbAUbC8FCtPFV+A+0FWwVBEERRGz8A74akfWOCSRIMsvs/Tgz5zJzBtzRnJ63WoYhX7DN2EwkuJhYCra94qEPL37GkrplzM5Px2k6vu5xqXoXVr2a72s4OlZTlg6uduFx3TBt4Unh6LptKN4W7tKzyVXhI+GQKQcUvla6VuEXxZkKfyg247EpcKuewUwda3WsZ8288JBwfz5X0qvnUTfxpQoL81J7ZPZiEWOGCEE0SqyRwyYstSCZNfYN//nmKIpHl79BGVMcGbLiDYlakq4pqWnRU/LlKKvc/+dppUdHKt19EWh9dpz3AWjbhZ8dx/k+dpyfE/A8wWWh5i9KThOfou/UtP5DCGzC+VVN0/bgYgu6H42kmfyTPDLd6TS8nYE/AZ234F2uZFVd5/QB4hvyRDewfwCDsj+w8gsVKmgU+omlKwAAAAlwSFlzAAALEwAACxMBAJqcGAAACdRJREFUeNrdW3tsW9UdPuf4Ok5wHrav86pYB6zQZA+NDpi6tUzaRCSg7TakIsEUFYTUQGlpV2AVk7ZJCLFNhY62lIHafwarhLZ2KoK2g0XaHzRQ0Cgt/yyllOdQm9SPmzgmTvw4d99xbff45NqxnTi+7pFS3/oe33u/3+P7Pc65lFR5+P3+bs75D01KrzcJ6aWcX20y1kk49zLGXGIOzk8RxgycG8W5Tykhw9Q0P3A4HG8FAoGRaj4frcY1vV7vcsrYWgC7HSB75nIxTsh/mWkexeHBcDj8rm0FANBt0OJ6qHMA4K+thrYg0DO49l5Yxz4II2ILAbS1tXmYpj1qcr4Z2m4hCzBgFRE8+C5IZIdhGOO1EgDz6Pr9jJAncKwXe14I5ySs4xihdBg88KGZSHyRSqUmol1dE2JC88hIC/y9hTqdi6Fd4TI9AHcztL1M3KfglU0zAM74jREM7hP/WzABgNiu5ab5Ig5/UGBKAqD/SSndD6CD4+PjYxValyDKPlynH8K7FV85C0wdSjJ2byQQ+LjqAoDW+6GdF/BgbovTYWhlVzwe/3M0Gg3Op9k3Nzf7nS7XJjzwZkE5FvwwQR2O+2ENL1dLAMyr6zvwg19a3HySUfoHmPFOhK1oNf1f1/UW0zS3wgIfgxKaLNziaRDktlJdojQBLFni8hrGy5h8h8UND8PMH4KZf0YWcMA9robA98A1brc4fSAcCvXjMz53AQC8zzBewdGtCvBp+OYjoVDoOVLD4fP5NkMIT+GwQXm+o7CEO2YTAp3V7L3ef4CNf66Y/HnN4VgdDAbfJzYYcIubUpy/CpfosrCEuy5GTuvhKJrc6PpOaPkeNRkBw/8Y8XeY2GTEYrFzrtbWQzSVWoXn9UmnvtXU1OTG+cGyLQCmtQ6m9aIK3tXQcPPo6OgFYsPR0dHRmUgkhmCxS/K8gdJfFIoOtECcvy6ZSr0vhzqAPwfNr1hosiubHDs6rqGJxFuyO+DZo1zTrrfKE6yyLJZEkpMX50F48Pk1dgcvxviFC584GFsjkx+wNGuc/8VK4Q4LQnkQswbyTJ/SLSCTV0mdDMEJ8P0IXPg26evFjW73uanJyRMFXUCkng5NOysoIKd8sCsI72ekDgd47IiSJwSBZ4lcQOW5ABKLbTJ4keHh46GKS2Rdfxxh9IzH4/lOLQSABG0TMMRkeoM/PGLJAaKsRXq5Ke8kpU9CWl9UKP2nYV6/E70B+ODva8IH4+OfAsMf8yICIVvwbK0zBICafkCQhTQ35HQ6d1UKHqaXlXQIx6tr5QbIC57BhyEBbkVYXK8KgMLe1yup5E7E+6/mCJ7M0iuo+kCqPgGt786DxvlAHgnCT1fAVIekOfFEPL5oYmIiVBZ4VIv4eHhGjRwK0VoKQZTSDS7XeRxqkoKXix4jywTKOxUJHb1cwIuR7k2Y5uvK12svuQDnqxS/2V8meNOu4C8p3PyrktukwyODz16p5M4p/A2W0SH6k9X3dgKfCemDclUIzX+zvb29i6l9Pcw4UWrLWYDHBbbaHXwmJBpw7VNKnrCCISQsUxKDocsN/CVw7E2lSvwug230KgQ4fFmCvzhOK0lRLxIlelWxSRbp7TNZ8KIzVEfghcbzsIl1Sob0t1Nhy/8VAy93hZE5dtcL+DS2RCIvrReLtCIx8ChsOVEk1JFyz9ViFFKIWI1CtSuDFQsvF5eosyMSiUQtNP9EvZTAooJFaP+1ZUKUWYqTLLiRlWQ6nD9cLwIAqCuQyT1Z8nxIbFr+orW1tVmdpDkcP6ojC/gK/viYZU0wMtKizJ0WFjCmSHDGEncwGDwhz5PZ34YW4DZCoe1W58QKtDLZ0BAHR3HYLdUBX8PH5xbEAirQb4R0B7PsX08hMI3N6VyMMCeHwVGGsPeZUggtLVJbvwekfdJXY3aMAgUFQMhSJQyKjhFVE5/eWRoM7+FHN2bAe+waCguUhL2KQIaFBZxUysSVs11HcAKEcIvECbG6EALnedioaZ4SO7oWoxz+PK8cNk1fKRUhABs5KzDNafiPy66cIJq+SILEpo3cWgiUuIilu76mKS8ZiQm3lJhxeTPuQLLg7WoJiAB9MnhY7WlY8nmWKRKOKEVDf6kXzoRIw+7pMVy9XwmXR3MtMQA+qJDDKiREvjJyb1/GEgw7CkE0ReHmtynZ7cGcAMaCwSGI6BPpfIOmaQ+Uc5MMMfbZ0RIaGhoeJNIOM4D/CK7/Tk4AaQuhdG9+0KRbu7u7r6hACDfYyRLa29ubgWWLkgHuJZlNVLliiCeTe0UeLU3zT8XjZa8Lim0zcois9UAJLPoXvrxyn/N9OVlkD0TTEA/+nOInvxVd40qEkGcFpnmsFuA9Hs/XuWnmlcbggt0FV4cTicR2uegRhQVcY3eFTQlBjEtBqJuQU/ykRoXRs+nyWEpkYek7iBLzcyMej8eamppi8sYCAOhtdLvPqxsLShmTk5OhWCz2H1Jkl1a1Bgq3jYLH8hJBQh4dN4xjSsSbmTN4vN7jkNxNkt9MEU1bPhYIfFAPRY/f7/8envltOTnDOA6rXKkqw6ojlHIwtk7eWCBaR5DCYZE22x08Ut6rkqnUazJ4Qe7s4na/GZbIClR8p/GDjcrEKxE33mju6mq3K/jOzs4OkNwbUNgihQweADF/ZJkiF7oYfPdUY2NjO8rl70u9Aj9NJteAJ16bmpoat5vmU5z/G+Cvy4tkhOwcC4WeKtIjKF5DIAweAvI1Cpl8CamutgsntPn9y2gqdVjVPMAfMkKhtcVIeLaucCrs892JX/9LdQeSTL7j9fsHag3eo+sbHJwfn2H2hLxueL13zxaBSt4u7wuHD6iWkJUyNc3NiPVfLiTwDCE/C5//6Yxn4vwVQ9fvImfPTs9aJpeW1YRT4IS/gxN0mROyeQKyrYEmt5t7PZ6T0Wg0UWWic7tcrl9B8H+D1r9toZDdRjh8H545WWKfsLwBTrgPgPcUeFsjgH93JZPJ5yORSHg+gbe0tOhOp3MDrFDk9vrMblf6rZUNsMSXyrluRa0rZFk9YNyX5GRJGXFo4ghcYz8sZlDs1KrkPpn9fH2imQFTF1taGixbfYS8q1G6DqHuTLn3mEvvTkQIkW4+TpQFVmUkxa4TZppi48UwwHwoVqBFVZZdhxSrUWJBJrMm0QOwvfjNSpDtDbO4aVhsxoSAn6803abzZJrb4BYbC7xJNu9DbH+Hue9BqbtdVLFzuda8dW/T7/hp2gDMfgBWcU2VGnsfi8aN6F1U+i5i1QQgX9Pj96+EINbibxWE8Y05Yeb8LJKuI1D7AdTxb5MK3xBdSAFYxevl8O9l8P0esSUnsyvFI70+L+L1mFinTC/VMSZenz+ZruCqnF/8H8NHa92AY3WkAAAAAElFTkSuQmCC",img$F="data:image/png;base64,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",img$E="data:image/png;base64,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",img$D="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABb2lDQ1BpY2MAACiRdZE7SwNBFIU/N4piFBEtRCxSRLFQCApiKRFMoxYxgq8mu24SIRuX3Q0itoKNRcBCtPFV+A+0FWwVBEERRGz8A74akfVOVohIMsvs/Tgz5zJzBrTJvGG59TGwCp6TTMQjc/MLkcYXQmiE6aQ9bbj21MxEiprj8446VW8HVa/a+6qO8LLpGlDXJDxi2I4nPCY8uebZireFO41celn4UHjAkQMKXyldD/hZcTbgd8VOKjkOmuoZyf5h/Q8bOccS7heOWvmi8XsedZMWszA7I7VbZg8uSRLEiaBTZIU8HoNSC5JZdV+s7JtmVTyG/G3WccSRJSfeAVGL0tWUmhHdlC/Pusr9f55uZngo6N4Sh4Yn33/rhcYd+C75/teR738fQ+gRLgoV/6rkNPoheqmiRQ+gbRPOLiuavgvnW9D1YKeddFkKydQyGXg9hdZ56LiB5sUgq991Tu4htSFPdA17+9An+9uWfgCZXmfbLPy9EwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAtBJREFUeNrlWwtuwjAMra2cALj/CWFHWLYiQKGLEzu282GRqiFo3bznT23PhY1Yl8vl/vd6vW6VFTf5AitZp/P5JQsByPMoHEABr12oAE/d21IWG0+gTuywYrLx2OumR8sOSnmg3LwaONcFiqZT0j4jBngAhoZYVDX/HLbQCfgRWJT6MkVGycefn0tEQO5HS7YJWWwCanI5+y8REKxUu99UEEhzsQO0hFOKK5GFrdrfhT2PQU+RJiVVCdA8WkYA0O4DPTdrHUg5AKUk4AhNzURy0DIqDH4uJB/3sH+mAt+fVPg7Ri+Nx5bonpFtIscrFeZkfFGxeSs5pLLQGfww2Vy3xIXAu9wDO2xMY7bgTQJODF5EQi4Q59zg+B1ODt7FElIS4HQ+v/34dbv1Ah8NrqleW+t14OSad7cEXAi8Cwm4GHgVCRbl8Azgm0igiqagBf/rR+BZCVaKGaor/ZY2l/aEC2reNCaE9LGXtrgy1diM4KuW8Lt/YPcDMqayAniVO+CiZm/mDvhB4JtIwA8DLyYBt3++Qmsw6bUa8wq2FeOoRoTjErkw9io6ZgR/dwGLVHMl8Mf+BzIaCCtYQvOTC5m9tJlJUD22JdVg1h0etQKsCP7lAtyO6mSWYJKwoaQWn4gEs2wVGxOOkSSYpuqaVHgECeZ1ingqy3BTUXl+E/gU3z4aYFEM9bAEc/B38wdonxLrSIJreW5ZDnuQYAaecm3UChjQNDG7B/m/QcoNJiDBXDZ22CiMluM6K1wQDoqgaqb12mMdS/6hcINlFqZDz9z3hVYnIcUVtg9dZmNyveZ+e4En3xpLL+aAfp43G0Fdp8UVsSCOKKWzEyKcbtAKbpAL4hwMotfmDF6vE78252mJr1RYo+G9KfpojHIOiYuwjlalNI3LCwYopFle1ChAky2GI7iOSc4xz+/SVK0+BrlEPH6HwgyR1MebSOBOqVHf/wB4polu0KoYHQAAAABJRU5ErkJggg==",img$C="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABb2lDQ1BpY2MAACiRdZE7SwNBFIW/JIpioim0ELHYIgaLCKIglhJBG7WIEYzabDabRNjEZTdBgq1gYyFYiDa+Cv+BtoKtgiAogoiNf8BXI2G9Y4SImFlm78eZOZeZM+CfsoyC2zQIhWLJSUzGtfnUgtbyTIAQHQSJ6oZrT89OJGk4Pm7xqXozoHo13vfvCGZM1wBfq/CIYTsl4THhqdWSrXhTuMvI6xnhA+GYIwcUvlR6usZPinM1flPsJBPj4Fc9tdwvTv9iI+8UhPuFIwWrbPycR90kZBbnZqX2yOzFJcEkcTTSlFnGosSA1KJk9r9v8Ns3w4p4DPnbVHDEkSMv3pioZelqSs2KbspnUVG5/83TzQ4P1bqH4tD86HmvfdCyDdUtz/s89LzqEQQe4LxY969ITqPvom/Vtcg+hNfh9KKupXfgbAO6723d0b+lgEx/NgsvJ9Cegs5raFusZfWzzvEdJNfkia5gdw+isj+89AXPlWf0rTeiAwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAZdJREFUeNrtW1GywiAMZDOeQHv/E9Z3hBenf05ttZAACSQz/lQHdjcJCRVSCgsLm9nQcC62iA3GSDfHCcOkm2CGI+JVsKMDeTQcq/oA7H0OVASmvb5UmQ8VwPSsLGghABvoKdRwwCl5NTxwTF4FF5yTF+MjJ/uIrmWQjZMXYSXnnhdjo8Lc8mRcqhg7834RdkqTGw2S+8VYaeDcv8SJBvR+tRTwZphdgEtpQJPkvygCMHIaRB8QAoQAIUAIEAKEAOUvFDxugCICfgiAgfmiNAKG3R/cpAPcH4/093wePte0szmOnuc4jTQ2QHuy2uSV5oA0AvibMDVIC+a4nLLTV4GS8zrWq0QW5tsMTl6W5fCLdV1/pgCclcQsbJswqBFWxsjjnfDHIvj+8CxUHETCpQMSW8hLvDjEEZm9kzX+G2Qv5LUaGD759CAvwrFxj4OSFUuOi6OyJOjhkRGiGqGuTl6SApKFcKjj8j2rgakLEy2FMHtlpqYYri5NaYlh59rcvn38Z7sbQgK+9v4fv0+TG+V635N5xt7MXlrTY+62KCOPAAAAAElFTkSuQmCC",img$B="data:image/png;base64,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",img$A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABb2lDQ1BpY2MAACiRdZG9S0JRGMZ/aqGVIVRDVIODRYGBFERjGORSDWaQ1aI3PwI/LvcqIa1BS4PQELX0NfQf1Bq0FgRBEUS09A/0tUTc3qOCEnku574/nnOel3OeA/bZjJY1WwKQzRWMcCjoXYoue52vtNGPiy5GYpqpzy3MRGg6vu6xqXo3qno13/fv6FhLmBrYXMITmm4UhKeEZzcKuuId4R4tHVsTPhL2G3JA4Wulx6v8ojhV5Q/FRiQ8DXbV05tq4HgDa2kjKzws7MtmilrtPOom7kRucUFqn8wBTMKECOIlTpF1MhQYlZqTzP73BSq+efLi0eSvU8IQR4q0eP2iFqVrQmpS9IR8GUoq9795msnxsWp3dxBany3rfRCcu/BTtqzvY8v6OQHHE1zm6v685DT5KXq5rvkOwbMF51d1Lb4HF9vQ+6jHjFhFcsi0J5PwdgadUei+hfaVala1dU4fILIpT3QD+wcwJPs9q78GJWgN6zGReAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAlxJREFUeNrtW1uOgzAMxCgn2HL/E9IeYb30AymkYbETv6BEQuoDiD2xJ+MQYNhp0zRh7fdfxEGrjQCb7/M8w6DcgOq4BwAWQADVcU8ANIEYhy9vcDT6FnnISUNpe1Ikx8u+qWnZFQG1Tjydp0SDpH1fzwFj5NHP7CmPexZQJ8FK4xASXA0A7HG8V1aX5/08HmKyOmmiazGNcW0pgUjEUQBCFEBEx4+ASFfMay0SdJOxZc6/ns9ue96/v+1JFihHltWj9uhHEVY1O9723lLYKfSRKazU7JHmAEq4Y/HZNUVSgCg8BKHC+ig1IB4cAJ11hui5aUWXoq+V89YkHUrlOzLEBVJunh+NIEgqUmBxAEdhOTeXJTE4k2NaswAI5nuIYstjFgjjvBcAocrs5OQwdjp/aiG0GqbtPOncUSCfwy5/aXMAGilEOyHUG1pMWR2GOLE4uOdXrzEAoaktdm1sry13g1MxZDUlYisHoLVxJiSYh2rgsNUVQsQOwCsFNFeEWoohby3PFUL/2paOtqYRQXBf3LQWQp7OhhBCR0UNSgI1TdPmu+TTpqQwGnjqFOh8ti/ufDn6V1wQ8Y2AvaemEYyrjf5ir7wQ2ukcpQknSthXSYwz6vlDj0WlQV5p5SVx/p8QV3DvB7VqMFeW4muCBFndS7LAuB/ugPAJgOUObVfSK5RvqpBMMxBEWQ3CKQCcFCCToDL5QZT73TrgBkB3Pg9FqDV77rfGLFCOsFlyz65k2Xm0V/BUIqBHVpetZcvOqvKob6GG5YDW/Urc61RSILKs/nhjxKKzCEDs8c8fwBklUiRq2yMAAAAASUVORK5CYII=",img$z="data:image/png;base64,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",img$y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABb2lDQ1BpY2MAACiRdZE7SwNBFIU/EyXigxSxELFIEcXCoCiIWEkEbaJFEsFXk6x5CHksuxsk2Ao2FoKFaOOr8B9oK9gqCIIiiNj4B3w1EtY72UCCJLPM3o8zcy4zZ8AVzmo5s3UUcnnLiMyF/EvLK37POy58eBhhKq6Z+nx0NkbT8fNIi6oPQdWr+b6Go3M9aWrQ0i48oemGJTwtHN60dMW7wj1aJr4ufCI8bMgBhW+VnnD4TXHa4S/FRiwyAy7V05+u40QdaxkjJzwkHMhli1r1POomXcn8YlRqn8x+TCLMEcJPgiIbZLEISs1LZo19oxXfAgXxaPLXKWGII01GvMOiFqVrUmpK9KR8WUoq9/95mqnxMad7VwjaXm37cwA8+1Des+3fU9sun4H7Ba7zNX9Bcpr8Fn2vpgWOwbsNlzc1LXEAVzvQ+6zHjXhFcst0pVLwcQHdy+C7h45VJ6vqOudPENuSJ7qDwyMYlP3etT9GwWgrP+9tUQAAAAlwSFlzAAALEwAACxMBAJqcGAAACRlJREFUeNrlW1toHFUYnjm7my3rJs3s7DaJ1FoxtMYHS0Wo1fgg6IO9eEH7IJTqS2LVlnoHQRGEgrdijVYxffBWRLFYL7VEBR+s1kLViCAGW6tUsE3c2c092ezsHL9/uklmzs7sJdnZWfFAyXZm9sz5v/9+WVnyeCUSidZcLnctl+U1XJI6ZMO4hDPWgr/LZMYa6BmD86wky0O4Noh7f8iS9KvM+U+MsWPJZPKsl+eTvdg0Foutw587DFnewCTpcqdnDMOQQGDBZ4fnBnDvCDeMg+l0+jgu8boEAEQ3gctdOGg3DrzKC2Cx90kg1QtU9gOMkboAQFGUpTjUw2DLLvCwSarBglSMQX16DF3fMzIykvYLAFmJx7ugq7vxOV7svODcTwDpa3wegJQM8Gz2DOzC2Hhr6xg9ED13rjEQCDTKodAKHGi1xHkHqOwEkWtxO1Bkb82QpCeHNe11ek/NAGhKJC4NGsab+Njp8ogOIvo45++AW18ulEtLly5tBjA3Yp+tAOMmXAq5PPodk+W7YDBPeg4AuH4nz+V6oedRh9tpqEJPNpN5ZXx8PFlNsY9Go/GGhob74C12kclxUIsJSNl2SMMBrwBgMHTP4gCPOLx8Chx4RpblFzVNG/PYrUahPg/AdT4OJkQKDKUk7U1r2sPlqkS5ADTEVJWQ3VJomvkRHGgHxPwPqYarubn5YgDwMhiy2QGEQ2lFuVM6dSpTDQAawPlDeNEG4foMiH80lUr1SD4uVVXvh43Yg/OFhVt9KUW5tRQIpQCQwfn3Rc5D5M8FGNsMcf9eqoMVj8ev1HO5TyERFwpxw0eIF24vpg6BEsHN80C2S9j0FA+Frk8nk79IdbImJyfPhsPhD/FxA+yQOsc9Wb5sSSSiTE9N9VUsAWTt4ePfFYkPhUKdQ0NDg1IdrpaWlmWZmZmjBZEo53dBVd8uGwDy80zX+7FRo1XswflrR4aGTkt1vBA7rETM8K1VHXD2yWAgsBZxwm8Frs0JFApyrMSTwYPO31zvxNOCN/qTBwKbwPU540fuUuf8bSd6mYPodxVEeLD2MHgnitoLVeW1JLTY+0aSyX5kog8KhK6Dx7i3qApQYgPDcRLWI2H189CfjeUeJqVpco2Jl/FOt0TtY6jDzZZLqZyut1tDc7sEIKuzEk8RHgU5lXDCa0lw2L/Y+3aS/lu/jtziMUcVMPN5pLS2mwhvFxLheQVCpfsiBjgDGnbbU1O+g5KsAgComCHk82mK7Uu9xE3kEZzwWhBfSuXgtl+itNliEKMsGOwuBMAwugW56ik3sXE6BJA2D41/vhFPa3BwcAJ2bK/N8HHePWv/2GwNTwgespTSVnJIOgzEzbGS5Rfx88RkXzNzl/kQ8VIYyGusEnCH4Pb6FpLPI9CQq2kTqkE8rbGxMQ0SfkQw+FvmADCETA/Z1YGFcsxNEioFoVrEW/KCA0IRw3Ttslm3Nwxr7d2Ar4wvttjoRAAB4yYlXhI/6+WAQsqWAHJ+EaOmhZDw9C+W+FKGsdbEm99PpUaRE/8gXF7PqGMj6MbRarkuN3Vwc5FeEW9xed/YmC3Laxm1q4TnBqrpv51E3kkSvCY+L92/Cnagg1GvTkClqgCUYxhrQbwTc2EYVzJqVNoAyGbPeBHGVuoivUiq4N3+EiSxhUEMFOtF6th4lciUS5RXGSW11AQJiCEAZEusF2fbVX6B4GU6PTo6Oi5IRJhJ//PFIBa2ujk1Kv2q5HhdT2hqaooKKqAz+H1b0ENdWr+I9xoEoc5JKvAPuUFbiZta1LUk3k3nvQABHL9ICM0HyQ3aKj5mf77GxNeqqAIAVgsS8CejgSTBWXb4wfmF5g4Vrg4BkAFG01iCs7zOL7GvNHeoOA6Q5U5BAvplbN4GpP8W0mEVGeGwX5UcL6JDVVUbsSmlw0FLbnAxozk8GkWz2gYaS/GzjFWtoorA7RutxOPC72bVOO8ejggPb/WLeK/Ka0jytgr//2yuJEZDiDbjwNhNNJPjF/HVdpEIgGLYaKMAwME5AGgC0xxCnF8hcyDJR+JLfb8SwxgMBqkn2GAR8dPDyeQ3cwDQJXMC0+4jdtFAkp/EV8NFtrW10SDVLoH7vVK+XM8s7m+/kC7GaBrLb+IXaxinZ2Z2Cv3OCUPXey1lsvOLZm9p/FRA+XEaOHDb3E0MvUppy6ko28CJxZZDtZ8Qwt99rt1hIPOCZO+jReASXy52IJErXrfHy4kgLaLeIwx0Dmez2edsgFj/Q8EPzd4KtmATjaKVw5VazAaUk0PQUuLxbty8TQgGnqIukZD7FGaN0CuykOstX8wAyWtA7I//hSJHcyKxRtL149ZqF3T/xHA6TTTlXCVg9lkaPDZnb+elIKzncoeL2YN6WYqirAC1hwXipwKMbROJdwNAMqeuGdsuFBPaYCQ/p1G0eiU+2tqagFX+HEQtFwzfDk3THMv9roOS01NTPy+JRJqhI1db0kdV1/VbwuHw4UwmM1xvnGe53Fdg1GU2tTeMffBwu11rBKWqSIqqHhSNCUTq72AgsLlebIKp8yT2Audhuz5NpVK3OYl+URWw0mpOXUtSn6AOFwKEY82qep/vnIe1Nw2eQDy82RepWGxLMeLLkYDzq709rGjae7ABtxb4WsP4BH92UmpZS8LNIAd+vsDVzXKeiC9jXD5QnuNN5aanpz+gwWO8cJ1YZ0P6fE8kEqGs68eJiYmsl4RTbB8Khx/COz+AcbvCgSGk83fjzGWdQ14A8tsQIr8KNbjA4bZGA0k0kyMGHItdlNIiq9sunZ8ALUjV879auR86/0Yl+y4ockMOsErn/C1m8RDCmqGZnPxYypc0nLBAMaexvRuomJHP5xscDRWCHPLzbq6u6gDM2kKavYXffVpy+BGTZeVoMoOGE/L9+QHq0lLmOduro44NNS2obp8vXXdQARPfuaqEmg5TeAuA95Uydl4AYC5EhwqNn9IEpssvyaq+KEqlrI4Sm8WqWtWSFxo/NScwDaML3qLdE8o5P03FDMrnqzHHVFUArHuaQ4g0h2cYGxcNBue/UwGTanj5MlZ9/ni6mL+mzJIGkmgmh8ZSaDIDfxOwBcG8K83gc4p6ddSuoo4NNS1w67jX8cW/7UTXYK9/2wQAAAAASUVORK5CYII=",img$x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABb2lDQ1BpY2MAACiRdZG9S0JRGMZ/adGX4VBDRIODRYOCGERjGNRiDWrQ16LXezVQu9yrRLQGLQ1BQ9TS19B/UGvQWhAERRDR0j/Q1xJye48KSui5nPv+eM55Xs55DriiOS1vt4cgXyhasdmIb3Fp2df5jpsh+gnTndRscy4+k6Dl+HmkTdWHoOrVel/T0ZvWbQ3auoQnNNMqCk8JRzeKpuJd4QEtm0wLnwgHLDmg8K3SU1V+U5yp8pdiKxGbBpfq6cs0cKqBtayVFx4T9udzJa12HnUTj15YiEsdkjmMTYxZIvhIUWKNHEWCUguSWXNfqOKbZ108mvxNNrHEkSEr3oCoJemqSzVE1+XLsaly/5+nbYyHq909Eeh4dZzPEejch/Ke4/yeOk75DNwvcF2o+9clp8lv0ffqmv8YvNtweVPXUgdwtQODz2bSSlYkt0yXYcDHBfQtQf899KxUs6qtc/4EiS15ojs4PIJR2e9d/QMO/2gR3i+r3wAAAAlwSFlzAAALEwAACxMBAJqcGAAABZ9JREFUeNrlW2tv2zYUJWkpH7YsieUYaICi2P7/XyqwYeiHBvEjTryiqWNx99JixlyREimSsrYRcGVHNqtzeHhfJDnL3JbLJTsej0xyziR85nXNpBDqyuGKrZZwB+6/3cPvwd8EvF+tVlmfj+fotKqqEzAAJRzfqQGs0AQY713fk3DdbrejESBDyUHQapQ7wMQ27Jth3wnJ4A7w3gqZz+fqofBHgo3T6mb61K+vbLfbefNnw1R0gPdSgp7H3Gfk8D2q5HBQdmH/4YP62+XXr2w2mzFelqd+0CYYNoI2rbBZUYSCb2EqPH8cbisAhIQXjpZzlD5/Vpe9o4vr62tFDPbDh08r2XWzsEwJGUMCfvHw8sL2+3201E3iLi8v2cXFhfIWqcC7FBBMgrLU6MbgtVmvs8x7Tah2q3XjJgeA530EhJGAUgcCNv7GKKo9PDyo683NzclWRID3sfLeHU2oBT0zT93hvwk863PdTUTHhxqYKYCfLxadA+UkYH57a1rcqZPgHHluhObeBFyBpZVgaQPC5knLHj3GLQ6oLwGFO56fGglecx6xvDo8hrBKf3gCNVmDh0AXi0U3AZjYYE4emUVO0trrH2F47VYAyt4INTHCgx/8NjESvMHDgH6qyYBibmElQOXzVB5ABsTjv4cqoVos5Fjgq5Osrc+x3W7/FCR3QINoquCNAGmp3kBs/8vQ6QBWNykJNlIRPOQenbIvy/JnahCFkUaLdzk7oXq9Xj+HFlaaEVFM40NXFsMzFLzZlw94bPf393/RnIEbn4WWP3V7mNKGVpccvlamHHkE7gv+Dcvh0AqPVCXLGQkCQ0Py+dVqldQmuH4XAh7b8/NzS+G6QqX+rTnNcIcPGj6csBQtQklIBd6wZ7SIcSIACwzCUuCIaS4l+BrG1OCthIAC1NQ/kphfdtXwApXQqhw1hvEc4DebDbMNq5BUGglr+q7p4FJC7pGnyJTrzx222aaDTQljyL5lCFUtk/p/nr7Q02cYxwDvMoxCEslL6jMzKmFs8NS7qcoyIwo4tgshSZWQ8nuhjXo3pQAaAerlqnORkFP2T09PLUWMtZ452SaoLHChMmcbGgekaFdXV+0pQP0+LRiMCT43CXS6qylA3SAuUY8J3jXnc5BA8wFhc4P8DOBdJKQuqnBL0ie4JRU+x8gPzR2iAyFOAUdmgjGyD80dguMAmwKoYcA0kZaOxyxm+OYOoQ3XBGw+X+A+vL7S8diVnFRFlc4iD3zGnWbC5R7OBX5o7tBLAJV/81nY0kScBrgn51zgU7tIDIC4gxBFAEqBkqA2JAWSbNsfFF3JaXsL9QoxjAXdTgcKf2y24ApnJQgYWi6XvjKQ5gOmTmyMeMGcIl5KuLu7+6lrOgjT/dXt1HgfAj5nVmfrDwnpI+H7jx/f6Hon7jC1Bn5zcBWc5M8wNX7d7XZ/hIBnefcPef+fVVV9BBf65Z2RB/ljgbStAARsMKO9w8TAd/Xfeh4A+qW14kUqXu/uYjm8TjwK5yaBGj9cJXISgO2xf6fnVLbNBZGA09mUvpMAnSY6VoemtmfQiwTEMnPtPHdEYbYFkqlumOwlAQd0PWQP8/yf9XjpeE2pWZ9RL4OziNH7T2+V/d9vlhaxHaHE+mSWo+HS9ty+/SbIOxSxLKrDS2Bl8YHKssQ9OVmBQ2yP4e3bIY2O5/Q671CkkL2Otg4QSSIRGG3RgCO2YUqLWd0LgOeM+Zwh8iKhSD7nYVRKSKXVrtNmhGwBiK/MdfY20OhwFnhoKpnBM0fopqnH6ZqDPk2m1+pwdFFFvDl3pIIXQ96RFreThOiDk/pom8chpmRNz//AqWY9OJns6CwSoXZgdhx4jHdwUk2HwBOj6eXdG0E2x2mTkNGAxtdjhpPk2QMa05ApQnAE8SQogmqqz/q9aK7mvRwnxs32N2D2E/TuYxaGAAAAAElFTkSuQmCC",img$w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABb2lDQ1BpY2MAACiRdZE7SwNBFIU/YyTBBykUEbHYwoiFAVEQS4mgjVrECEZtkk02EbKbZTdBgq1gYyFYiDa+Cv+BtoKtgiAogoiNf8BXI2G9YwIJorPM3o8zcy4zZ8A3k9dN1z8MplV0YtNRbTGxpAVe8NNNB0HCSd21Z+en4vw7Pu9oUvU2onr9v+/P0ZbOuDo0BYXHdNspCk8Iz6wVbcVbwl16LpkWPhQecuSAwldKT1X5WXG2yu+KnXhsEnyqp5Zt4FQD6znHFB4U7jfzJb12HnWT9oy1MC+1V2YfLjGmiaKRosQqeYpEpFqS2d++4R/fHAXx6PK3KeOII0tOvEOilqRrRqoheka+PGWV++88XWN0pNq9PQotT573FobADlS2Pe/ryPMqx9D8CBdW3V+QnMY/RN+ua/0HENqAs8u6ltqF803oebCTTvJHapbpMwx4PYWOBHTeQOtyNavaOif3EF+XJ7qGvX0YkP2hlW/cxWf6XLNyeQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAJpJREFUeNrt1TESxCAIBdCw97+z2+1slQmgNHmv9guS0VwXAAAAAADAS8TDdauYq2Qna6WbyeSz2claWza92yObnaz1aACrcZXW4LVd3SsfGw7/v9fpw++oFZUBRGNIcfhtyGajFUg2ls1O1fqt/TRe3mhkd/+uy31+DjeWycVwD1sGMPH1T+55O4AoNlbJTdYCAAAAAAAAXugLTOAcJH5aTj8AAAAASUVORK5CYII=",img$v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABbmlDQ1BpY2MAACiRdZE7SwNBFIW/JEp8IqiFiEWKKAoKoiCWEkEbtYgRfDW76yYRsuuyu0GCrWBjIViINr4K/4G2gq2CICiCiI1/wFcjYb1jhATRWWbvx5k5l5kzEJ7IGZZX1Q+W7bvJ8URsdm4+Fn0mQjO19BDVDM+ZnB5L8e/4uCWk6k2f6vX/vj9H/ZLpGRCqER4yHNcXHhGeWPUdxZvCrUZWWxI+EO515YDCl0rXS/ykOFPiN8VuKjkKYdUzlqlgvYKNrGsJdwvHrVze+DmPukmDac9MS22X2YFHknESxNDJs0wOnz6ptmT2t6//2zfFingM+TsUcMWRISveXlHz0tWUmhbdlC9HQeX+O08vPThQ6t6QgOrHIHjthOg2FLeC4PMwCIpHEHmAc7vsX5Gcht9F3ypr8X1oWofTi7Km78DZBrTdO5qrfUsRmeF0Gl5OoHEOWq6hbqGU1c86x3eQWpMnuoLdPeiS/U2LX8/hZ/QGsUVrAAAACXBIWXMAAAsTAAALEwEAmpwYAAABDklEQVR42u2aQRKDIAxFSacnqNz/hNgjNF221qkIKAJ5f+eMjPwHiZmAc8i2pPL3tLV5SYPmq87tRgiUr1TXnsWY+ZVvQsB6CCCESILUAdQBhmUewP2gokEzxtUasxnahAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYUqwt7rz3i+eXLjvMz3m+1MBjmj6rKesueQiBHQAAAPxX7HR41KMxTocBAAAAAOBIAJKRmWuNKSuFC36pLY3J3gEj3BrTFAAWLhJLag7QUVd/a8X17Ni7yLyUJEHtBIRmx8OACTDqVQaO/10+5Yxt1YPx3MSmoxhPejHWGG2qtv9qjMYaorvqgF/zPannuVfTG32vK+uRIdIIAAAAAElFTkSuQmCC",img$u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABbmlDQ1BpY2MAACiRdZG9S0JRGMZ/amGY4VBDRIODhYRCFERjGORiDWqQ1aLXr8CPy71KSGvQ0iA0RC19Df0HtQatBUFQBBEt/QN9LSG392RghJ7Lue+P55zn5ZzngD1S0Ipm1zgUSxUjGg55lxLLXucLDly4GcOf1Ex9PjYXp+P4vMOm6m1Q9eq8r+3oTWdMDWw9wlOablSEZ4Qj6xVd8bbwgJZPpoUPhQOGHFD4SumpJj8rzjX5XbERj86CXfX05v5w6g9reaMo7Bf2FQtV7fc86ibuTGkxJnVI5jAmUcKE8JKiyhoFKgSlliSz9r7xH98CZfFo8tepYYgjR168AVGr0jUjNSt6Rr4CNZX7/zzN7OREs7s7BN1PlvU2As4daNQt6+vIshrH4HiEi1LLX5acpj9Er7c03wF4NuHssqWlduF8CwYf9KSR/JEcMu3ZLLyeQl8C+m/AtdLM6nedk3uIb8gTXcPePozKfs/qNw5zaBHJcPVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAADIUlEQVR42u1bPY7UMBS2PZYQotmdTMMhqFhKGsR23IN6F1pEg7bj5xZUnICSluEAXIBmnEkFQsomPId45bGcxEnsTJ4nT7I0cX7s73u/diaUNMhms7H2F2VJ+kgqhK3b9hBqu3CdJM5jMUobz+12O2s/dwWOXRQukwgeO/AuIhg5caFd2m/ynZHiHAN8aLsNG58Y+KSiMLQRwWwnYwDvaiEnEQOkQp3T4Ny0PyY75be3JNvvD7CZz+MhJ+CDUFvhVRQFYYw1Fj7qHnlNl3DMpt23KrUGQUyAlcZdNOsqR7EAWd/rawTz2GEtMWitYLMa7sOMhpIwh2egcQEzGPsAj4oAPZv4Ao9yMdQGXsULmSajJMAFfN8swWIDH6ULhAKPgoCQ4FEGQZ/gnSrBOe4N+AKP0gJ8gkdHgG/wzouhMXsCvlwoBHg0FhAKPAoCQoJHnQYXAhwspnRYFPEYtdrHbRYXWAhYCFgIWAhYCDhhGV0H5Hn+iDF2Qyh9UedgGmqy6yT5/xanLL+lafpMDu/DAkqjmYNWr5NUU+/aVaOUfqnBi4NJhgIvhdKnSZK8HPioA7zjXYCxz/WvxDpZ3+DvOKBfZxED9kK8BZN87zJpX+DlsGB9PychQNbV8rW0anJzRG/VNWn6OgQJlvv3MIfHMKf17LKAbxJs9wH456D5H7NNgxUJhHwYS0KD5i98gw9SB4B5vhpDgpbq/mqavwTwWzSFUE0C6UuCOl8UxR8I8/e0gBcEfNBKUBZEBSEfXUnQ+6Gwul9r/sJnwAtSCXZsmV/nUDwBy1e1Zn8BuIct12fQztTvkJqfbC2QCXGtLKEDPKnBZ7Xmz6NZDOkk2ERahpHqtmQimWw1KEkAJ/9kr6Yry8hgFfUkNHi9qKua2RFSoGy+aiIBRr4UQnyPfj9AkmA3kOnBH21DRKZIsIR34Pu/pwx4gwg4O/c/N5k6V5S+4avVAzjcHvODLdtncyUEortgoP/fHrtIbLNwgTkJ07XdxlSM2pfYedcNNoKwAzfSb3+tH+sv9q6FjosoxS5fjg7xf8wWYLo0HeI7GAloimX/ANBjieJDfrkhAAAAAElFTkSuQmCC",img$t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABcWlDQ1BpY2MAACiRdZG9S8NQFMVPW8Wi1Q46SHHIUMWhhaIgjlLBLtWhrWDVJXlN2kKShpcUKa6Ci0PBQXTxa/A/0FVwVRAERRBx8R/wa5ES72sKLdLe8PJ+nHfP5eUE8Kd1Zth9CcAwHZ5JJaW1/Lo08A4fRhBEHBGZ2dZydimHnvXzSN1UD3Exq3df1xoqqDYDfEHiOWZxh3iBOL3lWIL3iMdYSS4QnxDHOF2Q+Fboisdvgosefwnmucwi4BczpWIHKx3MStwgniaOGnqVte4jviSkmqtZ2iO0JmAjgxSSkKCgijJ0OJRLGSZl1t2XaPpWUCEPo7eFGjg5iiiRN0ZqlaaqtGukq/ToqInc/+dpa7Mz3vRQEuh/dd3PSWBgH2jUXff31HUbZ0DgBbg22/4K5TT/TXq9rUWPgfAOcHnT1pQD4GoXGH+2ZC43pQAtv6YBHxfAcB4YvQcGN7ysWuc4fwJy2/SL7oDDI2CK+sObf/JNaAQfxWcoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB30lEQVR42u2bzXKDIBCAw+ql6cnqpQ/Q93+f9gF60aan9GKwmkqHsXZA5Wd3YWcyySFO+D4WCLKKU+R4qush5u/DKfHIAlIXIFIDXs45eQhkAYlHiaUhTdMMcvgZniDcTE397Xb9vFweKQgoFfwU+ue1kFJ+AcDDf6J+RQKcqWRAv+cikyhqc4Ax71WPT73Pbg746Lpd/0uO7iVIrwIuNlJkBIyrhJddJBkBbdt62UIDp7Qf5xExL5PvLAXYwM+rxDM7AbbwLIeAL3gSAnzCoxfgGx61gBDwaAWEgkcpICQ8OgGh4VEJiAGPRkAseBQCPMF3JAQo+LV7e3vh9esGKd9M3xeppT2Kk6GYY/5PBiwb47sBmOCDZwA2eCsBVVW9Tg0fX63TsadNfLHgrQQIgBebHtza8+pQIyb81iFQc0n7YHMAdnivAijAexNABd6LAErwzgVQg3cqgCK8MwFU4Z0IoAx/WAB1+EMCOMBvEqAfOXOB3yRAHTlzgne6DOrwy3IW9gKWPa+Xs7AXQDHt9ThcJ7h2p8eiglPMdYF85oCpfvf+ble+OpDMAFNx8o7f7tELGHv2WhbF2SQGisJYv7soh+9JZICp3p565EdmsoDEQ8R+dpfSwUgeAlkAw/gGgdL3j4c6UpkAAAAASUVORK5CYII=",img$s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABcWlDQ1BpY2MAACiRdZG9S8NQFMVPW8Wi1Q46SHHIUMWhhaIgjlLBLtWhrWDVJXlN2kKShpcUKa6Ci0PBQXTxa/A/0FVwVRAERRBx8R/wa5ES72sKLdLe8PJ+nHfP5eUE8Kd1Zth9CcAwHZ5JJaW1/Lo08A4fRhBEHBGZ2dZydimHnvXzSN1UD3Exq3df1xoqqDYDfEHiOWZxh3iBOL3lWIL3iMdYSS4QnxDHOF2Q+Fboisdvgosefwnmucwi4BczpWIHKx3MStwgniaOGnqVte4jviSkmqtZ2iO0JmAjgxSSkKCgijJ0OJRLGSZl1t2XaPpWUCEPo7eFGjg5iiiRN0ZqlaaqtGukq/ToqInc/+dpa7Mz3vRQEuh/dd3PSWBgH2jUXff31HUbZ0DgBbg22/4K5TT/TXq9rUWPgfAOcHnT1pQD4GoXGH+2ZC43pQAtv6YBHxfAcB4YvQcGN7ysWuc4fwJy2/SL7oDDI2CK+sObf/JNaAQfxWcoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB+0lEQVR42u2bMW/EIAyFA7qla5Ol///HdUm6dguFKlQuBwnh7ADKs5TlTsrxPp6NAZ16H0czCMTXsijO90mNUw83DwC4OwAV5hZ37rYWoV6kAAAAAAAAAAAAAAAAAAAAAADcMh6CO63F7iwnkR2cUmqe57YcEIq3zyg4cWaapnYARM7rRjtLYupXY9ggaAHxzqKDtSgbAXdIkwBqqgK4QryP8J3OBe6xLjBVAFwpnjoh9rmDUJoOuhfxqXTwTiitCbon8WE6ROrCaQi6N/GxdFjX9XtzwWkIukS8/cHPmuKfnKD1W6kTdMnM2x/8qC0+VhNIPciGoEts7+nb75ro53cm4nCJ3L0ZkrqRvWSXRwokBZR9M9SzeJoOR82SziHYe5C6kA/A2cZB8E/PsXfh+zgqLt4+DgIl2cotsivEdizJlD0aZ84ymOy/G5nd5FhyJukQwHby8td60jW3hULpxP8Wu605O+vQrEaIQqDtZ20nePG+OStJz+xW+MkJpP2s4QQqvmTmizZDUSdsg7jSCVzii7bDHkK4PF5VEzjFFx+IOAip/lsSArf4YgCxZkl6iZQQ/zKAVJ/AnQ5S4lkA0Jog3Msv3OK5HBBdHZjj300TZxvOdjcoCYHrjlHMAT0HAAAAAAAAAAAAAAAAAAAAANwzFP47jBQAgFvHDyRnPtj60cBDAAAAAElFTkSuQmCC",img$r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABb2lDQ1BpY2MAACiRdZE7SwNBFIW/JIpioim0ELHYIgaLCKIglhJBG7WIEYzabDabRNjEZTdBgq1gYyFYiDa+Cv+BtoKtgiAogoiNf8BXI2G9Y4SImFlm78eZOZeZM+CfsoyC2zQIhWLJSUzGtfnUgtbyTIAQHQSJ6oZrT89OJGk4Pm7xqXozoHo13vfvCGZM1wBfq/CIYTsl4THhqdWSrXhTuMvI6xnhA+GYIwcUvlR6usZPinM1flPsJBPj4Fc9tdwvTv9iI+8UhPuFIwWrbPycR90kZBbnZqX2yOzFJcEkcTTSlFnGosSA1KJk9r9v8Ns3w4p4DPnbVHDEkSMv3pioZelqSs2KbspnUVG5/83TzQ4P1bqH4tD86HmvfdCyDdUtz/s89LzqEQQe4LxY969ITqPvom/Vtcg+hNfh9KKupXfgbAO6723d0b+lgEx/NgsvJ9Cegs5raFusZfWzzvEdJNfkia5gdw+isj+89AXPlWf0rTeiAwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAeNJREFUeNrlm2uOwjAMhDsWJ4De/4bsEfD+WGm3QqTNw54460hIBbWNP2ec2G3Alq/p4RhIDP/jgczwmRyghd9NQ0AbzkUEeAtD1MBAzIIf6VwdjAUbvqdTJUgWLPjWztQAQAlO0JZ7wgAeTnMIvOFrOlFSzFr0oz3Xw/qGrNi1shWB4Hv7HrJVAiYvICjm9EQNkjJf2WGiUgSFv7LHLERlW6+Zzk8IPPotyVO3nRKkYhuBG7JTiDl+yLpBssV8rQMQHN5UQp6TX/TQgqw8ehY2SmD5U5psydst0JJVM9urgVo1ogKmld+SGT6CA6bCz3bAdPiSAzQL/CwFWD/4HHYAFpU9VlPACLyyQ4CVx09Pu+XEEA0MD28FRBp5ZSiAqYJReDDmgH+zzrc6wEIFVvCUx/S1D0SUHK+0dxRiMLIMeHoq3PoqWo3A6XPHaP6NzX/vkOvuMa809JNj0OFc9xXq1jByq+wSc00pV9knWM0g+77/fjkeTzAOMxKlCApgQzfPAbUZngaGLucB98fDKr3F26ck8VD1AIzga64L+cpdnOCXaZIZ/swBKeBLDkgD/8kBqeDfHZAO/uiAlPBX9TxKNcJL/y75ej5nFk5uq0CajVKXD0UrKsTlQ+AoV9afF8PwfwNGBXNgWGrhCQAAAABJRU5ErkJggg==",img$q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABcWlDQ1BpY2MAACiRdZE9S8NQFIbfpkpFqx3qIMUhQxWHFoqCOEoFu1SHtoJVl+Q2aYQkDUmKFFfBxaHgILr4NfgPdBVcFQRBEURc/AN+LVLiuU2hRdoTbs7De897uPdcQMjqzHD6UoBhunYukxZXi2ti6B0BxDACAVGJOdZSfrGAnvHzSNUUD0neq3dd1xgqKQ4DAgPEs8yyXeJ54uyWa3HeIx5lmlQiPiFO2HRA4luuyz6/cS77/MXZLuQWAIH3FMsdLHcw02yDeIo4buhV1joPv0lYMVfylGO0xuEghwzSECGjik3ocJGkbNLMuvtSTd8yKuRh9LdQg02OMjTyJkitUleFskq6Qp+OGp/7/3k66sy03z2cBvpfPe9zAgjtA4265/2eel7jDAi+ANdm21+hOc19k15va/FjILIDXN60NfkAuNoFxp4tyZaaUpCWoKrAxwUwXASi98Dguj+r1j7On4DCNj3RHXB4BExSfWTjD603Z+Sp2ztrAAAACXBIWXMAAAsTAAALEwEAmpwYAAADGklEQVR42uVbC47jIAytESeY6f1P2NkjLCOqInmoP5g4BChSpLZJAT8/G9sQuDHtfr+Tv/9P6WZp/35+tP6lDsEyXgBg7z0eD3qAVsE9AWgU/s8cOQG+vr+bAOCAiK2Cn9CS4TnwGrTIWYAItw9voGmfo56DJlI1DnD38jx75qGxOvcZRwuuCV++V888zaCmLyUkvlc+S0BE6uZBtBMDKHjYbvnMzVG6Rz0bvbSaByWo+0frR0GQWCSZicSE0Kv93Fm5mAl10V/4PSkrSGpRkgrAUXoatWbq8yVA8ujfFQBOg56UbxXQCoIXACytvUHwBjkepffL+Q0PYGqQseaxw5WWyScDcmyPr6uEYOzdnT3YcTcxwMsBtsTlXv1aVoJwpv0bNH16tDl8FThTmwygXeYSBtn61YAmLn6YlgFW0Bg/UgueatMYWQ+AWRiFQZjSBOql6kwneWlF6MyaA8E+6EqHtUleEQUeMD2ofcJH1QRPS4cno7tp/NjoMGbSIljpL4EfPo3ybwzAOzd5aRC0DSOTllEgBEPykBSAlmzBkjkhILyWJLb2Vy7qP54heW89oGu/rgiEKskiRdGETyurBUr7L08L0sA9FdhpTYBaZopmpMKjBwjO+5KiuVD9xVYPSuzXTRdAtdQRc90TnyMIBxBetuHib+jQxjYgPNnQ68m3igOsjm0nEALl4Q2BzvIgRC3Qwaewciu5A9pzr4sM65nAQRYszYioxPzqQUXsDzJbOMZMDwAX6GQB6vM522WDStKzdYt1HlCzQNrBXZEROAxuDYS2YUGtrAwGmw1+SmsNhdMm2n87Wxha1/PdvH/xa8GQg69eEL3ufMBszg+zPBjD2jRwgmfavv7CxC7rvqbcgA89E4cKYQNfkCTlDt0XmGDZezNt1QmuGBgJwvNvjeE/t5Siy3ncq/f9LcJTrA1Wp7GAQ2SFJ0+ItGx5C0XQNJPmhYIuiG+Otm5P9QzQypwjpmSlPR4TNDoTr6iRA40+ak/l95QD1+RaemdIE96UDqMDCUuBYBW+lhM0O1VC4nQl/SkW1MJrcvwCJhH28gf87HUAAAAASUVORK5CYII=",img$p="data:image/png;base64,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",img$o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABb2lDQ1BpY2MAACiRdZG9S0JRGMZ/adGX4VBDRIODRYOCGERjGNRiDWrQ16LXezVQu9yrRLQGLQ1BQ9TS19B/UGvQWhAERRDR0j/Q1xJye48KSui5nPv+eM55Xs55DriiOS1vt4cgXyhasdmIb3Fp2df5jpsh+gnTndRscy4+k6Dl+HmkTdWHoOrVel/T0ZvWbQ3auoQnNNMqCk8JRzeKpuJd4QEtm0wLnwgHLDmg8K3SU1V+U5yp8pdiKxGbBpfq6cs0cKqBtayVFx4T9udzJa12HnUTj15YiEsdkjmMTYxZIvhIUWKNHEWCUguSWXNfqOKbZ108mvxNNrHEkSEr3oCoJemqSzVE1+XLsaly/5+nbYyHq909Eeh4dZzPEejch/Ke4/yeOk75DNwvcF2o+9clp8lv0ffqmv8YvNtweVPXUgdwtQODz2bSSlYkt0yXYcDHBfQtQf899KxUs6qtc/4EiS15ojs4PIJR2e9d/QMO/2gR3i+r3wAAAAlwSFlzAAALEwAACxMBAJqcGAAAAvVJREFUeNrtW01y0zAYtRQPadzpkEQ5AwcoXcCGHSdgxTFaTtA9tGy5BxumnemCbXoD9mwsJ6sYZlqLT0EeUiNZ/pHj2P40o3HGcWS99733SXJk4hnKYrHQnk+E2B4jzr1DKXPGtkdKiPGaMAy150c64EEQGBsS6hjHca1Ow31ePhuPf0yOjye/4viuTlsT1V+SQ4DEJOtms3lyntgi3oQCIGIrOEx3z0F7pEkFmBRB9y1XxthZFrwsM8au27APsUXf5J2q4EE/NzoClL0+rzg/d3U/m6oltlHqD92XWb/U9TwAXMLHoyRJfoJfTzTReDUOgueQE765uKfsv6ymnCa/G+lYchn1FDzkjlsJXiWrkxxJvnZJginA6fnGc4BMeAB+qWS/zk2woAyVmM6njF256oMMqCmoJKsAl9FXkV9W/X3ieddrzi+qev3h8dFbr1a519IijetqgchHKXiIbGwb7nTnpRKgHVGaOBiqZaXULvBGLCAjL0e2v6ld/IaOTIqM9abvgYRPRQCntUyhTYCHTtz8MxkZl5noGK67sJFQtVDH4E+V7Gd1ZnlGEubzj3X7mFULrSMfDfjborKuRAIhH1yQ4FwBKuHd1418GyRQB7J/kQXuAryNBFg7XB4EAUKIt02BN7TH1azpvea6dEK1PwI451+Ahe9Ngde0y+B+X4H4dzrwW1C0OCzfQd8eoih6s4+la84k6jCGwS4WJGDoBFhzgOtnA6gAJKBjFjA9cOiLNdACSAAS0K+yOy0WBRZFfh+jWmZtgBZAApAAJAAJQAKQgGGvBrN/Bz158Cg3IO3+Y3RI2+MqFoEKQAJKECAlL/ffpbXoBoku5YDWFyzpRsfBWCCbSNtMrJgDkAAkAAlAAoa+FhhWxDMvVfhl3rJACyABAyRgOpv1mgD5vsB/+2PDMOxlYtBh9VvqiKchvR0L6KKtY6qP0ZfYfdsPum4HWzBJlajX2Va/74mOqaSBHfwwWMn/XVZA1tKkine6SIApl/0BVV9uhgTVncEAAAAASUVORK5CYII=",img$n="data:image/png;base64,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",img$m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABb2lDQ1BpY2MAACiRdZE7SwNBFIU/EyXigxSxELFIEcXCoCiIWEkEbaJFEsFXk6x5CHksuxsk2Ao2FoKFaOOr8B9oK9gqCIIiiNj4B3w1EtY72UCCJLPM3o8zcy4zZ8AVzmo5s3UUcnnLiMyF/EvLK37POy58eBhhKq6Z+nx0NkbT8fNIi6oPQdWr+b6Go3M9aWrQ0i48oemGJTwtHN60dMW7wj1aJr4ufCI8bMgBhW+VnnD4TXHa4S/FRiwyAy7V05+u40QdaxkjJzwkHMhli1r1POomXcn8YlRqn8x+TCLMEcJPgiIbZLEISs1LZo19oxXfAgXxaPLXKWGII01GvMOiFqVrUmpK9KR8WUoq9/95mqnxMad7VwjaXm37cwA8+1Des+3fU9sun4H7Ba7zNX9Bcpr8Fn2vpgWOwbsNlzc1LXEAVzvQ+6zHjXhFcst0pVLwcQHdy+C7h45VJ6vqOudPENuSJ7qDwyMYlP3etT9GwWgrP+9tUQAAAAlwSFlzAAALEwAACxMBAJqcGAAACZpJREFUeNrNW11sHNUVvnN31xtt145nZxfbiL+KQHAfioIqpYT0oVJ5ICEUVPKAFEFf7AZIlLa0lZBaVaoUqX+o1DStGh7a0qhqRVRKoZEpUh8KhUi0BFWqsEhIUCqR2N3ZtWM79npn5/Y7w665e3d2/nbG3itZO56Znbnnu+fnO+ee1VjCo1QqjTYajbuEpt0uGBvXbPuTgvMRfF6jcT5A99hC1JmmzeHcLK5d0Bh7VxPiHc75G+Vy+VKS89OSeGihUNiJjwdtTdvDGfuU2z22bTMI2HHsct8Mrp0Stn2yWq2exinRlwBA6CGs8gQmOokJ35oEsHj2WSB1HKg8CzAW+gIAXde3YlJPYFmOYA2H2AYMaMUizGfKtqynFhYWqpsFgKYXixOw1aM4LnrNFyv3DkD6O45noCUzol6/CL+wuDQ6ukg35C9fHkylUoNaJnMDJrSdCTEOKXdDyB24nPJ4tmkz9p150/wlvWfDABgqlW5O2/avcbi7yy0WhJgWQvwWq/Vq1FXaunXrMIC5G885ADDuwalMl1vf5Jr2CBzm2cQBwKo/JBqN47DzvMvlKkxhql6r/Wxpaakcp9rn8/niwMDAY4gWR8jluJjFMrTsILThRFIAcDi6H2AC33B5+QpW4Puapv3ENM3FhMNqHubzVYTOJ7EIuQ5HydjTVdN8IqhJBAVgoGAYhOz+TtcsTmFCh6DmF9gGjuHh4RsBwDNYkH0uILxQ1fWH2LlztTgAGMDKv4AX7VHOr0H4b1YqlSm2icMwjMfhI57C/LLKpemKrt/vB4IfABpW/g/qykPlL6c43wd1/yfrg1EsFu+wGo2XoBHXKrzhT+ALX/Iyh5QPufkRkJ1QHnpOZDKfr5bL/2F9Mq5evXopm83+EYd74IeM9dXTtNu25HL66srKdGgNIG+PGP87VfhMJrN7bm5ulvXhGBkZuaa2tvZaBxMV4hGY6nOBAaA4zy3rDB40KKs9Vv6uhbm586yPB7jDTeAM/5DNAXO/mk6ldoAnvNcR2txAIZIjC08ODzZ/X78LTwPR6AORSt2LVV93fhQuLSGec5OXu6j+RAfDg7eHw3vL018YxoYK6vW+hXL5DDLRrymC7kTEeNTTBCixgeM4C+9RkuM87Gdv0MlUTHPDhe/2TsjzIszhPvnWhmVtk6l5uwYgq5OFJ4ZHJCfMZJLWhJDPP0z2L38ducW3XE3AyeeR0rZdBL2NwvCSBIFWG/OiP9H6Aw9wvRcc4CKuH21PTcUhSrI6AKBihpLPV4nbB5lQF3KSFOlhLlWhrlUihO2fUtosOcQ8T6cnOwGw7UnliVNBExs3EIC0owkb7RzVMTs7uww/9nSb4xNisuX/eKuGp5CHOqW0UVQzYcrLotQE6/X6L5zc5WOKeDMc5C5ZAx5Uwt50lHweRCNWnyB/L6rwNBYXF01o+CnF4e9fB8BWMj1kVyd6dVK9ghBSeF/Vgz87oRQxnNCuOXV725Zr7zZiZbHXYqObwARMNy3x4hVeAOB5geyOohxQqLQlgEJcz2nTQkl4zvQqvJ9jDANcL6rfNp9K5Qpy4n8pp+/ktGOj2MZrccfsoCGyCzg9qb5Cel5ve7Cm7eC0XaXcNxOn53ZT+W6aQIDJfz5RRQtiTop2v6v4gXFOe3UKKrECENUx+ql+WOHdFheO8SZOG5VtANTrF5OI4WEmHIfXd9UAIf6raOIIhxro8knasUmSx8chfMTVd7bUFA0ogADyLfLJ1nbVZoIQlyap48qVK0uKRmR5P1VzklJ9z8gAtWirm9NG5Wbk80mqfmsMDQ3lFROw0oj7RHrWt5hol5Y0LcJK+U6wh8ywZ+GbqfCgYgL/ozDYVuKmLeogDtXtnFcNYBNCnls+cL1CzWcpDF5QjGx7D+9wBaGb8H48PwzXDwjAdkUDPuDUkKQEy/Ee39MGgpfwQeYcc0FlXAFkhlM3lhIsPxdkYlE0oYvwws/u4yqvIe3frWjAGQ0PHwMj+lBJhw1khPMxVGe6Oq+gqh9Xyd0wjEG8jNLhtJQb3MipD49a0WTfQG0pQQhJAPsUEa9pMUcRWu27ZeFx4n2natwMD6eUmw+E8S0+mhI2l/cMeVFBQJJ3QPn/L+slMWpCbJsB5/dQT04IahoKBC9QwlaMAhKgAia4VwHg5DoA1IHpNCF+PDJOQ1I4fh4IBB+N0IJGizCOMZ1O057ggKTi5+fL5dfXAXDskTow22PEEWpISgKEsKoftbxGY2xsjFjuEWX1j7d8EJfC37NKuligbqwImVoU4uJLdaNWm1fX1g4r+53LtmUdl8pkHw3qvaX2UwXlJ6nhwCcU9gxCUKoblhIXCoXrYNrfVujvsa67w0Dmx6x9Hy2HkPhM2AmFASEs1VXNwYsbQNWnlIbO+Xq9/sM2QOR/iPxQ763iC+6lVjQ/r6yqYosneAkYlee3hPYSXi8WJ/HwBxQy8F3aJfKL4RzCkIe8U/piDUjuwoTf7qHYIZJKctQxXCrdzizrtFztgu2/NV+tkkwNXxKDyd5iNRrUJPUJ6QGXYE+7qAeH9fHQdf0GQU1SjF0nzX0lxfkdpml2VLx5F9WkHyYcVIoJY3CSr1ArWr8Knx8dLUHNXpGFbzq+Q27COwWgruFjZeXfW3K5YajIZ6X00bAs64vZbPblWq02328rzxuNv2Ghbmsze9s+hgh3NGpay3XDOKk6E6jUh+lUal8vPiF2m7ftl9WVh+96qVKpPKDava8JyLI6XdeMTSvmcC1AeGPYMB7b9JWHt3ccniI8otlfK4XCfi/hgxOWbduyumn+Hj7g/o5Ya9t/xsdhSi03UnCH5CDOd4S61sqT8AHa5VPBAm+lsbq6+jw1HuOFO9U6G9Lnr+RyOcq63l5eXq4nKThx+0w2+3W883k4t0+7LAjZ/Jcx50Dz0CIg/zAo8s/lECkNkxqSqCdHJRy9DkppkdUdZB91gHZw8OavVh6Hzf8qVBISkdTcagnxGy5FCGWsUU9Osy3lVWpOiKjm1Lb3BSpmNPP5AVdHBZKDOP9wt1AXOwAtX0i9t4i732MuP2KSRoM6M6g5obk/P0O7tJR5tvbqaMeGNi2obt8sXY9TARPf+YyPmc4TvQXAx/ycXRIAOAPZok7tp9SB2eWXZLEPSmkpq6PEpldTi42PU/up04Fp2xOIFtsSkVyI81TMoHw+jj6mWAGQn+k0IVIfnm3v7RkMId6nAibV8JplrP788bRXvKbMkhqSqCeH2lKoMwOfJfiCdDOU1nBcob062q6iHRvatMCl00nzi/8Dx0Tcgl7ehnwAAAAASUVORK5CYII=",img$l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABb2lDQ1BpY2MAACiRdZE7SwNBFIW/JIpioim0ELHYIgaLCKIglhJBG7WIEYzabDabRNjEZTdBgq1gYyFYiDa+Cv+BtoKtgiAogoiNf8BXI2G9Y4SImFlm78eZOZeZM+CfsoyC2zQIhWLJSUzGtfnUgtbyTIAQHQSJ6oZrT89OJGk4Pm7xqXozoHo13vfvCGZM1wBfq/CIYTsl4THhqdWSrXhTuMvI6xnhA+GYIwcUvlR6usZPinM1flPsJBPj4Fc9tdwvTv9iI+8UhPuFIwWrbPycR90kZBbnZqX2yOzFJcEkcTTSlFnGosSA1KJk9r9v8Ns3w4p4DPnbVHDEkSMv3pioZelqSs2KbspnUVG5/83TzQ4P1bqH4tD86HmvfdCyDdUtz/s89LzqEQQe4LxY969ITqPvom/Vtcg+hNfh9KKupXfgbAO6723d0b+lgEx/NgsvJ9Cegs5raFusZfWzzvEdJNfkia5gdw+isj+89AXPlWf0rTeiAwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAaNJREFUeNrlm0sOgzAMRHHEEbj/CbmDq7Ko2opWxBk79pBNuwCTN/4lCshSc+jbfxkxJMXhhzmEAH6IRUjgzTxCBG9iaoXhBSBW+gi4Aq8jbELiebMIQhL2ZhGEBN58rxDBm2wIGXy3LSGE77LZSOEv399I4S8viORm8GlqQDR8qjaYBn5GDZie8zMjIEXOzxIgJXyUAGnhIwRIDe8tQHp4TwFKwHsJUAbeQ4BS8GgBysEjBSgJf2pk27bjd993evjnWL/B7+J5xGaoPPxLAIP3KeCtEUADfxg+8/6fAkgF3xsBdPCnAvzwPiX8Rxsk8Tz8bDAzPOStkdUw8dnwipxf73l7NnjxqgG6+AwFpSKsQDYQQEl49EqwHPw/g8iXEhHwbmsCj91gGfgeAQSYDqneS2oArym4jWqkWM2hZmgV+F8PUcM1iLDXGWnSgMKhcj60RvTsBTwLni6ThjhOxgIf3iHWIFFTwp89VIPAU8BbIqDiV2bDAngfoU8VVYInqdkiKmpTolnTCXEuUBbeskTtTZ30RTRqpZa2eyA/R6FvmZTjAXQIhaMv+ge0AAAAAElFTkSuQmCC",img$k="data:image/png;base64,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",img$j="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABb2lDQ1BpY2MAACiRdZE7SwNBFIW/JIpioim0ELHYIgaLCKIglhJBG7WIEYzabDabRNjEZTdBgq1gYyFYiDa+Cv+BtoKtgiAogoiNf8BXI2G9Y4SImFlm78eZOZeZM+CfsoyC2zQIhWLJSUzGtfnUgtbyTIAQHQSJ6oZrT89OJGk4Pm7xqXozoHo13vfvCGZM1wBfq/CIYTsl4THhqdWSrXhTuMvI6xnhA+GYIwcUvlR6usZPinM1flPsJBPj4Fc9tdwvTv9iI+8UhPuFIwWrbPycR90kZBbnZqX2yOzFJcEkcTTSlFnGosSA1KJk9r9v8Ns3w4p4DPnbVHDEkSMv3pioZelqSs2KbspnUVG5/83TzQ4P1bqH4tD86HmvfdCyDdUtz/s89LzqEQQe4LxY969ITqPvom/Vtcg+hNfh9KKupXfgbAO6723d0b+lgEx/NgsvJ9Cegs5raFusZfWzzvEdJNfkia5gdw+isj+89AXPlWf0rTeiAwAAAAlwSFlzAAALEwAACxMBAJqcGAAAA0dJREFUeNrlWwmO5CAMjBEv2On/v7BnnjDeZhUkixgfQELIIkXqzgG4XD64YKuU1+vF3v9F3Dzl5/vbVX9PewGg+uz9frP3wduxskMVAdHSlgeImgB/vr5MANTqid6OGAoK92GbXLKcGYgwuH7sfH55iZr2a9TrBAmkdjxsrPkYrZ70LLUZBwpes3vUQCjbSv+5zpf05YSkz/JvCYjAPRykdZCcX6vtWjTrqTOeZPtgZMIQQDTFSUwIrdpPlY2IHFqnRxauzrDNKzhKwz2hPFxA/22UL7AI6AVhJgOGULrXVOJoRK8UvhY2c4zXwuQ/BqTcnl53FHB09KCgTDeBGsPOYl5pNuHJmr7ECVobKqnXo+GRoIWRdmUNU/m9VhBGmkeYaecjtcy9Lw2oLgWgFq8/93BPpNjrrDR5ehRwJDBIQDqFlXGG8C3ffDqMwrfQCkLs7fBVmaLSD2wF4w5jAahcbpB306qaDAfi5SZAhfl0SJoqB6pdmt9bTWYTpt1cANxlQLSDAJY5hV1g1TSWHg5z5qL4iQNgkU4rJ9oI2gZrsjEJiEx70VSSj/i8BwcG5I8lBBWAblO0PlJHGYzCl0B0aarQWjVR2jUJLSGucKTDw2BTZrYLBVR4ia4EHI+tm/xEdpKB0z7pJAidw22tYosCOcxkzaT/QrzGM+21IW3WzAVcY4Fi4hFmaN0DAuMzDiXtJ6D7CMIIGq1W6ORvaNDGY0BIV2ik5CNAYBlgsfMngRA4D+9IdJYHIQqJDmSvSUseO5Clp+Fr/5ebQCcLlmZEVHJ+0NYLqT9IbKkx5vYA1BKdJMCoFZ0losCIQc+yJsCxgNuadsMJEbvGSRpsTYQew4LDstgHjOpo8H8p1lQYH6L9w4auYI3nT/P+2a8FxxgcFwcBe0zgUc6Psjw401q8sINn2r5+YOIpcV9TbqD7e5hNhfAAX4CScmNHpbCA3auHt1QnuGJiJAhfPzVGP7ZMRe9bVuCsjY5nCM+xNnidxgIOsSo8e2DCsuQtTILinTQvTOiCeHLUujzV0oCVOT2m5KU9bRM0OjNH1NiGZm21V84LgybX0itDmvCu4bB19+YKiyKS8KWcoNmpkhLjTPpzLCiF1+T4C+eX+V1keq0EAAAAAElFTkSuQmCC",img$i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABb2lDQ1BpY2MAACiRdZE7SwNBFIW/JIpioim0ELHYIgaLCKIglhJBG7WIEYzabDabRNjEZTdBgq1gYyFYiDa+Cv+BtoKtgiAogoiNf8BXI2G9Y4SImFlm78eZOZeZM+CfsoyC2zQIhWLJSUzGtfnUgtbyTIAQHQSJ6oZrT89OJGk4Pm7xqXozoHo13vfvCGZM1wBfq/CIYTsl4THhqdWSrXhTuMvI6xnhA+GYIwcUvlR6usZPinM1flPsJBPj4Fc9tdwvTv9iI+8UhPuFIwWrbPycR90kZBbnZqX2yOzFJcEkcTTSlFnGosSA1KJk9r9v8Ns3w4p4DPnbVHDEkSMv3pioZelqSs2KbspnUVG5/83TzQ4P1bqH4tD86HmvfdCyDdUtz/s89LzqEQQe4LxY969ITqPvom/Vtcg+hNfh9KKupXfgbAO6723d0b+lgEx/NgsvJ9Cegs5raFusZfWzzvEdJNfkia5gdw+isj+89AXPlWf0rTeiAwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAbhJREFUeNrtWgFqwzAM9Jm+YM3/X5juCdPooFA8Z7MdSZbkCEohtFi6O8lSUEqXXba0waBPpOkfDAev4uPNcOBLpADN9hOOWEcUAKjRJ5V6AEPBY0ZRhDHWW/8HTwDQSR9EQYAxyauDAKOsq4EAw6yrgAAngYuBAKNyV5sZ4IR1MSXAafBsIMBx8CwgZOaucsZscerMbMEJofNJCgBKNm0IhByA/VMg5CDsD4OQA7E/BEIOxr7qLYCVAAjJPncj5LE4NgFADuVPlwKYAPDIflfBjqgA4lJAFPaXrwHgAgAR0ckr5/8KKYCrBvxjt055/UL0435Pn49Hqj3ntKMz3p5X5b9t28/3vu/dCmguemWw3MEPnoESiBcYowroclDCOM4oFRGlBgyP673LCXACAErGa/ZUQfhb4Kj4RboG6Uw9GNnPcbteW0uH/P6w8oNQs38tHTCAMDyyf0Ty8q1wS3NBDZ+ZChj24xk7BmUmMplx3v/cTmmxDMn8r/YBjf01Jkm6J90glQJW1CFCkoVl6fAAaIBkYlV2Fkgh31bbKhxl+/hFdtcFMtA8Cl+tcAsAf71RsW6efVezb/4DdiZjsxv1AAAAAElFTkSuQmCC",img$h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABb2lDQ1BpY2MAACiRdZE7SwNBFIW/JIpioim0ELHYIgaLCKIglhJBG7WIEYzabDabRNjEZTdBgq1gYyFYiDa+Cv+BtoKtgiAogoiNf8BXI2G9Y4SImFlm78eZOZeZM+CfsoyC2zQIhWLJSUzGtfnUgtbyTIAQHQSJ6oZrT89OJGk4Pm7xqXozoHo13vfvCGZM1wBfq/CIYTsl4THhqdWSrXhTuMvI6xnhA+GYIwcUvlR6usZPinM1flPsJBPj4Fc9tdwvTv9iI+8UhPuFIwWrbPycR90kZBbnZqX2yOzFJcEkcTTSlFnGosSA1KJk9r9v8Ns3w4p4DPnbVHDEkSMv3pioZelqSs2KbspnUVG5/83TzQ4P1bqH4tD86HmvfdCyDdUtz/s89LzqEQQe4LxY969ITqPvom/Vtcg+hNfh9KKupXfgbAO6723d0b+lgEx/NgsvJ9Cegs5raFusZfWzzvEdJNfkia5gdw+isj+89AXPlWf0rTeiAwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAa1JREFUeNrtmoFqAyEMhv2lT7De+z/hdY+wjA4GxXkjphqTaKAUpOWSL380eqa0bdvSBoM+kaZ/MBy8io83w4EvUQI02084yjqiACCmTyrzAQwFjxmTIoxlnfs/eAJAb/owFAKMSV4dAoxmXQ0CDGddBQKcBD4MAozKXW3PACdZH6YEOA2+G4TsvL2GsCyHAMCkvcXUZZCMbKvFE6PFIzFVCNEANEOICKAJQlQAbAg5LW4bwAawjmElALQVsAHwlvu8svw5AChNfHE5uwRIStWL/PckGBAArQ6gebO3fAncGuX1h+jH/Z4+H49UG+9pV894Ga/K/ziOn+/zPJsVwD4rKIPtHbzwGShB/MKQKqDJwRHW4xmlIqLMAeI+pfVyApwAQJnxmj1VEH4VuJr8Ii2D9M58ILmf4/Z6ba0c8utg5Qcej83RUg4QEIbH7F8leflWmNNcEOMzUwFiP56xQyizITuznut/b6e0soyR9V/tA5j9NSZJuqXcMKoErKhjSJIsXJYOD0ADkomrsrMgRb7kYaRuyvbxi+y+J8kAeyu8W2EOgP9OVKybZ9/V7BsoanMeq391+AAAAABJRU5ErkJggg==",img$g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABb2lDQ1BpY2MAACiRdZHNK0RRGMZ/M4gYUSwk6S6GKFOiZKlRZoPFGGWwuffOnRk1M273zqTJVtlYTFmIja+F/4CtsqWUIiXZ+Ad8bTRd7zFqJHNu576/nnOet3OeA/7pjJl164chm8s70UhYW4gvao3P1NNDO4P06qZrz8xNxag5Pm7xqXoTUr1q7/t3tCQs1wRfk/CYaTt54Qnh6bW8rXhLuNNM6wnhA+EhRw4ofKl0o8JPilMVflPsxKKT4Fc9tdQvNn6xmXaywgPCwWymYP6cR90kYOXm56R2y+zBJUqEMBoGBVbIkCckNSeZ/e8b/vbNsioeU/42RRxxpEiLd0jUgnS1pCZFt+TLUFS5/83TTY6OVLoHwtDw6HmvfdC4DeWS530eel75COoe4DxX9a9KTuPvopeqWnAf2jbg9KKqGTtwtgld97bu6N9SnUx/MgkvJ9Aah45raF6qZPWzzvEdxNblia5gdw/6ZX/b8hco4WgdZKtgqgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAhtJREFUeNrtW21uwyAMjREnWHv/E6brDrDGC1MzZQiCCWAMwVL+NCH2e/iLQGHyyP1+R9fvC+IkVRSA9948z86bQAXeOgE+IoAKvBcCbCLUdHGB0Oz7YidFVn22jiLg3noOsWlO4NzyJhaOiFCu2e8BPDXhXyIHGE/whZmWPvt2voiR79dr+no+/2GzPV6XNCBHgnOV3WVZJqWUt+xtY8wzIdEtu3aOnkSnzmCqh8Q2OgY0ZWazEVBbPh+Pw/sft1uS18D6ArQUUpKg1H44aLuN94wvoWCHibbt8msBVcLNJIdAdBL0ZHmyIlcVObsYOkp4W7K0nwkl0WZCgAKeKwS6Ad8EASXBN10FcoAfjZDxAMNkJJtdNULboN/LZif0vNCL4gF/FzgGdR0Ctu26oKJuW+HLrwUGAYOAjuRsEuSqAiDRAzhLII4QEEgAZw8AUnPAaIQGAb0QsP/iErvL0qLYGPVVgPtI0JdzeWtLXcccLRtJcBAwCOifAOqR2RbFhW0clfUx09thSR9GHRrQOhGhkIYzsX90PG23T5+VuPW9SOlaqX1NkePy+y22zeCc4G0dWb8HbIzkrALG8FRPyEmkK6S9Z4VzEZFCQk7w5P8MZRAM5Rvm94TLoEASkMvekiXuLAjktLV0jY8Fg9x2cjQ5VFBYw0auLi8EDmvZx9nmokTbuPt8lGZXjYUOSrKp5koPBdlSlYSqX6B+AGDuGPLVCsLeAAAAAElFTkSuQmCC",img$f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABb2lDQ1BpY2MAACiRdZHNK0RRGMZ/M4gYUSwk6S6GKFOiZKlRZoPFGGWwuffOnRk1M273zqTJVtlYTFmIja+F/4CtsqWUIiXZ+Ad8bTRd7zFqJHNu576/nnOet3OeA/7pjJl164chm8s70UhYW4gvao3P1NNDO4P06qZrz8xNxag5Pm7xqXoTUr1q7/t3tCQs1wRfk/CYaTt54Qnh6bW8rXhLuNNM6wnhA+EhRw4ofKl0o8JPilMVflPsxKKT4Fc9tdQvNn6xmXaywgPCwWymYP6cR90kYOXm56R2y+zBJUqEMBoGBVbIkCckNSeZ/e8b/vbNsioeU/42RRxxpEiLd0jUgnS1pCZFt+TLUFS5/83TTY6OVLoHwtDw6HmvfdC4DeWS530eel75COoe4DxX9a9KTuPvopeqWnAf2jbg9KKqGTtwtgld97bu6N9SnUx/MgkvJ9Aah45raF6qZPWzzvEdxNblia5gdw/6ZX/b8hco4WgdZKtgqgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAhRJREFUeNrtW1tywyAMtBhO0OT+J3SaHqAxMZ2446qINwQBmvFPbAy7rB4YAgth1+tVmX7flFpaNQFA3lvX1XgTfIFzJ4AiAnyB90IAJkIsgxu4Zp/ynRTb+8N9FAH36seKTdYEXttexIKNCGGa/R7A+wb8IWKAVgLlZrL12cfxIsS+H4/l637/gw0rXpYcQI4AZ0q727YtQggy7R1t9DMuk5ylnaMmkakzmKqQ0EJHg/aZ2WwEvNs+bzfr/Y/LJUk1sL9AoQ59gmCr9bBz7BhvjJZUw4IJHtvwawFRQmYtu0BwECSivHdHpiwSuxiyBbwjWOJnXEGUjQv4gK/lAt2AZ0FASfCss0AO8LMQ0grQTAay2VUhdDT6uTA7rucbvXwU8HuBoVHXLoDHLgt21G0pPPxaYBIwCejIYoNgrSwALSqgZgpU0wUaJKBmDQCtxoBZCE0CeiHg/MUldJeFo2GMchTgFAlyOMmjLXUZcrRsBsFJwCSgfwJ8j8xyNBO2eVSWYqa3w5IURulqwJ0Il0tDjO+fDhr9Iwfv0xt2nZJijKtq9a1rko7Ln7bTlAk8ATwZvOW9+T44uJSAT3PsMwKeg8uWXWwqcCkAuzR5VpgIGjHjbSKtev9nKAIMJIB/e4CFDDMKHIGXLITYgM/9PYAV8JwuUKofdgpgBbzGYohFCS1HBV5KAewWTnJU4KkDVz2A1/YE9TAKPpdsqQcAAAAASUVORK5CYII=",img$e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABcmlDQ1BpY2MAACiRdZE9S8NQFIbftkpFWwrqIOKQoYpCC0VBHKWCXapDW8GqS3KbtEKShpsUKa6Ci0PBQXTxa/Af6Cq4KgiCIoi4+Af8WqTEc5tCi7Qn3JyH9573cO+5gD+tM8PuSQCG6fBMKimt5tek4Dt8GEQYQ5iSmW0tZRdz6Bo/j1RN8RAXvbrXdYyBgmozwNdHPMss7hDPE6e3HEvwHvEwK8kF4hPiGKcDEt8KXfH4TXDR4y/BPJdZAPyip1RsY6WNWYkbxJPEUUOvsOZ5xE1CqrmSpTxKaww2MkghCQkKKtiEDgdxyibNrLMv0fAto0weRn8LVXByFFEib4zUCnVVKWukq/TpqIq5/5+nrc1Me91DSaD31XU/x4HgPlCvue7vqevWz4DAC3BttvxlmtPcN+m1lhY9BiI7wOVNS1MOgKtdYOTZkrnckAK0/JoGfFwA4TwwdA/0r3uzau7j/AnIbdMT3QGHR8AE1Uc2/gDt82gCvNGYhAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAcpJREFUeNrtWwFuwyAMjBEPWNf8/4XpugesoWMKUppBYidQ5cAnVZWaRtGdDxscoC6Bvu9d7PfRue6sMETJa8MwRC8Slzi6ACkhiEu8FgGWQpiucdBW9FNj5wiWzyvxjOk5/muVm30n8Xfjl8NfkNeEMLHo10Cem/CbyAHeCZMb/sGePfqTfXfh5/Hovu/3F25Lx9ujiURad6WIld1xHDtjTLLshXv8f7Zgka2dY04ClQNCxDmR5eL0Dvi63Vavf16vh1xjzzy13YKUPPQQWFaDHOShBJjX8VzkIRdDa+RDvvBlskoBOOSlVcLURr7KIVCKPIQAJclDJsGc5FkzwdBUqJE8pANykocTIDd59mKI2zIv0Q8oSR7GAaXIQwhQkjx0GVQBGI5xjEWRrTGqkmGjQ0AFUAFUABVABVAB2sXmRMi3pEbnSDLJyNm3h3MAEvnsAqCRZw0Bb/l5Q2THjg1qaghoFVABVAAVQAVQAVQAFUCCI9thxYSJXj5WcspCHaACNNgP+LhcTr+gySqAX/nNX2nP99ujI/aaX3NAbAPDkQ0RSNFfPTUWbkA/QLUVTNoT9RpOj+rJ0aUDJE5AdkDy8LRECEQBUrnsCeUexwK5uUFRAAAAAElFTkSuQmCC",img$d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABb2lDQ1BpY2MAACiRdZE7SwNBFIW/JIpioim0ELHYIgaLCKIglhJBG7WIEYzabDabRNjEZTdBgq1gYyFYiDa+Cv+BtoKtgiAogoiNf8BXI2G9Y4SImFlm78eZOZeZM+CfsoyC2zQIhWLJSUzGtfnUgtbyTIAQHQSJ6oZrT89OJGk4Pm7xqXozoHo13vfvCGZM1wBfq/CIYTsl4THhqdWSrXhTuMvI6xnhA+GYIwcUvlR6usZPinM1flPsJBPj4Fc9tdwvTv9iI+8UhPuFIwWrbPycR90kZBbnZqX2yOzFJcEkcTTSlFnGosSA1KJk9r9v8Ns3w4p4DPnbVHDEkSMv3pioZelqSs2KbspnUVG5/83TzQ4P1bqH4tD86HmvfdCyDdUtz/s89LzqEQQe4LxY969ITqPvom/Vtcg+hNfh9KKupXfgbAO6723d0b+lgEx/NgsvJ9Cegs5raFusZfWzzvEdJNfkia5gdw+isj+89AXPlWf0rTeiAwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAMtJREFUeNrt2kEKgzAQBVAjnqDm/ifUHqHpsigKgkYa5/2dWRjnOQkE0nUiEjlpZ7xEqTcFKn6z5j76EggPMJzYJ1pJ0QEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACB4hrMveI1j957nzfErszfH1vjtHbAu9uria84x1PrAGqkxR/g94Mg1uafdEXJNDgAAAAAAAAAAAACAY6fBogMAxDoOP7nt01GARXLOi+dP+V+fPv1KmqbJEjgNsP77LaXlb78tX1rgGEFVOtioAAAAAElFTkSuQmCC",img$c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABb2lDQ1BpY2MAACiRdZE7SwNBFIW/JIpioim0ELHYIgaLCKIglhJBG7WIEYzabDabRNjEZTdBgq1gYyFYiDa+Cv+BtoKtgiAogoiNf8BXI2G9Y4SImFlm78eZOZeZM+CfsoyC2zQIhWLJSUzGtfnUgtbyTIAQHQSJ6oZrT89OJGk4Pm7xqXozoHo13vfvCGZM1wBfq/CIYTsl4THhqdWSrXhTuMvI6xnhA+GYIwcUvlR6usZPinM1flPsJBPj4Fc9tdwvTv9iI+8UhPuFIwWrbPycR90kZBbnZqX2yOzFJcEkcTTSlFnGosSA1KJk9r9v8Ns3w4p4DPnbVHDEkSMv3pioZelqSs2KbspnUVG5/83TzQ4P1bqH4tD86HmvfdCyDdUtz/s89LzqEQQe4LxY969ITqPvom/Vtcg+hNfh9KKupXfgbAO6723d0b+lgEx/NgsvJ9Cegs5raFusZfWzzvEdJNfkia5gdw+isj+89AXPlWf0rTeiAwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAZBJREFUeNrtmlGOwyAMRDOoJ9jm/idM9wjrzVZaKWpDoBI2YzBSf6oqeB5jjGmWZfKBDnMKU0wgEd0tPpAKN4sTDsSrxgqyPDffH2AoHp2eYwqgddDqEEAs3gQCyMWrPz85KbHUZVA6VxewOsDFSOTWV392UrAkW3Nl6gCL5grMKSDsK94aAAhSIKpAACADIF7yvxUAeM3/SAFFAOIltRKLFXvNqZkCwr76sQc0BgBv9rdwgDDbP1Ig2uFwQAAIAI46QZU5wgEOdmzEHuAEgOV/BMJk0VxAFu8eQA3Auq6nlH/k/evvx+Ptu6/7van6mjkS8jy2bUMVgJzwKwCvAbYWXzvHFYAcCNQKLwGg2NBQnxH/IKavAiitfi53vIySttuowo86dgjZ0okzQqOIP7ggW0qn2AP2BX1+sifB4w9GW/2Ss3FiC4zshteUjzK4n6jk7Jg5w/g7TWLheNNr2AsRfgBajYunFOh1qdG9BYgUCAABIADcPuymnsPLrVCuAQoHXABAafWd3gNM0+x9PH4BvDJ3ZJJMpIIAAAAASUVORK5CYII=",img$b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABb2lDQ1BpY2MAACiRdZE7SwNBFIU/YyTBBykUEbHYwoiFAVEQS4mgjVrECEZtkk02EbKbZTdBgq1gYyFYiDa+Cv+BtoKtgiAogoiNf8BXI2G9YwIJorPM3o8zcy4zZ8A3k9dN1z8MplV0YtNRbTGxpAVe8NNNB0HCSd21Z+en4vw7Pu9oUvU2onr9v+/P0ZbOuDo0BYXHdNspCk8Iz6wVbcVbwl16LpkWPhQecuSAwldKT1X5WXG2yu+KnXhsEnyqp5Zt4FQD6znHFB4U7jfzJb12HnWT9oy1MC+1V2YfLjGmiaKRosQqeYpEpFqS2d++4R/fHAXx6PK3KeOII0tOvEOilqRrRqoheka+PGWV++88XWN0pNq9PQotT573FobADlS2Pe/ryPMqx9D8CBdW3V+QnMY/RN+ua/0HENqAs8u6ltqF803oebCTTvJHapbpMwx4PYWOBHTeQOtyNavaOif3EF+XJ7qGvX0YkP2hlW/cxWf6XLNyeQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADdJREFUeNrt1LERAAAEA0DsvzO9EfjvUsrlRAAAAAAAAABwX67c3+6u7wtQgC8AAAAAAAAAwH0DNkcBCEXoxRkAAAAASUVORK5CYII=",img$a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABb2lDQ1BpY2MAACiRdZHNK0RRGMZ/xmiESWEhLO5iyAKJkqVGscFiZpTBZu51Z0bNx+3eO2myVTYWykJsfC38B2yVLaUUKcnGP+BrI13vMVMzyZzbue+v55zn7ZzngG8mY2Qd/zBkc64dmQ5rC/FFLfCCn27aGCKYMBxrNjoVo+b4vKNO1dtB1av2vn9H84rpGFDXKDxmWLYrPCE8s+ZaireEO4x0YkX4UHjAlgMKXyldL/Gz4lSJ3xXbscgk+FRPLVXFehUbaTsr3C8cymYKRvk86iYtZm4+KrVLZg8OEaYJo6FTYJUMLoNSc5LZ/77hX98cefEY8rcoYosjRVq8A6IWpKspNSm6KV+Gosr9b55OcnSk1L0lDA1PnvfWC4Ed+N72vK8jz/s+hvpHuMhV/HnJafxD9O2KFjqA1g04u6xo+i6cb0Lng5WwE79SvUxfMgmvpxCMQ/sNNC2Vsiqvc3IPsXV5omvY24c+2d+6/AMRKmgSy8M37AAAAAlwSFlzAAALEwAACxMBAJqcGAAAAV1JREFUeNrtmgEKgzAMRRvJCab3P6HuCOtU5nBdY61iqcn/UJBN0f9qkxTjHARBkGGR9EfXdT72+8v7as00JNpxfd/TLgCS8bsDkEDQXuNaAIQgGsSAxOxLa+cuSnljrcbXPkYI02EUBMUIaTG/eguWwz+vJmLAOKHziAZO7bOf8mY+CwCAdQBszXBYyfLB0rbWephKLAFf8QR7xIACAGquE7KfjUvdCGkQAAAAADRVgnoKoecwuGlYLYSWi+bxaFufc36lY1Mfj99BkYtI+RLwKISQBQAAAADgZBAslQmo1jegVBr0WAKVAihVB1DNMYAsvwFIg2oAjLuj9U5JveHQI1sxLkEw920w7CTjnNYyBEEAAAD9APa2zN5RMW9olZXIKGyWjHrk1AWae4V/dnQ5a3+rryjzK9PpUjZV6Ei6pF3+avNX3INDIpqzQGxJs3SCNhCae6AhCIKgo3oDRfKqQh1Aqh4AAAAASUVORK5CYII=",img$9="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABbmlDQ1BpY2MAACiRdZE7SwNBFIW/JEpEE1JoIZIihYqFgiiIpUTQRi1iBF/N7uYlZDfLboKIrWBjIViINr4K/4G2gq2CICiCiI1/wFcjst5JAgmSzDJ7P87MucycAf9M3jDdlmEwraKTmI7HFpeWY8E3WogSIoxPM1x7dn4qSdPx/YBP1fsh1av5voajI5V2DfC1CY8ZtlMUnhCeWS/aineEu4yclhI+Fh505IDCN0rXK/yqOFvhT8VOMjEJftUzlq1jvY6NnGMKDwj3mvmSUT2PukkobS3MS+2RGcUlwTRxYuiUWCNPkSGplmTW2Ddc9s1REI8hf5sNHHFkyYl3UNSSdE1LzYieli/Phsr9f55uZnSk0j0Uh9YXz/vog+Ae/O563s+J5/2eQuAZrqyavyA5jX+JvlvTeo8gsgUX1zVN34fLbeh+sjVHK0sBmf5MBt7PIbwEnXfQvlLJqrrO2SMkN+WJbuHgEPplf2T1D6TFZ+Dpj8jzAAAACXBIWXMAAAsTAAALEwEAmpwYAAABJUlEQVR42u2b6wrCMAyFF9kTuL3/q0YUlDIQrGnatPkOFPZDluY0l7NQty05pHjWCfbo9nKd6KCa4pY9BSAgOwF7w7zTRrmrRIAjzvN8rSsB0rP1VFZ86RUBUqwIbc91L+8ooAtkdv4ZBUQABEAAn8Ot8KsS1Ei+946ASJ/dSgoMIECipf8+ed2pxv04hhdB2iAEQEAcjCiCLbWAGGwsIYTUYAMhtIIQEoMN8Qjv6woHhBBtEAIgYCUhZO4gTISoAXMLIfNe0k2E6AIQAAFT6ADLoGMJHaDOzqMDousAy6Cjai/p5gHlFTlSAAJsbVD/+E24lBBH52ts6ijfI6SAjrTLJanOJyeBokBSnvi36/IAUATD/3fQxXdJ6vyHBHRA9hQA2fEADxYsjjbR70EAAAAASUVORK5CYII=",img$8="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABb2lDQ1BpY2MAACiRdZHNK0RRGMZ/M4gYUSwk6S6GKFOiZKlRZoPFGGWwuffOnRk1M273zqTJVtlYTFmIja+F/4CtsqWUIiXZ+Ad8bTRd7zFqJHNu576/nnOet3OeA/7pjJl164chm8s70UhYW4gvao3P1NNDO4P06qZrz8xNxag5Pm7xqXoTUr1q7/t3tCQs1wRfk/CYaTt54Qnh6bW8rXhLuNNM6wnhA+EhRw4ofKl0o8JPilMVflPsxKKT4Fc9tdQvNn6xmXaywgPCwWymYP6cR90kYOXm56R2y+zBJUqEMBoGBVbIkCckNSeZ/e8b/vbNsioeU/42RRxxpEiLd0jUgnS1pCZFt+TLUFS5/83TTY6OVLoHwtDw6HmvfdC4DeWS530eel75COoe4DxX9a9KTuPvopeqWnAf2jbg9KKqGTtwtgld97bu6N9SnUx/MgkvJ9Aah45raF6qZPWzzvEdxNblia5gdw/6ZX/b8hco4WgdZKtgqgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAZ1JREFUeNrtmw1uwyAMhTHiBGvuf8K03QHWMDE1UkehgEMSDO+TKlX5IXnG2E4gpCJM0xTcvlirWkUTRffN8xzcTrnCpRsgZgjKFd6LAVIeAQAYCzrjon7APTMgmdZ7KDc7hfh5PNT3/f7W3mpw99/seQM1ejeUdpdlUVrraNpbz3HHpDQZyeO3Rk1ifJfweyzVg1s9pLTQcaJjPcuOAUeKKOV2vX7c/3W5bPIa8htIXfBJq/VwMqv5ejm+ZBsOC8X3ptXg6D3cTFJhx60Dsi8UyiLcSvBTwFtjV2lMEzMEcsQfNQS6ES/CAHuKF50FaohHIeQ8wAkutGZXhRCnrraN/4o00imWbqgQAgCAoRk+C1BH4lmaNIYACiEAhub16ah0lkW6XocZRXjMCNzZ4aOyQPWo/jalzpgYbeoFxxacdgmVILXYuO1BPHcIdMPfEAgZoNdlpCGteBiKWaY3L4hpNKkTpBsiFeOKl8s7Xhca1Zqjq1Xa5i6ZXzuWFQMY02lyXoi0tI53Dw/w9ZjYAb3VB/hCBAAAAAAAgH/8Ah3f3c5J52vwAAAAAElFTkSuQmCC",img$7="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABb2lDQ1BpY2MAACiRdZHNK0RRGMZ/M4gYUSwk6S6GKFOiZKlRZoPFGGWwuffOnRk1M273zqTJVtlYTFmIja+F/4CtsqWUIiXZ+Ad8bTRd7zFqJHNu576/nnOet3OeA/7pjJl164chm8s70UhYW4gvao3P1NNDO4P06qZrz8xNxag5Pm7xqXoTUr1q7/t3tCQs1wRfk/CYaTt54Qnh6bW8rXhLuNNM6wnhA+EhRw4ofKl0o8JPilMVflPsxKKT4Fc9tdQvNn6xmXaywgPCwWymYP6cR90kYOXm56R2y+zBJUqEMBoGBVbIkCckNSeZ/e8b/vbNsioeU/42RRxxpEiLd0jUgnS1pCZFt+TLUFS5/83TTY6OVLoHwtDw6HmvfdC4DeWS530eel75COoe4DxX9a9KTuPvopeqWnAf2jbg9KKqGTtwtgld97bu6N9SnUx/MgkvJ9Aah45raF6qZPWzzvEdxNblia5gdw/6ZX/b8hco4WgdZKtgqgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAgVJREFUeNrtWwtuwyAMxREnWLn/Cdt1B1hDSzemyoNiKFADthSpSiDhPX/5FFREjDHB+7u1iqtsANFnx+MxeB+owEcnIEYEUIHPQgAmwvfgi6qt3ClbFfyP1ajFZXkCNCUz1BYccGMpqpHYFAGshJqdQvJ9uaiv8/nf+zzh7rduOYAa2g2l3X3f1bZt0bTn+7g2KUx6ZP+tUZNobBJYYykNvmohuYWOAx3TbHEQ7AkiVz5Pp6fPPw6Hl6wGbi+w6IOULMC1eEqOHeMtsSXOlWP22KQSbGFmnF2AUglSojz5Q6EsUloJPgt4PljiNqkgOowLUMBPOxlqBX4IAlqCHzoL1AAvhZCzAMdkJptTFUK+0/3C7KTaM70oFvB3hRZFp3YBVWlFiHM1KHMBIUAIEALqzQbfnAmAqwX0SoNWXIApAb3qAOAcA2BlC5A0OA0BjysuubssIwrGqFcBHiNBL2fyaEsdjDG28wkNNuL2J+SU2PJZ4GYGsCp4hx1Ce38MY0LJumXQ58UFMAGU3dtMTVmm5h60dJ3qkOEOFv0GrsCDvpSj9ceDRr+7SrbxbDEaA3AVSz0y7xVbFAPQdlpr8H0XHDJPb/QCX80CMB4da0BwiaE0T/7PUKFG3m65PUvhqeYOyxdCI7oAcHnZ0Omv1oCHJ6HGYOcqhFYjYWNG5PDCdjosEpEraP7o1MFLlvgAAAAASUVORK5CYII=",img$6="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABb2lDQ1BpY2MAACiRdZHNK0RRGMZ/M4gYUSwk6S6GKFOiZKlRZoPFGGWwuffOnRk1M273zqTJVtlYTFmIja+F/4CtsqWUIiXZ+Ad8bTRd7zFqJHNu576/nnOet3OeA/7pjJl164chm8s70UhYW4gvao3P1NNDO4P06qZrz8xNxag5Pm7xqXoTUr1q7/t3tCQs1wRfk/CYaTt54Qnh6bW8rXhLuNNM6wnhA+EhRw4ofKl0o8JPilMVflPsxKKT4Fc9tdQvNn6xmXaywgPCwWymYP6cR90kYOXm56R2y+zBJUqEMBoGBVbIkCckNSeZ/e8b/vbNsioeU/42RRxxpEiLd0jUgnS1pCZFt+TLUFS5/83TTY6OVLoHwtDw6HmvfdC4DeWS530eel75COoe4DxX9a9KTuPvopeqWnAf2jbg9KKqGTtwtgld97bu6N9SnUx/MgkvJ9Aah45raF6qZPWzzvEdxNblia5gdw/6ZX/b8hco4WgdZKtgqgAAAAlwSFlzAAALEwAACxMBAJqcGAAAALNJREFUeNrt2zEOgCAMAEAw/v/L1Qc4FSWNvSaORLjS6gBjiN4x7yc6Axzdd0B7gDMzKCJmyXqeMz7fAVUXn52bHgBAE9zffJ5qNdPA3uhHSiCZ7VjJ3FefvcxczuSLR5Vf6NUEKAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPDj2HJlJnOkddcBzKPi4lfGKQEAxQCytbyrB7g3qAQACNE5LgqdKICszpBUAAAAAElFTkSuQmCC",img$5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABb2lDQ1BpY2MAACiRdZE7SwNBFIW/JMaIRlJoISKaQsVCQRTEUiKYRi1iBF9Ndt0kwiYuuwkitoKNhWAh2vgq/AfaCrYKgqAIIjb+AV+NhPVOVkiQOMvs/Tgz5zJzBvyTpp5z6gYhly/YiXgsOje/EA29EqSeEJ10pXTHmpqZSPLv+LrHp+rdgOr1/76ao2nZcHTwNQiP6JZdEB4TnlwrWIq3hVv1bGpZ+Ei435YDCl8rXfP4RXHG4w/FdjIxDn7VM5qpYq2K9aydE+4T7s6ZRf33POomYSM/OyO1XWYHDgnixIiiUWQFkwIDUvOSWW3fYNk3zap4dPlbrGOLI0NWvP2iFqWrITUtuiGfybrK/W+eTnp4yOsejkHw2XXfeyC0C6Ud1/0+dt3SCQSe4DJf8a9KTqOfou9UtO5DiGzC+VVF0/bgYgvaHq2UnSpLAZn+dBrezqB5HlpuoXHRy+p3ndMHSG7IE93A/gH0yv7I0g/RtGf1H+H7WwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAPxJREFUeNrtmm0OgyAQRB3TE1Tvf1WaNmlCE4NCW77mkfDHRbP7nF1AXBbzpsL7wizxaKLgi2Ja3VMAAO4Abo2KT+ilHtkpYN/3V/8GgH40lf5DeaqlAEW9h2kv25e3CpgFnIN/qgAFAAAAbIdbtNCLL6QAANgNerX7tlEESQEAAAAAAAAAADwBsBAiBQAAAAAAAAAAAAAAAAAAAAAAAACwOxmKf5FDAQColwKhYEyVT2TqJPhm/lED3AGooxrQyje/dUC8FtDFt6YJ7UnD2cnN6PbL5I7Gj25PXggGZUA5spkeggyD/4h9zZHLhPYkAJ08ZHR7sgbMOO8f2h90sy2pSZTVdgAAAABJRU5ErkJggg==",img$4="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABb2lDQ1BpY2MAACiRdZHNK0RRGMZ/M4gYUSwk6S6GKFOiZKlRZoPFGGWwuffOnRk1M273zqTJVtlYTFmIja+F/4CtsqWUIiXZ+Ad8bTRd7zFqJHNu576/nnOet3OeA/7pjJl164chm8s70UhYW4gvao3P1NNDO4P06qZrz8xNxag5Pm7xqXoTUr1q7/t3tCQs1wRfk/CYaTt54Qnh6bW8rXhLuNNM6wnhA+EhRw4ofKl0o8JPilMVflPsxKKT4Fc9tdQvNn6xmXaywgPCwWymYP6cR90kYOXm56R2y+zBJUqEMBoGBVbIkCckNSeZ/e8b/vbNsioeU/42RRxxpEiLd0jUgnS1pCZFt+TLUFS5/83TTY6OVLoHwtDw6HmvfdC4DeWS530eel75COoe4DxX9a9KTuPvopeqWnAf2jbg9KKqGTtwtgld97bu6N9SnUx/MgkvJ9Aah45raF6qZPWzzvEdxNblia5gdw/6ZX/b8hco4WgdZKtgqgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAMpJREFUeNrtmksKgDAMBY30BNr7n7B3iCgo4kbwl+CbAZdCM77E+uk6AABh7OJ5/pd67EfFX6qpV4t8rXU5ZAXIJ2CfhJkSNHw8yzySboE5Bf0DV9sCa7i9lvJR5DPuZWgBBARG2bOshRZAgDhFreBhHBmCtAACEIAABABocrYRciEXdhTggoEwboPqAuRnAAAzIAReiHAbRAACEIAABMQj92Vo/4scCUAAAngWoAVogbjIp1ibJS3+tfWt+4DWGi0gmQBmAAAAwMYEsvUT/L18rywAAAAASUVORK5CYII=",img$3="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABb2lDQ1BpY2MAACiRdZHNK0RRGMZ/M4gYUSwk6S6GKFOiZKlRZoPFGGWwuffOnRk1M273zqTJVtlYTFmIja+F/4CtsqWUIiXZ+Ad8bTRd7zFqJHNu576/nnOet3OeA/7pjJl164chm8s70UhYW4gvao3P1NNDO4P06qZrz8xNxag5Pm7xqXoTUr1q7/t3tCQs1wRfk/CYaTt54Qnh6bW8rXhLuNNM6wnhA+EhRw4ofKl0o8JPilMVflPsxKKT4Fc9tdQvNn6xmXaywgPCwWymYP6cR90kYOXm56R2y+zBJUqEMBoGBVbIkCckNSeZ/e8b/vbNsioeU/42RRxxpEiLd0jUgnS1pCZFt+TLUFS5/83TTY6OVLoHwtDw6HmvfdC4DeWS530eel75COoe4DxX9a9KTuPvopeqWnAf2jbg9KKqGTtwtgld97bu6N9SnUx/MgkvJ9Aah45raF6qZPWzzvEdxNblia5gdw/6ZX/b8hco4WgdZKtgqgAAAAlwSFlzAAALEwAACxMBAJqcGAAAANNJREFUeNrt2tEKwyAMhWEz9gSr7/+qjg0GvZ3dVMwX8K6F5OfkRFtLSR7R+V7bpZ7YqPiumm7ZWwCA7ADuk8ynreJH6RRQa32vKwDiR6P0H8qLUQqI01ph7H2dy0cFpkDm4l8qoAAAAHAcnhFtlVy0AABOg7nicRxMUAsAAAAAAAAAQE4ANkJaAAAAAAAAAAAAAAAAAAAAAAAA0v0ZOl+RowAAxrVA63hmyCeyWKT4afnxgOwAYiEPmJVbvn3A1evyQmxogi1r/ZG4eCYIAA+w2SpPUykQkfN9GyAAAAAASUVORK5CYII=";class Icons{}Icons.icon_arrow=img$J;Icons.icon_arrow_up=img$I;Icons.icon_arrow_down=img$H;Icons.icon_arrow_left=img$G;Icons.icon_arrow_right=img$F;Icons.icon_back=img$E;Icons.icon_caret=img$D;Icons.icon_circle=img$C;Icons.icon_clockwise=img$B;Icons.icon_counter_clockwise=img$z;Icons.icon_compare=img$A;Icons.icon_close=img$y;Icons.icon_close2=img$x;Icons.icon_cloudy=img$w;Icons.icon_delete=img$v;Icons.icon_download=img$u;Icons.icon_fit_page=img$t;Icons.icon_fit_viewer=img$s;Icons.icon_geometric=img$r;Icons.icon_hand=img$q;Icons.icon_line=img$p;Icons.icon_load=img$o;Icons.icon_minus=img$n;Icons.icon_ok=img$m;Icons.icon_pen=img$l;Icons.icon_plus=img$k;Icons.icon_pointer=img$j;Icons.icon_polygon=img$i;Icons.icon_polyline=img$h;Icons.icon_popup=img$g;Icons.icon_popup2=img$f;Icons.icon_sidebar=img$e;Icons.icon_square=img$d;Icons.icon_stamp=img$c;Icons.icon_straight=img$b;Icons.icon_text=img$a;Icons.icon_text2=img$9;Icons.icon_text_free=img$8;Icons.icon_text_callout=img$7;Icons.icon_text_highlight=img$6;Icons.icon_text_squiggly=img$5;Icons.icon_text_strikeout=img$4;Icons.icon_text_underline=img$3;Icons.geometricIcons={square:`<img src="${Icons.icon_square}"/>`,circle:`<img src="${Icons.icon_circle}"/>`,line:`<img src="${Icons.icon_line}"/>`,arrow:`<img src="${Icons.icon_arrow}"/>`,polyline:`<img src="${Icons.icon_polyline}"/>`,polygon:`<img src="${Icons.icon_polygon}"/>`};Icons.textIcons={note:`<img src="${Icons.icon_popup2}"/>`,freeText:`<img src="${Icons.icon_text_free}"/>`,freeTextCallout:`<img src="${Icons.icon_text_callout}"/>`,strikeout:`<img src="${Icons.icon_text_strikeout}"/>`,squiggly:`<img src="${Icons.icon_text_squiggly}"/>`,underline:`<img src="${Icons.icon_text_underline}"/>`,highlight:`<img src="${Icons.icon_text_highlight}"/>`};Icons.lineTypeIcons={straight:`<img src="${Icons.icon_straight}"/>`,cloudy:`<img src="${Icons.icon_cloudy}"/>`};Icons.editIcons={close:`<img src="${Icons.icon_close}"/>`,ok:`<img src="${Icons.icon_ok}"/>`,back:`<img src="${Icons.icon_back}"/>`,delete:`<img src="${Icons.icon_delete}"/>`};function getCommonStyles(c){return`
    :host {
      --${c}-color-primary-final: var(--${c}-color-primary, rgba(40,40,40,1));
      --${c}-color-primary-tr-final: var(--${c}-color-primary-tr, rgba(40,40,40,0.9));
      --${c}-color-secondary-final: var(--${c}-color-secondary, rgba(60,60,60,1));
      --${c}-color-secondary-tr-final: var(--${c}-color-secondary-tr, rgba(60,60,60,0.9));
      --${c}-color-accent-final: var(--${c}-color-accent, rgba(96,96,96,1));
      --${c}-color-shadow-final: var(--${c}-color-shadow, rgba(0,0,0,0.75));
      --${c}-color-bg-final: var(--${c}-color-bg, rgba(128,128,128,1));
      --${c}-color-fg-primary-final: var(--${c}-color-fg-primary, rgba(255,255,255,1));
      --${c}-color-fg-secondary-final: var(--${c}-color-fg-secondary, rgba(187,187,187,1));
      --${c}-color-fg-accent-final: var(--${c}-color-fg-accent, rgba(255,204,0,1));
      --${c}-color-text-selection-final: var(--${c}-color-text-selection, rgba(104,104,128,0.3));
    }
  
    .disabled {
      pointer-events: none !important;
    }
  
    .relative {
      position: relative;
    }
    .absolute {
      position: absolute;
    }
    .abs-hidden {
      position: absolute;
      opacity: 0;
      z-index: -10;
    }
    .abs-stretch {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
    .abs-topleft {
      position: absolute;
      left: 0;
      top: 0;
    }
    .stretch {
      width: 100%;
      height: 100%;
    }
    
    .no-margin {
      margin: 0;
    }
    .no-padding {
      padding: 0;
    }
    .margin-s-5 {
      margin: 0 5px;
    }
  
    .line-clamp {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical; 
      overflow: hidden; 
    }
  
    #main-container {
      box-sizing: border-box;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: stretch;
      align-items: stretch;
      width: 100%;
      height: 100%;
      background: var(--${c}-color-bg-final);
    }
  
    #top-panel {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;
      width: 100%;
      height: 50px;
      background: var(--${c}-color-primary-final);
      box-shadow: 0 0 10px var(--${c}-color-shadow-final);
      z-index: 4;
      transition: height 0.25s ease-out 0.1s;
    }
    .hide-panels #top-panel {
      height: 0;
      transition: height 0.25s ease-in 0.2s;
    }
  
    #bottom-panel {
      position: absolute;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-grow: 0;
      flex-shrink: 0;
      bottom: 20px;
      height: 50px;  
      background: var(--${c}-color-primary-tr-final);
      box-shadow: 0 0 10px var(--${c}-color-shadow-final);
      z-index: 4;
      transition: height 0.25s ease-out, bottom 0.1s linear 0.25s;
    }
    .hide-panels #bottom-panel {
      bottom: 0;
      height: 0;
      transition: bottom 0.1s linear 0.1s, height 0.25s ease-in 0.2s;
    }
    .compact #zoom-fit-viewer,
    .compact #zoom-fit-page {  
      width: 0;  
      transform: scale(0);
    }
  
    #focused-annotation-panel {
      box-sizing: border-box;
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      flex-grow: 0;
      flex-shrink: 0;
      left: calc(50% - 120px);
      top: 80px;
      width: 240px;
      height: 84px; 
      padding: 18px;
      border-radius: 18px;
      background: var(--${c}-color-secondary-tr-final);
      box-shadow: 0 0 10px var(--${c}-color-shadow-final);
      opacity: 0;
      transform: scale(0);
      transition: opacity 0.1s ease-in, transform 0s linear 0.1s;
      z-index: 4;
      pointer-events: none;
    }
    .mobile #focused-annotation-panel {
      left: 20px;
      width: 150px;
    }
    .annotation-focused #focused-annotation-panel {
      opacity: 100;
      transform: scale(1);    
      transition: opacity 0.1s ease-out 0.35s, transform 0s linear 0.35s;
    }
    #focused-annotation-panel p {
      margin: 0;
      padding: 0;
      line-height: 16px;
      font-size: 12px;
      font-family: sans-serif;
      color: var(--${c}-color-fg-primary-final);
    }
    
    #annotation-panel,
    #command-panel {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      flex-grow: 1;
      flex-shrink: 1;
      right: 20px;
      pointer-events: none;
    }
    #annotation-panel {
      top: 125px;
      z-index: -5;
      transition: z-index 0s linear 0.25s;
    }
    #command-panel {
      top: 80px;
      z-index: 5;
    }
    .mode-annotation #annotation-panel {
      z-index: 5;
    }
    
    .annotation-panel-row,
    .command-panel-row {      
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        flex-grow: 1;
        flex-shrink: 1;
      }
  
    .annotation-panel-item {
      margin: 3px;
      cursor: default;      
      opacity: 0;
      background: var(--${c}-color-primary-tr-final);
      box-shadow: 0 0 10px var(--${c}-color-shadow-final);
      transform: scale(0);
      transition: opacity 0.1s ease-in, transform 0s linear 0.1s;
      pointer-events: all;
    }    
    .mode-annotation .annotation-panel-item { 
      cursor: pointer;
      opacity: 100;
      transform: scale(1);    
      transition: opacity 0.1s ease-out 0.35s, transform 0s linear 0.35s;
    }
  
    .annotation-panel-subitem,
    .command-panel-subitem {
      margin: 3px;    
      background: var(--${c}-color-secondary-tr-final);
      box-shadow: 0 0 10px var(--${c}-color-shadow-final);
      pointer-events: all;
    }    
    .command-panel-subitem.accent:hover,
    .command-panel-subitem.accent.on {
      box-shadow: 0 0 10px var(--${c}-color-fg-accent-final);
    }
    :not(.mode-annotation):not(.undoable-commands) #button-command-undo,
    :not(.annotation-selected) #button-annotation-edit-text,
    :not(.annotation-selected) #button-annotation-delete,
    :not(.stamp-annotator-data-undoable) #button-annotation-stamp-undo,
    :not(.stamp-annotator-data-clearable) #button-annotation-stamp-clear,
    :not(.stamp-annotator-data-saveable) #button-annotation-stamp-save,
    :not(.pen-annotator-data-undoable) #button-annotation-pen-undo,
    :not(.pen-annotator-data-clearable) #button-annotation-pen-clear,
    :not(.pen-annotator-data-saveable) #button-annotation-pen-save,
    :not(.text-annotator-data-undoable) #button-annotation-text-undo,
    :not(.text-annotator-data-clearable) #button-annotation-text-clear,
    :not(.text-annotator-data-saveable) #button-annotation-text-save,
    :not(.geom-annotator-data-undoable) #button-annotation-geometric-undo,
    :not(.geom-annotator-data-clearable) #button-annotation-geometric-clear,
    :not(.geom-annotator-data-saveable) #button-annotation-geometric-save {
      cursor: default;      
      opacity: 0;
      transform: scale(0);
      transition: opacity 0.1s ease-in, transform 0s linear 0.1s;
    }
    .mode-annotation.undoable-commands #button-command-undo,
    .annotation-selected #button-annotation-edit-text,
    .annotation-selected #button-annotation-delete,
    .stamp-annotator-data-undoable #button-annotation-stamp-undo,
    .stamp-annotator-data-clearable #button-annotation-stamp-clear,
    .stamp-annotator-data-saveable #button-annotation-stamp-save,
    .pen-annotator-data-undoable #button-annotation-pen-undo,
    .pen-annotator-data-clearable #button-annotation-pen-clear,
    .pen-annotator-data-saveable #button-annotation-pen-save,
    .text-annotator-data-undoable #button-annotation-text-undo,
    .text-annotator-data-clearable #button-annotation-text-clear,
    .text-annotator-data-saveable #button-annotation-text-save,
    .geom-annotator-data-undoable #button-annotation-geometric-undo,
    .geom-annotator-data-clearable #button-annotation-geometric-clear,
    .geom-annotator-data-saveable #button-annotation-geometric-save { 
      cursor: pointer;
      opacity: 100;
      transform: scale(1);    
      transition: opacity 0.1s ease-out 0.35s, transform 0s linear 0.35s;
    }
  
    .panel-v-separator {
      width: 1px;
      height: 30px;
      background-color: var(--${c}-color-fg-secondary-final);
    }
  
    .panel-button {
      cursor: pointer;
      user-select: none;
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      flex-grow: 0;
      justify-content: center;
      align-items: center;
      width: 36px;
      height: 36px;
      border-radius: 50%;
    }
    .panel-button:hover,
    .panel-button.on {
      background-color: var(--${c}-color-accent-final);
    }
    .panel-button.accent,
    .panel-button.accent:hover,
    .panel-button.accent.on {
      background-color: var(--${c}-color-fg-accent-final);
    }
    .panel-button img {
      width: 20px;
      height: 20px;
      filter: invert() opacity(0.7) drop-shadow(0 0 0 var(--${c}-color-fg-primary-final)) saturate(1000%);
    }  
    .panel-button:hover img,
    .panel-button.on img {
      filter: invert() opacity(0.7) drop-shadow(0 0 0 var(--${c}-color-fg-accent-final)) saturate(1000%);
    }  
    .panel-button.accent img,  
    .panel-button.accent:hover img,
    .panel-button.accent.on img {
      filter: opacity(0.7) drop-shadow(0 0 0 var(--${c}-color-primary-final)) saturate(1000%);
    }
    .disabled .panel-button img,
    .panel-button.disabled img {
      filter: invert() opacity(0.2) drop-shadow(0 0 0 var(--${c}-color-fg-primary-final)) saturate(1000%);
    }  
    .context-menu-content .panel-button {
      margin: 1px;
    }
    
    .subpanel {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 0 4px;
    }    
    
    .panel-item {
      transform: scale(1);
      transition: opacity 0.1s ease-out 0.35s, transform 0s linear 0.35s;
    }
    .hide-panels .panel-item {
      cursor: default;      
      opacity: 0;
      transform: scale(0);
      transition: opacity 0.1s ease-in, transform 0s linear 0.1s;
    }
  
    #paginator {  
      user-select: none;
      font-family: sans-serif;
      font-size: 16px;
      color: var(--${c}-color-fg-primary-final);
    }
  
    #toggle-previewer {
      margin: 4px;
    }
      
    #previewer {
      box-sizing: border-box;
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      overflow-x: hidden;
      overflow-y: auto;
      left: 0;
      top: 50px;
      bottom: 0;
      width: 160px; 
      padding-top: 0px;
      background: var(--${c}-color-secondary-final);
      box-shadow: 0 0 10px var(--${c}-color-shadow-final);
      z-index: 3;
      transition: padding-top 0.25s ease-out 0.1s, top 0.25s ease-out 0.1s, width 0.25s ease-out;
    } 
    .hide-panels #previewer {
      top: 0;
      padding-top: 50px;
      transition: padding-top 0.25s ease-in 0.2s, top 0.25s ease-in 0.2s;
    }   
    .mobile #previewer {
      background: var(--${c}-color-secondary-tr-final);
    } 
    .hide-previewer #previewer {
      width: 0;
      transition: width 0.25s ease-in 0.1s;
    }
    #previewer .page-preview {      
      transform: scaleX(1);
      transition: opacity 0.1s ease-out 0.35s, transform 0s linear 0.35s;
    }
    .hide-previewer #previewer .page-preview {
      opacity: 0;
      transform: scaleX(0);
      transition: opacity 0.1s ease-in, transform 0s linear 0.1s;
    }
  
    #viewer {
      box-sizing: border-box;
      position: absolute;
      display: flex;
      flex-direction: column;
      overflow: auto;
      left: 160px;
      right: 0;
      top: 50px;
      bottom: 0;
      padding-top: 0;
      transition: padding-top 0.25s ease-out 0.1s, top 0.25s ease-out 0.1s, left 0.25s ease-out;
    }
    #viewer.dialog-shown {
      overflow: hidden;
    }
    .mode-hand #viewer {
      cursor: grab !important;
      user-select: none !important;
    }
    .hide-panels #viewer {
      top: 0;
      padding-top: 50px;
      transition: padding-top 0.25s ease-in 0.2s, top 0.25s ease-in 0.2s;
    }      
    .hide-panels.mobile #viewer,
    .hide-panels.hide-previewer #viewer {
      top: 0;
      padding-top: 50px;
      left: 0;
      transition: padding-top 0.25s ease-in 0.2s, top 0.25s ease-in 0.2s, left 0.25s ease-in;
    }   
    .mobile #viewer,
    .hide-previewer #viewer {
      top: 50px;
      padding-top: 0px;
      left: 0;
      transition: padding-top 0.25s ease-out 0.1s, top 0.25s ease-out 0.1s, left 0.25s ease-in;
    }
    
    #annotation-overlay-container {
      position: absolute;
      top: 0; 
      right: 0;
      bottom: 0;
      left: 0; 
      margin-top: 0;
      transition: margin-top 0.25s ease-out 0.1s;
      z-index: 3;
    }
    .hide-panels #annotation-overlay-container {
      margin-top: 50px;
      transition: margin-top 0.25s ease-in 0.2s;
    }
    .mode-text-markup #annotation-overlay-container {
      pointer-events: none;
    }
    
    #annotation-overlay {
      position: absolute;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      touch-action: none;
    }
  
    .page-container {    
      position: relative;
      display: flex;
      flex-grow: 0;
      flex-shrink: 0;
      background-color: white;
      box-shadow: 0 0 10px var(--${c}-color-shadow-final);
    }
    .page {    
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;    
      transform-origin: left top;
    }
    .page-preview {   
      cursor: pointer; 
      position: relative;
      display: flex;
      flex-grow: 0;
      flex-shrink: 0;
      margin: 0 auto;
      background-color: white;
      background-clip: content-box;
      border-style: solid;
      border-width: 10px 10px 20px 10px;
      border-color: transparent;
    }
    .page-preview:hover,
    .page-preview.current {
      border-color: var(--${c}-color-accent-final);
    }
    .page-preview::after {
      display: inline-block;
      position: absolute;
      top: calc(100% + 3px);
      width: 100%;
      text-align: center;
      font-family: sans-serif;
      font-size: 14px;
      line-height: 1;
      color: var(--${c}-color-fg-primary-final);
      content: attr(data-page-number) " ";
    }
  
    .page-canvas {
      background-color: white;
    } 
  
    .page-annotations {
      width: 0;
      height: 0;
    }
    .mode-text-markup .page-annotations,
    .mode-text .page-annotations,
    .mode-hand .page-annotations {
      pointer-events: none;
    }
    .page-annotations-controls,
    .annotation-content,
    .annotation-content-element {    
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
    .page-annotations-controls {
      z-index: 2;
    }
    .annotation-content {
      pointer-events: none;
    }
  
    .abs-full-size-overlay {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: var(--${c}-color-secondary-tr-final);
      touch-action: none;
    }
    
    .fixed-full-size-overlay {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: var(--${c}-color-secondary-tr-final);
    }
    
    .text-dialog {
      z-index: 9;
    }
    .text-dialog .form {
      box-sizing: border-box;
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: stretch;
      align-items: stretch;
      flex-grow: 0;
      flex-shrink: 0;
      left: calc(50% - 160px);
      top: calc(50% - 120px);
      width: 320px;
      height: 240px;
      padding: 5px;
      background: var(--${c}-color-primary-tr-final);
      box-shadow: 0 0 10px var(--${c}-color-shadow-final);
    }
    .text-dialog textarea {
      height: 100%;
      margin: 0 0 5px 0;
      padding: 5px;
      font-size: 14px;
      resize: none;
      outline: none;
      border: none;
      color: var(--${c}-color-fg-primary-final);
      background-color: var(--${c}-color-primary-final);
    }
    .text-dialog textarea::placeholder {
      font-size: 14px;
      font-style: italic;
      color: var(--${c}-color-fg-primary-final);
    }
    .text-dialog .buttons {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      flex-grow: 1;
      flex-shrink: 1;
    } 
    
    .stamp-dialog {
      z-index: 9;
    }
    .stamp-dialog .form {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: stretch;
      align-items: stretch;
      flex-grow: 0;
      flex-shrink: 0;
      left: 50%;
      top: 50%;
      width: 100%;
      height: 100%;
      max-width: 720px;
      max-height: 720px;
      background: var(--${c}-color-primary-tr-final);
      box-shadow: 0 0 10px var(--${c}-color-shadow-final);
      transform-origin: center;
      transform: translate(-50%, -50%)
    }
    .stamp-dialog .buttons {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      height: 40px;
    } 
    .stamp-dialog .form-canvas-wrapper {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 20px;
      flex-grow: 1;
      flex-shrink: 1;
    } 
    .stamp-dialog input {
      width: 100%;
      margin: 10px;
      padding: 5px;
      font-size: 16px;
      outline: none;
      border: none;
      color: var(--${c}-color-fg-primary-final);
      background-color: var(--${c}-color-primary-final);
    }
    .stamp-dialog input::placeholder {
      font-size: 14px;
      font-style: italic;
      color: var(--${c}-color-fg-primary-final);
    }
    .stamp-input-row {    
      display: flex;
      flex-direction: row;
      justify-content: stretch;
      align-items: center;
      height: 30px;
      margin: 10px;
    }
    .stamp-input-row p {
      user-select: none;
      margin: 0;   
      padding: 0 10px;
      font-family: sans-serif; 
      font-size: 16px;
      white-space: nowrap;
      color: var(--${c}-color-fg-secondary-final);
    }
    
    .abs-ratio-canvas {
      outline: 0;
      position: absolute;
      width: 100%;
      height: auto;
      max-height: 100%;
      border: 2px solid var(--${c}-color-fg-secondary-final);
    }
  
    .annotation-temp-copy {
      opacity: 0.2;
    }  
    .annotation-controls {
      cursor: pointer;
    }     
    .annotation-out-of-page {
      cursor: not-allowed;
    }
    .annotation-rect,
    .annotation-bbox {
      fill: none;
    }
    .mode-annotation .annotation-controls.selected {
      cursor: grab;
    } 
    .mode-annotation .annotation-controls.selected .annotation-rect {
      vector-effect: non-scaling-stroke;
      stroke: rgba(80, 80, 80, 0.5);
      stroke-dasharray: 3 3;
    }
    .mode-annotation .annotation-controls.selected .annotation-bbox {
      vector-effect: non-scaling-stroke;
      stroke: rgba(80, 80, 80, 1);
      stroke-dasharray: 3 3;
    }   
    .mode-annotation .annotation-controls.focused .annotation-bbox {
      vector-effect: non-scaling-stroke;
      stroke: rgba(255, 165, 0, 1);
      stroke-dasharray: 3 0;
    } 
    .mode-annotation .annotation-controls.selected .annotation-handle {
      stroke-width: 16;
      stroke-linecap: round;
      vector-effect: non-scaling-stroke;
      cursor: pointer;
    }
    .mode-annotation .annotation-controls.selected .annotation-handle.helper {
      stroke-width: 12;
      stroke: rgba(200, 200, 50, 0.75);
    }
    .mode-annotation .annotation-controls.selected .annotation-handle.scale {
      stroke: rgba(0, 0, 0, 0.75);
    }
    .mode-annotation .annotation-controls.selected .annotation-handle.rotation {
      stroke: rgba(50, 100, 50, 0.75);
    }
    .mode-annotation .annotation-controls.selected .annotation-handle.translation {
      stroke: rgba(100, 100, 200, 0.75);
    }
    .mode-annotation .annotation-controls.selected .annotation-rotator {
      fill: none;
      cursor: pointer;
      vector-effect: non-scaling-stroke;
    }
    .mode-annotation .annotation-controls.selected .annotation-rotator .circle {
      r: 25;
    }
    .mode-annotation .annotation-controls.selected .annotation-rotator .dashed {
      stroke: rgba(80, 80, 80, 1);
      stroke-dasharray: 3 3;
    }
  
    #context-menu {
      box-sizing: border-box;
      position: absolute;
      z-index: 5;
      min-width: 50px;
      min-height: 50px;
      max-height: 300px;
      padding: 5px;
      background: var(--${c}-color-secondary-tr-final);
      box-shadow: 0 0 10px var(--${c}-color-shadow-final);
      display: flex;
      flex-direction: column;
      justify-content: stretch;
      align-items: stretch;
      overflow-y: auto;
    }
    .context-menu-content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .context-menu-content.row {
      flex-direction: row;
    }
    .context-menu-content.column {
      flex-direction: column;
    }
    .context-menu-color-icon {
      width: 20px;
      height: 20px;
      border-radius: 12px;
      border-width: 2px;
      border-style: solid;
      border-color: var(--${c}-color-fg-secondary-final);
    }
    .context-menu-stamp-select-button {
      box-sizing: border-box;
      cursor: pointer;
      user-select: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
      height: 36px;
      padding: 0 5px;
      border-radius: 5px;
      font-family: sans-serif;
      font-size: 16px;
      color: var(--${c}-color-fg-primary-final); 
    }
    .context-menu-stamp-select-button:hover,
    .context-menu-stamp-select-button.on {
      background-color: var(--${c}-color-accent-final);
    }
    .context-menu-slider {
      -webkit-appearance: none;
      appearance: none;
      outline: none;
      margin: 10px;
      height: 5px;
      border-radius: 5px;
      cursor: pointer;
      background-color: var(--${c}-color-fg-secondary-final);
    }
    .context-menu-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      outline: none;
      width: 20px;
      height: 20px;
      border-radius: 10px;
      cursor: pointer;
      background-color: var(--${c}-color-accent-final);
    }
    .context-menu-slider::-moz-range-thumb {
      outline: none; 
      width: 20px;
      height: 20px;
      border-radius: 10px;
      cursor: pointer;
      background-color: var(--${c}-color-accent-final);
    }
  
    #button-open-file {
      pointer-events: auto !important;
    }
    .disabled #button-open-file img {
      filter: invert() opacity(0.7) drop-shadow(0 0 0 var(--${c}-color-fg-primary-final)) saturate(1000%);
    }
  
    .spinner {
      position: absolute;
      left: calc(50% - 30px);
      top: calc(50% - 30px);
      width: 60px;
      height: 60px;
    }
    .spinner div {   
      position: absolute; 
      width: 20px;
      height: 20px;
      margin: 5px;
      border-radius: 5px;
      animation-duration: 3s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    .spinner div:nth-child(1) {
      animation-name: spinnerone;
      background-color: var(--${c}-color-accent-final);
    }
    .spinner div:nth-child(2) {
      animation-name: spinnertwo;
      background-color: var(--${c}-color-fg-primary-final);  
    }
    .spinner div:nth-child(3) {  
      animation-name: spinnerthree;
      background-color: var(--${c}-color-fg-secondary-final);  
    }
  
    @keyframes spinnerone {
      from {
        left: 0;
        top: 0;
      }
      8.3% {
        left: 0;
        top: 0;
      }
      16.7% {
        left: 0;
        top: 0;
      }
      25% { 
        left: 30px;
        top: 0px; 
      }
      33.3% {
        left: 30px;
        top: 0px;        
      }
      41.7% {
        left: 30px;
        top: 0px;        
      }
      50% {
        left: 30px;
        top: 30px;         
      }
      58.3% {
        left: 30px;
        top: 30px;       
      }
      66.7% {      
        left: 30px;
        top: 30px;   
      }
      75% {
        left: 0;
        top: 30px;
      }
      83.3% {
        left: 0;
        top: 30px;
      }
      91.7% {
        left: 0;
        top: 30px;
      }
      to {   
        left: 0;
        top: 0;   
      }
    }
    @keyframes spinnertwo {
      from {
        left: 30px;
        top: 0px;
      }
      8.3% {
        left: 30px;
        top: 0px;
      }
      16.7% {
        left: 30px;
        top: 30px;
      }
      25% { 
        left: 30px;
        top: 30px;
      }
      33.3% {
        left: 30px;
        top: 30px;
      }
      41.7% {
        left: 0;
        top: 30px;
      }
      50% {
        left: 0;
        top: 30px;
      }
      58.3% {
        left: 0;
        top: 30px;
      }
      66.7% {
        left: 0;
        top: 0;
      }
      75% {
        left: 0;
        top: 0;
      }
      83.3% {
        left: 0;
        top: 0;
      }
      91.7% {
        left: 30px;
        top: 0px;
      }
      to {
        left: 30px;
        top: 0px;
      }
    }
    @keyframes spinnerthree {
      from {
        left: 30px;
        top: 30px;
      }
      8.3% {
        left: 0;
        top: 30px;
      }
      16.7% {
        left: 0;
        top: 30px;
      }
      25% { 
        left: 0;
        top: 30px;
      }
      33.3% {
        left: 0;
        top: 0;
      }
      41.7% {
        left: 0;
        top: 0;
      }
      50% {
        left: 0;
        top: 0;
      }
      58.3% {
        left: 30px;
        top: 0; 
      }
      66.7% {
        left: 30px;
        top: 0;
      }
      75% {
        left: 30px;
        top: 0;
      }
      83.3% {
        left: 30px;
        top: 30px;
      }
      91.7% {
        left: 30px;
        top: 30px;
      }
      to {
        left: 30px;
        top: 30px; 
      }
    }
  `}class ByteUtils{static parseIntFromBytes(e){if(!e?.length)return 0;if(e.length===1)return e[0];const t=Array.from(e,s=>("0"+(s&255).toString(16)).slice(-2)).join("");return parseInt(t,16)}static int8ToBytes(e){const t=new ArrayBuffer(1);return new DataView(t).setInt8(0,e),new Uint8Array(t)}static int16ToBytes(e,t=!1){const s=new ArrayBuffer(2);return new DataView(s).setInt16(0,e,t),new Uint8Array(s)}static int32ToBytes(e,t=!1){const s=new ArrayBuffer(4);return new DataView(s).setInt32(0,e,t),new Uint8Array(s)}static int32ArrayToBytes(e,t=!1){const s=new ArrayBuffer(e.length*4),r=new DataView(s);for(let o=0;o<e.length;o++)r.setInt32(o*4,e[o],t);return new Uint8Array(s)}static bytesToInt32Array(e,t=!1){if(!e?.length)return null;const s=new ArrayBuffer(Math.ceil(e.length/4)*4),r=new DataView(s);for(let a=0;a<e.length;a++)r.setUint8(a,e[a]);const o=new Int32Array(s.byteLength/4);for(let a=0;a<o.length;a++)o[a]=r.getInt32(a*4,t);return o}static xorBytes(e,t){const s=new Uint8Array(e.length);for(let r=0;r<e.length;r++)s[r]=e[r]^t;return s}static arraysEqual(e,t){if(e.length!==t.length)return!1;for(let s=0;s<e.length;s++)if(e[s]!==t[s])return!1;return!0}static findSubarrayIndex(e,t){if(e?.length&&t?.length){let s;e:for(let r=0;r<=e.length;r++){let o=!1;for(s=0;s<t.length;s++)if(r+s<e.length){if(e[r+s]!==t[s])continue e;o=!0}else{if(o)return r;break e}}}return-1}static hexStringToBytes(e){const t=new Uint8Array(e.length/2);for(let s=0,r=0;s<e.length;s+=2,r++)t[r]=parseInt(e.substr(s,2),16);return t}static getBit(e,t){return e&1<<t?1:0}static setBit(e,t){return e|1<<t}static clearBit(e,t){const s=~(1<<t);return e&s}static updateBit(e,t,s){const r=s?1:0,o=~(1<<t);return e&o|r<<t}}class ContextMenu{constructor(){this.onPointerDownOutside=e=>{if(!this._shown)return;e.composedPath()[0].closest("#context-menu")||this.hide()},this._container=document.createElement("div"),this._container.id="context-menu",this.hide(),document.addEventListener("pointerdown",this.onPointerDownOutside)}set content(e){var t;(t=this._content)===null||t===void 0||t.forEach(s=>s.remove()),e?.length?(e.forEach(s=>this._container.append(s)),this._content=e):this._content=null}get enabled(){return this._enabled}set enabled(e){this._enabled=!!e}destroy(){this.clear(),document.removeEventListener("pointerdown",this.onPointerDownOutside)}show(e,t){t.append(this._container),this._shown=!0,setTimeout(()=>{this.setContextMenuPosition(e,t),this._container.style.opacity="1"},0)}hide(){this._container.style.opacity="0",this._container.remove(),this._shown=!1}clear(){this.hide(),this.content=null}setContextMenuPosition(e,t){const s=new u(this._container.offsetWidth,this._container.offsetHeight),r=new u,o=t.getBoundingClientRect(),a=new u(e.x-o.x,e.y-o.y);a.x+s.x>o.width+o.x?r.x=a.x-s.x:r.x=a.x,a.y+s.y>o.height+o.y?r.y=a.y-s.y:r.y=a.y,this._container.style.left=r.x+t.scrollLeft+"px",this._container.style.top=r.y+t.scrollTop+"px"}}class SmoothPath{constructor(e){this._paths=[],this._positionBuffer=[],this._bufferSize=e?.bufferSize||SmoothPath._defaultBufferSize,this._id=e?.id,this._uuid=e?.uuid}get id(){return this._id}get uuid(){return this._uuid}get bufferSize(){return this._bufferSize}get paths(){return this._paths.slice()}get pathCount(){return this._paths.length}endPath(){this._currentPath&&this._currentPath.positions.length>1&&this._paths.push(this._currentPath),this._positionBuffer=null,this._currentPath=null,this._currentPathString=null}addPosition(e){this.appendPositionToBuffer(e),this.updateCurrentPath()}appendPositionToBuffer(e){const t=this._positionBuffer;t.push(e),this._positionBuffer=t.slice(Math.max(0,t.length-this._bufferSize),t.length)}getAverageBufferPosition(e){const t=this._positionBuffer.length;if(t>=this._bufferSize){let s=0,r=0,o,a,f=0;for(a=e;a<t;a++)f++,o=this._positionBuffer[a],s+=o.x,r+=o.y;return new u(s/f,r/f)}return null}updateCurrentPath(){let e=this.getAverageBufferPosition(0);if(!e)return null;this._currentPathString+=" L"+e.x+" "+e.y,this._currentPath.positions.push(e);let t="";for(let s=2;s<this._positionBuffer.length;s+=2)e=this.getAverageBufferPosition(s),t+=" L"+e.x+" "+e.y;return t}}SmoothPath._defaultBufferSize=8;class CanvasSmoothPathEditor extends SmoothPath{constructor(e,t){if(super(t),this._strokeWidth=CanvasSmoothPathEditor._defaultStrokeWidth,this._color=CanvasSmoothPathEditor._colors[0],this._paths=[],this.onContextMenu=s=>{this._contextMenu.enabled&&(s.preventDefault(),this._contextMenu.show(new u(s.clientX,s.clientY),this._container))},this.onPointerDown=s=>{if(!s.isPrimary||s.button===2)return;const{clientX:r,clientY:o}=s,[a,f]=this.convertClientCoordsToCanvas(r,o);this.newPath(new u(a,f));const m=s.target;m.addEventListener("pointermove",this.onPointerMove),m.addEventListener("pointerup",this.onPointerUp),m.addEventListener("pointerout",this.onPointerUp),m.setPointerCapture(s.pointerId)},this.onPointerMove=s=>{if(!s.isPrimary)return;const{clientX:r,clientY:o}=s,[a,f]=this.convertClientCoordsToCanvas(r,o);this.addPosition(new u(a,f)),this.refreshEditor()},this.onPointerUp=s=>{if(!s.isPrimary)return;const r=s.target;r.removeEventListener("pointermove",this.onPointerMove),r.removeEventListener("pointerup",this.onPointerUp),r.removeEventListener("pointerout",this.onPointerUp),r.releasePointerCapture(s.pointerId),this.endPath(),this.refreshEditor()},!e)throw new Error("Container is not defined");if(!t?.canvasWidth||!t.canvasHeight)throw new Error("Canvas dimensions is not defined");this._container=e,this._canvas=document.createElement("canvas"),this._canvas.classList.add("abs-ratio-canvas"),this._canvas.width=t.canvasWidth,this._canvas.height=t.canvasHeight,this._canvas.addEventListener("pointerdown",this.onPointerDown),this._contextMenu=new ContextMenu,this.fillContextMenu(),this._container.append(this._canvas),this._container.addEventListener("contextmenu",this.onContextMenu)}get canvas(){return this._canvas}get ctx(){return this._canvas.getContext("2d")}get canvasSize(){return[this._canvas.width,this._canvas.height]}set canvasSize(e){if(!e)return;const[t,s]=e;!t||!s||t===this._canvas.width&&s===this._canvas.height||(this._canvas.width=t,this._canvas.height=s,this.refreshEditor())}get paths(){return this._paths.slice()}destroy(){this._canvas.remove(),this._container.removeEventListener("contextmenu",this.onContextMenu),this._contextMenu.destroy()}getImageData(){return this.refreshEditor(),this.ctx.getImageData(0,0,this._canvas.width,this._canvas.height).data}newPath(e){const t="M"+e.x+" "+e.y,s=new Path2D(t);this._positionBuffer=[e],this._currentPath={strokeWidth:this._strokeWidth,color:this._color,path:s,positions:[new u(e.x,e.y)]},this._currentPathString=t}removePath(e){e&&(this._paths=this._paths.filter(t=>t.path!==e),this.refreshEditor())}removeLastPath(){this._paths.pop(),this.refreshEditor()}removeAllPaths(){this._paths.length=0,this.refreshEditor()}updateCurrentPath(){const e=super.updateCurrentPath();return e&&(this._currentPath.path=new Path2D(this._currentPathString+e)),e}refreshEditor(){this.drawPaths(),this.fillContextMenu()}drawPaths(){this.ctx.clearRect(0,0,this._canvas.width,this._canvas.height),(this._currentPath?[...this._paths,this._currentPath]:this._paths).forEach(e=>{const[t,s,r,o]=e.color;this.ctx.strokeStyle=`rgba(${t*255},${s*255},${r*255},${o})`,this.ctx.lineWidth=e.strokeWidth,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.stroke(e.path)})}convertClientCoordsToCanvas(e,t){const{top:s,left:r,width:o,height:a}=this._canvas.getBoundingClientRect(),f=o/this._canvas.width,m=a/this._canvas.height,g=(e-r)/f,p=(t-s)/m;return[g,p]}fillContextMenu(){const e=[this.buildColorPicker(),this.buildWidthSliderWithButtons()];this._contextMenu.content=e,this._contextMenu.enabled=!0}buildColorPicker(){const e=document.createElement("div");return e.classList.add("context-menu-content","row"),CanvasSmoothPathEditor._colors.forEach(t=>{const s=document.createElement("div");s.classList.add("panel-button"),t===this._color&&s.classList.add("on"),s.addEventListener("click",()=>{this._color=t,this.fillContextMenu()});const r=document.createElement("div");r.classList.add("context-menu-color-icon"),r.style.backgroundColor=`rgb(${t[0]*255},${t[1]*255},${t[2]*255})`,s.append(r),e.append(s)}),e}buildWidthSliderWithButtons(){const e=document.createElement("div");e.classList.add("context-menu-content","row");const t=document.createElement("div");t.classList.add("panel-button"),this.pathCount?t.addEventListener("click",()=>{this.removeLastPath()}):t.classList.add("disabled"),t.innerHTML=`<img src="${Icons.icon_back}"/>`,e.append(t);const s=document.createElement("div");s.classList.add("panel-button"),this.pathCount?s.addEventListener("click",()=>{this.removeAllPaths()}):s.classList.add("disabled"),s.innerHTML=`<img src="${Icons.icon_close}"/>`,e.append(s);const r=document.createElement("input");return r.setAttribute("type","range"),r.setAttribute("min","1"),r.setAttribute("max","32"),r.setAttribute("step","1"),r.setAttribute("value",this._strokeWidth+""),r.classList.add("context-menu-slider"),r.addEventListener("change",()=>{this._strokeWidth=r.valueAsNumber}),e.append(r),e}}CanvasSmoothPathEditor._defaultStrokeWidth=3;CanvasSmoothPathEditor._colors=[[0,0,0,1],[.804,0,0,1],[0,.804,0,1],[0,0,.804,1],[1,.5,0,1],[1,.2,1,1]];var __awaiter$1=function(c,e,t,s){function r(o){return o instanceof t?o:new t(function(a){a(o)})}return new(t||(t=Promise))(function(o,a){function f(p){try{g(s.next(p))}catch(y){a(y)}}function m(p){try{g(s.throw(p))}catch(y){a(y)}}function g(p){p.done?o(p.value):r(p.value).then(f,m)}g((s=s.apply(c,e||[])).next())})};class DomUtils{static htmlToElements(e){const t=document.createElement("template");t.innerHTML=e;const s=[];return t.content.childNodes.forEach(r=>{r instanceof HTMLElement&&s.push(r)}),s}static promisify(e){return __awaiter$1(this,void 0,void 0,function*(){return new Promise(t=>{setTimeout(()=>{const s=e();t(s)},0)})})}static runEmptyTimeout(){return __awaiter$1(this,void 0,void 0,function*(){yield this.promisify(()=>{})})}static downloadFile(e,t){const s=URL.createObjectURL(e),r=document.createElement("a");r.setAttribute("download",t),r.href=s,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(s),1e4)}static loadImageAsync(e,t=!1){return __awaiter$1(this,void 0,void 0,function*(){return yield new Promise((r,o)=>{const a=new Image;a.onerror=(f,m)=>{t&&URL.revokeObjectURL(e),console.log(`Error while loading image: ${m?.message||f.toString()}`),r(null)},a.onload=()=>{t&&URL.revokeObjectURL(e),r(a)},a.src=e})})}static loadFileDataAsync(e){return __awaiter$1(this,void 0,void 0,function*(){let t;if(e instanceof Uint8Array)t=e;else{let s;if(typeof e=="string"){const o=yield fetch(e);if(!o.ok)throw new Error(`${o.status}: ${o.statusText}`);s=yield o.blob()}else s=e;const r=yield s.arrayBuffer();t=new Uint8Array(r)}return t})}}class Spinner{constructor(){this._spinnerElement=DomUtils.htmlToElements(Spinner.spinnerHtml)[0]}show(e,t=8){this._isShown||!e||(this._spinnerElement.style.zIndex=t+"",this._spinnerElement.style.top=e.scrollTop+"px",this._spinnerElement.style.left=e.scrollLeft+"px",e.append(this._spinnerElement),this._isShown=!0)}hide(){this._spinnerElement.remove(),this._isShown=!1}}Spinner.spinnerHtml=`
  <div class="abs-full-size-overlay">
    <div class="spinner">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  `;class CloudCurveData{static buildFromPolyline(e,t){if(!e||e.length<2)return null;if(isNaN(t)||t<=0)throw new Error(`Invalid maximal arc size ${t}`);const s=e[0].clone().truncate(2),r=[],o=new u,a=new u;let f,m,g,p,y,C,A,w,_,E;for(f=0;f<e.length-1;f++){if(g=e[f],p=e[f+1],y=u.subtract(p,g).getMagnitude(),!y)continue;a.set(y,0);const v=l.from4Vec2(o,a,g,p);for(C=Math.ceil(y/t),A=y/C,w=A/2,m=0;m<C;m++){_=m*A,E=(m+1)*A;const k=[new u(_,-w).applyMat3(v).truncate(2),new u(E,-w).applyMat3(v).truncate(2),new u(E,0).applyMat3(v).truncate(2)];r.push(k)}}return{start:s,curves:r}}static buildFromEllipse(e,t,s,r){r||(r=new l);const o=new u,a=Math.PI*(3*(e+t)-Math.sqrt((3*e+t)*(e+3*t))),f=Math.ceil(a/s/4)*4,m=Math.ceil(a/f),g=[],p=new u(o.x+e,o.y),y=new u;let C=0,A;g.push(p.clone().applyMat3(r).truncate(2));for(let _=0;_<f;_++){for(A=0;A<m;)C+=.25/180*Math.PI,y.set(e*Math.cos(C)+o.x,t*Math.sin(C)+o.y),A+=h(p.x,p.y,y.x,y.y),p.setFromVec2(y);g.push(p.clone().applyMat3(r).truncate(2))}return this.buildFromPolyline(g,s)}}class SvgSmoothPath extends SmoothPath{constructor(e){super(e),this._paths=[],this._strokeWidth=e?.strokeWidth||SvgSmoothPath._defaultStrokeWidth,this._color=e?.color||SvgSmoothPath._defaultColor,this._group=document.createElementNS("http://www.w3.org/2000/svg","g")}get strokeWidth(){return this._strokeWidth}get color(){return this._color}get group(){return this._group}get paths(){return this._paths.slice()}newPath(e){const[t,s,r,o]=this._color||[0,0,0,1],a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("fill","none"),a.setAttribute("stroke",`rgba(${t*255},${s*255},${r*255},${o})`),a.setAttribute("stroke-width",this._strokeWidth+""),a.setAttribute("stroke-linecap","round"),a.setAttribute("stroke-linejoin","round");const f="M"+e.x+" "+e.y;a.setAttribute("d",f),this._positionBuffer=[e],this._currentPath={path:a,positions:[new u(e.x,e.y)]},this._currentPathString=f,this._group.append(a)}removePath(e){e&&(e.remove(),this._paths=this._paths.filter(t=>t.path!==e))}removeLastPath(){const e=this._paths.pop();e?.path.remove()}updateCurrentPath(){const e=super.updateCurrentPath();return e&&this._currentPath.path.setAttribute("d",this._currentPathString+e),e}}SvgSmoothPath._defaultStrokeWidth=3;SvgSmoothPath._defaultColor=[0,0,0,.8];class SvgTempPath{constructor(){this._path=document.createElementNS("http://www.w3.org/2000/svg","path")}get path(){return this._path}set(e,t,s,r,o=!1){let a="";if(r?.length>1){a+=`M${r[0].x},${r[0].y} `;for(let f=1;f<r.length;f++)a+=`L${r[f].x},${r[f].y} `;o&&(a+="Z")}this._path.classList.add("annotation-temp-copy"),this._path.setAttribute("d",a),this._path.style.fill=e,this._path.style.stroke=t,this._path.style.strokeWidth=s+""}insertAfter(e){e.after(this._path)}remove(){this._path.setAttribute("d",""),this._path.remove()}}class EventService{constructor(e){if(this._eventMap=new Map,!e)throw new Error("Container is not defined");const t=document.createElement("div");t.style.position="absolute",t.style.width="0",t.style.height="0",t.style.zIndex="-1000",e.append(t),this._element=t}get element(){return this._element}destroy(){this.removeAllListeners(),this._element.remove(),this._element=null}addListener(e,t,s){this._element&&(this._element.addEventListener(e,t,s),this._eventMap.has(e)?this._eventMap.get(e).add(t):this._eventMap.set(e,new Set().add(t)))}removeListener(e,t){this._element&&(this._element.removeEventListener(e,t),this._eventMap.has(e)&&this._eventMap.get(e).delete(t))}removeAllListenersForKey(e){this._element&&this._eventMap.has(e)&&(this._eventMap.get(e).forEach(s=>this._element.removeEventListener(e,s)),this._eventMap.delete(e))}removeAllListeners(){this._element&&(this._eventMap.forEach((e,t)=>{e.forEach(s=>this._element.removeEventListener(t,s))}),this._eventMap.clear())}getListenersByKey(e){const t=this._eventMap.get(e);return t?[...t]:[]}hasListenersForKey(e){const t=this._eventMap.get(e);return!!t?.size}dispatchEvent(e){this._element&&this.hasListenersForKey(e.type)&&this._element.dispatchEvent(e)}}class LinkedListNode{constructor(e){this.data=e}}class LinkedList{constructor(e){this._length=0,e&&this.push(e)}get head(){return this._head.data}get length(){return this._length}get tail(){return this.get(this._length-1)}push(e){const t=new LinkedListNode(e);let s;if(!this._head)this._head=t;else{for(s=this._head;s.next;)s=s.next;s.next=t}this._length++}insert(e,t){if(t<0||t>this._length-1)return null;const s=new LinkedListNode(e);let r,o=this._head,a=0;if(!t)this._head=s;else{for(;a++<t;)r=o,o=o.next;r.next=s}return s.next=o,this._length++,s.data}replace(e,t){if(t<0||t>this._length-1)return null;const s=new LinkedListNode(e);let r,o=this._head,a=0;if(!t)this._head=s;else{for(;a++<t;)r=o,o=o.next;r.next=s}return s.next=o.next,o.data}remove(e){if(e<0||e>this._length-1)return null;let t,s=this._head,r=0;if(!e)this._head=s.next;else{for(;r++<e;)t=s,s=s.next;t.next=s.next}return this._length--,s.data}clear(){this._head=null,this._length=0}get(e){if(e<0||e>this._length-1)return null;let t=this._head,s=0;for(;s++<e;)t=t.next;return t.data}pop(){return this.remove(this._length-1)}has(e,t){if(!this._length)return!1;t||(t=(o,a)=>o===a);let s=this._head,r=0;for(;r<this._length;){if(t(e,s.data))return!0;s=s.next,r++}return!1}findIndex(e,t){if(!this._length)return-1;t||(t=(o,a)=>o===a);let s=this._head,r=0;for(;r<this._length;){if(t(e,s.data))return r;s=s.next,r++}return-1}*[Symbol.iterator](){let e=this._head;for(;e;)yield e.data,e=e.next}}class UUID{static getRandomUuid(){return v4()}}var __awaiter=function(c,e,t,s){function r(o){return o instanceof t?o:new t(function(a){a(o)})}return new(t||(t=Promise))(function(o,a){function f(p){try{g(s.next(p))}catch(y){a(y)}}function m(p){try{g(s.throw(p))}catch(y){a(y)}}function g(p){p.done?o(p.value):r(p.value).then(f,m)}g((s=s.apply(c,e||[])).next())})};const stampImageLoaderHtml=`
  <div class="abs-full-size-overlay stamp-dialog">
    <div class="form">
      <div class="form-canvas-wrapper">
        <canvas class="abs-ratio-canvas"></canvas>
      </div>
      <div class="stamp-input-row">
        <p>Stamp name:</p>
        <input class="stamp-name-input" type="text" maxlength="128"/>
      </div>
      <div class="stamp-input-row">
        <p>Stamp description:</p>
        <input class="stamp-subject-input" type="text" maxlength="256"/>
      </div>
      <div class="stamp-input-row">
        <p>Width:</p>
        <input class="stamp-width-input" type="text" maxlength="4"/>
        <p>Height:</p>
        <input class="stamp-height-input" type="text" maxlength="4"/>
      </div>
      <div class="buttons">
        <div class="panel-button stamp-ok">
          <img src="${Icons.icon_ok}"/>
        </div>
        <div class="panel-button stamp-cancel">
          <img src="${Icons.icon_close}"/>
        </div>
      </div>
    </div>
  </div>
`,stampDesignerHtml=`
  <div class="abs-full-size-overlay stamp-dialog">
    <div class="form">
      <div class="form-canvas-wrapper">
      </div>
      <div class="stamp-input-row">
        <p>Stamp name:</p>
        <input class="stamp-name-input" type="text" maxlength="128"/>
      </div>
      <div class="stamp-input-row">
        <p>Stamp description:</p>
        <input class="stamp-subject-input" type="text" maxlength="256"/>
      </div>
      <div class="stamp-input-row">
        <p>Width:</p>
        <input class="stamp-width-input" type="text" maxlength="4"/>
        <p>Height:</p>
        <input class="stamp-height-input" type="text" maxlength="4"/>
      </div>
      <div class="buttons">
        <div class="panel-button stamp-ok">
          <img src="${Icons.icon_ok}"/>
        </div>
        <div class="panel-button stamp-cancel">
          <img src="${Icons.icon_close}"/>
        </div>
      </div>
    </div>
  </div>
`,customStampEvent="tsviewer-customstampchange";class CustomStampEvent extends CustomEvent{constructor(e){super(customStampEvent,{detail:e})}}class CustomStampService{constructor(e,t){if(this._customStampsByType=new Map,this._spinner=new Spinner,this.onFileInput=()=>{const r=this._fileInput.files;r.length!==0&&(this.openImageLoaderOverlayAsync(r[0]),this._fileInput.value=null)},!e)throw new Error("Container is not defined");if(!t)throw new Error("Event service is not defined");this._container=e,this._eventService=t;const s=document.createElement("input");s.type="file",s.accept="image/*",s.classList.add("abs-hidden"),this._fileInput=s,this._fileInput.addEventListener("change",this.onFileInput),this._container.append(this._fileInput)}destroy(){var e;this._fileInput.remove(),this._spinner.hide(),(e=this._overlay)===null||e===void 0||e.remove()}importCustomStamps(e){e?.length&&e.forEach(t=>{this._customStampsByType.set(t.type,t)})}getCustomStamps(){return[...this._customStampsByType.values()]}addCustomStamp(e){this._customStampsByType.set(e.type,e),this._eventService.dispatchEvent(new CustomStampEvent({type:"add",stamp:e}))}removeCustomStamp(e){const t=this._customStampsByType.get(e);t&&(this._customStampsByType.delete(e),this._eventService.dispatchEvent(new CustomStampEvent({type:"delete",stamp:t})))}startLoadingImage(){this._fileInput.click()}startDrawing(){this.openDesignerOverlayAsync()}openImageLoaderOverlayAsync(e){return __awaiter(this,void 0,void 0,function*(){this._spinner.show(this._container,10);const t=new Promise((U,M)=>{const F=URL.createObjectURL(e),$=new Image;$.onload=()=>{URL.revokeObjectURL(F),U($)},$.onerror=ee=>{console.log(ee),M()},$.src=F});let s;try{s=yield t}catch{this._spinner.hide();return}const r=s.width,o=s.height,a=s.width/s.height,f=DomUtils.htmlToElements(stampImageLoaderHtml)[0],m=f.querySelector("canvas"),g=f.querySelector(".stamp-cancel"),p=f.querySelector(".stamp-ok"),y=f.querySelector(".stamp-name-input"),C=f.querySelector(".stamp-subject-input"),A=f.querySelector(".stamp-width-input"),w=f.querySelector(".stamp-height-input");let _="Custom stamp",E="image stamp",v=64,k=+(64/a).toFixed();y.value=_,A.value=v+"",w.value=k+"",this._overlay=f,this._container.append(f),m.width=r,m.height=o;const R=m.getContext("2d");R.drawImage(s,0,0);const L=R.getImageData(0,0,s.width,s.height).data,B=()=>{!_||!k||isNaN(k)||!v||isNaN(v)?p.classList.add("disabled"):p.classList.remove("disabled")};y.addEventListener("input",()=>{_=y.value,B()}),C.addEventListener("input",()=>{E=C.value,B()}),A.addEventListener("input",()=>{var U;v=+((U=+A.value)===null||U===void 0?void 0:U.toFixed()),B()}),w.addEventListener("input",()=>{var U;k=+((U=+w.value)===null||U===void 0?void 0:U.toFixed()),B()});const X=()=>{f.remove(),this._overlay=null};g.addEventListener("click",X),p.addEventListener("click",()=>{const U=new Array(L.length);for(let F=0;F<L.length;F++)U[F]=L[F];const M={type:"/"+UUID.getRandomUuid(),name:_,subject:E,rect:[0,0,v,k],bbox:[0,0,r,o],imageData:U};this.addCustomStamp(M),X()}),this._spinner.hide()})}openDesignerOverlayAsync(){return __awaiter(this,void 0,void 0,function*(){this._spinner.show(this._container,10);const e=DomUtils.htmlToElements(stampDesignerHtml)[0],t=e.querySelector(".form-canvas-wrapper"),s=e.querySelector(".stamp-cancel"),r=e.querySelector(".stamp-ok"),o=e.querySelector(".stamp-name-input"),a=e.querySelector(".stamp-subject-input"),f=e.querySelector(".stamp-width-input"),m=e.querySelector(".stamp-height-input");let g="Custom stamp",p="drawing stamp",y=64,C=64;o.value=g,f.value=y+"",m.value=C+"";const A=new CanvasSmoothPathEditor(t,{canvasWidth:y,canvasHeight:C});this._overlay=e,this._container.append(e);const w=()=>{A.canvasSize=[y,C]},_=()=>{!g||!C||isNaN(C)||!y||isNaN(y)?r.classList.add("disabled"):(w(),r.classList.remove("disabled"))};o.addEventListener("input",()=>{g=o.value,_()}),a.addEventListener("input",()=>{p=a.value,_()}),f.addEventListener("input",()=>{var v;y=+((v=+f.value)===null||v===void 0?void 0:v.toFixed()),_()}),m.addEventListener("input",()=>{var v;C=+((v=+m.value)===null||v===void 0?void 0:v.toFixed()),_()});const E=()=>{e.remove(),this._overlay=null};s.addEventListener("click",E),r.addEventListener("click",()=>{const v=A.getImageData(),k=new Array(v.length);for(let L=0;L<v.length;L++)k[L]=v[L];const R={type:"/"+UUID.getRandomUuid(),name:g,subject:p,rect:[0,0,y,C],bbox:[0,0,y,C],imageData:k};this.addCustomStamp(R),E()}),this._spinner.hide()})}}class HtmlTemplates{}HtmlTemplates.textDialogHtml=`
    <div class="abs-full-size-overlay text-dialog">
      <div class="form">
        <textarea class="text-input" maxlength="1024"></textarea>
        <div class="buttons">
          <div class="panel-button text-ok">
            <img src="${Icons.icon_ok}"/>
          </div>
          <div class="panel-button text-cancel">
            <img src="${Icons.icon_close}"/>
          </div>
        </div>
      </div>
    </div>
  `;HtmlTemplates.stampContextButtonsHtml=`
    <div class="context-menu-content row">
      <div class="panel-button stamp-load-image">
        <img src="${Icons.icon_load}"/>
      </div>
      <div class="panel-button stamp-draw-image">
        <img src="${Icons.icon_pen}"/>
      </div>
      <div class="panel-button stamp-delete disabled">
        <img src="${Icons.icon_delete}"/>
      </div>
    </div>
  `;const mainHtml=`
  <div id="main-container" tabindex="0" class="hide-previewer disabled" 
    ondragstart="return false;" ondrop="return false;">
    <div id="viewer"></div>
    <div id="previewer"></div>
    <div id="top-panel"> 
      <div class="subpanel panel-item">
        <div id="toggle-previewer" class="panel-button panel-item">
          <img src="${Icons.icon_sidebar}"/>
        </div> 
      </div>
      <div id="modes" class="subpanel panel-item">
        <div id="button-mode-text" class="panel-button panel-item" title="Text Selection Tool">
          <img src="${Icons.icon_caret}"/>
        </div> 
        <div id="button-mode-hand" class="panel-button panel-item" title="Grab Tool">
          <img src="${Icons.icon_hand}"/>
        </div> 
        <div id="button-mode-annotation" class="panel-button panel-item" title="Annotation Tool">
          <img src="${Icons.icon_popup}"/>
        </div> 
        <div id="button-mode-comparison"></div> 
        <div class="panel-v-separator margin-s-5 panel-item"></div>
        <div id="button-open-file" class="panel-button panel-item" title="Open PDF">
          <img src="${Icons.icon_load}"/>
        </div> 
        <div id="button-save-file" class="panel-button panel-item" title="Save PDF...">
          <img src="${Icons.icon_download}"/>
        </div> 
        <div id="button-close-file" class="panel-button panel-item">
          <img src="${Icons.icon_close2}"/>
        </div> 
      </div>
    </div>
    <div id="bottom-panel">
      <div id="paginator" class="subpanel panel-item">
        <div id="paginator-prev" class="panel-button" title="Previous Page">
          <img src="${Icons.icon_arrow_up}"/>
        </div>
        <div id="paginator-next" class="panel-button" title="Next Page">
          <img src="${Icons.icon_arrow_down}"/>
        </div>
        <input id="paginator-input" type="text">
        <span>&nbsp/&nbsp</span>
        <span id="paginator-total">0</span>
      </div>
      <div class="panel-v-separator panel-item"></div>
      <div id="rotator" class="subpanel panel-item">
        <div id="rotate-counter-clockwise" class="panel-button" title="Rotate Counter-Clockwise">
          <img src="${Icons.icon_counter_clockwise}"/>
        </div>
        <div id="rotate-clockwise" class="panel-button" title="Rotate Clockwise">
          <img src="${Icons.icon_clockwise}"/>
        </div>
      </div>
      <div class="panel-v-separator panel-item"></div>
      <div id="zoomer" class="subpanel panel-item">
        <div id="zoom-out" class="panel-button" title="Zoom Out">
          <img src="${Icons.icon_minus}"/>
        </div>
        <div id="zoom-in" class="panel-button" title="Zoom In">
          <img src="${Icons.icon_plus}"/>
        </div>
        <div id="zoom-fit-viewer" class="panel-button" title="Fit to View">
          <img src="${Icons.icon_fit_viewer}"/>
        </div>
        <div id="zoom-fit-page" class="panel-button" title="Fit to Page">
          <img src="${Icons.icon_fit_page}"/>
        </div>
      </div>
    </div>
    <div id="command-panel">
      <div class="command-panel-row">
        <div id="button-command-comparison-close" 
          class="panel-button command-panel-subitem accent">
          <img src="${Icons.icon_close2}"/>
        </div>
        <div id="button-command-comparison-open" 
          class="panel-button command-panel-subitem accent">
          <img src="${Icons.icon_load}"/>
        </div>
        <div id="button-command-undo" 
          class="panel-button command-panel-subitem accent">
          <img src="${Icons.icon_back}"/>
        </div>
      </div>      
    </div>
    <div id="annotation-panel">
      <div class="annotation-panel-row">
        <div id="button-annotation-edit-text" 
          class="panel-button annotation-panel-subitem" title="Edit Annotation">
          <img src="${Icons.icon_text}"/>
        </div> 
        <div id="button-annotation-delete" 
          class="panel-button annotation-panel-subitem" title="Delete Annotation">
          <img src="${Icons.icon_close}"/>
        </div> 
        <div id="button-annotation-mode-select" 
          class="panel-button annotation-panel-item" title="Select Annotation">
          <img src="${Icons.icon_pointer}"/>
        </div> 
      </div>
    <div id="button-annotation-mode-stamp"></div> 
      <div class="annotation-panel-row">
        <div id="button-annotation-pen-undo" 
          class="panel-button annotation-panel-subitem button-annotation-undo">
          <img src="${Icons.icon_back}"/>
        </div> 
        <div id="button-annotation-pen-clear" 
          class="panel-button annotation-panel-subitem button-annotation-clear">
          <img src="${Icons.icon_close}"/>
        </div> 
        <div id="button-annotation-pen-save" 
          class="panel-button annotation-panel-subitem button-annotation-save">
          <img src="${Icons.icon_ok}"/>
        </div> 
        <div id="button-annotation-mode-pen" 
          class="panel-button annotation-panel-item">
          <img src="${Icons.icon_pen}"/>
        </div> 
      </div>
      <div class="annotation-panel-row">
        <div id="button-annotation-geometric-undo" 
          class="panel-button annotation-panel-subitem button-annotation-undo" title="Undo Annotation">
          <img src="${Icons.icon_back}"/>
        </div> 
        <div id="button-annotation-geometric-clear" 
          class="panel-button annotation-panel-subitem button-annotation-clear" title="Clear Annotation">
          <img src="${Icons.icon_close}"/>
        </div> 
        <div id="button-annotation-geometric-save" 
          class="panel-button annotation-panel-subitem button-annotation-save" title="Save Annotation">
          <img src="${Icons.icon_ok}"/>
        </div> 
        <div id="button-annotation-mode-geometric" 
          class="panel-button annotation-panel-item">
          <img src="${Icons.icon_geometric}"/>
        </div>
      </div>
      <div class="annotation-panel-row">
        <div id="button-annotation-text-undo" 
          class="panel-button annotation-panel-subitem button-annotation-undo"  title="Undo Annotation">
          <img src="${Icons.icon_back}"/>
        </div> 
        <div id="button-annotation-text-clear" 
          class="panel-button annotation-panel-subitem button-annotation-clear" title="Clear Annotation">
          <img src="${Icons.icon_close}"/>
        </div> 
        <div id="button-annotation-text-save" 
          class="panel-button annotation-panel-subitem button-annotation-save"  title="Save Annotation">
          <img src="${Icons.icon_ok}"/>
        </div> 
        <div id="button-annotation-mode-text" 
          class="panel-button annotation-panel-item">
          <img src="${Icons.icon_text2}"/>
        </div>
      </div>
    </div>

    <div id="focused-annotation-panel">
      <p id="focused-annotation-author" class="line-clamp"></p>
      <p id="focused-annotation-date" class="line-clamp"></p>
      <p id="focused-annotation-text" class="line-clamp"></p>
    </div>

    <input id="open-file-input" class="abs-hidden" type="file" accept="application/pdf">
    <input id="open-comparable-file-input" class="abs-hidden" type="file" accept="application/pdf">
  </div>
`,passwordDialogHtml=`
  <div class="abs-full-size-overlay password-dialog">
    <div class="form">
      <input class="password-input" type="password" maxlength="127"/>
      <div class="buttons">
        <div class="panel-button password-ok">
          <img src="${Icons.icon_ok}"/>
        </div>
        <div class="panel-button password-cancel">
          <img src="${Icons.icon_close}"/>
        </div>
      </div>
    </div>
  </div>
`,appName="tspdf",styles=`
<style>
  ${getCommonStyles(appName)}
  
  #bottom-panel {
    left: calc(50% - 200px);
    width: 400px;
  }
  .compact #bottom-panel {  
    left: calc(50% - 160px);  
    width: 320px;
  }

  #viewer {
    justify-content: flex-start;
  }

  #paginator-input {
    text-align: center; 
    font-size: 16px;
    width: 30px;
    height: 30px;
    margin: 2px;
    padding: 0;
    outline: none;
    border: none;
    color: var(--${appName}-color-fg-primary-final);
    background-color: var(--${appName}-color-primary-final);
  }
  #paginator-total {
    margin: 4px;
  }

  .page-container {
    margin: 10px auto;
  }  
  
  .page-text {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 0;
    padding: 0;
    overflow: hidden;
    line-height: 1;
  }
  .page-text span {
    cursor: text;
    position: absolute;
    white-space: pre;
    color: transparent;
    transform-origin: 0% 0%;
  }
  .page-text ::selection {
    background: var(--${appName}-color-text-selection-final);
  }
  .mode-hand .page-text span {
    cursor: grab;
  }
  .dummy-corner {    
    position: absolute;
    width: 0;
    height: 0;
  }
  .dummy-corner.bl {
    bottom: 0;
    left: 0;
  }
  .dummy-corner.br {
    bottom: 0;
    right: 0;
  }
  .dummy-corner.tr {
    top: 0;
    right: 0;
  }
  .dummy-corner.tl {
    top: 0;
    left: 0;
  }

  .password-dialog {
    z-index: 10;
    pointer-events: all !important;
  }
  .password-dialog .form {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
    flex-grow: 0;
    flex-shrink: 0;
    left: calc(50% - 160px);
    top: calc(50% - 25px);
    width: 320px;
    height: 50px;
    background: var(--${appName}-color-primary-tr-final);
    box-shadow: 0 0 10px var(--${appName}-color-shadow-final);
  }
  .password-dialog input {
    width: 220px;
    margin: 10px 0 10px 10px;
    padding: 5px;
    font-size: 16px;
    outline: none;
    border: none;
    color: var(--${appName}-color-fg-primary-final);
    background-color: var(--${appName}-color-primary-final);
  }
  .password-dialog input::placeholder {
    font-size: 14px;
    font-style: italic;
    color: var(--${appName}-color-fg-primary-final);
  }
  .password-dialog .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    flex-shrink: 1;
    width: 100px;
  }

  <!-- .mode-hand .page-text {
    visibility: hidden;
  }
  .mode-comparison .page-annotations,
  .mode-comparison .page-text {
    visibility: hidden;
  }
  .mode-text .page-comparison,
  .mode-hand .page-comparison,
  .mode-annotation .page-comparison {
    visibility: hidden;
  } -->
  
  #button-command-comparison-open,
  #button-command-comparison-close {
    position: absolute;
    right: 0;
    top: 0;
  }
  :not(.mode-comparison) #button-command-comparison-open,
  .comparison-loaded #button-command-comparison-open,
  :not(.comparison-loaded) #button-command-comparison-close {
    cursor: default;
    opacity: 0;
    transform: scale(0);
    transition: opacity 0.1s ease-in, transform 0s linear 0.1s;
  }
  .mode-comparison:not(.comparison-loaded) #button-command-comparison-open,
  .mode-comparison.comparison-loaded #button-command-comparison-close { 
    cursor: pointer;
    opacity: 100;
    transform: scale(1);
    transition: opacity 0.1s ease-out 0.35s, transform 0s linear 0.35s;
  }

  .page-comparison {
    width: 0;
    height: 0;
  }
  .page-comparison-areas {
    z-index: 2;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .comparison-area-rect {
    stroke: red;
    stroke-width: 3px;
    fill: none;
  }
  .comparison-area-image {
    opacity: 0;
  }
  .transparent .comparison-area-image {
    opacity: 0.5;
  }
  .opaque .comparison-area-image {
    opacity: 1;
  }

</style>
`;function getNextNode(c){if(c.hasChildNodes())return c.firstChild;for(;c&&!c.nextSibling;)c=c.parentNode;return c?c.nextSibling:null}function getRangeNodes(c){let e=c.startContainer;const t=c.endContainer;if(e===t)return[e];const s=[];for(;e&&e!==t;)s.push(e=getNextNode(e));for(e=c.startContainer;e&&e!==c.commonAncestorContainer;)s.unshift(e),e=e.parentNode;return s}function getSelectionInfosFromRangeSpans(c){const e=getRangeNodes(c).filter(s=>s?.nodeType===3),t=[];for(let s=0;s<e.length;s++){const r=e[s],o=r.textContent;if(!o)continue;const a=r.textContent?.length||0;let f=0,m=a;s===0&&(f=c.startOffset),s===e.length-1&&(m=c.endOffset);const g=o.slice(f,m);if(!g)continue;const p=r.parentElement;if(!p||p.tagName.toLowerCase()!=="span")continue;const y=p.querySelectorAll(".dummy-corner");if(y.length!==4)continue;const C=new u,A=new u,w=new u,_=new u;y.forEach(M=>{const{x:F,y:$}=M.getBoundingClientRect();M.classList.contains("bl")?C.set(F,$):M.classList.contains("br")?A.set(F,$):M.classList.contains("tr")?w.set(F,$):M.classList.contains("tl")&&_.set(F,$)});const E=f/a,v=m/a,k=u.subtract(A,C),R=u.subtract(w,_),L=u.add(C,u.multiplyByScalar(k,E)),B=u.add(C,u.multiplyByScalar(k,v)),X=u.add(_,u.multiplyByScalar(R,v)),U=u.add(_,u.multiplyByScalar(R,E));t.push({text:g,bottomLeft:L,bottomRight:B,topRight:X,topLeft:U})}return t}function getSelectionInfosFromSelection(c){const e=c.getRangeAt(0);return getSelectionInfosFromRangeSpans(e)}class PageTextView{_container;_pageProxy;_renderTask;_divModeTimer;_destroyed;constructor(e){if(!e)throw new Error("Page proxy is not defined");this._pageProxy=e,this._container=document.createElement("div"),this._container.classList.add("page-text"),this._container.addEventListener("pointerdown",this.onPointerDown),this._container.addEventListener("pointerup",this.onPointerUp)}static async appendPageTextAsync(e,t,s){const r=new PageTextView(e);try{if(!await r.renderTextLayerAsync(s)||r._destroyed)return null}catch(o){return console.error(o),null}return t.append(r._container),r}destroy(){this.remove(),this._container=null,this._destroyed=!0}remove(){this.destroyRenderTask(),this._container&&this._container.remove()}async renderTextLayerAsync(e){this.destroyRenderTask(),this.clear();const t=this._pageProxy.getViewport({scale:e}),s=this._pageProxy.streamTextContent();this._renderTask=pdfExports.renderTextLayer({container:this._container,textContentSource:s,viewport:t,enhanceTextSelection:!1});try{await this._renderTask.promise}catch(o){if(o.message==="TextLayer task cancelled.")return!1;throw o}return this._container.querySelectorAll("span").forEach(o=>{const a=document.createElement("span");a.classList.add("dummy-corner","bl");const f=document.createElement("span");f.classList.add("dummy-corner","br");const m=document.createElement("span");m.classList.add("dummy-corner","tr");const g=document.createElement("span");g.classList.add("dummy-corner","tl"),o.append(a,f,m,g)}),!0}clear(){this._container.innerHTML=""}destroyRenderTask(){this._renderTask&&(this._renderTask.cancel(),this._renderTask=null)}onPointerDown=e=>{this._divModeTimer&&(clearTimeout(this._divModeTimer),this._divModeTimer=null),typeof this._renderTask.expandTextDivs=="function"&&this._renderTask.expandTextDivs(!0)};onPointerUp=e=>{this._divModeTimer=setTimeout(()=>{typeof this._renderTask.expandTextDivs=="function"&&this._renderTask.expandTextDivs(!1),this._divModeTimer=null},300)}}const maxGeneration=65535,objectTypes={UNKNOWN:0,NULL:1,BOOLEAN:2,NUMBER:3,STRING_LITERAL:4,STRING_HEX:5,NAME:6,ARRAY:7,DICTIONARY:8,STREAM:9},valueTypes={UNKNOWN:0,NULL:1,BOOLEAN:2,NUMBER:3,STRING_LITERAL:4,STRING_HEX:5,NAME:6,ARRAY:7,DICTIONARY:8,STREAM:9,REF:10,COMMENT:11},dictTypes={XREF:"/XRef",XOBJECT:"/XObject",CATALOG:"/Catalog",PAGE_TREE:"/Pages",PAGE:"/Page",ANNOTATION:"/Annot",BORDER_STYLE:"/Border",OPTIONAL_CONTENT_GROUP:"/OCG",OPTIONAL_CONTENT_MD:"/OCMD",EXTERNAL_DATA:"/ExDATA",ACTION:"/Action",MEASURE:"/Measure",DEV_EXTENSIONS:"/DeveloperExtensions",GRAPHICS_STATE:"/ExtGState",CRYPT_FILTER:"/CryptFilter",SOFT_MASK:"/Mask",GROUP:"/Group",FONT:"/Font",FONT_DESCRIPTOR:"/FontDescriptor",ENCODING:"/Encoding",EMPTY:""},xRefTypes={TABLE:0,STREAM:1,HYBRID:2},xRefEntryTypes={FREE:0,NORMAL:1,COMPRESSED:2},streamFilters={ASCII85:"/ASCII85Decode",ASCIIHEX:"/ASCIIHexDecode",CCF:"/CCITTFaxDecode",CRYPT:"/Crypt",DCT:"/DCTDecode",FLATE:"/FlateDecode",JBIG2:"/JBIG2Decode",JPX:"/JPXDecode",LZW:"/LZWDecode",RLX:"/RunLengthDecode"},flatePredictors={NONE:1,TIFF:2,PNG_NONE:10,PNG_SUB:11,PNG_UP:12,PNG_AVERAGE:13,PNG_PAETH:14,PNG_OPTIMUM:15},streamTypes={XREF:"/XRef",OBJECT_STREAM:"/ObjStm",FORM_XOBJECT:"/XObject",METADATA_STREAM:"/Metadata"},supportedFilters=new Set([streamFilters.FLATE,streamFilters.DCT,streamFilters.JBIG2,streamFilters.JPX]),cryptVersions={RC4_40:1,RC4_128:2,AES_128:4,AES_256:5},cryptRevisions={RC4_40:2,RC4_128:3,AES_128:4,AES_256:5,AES_256_V2:6},cryptMethods={NONE:"/None",RC4:"/V2",AES_128:"/AESV2",AES_256:"/AESV3"},authEvents={DOC_OPEN:"/DocOpen",EMBEDDED_OPEN:"/EFOpen"},annotationTypes={TEXT:"/Text",LINK:"/Link",FREE_TEXT:"/FreeText",LINE:"/Line",SQUARE:"/Square",CIRCLE:"/Circle",POLYGON:"/Polygon",POLYLINE:"/PolyLine",HIGHLIGHT:"/Highlight",UNDERLINE:"/Underline",SQUIGGLY:"/Squiggly",STRIKEOUT:"/StrikeOut",STAMP:"/Stamp",CARET:"/Caret",INK:"/Ink",POPUP:"/Popup",FILE_ATTACHMENT:"/FileAttachment",SOUND:"/Sound",MOVIE:"/Movie",WIDGET:"/Widget",SCREEN:"/Screen",PRINTER_MARK:"/PrinterMark",TRAPNET:"/TrapNet",WATERMARK:"/Watermark",THREED:"/3D",REDACT:"/Redact",PROJECTION:"/Projection",RICH_MEDIA:"/RichMedia"},annotationStateModelTypes={MARKED:"/Marked",REVIEW:"/Review"},annotationMarkedStates={MARKED:"/Marked",UNMARKED:"/Unmarked"},annotationReviewStates={ACCEPTED:"/Accepted",REJECTED:"/Rejected",CANCELLED:"/Cancelled",COMPLETED:"/Completed",NONE:"/None"},annotationIconTypes={COMMENT:"/Comment",KEY:"/Key",NOTE:"/Note",HELP:"/Help",NEW_PARAGRAPH:"/NewParagraph",PARAGRAPH:"/Paragraph",INSERT:"/Insert"},freeTextIntents={PLAIN_TEXT:"/FreeText",WITH_CALLOUT:"/FreeTextCallout",CLICK_TO_TYPE:"/FreeTextTypeWriter"},markupAnnotationReplyTypes={REPLY:"/R",GROUP:"/Group"},stampTypes={DRAFT:"/Draft",NOT_APPROVED:"/NotApproved",APPROVED:"/Approved",AS_IS:"/AsIs",FOR_COMMENT:"/ForComment",EXPERIMENTAL:"/Experimental",FINAL:"/Final",SOLD:"/Sold",EXPIRED:"/Expired",PUBLIC:"/ForPublicRelease",NOT_PUBLIC:"/NotForPublicRelease",DEPARTMENTAL:"/Departmental",CONFIDENTIAL:"/Confidential",SECRET:"/TopSecret"},polyIntents={CLOUD:"/PolygonCloud",POLYGON_DIMENSION:"/PolygonDimension",POLYLINE_DIMENSION:"/PolyLineDimension"},lineIntents={ARROW:"/LineArrow",DIMENSION:"/LineDimension"},lineCaptionPositions={INLINE:"/Inline",TOP:"/Top"},lineEndingTypes={SQUARE:"/Square",CIRCLE:"/Circle",DIAMOND:"/Diamond",ARROW_OPEN:"/OpenArrow",ARROW_CLOSED:"/ClosedArrow",NONE:"/None",BUTT:"/Butt",ARROW_OPEN_R:"/ROpenArrow",ARROW_CLOSED_R:"/RClosedArrow",SLASH:"/Slash"},lineCapStyles={BUTT:0,ROUND:1,SQUARE:2},lineJoinStyles={MITER:0,ROUND:1,BEVEL:2},justificationTypes={LEFT:0,CENTER:1,RIGHT:2},renderingIntents={ABSOLUTE:"/AbsoluteColorimetric",RELATIVE:"/RelativeColorimetric",SATURATION:"/Saturation",PERCEPTUAL:"/Perceptual"},blendModes={NORMAL:"/Normal",COMPATIBLE:"/Compatible",MULTIPLY:"/Multiply",SCREEN:"/Screen",OVERLAY:"/Overlay",DARKEN:"/Darken",LIGHTEN:"/Lighten",COLOR_DODGE:"/ColorDodge",COLOR_BURN:"/ColorBurn",HARD_LIGHT:"/HardLight",SOFT_LIGHT:"/SoftLight",DIFFERENCE:"/Difference",EXCLUSION:"/Exclusion"},textRenderModes={FILL:0,STROKE:1,FILL_STROKE:2,INVISIBLE:3,FILL_USE_AS_CLIP:4,STROKE_USE_AS_CLIP:5,FILL_STROKE_USE_AS_CLIP:6,USE_AS_CLIP:7},colorSpaces={GRAYSCALE:"/DeviceGray",RGB:"/DeviceRGB",CMYK:"/DeviceCMYK",SPECIAL:"/DeviceN",SPECIAL_INDEXED:"/Indexed",SPECIAL_PATTERN:"/Pattern",SPECIAL_SEPARATION:"/Separation"},softMaskTypes={ALPHA:"/Alpha",LUMINOSITY:"/Luminosity"},borderEffects={NONE:"/S",CLOUDY:"/C"},borderStyles={SOLID:"/S",DASHED:"/D",BEVELED:"/B",INSET:"/I",UNDERLINE:"/U",NONE:"/N"},groupDictTypes={TRANSPARENCY:"/Transparency"},workerSrc=`
/**the most used char codes from the ASCII set */
const codes = {
  NULL: 0,
  BACKSPACE: 8,
  HORIZONTAL_TAB: 9,
  LINE_FEED: 10,
  VERTICAL_TAB: 11,
  FORM_FEED: 12,
  CARRIAGE_RETURN: 13,
  WHITESPACE: 32,
  EXCLAMATION_MARK: 33,
  DOUBLE_QUOTE: 34,
  HASH: 35,
  DOLLAR: 36,
  PERCENT: 37,
  AMPERSAND: 38,
  QUOTE: 39,
  L_PARENTHESE: 40,
  R_PARENTHESE: 41,
  ASTERISK: 42,
  PLUS: 43,
  COMMA: 44,
  MINUS: 45,
  DOT: 46,
  SLASH: 47,
  D_0: 48,
  D_1: 49,
  D_2: 50,
  D_3: 51,
  D_4: 52,
  D_5: 53,
  D_6: 54,
  D_7: 55,
  D_8: 56,
  D_9: 57,
  COLON: 58,
  SEMICOLON: 59,
  LESS: 60,
  EQUAL: 61,
  GREATER: 62,
  QUESTION_MARK: 63,
  AT: 64,
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,
  L_BRACKET: 91,
  BACKSLASH: 92,
  R_BRACKET: 93,
  CARET: 94,
  UNDERSCORE: 95,
  BACKTICK: 96,
  a: 97,
  b: 98,
  c: 99,
  d: 100,
  e: 101,
  f: 102,
  g: 103,
  h: 104,
  i: 105,
  j: 106,
  k: 107,
  l: 108,
  m: 109,
  n: 110,
  o: 111,
  p: 112,
  q: 113,
  r: 114,
  s: 115,
  t: 116,
  u: 117,
  v: 118,
  w: 119,
  x: 120,
  y: 121,
  z: 122,
  L_BRACE: 123,
  VERTICAL_LINE: 124,
  R_BRACE: 125,
  TILDE: 126,
};

/**char code sequences commonly used in PDF data */
const keywordCodes = {
  NULL: [codes.n, codes.u, codes.l, codes.l],

  OBJ: [codes.o, codes.b, codes.j],
  OBJ_END: [codes.e, codes.n, codes.d, codes.o, codes.b, codes.j],

  STREAM_START: [codes.s, codes.t, codes.r, codes.e, codes.a, codes.m],
  STREAM_END: [codes.e, codes.n, codes.d,
    codes.s, codes.t, codes.r, codes.e, codes.a, codes.m],

  DICT_START: [codes.LESS, codes.LESS],
  DICT_END: [codes.GREATER, codes.GREATER],

  ARRAY_START: [codes.L_BRACKET],
  ARRAY_END: [codes.R_BRACKET],
  
  STR_LITERAL_START: [codes.L_PARENTHESE],
  STR_LITERAL_END: [codes.R_PARENTHESE],

  STR_HEX_START: [codes.LESS],
  STR_HEX_END: [codes.GREATER],

  VERSION: [codes.PERCENT, codes.P, codes.D, codes.F, codes.MINUS],

  PREV: [codes.SLASH, codes.P, codes.r, codes.e, codes.v],
  TYPE: [codes.SLASH, codes.T, codes.y, codes.p, codes.e],
  SUBTYPE: [codes.SLASH, codes.S, codes.u, codes.b, codes.t, codes.y, codes.p, codes.e],
  FORM: [codes.SLASH, codes.F, codes.o, codes.r, codes.m],
  
  XREF_TABLE: [codes.x, codes.r, codes.e, codes.f],
  XREF_STREAM: [codes.SLASH, codes.X, codes.R, codes.e, codes.f],
  XREF_HYBRID: [codes.X, codes.R, codes.e, codes.f, codes.S, codes.t, codes.m],
    
  XREF_START: [codes.s, codes.t, codes.a, codes.r, codes.t, 
    codes.x, codes.r, codes.e, codes.f],
  TRAILER: [codes.t, codes.r, codes.a, codes.i, codes.l, codes.e, codes.r],
  END_OF_FILE: [codes.PERCENT, codes.PERCENT, codes.E, codes.O, codes.F],

  END_OF_LINE: [codes.CARRIAGE_RETURN, codes.LINE_FEED],

  TRUE: [codes.t, codes.r, codes.u, codes.e],
  FALSE: [codes.f, codes.a, codes.l, codes.s, codes.e],

  CMAP_BEGIN: [codes.b, codes.e, codes.g, codes.i, codes.n,
    codes.c, codes.m, codes.a, codes.p],
  CMAP_END: [codes.e, codes.n, codes.d,
    codes.c, codes.m, codes.a, codes.p],
  CMAP_BEGIN_CODE_RANGE: [codes.b, codes.e, codes.g, codes.i, codes.n,
    codes.c, codes.o, codes.d, codes.e, codes.s, codes.p, codes.a, codes.c, codes.e,
    codes.r, codes.a, codes.n, codes.g, codes.e],
  CMAP_END_CODE_RANGE: [codes.e, codes.n, codes.d,
    codes.c, codes.o, codes.d, codes.e, codes.s, codes.p, codes.a, codes.c, codes.e,
    codes.r, codes.a, codes.n, codes.g, codes.e],
  CMAP_BEGIN_CHAR: [codes.b, codes.e, codes.g, codes.i, codes.n,
    codes.b, codes.f, codes.c, codes.h, codes.a, codes.r],
  CMAP_END_CHAR: [codes.e, codes.n, codes.d,
    codes.b, codes.f, codes.c, codes.h, codes.a, codes.r],
  CMAP_BEGIN_RANGE: [codes.b, codes.e, codes.g, codes.i, codes.n,
    codes.b, codes.f, codes.r, codes.a, codes.n, codes.g, codes.e],
  CMAP_END_RANGE: [codes.e, codes.n, codes.d,
    codes.b, codes.f, codes.r, codes.a, codes.n, codes.g, codes.e],

  AP_STREAM_TEXT_END: [codes.E, codes.T],
};

/**value types that can be found in PDF file data */
const valueTypes = {
  UNKNOWN: 0,
  NULL: 1,
  BOOLEAN: 2,
  NUMBER: 3,
  STRING_LITERAL: 4,
  STRING_HEX: 5,
  NAME: 6,
  ARRAY: 7,
  DICTIONARY: 8,
  STREAM: 9,
  REF: 10,
  COMMENT: 11,
};

//#region static collections
/**
 * Each line is terminated by an end-of-line (EOL) marker
 */
// const EOL = [
//   codes.CARRIAGE_RETURN, 
//   codes.LINE_FEED,
// ];
  
/**
 * The delimiter  characters (, ), <, >, [, ], {, }, /,  and  %  are  special.  
 * They delimit syntactic entities such as strings, arrays, names, and comments.  
 * Any of these characters terminates the entity preceding it and is not included in the entity. 
 */
const delimiterChars = new Set([
  codes.PERCENT,
  codes.L_PARENTHESE,
  codes.R_PARENTHESE,
  codes.SLASH,
  codes.LESS,
  codes.GREATER,
  codes.L_BRACKET,
  codes.R_BRACKET,
  codes.L_BRACE,
  codes.R_BRACE,
]);
  
/**
 * White-space characters separate syntactic constructs such as names and numbers from each other.  
 * All white-space characters are  equivalent, except in comments, strings, and streams. 
 * In all other contexts, PDF treats any sequence of consecutive white-space characters as one character.
 */
const spaceChars = new Set([
  codes.NULL,
  codes.HORIZONTAL_TAB,
  codes.LINE_FEED,
  codes.FORM_FEED,
  codes.CARRIAGE_RETURN,
  codes.WHITESPACE,
]);
  
const digitChars = new Set([
  codes.D_0,
  codes.D_1,
  codes.D_2,
  codes.D_3,
  codes.D_4,
  codes.D_5,
  codes.D_6,
  codes.D_7,
  codes.D_8,
  codes.D_9,
]);

const newLineChars = new Set([
  codes.CARRIAGE_RETURN,
  codes.LINE_FEED,
]);
//#endregion

//#region static check functions
/**
 * check if the char is not a space char or a delimiter char
 * @param code char code
 * @returns 
 */
function isRegularChar(code) {
  if (isNaN(code)) {
    return false;
  }
  return !delimiterChars.has(code) && !spaceChars.has(code);
}

/**
 * check if the char is a space char or a delimiter char
 * @param code char code
 * @returns 
 */
function isNotRegularChar(code) {
  if (isNaN(code)) {
    return true;
  }
  return delimiterChars.has(code) || spaceChars.has(code);
}

function isDigit(code) {
  return digitChars.has(code);
}

function isNewLineChar(code) {
  return newLineChars.has(code);
}

function isSpaceChar(code) {
  return spaceChars.has(code);
}

function isNotSpaceChar(code) {
  return !spaceChars.has(code);
}

function isDelimiterChar(code) {
  return delimiterChars.has(code);
}

function isNotDelimiterChar(code) {
  return !delimiterChars.has(code);
}
//#endregion

let _data = new Uint8Array();
let _maxIndex = 0;

const _messageQueue = [];
let _busy = false;

self.onmessage = (event) => {
  if (_busy) {
    _messageQueue.push(event);
  } else {
    _busy = true;
    processData(event.data);
  }
};

function sendResponse(response) {
  self.postMessage(response);
  if (_messageQueue.length) {
    processData(_messageQueue.shift().data);
  } else {
    _busy = false;
  }
}

function processData(data) {
  const id = data.id;
  const name = data.name;

  if (name === "data-set") {
    if (data.bytes) {      
      const dataBytesArray = new Uint8Array(data.bytes);
      if (dataBytesArray?.length) {
        _data = dataBytesArray;
        _maxIndex = dataBytesArray.length - 1;
        sendResponse({id, name, type: "success"});
        return;
      }
    }
    sendResponse({id, name, type: "error", 
      message: "data-set: byte array is null or empty"});
    return; 
  }
  
  if (name === "data-reset") {
    const buffer = _data.buffer;
    _data = new Uint8Array();
    _maxIndex = 0;
    sendResponse({id, name, type: "success", bytes: buffer}, [buffer]);
    return; 
  }

  // console.log(JSON.stringify(data));
  try {
    let result;
    switch (name) { 
    // common cases
    case "is-outside":
      result = isOutside(...data.args);
      break;
    case "is-code-at":
      result = isCodeAt(...data.args);
      break;
    case "get-value-type-at":
      result = getValueTypeAt(...data.args);
      break;
    // search cases
    case "find-subarray-index":
      result = findSubarrayIndex(...data.args);
      break;
    case "find-char-index":
      result = findCharIndex(...data.args);
      break;
    case "find-new-line-index":
      result = findNewLineIndex(...data.args);
      break;
    case "find-space-index":result = findSpaceIndex(...data.args);
      break;
    case "find-non-space-index":
      result = findNonSpaceIndex(...data.args);
      break;
    case "find-delimiter-index":
      result = findDelimiterIndex(...data.args);
      break;
    case "find-non-delimiter-index":
      result = findNonDelimiterIndex(...data.args);
      break;
    case "find-regular-index":
      result = findRegularIndex(...data.args);
      break;
    case "find-irregular-index":
      result = findIrregularIndex(...data.args);
      break;
    // getting bounds cases  
    case "get-indirect-object-bounds":
      result = getIndirectObjectBoundsAt(...data.args);
      break;
    case "get-xref-table-bounds":
      result = getXrefTableBoundsAt(...data.args);
      break;
    case "get-dict-bounds":
      result = getDictBoundsAt(...data.args);
      break;
    case "get-array-bounds":
      result = getArrayBoundsAt(...data.args);
      break;
    case "get-hex-bounds":
      result = getHexBoundsAt(...data.args);
      break;
    case "get-literal-bounds":
      result = getLiteralBoundsAt(...data.args);
      break;
    // parsing cases
    case "parse-number":
      result = parseNumberAt(...data.args);
      break;
    case "parse-name":
      result = parseNameAt(...data.args);
      break;
    case "parse-string":
      result = parseStringAt(...data.args);
      break;
    case "parse-bool":
      result = parseBoolAt(...data.args);
      break;
    case "parse-number-array":
      result = parseNumberArrayAt(...data.args);
      break;
    case "parse-name-array":
      result = parseNameArrayAt(...data.args);
      break;
    case "parse-dict-type":
      result = parseDictType(...data.args);
      break;
    case "parse-dict-subtype":
      result = parseDictSubtype(...data.args);
      break;
    case "parse-dict-property-by-name":
      result = parseDictPropertyByName(...data.args);
      break;
    // skip cases
    case "skip-empty":
      result = skipEmptyChars(...data.args);
      break;
    case "skip-to-next-name":
      result = skipToNextName(...data.args);
      break;
    // getting char/codes cases
    case "slice-char-codes":
      result = sliceCharCodes(...data.args);
      break;
    case "slice-chars":
      result = sliceChars(...data.args);
      break;
    case "get-char-code":
      result = getCharCode(...data.args);
      break;
    default:
      throw new Error("Unknown command name: " + name);
    }    
    // console.log(JSON.stringify(result));
    sendResponse({id, name, type: "success", result});
  } catch (e) {
    // console.log(JSON.stringify(e));
    sendResponse({id, name, type: "error", message: e.message});
  }
}

//#region common functions  
function isOutside(index) {
  return (index < 0 || index > _maxIndex);
}

function isCodeAt(index, code) {
  return getCharCode(index) === code;
}

function getValueTypeAt(start, skipEmpty = true)  {
  if (skipEmpty) {
    start = skipEmptyChars(start);
  }
  if (isOutside(start)) {
    return null;
  }

  const arr = _data;
  const i = start;
  const charCode = arr[i];

  let tempIndex;
  switch (charCode) {
  case codes.SLASH:
    if (isRegularChar(arr[i + 1])) {
      return valueTypes.NAME;
    } 
    return valueTypes.UNKNOWN;
  case codes.L_BRACKET:
    return valueTypes.ARRAY;
  case codes.L_PARENTHESE:
    return valueTypes.STRING_LITERAL;
  case codes.LESS:
    if (codes.LESS === arr[i + 1]) {          
      return valueTypes.DICTIONARY;
    }
    return valueTypes.STRING_HEX;
  case codes.PERCENT:
    return valueTypes.COMMENT;
  case codes.D_0:
  case codes.D_1:
  case codes.D_2:
  case codes.D_3:
  case codes.D_4:
  case codes.D_5:
  case codes.D_6:
  case codes.D_7:
  case codes.D_8:
  case codes.D_9:
    tempIndex = findDelimiterIndex(true, i + 1);
    if (tempIndex !== -1) {
      const refEndIndex = findCharIndex(codes.R, false, tempIndex - 1);
      if (refEndIndex !== -1 && refEndIndex > i && !isRegularChar(arr[refEndIndex + 1])) {
        return valueTypes.REF;
      }
    }
    return valueTypes.NUMBER;
  case codes.DOT:
  case codes.MINUS:
    if (isDigit(arr[i + 1])) {          
      return valueTypes.NUMBER;
    }
    return valueTypes.UNKNOWN;
  case codes.s:
    if (arr[i + 1] === codes.t
        && arr[i + 2] === codes.r
        && arr[i + 3] === codes.e
        && arr[i + 4] === codes.a
        && arr[i + 5] === codes.m) {
      return valueTypes.STREAM;
    }
    return valueTypes.UNKNOWN;
  case codes.t:
    if (arr[i + 1] === codes.r
        && arr[i + 2] === codes.u
        && arr[i + 3] === codes.e) {
      return valueTypes.BOOLEAN;
    }
    return valueTypes.UNKNOWN;
  case codes.f:
    if (arr[i + 1] === codes.a
        && arr[i + 2] === codes.l
        && arr[i + 3] === codes.s
        && arr[i + 4] === codes.e) {
      return valueTypes.BOOLEAN;
    }
    return valueTypes.UNKNOWN;
  default:
    return valueTypes.UNKNOWN;
  }
} 
//#endregion

//#region search functions
function findSubarrayIndex(sub, options) {
  const arr = _data;
  if (!sub?.length) {
    return null;
  }

  const direction = options?.direction ?? true;
  const minIndex = Math.max(Math.min(options?.minIndex ?? 0, _maxIndex), 0);
  const maxIndex = Math.max(Math.min(options?.maxIndex ?? _maxIndex, _maxIndex), 0);
  const allowOpened = !options?.closedOnly;

  let i = direction
    ? minIndex
    : maxIndex; 

  let j; 
  if (direction) { 
    outer_loop:
    for (i; i <= maxIndex; i++) {
      for (j = 0; j < sub.length; j++) {
        if (arr[i + j] !== sub[j]) {
          continue outer_loop;
        }
      }
      if (allowOpened || !isRegularChar(arr[i + j])) {
        return {start: i, end: i + j - 1};
      }
    }
  } else {
    const subMaxIndex = sub.length - 1;
    outer_loop:
    for (i; i >= minIndex; i--) {
      for (j = 0; j < sub.length; j++) {
        if (arr[i - j] !== sub[subMaxIndex - j]) {
          continue outer_loop;
        }
      }
      if (allowOpened || !isRegularChar(arr[i - j])) {
        return {start: i - j + 1, end: i};
      }
    }
  }

  return null;
}

function findCharIndex(charCode, direction = true, start = undefined) {    

  const arr = _data;
  let i = isNaN(start)
    ? direction
      ? 0
      : _maxIndex
    : start; 

  if (direction) {        
    for (i; i <= _maxIndex; i++) {
      if (arr[i] === charCode) {
        return i;
      }
    }    
  } else {        
    for (i; i >= 0; i--) {
      if (arr[i] === charCode) {
        return i;
      }
    }
  }

  return -1; 
}

function findNewLineIndex(direction = true, start = undefined) {
  let lineBreakIndex;     

  const arr = _data;
  let i = isNaN(start)
    ? direction
      ? 0
      : _maxIndex
    : start; 
    
  if (direction) {        
    for (i; i <= _maxIndex; i++) {
      if (isNewLineChar(arr[i])) {
        lineBreakIndex = i;
        break;
      }
    }    
  } else {        
    for (i; i >= 0; i--) {
      if (isNewLineChar(arr[i])) {
        lineBreakIndex = i;
        break;
      }
    }
  }

  if (lineBreakIndex === undefined) {
    return -1;
  }

  if (direction) {  
    if (_data[lineBreakIndex] === codes.CARRIAGE_RETURN 
      && _data[lineBreakIndex + 1] === codes.LINE_FEED) {
      lineBreakIndex++;
    }  
    return Math.min(lineBreakIndex + 1, _maxIndex);
  } else {        
    if (_data[lineBreakIndex] === codes.LINE_FEED 
      && _data[lineBreakIndex - 1] === codes.CARRIAGE_RETURN) {
      lineBreakIndex--;
    }  
    return Math.max(lineBreakIndex - 1, 0);
  }
}

function findSpaceIndex(direction = true, start = undefined) {
  const arr = _data;
  let i = isNaN(start)
    ? direction
      ? 0
      : _maxIndex
    : start; 
    
  if (direction) {        
    for (i; i <= _maxIndex; i++) {
      if (isSpaceChar(arr[i])) {
        return i;
      }
    }    
  } else {        
    for (i; i >= 0; i--) {
      if (isSpaceChar(arr[i])) {
        return i;
      }
    }
  }
  
  return -1;
}

function findNonSpaceIndex(direction = true, start = undefined) {
  const arr = _data;
  let i = isNaN(start)
    ? direction
      ? 0
      : _maxIndex
    : start; 
    
  if (direction) {        
    for (i; i <= _maxIndex; i++) {
      if (isNotSpaceChar(arr[i])) {
        return i;
      }
    }    
  } else {        
    for (i; i >= 0; i--) {
      if (isNotSpaceChar(arr[i])) {
        return i;
      }
    }
  }
  
  return -1;
}

function findDelimiterIndex(direction = true, start = undefined) {
  const arr = _data;
  let i = isNaN(start)
    ? direction
      ? 0
      : _maxIndex
    : start; 
    
  if (direction) {        
    for (i; i <= _maxIndex; i++) {
      if (isDelimiterChar(arr[i])) {
        return i;
      }
    }    
  } else {        
    for (i; i >= 0; i--) {
      if (isDelimiterChar(arr[i])) {
        return i;
      }
    }
  }
  
  return -1; 
}

function findNonDelimiterIndex(direction = true, start = undefined) {    
  const arr = _data;
  let i = isNaN(start)
    ? direction
      ? 0
      : _maxIndex
    : start; 
    
  if (direction) {        
    for (i; i <= _maxIndex; i++) {
      if (isNotDelimiterChar(arr[i])) {
        return i;
      }
    }    
  } else {        
    for (i; i >= 0; i--) {
      if (isNotDelimiterChar(arr[i])) {
        return i;
      }
    }
  }
  
  return -1;
}

function findRegularIndex(direction = true, start = undefined) {
  const arr = _data;
  let i = isNaN(start)
    ? direction
      ? 0
      : _maxIndex
    : start; 
    
  if (direction) {        
    for (i; i <= _maxIndex; i++) {
      if (isRegularChar(arr[i])) {
        return i;
      }
    }    
  } else {        
    for (i; i >= 0; i--) {
      if (isRegularChar(arr[i])) {
        return i;
      }
    }
  }
  
  return -1;
}

function findIrregularIndex(direction = true, start = undefined) {  
  const arr = _data;
  let i = isNaN(start)
    ? direction
      ? 0
      : _maxIndex
    : start; 
    
  if (direction) {        
    for (i; i <= _maxIndex; i++) {
      if (isNotRegularChar(arr[i])) {
        return i;
      }
    }    
  } else {        
    for (i; i >= 0; i--) {
      if (isNotRegularChar(arr[i])) {
        return i;
      }
    }
  }
  
  return -1;
}
//#endregion

//#region get bounds functions  
function getIndirectObjectBoundsAt(start, skipEmpty = true) {   
  if (skipEmpty) {
    start = skipEmptyChars(start);
  }
  if (isOutside(start)) {
    return null;
  }    

  const objStartIndex = findSubarrayIndex(keywordCodes.OBJ, 
    {minIndex: start, closedOnly: true});
  if (!objStartIndex) {
    return null;
  }      

  let contentStart = findNonSpaceIndex(true, objStartIndex.end + 1);
  if (contentStart === -1){
    return null;
  }    
  const objEndIndex = findSubarrayIndex(keywordCodes.OBJ_END, 
    {minIndex: contentStart, closedOnly: true});
  if (!objEndIndex) {
    return null;
  }
  let contentEnd = findNonSpaceIndex(false, objEndIndex.start - 1);

  if (getCharCode(contentStart) === codes.LESS
      && getCharCode(contentStart + 1) === codes.LESS
      && getCharCode(contentEnd - 1) === codes.GREATER
      && getCharCode(contentEnd) === codes.GREATER) {
    // object is dict. exclude bounds from content
    contentStart += 2;
    contentEnd -=2;
  }

  return {
    start: objStartIndex.start, 
    end: objEndIndex.end,
    contentStart,
    contentEnd,
  };
} 
  
function getXrefTableBoundsAt(start, skipEmpty = true) {   
  if (skipEmpty) {
    start = skipEmptyChars(start);
  }
  if (isOutside(start) || _data[start] !== codes.x) {
    return null;
  }

  const xrefStart = findSubarrayIndex(keywordCodes.XREF_TABLE, 
    {minIndex: start});
  if (!xrefStart) {
    return null;
  }     
  const contentStart = findNonSpaceIndex(true, xrefStart.end + 1);
  if (contentStart === -1){
    return null;
  }   
  const xrefEnd = findSubarrayIndex(keywordCodes.TRAILER, 
    {minIndex: xrefStart.end + 1});
  if (!xrefEnd) {
    return null;
  } 
  const contentEnd = findNonSpaceIndex(false, xrefEnd.start - 1);

  if (contentEnd < contentStart) {
    // should be only possible in an empty xref, which is not allowed
    return null;
  }

  return {
    start: xrefStart.start, 
    end: xrefEnd.end,
    contentStart,
    contentEnd,
  };
}

function getDictBoundsAt(start, skipEmpty = true) {   
  if (skipEmpty) {
    start = skipEmptyChars(start);
  }
  if (isOutside(start) 
      || _data[start] !== codes.LESS
      || _data[start + 1] !== codes.LESS) {
    return null;
  }
     
  const contentStart = findNonSpaceIndex(true, start + 2);
  if (contentStart === -1){
    return null;
  }  
    
  let dictOpened = 1;
  let dictBound = true;
  let literalOpened = 0;
  let i = contentStart;    
  let code;
  let prevCode;
  while (dictOpened) {
    prevCode = code;
    code = _data[i++];

    if (code === codes.L_PARENTHESE
        && (!literalOpened || prevCode !== codes.BACKSLASH)) {
      // increase string literal nesting
      literalOpened++;
    }

    if (code === codes.R_PARENTHESE
        && (literalOpened && prevCode !== codes.BACKSLASH)) {
      // decrease string literal nesting
      literalOpened--;
    }

    if (literalOpened) {
      // ignore 'less' and 'greater' signs while being inside a literal
      continue;
    }

    if (!dictBound) {
      if (code === codes.LESS && code === prevCode) {
        dictOpened++;
        dictBound = true;
      } else if (code === codes.GREATER && code === prevCode) {
        dictOpened--;
        dictBound = true;
      }
    } else {        
      dictBound = false;
    }
  }
  const end = i - 1;
 
  const contentEnd = findNonSpaceIndex(false, end - 2);
  if (contentEnd < contentStart) {
    // should be possible only in an empty dict
    return {
      start, 
      end,
    };
  }

  return {
    start, 
    end,
    contentStart,
    contentEnd,
  };
}
  
function getArrayBoundsAt(start, skipEmpty = true) {
  if (skipEmpty) {
    start = skipEmptyChars(start);
  }
  if (isOutside(start) || _data[start] !== codes.L_BRACKET) {
    return null;
  }

  let arraysOpened = 1;
  let i = start + 1;    
  let code;
  while (arraysOpened) {
    code = _data[i++];
    if (code === codes.L_BRACKET) {
      arraysOpened++;
    } else if (code === codes.R_BRACKET) {
      arraysOpened--;
    }
  }
  const arrayEnd = i - 1;
  if (arrayEnd - start < 1) {
    return null;
  }

  return {start, end: arrayEnd};
}
      
function getHexBoundsAt(start, skipEmpty = true) {   
  if (skipEmpty) {
    start = skipEmptyChars(start);
  }
  if (isOutside(start) || getCharCode(start) !== codes.LESS) {
    return null;
  }

  const end = findCharIndex(codes.GREATER, true, start + 1);
  if (end === -1) {
    return null;
  }

  return {start, end};
}  

function getLiteralBoundsAt(start, skipEmpty = true) {       
  if (skipEmpty) {
    start = skipEmptyChars(start);
  }
  if (isOutside(start) || getCharCode(start) !== codes.L_PARENTHESE) {
    return null;
  }

  let i = start;
  let code;
  let escaped = false;
  let opened = 0;

  while (opened || code !== codes.R_PARENTHESE || escaped) {
    if (i > _maxIndex) {
      return null;
    }

    code = getCharCode(i++);

    if (!escaped) {
      if (code === codes.L_PARENTHESE) {
        opened += 1;
      } else if (opened && code === codes.R_PARENTHESE) {
        opened -= 1;
      }
    }
      
    if (!escaped && code === codes.BACKSLASH) {
      escaped = true;
    } else {
      escaped = false;
    }
  }

  return {start, end: i - 1};
}
//#endregion

//#region parse functions 
function parseNumberAt(start, float = false, skipEmpty = true) {
  if (skipEmpty) {
    start = skipEmptyChars(start);
  }
  if (isOutside(start) || !isRegularChar(_data[start])) {
    return null;
  }

  let i = start;
  let numberStr = "";
  let value = _data[i];
  if (value === codes.MINUS) {
    numberStr += "-";
    value = _data[++i];
  } else if (value === codes.DOT) {
    numberStr += "0.";
    value = _data[++i];
  }
  while (isDigit(value)
      || (float && value === codes.DOT)) {
    numberStr += String.fromCharCode(value);
    value = _data[++i];
  }

  return numberStr 
    ? {value: +numberStr, start, end: i - 1}
    : null;
}
  
function parseNameAt(start, includeSlash = true, skipEmpty = true) {
  if (skipEmpty) {
    start = skipEmptyChars(start);
  }
  if (isOutside(start) || _data[start] !== codes.SLASH) {
    return null;
  }

  let i = start + 1;
  let result = includeSlash
    ? "/"
    : "";
  let value = _data[i];
  while (isRegularChar(value)) {
    result += String.fromCharCode(value);
    value = _data[++i];
  }

  return result.length > 1 
    ? {value: result, start, end: i - 1}
    : null;
} 
  
function parseStringAt(start, skipEmpty = true) {
  if (skipEmpty) {
    start = skipEmptyChars(start);
  }
  if (isOutside(start)) {
    return null;
  }

  let i = start;
  let result = "";
  let value = _data[i];
  while (isRegularChar(value)) {
    result += String.fromCharCode(value);
    value = _data[++i];
  }

  return result.length !== 0 
    ? {value: result, start, end: i - 1}
    : null;
} 
  
function parseBoolAt(start, skipEmpty = true)  {
  if (skipEmpty) {
    start = skipEmptyChars(start);
  }    

  if (isOutside(start)) {
    return null;
  }

  const nearestDelimiter = findDelimiterIndex(true, start);

  const isTrue = findSubarrayIndex(keywordCodes.TRUE, {
    minIndex: start, 
    maxIndex: nearestDelimiter === -1 ? _maxIndex : nearestDelimiter,
  });
  if (isTrue) {
    return {value: true, start, end: isTrue.end};
  }    
    
  const isFalse = findSubarrayIndex(keywordCodes.FALSE, {
    minIndex: start,      
    maxIndex: nearestDelimiter === -1 ? _maxIndex : nearestDelimiter,
  });
  if (isFalse) {
    return {value: false, start, end: isFalse.end};
  }

  return null;
} 
  
function parseNumberArrayAt(start, float = true, skipEmpty = true) {
  const arrayBounds = getArrayBoundsAt(start, skipEmpty);
  if (!arrayBounds) {
    return null;
  }

  const numbers = [];
  let current;
  let i = arrayBounds.start + 1;
  while(i < arrayBounds.end) {
    current = parseNumberAt(i, float, true);
    if (!current) {
      break;
    }
    numbers.push(current.value);
    i = current.end + 1;
  }

  return {value: numbers, start: arrayBounds.start, end: arrayBounds.end};
}  
  
function parseNameArrayAt(start, includeSlash = true, 
  skipEmpty = true) {
  const arrayBounds = getArrayBoundsAt(start, skipEmpty);
  if (!arrayBounds) {
    return null;
  }

  const names = [];
  let current;
  let i = arrayBounds.start + 1;
  while(i < arrayBounds.end) {
    current = parseNameAt(i, includeSlash, true);
    if (!current) {
      break;
    }
    names.push(current.value);
    i = current.end + 1;
  }

  return {value: names, start: arrayBounds.start, end: arrayBounds.end};
}  
  
function parseDictType(bounds) {
  return parseDictPropertyByName(keywordCodes.TYPE, bounds);   
} 
  
function parseDictSubtype(bounds) {
  return parseDictPropertyByName(keywordCodes.SUBTYPE, bounds);   
} 
  
function parseDictPropertyByName(propName, bounds) {
  const arr = _data;
  if (!propName?.length) {
    return null;
  }

  const minIndex = Math.max(Math.min(bounds.start ?? 0, _maxIndex), 0);
  const maxIndex = Math.max(Math.min(bounds.end ?? _maxIndex, _maxIndex), 0);

  let propNameBounds;
  let i = minIndex;
  let j;
  let code;
  let prevCode;
  let dictOpened = 0;
  let dictBound = true;
  let literalOpened = 0;
  outer_loop:
  for (i; i <= maxIndex; i++) {
    prevCode = code;
    code = arr[i];
      
    // check if literal opens
    if (code === codes.L_PARENTHESE
        && (!literalOpened || prevCode !== codes.BACKSLASH)) {
      // increase string literal nesting
      literalOpened++;
    }

    // check if literal closes
    if (code === codes.R_PARENTHESE
        && (literalOpened && prevCode !== codes.BACKSLASH)) {
      // decrease string literal nesting
      literalOpened--;
    }

    if (literalOpened) {
      // ignore all bytes while being inside a literal
      continue;
    }

    // check if dict opens or closes
    if (!dictBound) {
      if (code === codes.LESS && code === prevCode) {
        dictOpened++;
        dictBound = true;
      } else if (code === codes.GREATER && code === prevCode) {
        dictOpened--;
        dictBound = true;
      }
    } else {        
      dictBound = false;
    }

    // compare next j values to the corresponding values of the sought name
    for (j = 0; j < propName.length; j++) {
      if (arr[i + j] !== propName[j]) {
        continue outer_loop;
      }
    }

    if (dictOpened !== 1) {
      // the found property name is not inside the topmost dict
      continue;
    }

    // check if name is closed
    if (!isRegularChar(arr[i + j])) {
      propNameBounds = {start: i, end: i + j - 1};
      break;
    }
  }
    
  if (!propNameBounds) {
    // the property name is not found
    return null;
  }

  // parse the property value
  const type = parseNameAt(propNameBounds.end + 1);
  if (!type) {
    return null;
  }

  return type.value;     
} 
//#endregion 

//#region skip functions
function skipEmptyChars(start) {
  let index = findNonSpaceIndex(true, start);
  if (index === -1) {
    return -1;
  }
  if (_data[index] === codes.PERCENT) {
    // it's a comment. skip it
    const afterComment = findNewLineIndex(true, index + 1);
    if (afterComment === -1) {
      return -1;
    }
    index = findNonSpaceIndex(true, afterComment);
  }
  return index;
}

function skipToNextName(start, max) {
  start ||= 0;
  max = max 
    ? Math.min(max, _maxIndex)
    : 0;
  if (max < start) {
    return -1;
  }

  let i = start;
  while (i <= max) {      
    const value = getValueTypeAt(i, true);
    if (value) {
      let skipValueBounds;
      let parseResult;
      switch (value) {
      case valueTypes.DICTIONARY:
        skipValueBounds = getDictBoundsAt(i, false);
        break;
      case valueTypes.ARRAY:
        skipValueBounds = getArrayBoundsAt(i, false);
        break;
      case valueTypes.STRING_LITERAL:            
        skipValueBounds = getLiteralBoundsAt(i, false);
        break; 
      case valueTypes.STRING_HEX: 
        skipValueBounds = getHexBoundsAt(i, false);
        break; 
      case valueTypes.NUMBER:
        parseResult = parseNumberAt(i, true, false);
        if (parseResult) {
          skipValueBounds = parseResult;
        }
        break; 
      case valueTypes.BOOLEAN:
        parseResult = parseBoolAt(i, false);
        if (parseResult) {
          skipValueBounds = parseResult;
        }
        break;
      case valueTypes.COMMENT:
        // TODO: Add skip comment
        break;
      case valueTypes.NAME:
        return i;
      default:
        i++;
        continue;
      }   
      if (skipValueBounds) {
        i = skipValueBounds.end + 1;
        skipValueBounds = null;     
        continue;
      }
    }
    i++;
  }
  return -1;
}
//#endregion

//#region get chars/codes functions
function sliceCharCodes(start, end = undefined) {
  return _data.slice(start, (end || start) + 1);
}

function sliceChars(start, end = undefined) {
  return String.fromCharCode(..._data.slice(start, (end || start) + 1));
}

function getCharCode(index) {    
  return _data[index];
}  
//#endregion
`;class BgDataParser{static _maxWorkersCount=navigator.hardwareConcurrency||4;static _workerTimeout=60*1e3;static _workerSrc=(()=>{const e=new Blob([workerSrc],{type:"text/plain;charset=utf-8;"});return URL.createObjectURL(e)})();static _workerPool=[];static _freeWorkers=new Set;_data;_maxIndex;get maxIndex(){return this._maxIndex}_workerPromise;_prevWorkerReleasePromise;_workerOnMessageHandlers=new Set;_commandsInProgress=0;constructor(e){if(!e?.length)throw new Error("Data is empty");if(!BgDataParser._workerSrc)throw new Error("Worker source is not initialized");this._data=e.buffer,this._maxIndex=e.length-1}static tryGetParser(e){try{return new BgDataParser(e)}catch(t){return console.error(t),null}}static destroy(){this._freeWorkers.clear(),this._workerPool.forEach(e=>e.terminate()),this._workerPool.length=0}static async getFreeWorkerFromPoolAsync(){if(this._freeWorkers.size){const t=this._freeWorkers.values().next().value;return this._freeWorkers.delete(t),t}if(this._workerPool.length<this._maxWorkersCount){const t=new Worker(this._workerSrc);return this._workerPool.push(t),t}return await new Promise((t,s)=>{const r=performance.now(),o=setInterval(()=>{if(this._freeWorkers.size){const a=this._freeWorkers.values().next().value;this._freeWorkers.delete(a),clearInterval(o),t(a)}performance.now()-r>this._workerTimeout&&(clearInterval(o),s("Free worker waiting timeout exceeded"))},20)})}static returnWorkerToPool(e){this._freeWorkers.add(e)}static async transferDataToWorker(e,t){const s=new Promise((r,o)=>{e.onmessage=a=>{a.data.type==="success"?r():(console.log(a),console.log(a.data),o(a))},e.onerror=a=>{console.log(a),console.log(a.message),o(a)},e.postMessage({name:"data-set",bytes:t},[t])});try{await s}catch(r){throw console.error(r),new Error("Error while transfering parser data to worker")}}static async transferDataFromWorker(e){const t=new Promise((s,r)=>{e.onmessage=o=>{if(o.data.type==="success"){const a=o.data.bytes;s(a)}else r(o)},e.onerror=o=>r(o),e.postMessage({name:"data-reset"})});try{return await t}catch{throw new Error("Error while transfering parser data from worker")}}destroy(){}async getSubParserAsync(e,t){const s=await this.execCommandAsync("slice-char-codes",[e,t]);return BgDataParser.tryGetParser(s)}isOutside(e){return e<0||e>this._maxIndex}async isCodeAtAsync(e,t){return await this.execCommandAsync("is-code-at",[e,t])}async getValueTypeAtAsync(e,t=!0){return await this.execCommandAsync("get-value-type-at",[e,t])}async findSubarrayIndexAsync(e,t){return await this.execCommandAsync("find-subarray-index",[e,t])}async findCharIndexAsync(e,t=!0,s){return await this.execCommandAsync("find-char-index",[e,t,s])}async findNewLineIndexAsync(e=!0,t){return await this.execCommandAsync("find-new-line-index",[e,t])}async findSpaceIndexAsync(e=!0,t){return await this.execCommandAsync("find-space-index",[e,t])}async findNonSpaceIndexAsync(e=!0,t){return await this.execCommandAsync("find-non-space-index",[e,t])}async findDelimiterIndexAsync(e=!0,t){return await this.execCommandAsync("find-delimiter-index",[e,t])}async findNonDelimiterIndexAsync(e=!0,t){return await this.execCommandAsync("find-non-delimiter-index",[e,t])}async findRegularIndexAsync(e=!0,t){return await this.execCommandAsync("find-regular-index",[e,t])}async findIrregularIndexAsync(e=!0,t){return await this.execCommandAsync("find-irregular-index",[e,t])}async getIndirectObjectBoundsAtAsync(e,t=!0){return await this.execCommandAsync("get-indirect-object-bounds",[e,t])}async getXrefTableBoundsAtAsync(e,t=!0){return await this.execCommandAsync("get-xref-table-bounds",[e,t])}async getDictBoundsAtAsync(e,t=!0){return await this.execCommandAsync("get-dict-bounds",[e,t])}async getArrayBoundsAtAsync(e,t=!0){return await this.execCommandAsync("get-array-bounds",[e,t])}async getHexBoundsAtAsync(e,t=!0){return await this.execCommandAsync("get-hex-bounds",[e,t])}async getLiteralBoundsAtAsync(e,t=!0){return await this.execCommandAsync("get-literal-bounds",[e,t])}async parseNumberAtAsync(e,t=!1,s=!0){return await this.execCommandAsync("parse-number",[e,t,s])}async parseNameAtAsync(e,t=!0,s=!0){return await this.execCommandAsync("parse-name",[e,t,s])}async parseStringAtAsync(e,t=!0){return await this.execCommandAsync("parse-string",[e,t])}async parseBoolAtAsync(e,t=!0){return await this.execCommandAsync("parse-bool",[e,t])}async parseNumberArrayAtAsync(e,t=!0,s=!0){return await this.execCommandAsync("parse-number-array",[e,t,s])}async parseNameArrayAtAsync(e,t=!0,s=!0){return await this.execCommandAsync("parse-name-array",[e,t,s])}async parseDictTypeAsync(e){return await this.execCommandAsync("parse-dict-type",[e])}async parseDictSubtypeAsync(e){return await this.execCommandAsync("parse-dict-subtype",[e])}async parseDictPropertyByNameAsync(e,t){return await this.execCommandAsync("parse-dict-property-by-name",[e,t])}async skipEmptyAsync(e){return await this.execCommandAsync("skip-empty",[e])}async skipToNextNameAsync(e,t){return await this.execCommandAsync("skip-to-next-name",[e,t])}async sliceCharCodesAsync(e,t){return await this.execCommandAsync("slice-char-codes",[e,t])}async sliceCharsAsync(e,t){return await this.execCommandAsync("slice-chars",[e,t])}onWorkerMessage=e=>{for(const t of this._workerOnMessageHandlers)t(e)};onWorkerError=e=>{throw new Error(`Background worker error: ${e.message}`)};async releaseWorkerAsync(e){this._workerPromise=null;const t=await BgDataParser.transferDataFromWorker(e);this._data=t,e.onmessage=null,e.onerror=null,BgDataParser.returnWorkerToPool(e),this._prevWorkerReleasePromise=null}async getWorkerAsync(){return this._prevWorkerReleasePromise&&await this._prevWorkerReleasePromise,this._workerPromise||(this._workerPromise=new Promise(async(t,s)=>{const r=this._data,o=await BgDataParser.getFreeWorkerFromPoolAsync();await BgDataParser.transferDataToWorker(o,r),o.onmessage=this.onWorkerMessage,o.onerror=this.onWorkerError;const a=setInterval(async()=>{this._commandsInProgress>0||this._workerOnMessageHandlers.size||(clearInterval(a),this._prevWorkerReleasePromise=this.releaseWorkerAsync(o))},50);t(o)})),await this._workerPromise}async execCommandAsync(e,t=[]){this._commandsInProgress++;const s=await this.getWorkerAsync(),r=UUID.getRandomUuid(),o=new Promise((f,m)=>{const g=p=>{p.data.id===r&&(this._workerOnMessageHandlers.delete(g),p.data.type==="error"?m(`Background worker error: ${p.data.message}`):f(p.data.result))};this._workerOnMessageHandlers.add(g)});s.postMessage({id:r,name:e,args:t});const a=await o;return this._commandsInProgress--,a}}const codes={NULL:0,BACKSPACE:8,HORIZONTAL_TAB:9,LINE_FEED:10,VERTICAL_TAB:11,FORM_FEED:12,CARRIAGE_RETURN:13,WHITESPACE:32,EXCLAMATION_MARK:33,DOUBLE_QUOTE:34,HASH:35,DOLLAR:36,PERCENT:37,AMPERSAND:38,QUOTE:39,L_PARENTHESE:40,R_PARENTHESE:41,ASTERISK:42,PLUS:43,COMMA:44,MINUS:45,DOT:46,SLASH:47,D_0:48,D_1:49,D_2:50,D_3:51,D_4:52,D_5:53,D_6:54,D_7:55,D_8:56,D_9:57,COLON:58,SEMICOLON:59,LESS:60,EQUAL:61,GREATER:62,QUESTION_MARK:63,AT:64,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,L_BRACKET:91,BACKSLASH:92,R_BRACKET:93,CARET:94,UNDERSCORE:95,BACKTICK:96,a:97,b:98,c:99,d:100,e:101,f:102,g:103,h:104,i:105,j:106,k:107,l:108,m:109,n:110,o:111,p:112,q:113,r:114,s:115,t:116,u:117,v:118,w:119,x:120,y:121,z:122,L_BRACE:123,VERTICAL_LINE:124,R_BRACE:125,TILDE:126},keywordCodes={NULL:[codes.n,codes.u,codes.l,codes.l],OBJ:[codes.o,codes.b,codes.j],OBJ_END:[codes.e,codes.n,codes.d,codes.o,codes.b,codes.j],STREAM_START:[codes.s,codes.t,codes.r,codes.e,codes.a,codes.m],STREAM_END:[codes.e,codes.n,codes.d,codes.s,codes.t,codes.r,codes.e,codes.a,codes.m],DICT_START:[codes.LESS,codes.LESS],DICT_END:[codes.GREATER,codes.GREATER],ARRAY_START:[codes.L_BRACKET],ARRAY_END:[codes.R_BRACKET],STR_LITERAL_START:[codes.L_PARENTHESE],STR_LITERAL_END:[codes.R_PARENTHESE],STR_HEX_START:[codes.LESS],STR_HEX_END:[codes.GREATER],VERSION:[codes.PERCENT,codes.P,codes.D,codes.F,codes.MINUS],PREV:[codes.SLASH,codes.P,codes.r,codes.e,codes.v],TYPE:[codes.SLASH,codes.T,codes.y,codes.p,codes.e],SUBTYPE:[codes.SLASH,codes.S,codes.u,codes.b,codes.t,codes.y,codes.p,codes.e],FORM:[codes.SLASH,codes.F,codes.o,codes.r,codes.m],XREF_TABLE:[codes.x,codes.r,codes.e,codes.f],XREF_STREAM:[codes.SLASH,codes.X,codes.R,codes.e,codes.f],XREF_HYBRID:[codes.X,codes.R,codes.e,codes.f,codes.S,codes.t,codes.m],XREF_START:[codes.s,codes.t,codes.a,codes.r,codes.t,codes.x,codes.r,codes.e,codes.f],TRAILER:[codes.t,codes.r,codes.a,codes.i,codes.l,codes.e,codes.r],END_OF_FILE:[codes.PERCENT,codes.PERCENT,codes.E,codes.O,codes.F],END_OF_LINE:[codes.CARRIAGE_RETURN,codes.LINE_FEED],TRUE:[codes.t,codes.r,codes.u,codes.e],FALSE:[codes.f,codes.a,codes.l,codes.s,codes.e],CMAP_BEGIN:[codes.b,codes.e,codes.g,codes.i,codes.n,codes.c,codes.m,codes.a,codes.p],CMAP_END:[codes.e,codes.n,codes.d,codes.c,codes.m,codes.a,codes.p],CMAP_BEGIN_CODE_RANGE:[codes.b,codes.e,codes.g,codes.i,codes.n,codes.c,codes.o,codes.d,codes.e,codes.s,codes.p,codes.a,codes.c,codes.e,codes.r,codes.a,codes.n,codes.g,codes.e],CMAP_END_CODE_RANGE:[codes.e,codes.n,codes.d,codes.c,codes.o,codes.d,codes.e,codes.s,codes.p,codes.a,codes.c,codes.e,codes.r,codes.a,codes.n,codes.g,codes.e],CMAP_BEGIN_CHAR:[codes.b,codes.e,codes.g,codes.i,codes.n,codes.b,codes.f,codes.c,codes.h,codes.a,codes.r],CMAP_END_CHAR:[codes.e,codes.n,codes.d,codes.b,codes.f,codes.c,codes.h,codes.a,codes.r],CMAP_BEGIN_RANGE:[codes.b,codes.e,codes.g,codes.i,codes.n,codes.b,codes.f,codes.r,codes.a,codes.n,codes.g,codes.e],CMAP_END_RANGE:[codes.e,codes.n,codes.d,codes.b,codes.f,codes.r,codes.a,codes.n,codes.g,codes.e],AP_STREAM_TEXT_END:[codes.E,codes.T]};class NaiveBytePatternSearch{_pattern;constructor(e){if(!e?.length)throw new Error("Pattern is empty");this._pattern=e}*run(e){const t=this._pattern;if(!e?.length||e.length<t.length)return-1;let s=!1,r=0,o=0;e:for(r;r<e.length;r++){for(o=0;o<t.length;o++)if(e[r+o]!==t[o])continue e;s=!0,yield r}if(!s)return-1}*runBackwards(e){const t=this._pattern;if(!e?.length||e.length<t.length)return-1;let s=!1,r=e.length-1,o=0;const a=t.length-1;e:for(r;r>=0;r--){for(o=0;o<t.length;o++)if(e[r-o]!==t[a-o])continue e;s=!0,yield r-o+1}if(!s)return-1}}class SyncDataParser{static EOL=[codes.CARRIAGE_RETURN,codes.LINE_FEED];static delimiterChars=new Set([codes.PERCENT,codes.L_PARENTHESE,codes.R_PARENTHESE,codes.SLASH,codes.LESS,codes.GREATER,codes.L_BRACKET,codes.R_BRACKET,codes.L_BRACE,codes.R_BRACE]);static spaceChars=new Set([codes.NULL,codes.HORIZONTAL_TAB,codes.LINE_FEED,codes.FORM_FEED,codes.CARRIAGE_RETURN,codes.WHITESPACE]);static digitChars=new Set([codes.D_0,codes.D_1,codes.D_2,codes.D_3,codes.D_4,codes.D_5,codes.D_6,codes.D_7,codes.D_8,codes.D_9]);static newLineChars=new Set([codes.CARRIAGE_RETURN,codes.LINE_FEED]);_data;_maxIndex;get maxIndex(){return this._maxIndex}constructor(e){if(!e?.length)throw new Error("Data is empty");this._data=e,this._maxIndex=e.length-1}static tryGetParser(e){try{return new SyncDataParser(e)}catch(t){return console.error(t),null}}static isRegularChar(e){return isNaN(e)?!1:!this.delimiterChars.has(e)&&!this.spaceChars.has(e)}static isNotRegularChar(e){return isNaN(e)?!0:this.delimiterChars.has(e)||this.spaceChars.has(e)}static isDigit(e){return this.digitChars.has(e)}static isNewLineChar(e){return this.newLineChars.has(e)}static isSpaceChar(e){return this.spaceChars.has(e)}static isNotSpaceChar(e){return!this.spaceChars.has(e)}static isDelimiterChar(e){return this.delimiterChars.has(e)}static isNotDelimiterChar(e){return!this.delimiterChars.has(e)}destroy(){}async getSubParserAsync(e,t){return new SyncDataParser(await this.sliceCharCodesAsync(e,t))}isOutside(e){return e<0||e>this._maxIndex}async isCodeAtAsync(e,t){return this.getCharCode(e)===t}async getValueTypeAtAsync(e,t=!0){if(t&&(e=await this.skipEmptyAsync(e)),this.isOutside(e))return null;const s=this._data,r=e;switch(s[r]){case codes.SLASH:return SyncDataParser.isRegularChar(s[r+1])?valueTypes.NAME:valueTypes.UNKNOWN;case codes.L_BRACKET:return valueTypes.ARRAY;case codes.L_PARENTHESE:return valueTypes.STRING_LITERAL;case codes.LESS:return codes.LESS===s[r+1]?valueTypes.DICTIONARY:valueTypes.STRING_HEX;case codes.PERCENT:return valueTypes.COMMENT;case codes.D_0:case codes.D_1:case codes.D_2:case codes.D_3:case codes.D_4:case codes.D_5:case codes.D_6:case codes.D_7:case codes.D_8:case codes.D_9:const a=await this.findDelimiterIndexAsync(!0,r+1);if(a!==-1){const f=await this.findCharIndexAsync(codes.R,!1,a-1);if(f!==-1&&f>r&&!SyncDataParser.isRegularChar(s[f+1]))return valueTypes.REF}return valueTypes.NUMBER;case codes.DOT:case codes.MINUS:return SyncDataParser.isDigit(s[r+1])?valueTypes.NUMBER:valueTypes.UNKNOWN;case codes.s:return s[r+1]===codes.t&&s[r+2]===codes.r&&s[r+3]===codes.e&&s[r+4]===codes.a&&s[r+5]===codes.m?valueTypes.STREAM:valueTypes.UNKNOWN;case codes.t:return s[r+1]===codes.r&&s[r+2]===codes.u&&s[r+3]===codes.e?valueTypes.BOOLEAN:valueTypes.UNKNOWN;case codes.f:return s[r+1]===codes.a&&s[r+2]===codes.l&&s[r+3]===codes.s&&s[r+4]===codes.e?valueTypes.BOOLEAN:valueTypes.UNKNOWN;default:return valueTypes.UNKNOWN}}async findSubarrayIndexAsync(e,t){const s=this._data;if(!e?.length)return null;const r=t?.direction??!0,o=Math.max(Math.min(t?.minIndex??0,this._maxIndex),0),a=Math.max(Math.min(t?.maxIndex??this._maxIndex,this._maxIndex),0),f=!t?.closedOnly,m=new NaiveBytePatternSearch(e);let g,p,y;r?y=m.run(s.subarray(o,a+1)):y=m.runBackwards(s.subarray(o,a+1));for(const C of y){if(C===-1)return null;if(g=C+o,p=g+e.length-1,f||p===a||!SyncDataParser.isRegularChar(s[p+1]))return{start:g,end:p}}return null}async findCharIndexAsync(e,t=!0,s){const r=this._data;let o=isNaN(s)?t?0:this._maxIndex:s;if(t){for(o;o<=this._maxIndex;o++)if(r[o]===e)return o}else for(o;o>=0;o--)if(r[o]===e)return o;return-1}async findNewLineIndexAsync(e=!0,t){let s;const r=this._data;let o=isNaN(t)?e?0:this._maxIndex:t;if(e){for(o;o<=this._maxIndex;o++)if(SyncDataParser.isNewLineChar(r[o])){s=o;break}}else for(o;o>=0;o--)if(SyncDataParser.isNewLineChar(r[o])){s=o;break}return s===void 0?-1:e?(this._data[s]===codes.CARRIAGE_RETURN&&this._data[s+1]===codes.LINE_FEED&&s++,Math.min(s+1,this._maxIndex)):(this._data[s]===codes.LINE_FEED&&this._data[s-1]===codes.CARRIAGE_RETURN&&s--,Math.max(s-1,0))}async findSpaceIndexAsync(e=!0,t){const s=this._data;let r=isNaN(t)?e?0:this._maxIndex:t;if(e){for(r;r<=this._maxIndex;r++)if(SyncDataParser.isSpaceChar(s[r]))return r}else for(r;r>=0;r--)if(SyncDataParser.isSpaceChar(s[r]))return r;return-1}async findNonSpaceIndexAsync(e=!0,t){const s=this._data;let r=isNaN(t)?e?0:this._maxIndex:t;if(e){for(r;r<=this._maxIndex;r++)if(SyncDataParser.isNotSpaceChar(s[r]))return r}else for(r;r>=0;r--)if(SyncDataParser.isNotSpaceChar(s[r]))return r;return-1}async findDelimiterIndexAsync(e=!0,t){const s=this._data;let r=isNaN(t)?e?0:this._maxIndex:t;if(e){for(r;r<=this._maxIndex;r++)if(SyncDataParser.isDelimiterChar(s[r]))return r}else for(r;r>=0;r--)if(SyncDataParser.isDelimiterChar(s[r]))return r;return-1}async findNonDelimiterIndexAsync(e=!0,t){const s=this._data;let r=isNaN(t)?e?0:this._maxIndex:t;if(e){for(r;r<=this._maxIndex;r++)if(SyncDataParser.isNotDelimiterChar(s[r]))return r}else for(r;r>=0;r--)if(SyncDataParser.isNotDelimiterChar(s[r]))return r;return-1}async findRegularIndexAsync(e=!0,t){const s=this._data;let r=isNaN(t)?e?0:this._maxIndex:t;if(e){for(r;r<=this._maxIndex;r++)if(SyncDataParser.isRegularChar(s[r]))return r}else for(r;r>=0;r--)if(SyncDataParser.isRegularChar(s[r]))return r;return-1}async findIrregularIndexAsync(e=!0,t){const s=this._data;let r=isNaN(t)?e?0:this._maxIndex:t;if(e){for(r;r<=this._maxIndex;r++)if(SyncDataParser.isNotRegularChar(s[r]))return r}else for(r;r>=0;r--)if(SyncDataParser.isNotRegularChar(s[r]))return r;return-1}async getIndirectObjectBoundsAtAsync(e,t=!0){if(t&&(e=await this.skipEmptyAsync(e)),this.isOutside(e))return null;const s=await this.findSubarrayIndexAsync(keywordCodes.OBJ,{minIndex:e,closedOnly:!0});if(!s)return null;let r=await this.findNonSpaceIndexAsync(!0,s.end+1);if(r===-1)return null;const o=await this.findSubarrayIndexAsync(keywordCodes.OBJ_END,{minIndex:r,closedOnly:!0});if(!o)return null;let a=await this.findNonSpaceIndexAsync(!1,o.start-1);return this.getCharCode(r)===codes.LESS&&this.getCharCode(r+1)===codes.LESS&&this.getCharCode(a-1)===codes.GREATER&&this.getCharCode(a)===codes.GREATER&&(r+=2,a-=2),{start:s.start,end:o.end,contentStart:r,contentEnd:a}}async getXrefTableBoundsAtAsync(e,t=!0){if(t&&(e=await this.skipEmptyAsync(e)),this.isOutside(e)||this._data[e]!==codes.x)return null;const s=await this.findSubarrayIndexAsync(keywordCodes.XREF_TABLE,{minIndex:e});if(!s)return null;const r=await this.findNonSpaceIndexAsync(!0,s.end+1);if(r===-1)return null;const o=await this.findSubarrayIndexAsync(keywordCodes.TRAILER,{minIndex:s.end+1});if(!o)return null;const a=await this.findNonSpaceIndexAsync(!1,o.start-1);return a<r?null:{start:s.start,end:o.end,contentStart:r,contentEnd:a}}async getDictBoundsAtAsync(e,t=!0){if(t&&(e=await this.skipEmptyAsync(e)),this.isOutside(e)||this._data[e]!==codes.LESS||this._data[e+1]!==codes.LESS)return null;const s=await this.findNonSpaceIndexAsync(!0,e+2);if(s===-1)return null;let r=1,o=!0,a=0,f=s,m,g;for(;r;)g=m,m=this._data[f++],m===codes.L_PARENTHESE&&(!a||g!==codes.BACKSLASH)&&a++,m===codes.R_PARENTHESE&&a&&g!==codes.BACKSLASH&&a--,!a&&(o?o=!1:m===codes.LESS&&m===g?(r++,o=!0):m===codes.GREATER&&m===g&&(r--,o=!0));const p=f-1,y=await this.findNonSpaceIndexAsync(!1,p-2);return y<s?{start:e,end:p}:{start:e,end:p,contentStart:s,contentEnd:y}}async getArrayBoundsAtAsync(e,t=!0){if(t&&(e=await this.skipEmptyAsync(e)),this.isOutside(e)||this._data[e]!==codes.L_BRACKET)return null;let s=1,r=e+1,o;for(;s;)o=this._data[r++],o===codes.L_BRACKET?s++:o===codes.R_BRACKET&&s--;const a=r-1;return a-e<1?null:{start:e,end:a}}async getHexBoundsAtAsync(e,t=!0){if(t&&(e=await this.skipEmptyAsync(e)),this.isOutside(e)||this.getCharCode(e)!==codes.LESS)return null;const s=await this.findCharIndexAsync(codes.GREATER,!0,e+1);return s===-1?null:{start:e,end:s}}async getLiteralBoundsAtAsync(e,t=!0){if(t&&(e=await this.skipEmptyAsync(e)),this.isOutside(e)||this.getCharCode(e)!==codes.L_PARENTHESE)return null;let s=e,r,o=!1,a=0;for(;a||r!==codes.R_PARENTHESE||o;){if(s>this._maxIndex)return null;r=this.getCharCode(s++),o||(r===codes.L_PARENTHESE?a+=1:a&&r===codes.R_PARENTHESE&&(a-=1)),!o&&r===codes.BACKSLASH?o=!0:o=!1}return{start:e,end:s-1}}async parseNumberAtAsync(e,t=!1,s=!0){if(s&&(e=await this.skipEmptyAsync(e)),this.isOutside(e)||!SyncDataParser.isRegularChar(this._data[e]))return null;let r=e,o="",a=this._data[r];for(a===codes.MINUS?(o+="-",a=this._data[++r]):a===codes.DOT&&(o+="0.",a=this._data[++r]);SyncDataParser.isDigit(a)||t&&a===codes.DOT;)o+=String.fromCharCode(a),a=this._data[++r];return o?{value:+o,start:e,end:r-1}:null}async parseNameAtAsync(e,t=!0,s=!0){if(s&&(e=await this.skipEmptyAsync(e)),this.isOutside(e)||this._data[e]!==codes.SLASH)return null;let r=e+1,o=t?"/":"",a=this._data[r];for(;SyncDataParser.isRegularChar(a);)o+=String.fromCharCode(a),a=this._data[++r];return o.length>1?{value:o,start:e,end:r-1}:null}async parseStringAtAsync(e,t=!0){if(t&&(e=await this.skipEmptyAsync(e)),this.isOutside(e))return null;let s=e,r="",o=this._data[s];for(;SyncDataParser.isRegularChar(o);)r+=String.fromCharCode(o),o=this._data[++s];return r.length!==0?{value:r,start:e,end:s-1}:null}async parseBoolAtAsync(e,t=!0){if(t&&(e=await this.skipEmptyAsync(e)),this.isOutside(e))return null;const s=await this.findDelimiterIndexAsync(!0,e),r=await this.findSubarrayIndexAsync(keywordCodes.TRUE,{minIndex:e,maxIndex:s===-1?this._maxIndex:s});if(r)return{value:!0,start:e,end:r.end};const o=await this.findSubarrayIndexAsync(keywordCodes.FALSE,{minIndex:e,maxIndex:s===-1?this._maxIndex:s});return o?{value:!1,start:e,end:o.end}:null}async parseNumberArrayAtAsync(e,t=!0,s=!0){const r=await this.getArrayBoundsAtAsync(e,s);if(!r)return null;const o=[];let a,f=r.start+1;for(;f<r.end&&(a=await this.parseNumberAtAsync(f,t,!0),!!a);)o.push(a.value),f=a.end+1;return{value:o,start:r.start,end:r.end}}async parseNameArrayAtAsync(e,t=!0,s=!0){const r=await this.getArrayBoundsAtAsync(e,s);if(!r)return null;const o=[];let a,f=r.start+1;for(;f<r.end&&(a=await this.parseNameAtAsync(f,t,!0),!!a);)o.push(a.value),f=a.end+1;return{value:o,start:r.start,end:r.end}}async parseDictTypeAsync(e){return await this.parseDictPropertyByNameAsync(keywordCodes.TYPE,e)}async parseDictSubtypeAsync(e){return await this.parseDictPropertyByNameAsync(keywordCodes.SUBTYPE,e)}async parseDictPropertyByNameAsync(e,t){const s=this._data;if(!e?.length)return null;const r=Math.max(Math.min(t.start??0,this._maxIndex),0),o=Math.max(Math.min(t.end??this._maxIndex,this._maxIndex),0);let a,f=r,m,g,p,y=0,C=!0,A=0;e:for(f;f<=o;f++)if(p=g,g=s[f],g===codes.L_PARENTHESE&&(!A||p!==codes.BACKSLASH)&&A++,g===codes.R_PARENTHESE&&A&&p!==codes.BACKSLASH&&A--,!A){for(C?C=!1:g===codes.LESS&&g===p?(y++,C=!0):g===codes.GREATER&&g===p&&(y--,C=!0),m=0;m<e.length;m++)if(s[f+m]!==e[m])continue e;if(y===1&&!SyncDataParser.isRegularChar(s[f+m])){a={start:f,end:f+m-1};break}}if(!a)return null;const w=await this.parseNameAtAsync(a.end+1);return w?w.value:null}async skipEmptyAsync(e){let t=await this.findNonSpaceIndexAsync(!0,e);if(t===-1)return-1;if(this._data[t]===codes.PERCENT){const s=await this.findNewLineIndexAsync(!0,t+1);if(s===-1)return-1;t=await this.findNonSpaceIndexAsync(!0,s)}return t}async skipToNextNameAsync(e,t){if(e||=0,t=t?Math.min(t,this._maxIndex):0,t<e)return-1;let s=e;for(;s<=t;){const r=await this.getValueTypeAtAsync(s,!0);if(r){let o;switch(r){case valueTypes.DICTIONARY:o=await this.getDictBoundsAtAsync(s,!1);break;case valueTypes.ARRAY:o=await this.getArrayBoundsAtAsync(s,!1);break;case valueTypes.STRING_LITERAL:o=await this.getLiteralBoundsAtAsync(s,!1);break;case valueTypes.STRING_HEX:o=await this.getHexBoundsAtAsync(s,!1);break;case valueTypes.NUMBER:const a=await this.parseNumberAtAsync(s,!0,!1);a&&(o=a);break;case valueTypes.BOOLEAN:const f=await this.parseBoolAtAsync(s,!1);f&&(o=f);break;case valueTypes.COMMENT:break;case valueTypes.NAME:return s;default:s++;continue}if(o){s=o.end+1,o=null;continue}}s++}return-1}async sliceCharCodesAsync(e,t){return this._data.slice(e,(t||e)+1)}async sliceCharsAsync(e,t){return String.fromCharCode(...this._data.slice(e,(t||e)+1))}getCharCode(e){return this._data[e]}}class DataWriter{_encoder;_sourceData;_dataToAppend=[];_pointer;get offset(){return this._pointer}constructor(e){if(!e?.length)throw new Error("Data is empty");this._encoder=new TextEncoder,this._sourceData=e.slice(0),this._pointer=e.length,this.fixEof()}getCurrentData(){const e=new Uint8Array(this._sourceData.length+this._dataToAppend.length);return e.set(this._sourceData,0),e.set(this._dataToAppend,this._sourceData.length),e}writeBytes(e){if(e?.length){for(let t=0;t<e.length;t++)this._dataToAppend.push(e[t]);this._pointer+=e.length}}writeIndirectObject(e,t){if(!e?.ref||!t)return;const s=[...this._encoder.encode(`${e.ref.id} ${e.ref.generation} `),...keywordCodes.OBJ,...keywordCodes.END_OF_LINE,...t.toArray(e),...keywordCodes.END_OF_LINE,...keywordCodes.OBJ_END,...keywordCodes.END_OF_LINE];this.writeBytes(s)}writeIndirectArray(e,t){if(!e?.ref||!t)return;const s=[...this._encoder.encode(`${e.ref.id} ${e.ref.generation} `),...keywordCodes.OBJ,...keywordCodes.END_OF_LINE,codes.L_BRACKET];for(const r of t)s.push(codes.WHITESPACE,...r.toArray(e));s.push(codes.R_BRACKET,...keywordCodes.END_OF_LINE,...keywordCodes.OBJ_END,...keywordCodes.END_OF_LINE),this.writeBytes(s)}writeEof(e){const t=[...keywordCodes.XREF_START,...keywordCodes.END_OF_LINE,...this._encoder.encode(e+""),...keywordCodes.END_OF_LINE,...keywordCodes.END_OF_FILE,...keywordCodes.END_OF_LINE];this.writeBytes(t)}fixEof(){this._sourceData[this._pointer-1]!==codes.LINE_FEED&&(this._sourceData[this._pointer-2]!==codes.CARRIAGE_RETURN?(this._dataToAppend.push(codes.CARRIAGE_RETURN,codes.LINE_FEED),this._pointer+=2):(this._dataToAppend.push(codes.LINE_FEED),this._pointer+=1))}}class XRefEntry{constructor(e,t,s,r,o,a,f){this.type=e,this.id=t,this.generation=s,this.byteOffset=r,this.nextFreeId=o,this.streamId=a,this.streamIndex=f}static digitChars=new Set([codes.D_0,codes.D_1,codes.D_2,codes.D_3,codes.D_4,codes.D_5,codes.D_6,codes.D_7,codes.D_8,codes.D_9]);static isDigit(e){return this.digitChars.has(e)}static*fromTableBytes(e){let t=0,s=0;for(;t<e.length;){const r=[];let o=e[t++];for(;XRefEntry.isDigit(o);)r.push(o),o=e[t++];let a=parseInt(r.map(p=>String.fromCharCode(p)).join(""),10);const f=[];let m=e[t++];for(;XRefEntry.isDigit(m);)f.push(m),m=e[t++];const g=parseInt(f.map(p=>String.fromCharCode(p)).join(""),10);for(;!XRefEntry.isDigit(e[t]);)t++;for(s=0;s<g;s++){const p=parseInt(Array.from(e.subarray(t,t+10)).map(A=>String.fromCharCode(A)).join(""),10);t+=11;const y=parseInt(Array.from(e.subarray(t,t+5)).map(A=>String.fromCharCode(A)).join(""),10);t+=6;const C=e[t];C===codes.f?yield new XRefEntry(xRefEntryTypes.FREE,a++,y,null,p):C===codes.n&&(yield new XRefEntry(xRefEntryTypes.NORMAL,a++,y,p)),t+=3}}}static*fromStreamBytes(e,t,s){const[r,o,a]=t,f=r+o+a;if(e.length%f)throw new Error("Incorrect stream length");const m=e.length/f,g=new Array(m);if(s?.length){let _,E,v=0;for(let k=0;k<s.length;k++)if(!(k%2))_=s[k];else for(E=0;E<s[k];E++)g[v++]=_+E}else{let _=0;for(;_<m;)g[_++]=_}let p=0,y=0,C,A,w;for(;p<e.length;)switch(C=r?ByteUtils.parseIntFromBytes(e.slice(p,p+r)):1,p+=r,A=ByteUtils.parseIntFromBytes(e.slice(p,p+o)),p+=o,w=a?ByteUtils.parseIntFromBytes(e.slice(p,p+a)):null,p+=a,C){case xRefEntryTypes.FREE:yield new XRefEntry(xRefEntryTypes.FREE,g[y++],w??maxGeneration,null,A);break;case xRefEntryTypes.NORMAL:yield new XRefEntry(xRefEntryTypes.NORMAL,g[y++],w??0,A);break;case xRefEntryTypes.COMPRESSED:yield new XRefEntry(xRefEntryTypes.COMPRESSED,g[y++],0,null,null,A,w);break}}static toTableBytes(e){if(!e?.length)return null;const t=new TextEncoder,s=this.groupEntries(e);let r=new Uint8Array,o,a;for(const f of s){a=`${f[0]} ${f[1].length}\r
`,o=new Uint8Array(r.length+a.length),o.set(r),o.set(t.encode(a),r.length),r=o;for(const m of f[1]){switch(m.type){case xRefEntryTypes.FREE:a=`${m.nextFreeId.toString().padStart(10,"0")} ${m.generation.toString().padStart(5,"0")} f\r
`;break;case xRefEntryTypes.NORMAL:a=`${m.byteOffset.toString().padStart(10,"0")} ${m.generation.toString().padStart(5,"0")} n\r
`;break;default:continue}o=new Uint8Array(r.length+a.length),o.set(r),o.set(t.encode(a),r.length),r=o}}return r}static toStreamBytes(e,t=[1,4,2]){if(!e?.length)return null;if(Math.min(...t)<0)throw new Error("Negative length values are not permitted");let[s,r,o]=t;s??=0,r??=4,o??=0;const a=s+r+o;let f,m,g;switch(s){case 0:f=()=>new Uint8Array;break;case 1:f=ByteUtils.int8ToBytes;break;case 2:f=ByteUtils.int16ToBytes;break;default:m=v=>new Uint8Array([...new Array(s-2).fill(0),...ByteUtils.int16ToBytes(v)]);break}switch(r){case 1:m=ByteUtils.int8ToBytes;break;case 2:m=ByteUtils.int16ToBytes;break;case 3:m=v=>new Uint8Array([0,...ByteUtils.int16ToBytes(v)]);break;case 4:m=ByteUtils.int32ToBytes;break;default:m=v=>new Uint8Array([...new Array(s-4).fill(0),...ByteUtils.int32ToBytes(v)]);break}switch(o){case 0:g=()=>new Uint8Array;break;case 1:g=ByteUtils.int8ToBytes;break;case 2:g=ByteUtils.int16ToBytes;break;default:m=v=>new Uint8Array([...new Array(s-2).fill(0),...ByteUtils.int16ToBytes(v)]);break}new TextEncoder;const p=this.groupEntries(e),y=[];let C=new Uint8Array,A,w,_,E;for(const v of p){y.push(v[0],v[1].length);for(const k of v[1]){switch(k.type){case xRefEntryTypes.FREE:w=f(0),_=m(k.nextFreeId),E=g(k.generation);break;case xRefEntryTypes.NORMAL:w=f(1),_=m(k.byteOffset),E=g(k.generation);break;case xRefEntryTypes.COMPRESSED:w=f(2),_=m(k.streamId),E=g(k.streamIndex);break;default:continue}A=new Uint8Array(C.length+a),A.set(C),A.set(w,C.length),A.set(_,C.length+s),A.set(E,C.length+s+r),C=A}}return{bytes:C,index:y}}static groupEntries(e){e.sort((a,f)=>a.id-f.id);const t=[];let s,r,o;for(const a of e)a.id!==o+1?(r?.length&&t.push([s,r]),s=a.id,r=[a]):r.push(a),o=a.id;return r?.length&&t.push([s,r]),t}}class ReferenceDataChange{_refData;_freeLinkedList;_usedMap;_size;get size(){return this._size}constructor(e){this._refData=e,this._size=e.size;const t=new LinkedList;for(const s of e.freeLinkedList)t.push(Object.assign({},s));this._freeLinkedList=t,this._usedMap=new Map}getUsedRef(e){return this._usedMap.get(e)}takeFreeRef(e,t=!1){let s;if(!t&&this._freeLinkedList.length>1){const r=this._freeLinkedList.pop();this._freeLinkedList.tail.nextFreeId=0,s={id:r.id,generation:r.generation,byteOffset:e}}else s={id:this._size++,generation:0,byteOffset:e};return this._usedMap.set(s.id,s),s}setRefFree(e){if(this._usedMap.has(e)&&(this._usedMap.delete(e),this._size>this._refData.size&&this._size===e+1&&this._size--),this._refData.isUsed(e)){const t=this._refData.getGeneration(e),s={id:e,generation:t+1,nextFreeId:0};if(this._freeLinkedList.findIndex(s,(a,f)=>a.id===f.id&&a.generation<=f.generation)!==-1)return;const o=this._freeLinkedList.tail;o.nextFreeId=e,this._freeLinkedList.push(s)}}updateUsedRef(e){if(e.compressed&&e.generation)throw new Error(`Compressed ref generation can't be greater than zero: '${e.id} ${e.generation} R'`);if(this.isFreed(e))throw new Error(`The reference is freed: '${e.id} ${e.generation} R'`);const t=this._usedMap.get(e.id);if(t)throw new Error(`Same reference has been issued twice: '${t.id} ${t.generation} R'`);if(this._refData.isUsed(e.id)){const s=this._refData.getGeneration(e.id);if(e.generation>=s)return this._usedMap.set(e.id,e),!0;throw new Error(`The reference has an old generation: '${t.id} ${t.generation} R'`)}throw new Error(`The reference is not used: '${t.id} ${t.generation} R'`)}exportEntries(){const e=[];for(const t of this._freeLinkedList)e.push(new XRefEntry(xRefEntryTypes.FREE,t.id,t.generation,null,t.nextFreeId));return this._usedMap.forEach(t=>{t.compressed?e.push(new XRefEntry(xRefEntryTypes.COMPRESSED,t.id,0,null,null,t.streamId,t.streamIndex)):e.push(new XRefEntry(xRefEntryTypes.NORMAL,t.id,t.generation,t.byteOffset))}),e}isFreed(e){return this._freeLinkedList.has(e,(t,s)=>t.id===s.id&&t.generation<s.generation)}isUsedInSource(e){return this._refData.isUsed(e)}}class ObjectId{id;generation;constructor(e,t){this.id=e??0,this.generation=t??0}static async parseAsync(e,t,s=!0){if(s&&(t=await e.findRegularIndexAsync(!0,t)),t<0||t>e.maxIndex)return null;const r=await e.parseNumberAtAsync(t,!1,!1);if(!r||isNaN(r.value))return null;const o=await e.parseNumberAtAsync(r.end+2,!1,!1);return!o||isNaN(o.value)?null:{value:new ObjectId(r.value,o.value),start:t,end:o.end}}static async parseRefAsync(e,t,s=!0){const r=await ObjectId.parseAsync(e,t,s);if(!r)return null;const o=r.end+2,a=await e.findSubarrayIndexAsync([codes.R],{minIndex:o,closedOnly:!0});return!a||a.start!==o?null:{value:r.value,start:r.start,end:a.end}}static async parseRefArrayAsync(e,t,s=!0){const r=await e.getArrayBoundsAtAsync(t,s);if(!r)return null;const o=[];let a,f=r.start+1;for(;f<r.end&&(a=await ObjectId.parseRefAsync(e,f,!0),!!a);)o.push(a.value),f=a.end+1;return{value:o,start:r.start,end:r.end}}static fromRef(e){return new ObjectId(e.id,e.generation)}equals(e){return this.id===e.id&&this.generation===e.generation}toArray(e){return new TextEncoder().encode(`${this.id} ${this.generation} R`)}toString(){return this.id+"|"+this.generation}}class DateString{_source;get source(){return this._source}_date;get date(){return new Date(this._date)}constructor(e,t){this._source=e,this._date=new Date(t)}static async parseAsync(e,t,s=null,r=!0){if(r&&(t=await e.skipEmptyAsync(t)),e.isOutside(t)||!await e.isCodeAtAsync(t,codes.L_PARENTHESE))return null;const o=await e.findCharIndexAsync(codes.R_PARENTHESE,!0,t);if(o===-1)return null;let a=await e.sliceCharCodesAsync(t+1,o-1);s?.ref&&s.stringCryptor&&(a=s.stringCryptor.decrypt(a,s.ref));try{return{value:DateString.fromArray(a),start:t,end:o}}catch{return null}}static fromDate(e){const t=e.getFullYear(),s=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0"),o=String(e.getHours()).padStart(2,"0"),a=String(e.getMinutes()).padStart(2,"0"),f=String(e.getSeconds()).padStart(2,"0"),m=`D:${t}${s}${r}${o}${a}${f}`;return new DateString(m,e)}static fromString(e){const t=/D:(?<Y>\d{4})(?<M>\d{2})(?<D>\d{2})(?<h>\d{2})(?<m>\d{2})(?<s>\d{2})/.exec(e),s=new Date(+t.groups.Y,+t.groups.M-1,+t.groups.D,+t.groups.h,+t.groups.m,+t.groups.s);return new DateString(e,s)}static fromArray(e){const t=new TextDecoder().decode(e);return DateString.fromString(t)}toArray(e){let t=new TextEncoder().encode(this._source);return e?.ref&&e.stringCryptor&&(t=e.stringCryptor.encrypt(t,e.ref)),new Uint8Array([...keywordCodes.STR_LITERAL_START,...t,...keywordCodes.STR_LITERAL_END])}}class HexString{_literal;get literal(){return this._literal}_hex;get hex(){return this._hex.slice()}_bytes;get bytes(){return this._bytes.slice()}constructor(e,t,s){this._literal=e,this._hex=t,this._bytes=s}static async parseAsync(e,t,s=null,r=!0){const o=await e.getHexBoundsAtAsync(t,r);if(!o)return null;let a=await e.sliceCharCodesAsync(o.start+1,o.end-1);return s?.ref&&s.stringCryptor&&(a=s.stringCryptor.decrypt(a,s.ref)),{value:HexString.fromBytes(a),start:o.start,end:o.end}}static async parseArrayAsync(e,t,s=null,r=!0){const o=await e.getArrayBoundsAtAsync(t,r);if(!o)return null;const a=[];let f,m=o.start+1;for(;m<o.end&&(f=await HexString.parseAsync(e,m,s,r),!!f);)a.push(f.value),m=f.end+1;return{value:a,start:o.start,end:o.end}}static fromBytes(e){const t=new TextDecoder().decode(e),s=ByteUtils.hexStringToBytes(t);return new HexString(t,s,e)}static fromHexBytes(e){let t="";e.forEach(r=>t+=r.toString(16).padStart(2,"0"));const s=new TextEncoder().encode(t);return new HexString(t,e,s)}static fromString(e){const t=ByteUtils.hexStringToBytes(e),s=new TextEncoder().encode(e);return new HexString(e,t,s)}toArray(e){return new Uint8Array([...keywordCodes.STR_HEX_START,...this._bytes,...keywordCodes.STR_HEX_END])}}class LiteralString{_literal;get literal(){return this._literal}_bytes;get bytes(){return this._bytes.slice()}constructor(e,t){this._literal=e,this._bytes=t}static async parseAsync(e,t,s=null,r=!0){const o=await e.getLiteralBoundsAtAsync(t,r);if(!o)return;let a=LiteralString.unescape(await e.sliceCharCodesAsync(o.start+1,o.end-1));return s?.ref&&s.stringCryptor&&(a=s.stringCryptor.decrypt(a,s.ref)),{value:LiteralString.fromBytes(a),start:o.start,end:o.end}}static async parseArrayAsync(e,t,s=null,r=!0){const o=await e.getArrayBoundsAtAsync(t,r);if(!o)return null;const a=[];let f,m=o.start+1;for(;m<o.end&&(f=await LiteralString.parseAsync(e,m,s,r),!!f);)a.push(f.value),m=f.end+1;return{value:a,start:o.start,end:o.end}}static fromBytes(e){const s=(e[0]===254&&e[1]===255?new TextDecoder("utf-16be"):new TextDecoder).decode(e);return new LiteralString(s,e)}static fromString(e){const t=[];t.push(254,255);for(let s=0;s<e.length;s++){const r=e.charCodeAt(s);t.push((r&65280)>>>8),t.push(r&255)}return new LiteralString(e,new Uint8Array(t))}static escape(e){const t=[];for(let s=0;s<e.length;s++)switch(e[s]){case codes.LINE_FEED:t.push(codes.BACKSLASH),t.push(codes.n);break;case codes.CARRIAGE_RETURN:t.push(codes.BACKSLASH),t.push(codes.r);break;case codes.HORIZONTAL_TAB:t.push(codes.BACKSLASH),t.push(codes.t);break;case codes.BACKSPACE:t.push(codes.BACKSLASH),t.push(codes.b);break;case codes.FORM_FEED:t.push(codes.BACKSLASH),t.push(codes.f);break;case codes.L_PARENTHESE:t.push(codes.BACKSLASH),t.push(codes.L_PARENTHESE);break;case codes.R_PARENTHESE:t.push(codes.BACKSLASH),t.push(codes.R_PARENTHESE);break;case codes.BACKSLASH:t.push(codes.BACKSLASH),t.push(codes.BACKSLASH);break;default:t.push(e[s]);break}return new Uint8Array(t)}static unescape(e){const t=[];let s=!1;for(let r=0;r<e.length;r++){if(s){switch(e[r]){case codes.n:t.push(codes.LINE_FEED);break;case codes.r:t.push(codes.CARRIAGE_RETURN);break;case codes.t:t.push(codes.HORIZONTAL_TAB);break;case codes.b:t.push(codes.BACKSPACE);break;case codes.f:t.push(codes.FORM_FEED);break;case codes.L_PARENTHESE:t.push(codes.L_PARENTHESE);break;case codes.R_PARENTHESE:t.push(codes.R_PARENTHESE);break;case codes.BACKSLASH:t.push(codes.BACKSLASH);break;default:t.push(e[r]);break}s=!1;continue}if(e[r]===codes.BACKSLASH){s=!0;continue}t.push(e[r])}return new Uint8Array(t)}toArray(e){const t=e?.ref&&e.stringCryptor?e.stringCryptor.encrypt(this._bytes,e.ref):this._bytes;return new Uint8Array([...keywordCodes.STR_LITERAL_START,...LiteralString.escape(t),...keywordCodes.STR_LITERAL_END])}}class PdfObject{$onChangeAction;$onEditAction;_sourceBytes;get sourceBytes(){return this._sourceBytes?.slice()}get sourceChars(){return this._sourceBytes?String.fromCharCode(...this._sourceBytes.slice(0,this._sourceBytes.length)):""}_ref;get ref(){return this._ref}set ref(e){this._ref=e}get id(){return this._ref?.id}get generation(){return this._ref?.generation}_proxy;_added=!1;get added(){return this._added}_edited=!1;get edited(){return this._edited}_deleted=!1;get deleted(){return this._deleted}onChange={set:(e,t,s)=>(t[0]!=="_"&&t[0]!=="$"&&(this._edited||=!0,this.$onChangeAction&&this.$onChangeAction()),e[t]=s,!0)};constructor(){}static async getDataParserAsync(e){return BgDataParser.tryGetParser(e.slice())??SyncDataParser.tryGetParser(e)}markAsDeleted(e=!0){this._deleted=e}initProxy(){const e=new Proxy(this,this.onChange);return this._proxy=e,e}getProxy(){return this._proxy||this}encodePrimitiveArray(e,t){t||=new TextEncoder;const s=[codes.L_BRACKET];return e.forEach(r=>s.push(...t.encode(" "+r))),s.push(codes.R_BRACKET),s}encodeNestedPrimitiveArray(e,t){t||=new TextEncoder;const s=[codes.L_BRACKET];return e.forEach(r=>{s.push(codes.L_BRACKET),r.forEach(o=>s.push(...t.encode(" "+o))),s.push(codes.R_BRACKET)}),s.push(codes.R_BRACKET),s}encodeSerializableArray(e,t){const s=[codes.L_BRACKET];return e.forEach(r=>s.push(codes.WHITESPACE,...r.toArray(t))),s.push(codes.R_BRACKET),s}async parseRefPropAsync(e,t,s){const r=await ObjectId.parseRefAsync(t,s);return this.setParsedProp(e,r)}async parseRefArrayPropAsync(e,t,s){const r=await ObjectId.parseRefArrayAsync(t,s);return this.setParsedProp(e,r)}async parseBoolPropAsync(e,t,s){const r=await t.parseBoolAtAsync(s);return this.setParsedProp(e,r)}async parseNamePropAsync(e,t,s,r=!0){const o=await t.parseNameAtAsync(s,r);return this.setParsedProp(e,o)}async parseNameArrayPropAsync(e,t,s,r=!0){const o=await t.parseNameArrayAtAsync(s,r);return this.setParsedProp(e,o)}async parseNumberPropAsync(e,t,s,r=!0){const o=await t.parseNumberAtAsync(s,r);return this.setParsedProp(e,o)}async parseNumberArrayPropAsync(e,t,s,r=!0){const o=await t.parseNumberArrayAtAsync(s,r);return this.setParsedProp(e,o)}async parseDatePropAsync(e,t,s,r){const o=await DateString.parseAsync(t,s,r);return this.setParsedProp(e,o)}async parseLiteralPropAsync(e,t,s,r){const o=await LiteralString.parseAsync(t,s,r);return this.setParsedProp(e,o)}async parseHexPropAsync(e,t,s,r){const o=await HexString.parseAsync(t,s,r);return this.setParsedProp(e,o)}setParsedProp(e,t){if(!t)throw new Error(`Can't parse ${e} property value`);return this[e.slice(1)]=t.value,t.end+1}}class PdfDict extends PdfObject{Type;_streamId;get streamId(){return this._streamId}constructor(e){super(),this.Type=e}toArray(e){const t=new TextEncoder,s=[...keywordCodes.DICT_START];return this.Type&&s.push(...keywordCodes.TYPE,...t.encode(this.Type)),s.push(...keywordCodes.DICT_END),new Uint8Array(s)}async parsePropsAsync(e){if(!e)throw new Error("Parse info is empty");const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;this._ref=e.cryptInfo?.ref,this._streamId=e.streamId,this._sourceBytes=await t.sliceCharCodesAsync(r,o);let a=await t.skipToNextNameAsync(r,o-1);if(a===-1)throw new Error("Dict is empty (has no properties)");let f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/Type":const g=await t.parseNameAtAsync(a);if(g){if(this.Type&&this.Type!==g.value)throw new Error(`Ivalid dict type: '${g.value}' instead of '${this.Type}'`);return}throw new Error("Can't parse /Type property value");default:a=await t.skipToNextNameAsync(a,o-1);break}}}class DecodeParamsDict extends PdfDict{_intPropMap=new Map;_boolPropMap=new Map;_namePropMap=new Map;_refPropMap=new Map;constructor(){super(dictTypes.EMPTY)}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new DecodeParamsDict;return await t.parsePropsAsync(e),{value:t,start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}static async parseArrayAsync(e,t,s=null,r=!0){const o=await e.getArrayBoundsAtAsync(t,r);if(!o)return null;const a=[];let f,m=o.start+1;for(;m<o.end;){const g=await e.getDictBoundsAtAsync(m);if(f=await DecodeParamsDict.parseAsync({parser:e,bounds:g,cryptInfo:s}),!f)break;a.push(f.value),m=f.end+1}return{value:a,start:o.start,end:o.end}}getIntProp(e){return this._intPropMap.get(e)}getBoolProp(e){return this._boolPropMap.get(e)}getNameProp(e){return this._namePropMap.get(e)}getRefProp(e){return this._refPropMap.get(e)}setIntProp(e,t){return this._intPropMap.set(e,t)}setBoolProp(e,t){return this._boolPropMap.set(e,t)}setNameProp(e,t){return this._namePropMap.set(e,t)}setRefProp(e,t){return this._refPropMap.set(e,t)}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this._intPropMap.forEach((a,f)=>r.push(...s.encode(f),...s.encode(" "+a))),this._boolPropMap.forEach((a,f)=>r.push(...s.encode(f),...s.encode(" "+a))),this._namePropMap.forEach((a,f)=>r.push(...s.encode(f),...s.encode(a))),this._refPropMap.forEach((a,f)=>r.push(...s.encode(f),...a.toArray(e)));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;){switch(a=m.end+1,f=m.value,await t.getValueTypeAtAsync(a)){case valueTypes.NUMBER:const p=await t.parseNumberAtAsync(a,!1);if(p){this._intPropMap.set(f,p.value),a=p.end+1;continue}break;case valueTypes.BOOLEAN:const y=await t.parseBoolAtAsync(a);if(y){this._boolPropMap.set(f,y.value),a=y.end+1;continue}break;case valueTypes.NAME:const C=await t.parseNameAtAsync(a);if(C){this._namePropMap.set(f,C.value),a=C.end+1;continue}break;case valueTypes.REF:const A=await ObjectId.parseRefAsync(t,a);if(A){this._refPropMap.set(f,A.value),a=A.end+1;continue}break}a=await t.skipToNextNameAsync(a,o-1)}}}/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */const Z_FIXED$1=4,Z_BINARY=0,Z_TEXT=1,Z_UNKNOWN$1=2;function zero$1(c){let e=c.length;for(;--e>=0;)c[e]=0}const STORED_BLOCK=0,STATIC_TREES=1,DYN_TREES=2,MIN_MATCH$1=3,MAX_MATCH$1=258,LENGTH_CODES$1=29,LITERALS$1=256,L_CODES$1=LITERALS$1+1+LENGTH_CODES$1,D_CODES$1=30,BL_CODES$1=19,HEAP_SIZE$1=2*L_CODES$1+1,MAX_BITS$1=15,Buf_size=16,MAX_BL_BITS=7,END_BLOCK=256,REP_3_6=16,REPZ_3_10=17,REPZ_11_138=18,extra_lbits=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),extra_dbits=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),extra_blbits=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),bl_order=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),DIST_CODE_LEN=512,static_ltree=new Array((L_CODES$1+2)*2);zero$1(static_ltree);const static_dtree=new Array(D_CODES$1*2);zero$1(static_dtree);const _dist_code=new Array(DIST_CODE_LEN);zero$1(_dist_code);const _length_code=new Array(MAX_MATCH$1-MIN_MATCH$1+1);zero$1(_length_code);const base_length=new Array(LENGTH_CODES$1);zero$1(base_length);const base_dist=new Array(D_CODES$1);zero$1(base_dist);function StaticTreeDesc(c,e,t,s,r){this.static_tree=c,this.extra_bits=e,this.extra_base=t,this.elems=s,this.max_length=r,this.has_stree=c&&c.length}let static_l_desc,static_d_desc,static_bl_desc;function TreeDesc(c,e){this.dyn_tree=c,this.max_code=0,this.stat_desc=e}const d_code=c=>c<256?_dist_code[c]:_dist_code[256+(c>>>7)],put_short=(c,e)=>{c.pending_buf[c.pending++]=e&255,c.pending_buf[c.pending++]=e>>>8&255},send_bits=(c,e,t)=>{c.bi_valid>Buf_size-t?(c.bi_buf|=e<<c.bi_valid&65535,put_short(c,c.bi_buf),c.bi_buf=e>>Buf_size-c.bi_valid,c.bi_valid+=t-Buf_size):(c.bi_buf|=e<<c.bi_valid&65535,c.bi_valid+=t)},send_code=(c,e,t)=>{send_bits(c,t[e*2],t[e*2+1])},bi_reverse=(c,e)=>{let t=0;do t|=c&1,c>>>=1,t<<=1;while(--e>0);return t>>>1},bi_flush=c=>{c.bi_valid===16?(put_short(c,c.bi_buf),c.bi_buf=0,c.bi_valid=0):c.bi_valid>=8&&(c.pending_buf[c.pending++]=c.bi_buf&255,c.bi_buf>>=8,c.bi_valid-=8)},gen_bitlen=(c,e)=>{const t=e.dyn_tree,s=e.max_code,r=e.stat_desc.static_tree,o=e.stat_desc.has_stree,a=e.stat_desc.extra_bits,f=e.stat_desc.extra_base,m=e.stat_desc.max_length;let g,p,y,C,A,w,_=0;for(C=0;C<=MAX_BITS$1;C++)c.bl_count[C]=0;for(t[c.heap[c.heap_max]*2+1]=0,g=c.heap_max+1;g<HEAP_SIZE$1;g++)p=c.heap[g],C=t[t[p*2+1]*2+1]+1,C>m&&(C=m,_++),t[p*2+1]=C,!(p>s)&&(c.bl_count[C]++,A=0,p>=f&&(A=a[p-f]),w=t[p*2],c.opt_len+=w*(C+A),o&&(c.static_len+=w*(r[p*2+1]+A)));if(_!==0){do{for(C=m-1;c.bl_count[C]===0;)C--;c.bl_count[C]--,c.bl_count[C+1]+=2,c.bl_count[m]--,_-=2}while(_>0);for(C=m;C!==0;C--)for(p=c.bl_count[C];p!==0;)y=c.heap[--g],!(y>s)&&(t[y*2+1]!==C&&(c.opt_len+=(C-t[y*2+1])*t[y*2],t[y*2+1]=C),p--)}},gen_codes=(c,e,t)=>{const s=new Array(MAX_BITS$1+1);let r=0,o,a;for(o=1;o<=MAX_BITS$1;o++)r=r+t[o-1]<<1,s[o]=r;for(a=0;a<=e;a++){let f=c[a*2+1];f!==0&&(c[a*2]=bi_reverse(s[f]++,f))}},tr_static_init=()=>{let c,e,t,s,r;const o=new Array(MAX_BITS$1+1);for(t=0,s=0;s<LENGTH_CODES$1-1;s++)for(base_length[s]=t,c=0;c<1<<extra_lbits[s];c++)_length_code[t++]=s;for(_length_code[t-1]=s,r=0,s=0;s<16;s++)for(base_dist[s]=r,c=0;c<1<<extra_dbits[s];c++)_dist_code[r++]=s;for(r>>=7;s<D_CODES$1;s++)for(base_dist[s]=r<<7,c=0;c<1<<extra_dbits[s]-7;c++)_dist_code[256+r++]=s;for(e=0;e<=MAX_BITS$1;e++)o[e]=0;for(c=0;c<=143;)static_ltree[c*2+1]=8,c++,o[8]++;for(;c<=255;)static_ltree[c*2+1]=9,c++,o[9]++;for(;c<=279;)static_ltree[c*2+1]=7,c++,o[7]++;for(;c<=287;)static_ltree[c*2+1]=8,c++,o[8]++;for(gen_codes(static_ltree,L_CODES$1+1,o),c=0;c<D_CODES$1;c++)static_dtree[c*2+1]=5,static_dtree[c*2]=bi_reverse(c,5);static_l_desc=new StaticTreeDesc(static_ltree,extra_lbits,LITERALS$1+1,L_CODES$1,MAX_BITS$1),static_d_desc=new StaticTreeDesc(static_dtree,extra_dbits,0,D_CODES$1,MAX_BITS$1),static_bl_desc=new StaticTreeDesc(new Array(0),extra_blbits,0,BL_CODES$1,MAX_BL_BITS)},init_block=c=>{let e;for(e=0;e<L_CODES$1;e++)c.dyn_ltree[e*2]=0;for(e=0;e<D_CODES$1;e++)c.dyn_dtree[e*2]=0;for(e=0;e<BL_CODES$1;e++)c.bl_tree[e*2]=0;c.dyn_ltree[END_BLOCK*2]=1,c.opt_len=c.static_len=0,c.sym_next=c.matches=0},bi_windup=c=>{c.bi_valid>8?put_short(c,c.bi_buf):c.bi_valid>0&&(c.pending_buf[c.pending++]=c.bi_buf),c.bi_buf=0,c.bi_valid=0},smaller=(c,e,t,s)=>{const r=e*2,o=t*2;return c[r]<c[o]||c[r]===c[o]&&s[e]<=s[t]},pqdownheap=(c,e,t)=>{const s=c.heap[t];let r=t<<1;for(;r<=c.heap_len&&(r<c.heap_len&&smaller(e,c.heap[r+1],c.heap[r],c.depth)&&r++,!smaller(e,s,c.heap[r],c.depth));)c.heap[t]=c.heap[r],t=r,r<<=1;c.heap[t]=s},compress_block=(c,e,t)=>{let s,r,o=0,a,f;if(c.sym_next!==0)do s=c.pending_buf[c.sym_buf+o++]&255,s+=(c.pending_buf[c.sym_buf+o++]&255)<<8,r=c.pending_buf[c.sym_buf+o++],s===0?send_code(c,r,e):(a=_length_code[r],send_code(c,a+LITERALS$1+1,e),f=extra_lbits[a],f!==0&&(r-=base_length[a],send_bits(c,r,f)),s--,a=d_code(s),send_code(c,a,t),f=extra_dbits[a],f!==0&&(s-=base_dist[a],send_bits(c,s,f)));while(o<c.sym_next);send_code(c,END_BLOCK,e)},build_tree=(c,e)=>{const t=e.dyn_tree,s=e.stat_desc.static_tree,r=e.stat_desc.has_stree,o=e.stat_desc.elems;let a,f,m=-1,g;for(c.heap_len=0,c.heap_max=HEAP_SIZE$1,a=0;a<o;a++)t[a*2]!==0?(c.heap[++c.heap_len]=m=a,c.depth[a]=0):t[a*2+1]=0;for(;c.heap_len<2;)g=c.heap[++c.heap_len]=m<2?++m:0,t[g*2]=1,c.depth[g]=0,c.opt_len--,r&&(c.static_len-=s[g*2+1]);for(e.max_code=m,a=c.heap_len>>1;a>=1;a--)pqdownheap(c,t,a);g=o;do a=c.heap[1],c.heap[1]=c.heap[c.heap_len--],pqdownheap(c,t,1),f=c.heap[1],c.heap[--c.heap_max]=a,c.heap[--c.heap_max]=f,t[g*2]=t[a*2]+t[f*2],c.depth[g]=(c.depth[a]>=c.depth[f]?c.depth[a]:c.depth[f])+1,t[a*2+1]=t[f*2+1]=g,c.heap[1]=g++,pqdownheap(c,t,1);while(c.heap_len>=2);c.heap[--c.heap_max]=c.heap[1],gen_bitlen(c,e),gen_codes(t,m,c.bl_count)},scan_tree=(c,e,t)=>{let s,r=-1,o,a=e[0*2+1],f=0,m=7,g=4;for(a===0&&(m=138,g=3),e[(t+1)*2+1]=65535,s=0;s<=t;s++)o=a,a=e[(s+1)*2+1],!(++f<m&&o===a)&&(f<g?c.bl_tree[o*2]+=f:o!==0?(o!==r&&c.bl_tree[o*2]++,c.bl_tree[REP_3_6*2]++):f<=10?c.bl_tree[REPZ_3_10*2]++:c.bl_tree[REPZ_11_138*2]++,f=0,r=o,a===0?(m=138,g=3):o===a?(m=6,g=3):(m=7,g=4))},send_tree=(c,e,t)=>{let s,r=-1,o,a=e[0*2+1],f=0,m=7,g=4;for(a===0&&(m=138,g=3),s=0;s<=t;s++)if(o=a,a=e[(s+1)*2+1],!(++f<m&&o===a)){if(f<g)do send_code(c,o,c.bl_tree);while(--f!==0);else o!==0?(o!==r&&(send_code(c,o,c.bl_tree),f--),send_code(c,REP_3_6,c.bl_tree),send_bits(c,f-3,2)):f<=10?(send_code(c,REPZ_3_10,c.bl_tree),send_bits(c,f-3,3)):(send_code(c,REPZ_11_138,c.bl_tree),send_bits(c,f-11,7));f=0,r=o,a===0?(m=138,g=3):o===a?(m=6,g=3):(m=7,g=4)}},build_bl_tree=c=>{let e;for(scan_tree(c,c.dyn_ltree,c.l_desc.max_code),scan_tree(c,c.dyn_dtree,c.d_desc.max_code),build_tree(c,c.bl_desc),e=BL_CODES$1-1;e>=3&&c.bl_tree[bl_order[e]*2+1]===0;e--);return c.opt_len+=3*(e+1)+5+5+4,e},send_all_trees=(c,e,t,s)=>{let r;for(send_bits(c,e-257,5),send_bits(c,t-1,5),send_bits(c,s-4,4),r=0;r<s;r++)send_bits(c,c.bl_tree[bl_order[r]*2+1],3);send_tree(c,c.dyn_ltree,e-1),send_tree(c,c.dyn_dtree,t-1)},detect_data_type=c=>{let e=4093624447,t;for(t=0;t<=31;t++,e>>>=1)if(e&1&&c.dyn_ltree[t*2]!==0)return Z_BINARY;if(c.dyn_ltree[9*2]!==0||c.dyn_ltree[10*2]!==0||c.dyn_ltree[13*2]!==0)return Z_TEXT;for(t=32;t<LITERALS$1;t++)if(c.dyn_ltree[t*2]!==0)return Z_TEXT;return Z_BINARY};let static_init_done=!1;const _tr_init$1=c=>{static_init_done||(tr_static_init(),static_init_done=!0),c.l_desc=new TreeDesc(c.dyn_ltree,static_l_desc),c.d_desc=new TreeDesc(c.dyn_dtree,static_d_desc),c.bl_desc=new TreeDesc(c.bl_tree,static_bl_desc),c.bi_buf=0,c.bi_valid=0,init_block(c)},_tr_stored_block$1=(c,e,t,s)=>{send_bits(c,(STORED_BLOCK<<1)+(s?1:0),3),bi_windup(c),put_short(c,t),put_short(c,~t),t&&c.pending_buf.set(c.window.subarray(e,e+t),c.pending),c.pending+=t},_tr_align$1=c=>{send_bits(c,STATIC_TREES<<1,3),send_code(c,END_BLOCK,static_ltree),bi_flush(c)},_tr_flush_block$1=(c,e,t,s)=>{let r,o,a=0;c.level>0?(c.strm.data_type===Z_UNKNOWN$1&&(c.strm.data_type=detect_data_type(c)),build_tree(c,c.l_desc),build_tree(c,c.d_desc),a=build_bl_tree(c),r=c.opt_len+3+7>>>3,o=c.static_len+3+7>>>3,o<=r&&(r=o)):r=o=t+5,t+4<=r&&e!==-1?_tr_stored_block$1(c,e,t,s):c.strategy===Z_FIXED$1||o===r?(send_bits(c,(STATIC_TREES<<1)+(s?1:0),3),compress_block(c,static_ltree,static_dtree)):(send_bits(c,(DYN_TREES<<1)+(s?1:0),3),send_all_trees(c,c.l_desc.max_code+1,c.d_desc.max_code+1,a+1),compress_block(c,c.dyn_ltree,c.dyn_dtree)),init_block(c),s&&bi_windup(c)},_tr_tally$1=(c,e,t)=>(c.pending_buf[c.sym_buf+c.sym_next++]=e,c.pending_buf[c.sym_buf+c.sym_next++]=e>>8,c.pending_buf[c.sym_buf+c.sym_next++]=t,e===0?c.dyn_ltree[t*2]++:(c.matches++,e--,c.dyn_ltree[(_length_code[t]+LITERALS$1+1)*2]++,c.dyn_dtree[d_code(e)*2]++),c.sym_next===c.sym_end);var _tr_init_1=_tr_init$1,_tr_stored_block_1=_tr_stored_block$1,_tr_flush_block_1=_tr_flush_block$1,_tr_tally_1=_tr_tally$1,_tr_align_1=_tr_align$1,trees={_tr_init:_tr_init_1,_tr_stored_block:_tr_stored_block_1,_tr_flush_block:_tr_flush_block_1,_tr_tally:_tr_tally_1,_tr_align:_tr_align_1};const adler32=(c,e,t,s)=>{let r=c&65535|0,o=c>>>16&65535|0,a=0;for(;t!==0;){a=t>2e3?2e3:t,t-=a;do r=r+e[s++]|0,o=o+r|0;while(--a);r%=65521,o%=65521}return r|o<<16|0};var adler32_1=adler32;const makeTable=()=>{let c,e=[];for(var t=0;t<256;t++){c=t;for(var s=0;s<8;s++)c=c&1?3988292384^c>>>1:c>>>1;e[t]=c}return e},crcTable=new Uint32Array(makeTable()),crc32=(c,e,t,s)=>{const r=crcTable,o=s+t;c^=-1;for(let a=s;a<o;a++)c=c>>>8^r[(c^e[a])&255];return c^-1};var crc32_1=crc32,messages={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},constants$2={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init,_tr_stored_block,_tr_flush_block,_tr_tally,_tr_align}=trees,{Z_NO_FLUSH:Z_NO_FLUSH$2,Z_PARTIAL_FLUSH,Z_FULL_FLUSH:Z_FULL_FLUSH$1,Z_FINISH:Z_FINISH$3,Z_BLOCK:Z_BLOCK$1,Z_OK:Z_OK$3,Z_STREAM_END:Z_STREAM_END$3,Z_STREAM_ERROR:Z_STREAM_ERROR$2,Z_DATA_ERROR:Z_DATA_ERROR$2,Z_BUF_ERROR:Z_BUF_ERROR$1,Z_DEFAULT_COMPRESSION:Z_DEFAULT_COMPRESSION$1,Z_FILTERED,Z_HUFFMAN_ONLY,Z_RLE,Z_FIXED,Z_DEFAULT_STRATEGY:Z_DEFAULT_STRATEGY$1,Z_UNKNOWN,Z_DEFLATED:Z_DEFLATED$2}=constants$2,MAX_MEM_LEVEL=9,MAX_WBITS$1=15,DEF_MEM_LEVEL=8,LENGTH_CODES=29,LITERALS=256,L_CODES=LITERALS+1+LENGTH_CODES,D_CODES=30,BL_CODES=19,HEAP_SIZE=2*L_CODES+1,MAX_BITS=15,MIN_MATCH=3,MAX_MATCH=258,MIN_LOOKAHEAD=MAX_MATCH+MIN_MATCH+1,PRESET_DICT=32,INIT_STATE=42,GZIP_STATE=57,EXTRA_STATE=69,NAME_STATE=73,COMMENT_STATE=91,HCRC_STATE=103,BUSY_STATE=113,FINISH_STATE=666,BS_NEED_MORE=1,BS_BLOCK_DONE=2,BS_FINISH_STARTED=3,BS_FINISH_DONE=4,OS_CODE=3,err=(c,e)=>(c.msg=messages[e],e),rank=c=>c*2-(c>4?9:0),zero=c=>{let e=c.length;for(;--e>=0;)c[e]=0},slide_hash=c=>{let e,t,s,r=c.w_size;e=c.hash_size,s=e;do t=c.head[--s],c.head[s]=t>=r?t-r:0;while(--e);e=r,s=e;do t=c.prev[--s],c.prev[s]=t>=r?t-r:0;while(--e)};let HASH_ZLIB=(c,e,t)=>(e<<c.hash_shift^t)&c.hash_mask,HASH=HASH_ZLIB;const flush_pending=c=>{const e=c.state;let t=e.pending;t>c.avail_out&&(t=c.avail_out),t!==0&&(c.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+t),c.next_out),c.next_out+=t,e.pending_out+=t,c.total_out+=t,c.avail_out-=t,e.pending-=t,e.pending===0&&(e.pending_out=0))},flush_block_only=(c,e)=>{_tr_flush_block(c,c.block_start>=0?c.block_start:-1,c.strstart-c.block_start,e),c.block_start=c.strstart,flush_pending(c.strm)},put_byte=(c,e)=>{c.pending_buf[c.pending++]=e},putShortMSB=(c,e)=>{c.pending_buf[c.pending++]=e>>>8&255,c.pending_buf[c.pending++]=e&255},read_buf=(c,e,t,s)=>{let r=c.avail_in;return r>s&&(r=s),r===0?0:(c.avail_in-=r,e.set(c.input.subarray(c.next_in,c.next_in+r),t),c.state.wrap===1?c.adler=adler32_1(c.adler,e,r,t):c.state.wrap===2&&(c.adler=crc32_1(c.adler,e,r,t)),c.next_in+=r,c.total_in+=r,r)},longest_match=(c,e)=>{let t=c.max_chain_length,s=c.strstart,r,o,a=c.prev_length,f=c.nice_match;const m=c.strstart>c.w_size-MIN_LOOKAHEAD?c.strstart-(c.w_size-MIN_LOOKAHEAD):0,g=c.window,p=c.w_mask,y=c.prev,C=c.strstart+MAX_MATCH;let A=g[s+a-1],w=g[s+a];c.prev_length>=c.good_match&&(t>>=2),f>c.lookahead&&(f=c.lookahead);do if(r=e,!(g[r+a]!==w||g[r+a-1]!==A||g[r]!==g[s]||g[++r]!==g[s+1])){s+=2,r++;do;while(g[++s]===g[++r]&&g[++s]===g[++r]&&g[++s]===g[++r]&&g[++s]===g[++r]&&g[++s]===g[++r]&&g[++s]===g[++r]&&g[++s]===g[++r]&&g[++s]===g[++r]&&s<C);if(o=MAX_MATCH-(C-s),s=C-MAX_MATCH,o>a){if(c.match_start=e,a=o,o>=f)break;A=g[s+a-1],w=g[s+a]}}while((e=y[e&p])>m&&--t!==0);return a<=c.lookahead?a:c.lookahead},fill_window=c=>{const e=c.w_size;let t,s,r;do{if(s=c.window_size-c.lookahead-c.strstart,c.strstart>=e+(e-MIN_LOOKAHEAD)&&(c.window.set(c.window.subarray(e,e+e-s),0),c.match_start-=e,c.strstart-=e,c.block_start-=e,c.insert>c.strstart&&(c.insert=c.strstart),slide_hash(c),s+=e),c.strm.avail_in===0)break;if(t=read_buf(c.strm,c.window,c.strstart+c.lookahead,s),c.lookahead+=t,c.lookahead+c.insert>=MIN_MATCH)for(r=c.strstart-c.insert,c.ins_h=c.window[r],c.ins_h=HASH(c,c.ins_h,c.window[r+1]);c.insert&&(c.ins_h=HASH(c,c.ins_h,c.window[r+MIN_MATCH-1]),c.prev[r&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=r,r++,c.insert--,!(c.lookahead+c.insert<MIN_MATCH)););}while(c.lookahead<MIN_LOOKAHEAD&&c.strm.avail_in!==0)},deflate_stored=(c,e)=>{let t=c.pending_buf_size-5>c.w_size?c.w_size:c.pending_buf_size-5,s,r,o,a=0,f=c.strm.avail_in;do{if(s=65535,o=c.bi_valid+42>>3,c.strm.avail_out<o||(o=c.strm.avail_out-o,r=c.strstart-c.block_start,s>r+c.strm.avail_in&&(s=r+c.strm.avail_in),s>o&&(s=o),s<t&&(s===0&&e!==Z_FINISH$3||e===Z_NO_FLUSH$2||s!==r+c.strm.avail_in)))break;a=e===Z_FINISH$3&&s===r+c.strm.avail_in?1:0,_tr_stored_block(c,0,0,a),c.pending_buf[c.pending-4]=s,c.pending_buf[c.pending-3]=s>>8,c.pending_buf[c.pending-2]=~s,c.pending_buf[c.pending-1]=~s>>8,flush_pending(c.strm),r&&(r>s&&(r=s),c.strm.output.set(c.window.subarray(c.block_start,c.block_start+r),c.strm.next_out),c.strm.next_out+=r,c.strm.avail_out-=r,c.strm.total_out+=r,c.block_start+=r,s-=r),s&&(read_buf(c.strm,c.strm.output,c.strm.next_out,s),c.strm.next_out+=s,c.strm.avail_out-=s,c.strm.total_out+=s)}while(a===0);return f-=c.strm.avail_in,f&&(f>=c.w_size?(c.matches=2,c.window.set(c.strm.input.subarray(c.strm.next_in-c.w_size,c.strm.next_in),0),c.strstart=c.w_size,c.insert=c.strstart):(c.window_size-c.strstart<=f&&(c.strstart-=c.w_size,c.window.set(c.window.subarray(c.w_size,c.w_size+c.strstart),0),c.matches<2&&c.matches++,c.insert>c.strstart&&(c.insert=c.strstart)),c.window.set(c.strm.input.subarray(c.strm.next_in-f,c.strm.next_in),c.strstart),c.strstart+=f,c.insert+=f>c.w_size-c.insert?c.w_size-c.insert:f),c.block_start=c.strstart),c.high_water<c.strstart&&(c.high_water=c.strstart),a?BS_FINISH_DONE:e!==Z_NO_FLUSH$2&&e!==Z_FINISH$3&&c.strm.avail_in===0&&c.strstart===c.block_start?BS_BLOCK_DONE:(o=c.window_size-c.strstart,c.strm.avail_in>o&&c.block_start>=c.w_size&&(c.block_start-=c.w_size,c.strstart-=c.w_size,c.window.set(c.window.subarray(c.w_size,c.w_size+c.strstart),0),c.matches<2&&c.matches++,o+=c.w_size,c.insert>c.strstart&&(c.insert=c.strstart)),o>c.strm.avail_in&&(o=c.strm.avail_in),o&&(read_buf(c.strm,c.window,c.strstart,o),c.strstart+=o,c.insert+=o>c.w_size-c.insert?c.w_size-c.insert:o),c.high_water<c.strstart&&(c.high_water=c.strstart),o=c.bi_valid+42>>3,o=c.pending_buf_size-o>65535?65535:c.pending_buf_size-o,t=o>c.w_size?c.w_size:o,r=c.strstart-c.block_start,(r>=t||(r||e===Z_FINISH$3)&&e!==Z_NO_FLUSH$2&&c.strm.avail_in===0&&r<=o)&&(s=r>o?o:r,a=e===Z_FINISH$3&&c.strm.avail_in===0&&s===r?1:0,_tr_stored_block(c,c.block_start,s,a),c.block_start+=s,flush_pending(c.strm)),a?BS_FINISH_STARTED:BS_NEED_MORE)},deflate_fast=(c,e)=>{let t,s;for(;;){if(c.lookahead<MIN_LOOKAHEAD){if(fill_window(c),c.lookahead<MIN_LOOKAHEAD&&e===Z_NO_FLUSH$2)return BS_NEED_MORE;if(c.lookahead===0)break}if(t=0,c.lookahead>=MIN_MATCH&&(c.ins_h=HASH(c,c.ins_h,c.window[c.strstart+MIN_MATCH-1]),t=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),t!==0&&c.strstart-t<=c.w_size-MIN_LOOKAHEAD&&(c.match_length=longest_match(c,t)),c.match_length>=MIN_MATCH)if(s=_tr_tally(c,c.strstart-c.match_start,c.match_length-MIN_MATCH),c.lookahead-=c.match_length,c.match_length<=c.max_lazy_match&&c.lookahead>=MIN_MATCH){c.match_length--;do c.strstart++,c.ins_h=HASH(c,c.ins_h,c.window[c.strstart+MIN_MATCH-1]),t=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart;while(--c.match_length!==0);c.strstart++}else c.strstart+=c.match_length,c.match_length=0,c.ins_h=c.window[c.strstart],c.ins_h=HASH(c,c.ins_h,c.window[c.strstart+1]);else s=_tr_tally(c,0,c.window[c.strstart]),c.lookahead--,c.strstart++;if(s&&(flush_block_only(c,!1),c.strm.avail_out===0))return BS_NEED_MORE}return c.insert=c.strstart<MIN_MATCH-1?c.strstart:MIN_MATCH-1,e===Z_FINISH$3?(flush_block_only(c,!0),c.strm.avail_out===0?BS_FINISH_STARTED:BS_FINISH_DONE):c.sym_next&&(flush_block_only(c,!1),c.strm.avail_out===0)?BS_NEED_MORE:BS_BLOCK_DONE},deflate_slow=(c,e)=>{let t,s,r;for(;;){if(c.lookahead<MIN_LOOKAHEAD){if(fill_window(c),c.lookahead<MIN_LOOKAHEAD&&e===Z_NO_FLUSH$2)return BS_NEED_MORE;if(c.lookahead===0)break}if(t=0,c.lookahead>=MIN_MATCH&&(c.ins_h=HASH(c,c.ins_h,c.window[c.strstart+MIN_MATCH-1]),t=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),c.prev_length=c.match_length,c.prev_match=c.match_start,c.match_length=MIN_MATCH-1,t!==0&&c.prev_length<c.max_lazy_match&&c.strstart-t<=c.w_size-MIN_LOOKAHEAD&&(c.match_length=longest_match(c,t),c.match_length<=5&&(c.strategy===Z_FILTERED||c.match_length===MIN_MATCH&&c.strstart-c.match_start>4096)&&(c.match_length=MIN_MATCH-1)),c.prev_length>=MIN_MATCH&&c.match_length<=c.prev_length){r=c.strstart+c.lookahead-MIN_MATCH,s=_tr_tally(c,c.strstart-1-c.prev_match,c.prev_length-MIN_MATCH),c.lookahead-=c.prev_length-1,c.prev_length-=2;do++c.strstart<=r&&(c.ins_h=HASH(c,c.ins_h,c.window[c.strstart+MIN_MATCH-1]),t=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart);while(--c.prev_length!==0);if(c.match_available=0,c.match_length=MIN_MATCH-1,c.strstart++,s&&(flush_block_only(c,!1),c.strm.avail_out===0))return BS_NEED_MORE}else if(c.match_available){if(s=_tr_tally(c,0,c.window[c.strstart-1]),s&&flush_block_only(c,!1),c.strstart++,c.lookahead--,c.strm.avail_out===0)return BS_NEED_MORE}else c.match_available=1,c.strstart++,c.lookahead--}return c.match_available&&(s=_tr_tally(c,0,c.window[c.strstart-1]),c.match_available=0),c.insert=c.strstart<MIN_MATCH-1?c.strstart:MIN_MATCH-1,e===Z_FINISH$3?(flush_block_only(c,!0),c.strm.avail_out===0?BS_FINISH_STARTED:BS_FINISH_DONE):c.sym_next&&(flush_block_only(c,!1),c.strm.avail_out===0)?BS_NEED_MORE:BS_BLOCK_DONE},deflate_rle=(c,e)=>{let t,s,r,o;const a=c.window;for(;;){if(c.lookahead<=MAX_MATCH){if(fill_window(c),c.lookahead<=MAX_MATCH&&e===Z_NO_FLUSH$2)return BS_NEED_MORE;if(c.lookahead===0)break}if(c.match_length=0,c.lookahead>=MIN_MATCH&&c.strstart>0&&(r=c.strstart-1,s=a[r],s===a[++r]&&s===a[++r]&&s===a[++r])){o=c.strstart+MAX_MATCH;do;while(s===a[++r]&&s===a[++r]&&s===a[++r]&&s===a[++r]&&s===a[++r]&&s===a[++r]&&s===a[++r]&&s===a[++r]&&r<o);c.match_length=MAX_MATCH-(o-r),c.match_length>c.lookahead&&(c.match_length=c.lookahead)}if(c.match_length>=MIN_MATCH?(t=_tr_tally(c,1,c.match_length-MIN_MATCH),c.lookahead-=c.match_length,c.strstart+=c.match_length,c.match_length=0):(t=_tr_tally(c,0,c.window[c.strstart]),c.lookahead--,c.strstart++),t&&(flush_block_only(c,!1),c.strm.avail_out===0))return BS_NEED_MORE}return c.insert=0,e===Z_FINISH$3?(flush_block_only(c,!0),c.strm.avail_out===0?BS_FINISH_STARTED:BS_FINISH_DONE):c.sym_next&&(flush_block_only(c,!1),c.strm.avail_out===0)?BS_NEED_MORE:BS_BLOCK_DONE},deflate_huff=(c,e)=>{let t;for(;;){if(c.lookahead===0&&(fill_window(c),c.lookahead===0)){if(e===Z_NO_FLUSH$2)return BS_NEED_MORE;break}if(c.match_length=0,t=_tr_tally(c,0,c.window[c.strstart]),c.lookahead--,c.strstart++,t&&(flush_block_only(c,!1),c.strm.avail_out===0))return BS_NEED_MORE}return c.insert=0,e===Z_FINISH$3?(flush_block_only(c,!0),c.strm.avail_out===0?BS_FINISH_STARTED:BS_FINISH_DONE):c.sym_next&&(flush_block_only(c,!1),c.strm.avail_out===0)?BS_NEED_MORE:BS_BLOCK_DONE};function Config(c,e,t,s,r){this.good_length=c,this.max_lazy=e,this.nice_length=t,this.max_chain=s,this.func=r}const configuration_table=[new Config(0,0,0,0,deflate_stored),new Config(4,4,8,4,deflate_fast),new Config(4,5,16,8,deflate_fast),new Config(4,6,32,32,deflate_fast),new Config(4,4,16,16,deflate_slow),new Config(8,16,32,32,deflate_slow),new Config(8,16,128,128,deflate_slow),new Config(8,32,128,256,deflate_slow),new Config(32,128,258,1024,deflate_slow),new Config(32,258,258,4096,deflate_slow)],lm_init=c=>{c.window_size=2*c.w_size,zero(c.head),c.max_lazy_match=configuration_table[c.level].max_lazy,c.good_match=configuration_table[c.level].good_length,c.nice_match=configuration_table[c.level].nice_length,c.max_chain_length=configuration_table[c.level].max_chain,c.strstart=0,c.block_start=0,c.lookahead=0,c.insert=0,c.match_length=c.prev_length=MIN_MATCH-1,c.match_available=0,c.ins_h=0};function DeflateState(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=Z_DEFLATED$2,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(HEAP_SIZE*2),this.dyn_dtree=new Uint16Array((2*D_CODES+1)*2),this.bl_tree=new Uint16Array((2*BL_CODES+1)*2),zero(this.dyn_ltree),zero(this.dyn_dtree),zero(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(MAX_BITS+1),this.heap=new Uint16Array(2*L_CODES+1),zero(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*L_CODES+1),zero(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const deflateStateCheck=c=>{if(!c)return 1;const e=c.state;return!e||e.strm!==c||e.status!==INIT_STATE&&e.status!==GZIP_STATE&&e.status!==EXTRA_STATE&&e.status!==NAME_STATE&&e.status!==COMMENT_STATE&&e.status!==HCRC_STATE&&e.status!==BUSY_STATE&&e.status!==FINISH_STATE?1:0},deflateResetKeep=c=>{if(deflateStateCheck(c))return err(c,Z_STREAM_ERROR$2);c.total_in=c.total_out=0,c.data_type=Z_UNKNOWN;const e=c.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap===2?GZIP_STATE:e.wrap?INIT_STATE:BUSY_STATE,c.adler=e.wrap===2?0:1,e.last_flush=-2,_tr_init(e),Z_OK$3},deflateReset=c=>{const e=deflateResetKeep(c);return e===Z_OK$3&&lm_init(c.state),e},deflateSetHeader=(c,e)=>deflateStateCheck(c)||c.state.wrap!==2?Z_STREAM_ERROR$2:(c.state.gzhead=e,Z_OK$3),deflateInit2=(c,e,t,s,r,o)=>{if(!c)return Z_STREAM_ERROR$2;let a=1;if(e===Z_DEFAULT_COMPRESSION$1&&(e=6),s<0?(a=0,s=-s):s>15&&(a=2,s-=16),r<1||r>MAX_MEM_LEVEL||t!==Z_DEFLATED$2||s<8||s>15||e<0||e>9||o<0||o>Z_FIXED||s===8&&a!==1)return err(c,Z_STREAM_ERROR$2);s===8&&(s=9);const f=new DeflateState;return c.state=f,f.strm=c,f.status=INIT_STATE,f.wrap=a,f.gzhead=null,f.w_bits=s,f.w_size=1<<f.w_bits,f.w_mask=f.w_size-1,f.hash_bits=r+7,f.hash_size=1<<f.hash_bits,f.hash_mask=f.hash_size-1,f.hash_shift=~~((f.hash_bits+MIN_MATCH-1)/MIN_MATCH),f.window=new Uint8Array(f.w_size*2),f.head=new Uint16Array(f.hash_size),f.prev=new Uint16Array(f.w_size),f.lit_bufsize=1<<r+6,f.pending_buf_size=f.lit_bufsize*4,f.pending_buf=new Uint8Array(f.pending_buf_size),f.sym_buf=f.lit_bufsize,f.sym_end=(f.lit_bufsize-1)*3,f.level=e,f.strategy=o,f.method=t,deflateReset(c)},deflateInit=(c,e)=>deflateInit2(c,e,Z_DEFLATED$2,MAX_WBITS$1,DEF_MEM_LEVEL,Z_DEFAULT_STRATEGY$1),deflate$2=(c,e)=>{if(deflateStateCheck(c)||e>Z_BLOCK$1||e<0)return c?err(c,Z_STREAM_ERROR$2):Z_STREAM_ERROR$2;const t=c.state;if(!c.output||c.avail_in!==0&&!c.input||t.status===FINISH_STATE&&e!==Z_FINISH$3)return err(c,c.avail_out===0?Z_BUF_ERROR$1:Z_STREAM_ERROR$2);const s=t.last_flush;if(t.last_flush=e,t.pending!==0){if(flush_pending(c),c.avail_out===0)return t.last_flush=-1,Z_OK$3}else if(c.avail_in===0&&rank(e)<=rank(s)&&e!==Z_FINISH$3)return err(c,Z_BUF_ERROR$1);if(t.status===FINISH_STATE&&c.avail_in!==0)return err(c,Z_BUF_ERROR$1);if(t.status===INIT_STATE&&t.wrap===0&&(t.status=BUSY_STATE),t.status===INIT_STATE){let r=Z_DEFLATED$2+(t.w_bits-8<<4)<<8,o=-1;if(t.strategy>=Z_HUFFMAN_ONLY||t.level<2?o=0:t.level<6?o=1:t.level===6?o=2:o=3,r|=o<<6,t.strstart!==0&&(r|=PRESET_DICT),r+=31-r%31,putShortMSB(t,r),t.strstart!==0&&(putShortMSB(t,c.adler>>>16),putShortMSB(t,c.adler&65535)),c.adler=1,t.status=BUSY_STATE,flush_pending(c),t.pending!==0)return t.last_flush=-1,Z_OK$3}if(t.status===GZIP_STATE){if(c.adler=0,put_byte(t,31),put_byte(t,139),put_byte(t,8),t.gzhead)put_byte(t,(t.gzhead.text?1:0)+(t.gzhead.hcrc?2:0)+(t.gzhead.extra?4:0)+(t.gzhead.name?8:0)+(t.gzhead.comment?16:0)),put_byte(t,t.gzhead.time&255),put_byte(t,t.gzhead.time>>8&255),put_byte(t,t.gzhead.time>>16&255),put_byte(t,t.gzhead.time>>24&255),put_byte(t,t.level===9?2:t.strategy>=Z_HUFFMAN_ONLY||t.level<2?4:0),put_byte(t,t.gzhead.os&255),t.gzhead.extra&&t.gzhead.extra.length&&(put_byte(t,t.gzhead.extra.length&255),put_byte(t,t.gzhead.extra.length>>8&255)),t.gzhead.hcrc&&(c.adler=crc32_1(c.adler,t.pending_buf,t.pending,0)),t.gzindex=0,t.status=EXTRA_STATE;else if(put_byte(t,0),put_byte(t,0),put_byte(t,0),put_byte(t,0),put_byte(t,0),put_byte(t,t.level===9?2:t.strategy>=Z_HUFFMAN_ONLY||t.level<2?4:0),put_byte(t,OS_CODE),t.status=BUSY_STATE,flush_pending(c),t.pending!==0)return t.last_flush=-1,Z_OK$3}if(t.status===EXTRA_STATE){if(t.gzhead.extra){let r=t.pending,o=(t.gzhead.extra.length&65535)-t.gzindex;for(;t.pending+o>t.pending_buf_size;){let f=t.pending_buf_size-t.pending;if(t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex,t.gzindex+f),t.pending),t.pending=t.pending_buf_size,t.gzhead.hcrc&&t.pending>r&&(c.adler=crc32_1(c.adler,t.pending_buf,t.pending-r,r)),t.gzindex+=f,flush_pending(c),t.pending!==0)return t.last_flush=-1,Z_OK$3;r=0,o-=f}let a=new Uint8Array(t.gzhead.extra);t.pending_buf.set(a.subarray(t.gzindex,t.gzindex+o),t.pending),t.pending+=o,t.gzhead.hcrc&&t.pending>r&&(c.adler=crc32_1(c.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=NAME_STATE}if(t.status===NAME_STATE){if(t.gzhead.name){let r=t.pending,o;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(c.adler=crc32_1(c.adler,t.pending_buf,t.pending-r,r)),flush_pending(c),t.pending!==0)return t.last_flush=-1,Z_OK$3;r=0}t.gzindex<t.gzhead.name.length?o=t.gzhead.name.charCodeAt(t.gzindex++)&255:o=0,put_byte(t,o)}while(o!==0);t.gzhead.hcrc&&t.pending>r&&(c.adler=crc32_1(c.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=COMMENT_STATE}if(t.status===COMMENT_STATE){if(t.gzhead.comment){let r=t.pending,o;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(c.adler=crc32_1(c.adler,t.pending_buf,t.pending-r,r)),flush_pending(c),t.pending!==0)return t.last_flush=-1,Z_OK$3;r=0}t.gzindex<t.gzhead.comment.length?o=t.gzhead.comment.charCodeAt(t.gzindex++)&255:o=0,put_byte(t,o)}while(o!==0);t.gzhead.hcrc&&t.pending>r&&(c.adler=crc32_1(c.adler,t.pending_buf,t.pending-r,r))}t.status=HCRC_STATE}if(t.status===HCRC_STATE){if(t.gzhead.hcrc){if(t.pending+2>t.pending_buf_size&&(flush_pending(c),t.pending!==0))return t.last_flush=-1,Z_OK$3;put_byte(t,c.adler&255),put_byte(t,c.adler>>8&255),c.adler=0}if(t.status=BUSY_STATE,flush_pending(c),t.pending!==0)return t.last_flush=-1,Z_OK$3}if(c.avail_in!==0||t.lookahead!==0||e!==Z_NO_FLUSH$2&&t.status!==FINISH_STATE){let r=t.level===0?deflate_stored(t,e):t.strategy===Z_HUFFMAN_ONLY?deflate_huff(t,e):t.strategy===Z_RLE?deflate_rle(t,e):configuration_table[t.level].func(t,e);if((r===BS_FINISH_STARTED||r===BS_FINISH_DONE)&&(t.status=FINISH_STATE),r===BS_NEED_MORE||r===BS_FINISH_STARTED)return c.avail_out===0&&(t.last_flush=-1),Z_OK$3;if(r===BS_BLOCK_DONE&&(e===Z_PARTIAL_FLUSH?_tr_align(t):e!==Z_BLOCK$1&&(_tr_stored_block(t,0,0,!1),e===Z_FULL_FLUSH$1&&(zero(t.head),t.lookahead===0&&(t.strstart=0,t.block_start=0,t.insert=0))),flush_pending(c),c.avail_out===0))return t.last_flush=-1,Z_OK$3}return e!==Z_FINISH$3?Z_OK$3:t.wrap<=0?Z_STREAM_END$3:(t.wrap===2?(put_byte(t,c.adler&255),put_byte(t,c.adler>>8&255),put_byte(t,c.adler>>16&255),put_byte(t,c.adler>>24&255),put_byte(t,c.total_in&255),put_byte(t,c.total_in>>8&255),put_byte(t,c.total_in>>16&255),put_byte(t,c.total_in>>24&255)):(putShortMSB(t,c.adler>>>16),putShortMSB(t,c.adler&65535)),flush_pending(c),t.wrap>0&&(t.wrap=-t.wrap),t.pending!==0?Z_OK$3:Z_STREAM_END$3)},deflateEnd=c=>{if(deflateStateCheck(c))return Z_STREAM_ERROR$2;const e=c.state.status;return c.state=null,e===BUSY_STATE?err(c,Z_DATA_ERROR$2):Z_OK$3},deflateSetDictionary=(c,e)=>{let t=e.length;if(deflateStateCheck(c))return Z_STREAM_ERROR$2;const s=c.state,r=s.wrap;if(r===2||r===1&&s.status!==INIT_STATE||s.lookahead)return Z_STREAM_ERROR$2;if(r===1&&(c.adler=adler32_1(c.adler,e,t,0)),s.wrap=0,t>=s.w_size){r===0&&(zero(s.head),s.strstart=0,s.block_start=0,s.insert=0);let m=new Uint8Array(s.w_size);m.set(e.subarray(t-s.w_size,t),0),e=m,t=s.w_size}const o=c.avail_in,a=c.next_in,f=c.input;for(c.avail_in=t,c.next_in=0,c.input=e,fill_window(s);s.lookahead>=MIN_MATCH;){let m=s.strstart,g=s.lookahead-(MIN_MATCH-1);do s.ins_h=HASH(s,s.ins_h,s.window[m+MIN_MATCH-1]),s.prev[m&s.w_mask]=s.head[s.ins_h],s.head[s.ins_h]=m,m++;while(--g);s.strstart=m,s.lookahead=MIN_MATCH-1,fill_window(s)}return s.strstart+=s.lookahead,s.block_start=s.strstart,s.insert=s.lookahead,s.lookahead=0,s.match_length=s.prev_length=MIN_MATCH-1,s.match_available=0,c.next_in=a,c.input=f,c.avail_in=o,s.wrap=r,Z_OK$3};var deflateInit_1=deflateInit,deflateInit2_1=deflateInit2,deflateReset_1=deflateReset,deflateResetKeep_1=deflateResetKeep,deflateSetHeader_1=deflateSetHeader,deflate_2$1=deflate$2,deflateEnd_1=deflateEnd,deflateSetDictionary_1=deflateSetDictionary,deflateInfo="pako deflate (from Nodeca project)",deflate_1$2={deflateInit:deflateInit_1,deflateInit2:deflateInit2_1,deflateReset:deflateReset_1,deflateResetKeep:deflateResetKeep_1,deflateSetHeader:deflateSetHeader_1,deflate:deflate_2$1,deflateEnd:deflateEnd_1,deflateSetDictionary:deflateSetDictionary_1,deflateInfo};const _has=(c,e)=>Object.prototype.hasOwnProperty.call(c,e);var assign=function(c){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const t=e.shift();if(t){if(typeof t!="object")throw new TypeError(t+"must be non-object");for(const s in t)_has(t,s)&&(c[s]=t[s])}}return c},flattenChunks=c=>{let e=0;for(let s=0,r=c.length;s<r;s++)e+=c[s].length;const t=new Uint8Array(e);for(let s=0,r=0,o=c.length;s<o;s++){let a=c[s];t.set(a,r),r+=a.length}return t},common={assign,flattenChunks};let STR_APPLY_UIA_OK=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(c){STR_APPLY_UIA_OK=!1}const _utf8len=new Uint8Array(256);for(let c=0;c<256;c++)_utf8len[c]=c>=252?6:c>=248?5:c>=240?4:c>=224?3:c>=192?2:1;_utf8len[254]=_utf8len[254]=1;var string2buf=c=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(c);let e,t,s,r,o,a=c.length,f=0;for(r=0;r<a;r++)t=c.charCodeAt(r),(t&64512)===55296&&r+1<a&&(s=c.charCodeAt(r+1),(s&64512)===56320&&(t=65536+(t-55296<<10)+(s-56320),r++)),f+=t<128?1:t<2048?2:t<65536?3:4;for(e=new Uint8Array(f),o=0,r=0;o<f;r++)t=c.charCodeAt(r),(t&64512)===55296&&r+1<a&&(s=c.charCodeAt(r+1),(s&64512)===56320&&(t=65536+(t-55296<<10)+(s-56320),r++)),t<128?e[o++]=t:t<2048?(e[o++]=192|t>>>6,e[o++]=128|t&63):t<65536?(e[o++]=224|t>>>12,e[o++]=128|t>>>6&63,e[o++]=128|t&63):(e[o++]=240|t>>>18,e[o++]=128|t>>>12&63,e[o++]=128|t>>>6&63,e[o++]=128|t&63);return e};const buf2binstring=(c,e)=>{if(e<65534&&c.subarray&&STR_APPLY_UIA_OK)return String.fromCharCode.apply(null,c.length===e?c:c.subarray(0,e));let t="";for(let s=0;s<e;s++)t+=String.fromCharCode(c[s]);return t};var buf2string=(c,e)=>{const t=e||c.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(c.subarray(0,e));let s,r;const o=new Array(t*2);for(r=0,s=0;s<t;){let a=c[s++];if(a<128){o[r++]=a;continue}let f=_utf8len[a];if(f>4){o[r++]=65533,s+=f-1;continue}for(a&=f===2?31:f===3?15:7;f>1&&s<t;)a=a<<6|c[s++]&63,f--;if(f>1){o[r++]=65533;continue}a<65536?o[r++]=a:(a-=65536,o[r++]=55296|a>>10&1023,o[r++]=56320|a&1023)}return buf2binstring(o,r)},utf8border=(c,e)=>{e=e||c.length,e>c.length&&(e=c.length);let t=e-1;for(;t>=0&&(c[t]&192)===128;)t--;return t<0||t===0?e:t+_utf8len[c[t]]>e?t:e},strings={string2buf,buf2string,utf8border};function ZStream(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var zstream=ZStream;const toString$1=Object.prototype.toString,{Z_NO_FLUSH:Z_NO_FLUSH$1,Z_SYNC_FLUSH,Z_FULL_FLUSH,Z_FINISH:Z_FINISH$2,Z_OK:Z_OK$2,Z_STREAM_END:Z_STREAM_END$2,Z_DEFAULT_COMPRESSION,Z_DEFAULT_STRATEGY,Z_DEFLATED:Z_DEFLATED$1}=constants$2;function Deflate$1(c){this.options=common.assign({level:Z_DEFAULT_COMPRESSION,method:Z_DEFLATED$1,chunkSize:16384,windowBits:15,memLevel:8,strategy:Z_DEFAULT_STRATEGY},c||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new zstream,this.strm.avail_out=0;let t=deflate_1$2.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(t!==Z_OK$2)throw new Error(messages[t]);if(e.header&&deflate_1$2.deflateSetHeader(this.strm,e.header),e.dictionary){let s;if(typeof e.dictionary=="string"?s=strings.string2buf(e.dictionary):toString$1.call(e.dictionary)==="[object ArrayBuffer]"?s=new Uint8Array(e.dictionary):s=e.dictionary,t=deflate_1$2.deflateSetDictionary(this.strm,s),t!==Z_OK$2)throw new Error(messages[t]);this._dict_set=!0}}Deflate$1.prototype.push=function(c,e){const t=this.strm,s=this.options.chunkSize;let r,o;if(this.ended)return!1;for(e===~~e?o=e:o=e===!0?Z_FINISH$2:Z_NO_FLUSH$1,typeof c=="string"?t.input=strings.string2buf(c):toString$1.call(c)==="[object ArrayBuffer]"?t.input=new Uint8Array(c):t.input=c,t.next_in=0,t.avail_in=t.input.length;;){if(t.avail_out===0&&(t.output=new Uint8Array(s),t.next_out=0,t.avail_out=s),(o===Z_SYNC_FLUSH||o===Z_FULL_FLUSH)&&t.avail_out<=6){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(r=deflate_1$2.deflate(t,o),r===Z_STREAM_END$2)return t.next_out>0&&this.onData(t.output.subarray(0,t.next_out)),r=deflate_1$2.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===Z_OK$2;if(t.avail_out===0){this.onData(t.output);continue}if(o>0&&t.next_out>0){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(t.avail_in===0)break}return!0};Deflate$1.prototype.onData=function(c){this.chunks.push(c)};Deflate$1.prototype.onEnd=function(c){c===Z_OK$2&&(this.result=common.flattenChunks(this.chunks)),this.chunks=[],this.err=c,this.msg=this.strm.msg};function deflate$1(c,e){const t=new Deflate$1(e);if(t.push(c,!0),t.err)throw t.msg||messages[t.err];return t.result}function deflateRaw$1(c,e){return e=e||{},e.raw=!0,deflate$1(c,e)}function gzip$1(c,e){return e=e||{},e.gzip=!0,deflate$1(c,e)}var Deflate_1$1=Deflate$1,deflate_2=deflate$1,deflateRaw_1$1=deflateRaw$1,gzip_1$1=gzip$1,constants$1=constants$2,deflate_1$1={Deflate:Deflate_1$1,deflate:deflate_2,deflateRaw:deflateRaw_1$1,gzip:gzip_1$1,constants:constants$1};const BAD$1=16209,TYPE$1=16191;var inffast=function c(e,t){let s,r,o,a,f,m,g,p,y,C,A,w,_,E,v,k,R,L,B,X,U,M,F,$;const ee=e.state;s=e.next_in,F=e.input,r=s+(e.avail_in-5),o=e.next_out,$=e.output,a=o-(t-e.avail_out),f=o+(e.avail_out-257),m=ee.dmax,g=ee.wsize,p=ee.whave,y=ee.wnext,C=ee.window,A=ee.hold,w=ee.bits,_=ee.lencode,E=ee.distcode,v=(1<<ee.lenbits)-1,k=(1<<ee.distbits)-1;e:do{w<15&&(A+=F[s++]<<w,w+=8,A+=F[s++]<<w,w+=8),R=_[A&v];t:for(;;){if(L=R>>>24,A>>>=L,w-=L,L=R>>>16&255,L===0)$[o++]=R&65535;else if(L&16){B=R&65535,L&=15,L&&(w<L&&(A+=F[s++]<<w,w+=8),B+=A&(1<<L)-1,A>>>=L,w-=L),w<15&&(A+=F[s++]<<w,w+=8,A+=F[s++]<<w,w+=8),R=E[A&k];n:for(;;){if(L=R>>>24,A>>>=L,w-=L,L=R>>>16&255,L&16){if(X=R&65535,L&=15,w<L&&(A+=F[s++]<<w,w+=8,w<L&&(A+=F[s++]<<w,w+=8)),X+=A&(1<<L)-1,X>m){e.msg="invalid distance too far back",ee.mode=BAD$1;break e}if(A>>>=L,w-=L,L=o-a,X>L){if(L=X-L,L>p&&ee.sane){e.msg="invalid distance too far back",ee.mode=BAD$1;break e}if(U=0,M=C,y===0){if(U+=g-L,L<B){B-=L;do $[o++]=C[U++];while(--L);U=o-X,M=$}}else if(y<L){if(U+=g+y-L,L-=y,L<B){B-=L;do $[o++]=C[U++];while(--L);if(U=0,y<B){L=y,B-=L;do $[o++]=C[U++];while(--L);U=o-X,M=$}}}else if(U+=y-L,L<B){B-=L;do $[o++]=C[U++];while(--L);U=o-X,M=$}for(;B>2;)$[o++]=M[U++],$[o++]=M[U++],$[o++]=M[U++],B-=3;B&&($[o++]=M[U++],B>1&&($[o++]=M[U++]))}else{U=o-X;do $[o++]=$[U++],$[o++]=$[U++],$[o++]=$[U++],B-=3;while(B>2);B&&($[o++]=$[U++],B>1&&($[o++]=$[U++]))}}else if(L&64){e.msg="invalid distance code",ee.mode=BAD$1;break e}else{R=E[(R&65535)+(A&(1<<L)-1)];continue n}break}}else if(L&64)if(L&32){ee.mode=TYPE$1;break e}else{e.msg="invalid literal/length code",ee.mode=BAD$1;break e}else{R=_[(R&65535)+(A&(1<<L)-1)];continue t}break}}while(s<r&&o<f);B=w>>3,s-=B,w-=B<<3,A&=(1<<w)-1,e.next_in=s,e.next_out=o,e.avail_in=s<r?5+(r-s):5-(s-r),e.avail_out=o<f?257+(f-o):257-(o-f),ee.hold=A,ee.bits=w};const MAXBITS=15,ENOUGH_LENS$1=852,ENOUGH_DISTS$1=592,CODES$1=0,LENS$1=1,DISTS$1=2,lbase=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),lext=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),dbase=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),dext=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),inflate_table=(c,e,t,s,r,o,a,f)=>{const m=f.bits;let g=0,p=0,y=0,C=0,A=0,w=0,_=0,E=0,v=0,k=0,R,L,B,X,U,M=null,F;const $=new Uint16Array(MAXBITS+1),ee=new Uint16Array(MAXBITS+1);let te=null,he,re,pe;for(g=0;g<=MAXBITS;g++)$[g]=0;for(p=0;p<s;p++)$[e[t+p]]++;for(A=m,C=MAXBITS;C>=1&&$[C]===0;C--);if(A>C&&(A=C),C===0)return r[o++]=1<<24|64<<16|0,r[o++]=1<<24|64<<16|0,f.bits=1,0;for(y=1;y<C&&$[y]===0;y++);for(A<y&&(A=y),E=1,g=1;g<=MAXBITS;g++)if(E<<=1,E-=$[g],E<0)return-1;if(E>0&&(c===CODES$1||C!==1))return-1;for(ee[1]=0,g=1;g<MAXBITS;g++)ee[g+1]=ee[g]+$[g];for(p=0;p<s;p++)e[t+p]!==0&&(a[ee[e[t+p]]++]=p);if(c===CODES$1?(M=te=a,F=20):c===LENS$1?(M=lbase,te=lext,F=257):(M=dbase,te=dext,F=0),k=0,p=0,g=y,U=o,w=A,_=0,B=-1,v=1<<A,X=v-1,c===LENS$1&&v>ENOUGH_LENS$1||c===DISTS$1&&v>ENOUGH_DISTS$1)return 1;for(;;){he=g-_,a[p]+1<F?(re=0,pe=a[p]):a[p]>=F?(re=te[a[p]-F],pe=M[a[p]-F]):(re=32+64,pe=0),R=1<<g-_,L=1<<w,y=L;do L-=R,r[U+(k>>_)+L]=he<<24|re<<16|pe|0;while(L!==0);for(R=1<<g-1;k&R;)R>>=1;if(R!==0?(k&=R-1,k+=R):k=0,p++,--$[g]===0){if(g===C)break;g=e[t+a[p]]}if(g>A&&(k&X)!==B){for(_===0&&(_=A),U+=y,w=g-_,E=1<<w;w+_<C&&(E-=$[w+_],!(E<=0));)w++,E<<=1;if(v+=1<<w,c===LENS$1&&v>ENOUGH_LENS$1||c===DISTS$1&&v>ENOUGH_DISTS$1)return 1;B=k&X,r[B]=A<<24|w<<16|U-o|0}}return k!==0&&(r[U+k]=g-_<<24|64<<16|0),f.bits=A,0};var inftrees=inflate_table;const CODES=0,LENS=1,DISTS=2,{Z_FINISH:Z_FINISH$1,Z_BLOCK,Z_TREES,Z_OK:Z_OK$1,Z_STREAM_END:Z_STREAM_END$1,Z_NEED_DICT:Z_NEED_DICT$1,Z_STREAM_ERROR:Z_STREAM_ERROR$1,Z_DATA_ERROR:Z_DATA_ERROR$1,Z_MEM_ERROR:Z_MEM_ERROR$1,Z_BUF_ERROR,Z_DEFLATED}=constants$2,HEAD=16180,FLAGS=16181,TIME=16182,OS=16183,EXLEN=16184,EXTRA=16185,NAME=16186,COMMENT=16187,HCRC=16188,DICTID=16189,DICT=16190,TYPE=16191,TYPEDO=16192,STORED=16193,COPY_=16194,COPY=16195,TABLE=16196,LENLENS=16197,CODELENS=16198,LEN_=16199,LEN=16200,LENEXT=16201,DIST=16202,DISTEXT=16203,MATCH=16204,LIT=16205,CHECK=16206,LENGTH=16207,DONE=16208,BAD=16209,MEM=16210,SYNC=16211,ENOUGH_LENS=852,ENOUGH_DISTS=592,MAX_WBITS=15,DEF_WBITS=MAX_WBITS,zswap32=c=>(c>>>24&255)+(c>>>8&65280)+((c&65280)<<8)+((c&255)<<24);function InflateState(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const inflateStateCheck=c=>{if(!c)return 1;const e=c.state;return!e||e.strm!==c||e.mode<HEAD||e.mode>SYNC?1:0},inflateResetKeep=c=>{if(inflateStateCheck(c))return Z_STREAM_ERROR$1;const e=c.state;return c.total_in=c.total_out=e.total=0,c.msg="",e.wrap&&(c.adler=e.wrap&1),e.mode=HEAD,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(ENOUGH_LENS),e.distcode=e.distdyn=new Int32Array(ENOUGH_DISTS),e.sane=1,e.back=-1,Z_OK$1},inflateReset=c=>{if(inflateStateCheck(c))return Z_STREAM_ERROR$1;const e=c.state;return e.wsize=0,e.whave=0,e.wnext=0,inflateResetKeep(c)},inflateReset2=(c,e)=>{let t;if(inflateStateCheck(c))return Z_STREAM_ERROR$1;const s=c.state;return e<0?(t=0,e=-e):(t=(e>>4)+5,e<48&&(e&=15)),e&&(e<8||e>15)?Z_STREAM_ERROR$1:(s.window!==null&&s.wbits!==e&&(s.window=null),s.wrap=t,s.wbits=e,inflateReset(c))},inflateInit2=(c,e)=>{if(!c)return Z_STREAM_ERROR$1;const t=new InflateState;c.state=t,t.strm=c,t.window=null,t.mode=HEAD;const s=inflateReset2(c,e);return s!==Z_OK$1&&(c.state=null),s},inflateInit=c=>inflateInit2(c,DEF_WBITS);let virgin=!0,lenfix,distfix;const fixedtables=c=>{if(virgin){lenfix=new Int32Array(512),distfix=new Int32Array(32);let e=0;for(;e<144;)c.lens[e++]=8;for(;e<256;)c.lens[e++]=9;for(;e<280;)c.lens[e++]=7;for(;e<288;)c.lens[e++]=8;for(inftrees(LENS,c.lens,0,288,lenfix,0,c.work,{bits:9}),e=0;e<32;)c.lens[e++]=5;inftrees(DISTS,c.lens,0,32,distfix,0,c.work,{bits:5}),virgin=!1}c.lencode=lenfix,c.lenbits=9,c.distcode=distfix,c.distbits=5},updatewindow=(c,e,t,s)=>{let r;const o=c.state;return o.window===null&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new Uint8Array(o.wsize)),s>=o.wsize?(o.window.set(e.subarray(t-o.wsize,t),0),o.wnext=0,o.whave=o.wsize):(r=o.wsize-o.wnext,r>s&&(r=s),o.window.set(e.subarray(t-s,t-s+r),o.wnext),s-=r,s?(o.window.set(e.subarray(t-s,t),0),o.wnext=s,o.whave=o.wsize):(o.wnext+=r,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=r))),0},inflate$2=(c,e)=>{let t,s,r,o,a,f,m,g,p,y,C,A,w,_,E=0,v,k,R,L,B,X,U,M;const F=new Uint8Array(4);let $,ee;const te=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(inflateStateCheck(c)||!c.output||!c.input&&c.avail_in!==0)return Z_STREAM_ERROR$1;t=c.state,t.mode===TYPE&&(t.mode=TYPEDO),a=c.next_out,r=c.output,m=c.avail_out,o=c.next_in,s=c.input,f=c.avail_in,g=t.hold,p=t.bits,y=f,C=m,M=Z_OK$1;e:for(;;)switch(t.mode){case HEAD:if(t.wrap===0){t.mode=TYPEDO;break}for(;p<16;){if(f===0)break e;f--,g+=s[o++]<<p,p+=8}if(t.wrap&2&&g===35615){t.wbits===0&&(t.wbits=15),t.check=0,F[0]=g&255,F[1]=g>>>8&255,t.check=crc32_1(t.check,F,2,0),g=0,p=0,t.mode=FLAGS;break}if(t.head&&(t.head.done=!1),!(t.wrap&1)||(((g&255)<<8)+(g>>8))%31){c.msg="incorrect header check",t.mode=BAD;break}if((g&15)!==Z_DEFLATED){c.msg="unknown compression method",t.mode=BAD;break}if(g>>>=4,p-=4,U=(g&15)+8,t.wbits===0&&(t.wbits=U),U>15||U>t.wbits){c.msg="invalid window size",t.mode=BAD;break}t.dmax=1<<t.wbits,t.flags=0,c.adler=t.check=1,t.mode=g&512?DICTID:TYPE,g=0,p=0;break;case FLAGS:for(;p<16;){if(f===0)break e;f--,g+=s[o++]<<p,p+=8}if(t.flags=g,(t.flags&255)!==Z_DEFLATED){c.msg="unknown compression method",t.mode=BAD;break}if(t.flags&57344){c.msg="unknown header flags set",t.mode=BAD;break}t.head&&(t.head.text=g>>8&1),t.flags&512&&t.wrap&4&&(F[0]=g&255,F[1]=g>>>8&255,t.check=crc32_1(t.check,F,2,0)),g=0,p=0,t.mode=TIME;case TIME:for(;p<32;){if(f===0)break e;f--,g+=s[o++]<<p,p+=8}t.head&&(t.head.time=g),t.flags&512&&t.wrap&4&&(F[0]=g&255,F[1]=g>>>8&255,F[2]=g>>>16&255,F[3]=g>>>24&255,t.check=crc32_1(t.check,F,4,0)),g=0,p=0,t.mode=OS;case OS:for(;p<16;){if(f===0)break e;f--,g+=s[o++]<<p,p+=8}t.head&&(t.head.xflags=g&255,t.head.os=g>>8),t.flags&512&&t.wrap&4&&(F[0]=g&255,F[1]=g>>>8&255,t.check=crc32_1(t.check,F,2,0)),g=0,p=0,t.mode=EXLEN;case EXLEN:if(t.flags&1024){for(;p<16;){if(f===0)break e;f--,g+=s[o++]<<p,p+=8}t.length=g,t.head&&(t.head.extra_len=g),t.flags&512&&t.wrap&4&&(F[0]=g&255,F[1]=g>>>8&255,t.check=crc32_1(t.check,F,2,0)),g=0,p=0}else t.head&&(t.head.extra=null);t.mode=EXTRA;case EXTRA:if(t.flags&1024&&(A=t.length,A>f&&(A=f),A&&(t.head&&(U=t.head.extra_len-t.length,t.head.extra||(t.head.extra=new Uint8Array(t.head.extra_len)),t.head.extra.set(s.subarray(o,o+A),U)),t.flags&512&&t.wrap&4&&(t.check=crc32_1(t.check,s,A,o)),f-=A,o+=A,t.length-=A),t.length))break e;t.length=0,t.mode=NAME;case NAME:if(t.flags&2048){if(f===0)break e;A=0;do U=s[o+A++],t.head&&U&&t.length<65536&&(t.head.name+=String.fromCharCode(U));while(U&&A<f);if(t.flags&512&&t.wrap&4&&(t.check=crc32_1(t.check,s,A,o)),f-=A,o+=A,U)break e}else t.head&&(t.head.name=null);t.length=0,t.mode=COMMENT;case COMMENT:if(t.flags&4096){if(f===0)break e;A=0;do U=s[o+A++],t.head&&U&&t.length<65536&&(t.head.comment+=String.fromCharCode(U));while(U&&A<f);if(t.flags&512&&t.wrap&4&&(t.check=crc32_1(t.check,s,A,o)),f-=A,o+=A,U)break e}else t.head&&(t.head.comment=null);t.mode=HCRC;case HCRC:if(t.flags&512){for(;p<16;){if(f===0)break e;f--,g+=s[o++]<<p,p+=8}if(t.wrap&4&&g!==(t.check&65535)){c.msg="header crc mismatch",t.mode=BAD;break}g=0,p=0}t.head&&(t.head.hcrc=t.flags>>9&1,t.head.done=!0),c.adler=t.check=0,t.mode=TYPE;break;case DICTID:for(;p<32;){if(f===0)break e;f--,g+=s[o++]<<p,p+=8}c.adler=t.check=zswap32(g),g=0,p=0,t.mode=DICT;case DICT:if(t.havedict===0)return c.next_out=a,c.avail_out=m,c.next_in=o,c.avail_in=f,t.hold=g,t.bits=p,Z_NEED_DICT$1;c.adler=t.check=1,t.mode=TYPE;case TYPE:if(e===Z_BLOCK||e===Z_TREES)break e;case TYPEDO:if(t.last){g>>>=p&7,p-=p&7,t.mode=CHECK;break}for(;p<3;){if(f===0)break e;f--,g+=s[o++]<<p,p+=8}switch(t.last=g&1,g>>>=1,p-=1,g&3){case 0:t.mode=STORED;break;case 1:if(fixedtables(t),t.mode=LEN_,e===Z_TREES){g>>>=2,p-=2;break e}break;case 2:t.mode=TABLE;break;case 3:c.msg="invalid block type",t.mode=BAD}g>>>=2,p-=2;break;case STORED:for(g>>>=p&7,p-=p&7;p<32;){if(f===0)break e;f--,g+=s[o++]<<p,p+=8}if((g&65535)!==(g>>>16^65535)){c.msg="invalid stored block lengths",t.mode=BAD;break}if(t.length=g&65535,g=0,p=0,t.mode=COPY_,e===Z_TREES)break e;case COPY_:t.mode=COPY;case COPY:if(A=t.length,A){if(A>f&&(A=f),A>m&&(A=m),A===0)break e;r.set(s.subarray(o,o+A),a),f-=A,o+=A,m-=A,a+=A,t.length-=A;break}t.mode=TYPE;break;case TABLE:for(;p<14;){if(f===0)break e;f--,g+=s[o++]<<p,p+=8}if(t.nlen=(g&31)+257,g>>>=5,p-=5,t.ndist=(g&31)+1,g>>>=5,p-=5,t.ncode=(g&15)+4,g>>>=4,p-=4,t.nlen>286||t.ndist>30){c.msg="too many length or distance symbols",t.mode=BAD;break}t.have=0,t.mode=LENLENS;case LENLENS:for(;t.have<t.ncode;){for(;p<3;){if(f===0)break e;f--,g+=s[o++]<<p,p+=8}t.lens[te[t.have++]]=g&7,g>>>=3,p-=3}for(;t.have<19;)t.lens[te[t.have++]]=0;if(t.lencode=t.lendyn,t.lenbits=7,$={bits:t.lenbits},M=inftrees(CODES,t.lens,0,19,t.lencode,0,t.work,$),t.lenbits=$.bits,M){c.msg="invalid code lengths set",t.mode=BAD;break}t.have=0,t.mode=CODELENS;case CODELENS:for(;t.have<t.nlen+t.ndist;){for(;E=t.lencode[g&(1<<t.lenbits)-1],v=E>>>24,k=E>>>16&255,R=E&65535,!(v<=p);){if(f===0)break e;f--,g+=s[o++]<<p,p+=8}if(R<16)g>>>=v,p-=v,t.lens[t.have++]=R;else{if(R===16){for(ee=v+2;p<ee;){if(f===0)break e;f--,g+=s[o++]<<p,p+=8}if(g>>>=v,p-=v,t.have===0){c.msg="invalid bit length repeat",t.mode=BAD;break}U=t.lens[t.have-1],A=3+(g&3),g>>>=2,p-=2}else if(R===17){for(ee=v+3;p<ee;){if(f===0)break e;f--,g+=s[o++]<<p,p+=8}g>>>=v,p-=v,U=0,A=3+(g&7),g>>>=3,p-=3}else{for(ee=v+7;p<ee;){if(f===0)break e;f--,g+=s[o++]<<p,p+=8}g>>>=v,p-=v,U=0,A=11+(g&127),g>>>=7,p-=7}if(t.have+A>t.nlen+t.ndist){c.msg="invalid bit length repeat",t.mode=BAD;break}for(;A--;)t.lens[t.have++]=U}}if(t.mode===BAD)break;if(t.lens[256]===0){c.msg="invalid code -- missing end-of-block",t.mode=BAD;break}if(t.lenbits=9,$={bits:t.lenbits},M=inftrees(LENS,t.lens,0,t.nlen,t.lencode,0,t.work,$),t.lenbits=$.bits,M){c.msg="invalid literal/lengths set",t.mode=BAD;break}if(t.distbits=6,t.distcode=t.distdyn,$={bits:t.distbits},M=inftrees(DISTS,t.lens,t.nlen,t.ndist,t.distcode,0,t.work,$),t.distbits=$.bits,M){c.msg="invalid distances set",t.mode=BAD;break}if(t.mode=LEN_,e===Z_TREES)break e;case LEN_:t.mode=LEN;case LEN:if(f>=6&&m>=258){c.next_out=a,c.avail_out=m,c.next_in=o,c.avail_in=f,t.hold=g,t.bits=p,inffast(c,C),a=c.next_out,r=c.output,m=c.avail_out,o=c.next_in,s=c.input,f=c.avail_in,g=t.hold,p=t.bits,t.mode===TYPE&&(t.back=-1);break}for(t.back=0;E=t.lencode[g&(1<<t.lenbits)-1],v=E>>>24,k=E>>>16&255,R=E&65535,!(v<=p);){if(f===0)break e;f--,g+=s[o++]<<p,p+=8}if(k&&!(k&240)){for(L=v,B=k,X=R;E=t.lencode[X+((g&(1<<L+B)-1)>>L)],v=E>>>24,k=E>>>16&255,R=E&65535,!(L+v<=p);){if(f===0)break e;f--,g+=s[o++]<<p,p+=8}g>>>=L,p-=L,t.back+=L}if(g>>>=v,p-=v,t.back+=v,t.length=R,k===0){t.mode=LIT;break}if(k&32){t.back=-1,t.mode=TYPE;break}if(k&64){c.msg="invalid literal/length code",t.mode=BAD;break}t.extra=k&15,t.mode=LENEXT;case LENEXT:if(t.extra){for(ee=t.extra;p<ee;){if(f===0)break e;f--,g+=s[o++]<<p,p+=8}t.length+=g&(1<<t.extra)-1,g>>>=t.extra,p-=t.extra,t.back+=t.extra}t.was=t.length,t.mode=DIST;case DIST:for(;E=t.distcode[g&(1<<t.distbits)-1],v=E>>>24,k=E>>>16&255,R=E&65535,!(v<=p);){if(f===0)break e;f--,g+=s[o++]<<p,p+=8}if(!(k&240)){for(L=v,B=k,X=R;E=t.distcode[X+((g&(1<<L+B)-1)>>L)],v=E>>>24,k=E>>>16&255,R=E&65535,!(L+v<=p);){if(f===0)break e;f--,g+=s[o++]<<p,p+=8}g>>>=L,p-=L,t.back+=L}if(g>>>=v,p-=v,t.back+=v,k&64){c.msg="invalid distance code",t.mode=BAD;break}t.offset=R,t.extra=k&15,t.mode=DISTEXT;case DISTEXT:if(t.extra){for(ee=t.extra;p<ee;){if(f===0)break e;f--,g+=s[o++]<<p,p+=8}t.offset+=g&(1<<t.extra)-1,g>>>=t.extra,p-=t.extra,t.back+=t.extra}if(t.offset>t.dmax){c.msg="invalid distance too far back",t.mode=BAD;break}t.mode=MATCH;case MATCH:if(m===0)break e;if(A=C-m,t.offset>A){if(A=t.offset-A,A>t.whave&&t.sane){c.msg="invalid distance too far back",t.mode=BAD;break}A>t.wnext?(A-=t.wnext,w=t.wsize-A):w=t.wnext-A,A>t.length&&(A=t.length),_=t.window}else _=r,w=a-t.offset,A=t.length;A>m&&(A=m),m-=A,t.length-=A;do r[a++]=_[w++];while(--A);t.length===0&&(t.mode=LEN);break;case LIT:if(m===0)break e;r[a++]=t.length,m--,t.mode=LEN;break;case CHECK:if(t.wrap){for(;p<32;){if(f===0)break e;f--,g|=s[o++]<<p,p+=8}if(C-=m,c.total_out+=C,t.total+=C,t.wrap&4&&C&&(c.adler=t.check=t.flags?crc32_1(t.check,r,C,a-C):adler32_1(t.check,r,C,a-C)),C=m,t.wrap&4&&(t.flags?g:zswap32(g))!==t.check){c.msg="incorrect data check",t.mode=BAD;break}g=0,p=0}t.mode=LENGTH;case LENGTH:if(t.wrap&&t.flags){for(;p<32;){if(f===0)break e;f--,g+=s[o++]<<p,p+=8}if(t.wrap&4&&g!==(t.total&4294967295)){c.msg="incorrect length check",t.mode=BAD;break}g=0,p=0}t.mode=DONE;case DONE:M=Z_STREAM_END$1;break e;case BAD:M=Z_DATA_ERROR$1;break e;case MEM:return Z_MEM_ERROR$1;case SYNC:default:return Z_STREAM_ERROR$1}return c.next_out=a,c.avail_out=m,c.next_in=o,c.avail_in=f,t.hold=g,t.bits=p,(t.wsize||C!==c.avail_out&&t.mode<BAD&&(t.mode<CHECK||e!==Z_FINISH$1))&&updatewindow(c,c.output,c.next_out,C-c.avail_out),y-=c.avail_in,C-=c.avail_out,c.total_in+=y,c.total_out+=C,t.total+=C,t.wrap&4&&C&&(c.adler=t.check=t.flags?crc32_1(t.check,r,C,c.next_out-C):adler32_1(t.check,r,C,c.next_out-C)),c.data_type=t.bits+(t.last?64:0)+(t.mode===TYPE?128:0)+(t.mode===LEN_||t.mode===COPY_?256:0),(y===0&&C===0||e===Z_FINISH$1)&&M===Z_OK$1&&(M=Z_BUF_ERROR),M},inflateEnd=c=>{if(inflateStateCheck(c))return Z_STREAM_ERROR$1;let e=c.state;return e.window&&(e.window=null),c.state=null,Z_OK$1},inflateGetHeader=(c,e)=>{if(inflateStateCheck(c))return Z_STREAM_ERROR$1;const t=c.state;return t.wrap&2?(t.head=e,e.done=!1,Z_OK$1):Z_STREAM_ERROR$1},inflateSetDictionary=(c,e)=>{const t=e.length;let s,r,o;return inflateStateCheck(c)||(s=c.state,s.wrap!==0&&s.mode!==DICT)?Z_STREAM_ERROR$1:s.mode===DICT&&(r=1,r=adler32_1(r,e,t,0),r!==s.check)?Z_DATA_ERROR$1:(o=updatewindow(c,e,t,t),o?(s.mode=MEM,Z_MEM_ERROR$1):(s.havedict=1,Z_OK$1))};var inflateReset_1=inflateReset,inflateReset2_1=inflateReset2,inflateResetKeep_1=inflateResetKeep,inflateInit_1=inflateInit,inflateInit2_1=inflateInit2,inflate_2$1=inflate$2,inflateEnd_1=inflateEnd,inflateGetHeader_1=inflateGetHeader,inflateSetDictionary_1=inflateSetDictionary,inflateInfo="pako inflate (from Nodeca project)",inflate_1$2={inflateReset:inflateReset_1,inflateReset2:inflateReset2_1,inflateResetKeep:inflateResetKeep_1,inflateInit:inflateInit_1,inflateInit2:inflateInit2_1,inflate:inflate_2$1,inflateEnd:inflateEnd_1,inflateGetHeader:inflateGetHeader_1,inflateSetDictionary:inflateSetDictionary_1,inflateInfo};function GZheader(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var gzheader=GZheader;const toString=Object.prototype.toString,{Z_NO_FLUSH,Z_FINISH,Z_OK,Z_STREAM_END,Z_NEED_DICT,Z_STREAM_ERROR,Z_DATA_ERROR,Z_MEM_ERROR}=constants$2;function Inflate$1(c){this.options=common.assign({chunkSize:1024*64,windowBits:15,to:""},c||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,e.windowBits===0&&(e.windowBits=-15)),e.windowBits>=0&&e.windowBits<16&&!(c&&c.windowBits)&&(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&(e.windowBits&15||(e.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new zstream,this.strm.avail_out=0;let t=inflate_1$2.inflateInit2(this.strm,e.windowBits);if(t!==Z_OK)throw new Error(messages[t]);if(this.header=new gzheader,inflate_1$2.inflateGetHeader(this.strm,this.header),e.dictionary&&(typeof e.dictionary=="string"?e.dictionary=strings.string2buf(e.dictionary):toString.call(e.dictionary)==="[object ArrayBuffer]"&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(t=inflate_1$2.inflateSetDictionary(this.strm,e.dictionary),t!==Z_OK)))throw new Error(messages[t])}Inflate$1.prototype.push=function(c,e){const t=this.strm,s=this.options.chunkSize,r=this.options.dictionary;let o,a,f;if(this.ended)return!1;for(e===~~e?a=e:a=e===!0?Z_FINISH:Z_NO_FLUSH,toString.call(c)==="[object ArrayBuffer]"?t.input=new Uint8Array(c):t.input=c,t.next_in=0,t.avail_in=t.input.length;;){for(t.avail_out===0&&(t.output=new Uint8Array(s),t.next_out=0,t.avail_out=s),o=inflate_1$2.inflate(t,a),o===Z_NEED_DICT&&r&&(o=inflate_1$2.inflateSetDictionary(t,r),o===Z_OK?o=inflate_1$2.inflate(t,a):o===Z_DATA_ERROR&&(o=Z_NEED_DICT));t.avail_in>0&&o===Z_STREAM_END&&t.state.wrap>0&&c[t.next_in]!==0;)inflate_1$2.inflateReset(t),o=inflate_1$2.inflate(t,a);switch(o){case Z_STREAM_ERROR:case Z_DATA_ERROR:case Z_NEED_DICT:case Z_MEM_ERROR:return this.onEnd(o),this.ended=!0,!1}if(f=t.avail_out,t.next_out&&(t.avail_out===0||o===Z_STREAM_END))if(this.options.to==="string"){let m=strings.utf8border(t.output,t.next_out),g=t.next_out-m,p=strings.buf2string(t.output,m);t.next_out=g,t.avail_out=s-g,g&&t.output.set(t.output.subarray(m,m+g),0),this.onData(p)}else this.onData(t.output.length===t.next_out?t.output:t.output.subarray(0,t.next_out));if(!(o===Z_OK&&f===0)){if(o===Z_STREAM_END)return o=inflate_1$2.inflateEnd(this.strm),this.onEnd(o),this.ended=!0,!0;if(t.avail_in===0)break}}return!0};Inflate$1.prototype.onData=function(c){this.chunks.push(c)};Inflate$1.prototype.onEnd=function(c){c===Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=common.flattenChunks(this.chunks)),this.chunks=[],this.err=c,this.msg=this.strm.msg};const{Deflate,deflate,deflateRaw,gzip}=deflate_1$1;var deflate_1=deflate;class DecodedStream{_sourceStream;_buffer;_minBufferLength=512;_bufferLength=0;_current=0;_ended=!1;constructor(e){this._sourceStream=e}get length(){return this._buffer.length}ensureBuffer(e){const t=this._buffer;if(t&&e<=t.byteLength)return t;let s=this._minBufferLength;for(;s<e;)s*=2;const r=new Uint8Array(s);return t&&r.set(t),this._buffer=r}takeByte(){const e=this._current;for(;this._bufferLength<=e;){if(this._ended)return-1;this._readBlock()}return this._buffer[this._current++]}takeBytes(e){let t;const s=this._current;if(e){for(this.ensureBuffer(s+e),t=s+e;!this._ended&&this._bufferLength<t;)this._readBlock();t>this._bufferLength&&(t=this._bufferLength)}else{for(;!this._ended;)this._readBlock();t=this._bufferLength}return this._current=t,this._buffer.subarray(s,t)}takeUint16(){const e=this.takeByte(),t=this.takeByte();return e===-1||t===-1?-1:(e<<8)+t}takeInt32(){const e=this.takeByte(),t=this.takeByte(),s=this.takeByte(),r=this.takeByte();return(e<<24)+(t<<16)+(s<<8)+r}peekByte(){const e=this.takeByte();return e!==-1&&this._current--,e}peekBytes(e){const t=this.takeBytes(e);return this._current-=t.length,t}skip(e){this._current+=e||1}reset(){this._current=0}}class FlateStream extends DecodedStream{static codeLenCodeMap=new Int32Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);static lengthDecode=new Int32Array([3,4,5,6,7,8,9,10,65547,65549,65551,65553,131091,131095,131099,131103,196643,196651,196659,196667,262211,262227,262243,262259,327811,327843,327875,327907,258,258,258]);static distDecode=new Int32Array([1,2,3,4,65541,65543,131081,131085,196625,196633,262177,262193,327745,327777,393345,393409,459009,459137,524801,525057,590849,591361,657409,658433,724993,727041,794625,798721,868353,876545]);static fixedLitCodeTab=[new Int32Array([459008,524368,524304,524568,459024,524400,524336,590016,459016,524384,524320,589984,524288,524416,524352,590048,459012,524376,524312,589968,459028,524408,524344,590032,459020,524392,524328,59e4,524296,524424,524360,590064,459010,524372,524308,524572,459026,524404,524340,590024,459018,524388,524324,589992,524292,524420,524356,590056,459014,524380,524316,589976,459030,524412,524348,590040,459022,524396,524332,590008,524300,524428,524364,590072,459009,524370,524306,524570,459025,524402,524338,590020,459017,524386,524322,589988,524290,524418,524354,590052,459013,524378,524314,589972,459029,524410,524346,590036,459021,524394,524330,590004,524298,524426,524362,590068,459011,524374,524310,524574,459027,524406,524342,590028,459019,524390,524326,589996,524294,524422,524358,590060,459015,524382,524318,589980,459031,524414,524350,590044,459023,524398,524334,590012,524302,524430,524366,590076,459008,524369,524305,524569,459024,524401,524337,590018,459016,524385,524321,589986,524289,524417,524353,590050,459012,524377,524313,589970,459028,524409,524345,590034,459020,524393,524329,590002,524297,524425,524361,590066,459010,524373,524309,524573,459026,524405,524341,590026,459018,524389,524325,589994,524293,524421,524357,590058,459014,524381,524317,589978,459030,524413,524349,590042,459022,524397,524333,590010,524301,524429,524365,590074,459009,524371,524307,524571,459025,524403,524339,590022,459017,524387,524323,589990,524291,524419,524355,590054,459013,524379,524315,589974,459029,524411,524347,590038,459021,524395,524331,590006,524299,524427,524363,590070,459011,524375,524311,524575,459027,524407,524343,590030,459019,524391,524327,589998,524295,524423,524359,590062,459015,524383,524319,589982,459031,524415,524351,590046,459023,524399,524335,590014,524303,524431,524367,590078,459008,524368,524304,524568,459024,524400,524336,590017,459016,524384,524320,589985,524288,524416,524352,590049,459012,524376,524312,589969,459028,524408,524344,590033,459020,524392,524328,590001,524296,524424,524360,590065,459010,524372,524308,524572,459026,524404,524340,590025,459018,524388,524324,589993,524292,524420,524356,590057,459014,524380,524316,589977,459030,524412,524348,590041,459022,524396,524332,590009,524300,524428,524364,590073,459009,524370,524306,524570,459025,524402,524338,590021,459017,524386,524322,589989,524290,524418,524354,590053,459013,524378,524314,589973,459029,524410,524346,590037,459021,524394,524330,590005,524298,524426,524362,590069,459011,524374,524310,524574,459027,524406,524342,590029,459019,524390,524326,589997,524294,524422,524358,590061,459015,524382,524318,589981,459031,524414,524350,590045,459023,524398,524334,590013,524302,524430,524366,590077,459008,524369,524305,524569,459024,524401,524337,590019,459016,524385,524321,589987,524289,524417,524353,590051,459012,524377,524313,589971,459028,524409,524345,590035,459020,524393,524329,590003,524297,524425,524361,590067,459010,524373,524309,524573,459026,524405,524341,590027,459018,524389,524325,589995,524293,524421,524357,590059,459014,524381,524317,589979,459030,524413,524349,590043,459022,524397,524333,590011,524301,524429,524365,590075,459009,524371,524307,524571,459025,524403,524339,590023,459017,524387,524323,589991,524291,524419,524355,590055,459013,524379,524315,589975,459029,524411,524347,590039,459021,524395,524331,590007,524299,524427,524363,590071,459011,524375,524311,524575,459027,524407,524343,590031,459019,524391,524327,589999,524295,524423,524359,590063,459015,524383,524319,589983,459031,524415,524351,590047,459023,524399,524335,590015,524303,524431,524367,590079]),9];static fixedDistCodeTab=[new Int32Array([327680,327696,327688,327704,327684,327700,327692,327708,327682,327698,327690,327706,327686,327702,327694,0,327681,327697,327689,327705,327685,327701,327693,327709,327683,327699,327691,327707,327687,327703,327695,0]),5];_codeSize=0;_codeBuf=0;constructor(e){super(e);const t=e.takeByte(),s=e.takeByte();if(t===-1||s===-1)throw new Error(`Invalid header in flate stream: ${t}, ${s}`);if((t&15)!==8)throw new Error(`Unknown compression method in flate stream: ${t}, ${s}`);if(((t<<8)+s)%31!==0)throw new Error(`Bad FCHECK in flate stream: ${t}, ${s}`);if(s&32)throw new Error(`FDICT bit set in flate stream: ${t}, ${s}`);this._codeSize=0,this._codeBuf=0}_readBlock(){let e,t;const s=this._sourceStream;let r=this.getBits(3);if(r&1&&(this._ended=!0),r>>=1,r===0){let g;if((g=s.takeByte())===-1)throw new Error("Bad block header in flate stream");let p=g;if((g=s.takeByte())===-1)throw new Error("Bad block header in flate stream");if(p|=g<<8,(g=s.takeByte())===-1)throw new Error("Bad block header in flate stream");let y=g;if((g=s.takeByte())===-1)throw new Error("Bad block header in flate stream");if(y|=g<<8,y!==(~p&65535)&&(p!==0||y!==0))throw new Error("Bad uncompressed block length in flate stream");this._codeBuf=0,this._codeSize=0;const C=this._bufferLength,A=C+p;if(e=this.ensureBuffer(A),this._bufferLength=A,p===0)s.peekByte()===-1&&(this._ended=!0);else{const w=s.takeBytes(p);e.set(w,C),w.length<p&&(this._ended=!0)}return}let o,a;if(r===1)o=FlateStream.fixedLitCodeTab,a=FlateStream.fixedDistCodeTab;else if(r===2){const g=this.getBits(5)+257,p=this.getBits(5)+1,y=this.getBits(4)+4,C=new Uint8Array(FlateStream.codeLenCodeMap.length);let A;for(A=0;A<y;A++)C[FlateStream.codeLenCodeMap[A]]=this.getBits(3);const w=this.generateHuffmanTable(C);t=0,A=0;const _=g+p,E=new Uint8Array(_);let v,k,R;for(;A<_;){const L=this.getCode(w);if(L===16)v=2,k=3,R=t;else if(L===17)v=3,k=3,R=t=0;else if(L===18)v=7,k=11,R=t=0;else{E[A++]=t=L;continue}let B=this.getBits(v)+k;for(;B-- >0;)E[A++]=R}o=this.generateHuffmanTable(E.subarray(0,g)),a=this.generateHuffmanTable(E.subarray(g,_))}else throw new Error("Unknown block type in flate stream");e=this._buffer;let f=e?e.length:0,m=this._bufferLength;for(;;){let g=this.getCode(o);if(g<256){m+1>=f&&(e=this.ensureBuffer(m+1),f=e.length),e[m++]=g;continue}if(g===256){this._bufferLength=m;return}g-=257,g=FlateStream.lengthDecode[g];let p=g>>16;p>0&&(p=this.getBits(p)),t=(g&65535)+p,g=this.getCode(a),g=FlateStream.distDecode[g],p=g>>16,p>0&&(p=this.getBits(p));const y=(g&65535)+p;m+t>=f&&(e=this.ensureBuffer(m+t),f=e.length);for(let C=0;C<t;++C,++m)e[m]=e[m-y]}}getBits(e){const t=this._sourceStream;let s=this._codeSize,r=this._codeBuf,o;for(;s<e;){if((o=t.takeByte())===-1)throw new Error("Bad encoding in flate stream");r|=o<<s,s+=8}return o=r&(1<<e)-1,this._codeBuf=r>>e,this._codeSize=s-=e,o}getCode(e){const t=this._sourceStream,[s,r]=e;let o=this._codeSize,a=this._codeBuf,f;for(;o<r&&(f=t.takeByte())!==-1;)a|=f<<o,o+=8;const m=s[a&(1<<r)-1],g=m>>16,p=m&65535;if(g<1||o<g)throw new Error("Bad encoding in flate stream");return this._codeBuf=a>>g,this._codeSize=o-g,p}generateHuffmanTable(e){const t=e.length;let s=0,r;for(r=0;r<t;r++)e[r]>s&&(s=e[r]);const o=1<<s,a=new Int32Array(o);for(let f=1,m=0,g=2;f<=s;f++,m<<=1,g<<=1)for(let p=0;p<t;p++)if(e[p]===f){let y=0,C=m;for(r=0;r<f;r++)y=y<<1|C&1,C>>=1;for(r=y;r<o;r+=g)a[r]=f<<16|p;m++}return[a,s]}}class Stream{_bytes;_start;_end;_current;constructor(e,t=0,s){if(s&&s<0)throw new Error("Stream length can't be negative");this._bytes=e instanceof Uint8Array?e:new Uint8Array(e),this._start=t,this._current=t,this._end=t+s||e.length}get length(){return this._end-this._start}takeByte(){return this._current>=this._end?-1:this._bytes[this._current++]}takeBytes(e){const t=this._bytes,s=this._current,r=this._end;if(e){let o=s+e;return o>r&&(o=r),this._current=o,t.subarray(s,o)}else return t.subarray(s,r)}takeUint16(){const e=this.takeByte(),t=this.takeByte();return e===-1||t===-1?-1:(e<<8)+t}takeInt32(){const e=this.takeByte(),t=this.takeByte(),s=this.takeByte(),r=this.takeByte();return(e<<24)+(t<<16)+(s<<8)+r}peekByte(){const e=this.takeByte();return e!==-1&&this._current--,e}peekBytes(e){const t=this.takeBytes(e);return this._current-=t.length,t}getByte(e){return this._bytes[e]}getByteRange(e,t){return this._bytes.subarray(Math.max(e,0),Math.min(t,this._end))}skip(e){this._current+=e||1}reset(){this._current=this._start}}class FlateDecoder{static Decode(e,t=flatePredictors.NONE,s=1,r=1,o=8){const a=new Stream(e,0,e.length),m=new FlateStream(a).takeBytes(null);switch(t){case flatePredictors.NONE:return m;case flatePredictors.PNG_NONE:case flatePredictors.PNG_SUB:case flatePredictors.PNG_UP:case flatePredictors.PNG_AVERAGE:case flatePredictors.PNG_PAETH:case flatePredictors.PNG_OPTIMUM:return FlateDecoder.removePngFilter(m,s,r,o);case flatePredictors.TIFF:throw new Error("Unsupported filter predictor")}}static Encode(e,t=flatePredictors.PNG_UP,s=5,r=1,o=8){let a;switch(t){case flatePredictors.NONE:a=e;break;case flatePredictors.PNG_NONE:case flatePredictors.PNG_SUB:case flatePredictors.PNG_UP:case flatePredictors.PNG_AVERAGE:case flatePredictors.PNG_PAETH:case flatePredictors.PNG_OPTIMUM:a=FlateDecoder.applyPngFilter(e,t,s,r,o);break;case flatePredictors.TIFF:throw new Error("Unsupported filter predictor")}return deflate_1(a)}static removePngFilter(e,t,s,r){const o=Math.ceil(s*r/8),a=t*o,f=a+1;if(e.length%f)throw new Error(`Data length doesn't match filter columns: ${e.length} % ${f}`);const m=new Uint8Array(e.length/f*a),g=new Array(a).fill(0),p=new Array(a).fill(0),y=L=>L-o<0?0:p[L-o],C=L=>g[L],A=L=>L-o<0?0:g[L-o];let w=0,_=0,E=0,v=0,k=0,R=0;for(let L=0;L<e.length;L++)if(L%f===0){if(k=e[L],w=0,L)for(E=0;E<a;E++)g[E]=m[v+E];v=_}else{switch(p[w]=e[L],k){case 0:R=p[w];break;case 1:R=(p[w]+y(w))%256;break;case 2:R=(p[w]+C(w))%256;break;case 3:R=(p[w]+Math.floor((C(w)+y(w))/2))%256;break;case 4:R=(p[w]+this.paethPredictor(y(w),C(w),A(w)))%256;break}m[_++]=R,w++}return m}static applyPngFilter(e,t=12,s=5,r=1,o=8){let a;switch(t){case flatePredictors.PNG_NONE:a=0;break;case flatePredictors.PNG_SUB:a=1;break;case flatePredictors.PNG_UP:a=2;break;case flatePredictors.PNG_AVERAGE:a=3;break;case flatePredictors.PNG_PAETH:a=4;break;default:throw new Error("Invalid PNG filter type")}const f=Math.ceil(r*o/8),m=s*f,g=m+1,y=Math.ceil(e.length/m)*g,C=new Uint8Array(y),A=new Array(m).fill(0),w=new Array(m).fill(0),_=U=>U-f<0?0:w[U-f],E=U=>A[U],v=U=>U-f<0?0:A[U-f];let k=0,R=0,L=0,B=0,X=0;for(let U=0;U<y;U++)if(U%g===0){if(k=0,U)for(L=0;L<m;L++)A[L]=e[B+L];B=R,C[U]=a}else{switch(w[k]=e[R++]||0,a){case 0:X=w[k];break;case 1:X=(w[k]-_(k))%256;break;case 2:X=(w[k]-E(k))%256;break;case 3:X=(w[k]-Math.floor((E(k)+_(k))/2))%256;break;case 4:X=(w[k]-this.paethPredictor(_(k),E(k),v(k)))%256;break}C[U]=X,k++}return C}static paethPredictor(e,t,s){const r=e+t-s,o=Math.abs(r-e),a=Math.abs(r-t),f=Math.abs(r-s);return o<=a&&o<=f?e:a<=f?t:s}}class PdfStream extends PdfObject{Type;Length;Filter;DecodeParms;DL;_streamData;get streamData(){return this._streamData}set streamData(e){this.setStreamData(e),this._edited=!0}_decodedStreamData;get decodedStreamData(){return this._decodedStreamData||this.decodeStreamData(),this._decodedStreamData}get decodedStreamDataChars(){return new TextDecoder().decode(this.decodedStreamData)}constructor(e){super(),this.Type=e}async getStreamDataParserAsync(){return await PdfStream.getDataParserAsync(this.decodedStreamData)}toArray(e){const t=e?.ref&&e.streamCryptor?e.streamCryptor.encrypt(this.streamData,e.ref):this.streamData,s=new TextEncoder,r=[...keywordCodes.DICT_START];r.push(...s.encode("/Length "),...s.encode(" "+t.length)),this.Type&&r.push(...keywordCodes.TYPE,...s.encode(this.Type)),this.Filter&&r.push(...s.encode("/Filter "),...s.encode(this.Filter)),this.DecodeParms&&r.push(...s.encode("/DecodeParms "),...this.DecodeParms.toArray(e)),r.push(...keywordCodes.DICT_END,...keywordCodes.END_OF_LINE,...keywordCodes.STREAM_START,...keywordCodes.END_OF_LINE);for(let o=0;o<t.length;o++)r.push(t[o]);return r.push(...keywordCodes.END_OF_LINE,...keywordCodes.STREAM_END),new Uint8Array(r)}setTextStreamData(e){const s=new TextEncoder().encode(e);this.streamData=s}async parsePropsAsync(e){if(!e)throw new Error("Parse info is empty");const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;this._ref=e.cryptInfo?.ref,this._sourceBytes=await t.sliceCharCodesAsync(r,o);const a=await t.findSubarrayIndexAsync(keywordCodes.STREAM_END,{direction:!1,minIndex:r,maxIndex:o,closedOnly:!0});if(!a)throw new Error("Object is not a stream");const f=await t.findSubarrayIndexAsync(keywordCodes.STREAM_START,{direction:!1,minIndex:r,maxIndex:a.start-1,closedOnly:!0});if(!f)throw new Error("Stream start is out of the data bounds");const m=await t.getDictBoundsAtAsync(r);let g=await t.skipToNextNameAsync(m.contentStart,m.contentEnd);if(g===-1)throw new Error("Dict is empty (has no properties)");let p,y;for(;y=await t.parseNameAtAsync(g),y;)switch(g=y.end+1,p=y.value,p){case"/Type":const E=await t.parseNameAtAsync(g);if(E){if(this.Type&&this.Type!==E.value)throw new Error(`Ivalid dict type: '${E.value}' instead of '${this.Type}'`);g=E.end+1}else throw new Error("Can't parse /Type property value");break;case"/Length":case"/DL":g=await this.parseNumberPropAsync(p,t,g,!1);break;case"/Filter":const v=await t.getValueTypeAtAsync(g);if(v===valueTypes.NAME){const R=await t.parseNameAtAsync(g);if(R&&supportedFilters.has(R.value)){this.Filter=R.value,g=R.end+1;break}else throw new Error(`Unsupported /Filter property value: ${R.value}`)}else if(v===valueTypes.ARRAY){const R=await t.parseNameArrayAtAsync(g);if(R){const L=R.value;if(L.length===1&&supportedFilters.has(L[0])){this.Filter=L[0],g=R.end+1;break}else throw new Error(`Unsupported /Filter property value: ${L.toString()}`)}}throw new Error(`Unsupported /Filter property value type: ${v}`);case"/DecodeParms":const k=await t.getValueTypeAtAsync(g);if(k===valueTypes.DICTIONARY){const R=await t.getDictBoundsAtAsync(g);if(R){const L=await DecodeParamsDict.parseAsync({parser:t,bounds:R,cryptInfo:e.cryptInfo});if(L){this.DecodeParms=L.value,g=R.end+1;break}}throw new Error("Can't parse /DecodeParms property value")}else if(k===valueTypes.ARRAY){const R=await DecodeParamsDict.parseArrayAsync(t,g,e.cryptInfo);if(R){const L=R.value;if(L.length===1){this.DecodeParms=L[0],g=R.end+1;break}}throw new Error("Can't parse /DecodeParms property value")}throw new Error(`Unsupported /DecodeParms property value type: ${k}`);default:g=await t.skipToNextNameAsync(g,m.contentEnd);break}const C=await t.findNewLineIndexAsync(!0,f.end+1),A=await t.findNewLineIndexAsync(!1,a.start-1),w=await t.sliceCharCodesAsync(C,A),_=e.cryptInfo?.ref&&e.cryptInfo.streamCryptor?e.cryptInfo.streamCryptor.decrypt(w,e.cryptInfo.ref):w;this._streamData=_}setStreamData(e){if(!e?.length)throw new Error("Can't set emprty stream data");let t;if(this.DecodeParms)t=this.DecodeParms;else{let r,o=10;for(;;){if(e.length%o===0){r=o;break}o--}t=new DecodeParamsDict,t.setIntProp("/Predictor",flatePredictors.PNG_UP),t.setIntProp("/Columns",r),this.DecodeParms=t}const s=FlateDecoder.Encode(e,t?.getIntProp("/Predictor")||flatePredictors.NONE,t?.getIntProp("/Columns")||1,t?.getIntProp("/Colors")||1,t?.getIntProp("/BitsPerComponent")||8);this._streamData=s,this.Length=s.length,this.DL=e.length,this._decodedStreamData=e}decodeStreamData(){let e;switch(this.Filter){case streamFilters.FLATE:if(this.DecodeParms){const t=this.DecodeParms;e=FlateDecoder.Decode(this._streamData,t.getIntProp("/Predictor")||flatePredictors.NONE,t.getIntProp("/Columns")||1,t.getIntProp("/Colors")||1,t.getIntProp("/BitsPerComponent")||8)}else e=FlateDecoder.Decode(this._streamData);break;default:e=new Uint8Array(this._streamData);break}this._decodedStreamData=e}}class TrailerStream extends PdfStream{Size;Prev;Root;Encrypt;Info;ID;Index;W;constructor(){super(streamTypes.XREF)}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new TrailerStream;return await t.parsePropsAsync(e),{value:t,start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.Size&&r.push(...s.encode("/Size "),...s.encode(" "+this.Size)),this.Prev&&r.push(...s.encode("/Prev "),...s.encode(" "+this.Prev)),this.Root&&r.push(...s.encode("/Root "),...this.Root.toArray(e)),this.Encrypt&&r.push(...s.encode("/Encrypt "),...this.Encrypt.toArray(e)),this.Info&&r.push(...s.encode("/Info "),...this.Info.toArray(e)),this.ID&&r.push(...s.encode("/ID "),...this.encodeSerializableArray(this.ID,e)),this.Index&&r.push(...s.encode("/Index "),...this.encodePrimitiveArray(this.Index,s)),this.W&&r.push(...s.encode("/W "),...this.encodePrimitiveArray(this.W,s));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=await t.getDictBoundsAtAsync(r);let a=await t.skipToNextNameAsync(o.contentStart,o.contentEnd),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/Size":case"/Prev":a=await this.parseNumberPropAsync(f,t,a,!1);break;case"/Root":case"/Info":a=await this.parseRefPropAsync(f,t,a);break;case"/Encrypt":const g=await t.getValueTypeAtAsync(a);if(g===valueTypes.REF){const C=await ObjectId.parseRefAsync(t,a);if(C){this.Encrypt=C.value,a=C.end+1;break}else throw new Error("Can't parse /Encrypt property value")}throw new Error(`Unsupported /Encrypt property value type: ${g}`);case"/ID":const p=await HexString.parseArrayAsync(t,a);if(p&&p.value[0]&&p.value[1]){this.ID=[p.value[0],p.value[1]],a=p.end+1;break}const y=await LiteralString.parseArrayAsync(t,a);if(y&&y.value[0]&&y.value[1]){this.ID=[HexString.fromHexBytes(y.value[0].bytes),HexString.fromHexBytes(y.value[1].bytes)],a=y.end+1;break}throw new Error("Can't parse /ID property value");case"/Index":case"/W":a=await this.parseNumberArrayPropAsync(f,t,a,!1);break;default:a=await t.skipToNextNameAsync(a,o.contentEnd);break}if(!this.W||!this.Size||!this.Root||this.Encrypt&&!this.ID)throw new Error("Not all required properties parsed");this.Index?.length||(this.Index=[0,this.Size])}}class XRef{_type;get type(){return this._type}_offset;get offset(){return this._offset}constructor(e){this._type=e}}class XRefStream extends XRef{_trailerStream;get prev(){return this._trailerStream?.Prev}get size(){return this._trailerStream?.Size}get root(){return this._trailerStream?.Root}get info(){return this._trailerStream?.Info}get encrypt(){return this._trailerStream?.Encrypt}get id(){return this._trailerStream?.ID}constructor(e,t){super(xRefTypes.STREAM),this._trailerStream=e,this._offset=t}static createFrom(e,t,s){if(!t?.length||!e)return null;const r=Math.max(...t.map(a=>a.id))+2,o=Math.max(r,e.size);return XRefStream.create(t,o,s,e.root,e.offset,e.info,e.encrypt,e.id)}static create(e,t,s,r,o,a,f,m){if(!e?.length||!t||!s||!r)return null;const g=new TrailerStream;g.Size=t,g.Root=r,g.Prev=o,g.Info=a,g.Encrypt=f,g.ID=m;const p=[1,4,2],y=p[0]+p[1]+p[2],C=new DecodeParamsDict;C.setIntProp("/Predictor",flatePredictors.PNG_UP),C.setIntProp("/Columns",y),C.setIntProp("/Colors",1),C.setIntProp("/BitsPerComponent",8);const A=XRefEntry.toStreamBytes(e,p),w=new XRefStream(g,s);return w._trailerStream.Filter=streamFilters.FLATE,w._trailerStream.DecodeParms=C,w._trailerStream.W=p,w._trailerStream.Index=A.index,w._trailerStream.streamData=A.bytes,w}static async parseAsync(e,t){if(!e)return null;const s=await TrailerStream.parseAsync(e);return s?{value:new XRefStream(s.value,t),start:null,end:null}:null}createUpdate(e,t){return XRefStream.createFrom(this,e,t)}getEntries(){return this._trailerStream?XRefEntry.fromStreamBytes(this._trailerStream.decodedStreamData,this._trailerStream.W,this._trailerStream.Index):[]}toArray(e){return this._trailerStream.toArray(e)}}class TextStream extends PdfStream{constructor(e=null){super(e)}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new TextStream;return await t.parsePropsAsync(e),{value:t,start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}getText(){return null}toArray(e){return super.toArray(e)}async parsePropsAsync(e){await super.parsePropsAsync(e)}}class IndexedColorSpaceArray{baseColorSpace;highestValue;lookupArray;componentsNumber;constructor(e,t,s){switch(e){case colorSpaces.GRAYSCALE:this.componentsNumber=1;break;case colorSpaces.RGB:this.componentsNumber=3;break;case colorSpaces.CMYK:this.componentsNumber=4;break;default:throw new Error(`Unsupported base color space for indexed color space: ${e}`)}if(this.baseColorSpace=e,s.length!==this.componentsNumber*(t+1))throw new Error(`Invalid lookup array length: ${s.length}`);this.highestValue=t,this.lookupArray=s}static async parseAsync(e,t=!0){const{parser:s,bounds:r,cryptInfo:o}=e;let a;t&&(a=await s.findNonSpaceIndexAsync(!0,r.start));const f=a;if(a<0||a>s.maxIndex||!await s.isCodeAtAsync(f,codes.L_BRACKET))return console.log("Color space array start not found"),null;a++;const m=await s.parseNameAtAsync(a);if(!m||m.value!=="/Indexed")return console.log("Array is not representing an indexed color space"),null;a=m.end+1;const g=await s.parseNameAtAsync(a);if(!g)return console.log("Can't parse base color space name of the indexed color space"),null;a=g.end+2;const p=await s.parseNumberAtAsync(a);if(!p||isNaN(p.value))return console.log("Can't parse the highest value of the indexed color space"),null;a=p.end+1;let y;const C=await s.getValueTypeAtAsync(a);if(C===valueTypes.REF)try{const A=await ObjectId.parseRefAsync(s,a),w=await e.parseInfoGetterAsync(A.value.id);y=(await TextStream.parseAsync(w)).value.decodedStreamData,a=A.end+1}catch(A){throw new Error(`Can't parse indexed color array lookup ref: ${A.message}`)}else if(C===valueTypes.STRING_HEX){const A=await HexString.parseAsync(s,a,o);if(A)y=A.value.hex,a=A.end+1;else throw new Error("Can't parse indexed color array lookup hex string")}try{return{value:new IndexedColorSpaceArray(g.value,p.value,y),start:f,end:a-1}}catch(A){return console.log(A.message),null}}toArray(e){const t=new TextEncoder,s=[];return s.push(codes.L_BRACKET,...t.encode("/Indexed "),...t.encode(this.baseColorSpace+" "),...t.encode(this.highestValue+" "),...HexString.fromHexBytes(this.lookupArray).toArray(e),codes.R_BRACKET),new Uint8Array(s)}getColor(e){switch(this.baseColorSpace){case colorSpaces.GRAYSCALE:const t=this.lookupArray[e];return[t,t,t];case colorSpaces.RGB:return[this.lookupArray[e*3],this.lookupArray[e*3+1],this.lookupArray[e*3+2]];case colorSpaces.CMYK:const s=this.lookupArray[e*4]/255,r=this.lookupArray[e*4+1]/255,o=this.lookupArray[e*4+2]/255,a=this.lookupArray[e*4+3]/255;return[255*(1-s)*(1-a),255*(1-r)*(1-a),255*(1-o)*(1-a)]}}}class ImageStream extends PdfStream{Subtype="/Image";Width;Height;ColorSpace;BitsPerComponent;ImageMask=!1;Mask;Decode;Interpolate=!1;SMask;SMaskInData=0;Matte;StructParent;Metadata;_sMask;get sMask(){return this._sMask}set sMask(e){this._sMask=e}_indexedColorSpace;_imageUrl;constructor(){super(streamTypes.FORM_XOBJECT)}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new ImageStream;return await t.parsePropsAsync(e),{value:t,start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.Subtype&&r.push(...s.encode("/Subtype "),...s.encode(this.Subtype)),this.Width&&r.push(...s.encode("/Width "),...s.encode(" "+this.Width)),this.Height&&r.push(...s.encode("/Height "),...s.encode(" "+this.Height)),this.ColorSpace&&(this._indexedColorSpace?r.push(...s.encode("/ColorSpace "),...this._indexedColorSpace.toArray(e)):r.push(...s.encode("/ColorSpace "),...s.encode(this.ColorSpace))),this.BitsPerComponent&&r.push(...s.encode("/BitsPerComponent "),...s.encode(" "+this.BitsPerComponent)),r.push(...s.encode("/ImageMask "),...s.encode(" "+!!this.ImageMask)),this.Mask&&r.push(...s.encode("/Mask "),...this.encodePrimitiveArray(this.Mask,s)),this.Decode&&r.push(...s.encode("/Decode "),...this.encodePrimitiveArray(this.Decode,s)),r.push(...s.encode("/Interpolate "),...s.encode(" "+!!this.Interpolate)),this.SMask&&r.push(...s.encode("/SMask "),...this.SMask.toArray(e)),this.SMaskInData&&r.push(...s.encode("/SMaskInData "),...s.encode(" "+this.SMaskInData)),this.Matte&&r.push(...s.encode("/Matte "),...this.encodePrimitiveArray(this.Matte,s)),this.StructParent&&r.push(...s.encode("/StructParent "),...s.encode(" "+this.StructParent)),this.Metadata&&r.push(...s.encode("/Metadata "),...this.Metadata.toArray(e));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}async getImageUrlAsync(){if(this._imageUrl&&URL.revokeObjectURL(this._imageUrl),this.Filter===streamFilters.DCT||this.Filter===streamFilters.JBIG2||this.Filter===streamFilters.JPX){const e=new Blob([this.decodedStreamData],{type:"application/octet-binary"}),t=URL.createObjectURL(e);return this._imageUrl=t,t}if(this.Filter===streamFilters.FLATE){const e=this.Width*this.Height;let t;if(this.sMask){if(t=this.sMask.decodedStreamData,t.length!==e)throw new Error(`Invalid alpha mask data length: ${t.length} (must be ${e})`)}else t=new Uint8Array(e).fill(255);const s=new Uint8ClampedArray(e*4),r=this.getRgbColors();let o,a;for(let p=0;p<e;p++)o=p*4,a=p*3,s[o]=r[a],s[o+1]=r[a+1],s[o+2]=r[a+2],s[o+3]=t[p];const f=new ImageData(s,this.Width,this.Height),g=await new Promise((p,y)=>{const C=document.createElement("canvas");C.width=this.Width,C.height=this.Height,C.getContext("2d").putImageData(f,0,0),C.toBlob(A=>{const w=URL.createObjectURL(A);p(w)})});return this._imageUrl=g,g}throw new Error(`Unsupported image filter type: ${this.Filter}`)}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=await t.getDictBoundsAtAsync(r);let a=await t.skipToNextNameAsync(o.contentStart,o.contentEnd),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/Subtype":const g=await t.parseNameAtAsync(a);if(g){if(this.Subtype&&this.Subtype!==g.value)throw new Error(`Invalid dict subtype: '${g.value}' instead of '${this.Subtype}'`);a=g.end+1}else throw new Error("Can't parse /Subtype property value");break;case"/Width":case"/Height":case"/BitsPerComponent":case"/SMaskInData":case"/StructParent":a=await this.parseNumberPropAsync(f,t,a,!1);break;case"/Decode":a=await this.parseNumberArrayPropAsync(f,t,a,!1);break;case"/Matte":a=await this.parseNumberArrayPropAsync(f,t,a,!0);break;case"/Interpolate":a=await this.parseBoolPropAsync(f,t,a);break;case"/SMask":case"/Metadata":a=await this.parseRefPropAsync(f,t,a);break;case"/ColorSpace":const p=await t.getValueTypeAtAsync(a);if(p===valueTypes.NAME){const A=await t.parseNameAtAsync(a);if(A){this.ColorSpace=A.value,a=A.end+1;break}throw new Error("Can't parse /ColorSpace name")}else if(p===valueTypes.ARRAY){const A=await t.getArrayBoundsAtAsync(a);if(A){const w=await IndexedColorSpaceArray.parseAsync({parser:t,bounds:A,cryptInfo:e.cryptInfo,parseInfoGetterAsync:e.parseInfoGetterAsync});if(w){this.ColorSpace=colorSpaces.SPECIAL_INDEXED,this._indexedColorSpace=w.value,a=A.end+1;break}throw new Error("Can't parse /ColorSpace object:"+t.sliceCharsAsync(A.start,A.end))}throw new Error("Can't parse /ColorSpace value array")}else if(p===valueTypes.REF){const A=await ObjectId.parseRefAsync(t,a);if(A){const w=await e.parseInfoGetterAsync(A.value.id);if(w){const _=await IndexedColorSpaceArray.parseAsync(w);if(_){this.ColorSpace=colorSpaces.SPECIAL_INDEXED,this._indexedColorSpace=_.value,a=A.end+1;break}throw new Error("Can't parse /ColorSpace object:"+await w.parser.sliceCharsAsync(w.bounds.start,w.bounds.end))}}throw new Error("Can't parse /ColorSpace ref")}throw new Error(`Unsupported /ColorSpace property value type: ${p}`);case"/ImageMask":const y=await t.parseBoolAtAsync(a,!1);if(y)this.ImageMask=y.value,a=y.end+1,this.ImageMask&&(this.BitsPerComponent=1);else throw new Error("Can't parse /ImageMask property value");break;case"/Mask":const C=await t.getValueTypeAtAsync(a);if(C===valueTypes.REF){const A=await ObjectId.parseRefAsync(t,a);if(!A)throw new Error("Can't parse /Mask value reference: failed to parse ref");const w=await e.parseInfoGetterAsync(A.value.id);if(!w)throw new Error("Can't parse /Mask value reference: failed to get image parse info");const _=await ImageStream.parseAsync(w);if(!_)throw new Error("Can't parse /Mask value reference: failed to parse image stream");const E=await _.value.getStreamDataParserAsync(),v=[];let k=0,R;for(;k<=E.maxIndex&&(R=await E.parseNumberAtAsync(k,!0,!0),!!R);)v.push(R.value),k=R.end+1;if(!v.length)throw new Error("Can't parse /Mask value reference: failed to parse decoded image data");this.Mask=v,a=A.end+1;break}else if(C===valueTypes.ARRAY){const A=await t.parseNumberArrayAtAsync(a,!1);if(A){this.Mask=A.value,a=A.end+1;break}throw new Error("Can't parse /Mask property value")}throw new Error(`Unsupported /Mask property value type: ${C}`);case"/OC":case"/Intent":case"/Alternates":case"/ID":case"/OPI":default:a=await t.skipToNextNameAsync(a,o.contentEnd);break}if(!this.Width&&!this.Height)throw new Error("Not all required properties parsed");if(this.ImageMask&&(this.BitsPerComponent!==1||this.ColorSpace))throw new Error("Mutually exclusive properties found");if(!this.Decode&&!(this.Filter===streamFilters.JPX&&!this.ImageMask))switch(this.ColorSpace){case colorSpaces.GRAYSCALE:this.Decode=[0,1];break;case colorSpaces.RGB:this.Decode=[0,1,0,1,0,1];break;case colorSpaces.CMYK:this.Decode=[0,1,0,1,0,1,0,1];break;case colorSpaces.SPECIAL_INDEXED:this.Decode=[0,Math.pow(2,this.BitsPerComponent||1)-1];break;default:this.Decode=[0,1];break}if(this.DecodeParms||(this.DecodeParms=new DecodeParamsDict),this.DecodeParms.getIntProp("/BitsPerComponent")||this.DecodeParms.setIntProp("/BitsPerComponent",this.BitsPerComponent),this.DecodeParms.getIntProp("/Columns")||this.DecodeParms.setIntProp("/Columns",this.Width),!this.DecodeParms.getIntProp("/Colors"))switch(this.ColorSpace){case colorSpaces.GRAYSCALE:case colorSpaces.SPECIAL_INDEXED:this.DecodeParms.setIntProp("/Colors",1);break;case colorSpaces.RGB:this.DecodeParms.setIntProp("/Colors",3);break;case colorSpaces.CMYK:this.DecodeParms.setIntProp("/Colors",4);break;default:this.DecodeParms.setIntProp("/Colors",1);break}if(this.SMask){const g=await e.parseInfoGetterAsync(this.SMask.id);if(!g)throw new Error(`Can't get parse info for ref: ${this.SMask.id} ${this.sMask.generation} R`);const p=await ImageStream.parseAsync(g);if(!p)throw new Error(`Can't parse SMask: ${this.SMask.id} ${this.sMask.generation} R`);this._sMask=p.value}}getRgbColor(e){const t=this.decodedStreamData;switch(this.ColorSpace){case colorSpaces.GRAYSCALE:const s=t[e];return[s,s,s];case colorSpaces.RGB:return[t[e*3],t[e*3+1],t[e*3+2]];case colorSpaces.CMYK:const r=t[e*4]/255,o=t[e*4+1]/255,a=t[e*4+2]/255,f=t[e*4+3]/255;return[255*(1-r)*(1-f),255*(1-o)*(1-f),255*(1-a)*(1-f)];case colorSpaces.SPECIAL_INDEXED:return this._indexedColorSpace?.getColor(e)||[0,0,0]}}getRgbColors(){const e=this.decodedStreamData,t=this.Width*this.Height,s=t*3,r=new Uint8ClampedArray(s);let o,a,f;switch(this.ColorSpace){case colorSpaces.GRAYSCALE:let m;for(o=0;o<t;o++)m=e[o],a=o*3,r[a]=m,r[a+1]=m,r[a+2]=m;break;case colorSpaces.RGB:for(o=0;o<s;o++)r[o]=e[o];break;case colorSpaces.CMYK:let g,p,y,C;for(o=0;o<t;o++)a=o*3,f=o*4,g=e[f]/255,p=e[f+1]/255,y=e[f+2]/255,C=e[f+3]/255,r[a]=255*(1-g)*(1-C),r[a+1]=255*(1-p)*(1-C),r[a+2]=255*(1-y)*(1-C);break;case colorSpaces.SPECIAL_INDEXED:let A,w,_;for(o=0;o<t;o++)[A,w,_]=this._indexedColorSpace?.getColor(o)||[0,0,0],a=o*3,r[a]=A,r[a+1]=w,r[a+2]=_;break}return r}}class ObjectMapDict extends PdfDict{_objectIdMap=new Map;_dictParserMap=new Map;constructor(){super(null)}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new ObjectMapDict;return await t.parsePropsAsync(e),{value:t,start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}getObjectId(e){return this._objectIdMap.get(e)}*getObjectIds(){for(const e of this._objectIdMap)yield e}getDictParser(e){return this._dictParserMap.get(e)}*getDictParsers(){for(const e of this._dictParserMap)yield e}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this._objectIdMap.forEach((a,f)=>{r.push(...s.encode(f+" "),...a.toArray(e))});const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){default:const g=await t.getValueTypeAtAsync(a);if(g===valueTypes.REF){const p=await ObjectId.parseRefAsync(t,a);if(p){this._objectIdMap.set(f,p.value),a=p.end+1;break}}else if(g===valueTypes.DICTIONARY){const p=await t.getDictBoundsAtAsync(a);if(p){const y={parser:await PdfDict.getDataParserAsync(await t.sliceCharCodesAsync(p.start,p.end)),bounds:{start:0,end:p.end-p.start,contentStart:p.contentStart-p.start,contentEnd:p.contentEnd-p.start},cryptInfo:e.cryptInfo};this._dictParserMap.set(f,y),a=p.end+1;break}}a=await t.skipToNextNameAsync(a,o-1);break}}}class UnicodeCmapStream extends PdfStream{_codeRanges=[];_map=new Map;constructor(e=null){super(e)}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new UnicodeCmapStream;return await t.parsePropsAsync(e),{value:t,start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}toArray(e){return super.toArray(e)}hexBytesToUtfString(e){let t="";e:for(let s=0;s<e.length;s++)for(let r=1;s+r<=e.length&&r<=4;r++){const o=e.subarray(s,s+r);if(this.isInsideAnyRange(o)){t+=this._map.get(ByteUtils.parseIntFromBytes(o))||"";continue e}}return t}isInsideAnyRange(e){e:for(const t of this._codeRanges)if(e.length===t.length){for(let s=0;s<t.length;s++)if(e[s]<t.start[s]||e[s]>t.end[s])continue e;return!0}return!1}async parseCodeRangesAsync(e){let t=0;const s=(await e.findSubarrayIndexAsync(keywordCodes.CMAP_BEGIN_CODE_RANGE,{closedOnly:!0}))?.end;if(!s)return;t=s+1;const r=(await e.findSubarrayIndexAsync(keywordCodes.CMAP_END_CODE_RANGE,{closedOnly:!0,minIndex:t}))?.start;for(;t<r-1;){const o=await HexString.parseAsync(e,t);t=o.end+1;const a=await HexString.parseAsync(e,t);t=a.end+1,this._codeRanges.push({length:o.value.hex.length,start:o.value.hex,end:a.value.hex})}}async parseCharMapAsync(e,t){let s=0;for(;;){const r=(await e.findSubarrayIndexAsync(keywordCodes.CMAP_BEGIN_CHAR,{closedOnly:!0,minIndex:s}))?.end;if(!r)break;s=r+1;const o=(await e.findSubarrayIndexAsync(keywordCodes.CMAP_END_CHAR,{closedOnly:!0,minIndex:s}))?.start;for(;s<o-1;){const a=await HexString.parseAsync(e,s);s=a.end+1;const f=await HexString.parseAsync(e,s);s=f.end+1,this._map.set(ByteUtils.parseIntFromBytes(a.value.hex),t.decode(f.value.hex))}}}async parseCharRangesMapAsync(e,t){let s=0;for(;;){const r=(await e.findSubarrayIndexAsync(keywordCodes.CMAP_BEGIN_RANGE,{closedOnly:!0,minIndex:s}))?.end;if(!r)break;s=r+1;const o=(await e.findSubarrayIndexAsync(keywordCodes.CMAP_END_RANGE,{closedOnly:!0,minIndex:s}))?.start;for(;s<o-1;){const a=await HexString.parseAsync(e,s);s=a.end+1;const f=await HexString.parseAsync(e,s);s=f.end+1;let m=ByteUtils.parseIntFromBytes(a.value.hex);if(await e.getValueTypeAtAsync(s,!0)===valueTypes.ARRAY){const p=await HexString.parseArrayAsync(e,s);s=p.end+1;for(const y of p.value)this._map.set(m++,t.decode(y.hex))}else{const p=await HexString.parseAsync(e,s);s=p.end+1;let y=ByteUtils.parseIntFromBytes(p.value.hex);for(;m<=ByteUtils.parseIntFromBytes(f.value.hex);){const C=(y++).toString(16),w=(C.length%2?"0":"")+C;this._map.set(m++,t.decode(ByteUtils.hexStringToBytes(w)))}}}}}async fillMapAsync(){this._codeRanges.length=0,this._map.clear();const e=await this.getStreamDataParserAsync(),t=new TextDecoder("utf-16be");await this.parseCodeRangesAsync(e),await this.parseCharMapAsync(e,t),await this.parseCharRangesMapAsync(e,t)}async parsePropsAsync(e){await super.parsePropsAsync(e),await this.fillMapAsync()}}const pdfCharCodesByName={A:{name:"A",char:"A",stdCode:65,macCode:65,winCode:65,pdfCode:65,utfCode:65},AE:{name:"AE",char:"Æ",stdCode:225,macCode:174,winCode:198,pdfCode:198,utfCode:198},Aacute:{name:"Aacute",char:"Á",stdCode:null,macCode:231,winCode:193,pdfCode:193,utfCode:193},Acircumflex:{name:"Acircumflex",char:"Â",stdCode:null,macCode:229,winCode:194,pdfCode:194,utfCode:194},Adieresis:{name:"Adieresis",char:"Ä",stdCode:null,macCode:128,winCode:196,pdfCode:196,utfCode:196},Agrave:{name:"Agrave",char:"À",stdCode:null,macCode:203,winCode:192,pdfCode:192,utfCode:192},Aring:{name:"Aring",char:"Å",stdCode:null,macCode:129,winCode:197,pdfCode:197,utfCode:197},Atilde:{name:"Atilde",char:"Ã",stdCode:null,macCode:204,winCode:195,pdfCode:195,utfCode:195},B:{name:"B",char:"B",stdCode:66,macCode:66,winCode:66,pdfCode:66,utfCode:66},C:{name:"C",char:"C",stdCode:67,macCode:67,winCode:67,pdfCode:67,utfCode:67},Ccedilla:{name:"Ccedilla",char:"Ç",stdCode:null,macCode:130,winCode:199,pdfCode:199,utfCode:199},D:{name:"D",char:"D",stdCode:68,macCode:68,winCode:68,pdfCode:68,utfCode:68},E:{name:"E",char:"E",stdCode:69,macCode:69,winCode:69,pdfCode:69,utfCode:69},Eacute:{name:"Eacute",char:"É",stdCode:null,macCode:131,winCode:201,pdfCode:201,utfCode:201},Ecircumflex:{name:"Ecircumflex",char:"Ê",stdCode:null,macCode:230,winCode:202,pdfCode:202,utfCode:202},Edieresis:{name:"Edieresis",char:"Ë",stdCode:null,macCode:232,winCode:203,pdfCode:203,utfCode:203},Egrave:{name:"Egrave",char:"È",stdCode:null,macCode:233,winCode:200,pdfCode:200,utfCode:200},Eth:{name:"Eth",char:"Ð",stdCode:null,macCode:null,winCode:208,pdfCode:208,utfCode:208},Euro:{name:"Euro",char:"€",stdCode:null,macCode:null,winCode:128,pdfCode:160,utfCode:8364},F:{name:"F",char:"F",stdCode:70,macCode:70,winCode:70,pdfCode:70,utfCode:70},G:{name:"G",char:"G",stdCode:71,macCode:71,winCode:71,pdfCode:71,utfCode:71},H:{name:"H",char:"H",stdCode:72,macCode:72,winCode:72,pdfCode:72,utfCode:72},I:{name:"I",char:"I",stdCode:73,macCode:73,winCode:73,pdfCode:73,utfCode:73},Iacute:{name:"Iacute",char:"Í",stdCode:null,macCode:234,winCode:205,pdfCode:205,utfCode:205},Icircumflex:{name:"Icircumflex",char:"Î",stdCode:null,macCode:235,winCode:206,pdfCode:206,utfCode:206},Idieresis:{name:"Idieresis",char:"Ï",stdCode:null,macCode:236,winCode:207,pdfCode:207,utfCode:207},Igrave:{name:"Igrave",char:"Ì",stdCode:null,macCode:237,winCode:204,pdfCode:204,utfCode:204},J:{name:"J",char:"J",stdCode:74,macCode:74,winCode:74,pdfCode:74,utfCode:74},K:{name:"K",char:"K",stdCode:75,macCode:75,winCode:75,pdfCode:75,utfCode:75},L:{name:"L",char:"L",stdCode:76,macCode:76,winCode:76,pdfCode:76,utfCode:76},Lslash:{name:"Lslash",char:"Ł",stdCode:232,macCode:null,winCode:null,pdfCode:149,utfCode:321},M:{name:"M",char:"M",stdCode:77,macCode:77,winCode:77,pdfCode:77,utfCode:77},N:{name:"N",char:"N",stdCode:78,macCode:78,winCode:78,pdfCode:78,utfCode:78},Ntilde:{name:"Ntilde",char:"Ñ",stdCode:null,macCode:132,winCode:209,pdfCode:209,utfCode:209},O:{name:"O",char:"O",stdCode:79,macCode:79,winCode:79,pdfCode:79,utfCode:79},OE:{name:"OE",char:"OE",stdCode:234,macCode:206,winCode:140,pdfCode:150,utfCode:338},Oacute:{name:"Oacute",char:"Ó",stdCode:null,macCode:238,winCode:211,pdfCode:211,utfCode:211},Ocircumflex:{name:"Ocircumflex",char:"Ô",stdCode:null,macCode:239,winCode:212,pdfCode:212,utfCode:212},Odieresis:{name:"Odieresis",char:"Ö",stdCode:null,macCode:133,winCode:214,pdfCode:214,utfCode:214},Ograve:{name:"Ograve",char:"Ò",stdCode:null,macCode:241,winCode:210,pdfCode:210,utfCode:210},Oslash:{name:"Oslash",char:"Ø",stdCode:233,macCode:175,winCode:216,pdfCode:216,utfCode:216},Otilde:{name:"Otilde",char:"Õ",stdCode:null,macCode:205,winCode:213,pdfCode:213,utfCode:213},P:{name:"P",char:"P",stdCode:80,macCode:80,winCode:80,pdfCode:80,utfCode:80},Q:{name:"Q",char:"Q",stdCode:81,macCode:81,winCode:81,pdfCode:81,utfCode:81},R:{name:"R",char:"R",stdCode:82,macCode:82,winCode:82,pdfCode:82,utfCode:82},S:{name:"S",char:"S",stdCode:83,macCode:83,winCode:83,pdfCode:83,utfCode:83},Scaron:{name:"Scaron",char:"Š",stdCode:null,macCode:null,winCode:138,pdfCode:151,utfCode:352},T:{name:"T",char:"T",stdCode:84,macCode:84,winCode:84,pdfCode:84,utfCode:84},Thorn:{name:"Thorn",char:"Þ",stdCode:null,macCode:null,winCode:222,pdfCode:222,utfCode:222},U:{name:"U",char:"U",stdCode:85,macCode:85,winCode:85,pdfCode:85,utfCode:85},Uacute:{name:"Uacute",char:"Ú",stdCode:null,macCode:242,winCode:218,pdfCode:218,utfCode:218},Ucircumflex:{name:"Ucircumflex",char:"Û",stdCode:null,macCode:243,winCode:219,pdfCode:219,utfCode:219},Udieresis:{name:"Udieresis",char:"Ü",stdCode:null,macCode:134,winCode:220,pdfCode:220,utfCode:220},Ugrave:{name:"Ugrave",char:"Ù",stdCode:null,macCode:244,winCode:217,pdfCode:217,utfCode:217},V:{name:"V",char:"V",stdCode:86,macCode:86,winCode:86,pdfCode:86,utfCode:86},W:{name:"W",char:"W",stdCode:87,macCode:87,winCode:87,pdfCode:87,utfCode:87},X:{name:"X",char:"X",stdCode:88,macCode:88,winCode:88,pdfCode:88,utfCode:88},Y:{name:"Y",char:"Y",stdCode:89,macCode:89,winCode:89,pdfCode:89,utfCode:89},Yacute:{name:"Yacute",char:"Ý",stdCode:null,macCode:null,winCode:221,pdfCode:221,utfCode:221},Ydieresis:{name:"Ydieresis",char:"Ÿ",stdCode:null,macCode:217,winCode:159,pdfCode:152,utfCode:376},Z:{name:"Z",char:"Z",stdCode:90,macCode:90,winCode:90,pdfCode:90,utfCode:90},Zcaron:{name:"Zcaron",char:"Ž",stdCode:null,macCode:null,winCode:142,pdfCode:153,utfCode:381},a:{name:"a",char:"a",stdCode:97,macCode:97,winCode:97,pdfCode:97,utfCode:97},aacute:{name:"aacute",char:"á",stdCode:null,macCode:135,winCode:225,pdfCode:225,utfCode:225},acircumflex:{name:"acircumflex",char:"â",stdCode:null,macCode:137,winCode:226,pdfCode:226,utfCode:226},acute:{name:"acute",char:"´",stdCode:194,macCode:171,winCode:180,pdfCode:180,utfCode:180},adieresis:{name:"adieresis",char:"ä",stdCode:null,macCode:138,winCode:228,pdfCode:228,utfCode:228},ae:{name:"ae",char:"æ",stdCode:241,macCode:190,winCode:230,pdfCode:230,utfCode:230},agrave:{name:"agrave",char:"à",stdCode:null,macCode:136,winCode:224,pdfCode:224,utfCode:224},ampersand:{name:"ampersand",char:"&",stdCode:38,macCode:38,winCode:38,pdfCode:38,utfCode:38},aring:{name:"aring",char:"å",stdCode:null,macCode:140,winCode:229,pdfCode:229,utfCode:229},asciicircum:{name:"asciicircum",char:"^",stdCode:94,macCode:94,winCode:94,pdfCode:94,utfCode:94},asciitilde:{name:"asciitilde",char:"~",stdCode:126,macCode:126,winCode:126,pdfCode:126,utfCode:126},asterisk:{name:"asterisk",char:"*",stdCode:42,macCode:42,winCode:42,pdfCode:42,utfCode:42},at:{name:"at",char:"@",stdCode:64,macCode:64,winCode:64,pdfCode:64,utfCode:64},atilde:{name:"atilde",char:"ã",stdCode:null,macCode:139,winCode:227,pdfCode:227,utfCode:227},b:{name:"b",char:"b",stdCode:98,macCode:98,winCode:98,pdfCode:98,utfCode:98},backslash:{name:"backslash",char:'"',stdCode:92,macCode:92,winCode:92,pdfCode:92,utfCode:92},bar:{name:"bar",char:"|",stdCode:124,macCode:124,winCode:124,pdfCode:124,utfCode:124},braceleft:{name:"braceleft",char:"{",stdCode:123,macCode:123,winCode:123,pdfCode:123,utfCode:123},braceright:{name:"braceright",char:"}",stdCode:125,macCode:125,winCode:125,pdfCode:125,utfCode:125},bracketleft:{name:"bracketleft",char:"[",stdCode:91,macCode:91,winCode:91,pdfCode:91,utfCode:91},bracketright:{name:"bracketright",char:"]",stdCode:93,macCode:93,winCode:93,pdfCode:93,utfCode:93},breve:{name:"breve",char:"˘",stdCode:198,macCode:249,winCode:null,pdfCode:24,utfCode:728},brokenbar:{name:"brokenbar",char:"¦",stdCode:null,macCode:null,winCode:166,pdfCode:166,utfCode:166},bullet:{name:"bullet",char:"•",stdCode:183,macCode:165,winCode:149,pdfCode:128,utfCode:8226},c:{name:"c",char:"c",stdCode:99,macCode:99,winCode:99,pdfCode:99,utfCode:99},caron:{name:"caron",char:"ˇ",stdCode:207,macCode:255,winCode:null,pdfCode:25,utfCode:711},ccedilla:{name:"ccedilla",char:"ç",stdCode:null,macCode:141,winCode:231,pdfCode:231,utfCode:231},cedilla:{name:"cedilla",char:"¸",stdCode:203,macCode:252,winCode:184,pdfCode:184,utfCode:184},cent:{name:"cent",char:"¢",stdCode:162,macCode:162,winCode:162,pdfCode:162,utfCode:162},circumflex:{name:"circumflex",char:"ˆ",stdCode:195,macCode:246,winCode:136,pdfCode:26,utfCode:710},colon:{name:"colon",char:":",stdCode:58,macCode:58,winCode:58,pdfCode:58,utfCode:58},comma:{name:"comma",char:",",stdCode:44,macCode:44,winCode:44,pdfCode:44,utfCode:44},copyright:{name:"copyright",char:"©",stdCode:null,macCode:169,winCode:169,pdfCode:169,utfCode:169},currency1:{name:"currency1",char:"¤",stdCode:168,macCode:219,winCode:164,pdfCode:164,utfCode:164},d:{name:"d",char:"d",stdCode:100,macCode:100,winCode:100,pdfCode:100,utfCode:100},dagger:{name:"dagger",char:"†",stdCode:178,macCode:160,winCode:134,pdfCode:129,utfCode:8224},daggerdbl:{name:"daggerdbl",char:"‡",stdCode:179,macCode:224,winCode:135,pdfCode:130,utfCode:8225},degree:{name:"degree",char:"°",stdCode:null,macCode:161,winCode:176,pdfCode:176,utfCode:176},dieresis:{name:"dieresis",char:"¨",stdCode:200,macCode:172,winCode:168,pdfCode:168,utfCode:168},divide:{name:"divide",char:"÷",stdCode:null,macCode:214,winCode:247,pdfCode:247,utfCode:247},dollar:{name:"dollar",char:"$",stdCode:36,macCode:36,winCode:36,pdfCode:36,utfCode:36},dotaccent:{name:"dotaccent",char:"˙",stdCode:199,macCode:250,winCode:null,pdfCode:27,utfCode:729},dotlessi:{name:"dotlessi",char:"ı",stdCode:245,macCode:245,winCode:null,pdfCode:154,utfCode:305},e:{name:"e",char:"e",stdCode:101,macCode:101,winCode:101,pdfCode:101,utfCode:101},eacute:{name:"eacute",char:"é",stdCode:null,macCode:142,winCode:233,pdfCode:233,utfCode:233},ecircumflex:{name:"ecircumflex",char:"ê",stdCode:null,macCode:144,winCode:234,pdfCode:234,utfCode:234},edieresis:{name:"edieresis",char:"ë",stdCode:null,macCode:145,winCode:235,pdfCode:235,utfCode:235},egrave:{name:"egrave",char:"è",stdCode:null,macCode:143,winCode:232,pdfCode:232,utfCode:232},eight:{name:"eight",char:"8",stdCode:56,macCode:56,winCode:56,pdfCode:56,utfCode:56},ellipsis:{name:"ellipsis",char:"…",stdCode:188,macCode:201,winCode:133,pdfCode:131,utfCode:8230},emdash:{name:"emdash",char:"—",stdCode:208,macCode:209,winCode:151,pdfCode:132,utfCode:8212},endash:{name:"endash",char:"–",stdCode:177,macCode:208,winCode:150,pdfCode:133,utfCode:8211},equal:{name:"equal",char:"=",stdCode:61,macCode:61,winCode:61,pdfCode:61,utfCode:61},eth:{name:"eth",char:"ð",stdCode:null,macCode:null,winCode:240,pdfCode:240,utfCode:240},exclam:{name:"exclam",char:"!",stdCode:33,macCode:33,winCode:33,pdfCode:33,utfCode:33},exclamdown:{name:"exclamdown",char:"¡",stdCode:161,macCode:193,winCode:161,pdfCode:161,utfCode:161},f:{name:"f",char:"f",stdCode:102,macCode:102,winCode:102,pdfCode:102,utfCode:102},fi:{name:"fi",char:"fi",stdCode:174,macCode:222,winCode:null,pdfCode:147,utfCode:64257},five:{name:"five",char:"5",stdCode:53,macCode:53,winCode:53,pdfCode:53,utfCode:53},fl:{name:"fl",char:"fl",stdCode:175,macCode:223,winCode:null,pdfCode:148,utfCode:64258},florin:{name:"florin",char:"ƒ",stdCode:166,macCode:196,winCode:131,pdfCode:134,utfCode:402},four:{name:"four",char:"4",stdCode:52,macCode:52,winCode:52,pdfCode:52,utfCode:52},fraction:{name:"fraction",char:"⁄",stdCode:164,macCode:218,winCode:null,pdfCode:135,utfCode:8260},g:{name:"g",char:"g",stdCode:103,macCode:103,winCode:103,pdfCode:103,utfCode:103},germandbls:{name:"germandbls",char:"ß",stdCode:251,macCode:167,winCode:223,pdfCode:223,utfCode:223},grave:{name:"grave",char:"`",stdCode:193,macCode:96,winCode:96,pdfCode:96,utfCode:96},greater:{name:"greater",char:">",stdCode:62,macCode:62,winCode:62,pdfCode:62,utfCode:62},guillemotleft:{name:"guillemotleft",char:"«",stdCode:171,macCode:199,winCode:171,pdfCode:171,utfCode:171},guillemotright:{name:"guillemotright",char:"»",stdCode:187,macCode:200,winCode:187,pdfCode:187,utfCode:187},guilsinglleft:{name:"guilsinglleft",char:"‹",stdCode:172,macCode:220,winCode:139,pdfCode:136,utfCode:8249},guilsinglright:{name:"guilsinglright",char:"›",stdCode:173,macCode:221,winCode:155,pdfCode:137,utfCode:8250},h:{name:"h",char:"h",stdCode:104,macCode:104,winCode:104,pdfCode:104,utfCode:104},hungarumlaut:{name:"hungarumlaut",char:"˝",stdCode:205,macCode:253,winCode:null,pdfCode:28,utfCode:733},hyphen:{name:"hyphen",char:"-",stdCode:45,macCode:45,winCode:45,pdfCode:45,utfCode:45},i:{name:"i",char:"i",stdCode:105,macCode:105,winCode:105,pdfCode:105,utfCode:105},iacute:{name:"iacute",char:"í",stdCode:null,macCode:146,winCode:237,pdfCode:237,utfCode:237},icircumflex:{name:"icircumflex",char:"î",stdCode:null,macCode:148,winCode:238,pdfCode:238,utfCode:238},idieresis:{name:"idieresis",char:"ï",stdCode:null,macCode:149,winCode:239,pdfCode:239,utfCode:239},igrave:{name:"igrave",char:"ì",stdCode:null,macCode:147,winCode:236,pdfCode:236,utfCode:236},j:{name:"j",char:"j",stdCode:106,macCode:106,winCode:106,pdfCode:106,utfCode:106},k:{name:"k",char:"k",stdCode:107,macCode:107,winCode:107,pdfCode:107,utfCode:107},l:{name:"l",char:"l",stdCode:108,macCode:108,winCode:108,pdfCode:108,utfCode:108},less:{name:"less",char:"<",stdCode:60,macCode:60,winCode:60,pdfCode:60,utfCode:60},logicalnot:{name:"logicalnot",char:"¬",stdCode:null,macCode:194,winCode:172,pdfCode:172,utfCode:172},lslash:{name:"lslash",char:"ł",stdCode:248,macCode:null,winCode:null,pdfCode:155,utfCode:322},m:{name:"m",char:"m",stdCode:109,macCode:109,winCode:109,pdfCode:109,utfCode:109},macron:{name:"macron",char:"¯",stdCode:197,macCode:248,winCode:175,pdfCode:175,utfCode:175},minus:{name:"minus",char:"−",stdCode:null,macCode:null,winCode:null,pdfCode:138,utfCode:8722},mu:{name:"mu",char:"μ",stdCode:null,macCode:181,winCode:181,pdfCode:181,utfCode:181},multiply:{name:"multiply",char:"×",stdCode:null,macCode:null,winCode:215,pdfCode:215,utfCode:215},n:{name:"n",char:"n",stdCode:110,macCode:110,winCode:110,pdfCode:110,utfCode:110},nine:{name:"nine",char:"9",stdCode:57,macCode:57,winCode:57,pdfCode:57,utfCode:57},ntilde:{name:"ntilde",char:"ñ",stdCode:null,macCode:150,winCode:241,pdfCode:241,utfCode:241},numbersign:{name:"numbersign",char:"#",stdCode:35,macCode:35,winCode:35,pdfCode:35,utfCode:35},o:{name:"o",char:"o",stdCode:111,macCode:111,winCode:111,pdfCode:111,utfCode:111},oacute:{name:"oacute",char:"ó",stdCode:null,macCode:151,winCode:243,pdfCode:243,utfCode:243},ocircumflex:{name:"ocircumflex",char:"ô",stdCode:null,macCode:153,winCode:244,pdfCode:244,utfCode:244},odieresis:{name:"odieresis",char:"ö",stdCode:null,macCode:154,winCode:246,pdfCode:246,utfCode:246},oe:{name:"oe",char:"oe",stdCode:250,macCode:207,winCode:156,pdfCode:156,utfCode:339},ogonek:{name:"ogonek",char:"˛",stdCode:206,macCode:254,winCode:null,pdfCode:29,utfCode:731},ograve:{name:"ograve",char:"ò",stdCode:null,macCode:152,winCode:242,pdfCode:242,utfCode:242},one:{name:"one",char:"1",stdCode:49,macCode:49,winCode:49,pdfCode:49,utfCode:49},onehalf:{name:"onehalf",char:"½",stdCode:null,macCode:null,winCode:189,pdfCode:189,utfCode:189},onequarter:{name:"onequarter",char:"¼",stdCode:null,macCode:null,winCode:188,pdfCode:188,utfCode:188},onesuperior:{name:"onesuperior",char:"¹",stdCode:null,macCode:null,winCode:185,pdfCode:185,utfCode:185},ordfeminine:{name:"ordfeminine",char:"ª",stdCode:227,macCode:187,winCode:170,pdfCode:170,utfCode:170},ordmasculine:{name:"ordmasculine",char:"º",stdCode:235,macCode:188,winCode:186,pdfCode:186,utfCode:186},oslash:{name:"oslash",char:"ø",stdCode:249,macCode:191,winCode:248,pdfCode:248,utfCode:248},otilde:{name:"otilde",char:"õ",stdCode:null,macCode:155,winCode:245,pdfCode:245,utfCode:245},p:{name:"p",char:"p",stdCode:112,macCode:112,winCode:112,pdfCode:112,utfCode:112},paragraph:{name:"paragraph",char:"¶",stdCode:182,macCode:166,winCode:182,pdfCode:182,utfCode:182},parenleft:{name:"parenleft",char:"(",stdCode:40,macCode:40,winCode:40,pdfCode:40,utfCode:40},parenright:{name:"parenright",char:")",stdCode:41,macCode:41,winCode:41,pdfCode:41,utfCode:41},percent:{name:"percent",char:"%",stdCode:37,macCode:37,winCode:37,pdfCode:37,utfCode:37},period:{name:"period",char:".",stdCode:46,macCode:46,winCode:46,pdfCode:46,utfCode:46},periodcentered:{name:"periodcentered",char:"·",stdCode:180,macCode:225,winCode:183,pdfCode:183,utfCode:183},perthousand:{name:"perthousand",char:"‰",stdCode:189,macCode:228,winCode:137,pdfCode:139,utfCode:8240},plus:{name:"plus",char:"+",stdCode:43,macCode:43,winCode:43,pdfCode:43,utfCode:43},plusminus:{name:"plusminus",char:"±",stdCode:null,macCode:177,winCode:177,pdfCode:177,utfCode:177},q:{name:"q",char:"q",stdCode:113,macCode:113,winCode:113,pdfCode:113,utfCode:113},question:{name:"question",char:"?",stdCode:63,macCode:63,winCode:63,pdfCode:63,utfCode:63},questiondown:{name:"questiondown",char:"¿",stdCode:191,macCode:192,winCode:191,pdfCode:191,utfCode:191},quotedbl:{name:"quotedbl",char:'"',stdCode:34,macCode:34,winCode:34,pdfCode:34,utfCode:34},quotedblbase:{name:"quotedblbase",char:"„",stdCode:185,macCode:227,winCode:132,pdfCode:140,utfCode:8222},quotedblleft:{name:"quotedblleft",char:"“",stdCode:170,macCode:210,winCode:147,pdfCode:141,utfCode:8220},quotedblright:{name:"quotedblright",char:"”",stdCode:186,macCode:211,winCode:148,pdfCode:142,utfCode:8221},quoteleft:{name:"quoteleft",char:"‘",stdCode:96,macCode:212,winCode:145,pdfCode:143,utfCode:8216},quoteright:{name:"quoteright",char:"’",stdCode:39,macCode:213,winCode:146,pdfCode:144,utfCode:8217},quotesinglbase:{name:"quotesinglbase",char:"‚",stdCode:184,macCode:226,winCode:130,pdfCode:145,utfCode:8218},quotesingle:{name:"quotesingle",char:"'",stdCode:169,macCode:39,winCode:39,pdfCode:39,utfCode:39},r:{name:"r",char:"r",stdCode:114,macCode:114,winCode:114,pdfCode:114,utfCode:114},registered:{name:"registered",char:"®",stdCode:null,macCode:168,winCode:174,pdfCode:174,utfCode:174},ring:{name:"ring",char:"°",stdCode:202,macCode:251,winCode:null,pdfCode:30,utfCode:730},s:{name:"s",char:"s",stdCode:115,macCode:115,winCode:115,pdfCode:115,utfCode:115},scaron:{name:"scaron",char:"š",stdCode:null,macCode:null,winCode:154,pdfCode:157,utfCode:353},section:{name:"section",char:"§",stdCode:167,macCode:164,winCode:167,pdfCode:167,utfCode:167},semicolon:{name:"semicolon",char:";",stdCode:59,macCode:59,winCode:59,pdfCode:59,utfCode:59},seven:{name:"seven",char:"7",stdCode:55,macCode:55,winCode:55,pdfCode:55,utfCode:55},six:{name:"six",char:"6",stdCode:54,macCode:54,winCode:54,pdfCode:54,utfCode:54},slash:{name:"slash",char:"/",stdCode:47,macCode:47,winCode:47,pdfCode:47,utfCode:47},sterling:{name:"sterling",char:"£",stdCode:163,macCode:163,winCode:163,pdfCode:163,utfCode:163},t:{name:"t",char:"t",stdCode:116,macCode:116,winCode:116,pdfCode:116,utfCode:116},thorn:{name:"thorn",char:"þ",stdCode:null,macCode:null,winCode:254,pdfCode:254,utfCode:254},three:{name:"three",char:"3",stdCode:51,macCode:51,winCode:51,pdfCode:51,utfCode:51},threequarters:{name:"threequarters",char:"¾",stdCode:null,macCode:null,winCode:190,pdfCode:190,utfCode:190},threesuperior:{name:"threesuperior",char:"³",stdCode:null,macCode:null,winCode:179,pdfCode:179,utfCode:179},tilde:{name:"tilde",char:"˜",stdCode:196,macCode:247,winCode:152,pdfCode:31,utfCode:732},trademark:{name:"trademark",char:"™",stdCode:null,macCode:170,winCode:153,pdfCode:146,utfCode:8482},two:{name:"two",char:"2",stdCode:50,macCode:50,winCode:50,pdfCode:50,utfCode:50},twosuperior:{name:"twosuperior",char:"²",stdCode:null,macCode:null,winCode:178,pdfCode:178,utfCode:178},u:{name:"u",char:"u",stdCode:117,macCode:117,winCode:117,pdfCode:117,utfCode:117},uacute:{name:"uacute",char:"ú",stdCode:null,macCode:156,winCode:250,pdfCode:250,utfCode:250},ucircumflex:{name:"ucircumflex",char:"û",stdCode:null,macCode:158,winCode:251,pdfCode:251,utfCode:251},udieresis:{name:"udieresis",char:"ü",stdCode:null,macCode:159,winCode:252,pdfCode:252,utfCode:252},ugrave:{name:"ugrave",char:"ù",stdCode:null,macCode:157,winCode:249,pdfCode:249,utfCode:249},underscore:{name:"underscore",char:"_",stdCode:95,macCode:95,winCode:95,pdfCode:95,utfCode:95},v:{name:"v",char:"v",stdCode:118,macCode:118,winCode:118,pdfCode:118,utfCode:118},w:{name:"w",char:"w",stdCode:119,macCode:119,winCode:119,pdfCode:119,utfCode:119},x:{name:"x",char:"x",stdCode:120,macCode:120,winCode:120,pdfCode:120,utfCode:120},y:{name:"y",char:"y",stdCode:121,macCode:121,winCode:121,pdfCode:121,utfCode:121},yacute:{name:"yacute",char:"ý",stdCode:null,macCode:null,winCode:253,pdfCode:253,utfCode:253},ydieresis:{name:"ydieresis",char:"ÿ",stdCode:null,macCode:216,winCode:255,pdfCode:255,utfCode:255},yen:{name:"yen",char:"¥",stdCode:165,macCode:180,winCode:165,pdfCode:165,utfCode:165},z:{name:"z",char:"z",stdCode:122,macCode:122,winCode:122,pdfCode:122,utfCode:122},zcaron:{name:"zcaron",char:"ž",stdCode:null,macCode:null,winCode:158,pdfCode:158,utfCode:382},zero:{name:"zero",char:"0",stdCode:48,macCode:48,winCode:48,pdfCode:48,utfCode:48},Djecyrillic:{name:"Djecyrillic",char:"Ђ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1026},afii10051:{name:"afii10051",char:"Ђ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1026},Gjecyrillic:{name:"Gjecyrillic",char:"Ѓ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1027},afii10052:{name:"afii10052",char:"Ѓ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1027},Ljecyrillic:{name:"Ljecyrillic",char:"Љ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1033},afii10058:{name:"afii10058",char:"Љ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1033},Njecyrillic:{name:"Njecyrillic",char:"Њ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1034},afii10059:{name:"afii10059",char:"Њ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1034},Kjecyrillic:{name:"Kjecyrillic",char:"Ќ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1036},afii10061:{name:"afii10061",char:"Ќ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1036},Tshecyrillic:{name:"Tshecyrillic",char:"Ћ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1035},afii10060:{name:"afii10060",char:"Ћ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1035},Dzhecyrillic:{name:"Dzhecyrillic",char:"Џ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1039},afii10145:{name:"afii10145",char:"Џ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1039},afii10100:{name:"afii10100",char:"ѓ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1107},gjecyrillic:{name:"gjecyrillic",char:"ѓ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1107},afii10099:{name:"afii10099",char:"ђ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1106},djecyrillic:{name:"djecyrillic",char:"ђ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1106},afii10106:{name:"afii10106",char:"љ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1113},ljecyrillic:{name:"ljecyrillic",char:"љ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1113},afii10107:{name:"afii10107",char:"њ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1114},njecyrillic:{name:"njecyrillic",char:"њ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1114},afii10109:{name:"afii10109",char:"ќ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1116},kjecyrillic:{name:"kjecyrillic",char:"ќ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1116},afii10108:{name:"afii10108",char:"ћ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1115},tshecyrillic:{name:"tshecyrillic",char:"ћ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1115},afii10193:{name:"afii10193",char:"џ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1119},dzhecyrillic:{name:"dzhecyrillic",char:"џ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1119},Ushortcyrillic:{name:"Ushortcyrillic",char:"Ў",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1038},afii10062:{name:"afii10062",char:"Ў",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1038},afii10110:{name:"afii10110",char:"ў",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1118},ushortcyrillic:{name:"ushortcyrillic",char:"ў",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1118},Jecyrillic:{name:"Jecyrillic",char:"Ј",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1032},afii10057:{name:"afii10057",char:"Ј",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1032},Gheupturncyrillic:{name:"Gheupturncyrillic",char:"Ґ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1168},afii10050:{name:"afii10050",char:"Ґ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1168},Iocyrillic:{name:"Iocyrillic",char:"Ё",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1025},afii10023:{name:"afii10023",char:"Ё",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1025},Ecyrillic:{name:"Ecyrillic",char:"Є",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1028},afii10053:{name:"afii10053",char:"Є",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1028},Yicyrillic:{name:"Yicyrillic",char:"Ї",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1031},afii10056:{name:"afii10056",char:"Ї",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1031},Icyrillic:{name:"Icyrillic",char:"І",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1030},afii10055:{name:"afii10055",char:"І",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1030},afii10103:{name:"afii10103",char:"і",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1110},icyrillic:{name:"icyrillic",char:"і",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1110},afii10098:{name:"afii10098",char:"ґ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1169},gheupturncyrillic:{name:"gheupturncyrillic",char:"ґ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1169},afii10071:{name:"afii10071",char:"ё",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1105},iocyrillic:{name:"iocyrillic",char:"ё",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1105},afii10101:{name:"afii10101",char:"є",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1108},ecyrillic:{name:"ecyrillic",char:"є",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1108},afii10105:{name:"afii10105",char:"ј",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1112},jecyrillic:{name:"jecyrillic",char:"ј",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1112},Dzecyrillic:{name:"Dzecyrillic",char:"Ѕ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1029},afii10054:{name:"afii10054",char:"Ѕ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1029},afii10102:{name:"afii10102",char:"ѕ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1109},dzecyrillic:{name:"dzecyrillic",char:"ѕ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1109},afii10104:{name:"afii10104",char:"ї",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1111},yicyrillic:{name:"yicyrillic",char:"ї",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1111},Acyrillic:{name:"Acyrillic",char:"А",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1040},afii10017:{name:"afii10017",char:"А",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1040},Becyrillic:{name:"Becyrillic",char:"Б",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1041},afii10018:{name:"afii10018",char:"Б",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1041},Vecyrillic:{name:"Vecyrillic",char:"В",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1042},afii10019:{name:"afii10019",char:"В",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1042},Gecyrillic:{name:"Gecyrillic",char:"Г",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1043},afii10020:{name:"afii10020",char:"Г",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1043},Decyrillic:{name:"Decyrillic",char:"Д",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1044},afii10021:{name:"afii10021",char:"Д",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1044},Iecyrillic:{name:"Iecyrillic",char:"Е",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1045},afii10022:{name:"afii10022",char:"Е",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1045},Zhecyrillic:{name:"Zhecyrillic",char:"Ж",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1046},afii10024:{name:"afii10024",char:"Ж",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1046},Zecyrillic:{name:"Zecyrillic",char:"З",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1047},afii10025:{name:"afii10025",char:"З",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1047},Iicyrillic:{name:"Iicyrillic",char:"И",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1048},afii10026:{name:"afii10026",char:"И",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1048},Iishortcyrillic:{name:"Iishortcyrillic",char:"Й",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1049},afii10027:{name:"afii10027",char:"Й",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1049},Kacyrillic:{name:"Kacyrillic",char:"К",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1050},afii10028:{name:"afii10028",char:"К",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1050},Elcyrillic:{name:"Elcyrillic",char:"Л",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1051},afii10029:{name:"afii10029",char:"Л",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1051},Emcyrillic:{name:"Emcyrillic",char:"М",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1052},afii10030:{name:"afii10030",char:"М",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1052},Encyrillic:{name:"Encyrillic",char:"Н",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1053},afii10031:{name:"afii10031",char:"Н",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1053},Ocyrillic:{name:"Ocyrillic",char:"О",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1054},afii10032:{name:"afii10032",char:"О",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1054},Pecyrillic:{name:"Pecyrillic",char:"П",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1055},afii10033:{name:"afii10033",char:"П",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1055},Ercyrillic:{name:"Ercyrillic",char:"Р",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1056},afii10034:{name:"afii10034",char:"Р",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1056},Escyrillic:{name:"Escyrillic",char:"С",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1057},afii10035:{name:"afii10035",char:"С",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1057},Tecyrillic:{name:"Tecyrillic",char:"Т",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1058},afii10036:{name:"afii10036",char:"Т",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1058},Ucyrillic:{name:"Ucyrillic",char:"У",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1059},afii10037:{name:"afii10037",char:"У",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1059},Efcyrillic:{name:"Efcyrillic",char:"Ф",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1060},afii10038:{name:"afii10038",char:"Ф",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1060},Khacyrillic:{name:"Khacyrillic",char:"Х",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1061},afii10039:{name:"afii10039",char:"Х",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1061},Tsecyrillic:{name:"Tsecyrillic",char:"Ц",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1062},afii10040:{name:"afii10040",char:"Ц",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1062},Checyrillic:{name:"Checyrillic",char:"Ч",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1063},afii10041:{name:"afii10041",char:"Ч",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1063},Shacyrillic:{name:"Shacyrillic",char:"Ш",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1064},afii10042:{name:"afii10042",char:"Ш",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1064},Shchacyrillic:{name:"Shchacyrillic",char:"Щ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1065},afii10043:{name:"afii10043",char:"Щ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1065},Hardsigncyrillic:{name:"Hardsigncyrillic",char:"Ъ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1066},afii10044:{name:"afii10044",char:"Ъ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1066},Yericyrillic:{name:"Yericyrillic",char:"Ы",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1067},afii10045:{name:"afii10045",char:"Ы",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1067},Softsigncyrillic:{name:"Softsigncyrillic",char:"Ь",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1068},afii10046:{name:"afii10046",char:"Ь",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1068},Ereversedcyrillic:{name:"Ereversedcyrillic",char:"Э",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1069},afii10047:{name:"afii10047",char:"Э",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1069},IUcyrillic:{name:"IUcyrillic",char:"Ю",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1070},afii10048:{name:"afii10048",char:"Ю",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1070},IAcyrillic:{name:"IAcyrillic",char:"Я",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1071},afii10049:{name:"afii10049",char:"Я",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1071},afii10065:{name:"afii10065",char:"а",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1072},acyrillic:{name:"acyrillic",char:"а",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1072},afii10066:{name:"afii10066",char:"б",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1073},becyrillic:{name:"becyrillic",char:"б",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1073},afii10067:{name:"afii10067",char:"в",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1074},vecyrillic:{name:"vecyrillic",char:"в",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1074},afii10068:{name:"afii10068",char:"г",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1075},gecyrillic:{name:"gecyrillic",char:"г",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1075},afii10069:{name:"afii10069",char:"д",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1076},decyrillic:{name:"decyrillic",char:"д",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1076},afii10070:{name:"afii10070",char:"е",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1077},iecyrillic:{name:"iecyrillic",char:"е",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1077},afii10072:{name:"afii10072",char:"ж",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1078},zhecyrillic:{name:"zhecyrillic",char:"ж",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1078},afii10073:{name:"afii10073",char:"з",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1079},zecyrillic:{name:"zecyrillic",char:"з",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1079},afii10074:{name:"afii10074",char:"и",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1080},iicyrillic:{name:"iicyrillic",char:"и",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1080},afii10075:{name:"afii10075",char:"й",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1081},iishortcyrillic:{name:"iishortcyrillic",char:"й",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1081},afii10076:{name:"afii10076",char:"к",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1082},kacyrillic:{name:"kacyrillic",char:"к",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1082},afii10077:{name:"afii10077",char:"л",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1083},elcyrillic:{name:"elcyrillic",char:"л",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1083},afii10078:{name:"afii10078",char:"м",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1084},emcyrillic:{name:"emcyrillic",char:"м",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1084},afii10079:{name:"afii10079",char:"н",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1085},encyrillic:{name:"encyrillic",char:"н",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1085},afii10080:{name:"afii10080",char:"о",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1086},ocyrillic:{name:"ocyrillic",char:"о",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1086},afii10081:{name:"afii10081",char:"п",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1087},pecyrillic:{name:"pecyrillic",char:"п",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1087},afii10082:{name:"afii10082",char:"р",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1088},ercyrillic:{name:"ercyrillic",char:"р",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1088},afii10083:{name:"afii10083",char:"с",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1089},escyrillic:{name:"escyrillic",char:"с",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1089},afii10084:{name:"afii10084",char:"т",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1090},tecyrillic:{name:"tecyrillic",char:"т",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1090},afii10085:{name:"afii10085",char:"у",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1091},ucyrillic:{name:"ucyrillic",char:"у",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1091},afii10086:{name:"afii10086",char:"ф",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1092},efcyrillic:{name:"efcyrillic",char:"ф",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1092},afii10087:{name:"afii10087",char:"х",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1093},khacyrillic:{name:"khacyrillic",char:"х",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1093},afii10088:{name:"afii10088",char:"ц",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1094},tsecyrillic:{name:"tsecyrillic",char:"ц",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1094},afii10089:{name:"afii10089",char:"ч",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1095},checyrillic:{name:"checyrillic",char:"ч",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1095},afii10090:{name:"afii10090",char:"ш",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1096},shacyrillic:{name:"shacyrillic",char:"ш",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1096},afii10091:{name:"afii10091",char:"щ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1097},shchacyrillic:{name:"shchacyrillic",char:"щ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1097},afii10092:{name:"afii10092",char:"ъ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1098},hardsigncyrillic:{name:"hardsigncyrillic",char:"ъ",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1098},afii10093:{name:"afii10093",char:"ы",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1099},yericyrillic:{name:"yericyrillic",char:"ы",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1099},afii10094:{name:"afii10094",char:"ь",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1100},softsigncyrillic:{name:"softsigncyrillic",char:"ь",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1100},afii10095:{name:"afii10095",char:"э",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1101},ereversedcyrillic:{name:"ereversedcyrillic",char:"э",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1101},afii10096:{name:"afii10096",char:"ю",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1102},iucyrillic:{name:"iucyrillic",char:"ю",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1102},afii10097:{name:"afii10097",char:"я",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1103},iacyrillic:{name:"iacyrillic",char:"я",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:1103},afii61352:{name:"afii61352",char:"№",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:8470},numero:{name:"numero",char:"№",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:8470},nbspace:{name:"nbspace",char:"",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:160},currency:{name:"currency",char:"¤",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:164},sfthyphen:{name:"sfthyphen",char:"",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:173},middot:{name:"middot",char:"·",stdCode:null,macCode:null,winCode:null,pdfCode:null,utfCode:183},".notdef":{name:".notdef",char:" ",stdCode:32,macCode:32,winCode:32,pdfCode:32,utfCode:32},space:{name:"space",char:" ",stdCode:32,macCode:32,winCode:32,pdfCode:32,utfCode:32}};function getCharCodesMapByCode(c){const e=new Map;let t;switch(c){case"StandardEncoding":t="stdCode";break;case"WinAnsiEncoding":t="winCode";break;case"MacRomanEncoding":t="macCode";break;case"PDFDocEncoding":t="pdfCode";break;case"Utf-16":t="utfCode";break;default:return console.log(`Unsupported encoding: '${c}'`),e}for(const[,s]of Object.entries(pdfCharCodesByName))s[t]&&e.set(s[t],s);return e}class EncodingDict extends PdfDict{BaseEncoding;Differences;_charMap;get charMap(){return this._charMap||this.refreshCharMaps(),this._charMap}_codeMap;get codeMap(){return this._codeMap||this.refreshCharMaps(),this._codeMap}constructor(){super(dictTypes.ENCODING)}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new EncodingDict;return await t.parsePropsAsync(e),{value:t,start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.BaseEncoding&&r.push(...s.encode("/BaseEncoding "),...s.encode(" "+this.BaseEncoding)),this.Differences&&r.push(...s.encode("/Differences "),...this.encodePrimitiveArray(this.Differences,s));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/BaseEncoding":a=await this.parseNamePropAsync(f,t,a);break;case"/Differences":const g=await t.getValueTypeAtAsync(a,!0);if(g===valueTypes.ARRAY){this.Differences=[];const p=await t.getArrayBoundsAtAsync(a);let y=p.start+1;for(;y<p.end-1&&y!==-1;){const C=await t.getValueTypeAtAsync(y,!0);switch(C){case valueTypes.NAME:const A=await t.parseNameAtAsync(y,!0);this.Differences.push(A.value),y=A.end+1;break;case valueTypes.NUMBER:const w=await t.parseNumberAtAsync(y,!0);this.Differences.push(w.value),y=w.end+1;break;default:throw new Error(`Invalid differences array value type: ${C}`)}}a=p.end+1}else throw new Error(`Invalid differences value type: ${g}`);break;default:a=await t.skipToNextNameAsync(a,o-1);break}}refreshCharMaps(){if(this.Differences){if(typeof this.Differences[0]!="number")throw new Error("First element of encoding difference array must be a number");let e;const t=getCharCodesMapByCode(this.BaseEncoding.substring(1));for(const s of this.Differences){if(typeof s=="number"){e=s;continue}const r=pdfCharCodesByName[s.substring(1)];r&&t.set(e++,r)}this._charMap=new Map,this._codeMap=new Map,t.forEach((s,r)=>{this.charMap.set(r,s.char),this._codeMap.set(s.char,r)})}}}class FontDescriptorDict extends PdfDict{FontName;FontFamily;FontStretch;FontWeight;Flags;FontBBox;ItalicAngle;Ascent;Descent;CapHeight;StemV;StemH=0;Leading=0;AvgWidth=0;MaxWidth=0;MissingWidth=0;XHeight=0;CharSet;FontFile;FontFile2;FontFile3;constructor(){super(dictTypes.FONT_DESCRIPTOR)}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new FontDescriptorDict;return await t.parsePropsAsync(e),{value:t,start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.FontName&&r.push(...s.encode("/FontName "),...s.encode(" "+this.FontName)),this.FontFamily&&r.push(...s.encode("/FontFamily "),...this.FontFamily.toArray(e)),this.FontStretch&&r.push(...s.encode("/FontStretch "),...s.encode(" "+this.FontStretch)),this.FontWeight&&r.push(...s.encode("/FontWeight "),...s.encode(" "+this.FontWeight)),this.Flags&&r.push(...s.encode("/Flags "),...s.encode(" "+this.Flags)),this.FontBBox&&r.push(...s.encode("/FontBBox "),...this.encodePrimitiveArray(this.FontBBox,s)),(this.ItalicAngle||this.ItalicAngle===0)&&r.push(...s.encode("/ItalicAngle "),...s.encode(" "+this.ItalicAngle)),this.Ascent&&r.push(...s.encode("/Ascent "),...s.encode(" "+this.Ascent)),this.Descent&&r.push(...s.encode("/Descent "),...s.encode(" "+this.Descent)),this.CapHeight&&r.push(...s.encode("/CapHeight "),...s.encode(" "+this.CapHeight)),this.StemV&&r.push(...s.encode("/StemV "),...s.encode(" "+this.StemV)),this.StemH&&r.push(...s.encode("/StemV "),...s.encode(" "+this.StemH)),this.Leading&&r.push(...s.encode("/Leading "),...s.encode(" "+this.Leading)),this.AvgWidth&&r.push(...s.encode("/AvgWidth "),...s.encode(" "+this.AvgWidth)),this.MaxWidth&&r.push(...s.encode("/MaxWidth "),...s.encode(" "+this.MaxWidth)),this.MissingWidth&&r.push(...s.encode("/MissingWidth "),...s.encode(" "+this.MissingWidth)),this.XHeight&&r.push(...s.encode("/XHeight "),...s.encode(" "+this.XHeight)),this.CharSet&&r.push(...s.encode("/CharSet "),...this.CharSet.toArray(e)),this.FontFile&&r.push(...s.encode("/FontFile "),...this.FontFile.toArray(e)),this.FontFile2&&r.push(...s.encode("/FontFile2 "),...this.FontFile2.toArray(e)),this.FontFile3&&r.push(...s.encode("/FontFile3 "),...this.FontFile3.toArray(e));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/FontName":case"/FontStretch":a=await this.parseNamePropAsync(f,t,a);break;case"/FontFile":case"/FontFile2":case"/FontFile3":a=await this.parseRefPropAsync(f,t,a);break;case"/Flags":a=await this.parseNumberPropAsync(f,t,a,!1);break;case"/FontWeight":case"/ItalicAngle":case"/Ascent":case"/Descent":case"/Leading":case"/CapHeight":case"/XHeight":case"/StemV":case"/StemH":case"/AvgWidth":case"/MaxWidth":case"/MissingWidth":a=await this.parseNumberPropAsync(f,t,a,!0);break;case"/FontBBox":a=await this.parseNumberArrayPropAsync(f,t,a,!0);break;case"/CharSet":case"/FontFamily":const g=await t.getValueTypeAtAsync(a);if(g===valueTypes.STRING_HEX)a=await this.parseHexPropAsync(f,t,a);else if(g===valueTypes.STRING_LITERAL)a=await this.parseLiteralPropAsync(f,t,a);else throw new Error(`Unsupported '${f}' property value type: '${g}'`);break;default:a=await t.skipToNextNameAsync(a,o-1);break}if(!this.FontName||!this.Flags&&this.Flags!==0||!this.ItalicAngle&&this.ItalicAngle!==0)throw new Error("Not all required properties parsed")}}const cyrillicEncodingDifferences=[128,"/Djecyrillic","/Gjecyrillic","/quotesinglbase","/afii10100","/quotedblbase","/ellipsis","/dagger","/daggerdbl","/Euro","/perthousand","/Ljecyrillic","/guilsinglleft","/Njecyrillic","/Kjecyrillic","/Tshecyrillic","/Dzhecyrillic","/afii10099","/quoteleft","/quoteright","/quotedblleft","/quotedblright","/bullet","/endash","/emdash","/.notdef","/trademark","/afii10106","/guilsinglright","/afii10107","/afii10109","/afii10108","/afii10193","/nbspace","/Ushortcyrillic","/afii10110","/Jecyrillic","/currency","/Gheupturncyrillic","/brokenbar","/section","/Iocyrillic","/copyright","/Ecyrillic","/guillemotleft","/logicalnot","/sfthyphen","/registered","/Yicyrillic","/degree","/plusminus","/Icyrillic","/afii10103","/afii10098","/mu","/paragraph","/middot","/afii10071","/afii61352","/afii10101","/guillemotright","/afii10105","/Dzecyrillic","/afii10102","/afii10104","/Acyrillic","/Becyrillic","/Vecyrillic","/Gecyrillic","/Decyrillic","/Iecyrillic","/Zhecyrillic","/Zecyrillic","/Iicyrillic","/Iishortcyrillic","/Kacyrillic","/Elcyrillic","/Emcyrillic","/Encyrillic","/Ocyrillic","/Pecyrillic","/Ercyrillic","/Escyrillic","/Tecyrillic","/Ucyrillic","/Efcyrillic","/Khacyrillic","/Tsecyrillic","/Checyrillic","/Shacyrillic","/Shchacyrillic","/Hardsigncyrillic","/Yericyrillic","/Softsigncyrillic","/Ereversedcyrillic","/IUcyrillic","/IAcyrillic","/acyrillic","/afii10066","/afii10067","/afii10068","/afii10069","/afii10070","/afii10072","/afii10073","/afii10074","/afii10075","/afii10076","/afii10077","/afii10078","/afii10079","/afii10080","/afii10081","/afii10082","/afii10083","/afii10084","/afii10085","/afii10086","/afii10087","/afii10088","/afii10089","/afii10090","/afii10091","/afii10092","/afii10093","/afii10094","/afii10095","/afii10096","/afii10097"];class FontDict extends PdfDict{Subtype;BaseFont;Encoding;FontDescriptor;ToUnicode;FirstChar;LastChar;Widths;FontBBox;FontMatrix;Resources;CharProcs;DescendantFonts;_name;get name(){return this._name}_encoding;get encoding(){return this._encoding}set encoding(e){this._encoding=e,this.Encoding=e.ref?new ObjectId(e.ref.id,e.ref.generation):null}get encodingValue(){return!this.Encoding&&this._encoding?.ref&&(this.Encoding=new ObjectId(this._encoding.ref.id,this._encoding.ref.generation)),this.Encoding}_descriptor;get descriptor(){return this._descriptor}set descriptor(e){this._descriptor=e,this.FontDescriptor=e.ref?new ObjectId(e.ref.id,e.ref.generation):null}get descriptorValue(){return!this.FontDescriptor&&this._descriptor?.ref&&(this.FontDescriptor=new ObjectId(this._descriptor.ref.id,this._descriptor.ref.generation)),this.FontDescriptor}_toUtfCmap;get toUtfCmap(){return this._toUtfCmap}get isMonospace(){if(!this._descriptor)return!1;const e=this._descriptor?.Flags;return!!ByteUtils.getBit(e,0)}get isSerif(){if(!this._descriptor)return!1;const e=this._descriptor?.Flags;return!!ByteUtils.getBit(e,1)}get isScript(){if(!this._descriptor)return!1;const e=this._descriptor?.Flags;return!!ByteUtils.getBit(e,3)}get isItalic(){if(!this._descriptor)return!1;const e=this._descriptor?.Flags;return!!ByteUtils.getBit(e,6)}constructor(){super(dictTypes.FONT)}static newFontMap(){const e=new Map,t=new EncodingDict;return t.BaseEncoding="/WinAnsiEncoding",t.Differences=cyrillicEncodingDifferences.slice(),e.set("arial",FontDict.createArialFont(t)),e.set("calibri",FontDict.createCalibriFont(t)),e.set("cambria",FontDict.createCambriaFont(t)),e.set("courier",FontDict.createCourierFont(t)),e.set("tnr",FontDict.createTnrFont(t)),e.set("verdana",FontDict.createVerdanaFont(t)),e}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new FontDict;return await t.parsePropsAsync(e),{value:t.initProxy(),start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}static createArialFont(e){const t=new FontDescriptorDict;t.FontName="/ArialMT",t.Flags=32,t.ItalicAngle=0,t.Ascent=905,t.Descent=-211,t.FontBBox=[-664,-324,2e3,1039],t.CapHeight=716,t.StemV=0;const s=new FontDict;return s.encoding=e,s.descriptor=t,s.Subtype="/TrueType",s.BaseFont="/ArialMT",s.FirstChar=32,s.LastChar=255,s.Widths=[277,277,354,556,556,889,666,190,333,333,389,583,277,333,277,277,556,556,556,556,556,556,556,556,556,556,277,277,583,583,583,556,925,666,666,722,722,666,610,777,722,277,500,666,556,833,722,777,666,777,722,666,610,722,666,943,666,666,610,277,277,277,469,556,333,556,556,500,556,556,277,556,556,222,222,500,222,833,556,556,556,556,333,500,277,556,500,722,500,500,500,333,259,333,583,750,864,541,222,364,333,1e3,556,556,556,1e3,1014,333,893,582,854,718,556,222,222,333,333,350,556,1e3,750,1e3,906,333,812,437,556,552,277,635,500,500,556,488,259,556,666,736,718,556,583,333,736,277,399,548,277,222,411,576,537,333,556,953,510,556,222,666,500,277,666,656,666,541,677,666,923,604,718,718,582,656,833,722,777,718,666,722,610,635,760,666,739,666,916,937,791,885,656,718,879,722,556,572,531,364,583,556,668,458,558,558,437,583,687,552,556,541,556,500,458,500,822,500,572,520,802,822,625,718,520,510,750,541],s._name="/tspdfFarial",s}static createCalibriFont(e){const t=new FontDescriptorDict;t.FontName="/Calibri",t.Flags=32,t.ItalicAngle=0,t.Ascent=750,t.Descent=-250,t.FontBBox=[-502,-312,1240,1026],t.CapHeight=631,t.StemV=0;const s=new FontDict;return s.encoding=e,s.descriptor=t,s.Subtype="/TrueType",s.BaseFont="/Calibri",s.FirstChar=32,s.LastChar=255,s.Widths=[226,325,400,498,506,714,682,220,303,303,498,498,249,306,252,386,506,506,506,506,506,506,506,506,506,506,267,267,498,498,498,463,894,578,543,533,615,488,459,630,623,251,318,519,420,854,645,662,516,672,542,459,487,641,567,889,519,487,468,306,386,306,498,498,291,479,525,422,525,497,305,470,525,229,239,454,229,798,525,527,525,525,348,391,334,525,451,714,433,452,395,314,460,314,498,506,624,429,249,345,418,690,498,498,506,967,872,338,876,542,618,619,540,249,249,418,418,498,498,905,0,705,750,338,769,463,532,524,226,527,452,318,498,432,498,498,488,834,547,512,498,306,506,251,338,498,251,229,354,549,585,252,497,890,443,512,239,459,391,229,578,537,543,429,644,488,800,473,641,641,542,610,854,623,662,621,516,533,487,527,697,519,638,555,868,889,614,761,531,547,878,555,479,532,479,345,558,497,688,422,540,540,463,510,676,534,527,520,525,422,387,452,624,433,541,468,728,749,536,666,469,442,721,474],s._name="/tspdfFcalibri",s}static createCambriaFont(e){const t=new FontDescriptorDict;t.FontName="/Cambria",t.Flags=32,t.ItalicAngle=0,t.Ascent=950,t.Descent=-222,t.FontBBox=[-1474,-2463,2867,3116],t.CapHeight=666,t.StemV=0;const s=new FontDict;return s.encoding=e,s.descriptor=t,s.Subtype="/TrueType",s.BaseFont="/Cambria",s.FirstChar=32,s.LastChar=255,s.Widths=[220,285,393,619,505,889,687,236,381,381,427,553,205,332,205,490,553,553,553,553,553,553,553,553,553,553,263,263,553,553,553,422,885,623,611,562,661,575,536,610,686,324,306,629,536,815,680,653,567,653,621,496,592,647,603,921,571,570,537,350,490,350,553,370,284,488,547,440,554,487,302,494,551,277,266,524,271,832,558,530,556,546,413,429,338,552,503,774,483,503,454,387,316,387,712,658,738,534,205,446,360,751,516,516,628,1160,935,302,932,649,752,666,538,221,221,375,375,443,500,1e3,0,679,763,302,797,540,551,566,220,600,503,306,543,501,316,500,575,850,569,487,553,332,850,324,375,553,324,277,416,543,587,282,487,927,470,487,266,496,429,277,623,599,611,534,654,575,922,542,691,691,649,677,815,686,653,674,567,562,592,600,778,571,671,625,926,926,731,850,597,573,920,630,488,541,522,446,558,487,713,458,589,589,540,559,672,588,530,566,556,440,511,503,685,483,569,530,800,800,617,748,514,470,767,530],s._name="/tspdfFcambria",s}static createCourierFont(e){const t=new FontDescriptorDict;t.FontName="/CourierNewPSMT",t.Flags=32,t.ItalicAngle=0,t.Ascent=832,t.Descent=-300,t.FontBBox=[-121,-679,622,1020],t.CapHeight=571,t.StemV=0;const s=new FontDict;return s.encoding=e,s.descriptor=t,s.Subtype="/TrueType",s.BaseFont="/CourierNewPSMT",s.FirstChar=32,s.LastChar=255,s.Widths=[600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600],s._name="/tspdfFcourier",s}static createTnrFont(e){const t=new FontDescriptorDict;t.FontName="/TimesNewRomanPSMT",t.Flags=32,t.ItalicAngle=0,t.Ascent=891,t.Descent=-216,t.FontBBox=[-568,-306,2045,1039],t.CapHeight=662,t.StemV=0;const s=new FontDict;return s.encoding=e,s.descriptor=t,s.Subtype="/TrueType",s.BaseFont="/TimesNewRomanPSMT",s.FirstChar=32,s.LastChar=255,s.Widths=[250,333,408,500,500,833,777,180,333,333,500,563,250,333,250,277,500,500,500,500,500,500,500,500,500,500,277,277,563,563,563,443,920,722,666,666,722,610,556,722,722,333,389,722,610,889,722,722,556,722,666,556,610,722,722,943,722,722,610,333,277,333,469,500,333,443,500,443,500,443,333,500,500,277,277,500,277,777,500,500,500,500,333,389,277,500,500,722,500,500,443,479,200,479,541,777,751,578,333,410,443,1e3,500,500,500,1e3,872,333,872,666,741,722,482,333,333,443,443,350,500,1e3,777,979,727,333,723,485,500,535,250,708,500,389,500,450,200,500,610,759,660,500,563,333,759,333,399,548,333,277,351,576,453,333,443,954,429,500,277,556,389,277,722,574,666,578,682,610,895,500,722,722,666,678,889,722,722,722,556,666,610,708,790,722,722,649,953,953,706,872,574,660,973,666,443,508,472,410,508,443,690,395,535,535,485,499,632,535,500,535,500,443,437,500,647,500,535,502,770,770,517,671,456,429,747,459],s._name="/tspdfFtnr",s}static createVerdanaFont(e){const t=new FontDescriptorDict;t.FontName="/Verdana",t.Flags=32,t.ItalicAngle=0,t.Ascent=1005,t.Descent=-209,t.FontBBox=[-559,-303,1522,1050],t.CapHeight=727,t.StemV=0;const s=new FontDict;return s.encoding=e,s.descriptor=t,s.Subtype="/TrueType",s.BaseFont="/Verdana",s.FirstChar=32,s.LastChar=255,s.Widths=[351,393,458,818,635,931,726,268,454,454,635,818,363,454,363,454,635,635,635,635,635,635,635,635,635,635,454,454,818,818,818,545,1e3,683,685,698,770,632,574,775,751,420,454,692,556,842,748,787,603,787,695,683,616,731,683,988,685,615,685,454,454,454,818,635,635,600,623,520,623,595,351,623,632,274,344,591,274,972,632,606,623,623,426,520,394,632,591,818,591,591,525,634,454,634,818,1e3,792,566,268,471,458,818,635,635,635,1374,1071,454,966,692,817,751,632,268,268,458,458,545,635,1e3,1e3,976,914,454,914,591,632,637,351,615,591,454,635,566,454,635,632,1e3,700,644,818,454,1e3,420,541,818,420,274,471,641,635,363,595,993,546,644,344,683,520,274,683,685,685,566,745,632,973,615,750,750,692,734,842,751,787,751,603,698,616,615,818,685,761,711,835,904,783,920,680,701,881,706,600,614,594,471,621,595,797,524,640,640,591,620,696,637,606,637,623,534,496,591,840,591,644,605,875,887,640,794,570,546,838,599],s._name="/tspdfFverdana",s}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.Subtype&&r.push(...s.encode("/Subtype "),...s.encode(" "+this.Subtype)),this.BaseFont&&r.push(...s.encode("/BaseFont "),...s.encode(" "+this.BaseFont)),this.ToUnicode&&r.push(...s.encode("/G "),...this.ToUnicode.toArray(e)),this.FirstChar&&r.push(...s.encode("/FirstChar "),...s.encode(" "+this.FirstChar)),this.LastChar&&r.push(...s.encode("/LastChar "),...s.encode(" "+this.LastChar)),this.Widths&&(this.Widths instanceof ObjectId?r.push(...s.encode("/Widths "),...this.Widths.toArray(e)):r.push(...s.encode("/Widths "),...this.encodePrimitiveArray(this.Widths,s))),(this.Encoding||this.encodingValue)&&(this.Encoding instanceof ObjectId?r.push(...s.encode("/Encoding "),...this.Encoding.toArray(e)):r.push(...s.encode("/Encoding "),...s.encode(" "+this.Encoding))),this.descriptorValue&&r.push(...s.encode("/FontDescriptor "),...this.descriptorValue.toArray(e)),this.Resources&&r.push(...s.encode("/Resources "),...this.Resources),this.CharProcs&&r.push(...s.encode("/CharProcs "),...this.CharProcs),this.FontBBox&&r.push(...s.encode("/FontBBox "),...this.encodePrimitiveArray(this.FontBBox,s)),this.FontMatrix&&r.push(...s.encode("/FontMatrix "),...this.encodePrimitiveArray(this.FontMatrix,s));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}decodeText(e){if(this.toUtfCmap)return this.toUtfCmap.hexBytesToUtfString(e);if(this.encoding?.charMap){const r=this.encoding.charMap;let o="";return e.forEach(a=>o+=r.get(a)??" "),o}return(e[0]===254&&e[1]===255?new TextDecoder("utf-16be"):new TextDecoder).decode(e)||""}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/Subtype":const g=await t.parseNameAtAsync(a,!0);if(g){this.Subtype=g.value,a=g.end+1;break}throw new Error("Can't parse /Subtype property value");case"/BaseFont":a=await this.parseNamePropAsync(f,t,a);break;case"/Encoding":const p=await t.getValueTypeAtAsync(a);if(p===valueTypes.NAME)a=await this.parseNamePropAsync(f,t,a);else if(p===valueTypes.REF)a=await this.parseRefPropAsync(f,t,a);else throw new Error(`Unsupported '${f}' property value type: '${p}'`);break;case"/ToUnicode":a=await this.parseRefPropAsync(f,t,a);break;case"/FirstChar":case"/LastChar":a=await this.parseNumberPropAsync(f,t,a,!1);break;case"/FontBBox":case"/FontMatrix":a=await this.parseNumberArrayPropAsync(f,t,a,!0);break;case"/Widths":const y=await t.getValueTypeAtAsync(a);if(y===valueTypes.ARRAY)a=await this.parseNumberArrayPropAsync(f,t,a,!0);else if(y===valueTypes.REF)a=await this.parseRefPropAsync(f,t,a);else throw new Error(`Unsupported '${f}' property value type: '${p}'`);break;case"/FontDescriptor":a=await this.parseRefPropAsync(f,t,a);break;case"/Resources":case"/CharProcs":const C=await t.getValueTypeAtAsync(a);if(C===valueTypes.REF){const A=await ObjectId.parseRefAsync(t,a);if(A&&e.parseInfoGetterAsync){this[f.slice(1)]=await t.sliceCharCodesAsync(A.start,A.end),a=A.end+1;break}throw new Error(`Can't parse ${f} value reference`)}else if(C===valueTypes.DICTIONARY){const A=await t.getDictBoundsAtAsync(a);if(A){this[f.slice(1)]=await t.sliceCharCodesAsync(A.start,A.end),a=A.end+1;break}throw new Error(`Can't parse ${f} dictionary bounds`)}throw new Error(`Unsupported ${f} property value type: ${C}`);default:a=await t.skipToNextNameAsync(a,o-1);break}if(this.Encoding&&this.Encoding instanceof ObjectId){const g=await e.parseInfoGetterAsync(this.Encoding.id),p=await EncodingDict.parseAsync(g);this._encoding=p?.value}if(this.ToUnicode){const g=await e.parseInfoGetterAsync(this.ToUnicode.id),p=await UnicodeCmapStream.parseAsync(g);this._toUtfCmap=p?.value}if(this.FontDescriptor){const g=await e.parseInfoGetterAsync(this.FontDescriptor.id),p=await FontDescriptorDict.parseAsync(g);this._descriptor=p?.value}if(this.Subtype!=="/Type1"&&this.Subtype!=="/Type3"&&this.Subtype!=="/TrueType"&&!(this.Subtype==="/Type0"&&this._toUtfCmap))throw new Error(`Font type is not supported: ${this.Subtype}`);if(this.Subtype==="/Type3"&&(!this.FontBBox||!this.FontMatrix||!this.Encoding||!this.FirstChar||!this.LastChar||!this.Widths||!this.CharProcs))throw new Error("Not all required properties parsed")}initProxy(){return super.initProxy()}getProxy(){return super.getProxy()}}class SoftMaskDict extends PdfDict{S;G;BC;TR="/Identity";constructor(){super(dictTypes.SOFT_MASK)}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new SoftMaskDict;return await t.parsePropsAsync(e),{value:t,start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.S&&r.push(...s.encode("/S "),...s.encode(this.S)),this.G&&r.push(...s.encode("/G "),...this.G.toArray(e)),this.BC&&r.push(...s.encode("/BC "),...this.encodePrimitiveArray(this.BC,s)),this.TR&&r.push(...s.encode("/TR "),...s.encode(" "+this.TR));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/S":const g=await t.parseNameAtAsync(a,!0);if(g&&Object.values(softMaskTypes).includes(g.value))this.S=g.value,a=g.end+1;else throw new Error("Can't parse /S property value");break;case"/G":a=await this.parseRefPropAsync(f,t,a);break;case"/BC":a=await this.parseNumberArrayPropAsync(f,t,a);break;case"/TR":default:a=await t.skipToNextNameAsync(a,o-1);break}}}class GraphicsStateDict extends PdfDict{LW;LC;LJ;ML;D;RI;OP;op;OPM;Font;FL;SM;SA;BM;SMask;CA;ca;AIS;TK;constructor(){super(dictTypes.GRAPHICS_STATE)}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new GraphicsStateDict;return await t.parsePropsAsync(e),{value:t.initProxy(),start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.LW&&r.push(...s.encode("/LW "),...s.encode(" "+this.LW)),this.LC&&r.push(...s.encode("/LC "),...s.encode(" "+this.LC)),this.LJ&&r.push(...s.encode("/LJ "),...s.encode(" "+this.LJ)),this.ML&&r.push(...s.encode("/ML "),...s.encode(" "+this.ML)),this.D&&r.push(...s.encode("/D "),codes.L_BRACKET,codes.L_BRACKET,...s.encode(""+this.D[0][0]),...s.encode(" "+this.D[0][1]),codes.R_BRACKET,...s.encode(" "+this.D[1]),codes.R_BRACKET),this.RI&&r.push(...s.encode("/RI "),...s.encode(this.RI)),this.OP&&r.push(...s.encode("/OP "),...s.encode(" "+this.OP)),this.op&&r.push(...s.encode("/op "),...s.encode(" "+this.op)),this.OPM&&r.push(...s.encode("/OPM "),...s.encode(" "+this.OPM)),this.Font&&r.push(...s.encode("/Font "),codes.L_BRACKET,...this.Font[0].toArray(e),...s.encode(" "+this.Font[1]),codes.R_BRACKET),this.FL&&r.push(...s.encode("/FL "),...s.encode(" "+this.FL)),this.SM&&r.push(...s.encode("/SM "),...s.encode(" "+this.SM)),this.SA&&r.push(...s.encode("/SA "),...s.encode(" "+this.SA)),this.BM&&r.push(...s.encode("/BM "),...s.encode(this.BM)),this.SMask&&(this.SMask instanceof SoftMaskDict?r.push(...s.encode("/SMask "),...this.SMask.toArray(e)):r.push(...s.encode("/SMask "),...s.encode(this.SMask))),this.CA&&r.push(...s.encode("/CA "),...s.encode(" "+this.CA)),this.ca&&r.push(...s.encode("/ca "),...s.encode(" "+this.ca)),this.AIS&&r.push(...s.encode("/AIS "),...s.encode(" "+this.AIS)),this.TK&&r.push(...s.encode("/TK "),...s.encode(" "+this.TK));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}toParams(){const e={};if(isNaN(this.LW)||(e.strokeWidth=this.LW),!isNaN(this.LC))switch(this.LC){case lineCapStyles.BUTT:e.strokeLineCap="butt";break;case lineCapStyles.ROUND:e.strokeLineCap="round";break;case lineCapStyles.SQUARE:e.strokeLineCap="square";break}if(!isNaN(this.LJ))switch(this.LJ){case lineJoinStyles.BEVEL:e.strokeLineJoin="bevel";break;case lineJoinStyles.ROUND:e.strokeLineJoin="round";break;case lineJoinStyles.MITER:e.strokeLineJoin="miter";break}if(this.ML&&(e.strokeMiterLimit=this.ML),this.D&&(e.strokeDashArray=`${this.D[0][0]} ${this.D[0][1]}`,e.strokeDashOffset=this.D[1]),this.Font,this.BM)switch(this.BM){case"/Normal":e.mixBlendMode="normal";break;case"/Multiply":e.mixBlendMode="multiply";break;case"/Screen":e.mixBlendMode="screen";break;case"/Overlay":e.mixBlendMode="overlay";break;case"/Darken":e.mixBlendMode="darken";break;case"/Lighten":e.mixBlendMode="lighten";break;case"/ColorDodge":e.mixBlendMode="color-dodge";break;case"/ColorBurn":e.mixBlendMode="color-burn";break;case"/HardLight":e.mixBlendMode="hard-light";break;case"/SoftLight":e.mixBlendMode="soft-light";break;case"/Difference":e.mixBlendMode="difference";break;case"/Exclusion":e.mixBlendMode="exclusion";break;default:throw new Error(`Unsupported blend mode: ${this.BM}`)}return this.SMask,this.CA&&(e.strokeAlpha=this.CA),this.ca&&(e.fillAlpha=this.ca),this.AIS,e}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/LC":const g=await t.parseNumberAtAsync(a,!0);if(g&&Object.values(lineCapStyles).includes(g.value))this.LC=g.value,a=g.end+1;else throw new Error("Can't parse /LC property value");break;case"/OPM":const p=await t.parseNumberAtAsync(a,!0);if(p&&[0,1].includes(p.value))this.OPM=p.value,a=p.end+1;else throw new Error("Can't parse /OPM property value");break;case"/LJ":const y=await t.parseNumberAtAsync(a,!0);if(y&&Object.values(lineJoinStyles).includes(y.value))this.LJ=y.value,a=y.end+1;else throw new Error("Can't parse /LJ property value");break;case"/RI":const C=await t.parseNameAtAsync(a,!0);if(C&&Object.values(renderingIntents).includes(C.value))this.RI=C.value,a=C.end+1;else throw new Error("Can't parse /RI property value");break;case"/BM":const A=await t.parseNameAtAsync(a,!0);if(A&&Object.values(blendModes).includes(A.value))this.BM=A.value,a=A.end+1;else throw new Error("Can't parse /BM property value");break;case"/SMask":const w=await t.getValueTypeAtAsync(a);if(w===valueTypes.NAME){const v=await t.parseNameAtAsync(a);if(v){this.SMask=v.value,a=v.end+1;break}throw new Error("Can't parse /SMask property name")}else if(w===valueTypes.DICTIONARY){const v=await t.getDictBoundsAtAsync(a);if(v){const k=await SoftMaskDict.parseAsync({parser:t,bounds:v});if(k){this.SMask=k.value,a=k.end+1;break}}throw new Error("Can't parse /SMask value dictionary")}throw new Error(`Unsupported /SMask property value type: ${w}`);case"/Font":const _=await t.getValueTypeAtAsync(a);if(_===valueTypes.ARRAY){const v=await t.getArrayBoundsAtAsync(a);if(v){const k=await ObjectId.parseAsync(t,v.start+1);if(k){const R=await t.parseNumberAtAsync(k.end+1);if(R){this.Font=[k.value,R.value],a=v.end+1;break}}}}else throw new Error(`Unsupported /Font property value type: ${_}`);throw new Error("Can't parse /Font property value");case"/D":const E=await t.getValueTypeAtAsync(a);if(E===valueTypes.ARRAY){const v=await t.getArrayBoundsAtAsync(a);if(v){const k=await t.parseNumberArrayAtAsync(v.start+1);if(k){const R=await t.parseNumberAtAsync(k.end+1);if(R){this.D=[[k.value[0],k.value[1]],R.value],a=v.end+1;break}}}}else throw new Error(`Unsupported /D property value type: ${E}`);throw new Error("Can't parse /D property value");case"/OP":case"/op":case"/SA":case"/AIS":case"/TK":a=await this.parseBoolPropAsync(f,t,a);break;case"/LW":case"/ML":case"/FL":case"/SM":case"/CA":case"/ca":a=await this.parseNumberPropAsync(f,t,a);break;default:a=await t.skipToNextNameAsync(a,o-1);break}}initProxy(){return super.initProxy()}getProxy(){return super.getProxy()}}class ResourceDict extends PdfDict{ExtGState;ColorSpace;Pattern;Shading;XObject;Font;Properties;ProcSet;_streamParsers;_gsMap=new Map;_fontsMap=new Map;_xObjectsMap=new Map;constructor(e){super(null),this._streamParsers=e}static async parseAsync(e,t){if(!e)throw new Error("Parsing information not passed");try{const s=new ResourceDict(t);return await s.parsePropsAsync(e),{value:s.initProxy(),start:e.bounds.start,end:e.bounds.end}}catch(s){return console.log(s.message),null}}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];if(this._gsMap.size){r.push(...s.encode("/ExtGState ")),r.push(...keywordCodes.DICT_START);for(const[a,f]of this._gsMap)r.push(...s.encode(a.slice(10)),codes.WHITESPACE),f.ref?r.push(...ObjectId.fromRef(f.ref).toArray(e)):r.push(...f.toArray(e));r.push(...keywordCodes.DICT_END)}if(this._fontsMap.size){r.push(...s.encode("/Font ")),r.push(...keywordCodes.DICT_START);for(const[a,f]of this._fontsMap)r.push(...s.encode(a.slice(5)),codes.WHITESPACE),f.ref?r.push(...ObjectId.fromRef(f.ref).toArray(e)):r.push(...f.toArray(e));r.push(...keywordCodes.DICT_END)}if(this._xObjectsMap.size){r.push(...s.encode("/XObject "),...keywordCodes.DICT_START);for(const[a,f]of this._xObjectsMap){const m=f.ref;if(!m)throw new Error("XObject has no reference");r.push(...s.encode(a.slice(8)),codes.WHITESPACE),r.push(...ObjectId.fromRef(m).toArray(e))}r.push(...keywordCodes.DICT_END)}this.ColorSpace&&r.push(...s.encode("/ColorSpace "),...this.ColorSpace.toArray(e)),this.Pattern&&r.push(...s.encode("/Pattern "),...this.Pattern.toArray(e)),this.Shading&&r.push(...s.encode("/Shading "),...this.Shading.toArray(e)),this.Properties&&r.push(...s.encode("/Properties "),...this.Properties.toArray(e)),this.ProcSet&&r.push(...s.encode("/ProcSet "),...this.encodePrimitiveArray(this.ProcSet,s));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}getGraphicsState(e){return this._gsMap.get(e)}*getGraphicsStates(){for(const e of this._gsMap)yield e}setGraphicsState(e,t){this._gsMap.set(`/ExtGState${e}`,t),this._edited=!0}getFont(e){return this._fontsMap.get("/Font"+e)}*getFonts(){for(const e of this._fontsMap)yield e}setFont(e,t){this._fontsMap.set(`/Font${e}`,t),this._edited=!0}getXObject(e){return this._xObjectsMap.get(e)}*getXObjects(){for(const e of this._xObjectsMap)yield e}setXObject(e,t){this._xObjectsMap.set(`/XObject${e}`,t),this._edited=!0}async fillMapsAsync(e,t){if(this._gsMap.clear(),this._fontsMap.clear(),this._xObjectsMap.clear(),this.ExtGState){for(const[s,r]of this.ExtGState.getObjectIds()){const o=await e(r.id);if(!o)continue;const a=await GraphicsStateDict.parseAsync(o);a&&this._gsMap.set(`/ExtGState${s}`,a.value)}for(const[s,r]of this.ExtGState.getDictParsers()){const o=await GraphicsStateDict.parseAsync(r);o&&this._gsMap.set(`/ExtGState${s}`,o.value)}}if(this.XObject&&this._streamParsers)for(const[s,r]of this.XObject.getObjectIds()){const o=await e(r.id);if(!o)continue;const a=await o.parser.findSubarrayIndexAsync(keywordCodes.FORM,{direction:!0,minIndex:o.bounds.start,maxIndex:o.bounds.end})?await this._streamParsers.xform(o):await this._streamParsers.image(o);a&&this._xObjectsMap.set(`/XObject${s}`,a.value)}if(this.Font)for(const[s,r]of this.Font.getObjectIds()){const o=await e(r.id);if(!o)continue;const a=await FontDict.parseAsync(o);a&&this._fontsMap.set(`/Font${s}`,a.value)}}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/ExtGState":case"/ColorSpace":case"/Pattern":case"/Shading":case"/XObject":case"/Font":case"/Properties":const g=await t.getValueTypeAtAsync(a);if(g===valueTypes.REF){const p=await ObjectId.parseRefAsync(t,a);if(p&&e.parseInfoGetterAsync){const y=await e.parseInfoGetterAsync(p.value.id);if(y){const C=await ObjectMapDict.parseAsync(y);if(C){this[f.slice(1)]=C.value,a=C.end+1;break}}}throw new Error(`Can't parse ${f} value reference`)}else if(g===valueTypes.DICTIONARY){const p=await t.getDictBoundsAtAsync(a);if(p){const y=await ObjectMapDict.parseAsync({parser:t,bounds:p});if(y){this[f.slice(1)]=y.value,a=p.end+1;break}else throw new Error(`Can't parse ${f} value dictionary`)}throw new Error(`Can't parse ${f} dictionary bounds`)}throw new Error(`Unsupported /Resources property value type: ${g}`);case"/ProcSet":a=await this.parseNameArrayPropAsync(f,t,a);break;default:a=await t.skipToNextNameAsync(a,o-1);break}e.parseInfoGetterAsync&&await this.fillMapsAsync(e.parseInfoGetterAsync,e.cryptInfo)}initProxy(){return super.initProxy()}getProxy(){return super.getProxy()}}class MeasureDict extends PdfDict{Subtype="/RL";constructor(){super(dictTypes.MEASURE)}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new MeasureDict;return await t.parsePropsAsync(e),{value:t,start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.Subtype&&r.push(...s.encode("/Subtype "),...s.encode(this.Subtype));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/Subtype":const g=await t.parseNameAtAsync(a);if(g){if(this.Subtype&&this.Subtype!==g.value)throw new Error(`Invalid dict subtype: '${g.value}' instead of '${this.Subtype}'`);a=g.end+1}else throw new Error("Can't parse /Subtype property value");break;default:a=await t.skipToNextNameAsync(a,o-1);break}}}class GroupDict extends PdfDict{S="/Transparency";constructor(){super(dictTypes.GROUP)}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.S&&r.push(...s.encode("/S "),...s.encode(this.S));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/S":const g=await t.parseNameAtAsync(a,!0);if(g)if(Object.values(groupDictTypes).includes(g.value))this.S=g.value,a=g.end+1;else throw new Error(`Invalid dict subtype: '${g.value}'`);else throw new Error("Can't parse /S property value");break;default:a=await t.skipToNextNameAsync(a,o-1);break}}}class TransparencyGroupDict extends GroupDict{CS;I=!1;K=!1;constructor(){super()}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new TransparencyGroupDict;return await t.parsePropsAsync(e),{value:t,start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.CS&&r.push(...s.encode("/CS "),...s.encode(this.CS)),this.I&&r.push(...s.encode("/I "),...s.encode(" "+this.I)),this.K&&r.push(...s.encode("/K "),...s.encode(" "+this.K));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}async parsePropsAsync(e){if(await super.parsePropsAsync(e),this.S!=="/Transparency")throw new Error("Not a transparency dict");const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/CS":const g=await t.getValueTypeAtAsync(a);if(g===valueTypes.NAME){const p=await t.parseNameAtAsync(a);if(p){this.CS=p.value,a=p.end+1;break}throw new Error("Can't parse /CS property name")}else if(g===valueTypes.ARRAY){const p=await t.getArrayBoundsAtAsync(a);if(p){a=p.end+1;break}throw new Error("Can't parse /CS value dictionary")}throw new Error(`Unsupported /CS property value type: ${g}`);case"/I":case"/K":a=await this.parseBoolPropAsync(f,t,a);break;default:a=await t.skipToNextNameAsync(a,o-1);break}}}class XFormStream extends PdfStream{Subtype="/Form";FormType=1;BBox;Matrix=[1,0,0,1,0,0];Resources;Metadata;LastModified;StructParent;StructParents;Measure;Group;get matrix(){const e=new l;if(this.Matrix){const[t,s,r,o,a,f]=this.Matrix;e.set(t,s,0,r,o,0,a,f,1)}return e}set matrix(e){e&&(this.Matrix=[...e.toFloatShortArray()])}get bBox(){return{ll:new u(this.BBox[0],this.BBox[1]),lr:new u(this.BBox[2],this.BBox[1]),ur:new u(this.BBox[2],this.BBox[3]),ul:new u(this.BBox[0],this.BBox[3])}}get transformedBBox(){const e=new l;if(this.Matrix){const[a,f,m,g,p,y]=this.Matrix;e.set(a,f,0,m,g,0,p,y,1)}const t=new u(this.BBox[0],this.BBox[1]),s=new u(this.BBox[2],this.BBox[1]),r=new u(this.BBox[2],this.BBox[3]),o=new u(this.BBox[0],this.BBox[3]);return{ll:u.applyMat3(t,e),lr:u.applyMat3(s,e),ur:u.applyMat3(r,e),ul:u.applyMat3(o,e)}}get edited(){return this._edited||this.Resources.edited}constructor(){super(streamTypes.FORM_XOBJECT)}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new XFormStream;return await t.parsePropsAsync(e),{value:t.initProxy(),start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.Subtype&&r.push(...s.encode("/Subtype "),...s.encode(this.Subtype)),this.FormType&&r.push(...s.encode("/FormType "),...s.encode(" "+this.FormType)),this.BBox&&r.push(...s.encode("/BBox "),...this.encodePrimitiveArray(this.BBox,s)),this.Matrix&&r.push(...s.encode("/Matrix "),...this.encodePrimitiveArray(this.Matrix,s)),this.Resources&&r.push(...s.encode("/Resources "),...this.Resources.toArray(e)),this.Metadata&&r.push(...s.encode("/Metadata "),...this.Metadata.toArray(e)),this.LastModified&&r.push(...s.encode("/LastModified "),...this.LastModified.toArray(e)),this.StructParent&&r.push(...s.encode("/StructParent "),...s.encode(" "+this.StructParent)),this.StructParents&&r.push(...s.encode("/StructParents "),...s.encode(" "+this.StructParents)),this.Measure&&r.push(...s.encode("/Measure "),...this.Measure.toArray(e)),this.Group&&r.push(...s.encode("/Group "),...this.Group.toArray(e));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=await t.getDictBoundsAtAsync(r);let a=await t.skipToNextNameAsync(o.contentStart,o.contentEnd),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/Subtype":const g=await t.parseNameAtAsync(a);if(g){if(this.Subtype&&this.Subtype!==g.value)throw new Error(`Invalid dict subtype: '${g.value}' instead of '${this.Subtype}'`);a=g.end+1}else throw new Error("Can't parse /Subtype property value");break;case"/FormType":const p=await t.parseNumberAtAsync(a,!1);if(p){if(p.value!==1)throw new Error(`Ivalid form type: '${p.value}' instead of '1'`);a=p.end+1}else throw new Error("Can't parse /FormType property value");break;case"/BBox":case"/Matrix":a=await this.parseNumberArrayPropAsync(f,t,a,!0);break;case"/LastModified":a=await this.parseDatePropAsync(f,t,a,e.cryptInfo);break;case"/Metadata":a=await this.parseRefPropAsync(f,t,a);break;case"/StructParent":case"/StructParents":a=await this.parseNumberPropAsync(f,t,a,!1);break;case"/Resources":const y=await t.getValueTypeAtAsync(a);if(y===valueTypes.REF){const w=await ObjectId.parseRefAsync(t,a);if(w&&e.parseInfoGetterAsync){const _=await e.parseInfoGetterAsync(w.value.id);if(_){const E=await ResourceDict.parseAsync(_,{xform:XFormStream.parseAsync,image:ImageStream.parseAsync});if(E){this.Resources=E.value,a=E.end+1;break}}}throw new Error("Can't parse /Resources value reference")}else if(y===valueTypes.DICTIONARY){const w=await t.getDictBoundsAtAsync(a);if(w){if(w.contentStart){const _=await ResourceDict.parseAsync({parser:t,bounds:w,parseInfoGetterAsync:e.parseInfoGetterAsync},{xform:XFormStream.parseAsync,image:ImageStream.parseAsync});if(_)this.Resources=_.value;else throw new Error("Can't parse /Resources value dictionary")}a=w.end+1;break}throw new Error("Can't parse /Resources dictionary bounds")}throw new Error(`Unsupported /Resources property value type: ${y}`);case"/Measure":const C=await t.getValueTypeAtAsync(a);if(C===valueTypes.REF){const w=await ObjectId.parseRefAsync(t,a);if(w&&e.parseInfoGetterAsync){const _=await e.parseInfoGetterAsync(w.value.id);if(_){const E=await MeasureDict.parseAsync(_);if(E){this.Measure=E.value,a=E.end+1;break}}}throw new Error("Can't parse /Measure value reference")}else if(C===valueTypes.DICTIONARY){const w=await t.getDictBoundsAtAsync(a);if(w){const _=await MeasureDict.parseAsync({parser:t,bounds:w,cryptInfo:e.cryptInfo});if(_){this.Measure=_.value,a=_.end+1;break}}throw new Error("Can't parse /Measure value dictionary")}throw new Error(`Unsupported /Measure property value type: ${C}`);case"/Group":const A=await t.getValueTypeAtAsync(a);if(A===valueTypes.REF){const w=await ObjectId.parseRefAsync(t,a);if(w&&e.parseInfoGetterAsync){const _=await e.parseInfoGetterAsync(w.value.id);if(_){const E=await TransparencyGroupDict.parseAsync(_);if(E){this.Group=E.value,a=E.end+1;break}}}throw new Error("Can't parse /Group value reference")}else if(A===valueTypes.DICTIONARY){const w=await t.getDictBoundsAtAsync(a);if(w){const _=await TransparencyGroupDict.parseAsync({parser:t,bounds:w,cryptInfo:e.cryptInfo});if(_){this.Group=_.value,a=_.end+1;break}}throw new Error("Can't parse /Group value dictionary")}throw new Error(`Unsupported /Group property value type: ${A}`);case"/OC":case"/OPI":default:a=await t.skipToNextNameAsync(a,o.contentEnd);break}if(!this.BBox)throw new Error("Not all required properties parsed")}initProxy(){return super.initProxy()}getProxy(){return super.getProxy()}}class TextData{width;height;rect;relativeRect;lines;static async buildAsync(e,t){let s;if(e){const r=document.createElement("p");r.style.color="black",r.style.fontSize=t.fontSize+"px",r.style.fontFamily="arial",r.style.fontWeight="normal",r.style.fontStyle="normal",r.style.lineHeight="normal",r.style.overflowWrap="normal",r.style.textAlign=t.textAlign,r.style.textDecoration="none",r.style.verticalAlign="top",r.style.whiteSpace="pre-wrap",r.style.wordBreak="normal",r.style.position="fixed",r.style.left="0",r.style.top="0",r.style.margin="0",r.style.padding="0",r.style.maxWidth=t.maxWidth.toFixed()+"px",r.style.visibility="hidden",r.style.transform="scale(0.1)",r.style.transformOrigin="top left",document.body.append(r);const o=e.split(/([- \n\r])/u),a=[];let f="",m=0;for(let v=0;v<o.length;v++){const k=o[v];r.textContent+=k,await DomUtils.runEmptyTimeout();const R=r.offsetHeight;m||=R,R>m?(a.push(f),f=k,m=R):f+=k}a.push(f),r.innerHTML="";const g=[];for(const v of a){const k=document.createElement("span");k.style.position="relative",k.textContent=v,g.push(k),r.append(k)}await DomUtils.runEmptyTimeout();const p=r.offsetWidth,y=r.offsetHeight;let C;switch(t.pivotPoint){case"top-left":C=new u(0,y);break;case"bottom-margin":C=new u(p/2,t.strokeWidth);break;case"center":default:C=new u(p/2,y/2);break}const A=[];for(let v=0;v<a.length;v++){const k=g[v],R=k.offsetLeft,L=k.offsetTop,B=k.offsetWidth,X=k.offsetHeight,U=new u(R,y-(L+X)),M=new u(R+B,y-L),F=[U.x,U.y,M.x,M.y],$=u.subtract(U,C),ee=u.subtract(M,C),te=[$.x,$.y,ee.x,ee.y];A.push({text:a[v],rect:F,relativeRect:te})}const w=[0,0,p,y],_=[0-C.x,0-C.y,p-C.x,y-C.y],E={width:p,height:y,rect:w,relativeRect:_,lines:A};r.remove(),s=E}else s=null;return s}}const SELECTION_STROKE_WIDTH=20,BEZIER_CONSTANT=.551915,LINE_END_MULTIPLIER=3,LINE_END_MIN_SIZE=10;function buildSquigglyLine(c,e,t){if(!c||!e)return null;if(isNaN(t)||t<=0)throw new Error(`Invalid maximal squiggle size ${t}`);const s=u.subtract(c,e).getMagnitude();if(!s)return null;const r=[c.clone()],o=new u,a=new u(s,0),f=l.from4Vec2(o,a,c,e),m=Math.ceil(s/t),g=s/m,p=g/2;for(let y=0;y<m;y++)r.push(new u(y*g+p,-p).applyMat3(f).truncate(2),new u((y+1)*g,0).applyMat3(f).truncate(2));return r}function calcPdfBBoxToRectMatrices(c,e,t){const s=new l;if(t){const[w,_,E,v,k,R]=t;s.set(w,_,0,E,v,0,k,R,1)}const r=new u(c[0],c[1]),o=new u(c[2],c[1]),a=new u(c[2],c[3]),f=new u(c[0],c[3]),{min:m,max:g}=u.minMax(u.applyMat3(r,s),u.applyMat3(o,s),u.applyMat3(a,s),u.applyMat3(f,s)),p=new u(e[0],e[1]),y=new u(e[2],e[3]),C=l.from4Vec2(m,g,p,y),A=l.fromMat3(s).multiply(C);return{matAP:s,matA:C,matAA:A}}class TextState{static defaultParams={matrix:new l,lineMatrix:new l,leading:12*-1.2,renderMode:textRenderModes.FILL,fontFamily:"helvetica, arial, sans-serif",fontSize:"10px",lineHeight:"1",letterSpacing:"normal",wordSpacing:"normal",horizontalScale:1,verticalAlign:"0",knockOut:!0};matrix;lineMatrix;customFontName;leading;renderMode;fontFamily;fontSize;lineHeight;letterSpacing;wordSpacing;horizontalScale;verticalAlign;knockOut;constructor(e){Object.assign(this,TextState.defaultParams,e)}clone(e){const t=new TextState(this);return e?Object.assign(t,e):t}setWordSpacing(e){this.wordSpacing=e?e+"px":"normal"}setLetterSpacing(e){this.letterSpacing=e?e+"px":"normal"}setScale(e){this.horizontalScale=e?e/100:1}setLeading(e){e?(this.leading=e,this.lineHeight=Math.abs(this.leading)+"px"):(this.leading=parseInt(this.fontSize,10)*-1.2,this.lineHeight="1")}setFontSize(e){this.fontSize=(e||12)+"px"}setVerticalAlign(e){this.verticalAlign=e?e/10+"em":"0"}moveAlongPx(e){const t=e,s=new l().set(1,0,0,0,1,0,t,0,1);this.matrix=s.multiply(this.matrix)}moveAlongPdfUnits(e){const t=-e/1e3*parseInt(this.fontSize,10),s=new l().set(1,0,0,0,1,0,t,0,1);this.matrix=s.multiply(this.matrix)}nextLine(e,t){e??=0,t??=this.leading||parseInt(this.fontSize,10)*-1.2;const s=new l().set(1,0,0,0,1,0,e,t,1);this.lineMatrix=s.multiply(this.lineMatrix),this.matrix=this.lineMatrix.clone()}}class GraphicsState{static defaultParams={matrix:new l,textState:new TextState,strokeColorSpace:"rgb",strokeAlpha:1,strokeColor:new z,fillColorSpace:"rgb",fillAlpha:1,fillColor:new z,strokeWidth:1,strokeMiterLimit:10,strokeLineCap:"square",strokeLineJoin:"miter"};matrix;textState;clipPath;strokeColorSpace;strokeAlpha;strokeColor;get stroke(){const{x:e,y:t,z:s}=this.strokeColor,r=this.strokeAlpha;return`rgba(${e},${t},${s},${r})`}fillColorSpace;fillAlpha;fillColor;get fill(){const{x:e,y:t,z:s}=this.fillColor,r=this.fillAlpha;return`rgba(${e},${t},${s},${r})`}strokeWidth;strokeMiterLimit;strokeLineCap;strokeLineJoin;strokeDashArray;strokeDashOffset;mixBlendMode;constructor(e){Object.assign(this,GraphicsState.defaultParams,e),this.matrix=this.matrix?.clone(),this.textState=this.textState?.clone(),this.strokeColor=this.strokeColor?.clone(),this.fillColor=this.fillColor?.clone()}clone(e){const t=new GraphicsState(this);return e?Object.assign(t,e):t}setColor(e,...t){let s,r,o;switch(t.length){case 1:s=r=o=t[0]*255;break;case 3:s=t[0]*255,r=t[1]*255,o=t[2]*255;break;case 4:const[a,f,m,g]=t;s=255*(1-a)*(1-g),r=255*(1-f)*(1-g),o=255*(1-m)*(1-g);break}e==="stroke"?this.strokeColor.set(s,r,o):this.fillColor.set(s,r,o)}}class AppearanceStreamRenderer{_stream;_objectName;_clipPaths=[];_selectionCopies=[];_graphicsStates=[];get state(){return this._graphicsStates[this._graphicsStates.length-1]}constructor(e,t,s){if(!e)throw new Error("Stream is not defined");this._stream=e,this._objectName=s;const{matAA:r}=calcPdfBBoxToRectMatrices(e.BBox,t,e.Matrix),[o,a,f,m]=e.BBox,g=new u(o,a).applyMat3(r),p=new u(f,a).applyMat3(r),y=new u(f,m).applyMat3(r),C=new u(o,m).applyMat3(r),A=document.createElementNS("http://www.w3.org/2000/svg","clipPath");A.id=`clip0_${s}`,A.innerHTML=`<path d="M${g.x},${g.y} L${p.x},${p.y} L${y.x},${y.y} L${C.x},${C.y} z"/>`,this._clipPaths.push(A),this._graphicsStates.push(new GraphicsState({matrix:r,clipPath:A}))}static async parseNextCommandAsync(e,t){const s=[];let r;e:for(;!r;){const o=await e.getValueTypeAtAsync(t,!0);switch(o){case valueTypes.NUMBER:const a=await e.parseNumberAtAsync(t,!0);s.push(a.value),t=a.end+1;break;case valueTypes.NAME:const f=await e.parseNameAtAsync(t,!0);s.push(f.value),t=f.end+1;break;case valueTypes.ARRAY:const m=await e.getArrayBoundsAtAsync(t);let g=m.start+1;for(;g<m.end-1&&g!==-1;){const A=await e.getValueTypeAtAsync(g,!0);switch(A){case valueTypes.STRING_LITERAL:const w=await LiteralString.parseAsync(e,g);s.push(w.value.bytes),g=w.end+1;break;case valueTypes.NUMBER:const _=await e.parseNumberAtAsync(g,!0);s.push(_.value),g=_.end+1;break;default:console.log(`Unsupported value type in AP stream parameter array: ${A}`),g=await e.findDelimiterIndexAsync(!0,g+1);break}}t=m.end+1;break;case valueTypes.STRING_LITERAL:const p=await LiteralString.parseAsync(e,t);s.push(p.value.literal),t=p.end+1;break;case valueTypes.STRING_HEX:const y=await HexString.parseAsync(e,t);s.push(y.value.hex),t=y.end+1;break;case valueTypes.UNKNOWN:const C=await e.parseStringAtAsync(t);r=C.value,t=C.end+1;break e;default:throw new Error(`Invalid appearance stream value type: ${o}`)}}return{nextIndex:t,parameters:s,operator:r}}async renderAsync(){return this.reset(),{elements:await this.drawStreamAsync(this._stream),clipPaths:this._clipPaths.slice(),pickHelpers:this._selectionCopies.slice()}}reset(){this._graphicsStates.length=1,this._clipPaths.length=1,this._selectionCopies.length=0}pushState(e){const s=this._graphicsStates[this._graphicsStates.length-1].clone(e);this._graphicsStates.push(s)}popState(){return this._graphicsStates.length===1?null:this._graphicsStates.pop()}pushClipPath(e,t){const s=this._clipPaths.length-1,r=document.createElementNS("http://www.w3.org/2000/svg","clipPath");r.setAttribute("clip-rule",t?"nonzero":"evenodd"),r.setAttribute("clip-path",`url(#${this._clipPaths[s]})`),r.id=`clip${s+1}_${this._objectName}`,r.append(e),this._clipPaths.push(r),this.state.clipPath=r}tryApplyingStateOperator(e,t){switch(e){case"q":this.pushState();break;case"Q":this.popState();break;case"gs":const s=this._stream.Resources.getGraphicsState(`/ExtGState${t[0]}`);if(!s)throw new Error("External state specified in appearance stream not found");const r=s.toParams();Object.assign(this.state,r);break;case"cm":const[o,a,f,m,g,p]=t,y=new l().set(o,a,0,f,m,0,g,p,1);this.state.matrix=y.multiply(this.state.matrix);break;case"w":this.state.strokeWidth=+t[0]||1;break;case"J":switch(t[0]){case lineCapStyles.ROUND:this.state.strokeLineCap="round";break;case lineCapStyles.SQUARE:this.state.strokeLineCap="square";break;case lineCapStyles.BUTT:default:this.state.strokeLineCap="butt";break}break;case"j":switch(t[0]){case lineJoinStyles.BEVEL:this.state.strokeLineJoin="bevel";break;case lineJoinStyles.ROUND:this.state.strokeLineJoin="round";break;case lineJoinStyles.MITER:default:this.state.strokeLineJoin="miter";break}break;case"M":this.state.strokeMiterLimit=+t[0]||10;break;case"d":let C=3,A=0,w=0;t.length===3?(C=+t[0],A=+t[1],w=+t[2]):t.length===2?(C=+t[0],w=+t[1]):t.length===1&&(w=+t[0]),this.state.strokeDashArray=`${C} ${A}`,this.state.strokeDashOffset=w;break;case"CS":switch(t[0]){case colorSpaces.GRAYSCALE:this.state.strokeColorSpace="grayscale";break;case colorSpaces.RGB:this.state.strokeColorSpace="rgb";break;case colorSpaces.CMYK:this.state.strokeColorSpace="cmyk";break;default:throw new Error("Unsupported color space in appearance stream")}break;case"cs":switch(t[0]){case colorSpaces.GRAYSCALE:this.state.fillColorSpace="grayscale";break;case colorSpaces.RGB:this.state.fillColorSpace="rgb";break;case colorSpaces.CMYK:this.state.fillColorSpace="cmyk";break;default:throw new Error("Unsupported color space in appearance stream")}break;case"G":this.state.strokeColorSpace="grayscale",this.state.setColor("stroke",...t);break;case"g":this.state.fillColorSpace="grayscale",this.state.setColor("fill",...t);break;case"RG":this.state.strokeColorSpace="rgb",this.state.setColor("stroke",...t);break;case"rg":this.state.fillColorSpace="rgb",this.state.setColor("fill",...t);break;case"K":this.state.strokeColorSpace="cmyk",this.state.setColor("stroke",...t);break;case"k":this.state.fillColorSpace="cmyk",this.state.setColor("fill",...t);break;case"SC":this.state.setColor("stroke",...t);break;case"cs":this.state.setColor("fill",...t);break;case"ri":case"i":break;case"Tc":this.state.textState.setLetterSpacing(+t[0]);break;case"Tw":this.state.textState.setWordSpacing(+t[0]);break;case"Tz":this.state.textState.setScale(+t[0]);break;case"TL":this.state.textState.setLeading(+t[0]);break;case"Tf":this.state.textState.customFontName=t[0]||"",this.state.textState.setFontSize(+t[1]);break;case"Tr":switch(t[0]){case 0:default:this.state.textState.renderMode=textRenderModes.FILL;break;case 1:this.state.textState.renderMode=textRenderModes.STROKE;break;case 2:this.state.textState.renderMode=textRenderModes.FILL_STROKE;break;case 3:this.state.textState.renderMode=textRenderModes.INVISIBLE;break;case 4:this.state.textState.renderMode=textRenderModes.FILL_USE_AS_CLIP;break;case 5:this.state.textState.renderMode=textRenderModes.STROKE_USE_AS_CLIP;break;case 6:this.state.textState.renderMode=textRenderModes.FILL_STROKE_USE_AS_CLIP;break;case 7:this.state.textState.renderMode=textRenderModes.USE_AS_CLIP;break}break;case"Ts":this.state.textState.setVerticalAlign(+t[0]);break;case"Td":if(t.length>1){const[_,E]=t;this.state.textState.nextLine(_,E)}break;case"TD":if(t.length>1){const[_,E]=t;this.state.textState.setLeading(-E),this.state.textState.nextLine(_,E)}break;case"Tm":if(t.length>5){const[_,E,v,k,R,L]=t,B=new l().set(_,E,0,v,k,0,R,L,1);this.state.textState.matrix=B,this.state.textState.lineMatrix=B.clone()}break;case"T*":this.state.textState.nextLine();break;default:return!1}return!0}setTextStateFont(e){const t=this.state.textState;if(!e){t.fontFamily="arial, sans-serif";return}let s;e.isMonospace?s="courier, monospace":e.isScript?s="cursive":e.isSerif?s="times new roman, serif":s="arial, sans-serif";const r=e.BaseFont?.substring(1).toLowerCase();if(!r){t.fontFamily=s;return}r.includes("times")?t.fontFamily="times new roman, serif":r.includes("arial")?t.fontFamily="arial, sans-serif":r.includes("courier")?t.fontFamily="courier new, monospace":t.fontFamily=`${r}, ${s}`}decodeTextParam(e,t){return e instanceof Uint8Array?t.decodeText(e):e+""}createSvgElement(){return document.createElementNS("http://www.w3.org/2000/svg","g")}drawPath(e,t,s,r=!1,o=!1){r&&e[e.length-1]!=="Z"&&(e+=" Z");const a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("transform",`matrix(${this.state.matrix.toFloatShortArray().join(" ")})`),a.setAttribute("d",e),s?(a.setAttribute("fill",this.state.fill),a.setAttribute("fill-rule",o?"evenodd":"nonzero")):a.setAttribute("fill","none"),t?(a.setAttribute("stroke",this.state.stroke),a.setAttribute("stroke-width",this.state.strokeWidth+""),a.setAttribute("stroke-miterlimit",this.state.strokeMiterLimit+""),a.setAttribute("stroke-linecap",this.state.strokeLineCap),a.setAttribute("stroke-linejoin",this.state.strokeLineJoin),this.state.strokeDashArray&&a.setAttribute("stroke-dasharray",this.state.strokeDashArray),this.state.strokeDashOffset&&a.setAttribute("stroke-dashoffset",this.state.strokeDashOffset+"")):a.setAttribute("stroke","none");const f=this.createSvgElement();f.setAttribute("clip-path",`url(#${this._clipPaths[this._clipPaths.length-1].id})`),f.append(a);const m=this.createSvgElement();m.classList.add("annotation-pick-helper");const g=a.cloneNode(!0),p=!t||this.state.strokeWidth<SELECTION_STROKE_WIDTH?SELECTION_STROKE_WIDTH:this.state.strokeWidth;return g.setAttribute("stroke-width",p+""),g.setAttribute("stroke","transparent"),g.setAttribute("fill",s?"transparent":"none"),m.append(g),this._selectionCopies.push(g),{element:f,blendMode:this.state.mixBlendMode||"normal"}}async drawImageAsync(e){const t=await e.getImageUrlAsync();if(!t)throw new Error("Can't get image url from external image stream");const s=document.createElementNS("http://www.w3.org/2000/svg","image");s.onerror=g=>{console.log(`Loading external image stream failed: ${g}`)},s.setAttribute("href",t),s.setAttribute("width",e.Width+""),s.setAttribute("height",e.Height+"");const o=new l().applyTranslation(-e.Width/2,-e.Height/2).applyScaling(1,-1).applyTranslation(e.Width/2,e.Height/2).applyScaling(1/e.Width,1/e.Height).multiply(this.state.matrix).toFloatShortArray().join(" ");s.setAttribute("transform",`matrix(${o})`);const a=this.createSvgElement();a.setAttribute("clip-path",`url(#${this._clipPaths[this._clipPaths.length-1].id})`),a.append(s);const f=this.createSvgElement();f.classList.add("annotation-pick-helper");const m=document.createElementNS("http://www.w3.org/2000/svg","rect");return m.setAttribute("width",e.Width+""),m.setAttribute("height",e.Height+""),m.setAttribute("fill","transparent"),m.setAttribute("transform",`matrix(${o})`),f.append(m),this._selectionCopies.push(m),a}async drawTextAsync(e,t){const s=this.state.textState,r=t.getFont(s.customFontName),o=this.decodeTextParam(e,r);if(this.setTextStateFont(r),!o)return console.log(`Can't decode the stream text parameter: '${e}'`),null;const a=document.createElementNS("http://www.w3.org/2000/svg","text");a.setAttribute("transform",`matrix(${new l().applyScaling(1,-1).applyScaling(s.horizontalScale,1).multiply(l.multiply(s.matrix,this.state.matrix)).toFloatShortArray().join(" ")})`),a.setAttribute("x","0"),a.setAttribute("y","0"),a.textContent=o,a.style.fontFamily=s.fontFamily,a.style.fontSize=s.fontSize,a.style.lineHeight=s.lineHeight,a.style.letterSpacing=s.letterSpacing,a.style.wordSpacing=s.wordSpacing,a.style.verticalAlign=s.verticalAlign,a.style.whiteSpace="pre",a.style.userSelect="none";let f,m,g;switch(s.renderMode){case textRenderModes.FILL:default:f=this.state.fill;break;case textRenderModes.STROKE:m=!0;break;case textRenderModes.FILL_STROKE:f=this.state.fill,m=!0;break;case textRenderModes.INVISIBLE:break;case textRenderModes.FILL_USE_AS_CLIP:f=this.state.fill,g=!0;break;case textRenderModes.STROKE_USE_AS_CLIP:m=!0,g=!0;break;case textRenderModes.FILL_STROKE_USE_AS_CLIP:f=this.state.fill,m=!0,g=!0;break;case textRenderModes.USE_AS_CLIP:f="transparent",g=!0;break}a.style.fill=f||"none",m?(a.style.stroke=this.state.stroke,a.style.strokeWidth=this.state.strokeWidth+"",a.style.strokeMiterlimit=this.state.strokeMiterLimit+"",a.style.strokeLinecap=this.state.strokeLineCap,a.style.strokeLinejoin=this.state.strokeLineJoin,this.state.strokeDashArray&&(a.style.strokeDasharray=this.state.strokeDashArray),this.state.strokeDashOffset&&(a.style.strokeDashoffset=this.state.strokeDashOffset+"")):a.style.stroke="none",g&&this.pushClipPath(a.cloneNode(),!0),await new Promise((A,w)=>{const _=document.createElementNS("http://www.w3.org/2000/svg","svg");_.classList.add("annotation-content-element"),_.setAttribute("viewBox","0 0 100 100"),_.style.width="100px",_.style.height="100px",_.style.zIndex="-99",_.style.position="fixed",_.style.left="0",_.style.top="0",_.append(a),document.body.append(_),setTimeout(()=>{const E=a.getBBox().width;this.state.textState.moveAlongPx(E),a.remove(),_.remove(),A(!0)},0)});const p=this.createSvgElement();p.classList.add("annotation-pick-helper");const y=a.cloneNode(!0),C=!m||this.state.strokeWidth<SELECTION_STROKE_WIDTH?SELECTION_STROKE_WIDTH:this.state.strokeWidth;return y.style.strokeWidth=C+"",y.style.stroke="transparent",y.style.fill=f?"transparent":"none",p.append(y),this._selectionCopies.push(y),{element:a,blendMode:this.state.mixBlendMode||"normal"}}async drawTextGroupAsync(e,t){const s=[],r=this.state.textState;let o=0;for(;o!==-1;){const{nextIndex:a,parameters:f,operator:m}=await AppearanceStreamRenderer.parseNextCommandAsync(e,o);switch(o=await e.skipEmptyAsync(a),m){case"Tj":s.push(await this.drawTextAsync(f[0],t));break;case"'":r.nextLine(),s.push(await this.drawTextAsync(f[0],t));break;case'"':const[g,p,y]=f;r.setWordSpacing(+g),r.setLetterSpacing(+p),r.nextLine(),s.push(await this.drawTextAsync(y,t));break;case"TJ":for(const A of f)A instanceof Uint8Array?s.push(await this.drawTextAsync(A,t)):typeof A=="number"&&+A.toFixed(0)&&r.moveAlongPdfUnits(A);break;default:if(!this.tryApplyingStateOperator(m,f))throw new Error(`Unsupported appearance stream operator: ${m}`)}}return s.filter(a=>a)}async drawStreamAsync(e){const t=await e.getStreamDataParserAsync(),s=[],r=new u;let o,a="",f=0;for(;f!==-1;){const{nextIndex:m,parameters:g,operator:p}=await AppearanceStreamRenderer.parseNextCommandAsync(t,f);switch(f=await t.skipEmptyAsync(m+1),p){case"m":const y=new u(+g[0],+g[1]);a+=` M ${y.x} ${y.y}`,r.setFromVec2(y);break;case"l":const C=new u(+g[0],+g[1]);a+=` L ${C.x} ${C.y}`,r.setFromVec2(C);break;case"re":const A=new u(+g[0],+g[1]),w=new u(+g[2],+g[3]).add(A);a+=` M ${A.x} ${A.y} L ${w.x} ${A.y} L ${w.x} ${w.y} L ${A.x} ${w.y} L ${A.x} ${A.y}`,r.setFromVec2(A);break;case"c":const _=new u(+g[0],+g[1]),E=new u(+g[2],+g[3]),v=new u(+g[4],+g[5]);a+=` C ${_.x} ${_.y}, ${E.x} ${E.y}, ${v.x} ${v.y}`,r.setFromVec2(v);break;case"v":const k=new u(+g[0],+g[1]),R=new u(+g[2],+g[3]);a+=` C ${r.x} ${r.y}, ${k.x} ${k.y}, ${R.x} ${R.y}`,r.setFromVec2(R);break;case"y":const L=new u(+g[0],+g[1]),B=new u(+g[2],+g[3]);a+=` C ${L.x} ${L.y}, ${B.x} ${B.y}, ${B.x} ${B.y}`,r.setFromVec2(B);break;case"h":a+=" Z";break;case"S":s.push(this.drawPath(a,!0,!1)),a="";break;case"s":s.push(this.drawPath(a,!0,!1,!0)),a="";break;case"F":case"f":s.push(this.drawPath(a,!1,!0,!0)),a="";break;case"F*":case"f*":s.push(this.drawPath(a,!1,!0,!0,!0)),a="";break;case"B":s.push(this.drawPath(a,!0,!0,!1,!1)),a="";break;case"B*":s.push(this.drawPath(a,!0,!0,!1,!0)),a="";break;case"b":s.push(this.drawPath(a,!0,!0,!0,!1)),a="";break;case"b*":s.push(this.drawPath(a,!0,!0,!0,!0)),a="";break;case"n":if(o==="W"||o==="W*"){a[a.length-1]!=="Z"&&(a+=" Z");const F=document.createElementNS("http://www.w3.org/2000/svg","path");F.setAttribute("d",a),this.pushClipPath(F,o==="W")}a="";break;case"W":break;case"W*":break;case"BT":const X=await t.findSubarrayIndexAsync(keywordCodes.AP_STREAM_TEXT_END,{closedOnly:!0,minIndex:f});if(X){const F=await t.getSubParserAsync(f,X.start-1),$=await this.drawTextGroupAsync(F,e.Resources);s.push(...$),f=await t.skipEmptyAsync(X.end+1);break}throw new Error("Can't find the appearance stream text object end");case"Do":const U=e.Resources.getXObject(`/XObject${g[0]}`);if(!U)throw new Error(`External object not found in the appearance stream resources: ${g[0]}`);if(U instanceof XFormStream){const[F,$,ee,te,he,re]=U.Matrix,pe=new l().set(F,$,0,ee,te,0,he,re,1);this.pushState(),this.state.matrix=pe.multiply(this.state.matrix);const le=await this.drawStreamAsync(U);s.push(...le),this.popState()}else if(U instanceof ImageStream){const F=await this.drawImageAsync(U);s.push({element:F,blendMode:this.state.mixBlendMode||"normal"})}else throw new Error(`Unsupported appearance stream external object: ${g[0]}`);break;default:if(!this.tryApplyingStateOperator(p,g))throw new Error(`Unsupported appearance stream operator: ${p}`)}o=p}return s}}class BorderStyleDict extends PdfDict{W=1;S=borderStyles.SOLID;D=[3,0];constructor(){super(dictTypes.BORDER_STYLE)}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new BorderStyleDict;return await t.parsePropsAsync(e),{value:t,start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.W&&r.push(...s.encode("/W "),...s.encode(" "+this.W)),this.S&&r.push(...s.encode("/S "),...s.encode(this.S)),this.D&&r.push(...s.encode("/D "),...this.encodePrimitiveArray(this.D,s));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/W":a=await this.parseNumberPropAsync(f,t,a,!0);break;case"/S":const g=await t.parseNameAtAsync(a,!0);if(g&&Object.values(borderStyles).includes(g.value))this.S=g.value,a=g.end+1;else throw new Error("Can't parse /S property value");break;case"/D":const p=await t.parseNumberArrayAtAsync(a,!0);if(p)this.D=[p.value[0]??3,p.value[1]??0],a=p.end+1;else throw new Error("Can't parse /D property value");break;default:a=await t.skipToNextNameAsync(a,o-1);break}}}class AppearanceDict extends PdfDict{N;R;D;_streamsMap=new Map;constructor(){super(null)}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new AppearanceDict;return await t.parsePropsAsync(e),{value:t.initProxy(),start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}getStream(e){return this._streamsMap.get(e)}*getStreams(){for(const e of this._streamsMap)yield e[1]}setStream(e,t){this._streamsMap.set(e,t),this._edited=!0}clearStreams(){this._streamsMap.clear(),this._edited=!0}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[],o=this._streamsMap.get("/N");o?(r.push(...s.encode("/N ")),r.push(...ObjectId.fromRef(o.ref).toArray(e))):this.N&&(r.push(...s.encode("/N ")),this.N instanceof ObjectMapDict?r.push(...this.N.toArray(e)):r.push(...this.N.toArray(e)));const a=this._streamsMap.get("/R");a?(r.push(...s.encode("/R ")),r.push(...ObjectId.fromRef(a.ref).toArray(e))):this.R&&(r.push(...s.encode("/R ")),this.R instanceof ObjectMapDict?r.push(...this.R.toArray(e)):r.push(...this.R.toArray(e)));const f=this._streamsMap.get("/D");f?(r.push(...s.encode("/D ")),r.push(...ObjectId.fromRef(f.ref).toArray(e))):this.D&&(r.push(...s.encode("/D ")),this.D instanceof ObjectMapDict?r.push(...this.D.toArray(e)):r.push(...this.D.toArray(e)));const m=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(m)}async fillStreamsMapAsync(e){this._streamsMap.clear();for(const t of["N","R","D"])if(this[t])if(this[t]instanceof ObjectId){const s=await e(this[t].id);if(!s)continue;const r=await XFormStream.parseAsync(s);if(!r)continue;r&&this._streamsMap.set(`/${t}`,r.value)}else for(const[s,r]of this[t].getProps()){const o=await e(r.id);if(!o)continue;const a=await XFormStream.parseAsync(o);a&&this._streamsMap.set(`/${t}${s}`,a.value)}}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/N":const g=await t.getValueTypeAtAsync(a);if(g===valueTypes.REF){const C=await ObjectId.parseRefAsync(t,a);if(C){this.N=C.value,a=C.end+1;break}}else if(g===valueTypes.DICTIONARY){const C=await t.getDictBoundsAtAsync(a);if(C){const A=await ObjectMapDict.parseAsync({parser:t,bounds:C});if(A){this.N=A.value,a=A.end+1;break}}}else throw new Error(`Unsupported /N property value type: ${g}`);throw new Error("Can't parse /N property value");case"/R":const p=await t.getValueTypeAtAsync(a);if(p===valueTypes.REF){const C=await ObjectId.parseRefAsync(t,a);if(C){this.R=C.value,a=C.end+1;break}}else if(p===valueTypes.DICTIONARY){const C=await t.getDictBoundsAtAsync(a);if(C){const A=await ObjectMapDict.parseAsync({parser:t,bounds:C});if(A){this.R=A.value,a=A.end+1;break}}}else throw new Error(`Unsupported /R property value type: ${p}`);throw new Error("Can't parse /R property value");case"/D":const y=await t.getValueTypeAtAsync(a);if(y===valueTypes.REF){const C=await ObjectId.parseRefAsync(t,a);if(C){this.D=C.value,a=C.end+1;break}}else if(y===valueTypes.DICTIONARY){const C=await t.getDictBoundsAtAsync(a);if(C){const A=await ObjectMapDict.parseAsync({parser:t,bounds:C});if(A){this.D=A.value,a=A.end+1;break}}}else throw new Error(`Unsupported /D property value type: ${y}`);throw new Error("Can't parse /D property value");default:a=await t.skipToNextNameAsync(a,o-1);break}if(!this.N)throw new Error("Not all required properties parsed");e.parseInfoGetterAsync&&await this.fillStreamsMapAsync(e.parseInfoGetterAsync)}initProxy(){return super.initProxy()}getProxy(){return super.getProxy()}}class BorderEffectDict extends PdfDict{S=borderEffects.NONE;L=0;constructor(){super(null)}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new BorderEffectDict;return await t.parsePropsAsync(e),{value:t,start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.S&&r.push(...s.encode("/S "),...s.encode(this.S)),this.L&&r.push(...s.encode("/L "),...s.encode(" "+this.L));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/S":const g=await t.parseNameAtAsync(a,!0);if(g&&Object.values(borderEffects).includes(g.value))this.S=g.value,a=g.end+1;else throw new Error("Can't parse /S property value");break;case"/L":a=await this.parseNumberPropAsync(f,t,a,!0);break;default:a=await t.skipToNextNameAsync(a,o-1);break}}}class BorderArray{hCornerR;vCornerR;width;dash;gap;constructor(e,t,s,r,o){this.hCornerR=e??0,this.vCornerR=t??0,this.width=s??1,this.dash=r??3,this.gap=o??0}static async parseAsync(e,t,s=!0){if(s&&(t=await e.findNonSpaceIndexAsync(!0,t)),t<0||t>e.maxIndex||!await e.isCodeAtAsync(t,codes.L_BRACKET))return null;const r=await e.parseNumberAtAsync(t+1);if(!r||isNaN(r.value))return null;const o=await e.parseNumberAtAsync(r.end+2);if(!o||isNaN(o.value))return null;const a=await e.parseNumberAtAsync(o.end+2);if(!a||isNaN(a.value))return null;const f=await e.findNonSpaceIndexAsync(!0,a.end+1);if(f){if(await e.isCodeAtAsync(f,codes.R_BRACKET))return{value:new BorderArray(r.value,o.value,a.value),start:t,end:f};if(await e.isCodeAtAsync(f,codes.L_BRACKET)){const m=await e.parseNumberAtAsync(f+1);if(!m||isNaN(m.value))return null;const g=await e.parseNumberAtAsync(m.end+2);if(!g||isNaN(g.value))return null;const p=await e.findNonSpaceIndexAsync(!0,g.end+1);if(!p||!await e.isCodeAtAsync(p,codes.R_BRACKET))return null;const y=await e.findNonSpaceIndexAsync(!0,p+1);return!y||!await e.isCodeAtAsync(y,codes.R_BRACKET)?null:{value:new BorderArray(r.value,o.value,a.value,m.value,g.value),start:t,end:y}}}else return null;return null}toArray(e){const t=this.dash&&this.gap?`[${this.hCornerR} ${this.vCornerR} ${this.width}]`:`[${this.hCornerR} ${this.vCornerR} ${this.width} [${this.dash} ${this.gap}]]`;return new TextEncoder().encode(t)}}class AnnotationDict extends PdfDict{$name;$pageId;$translationEnabled;$onRenderUpdatedAction;$onPointerDownAction;$onPointerEnterAction;$onPointerLeaveAction;Subtype;Rect;Contents;P;NM;M;F=4;AP;AS;Border=new BorderArray(0,0,1);BS;BE;C;StructParent;_apStream;get apStream(){if(!this._apStream){const e=this.AP?.getStreams();e&&(this._apStream=[...e][0])}return this._apStream}set apStream(e){this._apStream=e,this._edited=!0}_bBox;_transformationPromise;_transformationTimer;_tempX;_tempY;_currentAngle=0;_moved;_tempTransformationMatrix=new l;_tempStartPoint=new u;_tempVecX=new u;_tempVecY=new u;_svgId=UUID.getRandomUuid();_pageInfo;_renderedBox;_renderedControls;_renderedContent;_svgContentCopy;get lastRenderResult(){return!this._renderedControls||!this._renderedContent?null:{controls:this._renderedControls,content:this._renderedContent}}get strokeWidth(){return this.BS?.W??this.Border?.width??1}constructor(e){super(dictTypes.ANNOTATION),this.Subtype=e}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];if(this.Subtype&&r.push(...s.encode("/Subtype "),...s.encode(this.Subtype)),this.Rect&&r.push(...s.encode("/Rect "),...this.encodePrimitiveArray(this.Rect,s)),this.Contents&&r.push(...s.encode("/Contents "),...this.Contents.toArray(e)),this.P&&r.push(...s.encode("/P "),...this.P.toArray(e)),this.NM&&r.push(...s.encode("/NM "),...this.NM.toArray(e)),this.M&&r.push(...s.encode("/M "),...this.M.toArray(e)),this.F&&r.push(...s.encode("/F "),...s.encode(" "+this.F)),this.AS&&r.push(...s.encode("/AS "),...s.encode(this.AS)),this.Border&&r.push(...s.encode("/Border "),...this.Border.toArray(e)),this.BS&&r.push(...s.encode("/BS "),...this.BS.toArray(e)),this.BE&&r.push(...s.encode("/BE "),...this.BE.toArray(e)),this.C&&r.push(...s.encode("/C "),...this.encodePrimitiveArray(this.C,s)),this.StructParent&&r.push(...s.encode("/StructParent "),...s.encode(" "+this.StructParent)),this.apStream){this.AP||(this.AP=new AppearanceDict);const a=this.apStream.ref;if(!a)throw new Error("Appearance stream has no reference");this.AP.N=ObjectId.fromRef(a),this.AP.R=null,this.AP.D=null,this.AP.clearStreams(),this.AP.setStream("/N",this.apStream),r.push(...s.encode("/AP "),...this.AP.toArray(e))}const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}async renderAsync(e){if(!e)throw new Error("Can't render the annotation: view box is not defined");return this._pageInfo=e,this._renderedControls||(this._renderedControls=this.renderControls()),await new Promise((t,s)=>{setTimeout(async()=>{await this.updateRenderAsync(),t()},0)}),this.lastRenderResult}async renderApStreamAsync(){const e=this.apStream;if(e)try{return await new AppearanceStreamRenderer(e,this.Rect,this.$name).renderAsync()}catch(t){console.log(`Annotation stream render error: ${t.message}`)}return null}async moveToAsync(e){const t=this.Rect[2]-this.Rect[0],s=this.Rect[3]-this.Rect[1],r=e.x-t/2,o=e.y-s/2,a=l.buildTranslate(r,o);await this.applyCommonTransformAsync(a)}async rotateByAsync(e,t){if(!t){const[r,o,a,f]=this.Rect;t=new u((r+a)/2,(o+f)/2)}const s=new l().applyTranslation(-t.x,-t.y).applyRotation(e).applyTranslation(t.x,t.y);await this.applyCommonTransformAsync(s)}toDto(){return{annotationType:this.Type,uuid:this.$name,pageId:this.$pageId,dateCreated:this.CreationDate?.date?.toISOString()||new Date().toISOString(),dateModified:this.M?this.M instanceof LiteralString?this.M.literal:this.M.date.toISOString():new Date().toISOString(),author:this.T?.literal,textContent:this.Contents?.literal,rect:this.Rect,matrix:this.apStream?.Matrix}}async setTextContentAsync(e,t=!0){const s=this.getProxy(),r=s.Contents?.literal;if(!e)s.Contents=null;else{const o=LiteralString.fromString(e);s.Contents=o}s.M=DateString.fromDate(new Date),s.$onEditAction&&s.$onEditAction(t?async()=>{await s.setTextContentAsync(r,!1)}:void 0)}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/Subtype":const g=await t.parseNameAtAsync(a);if(g){if(this.Subtype&&this.Subtype!==g.value)throw new Error(`Invalid dict subtype: '${g.value}' instead of '${this.Subtype}'`);a=g.end+1}else throw new Error("Can't parse /Subtype property value");break;case"/Rect":a=await this.parseNumberArrayPropAsync(f,t,a,!0);break;case"/P":a=await this.parseRefPropAsync(f,t,a);break;case"/Contents":case"/NM":const p=await t.getValueTypeAtAsync(a);p===valueTypes.STRING_LITERAL?a=await this.parseLiteralPropAsync(f,t,a,e.cryptInfo):p===valueTypes.STRING_HEX?a=await this.parseHexPropAsync(f,t,a,e.cryptInfo):a=await t.skipToNextNameAsync(a,o-1);break;case"/M":const y=await DateString.parseAsync(t,a,e.cryptInfo);if(y){this.M=y.value,a=y.end+1;break}else{const E=await LiteralString.parseAsync(t,a,e.cryptInfo);if(E){this.M=E.value,a=E.end+1;break}}throw new Error("Can't parse /M property value");case"/C":a=await this.parseNumberArrayPropAsync(f,t,a,!0);break;case"/F":case"/StructParent":a=await this.parseNumberPropAsync(f,t,a,!1);break;case"/Border":const C=await BorderArray.parseAsync(t,a);if(C)this.Border=C.value,a=C.end+1;else throw new Error("Can't parse /Border property value");break;case"/BS":const A=await t.getValueTypeAtAsync(a);if(A===valueTypes.REF){const E=await ObjectId.parseRefAsync(t,a);if(E&&e.parseInfoGetterAsync){const v=await e.parseInfoGetterAsync(E.value.id);if(v){const k=await BorderStyleDict.parseAsync(v);if(k){this.BS=k.value,a=k.end+1;break}}}throw new Error("Can't parse /BS value reference")}else if(A===valueTypes.DICTIONARY){const E=await t.getDictBoundsAtAsync(a);if(E){const v=await BorderStyleDict.parseAsync({parser:t,bounds:E});if(v){this.BS=v.value,a=v.end+1;break}}throw new Error("Can't parse /BS value dictionary")}throw new Error(`Unsupported /BS property value type: ${A}`);case"/BE":const w=await t.getValueTypeAtAsync(a);if(w===valueTypes.REF){const E=await ObjectId.parseRefAsync(t,a);if(E&&e.parseInfoGetterAsync){const v=await e.parseInfoGetterAsync(E.value.id);if(v){const k=await BorderEffectDict.parseAsync(v);if(k){this.BE=k.value,a=k.end+1;break}}}throw new Error("Can't parse /BE value reference")}else if(w===valueTypes.DICTIONARY){const E=await t.getDictBoundsAtAsync(a);if(E){const v=await BorderEffectDict.parseAsync({parser:t,bounds:E});if(v){this.BE=v.value,a=v.end+1;break}}throw new Error("Can't parse /BE value dictionary")}throw new Error(`Unsupported /BE property value type: ${w}`);case"/AP":const _=await t.getValueTypeAtAsync(a);if(_===valueTypes.REF){const E=await ObjectId.parseRefAsync(t,a);if(E&&e.parseInfoGetterAsync){const v=await e.parseInfoGetterAsync(E.value.id);if(v){const k=await AppearanceDict.parseAsync(v);if(k){this.AP=k.value,a=k.end+1;break}}}throw new Error("Can't parse /AP value reference")}else if(_===valueTypes.DICTIONARY){const E=await t.getDictBoundsAtAsync(a);if(E){const v=await AppearanceDict.parseAsync({parser:t,bounds:E,parseInfoGetterAsync:e.parseInfoGetterAsync});if(v){this.AP=v.value,a=v.end+1;break}}throw new Error("Can't parse /AP value dictionary")}throw new Error(`Unsupported /AP property value type: ${_}`);case"/AS":a=await this.parseNamePropAsync(f,t,a);break;case"/OC":default:a=await t.skipToNextNameAsync(a,o-1);break}if(!this.Subtype||!this.Rect)throw new Error("Not all required properties parsed");this.$name=this.NM?.literal||UUID.getRandomUuid()}getColorString(){let e;if(!this.C?.length)e="0 G 0 g";else if(this.C.length<3){const t=this.C[0];e=`${t} G ${t} g`}else if(this.C.length===3){const[t,s,r]=this.C;e=`${t} ${s} ${r} RG ${t} ${s} ${r} rg`}else{const[t,s,r,o]=this.C;e=`${t} ${s} ${r} ${o} K ${t} ${s} ${r} ${o} k`}return e}getCurrentRotation(){const e=this.apStream?.matrix;if(!e)return 0;const{r:t}=e.getTRS();return t}getLocalBB(){let e,t,s,r;if(this._bBox)return this._bBox;if(this.apStream){const{ll:o,lr:a,ur:f,ul:m}=this.apStream.transformedBBox,{min:g,max:p}=u.minMax(o,a,f,m),y=new u(this.Rect[0],this.Rect[1]),C=new u(this.Rect[2],this.Rect[3]),A=l.from4Vec2(g,p,y,C,!0);e=o.applyMat3(A),t=a.applyMat3(A),s=f.applyMat3(A),r=m.applyMat3(A)}else this.Rect?(e=new u(this.Rect[0],this.Rect[1]),t=new u(this.Rect[2],this.Rect[1]),s=new u(this.Rect[2],this.Rect[3]),r=new u(this.Rect[0],this.Rect[3])):(e=new u,t=new u,s=new u,r=new u);return this._bBox={ll:e,lr:t,ur:s,ul:r},this._bBox}convertClientCoordsToPage(e,t){if(!this._pageInfo)throw new Error("Can't get exact page coords without page info");const s=this._pageInfo.scale,r=this._pageInfo.rotation,[o,a]=this.Rect,{x:f,y:m,width:g,height:p}=this._renderedBox.getBoundingClientRect(),y=new u,C=new u;switch(r){case 0:y.set(f-o*s,m+p+a*s),C.set((e-y.x)/s,(y.y-t)/s);break;case 90:y.set(f-a*s,m-o*s),C.set((t-y.y)/s,(e-y.x)/s);break;case 180:y.set(f+g+o*s,m-a*s),C.set((y.x-e)/s,(t-y.y)/s);break;case 270:y.set(f+g+a*s,m+p+o*s),C.set((y.y-t)/s,(y.x-e)/s);break;default:throw new Error(`Invalid page rotation value: ${r}`)}return C}convertPageCoordsToClient(e,t){if(!this._pageInfo)throw new Error("Can't get exact page coords without page info");const s=this._pageInfo.scale,r=this._pageInfo.rotation,[o,a]=this.Rect,{x:f,y:m,width:g,height:p}=this._renderedBox.getBoundingClientRect(),y=new u,C=new u;switch(r){case 0:y.set(f-o*s,m+p+a*s),C.set(e*s+y.x,y.y-t*s);break;case 90:y.set(f-a*s,m-o*s),C.set(t*s+y.x,e*s+y.y);break;case 180:y.set(f+g+o*s,m-a*s),C.set(y.x-e*s,t*s+y.y);break;case 270:y.set(f+g+a*s,m+p+o*s),C.set(y.x-t*s,y.y-e*s);break;default:throw new Error(`Invalid page rotation value: ${r}`)}return C}applyRectTransform(e){const t=this.getLocalBB();t.ll.applyMat3(e),t.lr.applyMat3(e),t.ur.applyMat3(e),t.ul.applyMat3(e);const{min:s,max:r}=u.minMax(t.ll,t.lr,t.ur,t.ul);this.Rect=[s.x,s.y,r.x,r.y]}async applyCommonTransformAsync(e,t=!0){const s=this.getProxy();s.applyRectTransform(e);const r=s.apStream;if(r){const o=l.multiply(r.matrix,e);s.apStream.matrix=o}if(s.M=DateString.fromDate(new Date),s.$onEditAction){const o=l.invert(e);s.$onEditAction(t?async()=>{await s.applyCommonTransformAsync(o,!1),await s.updateRenderAsync()}:void 0)}}async applyTempTransformAsync(){if(this._transformationTimer){clearTimeout(this._transformationTimer),this._transformationTimer=null;return}this._transformationPromise&&await this._transformationPromise,this._transformationPromise=new Promise(async e=>{this._svgContentCopy.remove(),this._svgContentCopy.setAttribute("transform","matrix(1 0 0 1 0 0)"),this._moved&&(await this.applyCommonTransformAsync(this._tempTransformationMatrix),await this.updateRenderAsync()),this._tempTransformationMatrix.reset(),e()}),await this._transformationPromise}renderAppearance(){return null}renderRect(){const e=document.createElementNS("http://www.w3.org/2000/svg","rect");return e.classList.add("annotation-rect"),e.setAttribute("data-annotation-name",this.$name),e.setAttribute("x",this.Rect[0]+""),e.setAttribute("y",this.Rect[1]+""),e.setAttribute("width",this.Rect[2]-this.Rect[0]+""),e.setAttribute("height",this.Rect[3]-this.Rect[1]+""),e}renderBox(){const{ll:e,lr:t,ur:s,ul:r}=this.getLocalBB(),o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.classList.add("annotation-bbox"),o.setAttribute("data-annotation-name",this.$name),o.setAttribute("d",`M ${e.x} ${e.y} L ${t.x} ${t.y} L ${s.x} ${s.y} L ${r.x} ${r.y} Z`),o}renderControls(){const e=document.createElementNS("http://www.w3.org/2000/svg","g");return e.classList.add("annotation-controls"),e.setAttribute("data-annotation-name",this.$name),e.addEventListener("pointerdown",this.onSvgPointerDown),e.addEventListener("pointerenter",this.onSvgPointerEnter),e.addEventListener("pointerleave",this.onSvgPointerLeave),e}buildRenderedContentStructure(e){const t=document.createElement("div");t.id=this._svgId,t.classList.add("annotation-content"),t.setAttribute("data-annotation-name",this.$name);const{width:s,height:r}=this._pageInfo;if(e.clipPaths?.length){const o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.append(...e.clipPaths),o.setAttribute("viewBox",`0 0 ${s} ${r}`),o.setAttribute("transform","scale(1, -1)"),t.append(o)}return e.elements.forEach(o=>{const a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.classList.add("annotation-content-element"),a.setAttribute("viewBox",`0 0 ${s} ${r}`),a.setAttribute("transform","scale(1, -1)"),a.style.mixBlendMode=o.blendMode,a.append(o.element),t.append(a)}),t}buildRenderContentCopy(e){const t=document.createElementNS("http://www.w3.org/2000/svg","g");return e.elements.forEach(s=>{t.append(s.element.cloneNode(!0))}),t.classList.add("annotation-temp-copy"),t}renderScaleHandles(){const e=this.getLocalBB(),t=[];return["ll","lr","ur","ul"].forEach(s=>{const r=document.createElementNS("http://www.w3.org/2000/svg","line");r.classList.add("annotation-handle","scale"),r.setAttribute("data-handle-name",s),r.setAttribute("x1",e[s].x+""),r.setAttribute("y1",e[s].y+""),r.setAttribute("x2",e[s].x+""),r.setAttribute("y2",e[s].y+.1+""),r.addEventListener("pointerdown",this.onScaleHandlePointerDown),t.push(r)}),t}renderRotationHandle(){const e=(this.Rect[0]+this.Rect[2])/2,t=(this.Rect[1]+this.Rect[3])/2,s=this.getCurrentRotation(),r=document.createElementNS("http://www.w3.org/2000/svg","g");r.classList.add("annotation-rotator"),r.setAttribute("data-handle-name","center");const o=document.createElementNS("http://www.w3.org/2000/svg","circle");o.classList.add("circle","dashed"),o.setAttribute("cx",e+""),o.setAttribute("cy",t+"");const a=new l().applyTranslation(-e,-t+35).applyRotation(s).applyTranslation(e,t),f=new u(e,t).applyMat3(a),m=document.createElementNS("http://www.w3.org/2000/svg","line");m.classList.add("dashed"),m.setAttribute("x1",e+""),m.setAttribute("y1",t+""),m.setAttribute("x2",f.x+""),m.setAttribute("y2",f.y+"");const g=document.createElementNS("http://www.w3.org/2000/svg","line");return g.classList.add("annotation-handle","rotation"),g.setAttribute("data-handle-name","center"),g.setAttribute("x1",f.x+""),g.setAttribute("y1",f.y+""),g.setAttribute("x2",f.x+""),g.setAttribute("y2",f.y+.1+""),g.addEventListener("pointerdown",this.onRotationHandlePointerDown),r.append(o,m,g),r}renderHandles(){return[...this.renderScaleHandles(),this.renderRotationHandle()]}async updateRenderAsync(){if(!this._renderedControls)return;this._renderedControls.innerHTML="";const e=this.renderAppearance()||await this.renderApStreamAsync();if(!e||!e.elements?.length)return this._renderedBox=null,this._svgContentCopy=null,null;const t=this.buildRenderedContentStructure(e);this._renderedContent=t;const s=this.renderRect(),r=this.renderBox(),o=this.renderHandles();this._renderedBox=r,this._renderedControls.append(s,r,...e.pickHelpers,...o);const a=this.buildRenderContentCopy(e);this._svgContentCopy=a,this.$onRenderUpdatedAction&&this.$onRenderUpdatedAction()}onSvgPointerEnter=e=>{this.$onPointerEnterAction&&this.$onPointerEnterAction(e)};onSvgPointerLeave=e=>{this.$onPointerLeaveAction&&this.$onPointerLeaveAction(e)};onSvgPointerDown=e=>{this.$pageId&&(this.$onPointerDownAction&&this.$onPointerDownAction(e),this.onTranslationPointerDown(e))};onTranslationPointerDown=e=>{if(!this.$translationEnabled||!e.isPrimary)return;const t=e.target;t.setPointerCapture(e.pointerId),t.addEventListener("pointerup",this.onTranslationPointerUp),t.addEventListener("pointerout",this.onTranslationPointerUp),this._moved=!1,this._transformationTimer=setTimeout(()=>{this._transformationTimer=null,this._renderedControls.after(this._svgContentCopy),this._tempStartPoint.setFromVec2(this.convertClientCoordsToPage(e.clientX,e.clientY)),t.addEventListener("pointermove",this.onTranslationPointerMove)},200)};onTranslationPointerMove=e=>{if(!e.isPrimary)return;const t=this.convertClientCoordsToPage(e.clientX,e.clientY);this._tempTransformationMatrix.reset().applyTranslation(t.x-this._tempStartPoint.x,t.y-this._tempStartPoint.y),this._svgContentCopy.setAttribute("transform",`matrix(${this._tempTransformationMatrix.toFloatShortArray().join(" ")})`),this._moved=!0};onTranslationPointerUp=e=>{if(!e.isPrimary)return;const t=e.target;t.removeEventListener("pointermove",this.onTranslationPointerMove),t.removeEventListener("pointerup",this.onTranslationPointerUp),t.removeEventListener("pointerout",this.onTranslationPointerUp),t.releasePointerCapture(e.pointerId),this.applyTempTransformAsync()};onRotationHandlePointerDown=e=>{if(!e.isPrimary)return;const t=e.target;t.setPointerCapture(e.pointerId),t.addEventListener("pointerup",this.onRotationHandlePointerUp),t.addEventListener("pointerout",this.onRotationHandlePointerUp),this._moved=!1,this._transformationTimer=setTimeout(()=>{this._transformationTimer=null,this._renderedControls.after(this._svgContentCopy),t.addEventListener("pointermove",this.onRotationHandlePointerMove)},200),e.stopPropagation()};onRotationHandlePointerMove=e=>{if(!e.isPrimary)return;const t=(this.Rect[0]+this.Rect[2])/2,s=(this.Rect[1]+this.Rect[3])/2,r=this.convertPageCoordsToClient(t,s),o=this.getCurrentRotation(),a=Math.atan2(e.clientY-r.y,e.clientX-r.x)+Math.PI/2-o;this._currentAngle=a,this._tempTransformationMatrix.reset().applyTranslation(-t,-s).applyRotation(a).applyTranslation(t,s),this._svgContentCopy.setAttribute("transform",`matrix(${this._tempTransformationMatrix.toFloatShortArray().join(" ")})`),this._moved=!0};onRotationHandlePointerUp=e=>{if(!e.isPrimary)return;const t=e.target;t.removeEventListener("pointermove",this.onRotationHandlePointerMove),t.removeEventListener("pointerup",this.onRotationHandlePointerUp),t.removeEventListener("pointerout",this.onRotationHandlePointerUp),t.releasePointerCapture(e.pointerId),this.applyTempTransformAsync()};onScaleHandlePointerDown=e=>{if(!e.isPrimary)return;const t=e.target;t.setPointerCapture(e.pointerId),t.addEventListener("pointerup",this.onScaleHandlePointerUp),t.addEventListener("pointerout",this.onScaleHandlePointerUp);const{ll:s,lr:r,ur:o,ul:a}=this.getLocalBB(),f=t.dataset.handleName;switch(f){case"ll":this._tempStartPoint.setFromVec2(o),this._tempVecX.setFromVec2(a).subtract(o),this._tempVecY.setFromVec2(r).subtract(o);break;case"lr":this._tempStartPoint.setFromVec2(a),this._tempVecX.setFromVec2(o).subtract(a),this._tempVecY.setFromVec2(s).subtract(a);break;case"ur":this._tempStartPoint.setFromVec2(s),this._tempVecX.setFromVec2(r).subtract(s),this._tempVecY.setFromVec2(a).subtract(s);break;case"ul":this._tempStartPoint.setFromVec2(r),this._tempVecX.setFromVec2(s).subtract(r),this._tempVecY.setFromVec2(o).subtract(r);break;default:throw new Error(`Invalid handle name: ${f}`)}this._tempX=this._tempVecX.getMagnitude(),this._tempY=this._tempVecY.getMagnitude(),this._moved=!1,this._transformationTimer=setTimeout(()=>{this._transformationTimer=null,this._renderedControls.after(this._svgContentCopy),t.addEventListener("pointermove",this.onScaleHandlePointerMove)},200),e.stopPropagation()};onScaleHandlePointerMove=e=>{if(!e.isPrimary)return;const t=this.convertClientCoordsToPage(e.clientX,e.clientY).subtract(this._tempStartPoint),s=t.getMagnitude(),o=Math.abs(t.dotProduct(this._tempVecX))/s/this._tempX*s,a=Math.sqrt(s*s-o*o),f=o/this._tempX,m=a/this._tempY,g=(this.Rect[0]+this.Rect[2])/2,p=(this.Rect[1]+this.Rect[3])/2,y=this.getCurrentRotation();this._tempTransformationMatrix.reset().applyTranslation(-g,-p).applyRotation(-y).applyScaling(f,m).applyRotation(y).applyTranslation(g,p);const C=this._tempStartPoint.clone().subtract(this._tempStartPoint.clone().applyMat3(this._tempTransformationMatrix));this._tempTransformationMatrix.applyTranslation(C.x,C.y),this._svgContentCopy.setAttribute("transform",`matrix(${this._tempTransformationMatrix.toFloatShortArray().join(" ")})`),this._moved=!0};onScaleHandlePointerUp=e=>{if(!e.isPrimary)return;const t=e.target;t.removeEventListener("pointermove",this.onScaleHandlePointerMove),t.removeEventListener("pointerup",this.onScaleHandlePointerUp),t.removeEventListener("pointerout",this.onScaleHandlePointerUp),t.releasePointerCapture(e.pointerId),this.applyTempTransformAsync()};initProxy(){return super.initProxy()}getProxy(){return super.getProxy()}}class MarkupAnnotation extends AnnotationDict{T;Popup;RC;CA;CreationDate;Subj;IRT;RT=markupAnnotationReplyTypes.REPLY;ExData;_textData;constructor(e){super(e)}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.T&&r.push(...s.encode("/T "),...this.T.toArray(e)),this.Popup&&r.push(...s.encode("/Popup "),...this.Popup.toArray(e)),this.RC&&r.push(...s.encode("/RC "),...this.RC.toArray(e)),this.CA&&r.push(...s.encode("/CA "),...s.encode(" "+this.CA)),this.CreationDate&&r.push(...s.encode("/CreationDate "),...this.CreationDate.toArray(e)),this.Subj&&r.push(...s.encode("/Subj "),...this.Subj.toArray(e)),this.IRT&&r.push(...s.encode("/IRT "),...this.IRT.toArray(e)),this.RT&&r.push(...s.encode("/RT "),...s.encode(this.RT));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/T":case"/Subj":a=await this.parseLiteralPropAsync(f,t,a,e.cryptInfo);break;case"/Popup":case"/IRT":a=await this.parseRefPropAsync(f,t,a);break;case"/RC":const g=await t.getValueTypeAtAsync(a);if(g===valueTypes.REF){const y=await ObjectId.parseRefAsync(t,a);if(y&&e.parseInfoGetterAsync){const C=await e.parseInfoGetterAsync(y.value.id);if(C){const A=C.type||C.parser.getValueTypeAtAsync(C.bounds.contentStart);if(A===valueTypes.STRING_LITERAL){const w=await LiteralString.parseAsync(C.parser,C.bounds.contentStart);if(w){this.RC=w.value,a=y.end+1;break}}else if(A===valueTypes.DICTIONARY){const w=await TextStream.parseAsync(C);if(w){const _=w.value.getText();this.RC=LiteralString.fromString(_),a=y.end+1;break}}else throw new Error(`Unsupported /RC property value type: ${A}`)}}throw new Error("Can't parse /RC value reference")}else if(g===valueTypes.STRING_LITERAL){const y=await LiteralString.parseAsync(t,a,e.cryptInfo);if(y){this.RC=y.value,a=y.end+1;break}throw new Error("Can't parse /RC property value")}throw new Error(`Unsupported /RC property value type: ${g}`);case"/CA":a=await this.parseNumberPropAsync(f,t,a,!0);break;case"/CreationDate":a=await this.parseDatePropAsync(f,t,a,e.cryptInfo);break;case"/RT":const p=await t.parseNameAtAsync(a,!0);if(p&&Object.values(markupAnnotationReplyTypes).includes(p.value))this.RT=p.value,a=p.end+1;else throw new Error("Can't parse /RT property value");break;case"/ExData":break;default:a=await t.skipToNextNameAsync(a,o-1);break}if(!this.Subtype||!this.Rect)throw new Error("Not all required properties parsed")}getColorRect(){let e=0,t=0,s=0,r=1;if(this.C){if(this.C.length===1)e=t=s=this.C[0];else if(this.C.length===3)[e,t,s]=this.C;else if(this.C.length===4){const[a,f,m,g]=this.C;e=(1-a)*(1-g),t=(1-f)*(1-g),s=(1-m)*(1-g)}}return isNaN(this.CA)||(r=this.CA),[e,t,s,r]}async updateTextDataAsync(e){const t=this.Contents?.literal,s=await TextData.buildAsync(t,e);return this._textData=s,this._textData}getLineEndingStreamPart(e,t,s,r){const o=Math.max(s*LINE_END_MULTIPLIER,LINE_END_MIN_SIZE);let a="";switch(t){case lineEndingTypes.ARROW_OPEN:return r==="left"?(a+=`
${e.x+o} ${e.y+o/2} m`,a+=`
${e.x} ${e.y} l`,a+=`
${e.x+o} ${e.y-o/2} l`):(a+=`
${e.x-o} ${e.y+o/2} m`,a+=`
${e.x} ${e.y} l`,a+=`
${e.x-o} ${e.y-o/2} l`),a+=`
S`,a;case lineEndingTypes.ARROW_OPEN_R:return r==="left"?(a+=`
${e.x} ${e.y+o/2} m`,a+=`
${e.x+o} ${e.y} l`,a+=`
${e.x} ${e.y-o/2} l`):(a+=`
${e.x} ${e.y+o/2} m`,a+=`
${e.x-o} ${e.y} l`,a+=`
${e.x} ${e.y-o/2} l`),a+=`
S`,a;case lineEndingTypes.ARROW_CLOSED:return r==="left"?(a+=`
${e.x+o} ${e.y+o/2} m`,a+=`
${e.x} ${e.y} l`,a+=`
${e.x+o} ${e.y-o/2} l`):(a+=`
${e.x-o} ${e.y+o/2} m`,a+=`
${e.x} ${e.y} l`,a+=`
${e.x-o} ${e.y-o/2} l`),a+=`
s`,a;case lineEndingTypes.ARROW_CLOSED_R:return r==="left"?(a+=`
${e.x+o} ${e.y} m`,a+=`
${e.x} ${e.y+o/2} l`,a+=`
${e.x} ${e.y-o/2} l`):(a+=`
${e.x-o} ${e.y} m`,a+=`
${e.x} ${e.y-o/2} l`,a+=`
${e.x} ${e.y+o/2} l`),a+=`
s`,a;case lineEndingTypes.BUTT:return a+=`
${e.x} ${e.y+o/2} m`,a+=`
${e.x} ${e.y-o/2} l`,a+=`
S`,a;case lineEndingTypes.SLASH:return a+=`
${e.x+o/2} ${e.y+o/2} m`,a+=`
${e.x-o/2} ${e.y-o/2} l`,a+=`
S`,a;case lineEndingTypes.DIAMOND:return a+=`
${e.x} ${e.y+o/2} m`,a+=`
${e.x+o/2} ${e.y} l`,a+=`
${e.x} ${e.y-o/2} l`,a+=`
${e.x-o/2} ${e.y} l`,a+=`
s`,a;case lineEndingTypes.SQUARE:return a+=`
${e.x-o/2} ${e.y+o/2} m`,a+=`
${e.x+o/2} ${e.y+o/2} l`,a+=`
${e.x+o/2} ${e.y-o/2} l`,a+=`
${e.x-o/2} ${e.y-o/2} l`,a+=`
s`,a;case lineEndingTypes.CIRCLE:const f=BEZIER_CONSTANT,m=o/2,g=f*m,p=e.x-m,y=e.y-m,C=e.x+m,A=e.y+m;return a+=`
${e.x} ${A} m`,a+=`
${e.x+g} ${A} ${C} ${e.y+g} ${C} ${e.y} c`,a+=`
${C} ${e.y-g} ${e.x+g} ${y} ${e.x} ${y} c`,a+=`
${e.x-g} ${y} ${p} ${e.y-g} ${p} ${e.y} c`,a+=`
${p} ${e.y+g} ${e.x-g} ${A} ${e.x} ${A} c`,a+=`
S`,a;case lineEndingTypes.NONE:default:return""}}}class DataUpdater{_lastXref;_refData;_changeData;_writer;_stringCryptor;_streamCryptor;_writtenIds=new Set;constructor(e,t,s,r){this._lastXref=t,this._refData=s,this._changeData=new ReferenceDataChange(s),this._writer=new DataWriter(e),this._stringCryptor=r?.stringCryptor,this._streamCryptor=r?.streamCryptor}getDataWithUpdatedAnnotations(e){for(const{page:s,supportedAnnotations:r,allAnnotationIds:o}of e)if(r?.length){for(const a of r)if(a.deleted){if(!a.ref)continue;const f=o.findIndex(m=>m.id===a.id);o.splice(f,1),this._changeData.setRefFree(a.id),a instanceof MarkupAnnotation&&a.Popup&&this._changeData.setRefFree(a.Popup.id)}else if(!a.ref||a.edited){const f=a.apStream;if(f&&this.writeFormXObject(f),this.isNew(a)){const m=this.writeIndirectObject(a);o.push(ObjectId.fromRef(m))}else this.writeUpdatedIndirectObject(a)}if(s.Annots instanceof ObjectId&&this._changeData.isUsedInSource(s.Annots.id)){const a={id:s.Annots.id,generation:s.Annots.generation,byteOffset:this._writer.offset},f={ref:a,streamCryptor:this._streamCryptor,stringCryptor:this._stringCryptor};this._changeData.updateUsedRef(a),this._writer.writeIndirectArray(f,o)}else{const a=this._changeData.takeFreeRef(this._writer.offset,!0),f={ref:a,streamCryptor:this._streamCryptor,stringCryptor:this._stringCryptor};this._writer.writeIndirectArray(f,o),s.Annots=ObjectId.fromRef(a)}this.writeUpdatedIndirectObject(s)}return this.writeXref(),this._writer.getCurrentData()}isNew(e){return!e.ref||!this._changeData.isUsedInSource(e.id)}writeIndirectObject(e){if(this._writtenIds.has(e.id))return this._changeData.getUsedRef(e.id);const t=this._changeData.takeFreeRef(this._writer.offset,!0),s={ref:t,streamCryptor:this._streamCryptor,stringCryptor:this._stringCryptor};return this._writer.writeIndirectObject(s,e),e.ref=t,this._writtenIds.add(t.id),t}writeUpdatedIndirectObject(e){const t={id:e.id,generation:e.generation,byteOffset:this._writer.offset},s={ref:t,streamCryptor:this._streamCryptor,stringCryptor:this._stringCryptor};return this._changeData.updateUsedRef(t),this._writer.writeIndirectObject(s,e),t}writeImageXObject=e=>{const t=e.sMask;if(this.isNew(t)){const s=this.writeIndirectObject(t);e.SMask=ObjectId.fromRef(s)}else t.edited&&this.writeUpdatedIndirectObject(t);return this.isNew(e)?this.writeIndirectObject(e):e.edited?this.writeUpdatedIndirectObject(e):{id:e.id,generation:e.generation,byteOffset:this._refData.getOffset(e.id)}};writeFormXObject(e){const t=e.Resources;return t&&t.edited&&([...t.getXObjects()].forEach(([s,r])=>{r instanceof ImageStream?this.writeImageXObject(r):r instanceof XFormStream&&this.writeFormXObject(r)}),[...t.getFonts()].forEach(([s,r])=>{r.encoding&&this.isNew(r.encoding)&&this.writeIndirectObject(r.encoding),r.descriptor&&this.isNew(r.descriptor)&&this.writeIndirectObject(r.descriptor),this.isNew(r)?this.writeIndirectObject(r):r.edited&&this.writeUpdatedIndirectObject(r)})),this.isNew(e)?this.writeIndirectObject(e):e.edited?this.writeUpdatedIndirectObject(e):{id:e.id,generation:e.generation,byteOffset:this._refData.getOffset(e.id)}}writeXref(){const e=this._writer.offset,t=this._changeData.exportEntries(),s=this._lastXref.createUpdate(t,e);if(this._lastXref instanceof XRefStream){const r=this._changeData.takeFreeRef(e,!0);this._writer.writeIndirectObject({ref:r},s)}else this._writer.writeBytes(s.toArray());return this._writer.writeEof(e),e}}class Base{static create(...e){return new this(...e)}mixIn(e){return Object.assign(this,e)}clone(){const e=new this.constructor;return Object.assign(e,this),e}}class WordArray extends Base{constructor(e=[],t=e.length*4){super();let s=e;if(s instanceof ArrayBuffer&&(s=new Uint8Array(s)),(s instanceof Int8Array||s instanceof Uint8ClampedArray||s instanceof Int16Array||s instanceof Uint16Array||s instanceof Int32Array||s instanceof Uint32Array||s instanceof Float32Array||s instanceof Float64Array)&&(s=new Uint8Array(s.buffer,s.byteOffset,s.byteLength)),s instanceof Uint8Array){const r=s.byteLength,o=[];for(let a=0;a<r;a+=1)o[a>>>2]|=s[a]<<24-a%4*8;this.words=o,this.sigBytes=r}else this.words=e,this.sigBytes=t}static random(e){const t=[],s=r=>{let o=r,a=987654321;const f=4294967295;return()=>{a=36969*(a&65535)+(a>>16)&f,o=18e3*(o&65535)+(o>>16)&f;let m=(a<<16)+o&f;return m/=4294967296,m+=.5,m*(Math.random()>.5?1:-1)}};for(let r=0,o;r<e;r+=4){const a=s((o||Math.random())*4294967296);o=a()*987654071,t.push(a()*4294967296|0)}return new WordArray(t,e)}toString(e=Hex){return e.stringify(this)}concat(e){const t=this.words,s=e.words,r=this.sigBytes,o=e.sigBytes;if(this.clamp(),r%4)for(let a=0;a<o;a+=1){const f=s[a>>>2]>>>24-a%4*8&255;t[r+a>>>2]|=f<<24-(r+a)%4*8}else for(let a=0;a<o;a+=4)t[r+a>>>2]=s[a>>>2];return this.sigBytes+=o,this}clamp(){const{words:e,sigBytes:t}=this;e[t>>>2]&=4294967295<<32-t%4*8,e.length=Math.ceil(t/4)}clone(){const e=super.clone.call(this);return e.words=this.words.slice(0),e}}const Hex={stringify(c){const{words:e,sigBytes:t}=c,s=[];for(let r=0;r<t;r+=1){const o=e[r>>>2]>>>24-r%4*8&255;s.push((o>>>4).toString(16)),s.push((o&15).toString(16))}return s.join("")},parse(c){const e=c.length,t=[];for(let s=0;s<e;s+=2)t[s>>>3]|=parseInt(c.substr(s,2),16)<<24-s%8*4;return new WordArray(t,e/2)}},Latin1={stringify(c){const{words:e,sigBytes:t}=c,s=[];for(let r=0;r<t;r+=1){const o=e[r>>>2]>>>24-r%4*8&255;s.push(String.fromCharCode(o))}return s.join("")},parse(c){const e=c.length,t=[];for(let s=0;s<e;s+=1)t[s>>>2]|=(c.charCodeAt(s)&255)<<24-s%4*8;return new WordArray(t,e)}},Utf8={stringify(c){try{return decodeURIComponent(escape(Latin1.stringify(c)))}catch{throw new Error("Malformed UTF-8 data")}},parse(c){return Latin1.parse(unescape(encodeURIComponent(c)))}};class BufferedBlockAlgorithm extends Base{constructor(){super(),this._minBufferSize=0}reset(){this._data=new WordArray,this._nDataBytes=0}_append(e){let t=e;typeof t=="string"&&(t=Utf8.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes}_process(e){let t;const{_data:s,blockSize:r}=this,o=s.words,a=s.sigBytes,f=r*4;let m=a/f;e?m=Math.ceil(m):m=Math.max((m|0)-this._minBufferSize,0);const g=m*r,p=Math.min(g*4,a);if(g){for(let y=0;y<g;y+=r)this._doProcessBlock(o,y);t=o.splice(0,g),s.sigBytes-=p}return new WordArray(t,p)}clone(){const e=super.clone.call(this);return e._data=this._data.clone(),e}}class Hasher extends BufferedBlockAlgorithm{constructor(e){super(),this.blockSize=512/32,this.cfg=Object.assign(new Base,e),this.reset()}static _createHelper(e){return(t,s)=>new e(s).finalize(t)}static _createHmacHelper(e){return(t,s)=>new HMAC(e,s).finalize(t)}reset(){super.reset.call(this),this._doReset()}update(e){return this._append(e),this._process(),this}finalize(e){return e&&this._append(e),this._doFinalize()}}class HMAC extends Base{constructor(e,t){super();const s=new e;this._hasher=s;let r=t;typeof r=="string"&&(r=Utf8.parse(r));const o=s.blockSize,a=o*4;r.sigBytes>a&&(r=s.finalize(t)),r.clamp();const f=r.clone();this._oKey=f;const m=r.clone();this._iKey=m;const g=f.words,p=m.words;for(let y=0;y<o;y+=1)g[y]^=1549556828,p[y]^=909522486;f.sigBytes=a,m.sigBytes=a,this.reset()}reset(){const e=this._hasher;e.reset(),e.update(this._iKey)}update(e){return this._hasher.update(e),this}finalize(e){const t=this._hasher,s=t.finalize(e);return t.reset(),t.finalize(this._oKey.clone().concat(s))}}const X32WordArray=WordArray;class X64Word extends Base{constructor(e,t){super(),this.high=e,this.low=t}}class X64WordArray extends Base{constructor(e=[],t=e.length*8){super(),this.words=e,this.sigBytes=t}toX32(){const e=this.words,t=e.length,s=[];for(let r=0;r<t;r+=1){const o=e[r];s.push(o.high),s.push(o.low)}return X32WordArray.create(s,this.sigBytes)}clone(){const e=super.clone.call(this);e.words=this.words.slice(0);const{words:t}=e,s=t.length;for(let r=0;r<s;r+=1)t[r]=t[r].clone();return e}}const parseLoop=(c,e,t)=>{const s=[];let r=0;for(let o=0;o<e;o+=1)if(o%4){const a=t[c.charCodeAt(o-1)]<<o%4*2,f=t[c.charCodeAt(o)]>>>6-o%4*2,m=a|f;s[r>>>2]|=m<<24-r%4*8,r+=1}return WordArray.create(s,r)},Base64={stringify(c){const{words:e,sigBytes:t}=c,s=this._map;c.clamp();const r=[];for(let a=0;a<t;a+=3){const f=e[a>>>2]>>>24-a%4*8&255,m=e[a+1>>>2]>>>24-(a+1)%4*8&255,g=e[a+2>>>2]>>>24-(a+2)%4*8&255,p=f<<16|m<<8|g;for(let y=0;y<4&&a+y*.75<t;y+=1)r.push(s.charAt(p>>>6*(3-y)&63))}const o=s.charAt(64);if(o)for(;r.length%4;)r.push(o);return r.join("")},parse(c){let e=c.length;const t=this._map;let s=this._reverseMap;if(!s){this._reverseMap=[],s=this._reverseMap;for(let o=0;o<t.length;o+=1)s[t.charCodeAt(o)]=o}const r=t.charAt(64);if(r){const o=c.indexOf(r);o!==-1&&(e=o)}return parseLoop(c,e,s)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},T$1=[];for(let c=0;c<64;c+=1)T$1[c]=Math.abs(Math.sin(c+1))*4294967296|0;const FF=(c,e,t,s,r,o,a)=>{const f=c+(e&t|~e&s)+r+a;return(f<<o|f>>>32-o)+e},GG=(c,e,t,s,r,o,a)=>{const f=c+(e&s|t&~s)+r+a;return(f<<o|f>>>32-o)+e},HH=(c,e,t,s,r,o,a)=>{const f=c+(e^t^s)+r+a;return(f<<o|f>>>32-o)+e},II=(c,e,t,s,r,o,a)=>{const f=c+(t^(e|~s))+r+a;return(f<<o|f>>>32-o)+e};class MD5Algo extends Hasher{_doReset(){this._hash=new WordArray([1732584193,4023233417,2562383102,271733878])}_doProcessBlock(e,t){const s=e;for(let F=0;F<16;F+=1){const $=t+F,ee=e[$];s[$]=(ee<<8|ee>>>24)&16711935|(ee<<24|ee>>>8)&4278255360}const r=this._hash.words,o=s[t+0],a=s[t+1],f=s[t+2],m=s[t+3],g=s[t+4],p=s[t+5],y=s[t+6],C=s[t+7],A=s[t+8],w=s[t+9],_=s[t+10],E=s[t+11],v=s[t+12],k=s[t+13],R=s[t+14],L=s[t+15];let B=r[0],X=r[1],U=r[2],M=r[3];B=FF(B,X,U,M,o,7,T$1[0]),M=FF(M,B,X,U,a,12,T$1[1]),U=FF(U,M,B,X,f,17,T$1[2]),X=FF(X,U,M,B,m,22,T$1[3]),B=FF(B,X,U,M,g,7,T$1[4]),M=FF(M,B,X,U,p,12,T$1[5]),U=FF(U,M,B,X,y,17,T$1[6]),X=FF(X,U,M,B,C,22,T$1[7]),B=FF(B,X,U,M,A,7,T$1[8]),M=FF(M,B,X,U,w,12,T$1[9]),U=FF(U,M,B,X,_,17,T$1[10]),X=FF(X,U,M,B,E,22,T$1[11]),B=FF(B,X,U,M,v,7,T$1[12]),M=FF(M,B,X,U,k,12,T$1[13]),U=FF(U,M,B,X,R,17,T$1[14]),X=FF(X,U,M,B,L,22,T$1[15]),B=GG(B,X,U,M,a,5,T$1[16]),M=GG(M,B,X,U,y,9,T$1[17]),U=GG(U,M,B,X,E,14,T$1[18]),X=GG(X,U,M,B,o,20,T$1[19]),B=GG(B,X,U,M,p,5,T$1[20]),M=GG(M,B,X,U,_,9,T$1[21]),U=GG(U,M,B,X,L,14,T$1[22]),X=GG(X,U,M,B,g,20,T$1[23]),B=GG(B,X,U,M,w,5,T$1[24]),M=GG(M,B,X,U,R,9,T$1[25]),U=GG(U,M,B,X,m,14,T$1[26]),X=GG(X,U,M,B,A,20,T$1[27]),B=GG(B,X,U,M,k,5,T$1[28]),M=GG(M,B,X,U,f,9,T$1[29]),U=GG(U,M,B,X,C,14,T$1[30]),X=GG(X,U,M,B,v,20,T$1[31]),B=HH(B,X,U,M,p,4,T$1[32]),M=HH(M,B,X,U,A,11,T$1[33]),U=HH(U,M,B,X,E,16,T$1[34]),X=HH(X,U,M,B,R,23,T$1[35]),B=HH(B,X,U,M,a,4,T$1[36]),M=HH(M,B,X,U,g,11,T$1[37]),U=HH(U,M,B,X,C,16,T$1[38]),X=HH(X,U,M,B,_,23,T$1[39]),B=HH(B,X,U,M,k,4,T$1[40]),M=HH(M,B,X,U,o,11,T$1[41]),U=HH(U,M,B,X,m,16,T$1[42]),X=HH(X,U,M,B,y,23,T$1[43]),B=HH(B,X,U,M,w,4,T$1[44]),M=HH(M,B,X,U,v,11,T$1[45]),U=HH(U,M,B,X,L,16,T$1[46]),X=HH(X,U,M,B,f,23,T$1[47]),B=II(B,X,U,M,o,6,T$1[48]),M=II(M,B,X,U,C,10,T$1[49]),U=II(U,M,B,X,R,15,T$1[50]),X=II(X,U,M,B,p,21,T$1[51]),B=II(B,X,U,M,v,6,T$1[52]),M=II(M,B,X,U,m,10,T$1[53]),U=II(U,M,B,X,_,15,T$1[54]),X=II(X,U,M,B,a,21,T$1[55]),B=II(B,X,U,M,A,6,T$1[56]),M=II(M,B,X,U,L,10,T$1[57]),U=II(U,M,B,X,y,15,T$1[58]),X=II(X,U,M,B,k,21,T$1[59]),B=II(B,X,U,M,g,6,T$1[60]),M=II(M,B,X,U,E,10,T$1[61]),U=II(U,M,B,X,f,15,T$1[62]),X=II(X,U,M,B,w,21,T$1[63]),r[0]=r[0]+B|0,r[1]=r[1]+X|0,r[2]=r[2]+U|0,r[3]=r[3]+M|0}_doFinalize(){const e=this._data,t=e.words,s=this._nDataBytes*8,r=e.sigBytes*8;t[r>>>5]|=128<<24-r%32;const o=Math.floor(s/4294967296),a=s;t[(r+64>>>9<<4)+15]=(o<<8|o>>>24)&16711935|(o<<24|o>>>8)&4278255360,t[(r+64>>>9<<4)+14]=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360,e.sigBytes=(t.length+1)*4,this._process();const f=this._hash,m=f.words;for(let g=0;g<4;g+=1){const p=m[g];m[g]=(p<<8|p>>>24)&16711935|(p<<24|p>>>8)&4278255360}return f}clone(){const e=super.clone.call(this);return e._hash=this._hash.clone(),e}}const MD5=Hasher._createHelper(MD5Algo),HmacMD5=Hasher._createHmacHelper(MD5Algo);class EvpKDFAlgo extends Base{constructor(e){super(),this.cfg=Object.assign(new Base,{keySize:128/32,hasher:MD5Algo,iterations:1},e)}compute(e,t){let s;const{cfg:r}=this,o=r.hasher.create(),a=WordArray.create(),f=a.words,{keySize:m,iterations:g}=r;for(;f.length<m;){s&&o.update(s),s=o.update(e).finalize(t),o.reset();for(let p=1;p<g;p+=1)s=o.finalize(s),o.reset();a.concat(s)}return a.sigBytes=m*4,a}}const EvpKDF=(c,e,t)=>EvpKDFAlgo.create(t).compute(c,e);class Cipher extends BufferedBlockAlgorithm{constructor(e,t,s){super(),this.cfg=Object.assign(new Base,s),this._xformMode=e,this._key=t,this.reset()}static createEncryptor(e,t){return this.create(this._ENC_XFORM_MODE,e,t)}static createDecryptor(e,t){return this.create(this._DEC_XFORM_MODE,e,t)}static _createHelper(e){const t=s=>typeof s=="string"?PasswordBasedCipher:SerializableCipher;return{encrypt(s,r,o){return t(r).encrypt(e,s,r,o)},decrypt(s,r,o){return t(r).decrypt(e,s,r,o)}}}reset(){super.reset.call(this),this._doReset()}process(e){return this._append(e),this._process()}finalize(e){return e&&this._append(e),this._doFinalize()}}Cipher._ENC_XFORM_MODE=1;Cipher._DEC_XFORM_MODE=2;Cipher.keySize=128/32;Cipher.ivSize=128/32;class StreamCipher extends Cipher{constructor(...e){super(...e),this.blockSize=1}_doFinalize(){return this._process(!0)}}class BlockCipherMode extends Base{constructor(e,t){super(),this._cipher=e,this._iv=t}static createEncryptor(e,t){return this.Encryptor.create(e,t)}static createDecryptor(e,t){return this.Decryptor.create(e,t)}}function xorBlock(c,e,t){const s=c;let r;const o=this._iv;o?(r=o,this._iv=void 0):r=this._prevBlock;for(let a=0;a<t;a+=1)s[e+a]^=r[a]}class CBC extends BlockCipherMode{}CBC.Encryptor=class extends CBC{processBlock(c,e){const t=this._cipher,{blockSize:s}=t;xorBlock.call(this,c,e,s),t.encryptBlock(c,e),this._prevBlock=c.slice(e,e+s)}};CBC.Decryptor=class extends CBC{processBlock(c,e){const t=this._cipher,{blockSize:s}=t,r=c.slice(e,e+s);t.decryptBlock(c,e),xorBlock.call(this,c,e,s),this._prevBlock=r}};const Pkcs7={pad(c,e){const t=e*4,s=t-c.sigBytes%t,r=s<<24|s<<16|s<<8|s,o=[];for(let f=0;f<s;f+=4)o.push(r);const a=WordArray.create(o,s);c.concat(a)},unpad(c){const e=c,t=e.words[e.sigBytes-1>>>2]&255;e.sigBytes-=t}};class BlockCipher extends Cipher{constructor(e,t,s){super(e,t,Object.assign({mode:CBC,padding:Pkcs7},s)),this.blockSize=128/32}reset(){let e;super.reset.call(this);const{cfg:t}=this,{iv:s,mode:r}=t;this._xformMode===this.constructor._ENC_XFORM_MODE?e=r.createEncryptor:(e=r.createDecryptor,this._minBufferSize=1),this._mode=e.call(r,this,s&&s.words),this._mode.__creator=e}_doProcessBlock(e,t){this._mode.processBlock(e,t)}_doFinalize(){let e;const{padding:t}=this.cfg;return this._xformMode===this.constructor._ENC_XFORM_MODE?(t.pad(this._data,this.blockSize),e=this._process(!0)):(e=this._process(!0),t.unpad(e)),e}}class CipherParams extends Base{constructor(e){super(),this.mixIn(e)}toString(e){return(e||this.formatter).stringify(this)}}const OpenSSLFormatter={stringify(c){let e;const{ciphertext:t,salt:s}=c;return s?e=WordArray.create([1398893684,1701076831]).concat(s).concat(t):e=t,e.toString(Base64)},parse(c){let e;const t=Base64.parse(c),s=t.words;return s[0]===1398893684&&s[1]===1701076831&&(e=WordArray.create(s.slice(2,4)),s.splice(0,4),t.sigBytes-=16),CipherParams.create({ciphertext:t,salt:e})}};class SerializableCipher extends Base{static encrypt(e,t,s,r){const o=Object.assign(new Base,this.cfg,r),a=e.createEncryptor(s,o),f=a.finalize(t),m=a.cfg;return CipherParams.create({ciphertext:f,key:s,iv:m.iv,algorithm:e,mode:m.mode,padding:m.padding,blockSize:a.blockSize,formatter:o.format})}static decrypt(e,t,s,r){let o=t;const a=Object.assign(new Base,this.cfg,r);return o=this._parse(o,a.format),e.createDecryptor(s,a).finalize(o.ciphertext)}static _parse(e,t){return typeof e=="string"?t.parse(e,this):e}}SerializableCipher.cfg=Object.assign(new Base,{format:OpenSSLFormatter});const OpenSSLKdf={execute(c,e,t,s){let r=s;r||(r=WordArray.random(64/8));const o=EvpKDFAlgo.create({keySize:e+t}).compute(c,r),a=WordArray.create(o.words.slice(e),t*4);return o.sigBytes=e*4,CipherParams.create({key:o,iv:a,salt:r})}};class PasswordBasedCipher extends SerializableCipher{static encrypt(e,t,s,r){const o=Object.assign(new Base,this.cfg,r),a=o.kdf.execute(s,e.keySize,e.ivSize);o.iv=a.iv;const f=SerializableCipher.encrypt.call(this,e,t,a.key,o);return f.mixIn(a),f}static decrypt(e,t,s,r){let o=t;const a=Object.assign(new Base,this.cfg,r);o=this._parse(o,a.format);const f=a.kdf.execute(s,e.keySize,e.ivSize,o.salt);return a.iv=f.iv,SerializableCipher.decrypt.call(this,e,o,f.key,a)}}PasswordBasedCipher.cfg=Object.assign(SerializableCipher.cfg,{kdf:OpenSSLKdf});const swapEndian=c=>c<<8&4278255360|c>>>8&16711935,Utf16BE={stringify(c){const{words:e,sigBytes:t}=c,s=[];for(let r=0;r<t;r+=2){const o=e[r>>>2]>>>16-r%4*8&65535;s.push(String.fromCharCode(o))}return s.join("")},parse(c){const e=c.length,t=[];for(let s=0;s<e;s+=1)t[s>>>1]|=c.charCodeAt(s)<<16-s%2*16;return WordArray.create(t,e*2)}},Utf16=Utf16BE,Utf16LE={stringify(c){const{words:e,sigBytes:t}=c,s=[];for(let r=0;r<t;r+=2){const o=swapEndian(e[r>>>2]>>>16-r%4*8&65535);s.push(String.fromCharCode(o))}return s.join("")},parse(c){const e=c.length,t=[];for(let s=0;s<e;s+=1)t[s>>>1]|=swapEndian(c.charCodeAt(s)<<16-s%2*16);return WordArray.create(t,e*2)}},W$2=[];class SHA1Algo extends Hasher{_doReset(){this._hash=new WordArray([1732584193,4023233417,2562383102,271733878,3285377520])}_doProcessBlock(e,t){const s=this._hash.words;let r=s[0],o=s[1],a=s[2],f=s[3],m=s[4];for(let g=0;g<80;g+=1){if(g<16)W$2[g]=e[t+g]|0;else{const y=W$2[g-3]^W$2[g-8]^W$2[g-14]^W$2[g-16];W$2[g]=y<<1|y>>>31}let p=(r<<5|r>>>27)+m+W$2[g];g<20?p+=(o&a|~o&f)+1518500249:g<40?p+=(o^a^f)+1859775393:g<60?p+=(o&a|o&f|a&f)-1894007588:p+=(o^a^f)-899497514,m=f,f=a,a=o<<30|o>>>2,o=r,r=p}s[0]=s[0]+r|0,s[1]=s[1]+o|0,s[2]=s[2]+a|0,s[3]=s[3]+f|0,s[4]=s[4]+m|0}_doFinalize(){const e=this._data,t=e.words,s=this._nDataBytes*8,r=e.sigBytes*8;return t[r>>>5]|=128<<24-r%32,t[(r+64>>>9<<4)+14]=Math.floor(s/4294967296),t[(r+64>>>9<<4)+15]=s,e.sigBytes=t.length*4,this._process(),this._hash}clone(){const e=super.clone.call(this);return e._hash=this._hash.clone(),e}}const SHA1=Hasher._createHelper(SHA1Algo),HmacSHA1=Hasher._createHmacHelper(SHA1Algo),H=[],K$1=[],isPrime=c=>{const e=Math.sqrt(c);for(let t=2;t<=e;t+=1)if(!(c%t))return!1;return!0},getFractionalBits=c=>(c-(c|0))*4294967296|0;let n=2,nPrime=0;for(;nPrime<64;)isPrime(n)&&(nPrime<8&&(H[nPrime]=getFractionalBits(n**(1/2))),K$1[nPrime]=getFractionalBits(n**(1/3)),nPrime+=1),n+=1;const W$1=[];class SHA256Algo extends Hasher{_doReset(){this._hash=new WordArray(H.slice(0))}_doProcessBlock(e,t){const s=this._hash.words;let r=s[0],o=s[1],a=s[2],f=s[3],m=s[4],g=s[5],p=s[6],y=s[7];for(let C=0;C<64;C+=1){if(C<16)W$1[C]=e[t+C]|0;else{const R=W$1[C-15],L=(R<<25|R>>>7)^(R<<14|R>>>18)^R>>>3,B=W$1[C-2],X=(B<<15|B>>>17)^(B<<13|B>>>19)^B>>>10;W$1[C]=L+W$1[C-7]+X+W$1[C-16]}const A=m&g^~m&p,w=r&o^r&a^o&a,_=(r<<30|r>>>2)^(r<<19|r>>>13)^(r<<10|r>>>22),E=(m<<26|m>>>6)^(m<<21|m>>>11)^(m<<7|m>>>25),v=y+E+A+K$1[C]+W$1[C],k=_+w;y=p,p=g,g=m,m=f+v|0,f=a,a=o,o=r,r=v+k|0}s[0]=s[0]+r|0,s[1]=s[1]+o|0,s[2]=s[2]+a|0,s[3]=s[3]+f|0,s[4]=s[4]+m|0,s[5]=s[5]+g|0,s[6]=s[6]+p|0,s[7]=s[7]+y|0}_doFinalize(){const e=this._data,t=e.words,s=this._nDataBytes*8,r=e.sigBytes*8;return t[r>>>5]|=128<<24-r%32,t[(r+64>>>9<<4)+14]=Math.floor(s/4294967296),t[(r+64>>>9<<4)+15]=s,e.sigBytes=t.length*4,this._process(),this._hash}clone(){const e=super.clone.call(this);return e._hash=this._hash.clone(),e}}const SHA256=Hasher._createHelper(SHA256Algo),HmacSHA256=Hasher._createHmacHelper(SHA256Algo);class SHA224Algo extends SHA256Algo{_doReset(){this._hash=new WordArray([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])}_doFinalize(){const e=super._doFinalize.call(this);return e.sigBytes-=4,e}}const SHA224=SHA256Algo._createHelper(SHA224Algo),HmacSHA224=SHA256Algo._createHmacHelper(SHA224Algo),K=[new X64Word(1116352408,3609767458),new X64Word(1899447441,602891725),new X64Word(3049323471,3964484399),new X64Word(3921009573,2173295548),new X64Word(961987163,4081628472),new X64Word(1508970993,3053834265),new X64Word(2453635748,2937671579),new X64Word(2870763221,3664609560),new X64Word(3624381080,2734883394),new X64Word(310598401,1164996542),new X64Word(607225278,1323610764),new X64Word(1426881987,3590304994),new X64Word(1925078388,4068182383),new X64Word(2162078206,991336113),new X64Word(2614888103,633803317),new X64Word(3248222580,3479774868),new X64Word(3835390401,2666613458),new X64Word(4022224774,944711139),new X64Word(264347078,2341262773),new X64Word(604807628,2007800933),new X64Word(770255983,1495990901),new X64Word(1249150122,1856431235),new X64Word(1555081692,3175218132),new X64Word(1996064986,2198950837),new X64Word(2554220882,3999719339),new X64Word(2821834349,766784016),new X64Word(2952996808,2566594879),new X64Word(3210313671,3203337956),new X64Word(3336571891,1034457026),new X64Word(3584528711,2466948901),new X64Word(113926993,3758326383),new X64Word(338241895,168717936),new X64Word(666307205,1188179964),new X64Word(773529912,1546045734),new X64Word(1294757372,1522805485),new X64Word(1396182291,2643833823),new X64Word(1695183700,2343527390),new X64Word(1986661051,1014477480),new X64Word(2177026350,1206759142),new X64Word(2456956037,344077627),new X64Word(2730485921,1290863460),new X64Word(2820302411,3158454273),new X64Word(3259730800,3505952657),new X64Word(3345764771,106217008),new X64Word(3516065817,3606008344),new X64Word(3600352804,1432725776),new X64Word(4094571909,1467031594),new X64Word(275423344,851169720),new X64Word(430227734,3100823752),new X64Word(506948616,1363258195),new X64Word(659060556,3750685593),new X64Word(883997877,3785050280),new X64Word(958139571,3318307427),new X64Word(1322822218,3812723403),new X64Word(1537002063,2003034995),new X64Word(1747873779,3602036899),new X64Word(1955562222,1575990012),new X64Word(2024104815,1125592928),new X64Word(2227730452,2716904306),new X64Word(2361852424,442776044),new X64Word(2428436474,593698344),new X64Word(2756734187,3733110249),new X64Word(3204031479,2999351573),new X64Word(3329325298,3815920427),new X64Word(3391569614,3928383900),new X64Word(3515267271,566280711),new X64Word(3940187606,3454069534),new X64Word(4118630271,4000239992),new X64Word(116418474,1914138554),new X64Word(174292421,2731055270),new X64Word(289380356,3203993006),new X64Word(460393269,320620315),new X64Word(685471733,587496836),new X64Word(852142971,1086792851),new X64Word(1017036298,365543100),new X64Word(1126000580,2618297676),new X64Word(1288033470,3409855158),new X64Word(1501505948,4234509866),new X64Word(1607167915,987167468),new X64Word(1816402316,1246189591)],W=[];for(let c=0;c<80;c+=1)W[c]=new X64Word;class SHA512Algo extends Hasher{constructor(){super(),this.blockSize=1024/32}_doReset(){this._hash=new X64WordArray([new X64Word(1779033703,4089235720),new X64Word(3144134277,2227873595),new X64Word(1013904242,4271175723),new X64Word(2773480762,1595750129),new X64Word(1359893119,2917565137),new X64Word(2600822924,725511199),new X64Word(528734635,4215389547),new X64Word(1541459225,327033209)])}_doProcessBlock(e,t){const s=this._hash.words,r=s[0],o=s[1],a=s[2],f=s[3],m=s[4],g=s[5],p=s[6],y=s[7],C=r.high;let A=r.low;const w=o.high;let _=o.low;const E=a.high;let v=a.low;const k=f.high;let R=f.low;const L=m.high;let B=m.low;const X=g.high;let U=g.low;const M=p.high;let F=p.low;const $=y.high;let ee=y.low,te=C,he=A,re=w,pe=_,le=E,J=v,se=k,Y=R,I=L,P=B,O=X,q=U,b=M,D=F,N=$,j=ee;for(let V=0;V<80;V+=1){let Z,Q;const ie=W[V];if(V<16)ie.high=e[t+V*2]|0,Q=ie.high,ie.low=e[t+V*2+1]|0,Z=ie.low;else{const Fe=W[V-15],Pe=Fe.high,Ne=Fe.low,Ie=(Pe>>>1|Ne<<31)^(Pe>>>8|Ne<<24)^Pe>>>7,Le=(Ne>>>1|Pe<<31)^(Ne>>>8|Pe<<24)^(Ne>>>7|Pe<<25),We=W[V-2],Ue=We.high,me=We.low,oe=(Ue>>>19|me<<13)^(Ue<<3|me>>>29)^Ue>>>6,ae=(me>>>19|Ue<<13)^(me<<3|Ue>>>29)^(me>>>6|Ue<<26),Ce=W[V-7],Se=Ce.high,Re=Ce.low,Te=W[V-16],He=Te.high,Oe=Te.low;Z=Le+Re,Q=Ie+Se+(Z>>>0<Le>>>0?1:0),Z+=ae,Q=Q+oe+(Z>>>0<ae>>>0?1:0),Z+=Oe,Q=Q+He+(Z>>>0<Oe>>>0?1:0),ie.high=Q,ie.low=Z}const ce=I&O^~I&b,ne=P&q^~P&D,de=te&re^te&le^re&le,fe=he&pe^he&J^pe&J,ue=(te>>>28|he<<4)^(te<<30|he>>>2)^(te<<25|he>>>7),ge=(he>>>28|te<<4)^(he<<30|te>>>2)^(he<<25|te>>>7),Ae=(I>>>14|P<<18)^(I>>>18|P<<14)^(I<<23|P>>>9),ye=(P>>>14|I<<18)^(P>>>18|I<<14)^(P<<23|I>>>9),we=K[V],xe=we.high,be=we.low;let _e=j+ye,ve=N+Ae+(_e>>>0<j>>>0?1:0);_e+=ne,ve=ve+ce+(_e>>>0<ne>>>0?1:0),_e+=be,ve=ve+xe+(_e>>>0<be>>>0?1:0),_e+=Z,ve=ve+Q+(_e>>>0<Z>>>0?1:0);const ke=ge+fe,Ee=ue+de+(ke>>>0<ge>>>0?1:0);N=b,j=D,b=O,D=q,O=I,q=P,P=Y+_e|0,I=se+ve+(P>>>0<Y>>>0?1:0)|0,se=le,Y=J,le=re,J=pe,re=te,pe=he,he=_e+ke|0,te=ve+Ee+(he>>>0<_e>>>0?1:0)|0}r.low=A+he,A=r.low,r.high=C+te+(A>>>0<he>>>0?1:0),o.low=_+pe,_=o.low,o.high=w+re+(_>>>0<pe>>>0?1:0),a.low=v+J,v=a.low,a.high=E+le+(v>>>0<J>>>0?1:0),f.low=R+Y,R=f.low,f.high=k+se+(R>>>0<Y>>>0?1:0),m.low=B+P,B=m.low,m.high=L+I+(B>>>0<P>>>0?1:0),g.low=U+q,U=g.low,g.high=X+O+(U>>>0<q>>>0?1:0),p.low=F+D,F=p.low,p.high=M+b+(F>>>0<D>>>0?1:0),y.low=ee+j,ee=y.low,y.high=$+N+(ee>>>0<j>>>0?1:0)}_doFinalize(){const e=this._data,t=e.words,s=this._nDataBytes*8,r=e.sigBytes*8;return t[r>>>5]|=128<<24-r%32,t[(r+128>>>10<<5)+30]=Math.floor(s/4294967296),t[(r+128>>>10<<5)+31]=s,e.sigBytes=t.length*4,this._process(),this._hash.toX32()}clone(){const e=super.clone.call(this);return e._hash=this._hash.clone(),e}}const SHA512=Hasher._createHelper(SHA512Algo),HmacSHA512=Hasher._createHmacHelper(SHA512Algo);class SHA384Algo extends SHA512Algo{_doReset(){this._hash=new X64WordArray([new X64Word(3418070365,3238371032),new X64Word(1654270250,914150663),new X64Word(2438529370,812702999),new X64Word(355462360,4144912697),new X64Word(1731405415,4290775857),new X64Word(2394180231,1750603025),new X64Word(3675008525,1694076839),new X64Word(1203062813,3204075428)])}_doFinalize(){const e=super._doFinalize.call(this);return e.sigBytes-=16,e}}const SHA384=SHA512Algo._createHelper(SHA384Algo),HmacSHA384=SHA512Algo._createHmacHelper(SHA384Algo),RHO_OFFSETS=[],PI_INDEXES=[],ROUND_CONSTANTS=[];let _x=1,_y=0;for(let c=0;c<24;c+=1){RHO_OFFSETS[_x+5*_y]=(c+1)*(c+2)/2%64;const e=_y%5,t=(2*_x+3*_y)%5;_x=e,_y=t}for(let c=0;c<5;c+=1)for(let e=0;e<5;e+=1)PI_INDEXES[c+5*e]=e+(2*c+3*e)%5*5;let LFSR=1;for(let c=0;c<24;c+=1){let e=0,t=0;for(let s=0;s<7;s+=1){if(LFSR&1){const r=(1<<s)-1;r<32?t^=1<<r:e^=1<<r-32}LFSR&128?LFSR=LFSR<<1^113:LFSR<<=1}ROUND_CONSTANTS[c]=X64Word.create(e,t)}const T=[];for(let c=0;c<25;c+=1)T[c]=X64Word.create();class SHA3Algo extends Hasher{constructor(e){super(Object.assign({outputLength:512},e))}_doReset(){this._state=[];const e=this._state;for(let t=0;t<25;t+=1)e[t]=new X64Word;this.blockSize=(1600-2*this.cfg.outputLength)/32}_doProcessBlock(e,t){const s=this._state,r=this.blockSize/2;for(let o=0;o<r;o+=1){let a=e[t+2*o],f=e[t+2*o+1];a=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360,f=(f<<8|f>>>24)&16711935|(f<<24|f>>>8)&4278255360;const m=s[o];m.high^=f,m.low^=a}for(let o=0;o<24;o+=1){for(let p=0;p<5;p+=1){let y=0,C=0;for(let w=0;w<5;w+=1){const _=s[p+5*w];y^=_.high,C^=_.low}const A=T[p];A.high=y,A.low=C}for(let p=0;p<5;p+=1){const y=T[(p+4)%5],C=T[(p+1)%5],A=C.high,w=C.low,_=y.high^(A<<1|w>>>31),E=y.low^(w<<1|A>>>31);for(let v=0;v<5;v+=1){const k=s[p+5*v];k.high^=_,k.low^=E}}for(let p=1;p<25;p+=1){let y,C;const A=s[p],w=A.high,_=A.low,E=RHO_OFFSETS[p];E<32?(y=w<<E|_>>>32-E,C=_<<E|w>>>32-E):(y=_<<E-32|w>>>64-E,C=w<<E-32|_>>>64-E);const v=T[PI_INDEXES[p]];v.high=y,v.low=C}const a=T[0],f=s[0];a.high=f.high,a.low=f.low;for(let p=0;p<5;p+=1)for(let y=0;y<5;y+=1){const C=p+5*y,A=s[C],w=T[C],_=T[(p+1)%5+5*y],E=T[(p+2)%5+5*y];A.high=w.high^~_.high&E.high,A.low=w.low^~_.low&E.low}const m=s[0],g=ROUND_CONSTANTS[o];m.high^=g.high,m.low^=g.low}}_doFinalize(){const e=this._data,t=e.words,s=e.sigBytes*8,r=this.blockSize*32;t[s>>>5]|=1<<24-s%32,t[(Math.ceil((s+1)/r)*r>>>5)-1]|=128,e.sigBytes=t.length*4,this._process();const o=this._state,a=this.cfg.outputLength/8,f=a/8,m=[];for(let g=0;g<f;g+=1){const p=o[g];let y=p.high,C=p.low;y=(y<<8|y>>>24)&16711935|(y<<24|y>>>8)&4278255360,C=(C<<8|C>>>24)&16711935|(C<<24|C>>>8)&4278255360,m.push(C),m.push(y)}return new WordArray(m,a)}clone(){const e=super.clone.call(this);e._state=this._state.slice(0);const t=e._state;for(let s=0;s<25;s+=1)t[s]=t[s].clone();return e}}const SHA3=Hasher._createHelper(SHA3Algo),HmacSHA3=Hasher._createHmacHelper(SHA3Algo);/** @preserve
(c) 2012 by Cédric Mesnil. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted
provided that the following conditions are met:

    - Redistributions of source code must retain the above copyright notice, this list of
    conditions and the following disclaimer.
    - Redistributions in binary form must reproduce the above copyright notice, this list
    of conditions and the following disclaimer in the documentation and/or other materials
    provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY
WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/const _zl=WordArray.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),_zr=WordArray.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),_sl=WordArray.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),_sr=WordArray.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),_hl=WordArray.create([0,1518500249,1859775393,2400959708,2840853838]),_hr=WordArray.create([1352829926,1548603684,1836072691,2053994217,0]),f1=(c,e,t)=>c^e^t,f2=(c,e,t)=>c&e|~c&t,f3=(c,e,t)=>(c|~e)^t,f4=(c,e,t)=>c&t|e&~t,f5=(c,e,t)=>c^(e|~t),rotl=(c,e)=>c<<e|c>>>32-e;class RIPEMD160Algo extends Hasher{_doReset(){this._hash=WordArray.create([1732584193,4023233417,2562383102,271733878,3285377520])}_doProcessBlock(e,t){const s=e;for(let X=0;X<16;X+=1){const U=t+X,M=s[U];s[U]=(M<<8|M>>>24)&16711935|(M<<24|M>>>8)&4278255360}const r=this._hash.words,o=_hl.words,a=_hr.words,f=_zl.words,m=_zr.words,g=_sl.words,p=_sr.words;let y=r[0],C=r[1],A=r[2],w=r[3],_=r[4],E=r[0],v=r[1],k=r[2],R=r[3],L=r[4],B;for(let X=0;X<80;X+=1)B=y+s[t+f[X]]|0,X<16?B+=f1(C,A,w)+o[0]:X<32?B+=f2(C,A,w)+o[1]:X<48?B+=f3(C,A,w)+o[2]:X<64?B+=f4(C,A,w)+o[3]:B+=f5(C,A,w)+o[4],B|=0,B=rotl(B,g[X]),B=B+_|0,y=_,_=w,w=rotl(A,10),A=C,C=B,B=E+s[t+m[X]]|0,X<16?B+=f5(v,k,R)+a[0]:X<32?B+=f4(v,k,R)+a[1]:X<48?B+=f3(v,k,R)+a[2]:X<64?B+=f2(v,k,R)+a[3]:B+=f1(v,k,R)+a[4],B|=0,B=rotl(B,p[X]),B=B+L|0,E=L,L=R,R=rotl(k,10),k=v,v=B;B=r[1]+A+R|0,r[1]=r[2]+w+L|0,r[2]=r[3]+_+E|0,r[3]=r[4]+y+v|0,r[4]=r[0]+C+k|0,r[0]=B}_doFinalize(){const e=this._data,t=e.words,s=this._nDataBytes*8,r=e.sigBytes*8;t[r>>>5]|=128<<24-r%32,t[(r+64>>>9<<4)+14]=(s<<8|s>>>24)&16711935|(s<<24|s>>>8)&4278255360,e.sigBytes=(t.length+1)*4,this._process();const o=this._hash,a=o.words;for(let f=0;f<5;f+=1){const m=a[f];a[f]=(m<<8|m>>>24)&16711935|(m<<24|m>>>8)&4278255360}return o}clone(){const e=super.clone.call(this);return e._hash=this._hash.clone(),e}}const RIPEMD160=Hasher._createHelper(RIPEMD160Algo),HmacRIPEMD160=Hasher._createHmacHelper(RIPEMD160Algo);class PBKDF2Algo extends Base{constructor(e){super(),this.cfg=Object.assign(new Base,{keySize:128/32,hasher:SHA1Algo,iterations:1},e)}compute(e,t){const{cfg:s}=this,r=HMAC.create(s.hasher,e),o=WordArray.create(),a=WordArray.create([1]),f=o.words,m=a.words,{keySize:g,iterations:p}=s;for(;f.length<g;){const y=r.update(t).finalize(a);r.reset();const C=y.words,A=C.length;let w=y;for(let _=1;_<p;_+=1){w=r.finalize(w),r.reset();const E=w.words;for(let v=0;v<A;v+=1)C[v]^=E[v]}o.concat(y),m[0]+=1}return o.sigBytes=g*4,o}}const PBKDF2=(c,e,t)=>PBKDF2Algo.create(t).compute(c,e),_SBOX=[],INV_SBOX=[],_SUB_MIX_0=[],_SUB_MIX_1=[],_SUB_MIX_2=[],_SUB_MIX_3=[],INV_SUB_MIX_0=[],INV_SUB_MIX_1=[],INV_SUB_MIX_2=[],INV_SUB_MIX_3=[],d=[];for(let c=0;c<256;c+=1)c<128?d[c]=c<<1:d[c]=c<<1^283;let x=0,xi=0;for(let c=0;c<256;c+=1){let e=xi^xi<<1^xi<<2^xi<<3^xi<<4;e=e>>>8^e&255^99,_SBOX[x]=e,INV_SBOX[e]=x;const t=d[x],s=d[t],r=d[s];let o=d[e]*257^e*16843008;_SUB_MIX_0[x]=o<<24|o>>>8,_SUB_MIX_1[x]=o<<16|o>>>16,_SUB_MIX_2[x]=o<<8|o>>>24,_SUB_MIX_3[x]=o,o=r*16843009^s*65537^t*257^x*16843008,INV_SUB_MIX_0[e]=o<<24|o>>>8,INV_SUB_MIX_1[e]=o<<16|o>>>16,INV_SUB_MIX_2[e]=o<<8|o>>>24,INV_SUB_MIX_3[e]=o,x?(x=t^d[d[d[r^t]]],xi^=d[d[xi]]):(xi=1,x=xi)}const RCON=[0,1,2,4,8,16,32,64,128,27,54];class AESAlgo extends BlockCipher{_doReset(){let e;if(this._nRounds&&this._keyPriorReset===this._key)return;this._keyPriorReset=this._key;const t=this._keyPriorReset,s=t.words,r=t.sigBytes/4;this._nRounds=r+6;const a=(this._nRounds+1)*4;this._keySchedule=[];const f=this._keySchedule;for(let g=0;g<a;g+=1)g<r?f[g]=s[g]:(e=f[g-1],g%r?r>6&&g%r===4&&(e=_SBOX[e>>>24]<<24|_SBOX[e>>>16&255]<<16|_SBOX[e>>>8&255]<<8|_SBOX[e&255]):(e=e<<8|e>>>24,e=_SBOX[e>>>24]<<24|_SBOX[e>>>16&255]<<16|_SBOX[e>>>8&255]<<8|_SBOX[e&255],e^=RCON[g/r|0]<<24),f[g]=f[g-r]^e);this._invKeySchedule=[];const m=this._invKeySchedule;for(let g=0;g<a;g+=1){const p=a-g;g%4?e=f[p]:e=f[p-4],g<4||p<=4?m[g]=e:m[g]=INV_SUB_MIX_0[_SBOX[e>>>24]]^INV_SUB_MIX_1[_SBOX[e>>>16&255]]^INV_SUB_MIX_2[_SBOX[e>>>8&255]]^INV_SUB_MIX_3[_SBOX[e&255]]}}encryptBlock(e,t){this._doCryptBlock(e,t,this._keySchedule,_SUB_MIX_0,_SUB_MIX_1,_SUB_MIX_2,_SUB_MIX_3,_SBOX)}decryptBlock(e,t){const s=e;let r=s[t+1];s[t+1]=s[t+3],s[t+3]=r,this._doCryptBlock(s,t,this._invKeySchedule,INV_SUB_MIX_0,INV_SUB_MIX_1,INV_SUB_MIX_2,INV_SUB_MIX_3,INV_SBOX),r=s[t+1],s[t+1]=s[t+3],s[t+3]=r}_doCryptBlock(e,t,s,r,o,a,f,m){const g=e,p=this._nRounds;let y=g[t]^s[0],C=g[t+1]^s[1],A=g[t+2]^s[2],w=g[t+3]^s[3],_=4;for(let L=1;L<p;L+=1){const B=r[y>>>24]^o[C>>>16&255]^a[A>>>8&255]^f[w&255]^s[_];_+=1;const X=r[C>>>24]^o[A>>>16&255]^a[w>>>8&255]^f[y&255]^s[_];_+=1;const U=r[A>>>24]^o[w>>>16&255]^a[y>>>8&255]^f[C&255]^s[_];_+=1;const M=r[w>>>24]^o[y>>>16&255]^a[C>>>8&255]^f[A&255]^s[_];_+=1,y=B,C=X,A=U,w=M}const E=(m[y>>>24]<<24|m[C>>>16&255]<<16|m[A>>>8&255]<<8|m[w&255])^s[_];_+=1;const v=(m[C>>>24]<<24|m[A>>>16&255]<<16|m[w>>>8&255]<<8|m[y&255])^s[_];_+=1;const k=(m[A>>>24]<<24|m[w>>>16&255]<<16|m[y>>>8&255]<<8|m[C&255])^s[_];_+=1;const R=(m[w>>>24]<<24|m[y>>>16&255]<<16|m[C>>>8&255]<<8|m[A&255])^s[_];_+=1,g[t]=E,g[t+1]=v,g[t+2]=k,g[t+3]=R}}AESAlgo.keySize=256/32;const AES=BlockCipher._createHelper(AESAlgo),PC1=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],PC2=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],BIT_SHIFTS=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],SBOX_P=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],SBOX_MASK=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679];function exchangeLR(c,e){const t=(this._lBlock>>>c^this._rBlock)&e;this._rBlock^=t,this._lBlock^=t<<c}function exchangeRL(c,e){const t=(this._rBlock>>>c^this._lBlock)&e;this._lBlock^=t,this._rBlock^=t<<c}class DESAlgo extends BlockCipher{_doReset(){const t=this._key.words,s=[];for(let a=0;a<56;a+=1){const f=PC1[a]-1;s[a]=t[f>>>5]>>>31-f%32&1}this._subKeys=[];const r=this._subKeys;for(let a=0;a<16;a+=1){r[a]=[];const f=r[a],m=BIT_SHIFTS[a];for(let g=0;g<24;g+=1)f[g/6|0]|=s[(PC2[g]-1+m)%28]<<31-g%6,f[4+(g/6|0)]|=s[28+(PC2[g+24]-1+m)%28]<<31-g%6;f[0]=f[0]<<1|f[0]>>>31;for(let g=1;g<7;g+=1)f[g]>>>=(g-1)*4+3;f[7]=f[7]<<5|f[7]>>>27}this._invSubKeys=[];const o=this._invSubKeys;for(let a=0;a<16;a+=1)o[a]=r[15-a]}encryptBlock(e,t){this._doCryptBlock(e,t,this._subKeys)}decryptBlock(e,t){this._doCryptBlock(e,t,this._invSubKeys)}_doCryptBlock(e,t,s){const r=e;this._lBlock=e[t],this._rBlock=e[t+1],exchangeLR.call(this,4,252645135),exchangeLR.call(this,16,65535),exchangeRL.call(this,2,858993459),exchangeRL.call(this,8,16711935),exchangeLR.call(this,1,1431655765);for(let a=0;a<16;a+=1){const f=s[a],m=this._lBlock,g=this._rBlock;let p=0;for(let y=0;y<8;y+=1)p|=SBOX_P[y][((g^f[y])&SBOX_MASK[y])>>>0];this._lBlock=g,this._rBlock=m^p}const o=this._lBlock;this._lBlock=this._rBlock,this._rBlock=o,exchangeLR.call(this,1,1431655765),exchangeRL.call(this,8,16711935),exchangeRL.call(this,2,858993459),exchangeLR.call(this,16,65535),exchangeLR.call(this,4,252645135),r[t]=this._lBlock,r[t+1]=this._rBlock}}DESAlgo.keySize=64/32;DESAlgo.ivSize=64/32;DESAlgo.blockSize=64/32;const DES=BlockCipher._createHelper(DESAlgo);class TripleDESAlgo extends BlockCipher{_doReset(){const t=this._key.words;if(t.length!==2&&t.length!==4&&t.length<6)throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");const s=t.slice(0,2),r=t.length<4?t.slice(0,2):t.slice(2,4),o=t.length<6?t.slice(0,2):t.slice(4,6);this._des1=DESAlgo.createEncryptor(WordArray.create(s)),this._des2=DESAlgo.createEncryptor(WordArray.create(r)),this._des3=DESAlgo.createEncryptor(WordArray.create(o))}encryptBlock(e,t){this._des1.encryptBlock(e,t),this._des2.decryptBlock(e,t),this._des3.encryptBlock(e,t)}decryptBlock(e,t){this._des3.decryptBlock(e,t),this._des2.encryptBlock(e,t),this._des1.decryptBlock(e,t)}}TripleDESAlgo.keySize=192/32;TripleDESAlgo.ivSize=64/32;TripleDESAlgo.blockSize=64/32;const TripleDES=BlockCipher._createHelper(TripleDESAlgo),S$1=[],C_$1=[],G$1=[];function nextState$1(){const c=this._X,e=this._C;for(let t=0;t<8;t+=1)C_$1[t]=e[t];e[0]=e[0]+1295307597+this._b|0,e[1]=e[1]+3545052371+(e[0]>>>0<C_$1[0]>>>0?1:0)|0,e[2]=e[2]+886263092+(e[1]>>>0<C_$1[1]>>>0?1:0)|0,e[3]=e[3]+1295307597+(e[2]>>>0<C_$1[2]>>>0?1:0)|0,e[4]=e[4]+3545052371+(e[3]>>>0<C_$1[3]>>>0?1:0)|0,e[5]=e[5]+886263092+(e[4]>>>0<C_$1[4]>>>0?1:0)|0,e[6]=e[6]+1295307597+(e[5]>>>0<C_$1[5]>>>0?1:0)|0,e[7]=e[7]+3545052371+(e[6]>>>0<C_$1[6]>>>0?1:0)|0,this._b=e[7]>>>0<C_$1[7]>>>0?1:0;for(let t=0;t<8;t+=1){const s=c[t]+e[t],r=s&65535,o=s>>>16,a=((r*r>>>17)+r*o>>>15)+o*o,f=((s&4294901760)*s|0)+((s&65535)*s|0);G$1[t]=a^f}c[0]=G$1[0]+(G$1[7]<<16|G$1[7]>>>16)+(G$1[6]<<16|G$1[6]>>>16)|0,c[1]=G$1[1]+(G$1[0]<<8|G$1[0]>>>24)+G$1[7]|0,c[2]=G$1[2]+(G$1[1]<<16|G$1[1]>>>16)+(G$1[0]<<16|G$1[0]>>>16)|0,c[3]=G$1[3]+(G$1[2]<<8|G$1[2]>>>24)+G$1[1]|0,c[4]=G$1[4]+(G$1[3]<<16|G$1[3]>>>16)+(G$1[2]<<16|G$1[2]>>>16)|0,c[5]=G$1[5]+(G$1[4]<<8|G$1[4]>>>24)+G$1[3]|0,c[6]=G$1[6]+(G$1[5]<<16|G$1[5]>>>16)+(G$1[4]<<16|G$1[4]>>>16)|0,c[7]=G$1[7]+(G$1[6]<<8|G$1[6]>>>24)+G$1[5]|0}class RabbitAlgo extends StreamCipher{constructor(...e){super(...e),this.blockSize=128/32,this.ivSize=64/32}_doReset(){const e=this._key.words,{iv:t}=this.cfg;for(let o=0;o<4;o+=1)e[o]=(e[o]<<8|e[o]>>>24)&16711935|(e[o]<<24|e[o]>>>8)&4278255360;this._X=[e[0],e[3]<<16|e[2]>>>16,e[1],e[0]<<16|e[3]>>>16,e[2],e[1]<<16|e[0]>>>16,e[3],e[2]<<16|e[1]>>>16];const s=this._X;this._C=[e[2]<<16|e[2]>>>16,e[0]&4294901760|e[1]&65535,e[3]<<16|e[3]>>>16,e[1]&4294901760|e[2]&65535,e[0]<<16|e[0]>>>16,e[2]&4294901760|e[3]&65535,e[1]<<16|e[1]>>>16,e[3]&4294901760|e[0]&65535];const r=this._C;this._b=0;for(let o=0;o<4;o+=1)nextState$1.call(this);for(let o=0;o<8;o+=1)r[o]^=s[o+4&7];if(t){const o=t.words,a=o[0],f=o[1],m=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360,g=(f<<8|f>>>24)&16711935|(f<<24|f>>>8)&4278255360,p=m>>>16|g&4294901760,y=g<<16|m&65535;r[0]^=m,r[1]^=p,r[2]^=g,r[3]^=y,r[4]^=m,r[5]^=p,r[6]^=g,r[7]^=y;for(let C=0;C<4;C+=1)nextState$1.call(this)}}_doProcessBlock(e,t){const s=e,r=this._X;nextState$1.call(this),S$1[0]=r[0]^r[5]>>>16^r[3]<<16,S$1[1]=r[2]^r[7]>>>16^r[5]<<16,S$1[2]=r[4]^r[1]>>>16^r[7]<<16,S$1[3]=r[6]^r[3]>>>16^r[1]<<16;for(let o=0;o<4;o+=1)S$1[o]=(S$1[o]<<8|S$1[o]>>>24)&16711935|(S$1[o]<<24|S$1[o]>>>8)&4278255360,s[t+o]^=S$1[o]}}const Rabbit=StreamCipher._createHelper(RabbitAlgo),S=[],C_=[],G=[];function nextState(){const c=this._X,e=this._C;for(let t=0;t<8;t+=1)C_[t]=e[t];e[0]=e[0]+1295307597+this._b|0,e[1]=e[1]+3545052371+(e[0]>>>0<C_[0]>>>0?1:0)|0,e[2]=e[2]+886263092+(e[1]>>>0<C_[1]>>>0?1:0)|0,e[3]=e[3]+1295307597+(e[2]>>>0<C_[2]>>>0?1:0)|0,e[4]=e[4]+3545052371+(e[3]>>>0<C_[3]>>>0?1:0)|0,e[5]=e[5]+886263092+(e[4]>>>0<C_[4]>>>0?1:0)|0,e[6]=e[6]+1295307597+(e[5]>>>0<C_[5]>>>0?1:0)|0,e[7]=e[7]+3545052371+(e[6]>>>0<C_[6]>>>0?1:0)|0,this._b=e[7]>>>0<C_[7]>>>0?1:0;for(let t=0;t<8;t+=1){const s=c[t]+e[t],r=s&65535,o=s>>>16,a=((r*r>>>17)+r*o>>>15)+o*o,f=((s&4294901760)*s|0)+((s&65535)*s|0);G[t]=a^f}c[0]=G[0]+(G[7]<<16|G[7]>>>16)+(G[6]<<16|G[6]>>>16)|0,c[1]=G[1]+(G[0]<<8|G[0]>>>24)+G[7]|0,c[2]=G[2]+(G[1]<<16|G[1]>>>16)+(G[0]<<16|G[0]>>>16)|0,c[3]=G[3]+(G[2]<<8|G[2]>>>24)+G[1]|0,c[4]=G[4]+(G[3]<<16|G[3]>>>16)+(G[2]<<16|G[2]>>>16)|0,c[5]=G[5]+(G[4]<<8|G[4]>>>24)+G[3]|0,c[6]=G[6]+(G[5]<<16|G[5]>>>16)+(G[4]<<16|G[4]>>>16)|0,c[7]=G[7]+(G[6]<<8|G[6]>>>24)+G[5]|0}class RabbitLegacyAlgo extends StreamCipher{constructor(...e){super(...e),this.blockSize=128/32,this.ivSize=64/32}_doReset(){const e=this._key.words,{iv:t}=this.cfg;this._X=[e[0],e[3]<<16|e[2]>>>16,e[1],e[0]<<16|e[3]>>>16,e[2],e[1]<<16|e[0]>>>16,e[3],e[2]<<16|e[1]>>>16];const s=this._X;this._C=[e[2]<<16|e[2]>>>16,e[0]&4294901760|e[1]&65535,e[3]<<16|e[3]>>>16,e[1]&4294901760|e[2]&65535,e[0]<<16|e[0]>>>16,e[2]&4294901760|e[3]&65535,e[1]<<16|e[1]>>>16,e[3]&4294901760|e[0]&65535];const r=this._C;this._b=0;for(let o=0;o<4;o+=1)nextState.call(this);for(let o=0;o<8;o+=1)r[o]^=s[o+4&7];if(t){const o=t.words,a=o[0],f=o[1],m=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360,g=(f<<8|f>>>24)&16711935|(f<<24|f>>>8)&4278255360,p=m>>>16|g&4294901760,y=g<<16|m&65535;r[0]^=m,r[1]^=p,r[2]^=g,r[3]^=y,r[4]^=m,r[5]^=p,r[6]^=g,r[7]^=y;for(let C=0;C<4;C+=1)nextState.call(this)}}_doProcessBlock(e,t){const s=e,r=this._X;nextState.call(this),S[0]=r[0]^r[5]>>>16^r[3]<<16,S[1]=r[2]^r[7]>>>16^r[5]<<16,S[2]=r[4]^r[1]>>>16^r[7]<<16,S[3]=r[6]^r[3]>>>16^r[1]<<16;for(let o=0;o<4;o+=1)S[o]=(S[o]<<8|S[o]>>>24)&16711935|(S[o]<<24|S[o]>>>8)&4278255360,s[t+o]^=S[o]}}const RabbitLegacy=StreamCipher._createHelper(RabbitLegacyAlgo);function generateKeystreamWord(){const c=this._S;let e=this._i,t=this._j,s=0;for(let r=0;r<4;r+=1){e=(e+1)%256,t=(t+c[e])%256;const o=c[e];c[e]=c[t],c[t]=o,s|=c[(c[e]+c[t])%256]<<24-r*8}return this._i=e,this._j=t,s}class RC4Algo extends StreamCipher{_doReset(){const e=this._key,t=e.words,s=e.sigBytes;this._S=[];const r=this._S;for(let o=0;o<256;o+=1)r[o]=o;for(let o=0,a=0;o<256;o+=1){const f=o%s,m=t[f>>>2]>>>24-f%4*8&255;a=(a+r[o]+m)%256;const g=r[o];r[o]=r[a],r[a]=g}this._j=0,this._i=this._j}_doProcessBlock(e,t){const s=e;s[t]^=generateKeystreamWord.call(this)}}RC4Algo.keySize=256/32;RC4Algo.ivSize=0;const RC4=StreamCipher._createHelper(RC4Algo);class RC4DropAlgo extends RC4Algo{constructor(...e){super(...e),Object.assign(this.cfg,{drop:192})}_doReset(){super._doReset.call(this);for(let e=this.cfg.drop;e>0;e-=1)generateKeystreamWord.call(this)}}const RC4Drop=StreamCipher._createHelper(RC4DropAlgo);function generateKeystreamAndEncrypt(c,e,t,s){const r=c;let o;const a=this._iv;a?(o=a.slice(0),this._iv=void 0):o=this._prevBlock,s.encryptBlock(o,0);for(let f=0;f<t;f+=1)r[e+f]^=o[f]}class CFB extends BlockCipherMode{}CFB.Encryptor=class extends CFB{processBlock(c,e){const t=this._cipher,{blockSize:s}=t;generateKeystreamAndEncrypt.call(this,c,e,s,t),this._prevBlock=c.slice(e,e+s)}};CFB.Decryptor=class extends CFB{processBlock(c,e){const t=this._cipher,{blockSize:s}=t,r=c.slice(e,e+s);generateKeystreamAndEncrypt.call(this,c,e,s,t),this._prevBlock=r}};class CTR extends BlockCipherMode{}CTR.Encryptor=class extends CTR{processBlock(c,e){const t=c,s=this._cipher,{blockSize:r}=s,o=this._iv;let a=this._counter;o&&(this._counter=o.slice(0),a=this._counter,this._iv=void 0);const f=a.slice(0);s.encryptBlock(f,0),a[r-1]=a[r-1]+1|0;for(let m=0;m<r;m+=1)t[e+m]^=f[m]}};CTR.Decryptor=CTR.Encryptor;const incWord=c=>{let e=c;if((c>>24&255)===255){let t=c>>16&255,s=c>>8&255,r=c&255;t===255?(t=0,s===255?(s=0,r===255?r=0:r+=1):s+=1):t+=1,e=0,e+=t<<16,e+=s<<8,e+=r}else e+=1<<24;return e},incCounter=c=>{const e=c;return e[0]=incWord(e[0]),e[0]===0&&(e[1]=incWord(e[1])),e};/** @preserve
 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
 * derived from CryptoJS.mode.CTR
 * Jan Hruby jhruby.web@gmail.com
 */class CTRGladman extends BlockCipherMode{}CTRGladman.Encryptor=class extends CTRGladman{processBlock(c,e){const t=c,s=this._cipher,{blockSize:r}=s,o=this._iv;let a=this._counter;o&&(this._counter=o.slice(0),a=this._counter,this._iv=void 0),incCounter(a);const f=a.slice(0);s.encryptBlock(f,0);for(let m=0;m<r;m+=1)t[e+m]^=f[m]}};CTRGladman.Decryptor=CTRGladman.Encryptor;class ECB extends BlockCipherMode{}ECB.Encryptor=class extends ECB{processBlock(c,e){this._cipher.encryptBlock(c,e)}};ECB.Decryptor=class extends ECB{processBlock(c,e){this._cipher.decryptBlock(c,e)}};class OFB extends BlockCipherMode{}OFB.Encryptor=class extends OFB{processBlock(c,e){const t=c,s=this._cipher,{blockSize:r}=s,o=this._iv;let a=this._keystream;o&&(this._keystream=o.slice(0),a=this._keystream,this._iv=void 0),s.encryptBlock(a,0);for(let f=0;f<r;f+=1)t[e+f]^=a[f]}};OFB.Decryptor=OFB.Encryptor;const AnsiX923={pad(c,e){const t=c,s=t.sigBytes,r=e*4,o=r-s%r,a=s+o-1;t.clamp(),t.words[a>>>2]|=o<<24-a%4*8,t.sigBytes+=o},unpad(c){const e=c,t=e.words[e.sigBytes-1>>>2]&255;e.sigBytes-=t}},Iso10126={pad(c,e){const t=e*4,s=t-c.sigBytes%t;c.concat(WordArray.random(s-1)).concat(WordArray.create([s<<24],1))},unpad(c){const e=c,t=e.words[e.sigBytes-1>>>2]&255;e.sigBytes-=t}},ZeroPadding={pad(c,e){const t=c,s=e*4;t.clamp(),t.sigBytes+=s-(c.sigBytes%s||s)},unpad(c){const e=c,t=e.words;for(let s=e.sigBytes-1;s>=0;s-=1)if(t[s>>>2]>>>24-s%4*8&255){e.sigBytes=s+1;break}}},Iso97971={pad(c,e){c.concat(WordArray.create([2147483648],1)),ZeroPadding.pad(c,e)},unpad(c){const e=c;ZeroPadding.unpad(e),e.sigBytes-=1}},NoPadding={pad(){},unpad(){}},HexFormatter={stringify(c){return c.ciphertext.toString(Hex)},parse(c){const e=Hex.parse(c);return CipherParams.create({ciphertext:e})}},CryptoES={lib:{Base,WordArray,BufferedBlockAlgorithm,Hasher,Cipher,StreamCipher,BlockCipherMode,BlockCipher,CipherParams,SerializableCipher,PasswordBasedCipher},x64:{Word:X64Word,WordArray:X64WordArray},enc:{Hex,Latin1,Utf8,Utf16,Utf16BE,Utf16LE,Base64},algo:{HMAC,MD5:MD5Algo,SHA1:SHA1Algo,SHA224:SHA224Algo,SHA256:SHA256Algo,SHA384:SHA384Algo,SHA512:SHA512Algo,SHA3:SHA3Algo,RIPEMD160:RIPEMD160Algo,PBKDF2:PBKDF2Algo,EvpKDF:EvpKDFAlgo,AES:AESAlgo,DES:DESAlgo,TripleDES:TripleDESAlgo,Rabbit:RabbitAlgo,RabbitLegacy:RabbitLegacyAlgo,RC4:RC4Algo,RC4Drop:RC4DropAlgo},mode:{CBC,CFB,CTR,CTRGladman,ECB,OFB},pad:{Pkcs7,AnsiX923,Iso10126,Iso97971,NoPadding,ZeroPadding},format:{OpenSSL:OpenSSLFormatter,Hex:HexFormatter},kdf:{OpenSSL:OpenSSLKdf},MD5,HmacMD5,SHA1,HmacSHA1,SHA224,HmacSHA224,SHA256,HmacSHA256,SHA384,HmacSHA384,SHA512,HmacSHA512,SHA3,HmacSHA3,RIPEMD160,HmacRIPEMD160,PBKDF2,EvpKDF,AES,DES,TripleDES,Rabbit,RabbitLegacy,RC4,RC4Drop};function bytesToWordArray(c){return CryptoES.lib.WordArray.create(c)}function wordArrayToBytes(c){return ByteUtils.int32ArrayToBytes(c.words).slice(0,c.sigBytes)}function md5(c){return c instanceof Uint8Array&&(c=bytesToWordArray(c)),CryptoES.MD5(c)}function rc4(c,e){return c instanceof Uint8Array&&(c=bytesToWordArray(c)),e instanceof Uint8Array&&(e=bytesToWordArray(e)),CryptoES.RC4.encrypt(c,e).ciphertext}function aes(c,e,t=!1){if(c instanceof Uint8Array&&(c=bytesToWordArray(c)),e instanceof Uint8Array&&(e=bytesToWordArray(e)),t){const s=CryptoES.lib.WordArray.create(c.words.slice(0,4));return CryptoES.algo.AES.createDecryptor(e,{mode:CryptoES.mode.CBC,iv:s,padding:CryptoES.pad.Pkcs7}).finalize(c)}else{const s=CryptoES.lib.WordArray.random(16);return CryptoES.algo.AES.createEncryptor(e,{mode:CryptoES.mode.CBC,iv:s,padding:CryptoES.pad.Pkcs7}).finalize(c)}}const AESV2_KEY_PADDING=[115,65,108,84];class AESV2DataCryptor{_n;_key;_tempKey;constructor(e){if(!e)throw new Error("Empty key");if(e.length!==16)throw new Error(`Invalid key length: ${e.length} (shall be 16)`);this._n=e.length,this._key=e,this._tempKey=new Uint8Array(e.length+9)}encrypt(e,t){return this.run(e,t.id,t.generation)}decrypt(e,t){return this.run(e,t.id,t.generation,!0)}run(e,t,s,r=!1){const o=ByteUtils.int32ToBytes(t,!0),a=ByteUtils.int32ToBytes(s,!0);this._tempKey.set(this._key,0),this._tempKey.set(o.subarray(0,3),this._n),this._tempKey.set(a.subarray(0,2),this._n+3),this._tempKey.set(AESV2_KEY_PADDING,this._n+5);const f=wordArrayToBytes(md5(this._tempKey)),m=Math.min(this._n+5,16),g=f.slice(0,m),p=wordArrayToBytes(aes(e,g,r));return r?p.slice(16):p}}class AESV3DataCryptor{_n;_key;constructor(e){if(!e)throw new Error("Empty key");if(e.length!==32)throw new Error(`Invalid key length: ${e.length} (shall be 32)`);this._n=e.length,this._key=e}encrypt(e,t){return this.run(e,t.id,t.generation)}decrypt(e,t){return this.run(e,t.id,t.generation,!0)}run(e,t,s,r=!1){const o=wordArrayToBytes(aes(e,this._key,r));return r?o.slice(16):o}}class IdentityDataCryptor{constructor(){}encrypt(e,t){return e}decrypt(e,t){return e}}class RC4DataCryptor{_n;_key;_tempKey;constructor(e){if(!e)throw new Error("Empty key");if(e.length<5||e.length>16)throw new Error(`Invalid key length: ${e.length} (shall be a multiple of 8 in the range from 40 to 128)`);this._n=e.length,this._key=e,this._tempKey=new Uint8Array(e.length+5)}encrypt(e,t){const s=ByteUtils.int32ToBytes(t.id,!0),r=ByteUtils.int32ToBytes(t.generation,!0);this._tempKey.set(this._key,0),this._tempKey.set(s.slice(0,3),this._n),this._tempKey.set(r.slice(0,2),this._n+3);const o=wordArrayToBytes(md5(this._tempKey)),a=Math.min(this._n+5,16),f=o.slice(0,a);return wordArrayToBytes(rc4(e,f))}decrypt(e,t){return this.encrypt(e,t)}}const PASSWORD_32_PADDING=[40,191,78,94,78,117,138,65,100,0,78,86,255,250,1,8,46,46,0,182,208,104,62,128,47,12,169,254,100,83,105,122];class DataCryptHandler{_filter;_version;_revision;_permissions;_encryptMetadata;_keyLength;_stringKeyLength;_streamKeyLength;_stringMethod;_streamMethod;_oPasswordHash;_uPasswordHash;_oEncPasswordHash;_uEncPasswordHash;_perms;_fileId;_lastEncryptionKey;constructor(e,t){const{filter:s,version:r,revision:o,permissions:a,encryptMetadata:f,keyLength:m,stringKeyLength:g,streamKeyLength:p,stringMethod:y,streamMethod:C,oPasswordHash:A,uPasswordHash:w,oEncPasswordHash:_,uEncPasswordHash:E,perms:v}=e;if(s!=="/Standard")throw new Error(`Unsupported filter name: ${s}`);if(![1,2,4,5].includes(r))throw new Error(`Unsupported algorithm version: ${r}`);if(![2,3,4,5,6].includes(o))throw new Error(`Unsupported algorithm revision: ${o}`);if(isNaN(a))throw new Error("Permissions not provided");if(!A||!w)throw new Error("Password hash not provided");this._filter=s,this._version=r,this._revision=o,this._permissions=a,this._keyLength=m,this._encryptMetadata=f,this._stringKeyLength=g,this._streamKeyLength=p,this._stringMethod=y,this._streamMethod=C,this._oPasswordHash=A,this._uPasswordHash=w,this._oEncPasswordHash=_,this._uEncPasswordHash=E,this._perms=v,this._fileId=t}authenticate(e){const t=this._version,s=this._stringMethod,r=this._streamMethod;let o=!1;if(this.authOwnerPassword(e))o=!0;else if(!this.authUserPassword(e))return null;const f=this._lastEncryptionKey;switch(t){case 1:const m=new RC4DataCryptor(f);return{owner:o,stringCryptor:m,streamCryptor:m};case 2:const g=new RC4DataCryptor(f);return{owner:o,stringCryptor:g,streamCryptor:g};case 4:let p;if(!s||s===cryptMethods.NONE)p=new IdentityDataCryptor;else if(s===cryptMethods.RC4)p=new RC4DataCryptor(f);else if(s===cryptMethods.AES_128)p=new AESV2DataCryptor(f);else throw new Error(`Invalid crypt method: ${s}`);let y;if(!r||r===cryptMethods.NONE)y=new IdentityDataCryptor;else if(r===cryptMethods.RC4)y=new RC4DataCryptor(f);else if(r===cryptMethods.AES_128)y=new AESV2DataCryptor(f);else throw new Error(`Invalid crypt method: ${r}`);return{owner:o,stringCryptor:p,streamCryptor:y};case 5:let C;if(!s||s===cryptMethods.NONE)p=new IdentityDataCryptor;else if(s===cryptMethods.AES_256)p=new AESV3DataCryptor(f);else throw new Error(`Invalid crypt method: ${s}`);let A;if(!r||r===cryptMethods.NONE)y=new IdentityDataCryptor;else if(r===cryptMethods.AES_256)y=new AESV3DataCryptor(f);else throw new Error(`Invalid crypt method: ${r}`);return{owner:o,stringCryptor:C,streamCryptor:A}}}padPassword32(e){if(!e)return new Uint8Array(PASSWORD_32_PADDING);const t=new TextEncoder().encode(e),s=new Uint8Array(32);return s.set(t.slice(0,32)),t.length<32&&s.set(PASSWORD_32_PADDING.slice(0,32-t.length),t.length),s}computeEncryptionKey(e){if([2,3,4].includes(this._revision)){const t=this.padPassword32(e),s=ByteUtils.int32ToBytes(this._permissions,!0),r=this._revision>=4&&!this._encryptMetadata?new Uint8Array([255,255,255,255]):new Uint8Array(0),o=new Uint8Array([...t,...this._oPasswordHash,...s,...this._fileId,...r]);let a=wordArrayToBytes(md5(o));const f=this._keyLength>>3;if(this._revision>=3)for(let g=0;g<50;g++)a=wordArrayToBytes(md5(a.slice(0,f)));const m=a.slice(0,f);return this._lastEncryptionKey=m,m}else{if(this._revision===5)throw new Error("Not implemented yet");if(this._revision===6)throw new Error("Not implemented yet")}}computeOHashEncryptionKey_R2R3R4(e){const t=this.padPassword32(e);let s=md5(t);if(this._revision>=3)for(let a=0;a<50;a++)s=md5(s);const r=wordArrayToBytes(s),o=this._keyLength>>3;return r.slice(0,o)}computeOHash_R2R3R4(e,t){const s=this.computeOHashEncryptionKey_R2R3R4(e||t),r=this.padPassword32(t);let o=rc4(r,s);if(this._revision>=3)for(let a=1;a<20;a++)o=rc4(o,ByteUtils.xorBytes(s,a));return wordArrayToBytes(o)}computeUHash_R2(e){const t=this.computeEncryptionKey(e),s=new Uint8Array(PASSWORD_32_PADDING);return wordArrayToBytes(rc4(s,t))}computeUHash_R3R4(e){const t=this.computeEncryptionKey(e),s=new Uint8Array([...PASSWORD_32_PADDING,...this._fileId]);let r=md5(s);r=rc4(r,t);for(let o=1;o<20;o++)r=rc4(r,ByteUtils.xorBytes(t,o));return wordArrayToBytes(r)}authOwnerPassword(e){if([2,3,4].includes(this._revision)){const t=this.computeOHashEncryptionKey_R2R3R4(e);let s;if(this._revision===2)s=wordArrayToBytes(rc4(this._oPasswordHash,t));else{let a=bytesToWordArray(this._oPasswordHash);for(let f=19;f>=0;f--)a=rc4(a,ByteUtils.xorBytes(t,f));s=wordArrayToBytes(a)}const r=ByteUtils.findSubarrayIndex(s,new Uint8Array(PASSWORD_32_PADDING)),o=new TextDecoder().decode(r===-1?s:s.subarray(0,r));return this.authUserPassword(o)}else{if(this._revision===5)throw new Error("Not implemented yet");if(this._revision===6)throw new Error("Not implemented yet")}}authUserPassword(e){let t;if(this._revision===2)return t=this.computeUHash_R2(e),ByteUtils.arraysEqual(this._uPasswordHash,t);if(this._revision===3||this._revision===4)return t=this.computeUHash_R3R4(e),ByteUtils.arraysEqual(this._uPasswordHash.subarray(0,16),t);if(this._revision===5)throw new Error("Not implemented yet");if(this._revision===6)throw new Error("Not implemented yet")}}class ObjectStream extends PdfStream{N;First;Extends;constructor(){super(streamTypes.OBJECT_STREAM)}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new ObjectStream;return await t.parsePropsAsync(e),{value:t,start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}async getObjectDataAsync(e){if(!this._streamData||!this.N||!this.First)return null;const t=await this.getStreamDataParserAsync(),s=new Map;let r,o,a,f=0;for(let A=0;A<this.N;A++)r=await t.parseNumberAtAsync(f,!1,!1),o=r.value,f=r.end+2,r=await t.parseNumberAtAsync(f,!1,!1),a=r.value,f=r.end+2,s.set(o,a);if(!s.has(e))return null;const m=this.First+s.get(e),g=await t.getValueTypeAtAsync(m);if(g===null)return;let p,y;switch(g){case objectTypes.DICTIONARY:p=await t.getDictBoundsAtAsync(m,!1);break;case objectTypes.ARRAY:p=await t.getArrayBoundsAtAsync(m,!1);break;case objectTypes.STRING_LITERAL:const A=await LiteralString.parseAsync(t,m);A&&(p={start:A.start,end:A.end},y=A);break;case objectTypes.STRING_HEX:const w=await HexString.parseAsync(t,m);w&&(p={start:w.start,end:w.end},y=w);break;case objectTypes.NUMBER:const _=await t.parseNumberAtAsync(m);_&&(p={start:_.start,end:_.end},y=_);break}if(!p)return null;const C=await t.sliceCharCodesAsync(p.start,p.end);if(!C.length)throw new Error("Object byte array is empty");return{parser:await PdfStream.getDataParserAsync(C),bounds:{start:0,end:C.length-1,contentStart:p.contentStart?p.contentStart-p.start:void 0,contentEnd:p.contentEnd?C.length-1-(p.end-p.contentEnd):void 0},type:g,value:y,cryptInfo:{ref:{id:e,generation:0}},streamId:this.id}}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.N&&r.push(...s.encode("/N "),...s.encode(" "+this.N)),this.First&&r.push(...s.encode("/First "),...s.encode(" "+this.First)),this.Extends&&r.push(...s.encode("/Extends "),...this.Extends.toArray(e));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=await t.getDictBoundsAtAsync(r);let a=await t.skipToNextNameAsync(o.contentStart,o.contentEnd),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/N":case"/First":a=await this.parseNumberPropAsync(f,t,a,!1);break;case"/Extends":a=await this.parseRefPropAsync(f,t,a);break;default:a=await t.skipToNextNameAsync(a,o.contentEnd);break}}}class CryptFilterDict extends PdfDict{CFM=cryptMethods.NONE;AuthEvent=authEvents.DOC_OPEN;Length=40;EncryptMetadata=!0;Recipients;constructor(){super(dictTypes.CRYPT_FILTER)}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new CryptFilterDict;return await t.parsePropsAsync(e),{value:t,start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.CFM&&r.push(...s.encode("/CFM "),...s.encode(this.CFM)),this.AuthEvent&&r.push(...s.encode("/AuthEvent "),...s.encode(this.AuthEvent)),this.Length&&r.push(...s.encode("/Length "),...s.encode(" "+this.Length)),this.EncryptMetadata&&r.push(...s.encode("/EncryptMetadata "),...s.encode(" "+this.EncryptMetadata)),this.Recipients&&(this.Recipients instanceof HexString?r.push(...s.encode("/Recipients "),...this.Recipients.toArray(e)):r.push(...s.encode("/Recipients "),...this.encodeSerializableArray(this.Recipients,e)));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/CFM":const g=await t.parseNameAtAsync(a,!0);if(g&&Object.values(cryptMethods).includes(g.value))this.CFM=g.value,a=g.end+1;else throw new Error("Can't parse /CFM property value");break;case"/AuthEvent":const p=await t.parseNameAtAsync(a,!0);if(p&&Object.values(authEvents).includes(p.value))this.AuthEvent=p.value,a=p.end+1;else throw new Error("Can't parse /AuthEvent property value");break;case"/Length":a=await this.parseNumberPropAsync(f,t,a,!1);break;case"/EncryptMetadata":a=await this.parseBoolPropAsync(f,t,a);break;case"/Recipients":const y=await t.getValueTypeAtAsync(a);if(y===valueTypes.STRING_HEX){const C=await HexString.parseAsync(t,a,e.cryptInfo);if(C){this.Recipients=C.value,a=C.end+1;break}else throw new Error("Can't parse /Recipients property value")}else if(y===valueTypes.ARRAY){const C=await HexString.parseArrayAsync(t,a);if(C){this.Recipients=C.value,a=C.end+1;break}else throw new Error("Can't parse /Recipients property value")}throw new Error(`Unsupported /Filter property value type: ${y}`);default:a=await t.skipToNextNameAsync(a,o-1);break}}}class CryptMapDict extends PdfDict{_filtersMap=new Map;constructor(){super(null)}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new CryptMapDict;return await t.parsePropsAsync(e),{value:t,start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}getProp(e){return this._filtersMap.get(e)}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this._filtersMap.size&&this._filtersMap.forEach((a,f)=>r.push(...s.encode(f),...a.toArray(e)));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){default:if(await t.getValueTypeAtAsync(a)===valueTypes.DICTIONARY){const p=await t.getDictBoundsAtAsync(a);if(p){const y=await CryptFilterDict.parseAsync({parser:t,bounds:p});if(y){this._filtersMap.set(f,y.value),a=y.end+1;break}}}a=await t.skipToNextNameAsync(a,o-1);break}}}class EncryptionDict extends PdfDict{Filter="/Standard";SubFilter;V;Length=40;CF;StmF="/Identity";StrF="/Identity";EFF;R;O;U;OE;UE;P;Perms;EncryptMetadata=!0;Recipients;stringFilter;streamFilter;constructor(){super(dictTypes.EMPTY)}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new EncryptionDict;return await t.parsePropsAsync(e),{value:t,start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.Filter&&r.push(...s.encode("/Filter "),...s.encode(this.Filter)),this.SubFilter&&r.push(...s.encode("/SubFilter "),...s.encode(this.SubFilter)),this.V&&r.push(...s.encode("/V "),...s.encode(" "+this.V)),this.Length&&r.push(...s.encode("/Length "),...s.encode(" "+this.Length)),this.CF&&r.push(...s.encode("/CF "),...this.CF.toArray(e)),this.StmF&&r.push(...s.encode("/StmF "),...s.encode(this.StmF)),this.StrF&&r.push(...s.encode("/StrF "),...s.encode(this.StrF)),this.EFF&&r.push(...s.encode("/EFF "),...s.encode(this.EFF)),this.R&&r.push(...s.encode("/R "),...s.encode(" "+this.R)),this.O&&r.push(...s.encode("/O "),...this.O.toArray(e)),this.U&&r.push(...s.encode("/U "),...this.U.toArray(e)),this.OE&&r.push(...s.encode("/OE "),...this.OE.toArray(e)),this.UE&&r.push(...s.encode("/UE "),...this.UE.toArray(e)),this.P&&r.push(...s.encode("/P "),...s.encode(" "+this.P)),this.Perms&&r.push(...s.encode("/Perms "),...this.Perms.toArray(e)),this.U&&r.push(...s.encode("/U "),...this.U.toArray(e)),this.EncryptMetadata&&r.push(...s.encode("/EncryptMetadata "),...s.encode(" "+this.EncryptMetadata)),this.Recipients&&(this.Recipients instanceof HexString?r.push(...s.encode("/Recipients "),...this.Recipients.toArray(e)):r.push(...s.encode("/Recipients "),...this.encodeSerializableArray(this.Recipients,e)));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}toCryptOptions(){return this.V?{filter:this.Filter,version:this.V,revision:this.R,permissions:this.P,keyLength:this.Length,encryptMetadata:this.EncryptMetadata,stringKeyLength:this.stringFilter?.Length,streamKeyLength:this.streamFilter?.Length,stringMethod:this.stringFilter?.CFM,streamMethod:this.streamFilter?.CFM,oPasswordHash:this.O?.bytes,uPasswordHash:this.U?.bytes,oEncPasswordHash:this.OE?.bytes,uEncPasswordHash:this.UE?.bytes,perms:this.Perms?.bytes}:null}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/Filter":case"/SubFilter":case"/StmF":case"/StrF":case"/EFF":a=await this.parseNamePropAsync(f,t,a);break;case"/V":const g=await t.parseNumberAtAsync(a,!1);if(g&&Object.values(cryptVersions).includes(g.value))this.V=g.value,a=g.end+1;else throw new Error("Can't parse /V property value");break;case"/R":const p=await t.parseNumberAtAsync(a,!1);if(p&&Object.values(cryptRevisions).includes(p.value))this.R=p.value,a=p.end+1;else throw new Error("Can't parse /R property value");break;case"/Length":case"/P":a=await this.parseNumberPropAsync(f,t,a,!1);break;case"/O":case"/U":case"/OE":case"/UE":case"/Perms":a=await this.parseLiteralPropAsync(f,t,a,e.cryptInfo);break;case"/EncryptMetadata":a=await this.parseBoolPropAsync(f,t,a);break;case"/CF":const y=await t.getDictBoundsAtAsync(a);if(s){const A=await CryptMapDict.parseAsync({parser:t,bounds:y});A&&(this.CF=A.value,a=A.end+1)}else throw new Error("Can't parse /CF property value");break;case"/Recipients":const C=await t.getValueTypeAtAsync(a);if(C===valueTypes.STRING_HEX){const A=await HexString.parseAsync(t,a,e.cryptInfo);if(A){this.Recipients=A.value,a=A.end+1;break}else throw new Error("Can't parse /Recipients property value")}else if(C===valueTypes.ARRAY){const A=await HexString.parseArrayAsync(t,a);if(A){this.Recipients=A.value,a=A.end+1;break}else throw new Error("Can't parse /Recipients property value")}throw new Error(`Unsupported /Filter property value type: ${C}`);default:a=await t.skipToNextNameAsync(a,o-1);break}if(!this.Filter)throw new Error("Not all required properties parsed");if(this.Filter==="/Standard"&&(!this.R||!this.O||!this.U||isNaN(this.P)||this.V===5&&(this.R<5||!this.OE||!this.UE||!this.Perms)))throw new Error("Not all required properties parsed");if((this.SubFilter==="adbe.pkcs7.s3"||this.SubFilter==="adbe.pkcs7.s4")&&!this.Recipients)throw new Error("Not all required properties parsed");this.StrF!=="/Identity"&&(this.stringFilter=this.CF?.getProp(this.StrF)),this.StmF!=="/Identity"&&(this.streamFilter=this.CF?.getProp(this.StmF))}}class TrailerDict extends PdfDict{Size;Prev;Root;Encrypt;Info;ID;constructor(){super(dictTypes.EMPTY)}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new TrailerDict;return await t.parsePropsAsync(e),{value:t,start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.Size&&r.push(...s.encode("/Size "),...s.encode(" "+this.Size)),this.Prev&&r.push(...s.encode("/Prev "),...s.encode(" "+this.Prev)),this.Root&&r.push(...s.encode("/Root "),...this.Root.toArray(e)),this.Encrypt&&r.push(...s.encode("/Encrypt "),...this.Encrypt.toArray(e)),this.Info&&r.push(...s.encode("/Info "),...this.Info.toArray(e)),this.ID&&r.push(...s.encode("/ID "),...this.encodeSerializableArray(this.ID,e));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/Size":case"/Prev":a=await this.parseNumberPropAsync(f,t,a,!1);break;case"/Root":case"/Info":a=await this.parseRefPropAsync(f,t,a);break;case"/Encrypt":const g=await t.getValueTypeAtAsync(a);if(g===valueTypes.REF){const C=await ObjectId.parseRefAsync(t,a);if(C){this.Encrypt=C.value,a=C.end+1;break}else throw new Error("Can't parse /Encrypt property value")}throw new Error(`Unsupported /Encrypt property value type: ${g}`);case"/ID":const p=await HexString.parseArrayAsync(t,a);if(p&&p.value[0]&&p.value[1]){this.ID=[p.value[0],p.value[1]],a=p.end+1;break}const y=await LiteralString.parseArrayAsync(t,a);if(y&&y.value[0]&&y.value[1]){this.ID=[HexString.fromHexBytes(y.value[0].bytes),HexString.fromHexBytes(y.value[1].bytes)],a=y.end+1;break}throw new Error("Can't parse /ID property value");default:a=await t.skipToNextNameAsync(a,o-1);break}if(this.Root||console.log("Trailer 'Root' property is missing. Look like the file is linearized, which is not oficially supported atm!"),!this.Size)throw new Error("Not all required properties parsed: Size is missing");if(this.Encrypt&&!this.ID)throw new Error("Not all required properties parsed: ID is missing while Encryption is used")}}class XRefTable extends XRef{_trailerDict;_table;get prev(){return this._trailerDict?.Prev}get size(){return this._trailerDict?.Size}get root(){return this._trailerDict?.Root}get info(){return this._trailerDict?.Root}get encrypt(){return this._trailerDict?.Encrypt}get id(){return this._trailerDict?.ID}constructor(e,t,s){super(xRefTypes.TABLE),this._table=e,this._trailerDict=t,this._offset=s}static createFrom(e,t,s){if(!t?.length||!e)return null;const r=Math.max(...t.map(a=>a.id))+1,o=Math.max(r,e.size);return XRefTable.create(t,o,s,e.root,e.offset,e.info,e.encrypt,e.id)}static create(e,t,s,r,o,a,f,m){if(!e?.length||!t||!s||!r)return null;const g=new TrailerDict;g.Size=t,g.Prev=o,g.Root=r,g.Info=a,g.Encrypt=f,g.ID=m;const p=XRefEntry.toTableBytes(e);return new XRefTable(p,g,s)}static async parseAsync(e,t,s){if(!e||isNaN(t))return null;const r=await e.getXrefTableBoundsAtAsync(t);if(!r)return null;const o=await e.getDictBoundsAtAsync(r.end+1);if(!o)return null;const a=await e.sliceCharCodesAsync(r.contentStart,r.contentEnd),f=await TrailerDict.parseAsync({parser:e,bounds:o});return f?{value:new XRefTable(a,f.value,s),start:null,end:null}:null}createUpdate(e,t){return XRefTable.createFrom(this,e,t)}getEntries(){return this._table.length?XRefEntry.fromTableBytes(this._table):[]}toArray(e){const t=this._trailerDict.toArray(e),s=[...keywordCodes.XREF_TABLE,...keywordCodes.END_OF_LINE,...this._table,...keywordCodes.TRAILER,...keywordCodes.END_OF_LINE,...t,...keywordCodes.END_OF_LINE];return new Uint8Array(s)}}class XrefParser{_dataParser;constructor(e){if(!e)throw new Error("Parser is not defined");this._dataParser=e}async getPdfVersionAsync(){const e=await this._dataParser.findSubarrayIndexAsync(keywordCodes.VERSION);if(!e)return null;const t=(await this._dataParser.parseNumberAtAsync(e.end+1,!0))?.value;return t?t.toFixed(1):null}async getLastXrefIndexAsync(){const e=await this._dataParser.findSubarrayIndexAsync(keywordCodes.XREF_START,{maxIndex:this._dataParser.maxIndex,direction:!1});if(!e)return null;const t=this._dataParser.parseNumberAtAsync(e.end+1);return t||null}async parseXrefAsync(e,t){if(!e)return null;const s=e,r=await this._dataParser.findSubarrayIndexAsync(keywordCodes.XREF_TABLE,{minIndex:e,closedOnly:!0});if(r&&r.start===e){const m=await this._dataParser.findSubarrayIndexAsync(keywordCodes.XREF_HYBRID,{minIndex:e,maxIndex:t,closedOnly:!0});if(m){const g=await this._dataParser.parseNumberAtAsync(m.end+1);if(!g)return null;e=g.value}else return(await XRefTable.parseAsync(this._dataParser,e,s))?.value}const o=await ObjectId.parseAsync(this._dataParser,e,!1);if(!o)return null;const a=await this._dataParser.getIndirectObjectBoundsAtAsync(o.end+1);return a?(await XRefStream.parseAsync({parser:this._dataParser,bounds:a},s))?.value:null}async parseAllXrefsAsync(e){const t=[];let s=this._dataParser.maxIndex,r;for(;e&&(r=await this.parseXrefAsync(e,s),r);)t.push(r),s=e,e=r.prev;return t}}class ReferenceData{size;freeLinkedList;freeOutsideListMap;usedMap;constructor(e){const t=[],s=[],r=[];let o=0;e.forEach(w=>{for(const _ of w.getEntries()){switch(_.type){case xRefEntryTypes.FREE:t.push(_);break;case xRefEntryTypes.NORMAL:s.push(_);break;case xRefEntryTypes.COMPRESSED:r.push(_);break;default:continue}_.id>o&&(o=_.id)}}),this.size=o+1;const a={id:0,generation:maxGeneration,nextFreeId:0},f=new LinkedList(a),m=new Map,g=new Map;let p=!1;for(const w of t){if(!p&&w.id===0){p=!0,a.nextFreeId=w.nextFreeId;continue}const _=g.get(w.id);(!_||_.generation<w.generation)&&g.set(w.id,{id:w.id,generation:w.generation,nextFreeId:w.nextFreeId})}let y=a.nextFreeId,C;for(;y;)C=g.get(y),g.delete(y),f.push(C),y=C.nextFreeId;[...g].forEach(w=>{const _=w[1];_.generation===maxGeneration&&_.nextFreeId===0&&m.set(_.id,_)}),this.freeLinkedList=f,this.freeOutsideListMap=m;const A=new Map;for(const w of s){if(this.isFreed(w))continue;const _=A.get(w.id);_&&_.generation>=w.generation||A.set(w.id,{id:w.id,generation:w.generation,byteOffset:w.byteOffset})}for(const w of r){if(this.isFreed(w)||A.get(w.id))continue;const E=A.get(w.streamId)?.byteOffset;E&&A.set(w.id,{id:w.id,generation:w.generation,byteOffset:E,compressed:!0,streamId:w.streamId,streamIndex:w.streamIndex})}this.usedMap=A}getOffset(e){return this.usedMap.get(e)?.byteOffset}getGeneration(e){return this.usedMap.get(e)?.generation}isFreed(e){return this.freeOutsideListMap.has(e.id)||this.freeLinkedList.has(e,(t,s)=>t.id===s.id&&t.generation<s.generation)}isUsed(e){return this.usedMap.has(e)}}class CatalogDict extends PdfDict{Version;Pages;Lang;constructor(){super(dictTypes.CATALOG)}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new CatalogDict;return await t.parsePropsAsync(e),{value:t,start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.Version&&r.push(...s.encode("/Version "),...s.encode(this.Version)),this.Pages&&r.push(...s.encode("/Pages "),...this.Pages.toArray(e)),this.Lang&&r.push(...s.encode("/Lang "),...this.Lang.toArray(e));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/Version":a=await this.parseNamePropAsync(f,t,a);break;case"/Pages":a=await this.parseRefPropAsync(f,t,a);break;case"/Lang":a=await this.parseLiteralPropAsync(f,t,a,e.cryptInfo);break;default:a=await t.skipToNextNameAsync(a,o-1);break}if(!this.Pages)throw new Error("Not all required properties parsed")}}class PageDict extends PdfDict{Parent;LastModified;Resources;MediaBox;CropBox;BleedBox;TrimBox;ArtBox;Contents;Rotate=0;Thumb;B;Dur;Annots;Metadata;StructParent;ID;PZ;Tabs;TemplateInstantiated;UserUnit;constructor(){super(dictTypes.PAGE)}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new PageDict;return await t.parsePropsAsync(e),{value:t,start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.Parent&&r.push(...s.encode("/Parent "),...this.Parent.toArray(e)),this.LastModified&&r.push(...s.encode("/LastModified "),...this.LastModified.toArray(e)),this.Resources&&r.push(...s.encode("/Resources "),...this.Resources),this.MediaBox&&r.push(...s.encode("/MediaBox "),...this.encodePrimitiveArray(this.MediaBox,s)),this.CropBox&&r.push(...s.encode("/CropBox "),...this.encodePrimitiveArray(this.CropBox,s)),this.BleedBox&&r.push(...s.encode("/BleedBox "),...this.encodePrimitiveArray(this.BleedBox,s)),this.TrimBox&&r.push(...s.encode("/TrimBox "),...this.encodePrimitiveArray(this.TrimBox,s)),this.ArtBox&&r.push(...s.encode("/ArtBox "),...this.encodePrimitiveArray(this.ArtBox,s)),this.Contents&&(this.Contents instanceof ObjectId?r.push(...s.encode("/Contents "),...this.Contents.toArray(e)):r.push(...s.encode("/Contents "),...this.encodeSerializableArray(this.Contents,e))),this.Rotate&&r.push(...s.encode("/Rotate "),...s.encode(" "+this.Rotate)),this.Thumb&&r.push(...s.encode("/Thumb "),...this.Thumb.toArray(e)),this.B&&(this.B instanceof ObjectId?r.push(...s.encode("/B "),...this.B.toArray(e)):r.push(...s.encode("/B "),...this.encodeSerializableArray(this.B,e))),this.Dur&&r.push(...s.encode("/Dur "),...s.encode(" "+this.Dur)),this.Annots&&(this.Annots instanceof ObjectId?r.push(...s.encode("/Annots "),...this.Annots.toArray(e)):r.push(...s.encode("/Annots "),...this.encodeSerializableArray(this.Annots,e))),this.Metadata&&r.push(...s.encode("/Metadata "),...this.Metadata.toArray(e)),this.StructParent&&r.push(...s.encode("/StructParent "),...s.encode(" "+this.StructParent)),this.ID&&r.push(...s.encode("/ID "),...this.ID.toArray(e)),this.PZ&&r.push(...s.encode("/PZ "),...s.encode(" "+this.PZ)),this.Tabs&&r.push(...s.encode("/Tabs "),...s.encode(this.Tabs)),this.TemplateInstantiated&&r.push(...s.encode("/TemplateInstantiated "),...s.encode(this.TemplateInstantiated)),this.UserUnit&&r.push(...s.encode("/UserUnit "),...s.encode(" "+this.UserUnit));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/Parent":case"/Thumb":case"/Metadata":a=await this.parseRefPropAsync(f,t,a);break;case"/LastModified":a=await this.parseDatePropAsync(f,t,a,e.cryptInfo);break;case"/Resources":const g=await t.getValueTypeAtAsync(a);if(g===valueTypes.REF){const C=await ObjectId.parseRefAsync(t,a);if(C&&e.parseInfoGetterAsync){this.Resources=await t.sliceCharCodesAsync(C.start,C.end),a=C.end+1;break}throw new Error("Can't parse /Resources value reference")}else if(g===valueTypes.DICTIONARY){const C=await t.getDictBoundsAtAsync(a);if(C){this.Resources=await t.sliceCharCodesAsync(C.start,C.end),a=C.end+1;break}throw new Error("Can't parse /Resources dictionary bounds")}throw new Error(`Unsupported /Resources property value type: ${g}`);case"/MediaBox":case"/CropBox":case"/BleedBox":case"/TrimBox":case"/ArtBox":a=await this.parseNumberArrayPropAsync(f,t,a,!0);break;case"/Contents":case"/B":case"/Annots":const p=await t.getValueTypeAtAsync(a);if(p===valueTypes.REF){const C=await ObjectId.parseRefAsync(t,a);if(C){this[f.slice(1)]=C.value,a=C.end+1;break}}else if(p===valueTypes.ARRAY){const C=await ObjectId.parseRefArrayAsync(t,a);if(C){this[f.slice(1)]=C.value,a=C.end+1;break}}throw new Error(`Unsupported ${f} property value type: ${p}`);case"/Rotate":case"/Dur":case"/StructParent":case"/PZ":case"/UserUnit":a=await this.parseNumberPropAsync(f,t,a,!1);break;case"/ID":const y=await t.getValueTypeAtAsync(a);if(y===valueTypes.REF){const C=await ObjectId.parseRefAsync(t,a);if(C&&C&&e.parseInfoGetterAsync){const A=await e.parseInfoGetterAsync(C.value.id);if(A){const w=await HexString.parseAsync(A.parser,A.bounds.start,A.cryptInfo);if(w){this.ID=w.value,a=C.end+1;break}}}throw new Error("Can't parse /ID property value")}else if(y===valueTypes.STRING_HEX){const C=await HexString.parseAsync(t,a,e.cryptInfo);if(C){this.ID=C.value,a=C.end+1;break}}throw new Error(`Unsupported /ID property value type: ${y}`);case"/Tabs":case"/TemplateInstantiated":a=await this.parseNamePropAsync(f,t,a);break;default:a=await t.skipToNextNameAsync(a,o-1);break}if(!this.Parent)throw new Error("Not all required properties parsed")}}class PageTreeDict extends PdfDict{Parent;Kids;Count;MediaBox;Rotate=0;constructor(){super(dictTypes.PAGE_TREE)}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new PageTreeDict;return await t.parsePropsAsync(e),{value:t,start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.Parent&&r.push(...s.encode("/Parent "),...this.Parent.toArray(e)),this.Kids&&r.push(...s.encode("/Kids "),...this.encodeSerializableArray(this.Kids,e)),this.Count&&r.push(...s.encode("/Count "),...s.encode(" "+this.Count)),this.MediaBox&&r.push(...s.encode("/MediaBox "),...this.encodePrimitiveArray(this.MediaBox,s)),this.Rotate&&r.push(...s.encode("/Rotate "),...s.encode(" "+this.Rotate));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/Parent":a=await this.parseRefPropAsync(f,t,a);break;case"/Kids":a=await this.parseRefArrayPropAsync(f,t,a);break;case"/Count":case"/Rotate":a=await this.parseNumberPropAsync(f,t,a,!1);break;case"/MediaBox":a=await this.parseNumberArrayPropAsync(f,t,a,!0);break;default:a=await t.skipToNextNameAsync(a,o-1);break}if(!this.Kids||isNaN(this.Count))throw new Error("Not all required properties parsed")}}const standardStampColors={redColor:[.804,0,0],greenColor:[0,.804,0],blueColor:[0,0,.804]},standardStampBBox=[0,0,440,120],standardStampRect=[0,0,220,60],standardStampForms={DRAFT:`33.5 13.4 m
  404.5 6.92 l
  419.6 6.657 431.9 18.52 432.1 33.62 c
  432.89 78.92 l
  433.153 94.02 421.29 106.32 406.19 106.52 c
  35.19 113 l
  20.09 113.263 7.79 101.4 7.59 86.3 c
  6.8 41 l
  6.537 25.9 18.4 13.6 33.5 13.4 c
  s
  150 61 m
  150.047 65.947 149.114 70.413 147.2 74.4 c
  145.287 78.333 142.853 81.373 139.9 83.52 c
  137.68 85.127 135.24 86.263 132.58 86.93 c
  129.92 87.593 126.763 87.957 123.11 88.02 c
  106.91 88.29 l
  106.401 35.19 l
  123.001 34.912 l
  126.734 34.85 129.961 35.165 132.681 35.857 c
  135.394 36.524 137.681 37.507 139.541 38.807 c
  142.721 40.994 145.234 43.974 147.081 47.747 c
  148.941 51.5 149.898 55.934 149.951 61.047 c
  h
  137.8 61.097 m
  137.767 57.597 137.183 54.621 136.05 52.167 c
  134.937 49.687 133.183 47.764 130.79 46.397 c
  129.57 45.731 128.323 45.287 127.05 45.067 c
  125.797 44.827 123.897 44.728 121.35 44.77 c
  118.36 44.82 l
  118.678 78.12 l
  121.668 78.07 l
  124.481 78.023 126.541 77.846 127.848 77.538 c
  129.161 77.207 130.438 76.637 131.678 75.828 c
  133.818 74.362 135.381 72.432 136.368 70.038 c
  137.348 67.618 137.821 64.648 137.788 61.128 c
  f
  185 50 m
  184.987 48.667 184.74 47.53 184.259 46.59 c
  183.778 45.643 182.961 44.907 181.809 44.38 c
  181.002 44.013 180.066 43.802 178.999 43.749 c
  177.932 43.672 176.689 43.645 175.269 43.669 c
  170.989 43.74 l
  171.126 58.04 l
  174.756 57.979 l
  176.643 57.948 178.223 57.814 179.496 57.579 c
  180.769 57.344 181.833 56.837 182.686 56.059 c
  183.499 55.306 184.086 54.486 184.446 53.599 c
  184.827 52.686 185.011 51.483 184.996 49.989 c
  h
  203.8 86.6 m
  189.4 86.841 l
  176.7 67.541 l
  171.25 67.632 l
  171.437 87.132 l
  159.637 87.329 l
  159.128 34.229 l
  178.928 33.897 l
  181.635 33.852 183.965 33.991 185.918 34.315 c
  187.871 34.639 189.705 35.382 191.418 36.545 c
  193.151 37.705 194.531 39.228 195.558 41.115 c
  196.605 42.975 197.141 45.335 197.168 48.195 c
  197.206 52.122 196.446 55.335 194.888 57.835 c
  193.355 60.335 191.138 62.432 188.238 64.125 c
  f
  251 85.8 m
  238.8 86.004 l
  235.53 75.304 l
  218.53 75.588 l
  215.46 86.388 l
  203.56 86.587 l
  219.96 33.187 l
  233.56 32.959 l
  h
  232.6 65.6 m
  226.78 46.6 l
  221.33 65.8 l
  f
  290 42.3 m
  268.9 42.653 l
  268.995 52.543 l
  288.495 52.216 l
  288.593 62.516 l
  269.093 62.843 l
  269.31 85.543 l
  257.51 85.74 l
  257.001 32.64 l
  289.801 32.091 l
  f
  334 41.5 m
  319.7 41.739 l
  320.11 84.639 l
  308.31 84.837 l
  307.9 41.937 l
  293.6 42.176 l
  293.502 31.876 l
  333.902 31.199 l
  f
  `,APPROVED:`33.5 13.4 m
  404.5 6.92 l
  419.6 6.657 431.9 18.52 432.1 33.62 c
  432.89 78.92 l
  433.153 94.02 421.29 106.32 406.19 106.52 c
  35.19 113 l
  20.09 113.263 7.79 101.4 7.59 86.3 c
  6.8 41 l
  6.537 25.9 18.4 13.6 33.5 13.4 c
  s
  88.9 86.4 m
  78 86.585 l
  75.08 76.895 l
  59.88 77.153 l
  57.14 86.933 l
  46.54 87.114 l
  61.24 38.714 l
  73.34 38.508 l
  h
  72.4 68.1 m
  67.21 50.9 l
  62.35 68.3 l
  f
  128 52.8 m
  128.02 54.953 127.72 57.073 127.098 59.16 c
  126.477 61.22 125.577 62.96 124.398 64.38 c
  122.785 66.307 120.975 67.77 118.968 68.77 c
  116.981 69.777 114.495 70.303 111.508 70.35 c
  104.938 70.462 l
  105.086 86.162 l
  94.586 86.341 l
  94.132 38.141 l
  111.532 37.846 l
  114.132 37.802 116.322 38.034 118.102 38.543 c
  119.902 39.03 121.492 39.79 122.872 40.823 c
  124.532 42.07 125.802 43.676 126.682 45.643 c
  127.582 47.61 128.045 49.986 128.072 52.773 c
  h
  117.1 53.276 m
  117.087 51.916 116.765 50.756 116.133 49.796 c
  115.501 48.816 114.771 48.139 113.943 47.766 c
  112.836 47.267 111.763 47.005 110.723 46.98 c
  109.676 46.933 108.283 46.924 106.543 46.954 c
  104.733 46.985 l
  104.869 61.385 l
  107.889 61.333 l
  109.682 61.303 111.156 61.149 112.309 60.87 c
  113.476 60.592 114.449 60.058 115.229 59.27 c
  115.902 58.57 116.379 57.744 116.659 56.79 c
  116.961 55.817 117.106 54.64 117.093 53.26 c
  f
  170 52.1 m
  170.02 54.253 169.72 56.373 169.098 58.46 c
  168.477 60.52 167.577 62.26 166.398 63.68 c
  164.785 65.607 162.975 67.07 160.968 68.07 c
  158.981 69.077 156.495 69.603 153.508 69.65 c
  146.938 69.762 l
  147.086 85.462 l
  136.586 85.641 l
  136.132 37.441 l
  153.532 37.146 l
  156.132 37.102 158.322 37.334 160.102 37.843 c
  161.902 38.33 163.492 39.09 164.872 40.123 c
  166.532 41.37 167.802 42.976 168.682 44.943 c
  169.582 46.91 170.045 49.286 170.072 52.073 c
  h
  159.1 52.576 m
  159.087 51.216 158.765 50.056 158.133 49.096 c
  157.501 48.116 156.771 47.439 155.943 47.066 c
  154.836 46.567 153.763 46.305 152.723 46.28 c
  151.676 46.233 150.283 46.224 148.543 46.254 c
  146.733 46.285 l
  146.869 60.685 l
  149.889 60.633 l
  151.682 60.603 153.156 60.449 154.309 60.17 c
  155.476 59.892 156.449 59.358 157.229 58.57 c
  157.902 57.87 158.379 57.044 158.659 56.09 c
  158.961 55.117 159.106 53.94 159.093 52.56 c
  f
  200 51.1 m
  199.989 49.893 199.768 48.863 199.339 48.01 c
  198.91 47.157 198.18 46.49 197.149 46.01 c
  196.429 45.677 195.592 45.487 194.639 45.438 c
  193.686 45.368 192.576 45.344 191.309 45.365 c
  187.489 45.43 l
  187.611 58.43 l
  190.851 58.375 l
  192.538 58.346 193.948 58.225 195.081 58.012 c
  196.214 57.799 197.161 57.342 197.921 56.642 c
  198.648 55.962 199.171 55.219 199.491 54.412 c
  199.831 53.585 199.995 52.492 199.982 51.132 c
  h
  216.8 84.2 m
  203.9 84.419 l
  192.6 66.919 l
  187.74 67.002 l
  187.906 84.702 l
  177.406 84.88 l
  176.952 36.68 l
  194.652 36.379 l
  197.072 36.338 199.152 36.464 200.892 36.758 c
  202.632 37.052 204.269 37.725 205.802 38.778 c
  207.349 39.831 208.579 41.211 209.492 42.918 c
  210.425 44.604 210.902 46.741 210.922 49.328 c
  210.956 52.888 210.279 55.801 208.892 58.068 c
  207.519 60.334 205.539 62.234 202.952 63.768 c
  f
  261 59.4 m
  261.073 67.067 259.263 73.2 255.57 77.8 c
  251.877 82.373 246.743 84.713 240.17 84.82 c
  233.597 84.932 228.43 82.765 224.67 78.32 c
  220.89 73.853 218.963 67.787 218.89 60.12 c
  218.817 52.387 220.627 46.253 224.32 41.72 c
  228.013 37.147 233.147 34.807 239.72 34.7 c
  246.273 34.589 251.44 36.755 255.22 41.2 c
  259.013 45.62 260.947 51.687 261.02 59.4 c
  h
  247.1 71.8 m
  248.113 70.313 248.857 68.577 249.33 66.59 c
  249.805 64.577 250.03 62.223 250.005 59.53 c
  249.978 56.643 249.671 54.19 249.084 52.17 c
  248.497 50.15 247.741 48.523 246.814 47.29 c
  245.867 46.01 244.777 45.09 243.544 44.53 c
  242.331 43.968 241.064 43.698 239.744 43.721 c
  238.404 43.744 237.144 44.045 235.964 44.626 c
  234.797 45.207 233.724 46.153 232.744 47.466 c
  231.837 48.686 231.101 50.369 230.534 52.516 c
  229.986 54.636 229.725 57.099 229.752 59.906 c
  229.779 62.773 230.077 65.216 230.645 67.236 c
  231.232 69.229 231.988 70.856 232.915 72.116 c
  233.842 73.376 234.922 74.296 236.155 74.876 c
  237.388 75.459 238.682 75.739 240.035 75.716 c
  241.388 75.693 242.675 75.369 243.895 74.745 c
  245.115 74.099 246.178 73.122 247.085 71.815 c
  f
  306 34.6 m
  291.5 83 l
  279.7 83.201 l
  264.3 35.301 l
  275.4 35.113 l
  285.6 68.813 l
  295.17 34.813 l
  f
  342 82.1 m
  312.4 82.603 l
  311.946 34.403 l
  341.546 33.9 l
  341.634 43.22 l
  322.534 43.544 l
  322.612 51.854 l
  340.312 51.553 l
  340.4 60.873 l
  322.7 61.174 l
  322.812 73.074 l
  341.912 72.75 l
  f
  389 57.3 m
  389.042 61.787 388.209 65.82 386.5 69.4 c
  384.793 72.967 382.62 75.72 379.98 77.66 c
  378 79.12 375.82 80.15 373.44 80.75 c
  371.067 81.351 368.25 81.68 364.99 81.735 c
  350.59 81.98 l
  350.136 33.78 l
  364.936 33.528 l
  368.269 33.471 371.146 33.757 373.566 34.384 c
  375.993 34.99 378.033 35.883 379.686 37.064 c
  382.526 39.044 384.769 41.744 386.416 45.164 c
  388.076 48.564 388.929 52.597 388.976 57.264 c
  h
  378.1 57.388 m
  378.07 54.222 377.55 51.525 376.54 49.298 c
  375.547 47.052 373.983 45.308 371.85 44.068 c
  370.763 43.461 369.65 43.058 368.51 42.858 c
  367.39 42.64 365.693 42.551 363.42 42.589 c
  360.76 42.634 l
  361.044 72.734 l
  363.704 72.689 l
  366.211 72.647 368.051 72.486 369.224 72.207 c
  370.391 71.907 371.531 71.391 372.644 70.657 c
  374.557 69.331 375.951 67.581 376.824 65.407 c
  377.704 63.214 378.127 60.521 378.094 57.327 c
  f
  `,NOT_APPROVED:`33.5 13.4 m
  404.5 6.92 l
  419.6 6.657 431.9 18.52 432.1 33.62 c
  432.89 78.92 l
  433.153 94.02 421.29 106.32 406.19 106.52 c
  35.19 113 l
  20.09 113.263 7.79 101.4 7.59 86.3 c
  6.8 41 l
  6.537 25.9 18.4 13.6 33.5 13.4 c
  s
  57.1 85.5 m
  49.12 85.636 l
  35.32 55.036 l
  35.469 85.936 l
  27.879 86.066 l
  27.662 41.066 l
  37.562 40.897 l
  49.362 66.497 l
  49.238 40.697 l
  56.828 40.567 l
  f
  96.4 62.4 m
  96.435 69.533 94.995 75.267 92.08 79.6 c
  89.167 83.86 85.133 86.033 79.98 86.12 c
  74.82 86.208 70.753 84.175 67.78 80.02 c
  64.827 75.84 63.333 70.173 63.3 63.02 c
  63.265 55.82 64.705 50.087 67.62 45.82 c
  70.533 41.56 74.567 39.387 79.72 39.3 c
  84.867 39.212 88.933 41.245 91.92 45.4 c
  94.887 49.533 96.387 55.2 96.42 62.4 c
  h
  85.5 74 m
  86.3 72.62 86.89 71 87.27 69.14 c
  87.649 67.26 87.833 65.063 87.82 62.55 c
  87.807 59.85 87.573 57.56 87.118 55.68 c
  86.663 53.793 86.073 52.273 85.348 51.12 c
  84.608 49.927 83.755 49.067 82.788 48.54 c
  81.835 48.013 80.841 47.758 79.808 47.776 c
  78.761 47.794 77.771 48.073 76.838 48.612 c
  75.918 49.151 75.075 50.031 74.308 51.252 c
  73.595 52.392 73.011 53.962 72.558 55.962 c
  72.122 57.942 71.91 60.242 71.923 62.862 c
  71.936 65.542 72.163 67.822 72.603 69.702 c
  73.058 71.569 73.648 73.089 74.373 74.262 c
  75.1 75.435 75.946 76.295 76.913 76.842 c
  77.88 77.389 78.893 77.654 79.953 77.635 c
  81.02 77.617 82.033 77.318 82.993 76.738 c
  83.953 76.138 84.79 75.228 85.503 74.008 c
  f
  128 48 m
  118 48.172 l
  118.175 84.472 l
  109.895 84.614 l
  109.72 48.314 l
  99.72 48.486 l
  99.678 39.786 l
  127.978 39.301 l
  f
  178 83.4 m
  169.44 83.546 l
  167.18 74.496 l
  155.28 74.7 l
  153.1 83.83 l
  144.76 83.973 l
  156.36 38.773 l
  165.89 38.61 l
  h
  165.1 66.3 m
  161.08 50.2 l
  157.21 66.4 l
  f
  209 52.1 m
  209.01 54.113 208.768 56.09 208.274 58.03 c
  207.78 59.95 207.07 61.573 206.144 62.9 c
  204.871 64.693 203.447 66.057 201.874 66.99 c
  200.314 67.923 198.361 68.41 196.014 68.45 c
  190.864 68.538 l
  190.935 83.138 l
  182.655 83.28 l
  182.438 38.28 l
  196.038 38.047 l
  198.078 38.012 199.798 38.235 201.198 38.714 c
  202.611 39.173 203.858 39.886 204.938 40.854 c
  206.238 42.021 207.231 43.524 207.918 45.364 c
  208.618 47.204 208.974 49.421 208.988 52.014 c
  h
  200.44 52.518 m
  200.434 51.251 200.184 50.168 199.691 49.268 c
  199.198 48.348 198.628 47.715 197.981 47.368 c
  197.114 46.9 196.271 46.653 195.451 46.626 c
  194.631 46.58 193.538 46.568 192.171 46.592 c
  190.751 46.616 l
  190.816 60.116 l
  193.186 60.075 l
  194.593 60.051 195.749 59.911 196.656 59.653 c
  197.576 59.396 198.343 58.899 198.956 58.163 c
  199.485 57.51 199.861 56.74 200.086 55.853 c
  200.326 54.947 200.443 53.847 200.437 52.553 c
  f
  241 51.6 m
  241.01 53.613 240.768 55.59 240.274 57.53 c
  239.78 59.45 239.07 61.073 238.144 62.4 c
  236.871 64.193 235.447 65.557 233.874 66.49 c
  232.314 67.423 230.361 67.91 228.014 67.95 c
  222.864 68.038 l
  222.935 82.638 l
  214.655 82.78 l
  214.438 37.78 l
  228.038 37.547 l
  230.078 37.512 231.798 37.735 233.198 38.214 c
  234.611 38.673 235.858 39.386 236.938 40.354 c
  238.238 41.521 239.231 43.024 239.918 44.864 c
  240.618 46.704 240.974 48.921 240.988 51.514 c
  h
  232.44 52.018 m
  232.434 50.751 232.184 49.668 231.691 48.768 c
  231.198 47.848 230.628 47.215 229.981 46.868 c
  229.114 46.4 228.271 46.153 227.451 46.126 c
  226.631 46.08 225.538 46.068 224.171 46.092 c
  222.751 46.116 l
  222.816 59.616 l
  225.186 59.575 l
  226.593 59.551 227.749 59.411 228.656 59.153 c
  229.576 58.896 230.343 58.399 230.956 57.663 c
  231.485 57.01 231.861 56.24 232.086 55.353 c
  232.326 54.447 232.443 53.347 232.437 52.053 c
  f
  265 50.7 m
  264.995 49.573 264.825 48.61 264.49 47.81 c
  264.155 47.01 263.585 46.387 262.78 45.94 c
  262.218 45.627 261.565 45.447 260.82 45.4 c
  260.073 45.332 259.203 45.307 258.21 45.324 c
  255.21 45.375 l
  255.269 57.475 l
  257.809 57.432 l
  259.129 57.409 260.235 57.299 261.129 57.103 c
  262.022 56.906 262.769 56.479 263.369 55.823 c
  263.941 55.189 264.354 54.499 264.609 53.753 c
  264.878 52.986 265.01 51.966 265.004 50.693 c
  h
  278.1 81.7 m
  268 81.873 l
  259.17 65.573 l
  255.35 65.638 l
  255.43 82.138 l
  247.19 82.279 l
  246.973 37.279 l
  260.873 37.041 l
  262.773 37.009 264.406 37.132 265.773 37.41 c
  267.139 37.689 268.423 38.322 269.623 39.31 c
  270.836 40.297 271.799 41.59 272.513 43.19 c
  273.239 44.77 273.609 46.767 273.623 49.18 c
  273.639 52.5 273.099 55.217 272.003 57.33 c
  270.923 59.444 269.366 61.21 267.333 62.63 c
  f
  313 58.7 m
  313.035 65.833 311.595 71.567 308.68 75.9 c
  305.767 80.16 301.733 82.333 296.58 82.42 c
  291.42 82.508 287.353 80.475 284.38 76.32 c
  281.427 72.14 279.933 66.473 279.9 59.32 c
  279.865 52.12 281.305 46.387 284.22 42.12 c
  287.133 37.86 291.167 35.687 296.32 35.6 c
  301.467 35.512 305.533 37.545 308.52 41.7 c
  311.487 45.833 312.987 51.5 313.02 58.7 c
  h
  302.1 70.3 m
  302.9 68.92 303.49 67.3 303.87 65.44 c
  304.249 63.56 304.433 61.363 304.42 58.85 c
  304.407 56.15 304.173 53.86 303.718 51.98 c
  303.263 50.093 302.673 48.573 301.948 47.42 c
  301.208 46.227 300.355 45.367 299.388 44.84 c
  298.435 44.313 297.441 44.058 296.408 44.076 c
  295.361 44.094 294.371 44.373 293.438 44.912 c
  292.518 45.451 291.675 46.331 290.908 47.552 c
  290.195 48.692 289.611 50.262 289.158 52.262 c
  288.722 54.242 288.51 56.542 288.523 59.162 c
  288.536 61.842 288.763 64.122 289.203 66.002 c
  289.658 67.869 290.248 69.389 290.973 70.562 c
  291.7 71.735 292.546 72.595 293.513 73.142 c
  297.62 73.917 298.633 73.618 299.593 73.038 c
  300.553 72.438 301.39 71.528 302.103 70.308 c
  f
  348 35.6 m
  336.5 80.8 l
  327.23 80.959 l
  315.33 36.159 l
  324.02 36.01 l
  331.93 67.41 l
  339.54 35.71 l
  f
  376 80 m
  352.8 80.397 l
  352.583 35.397 l
  375.783 35 l
  375.825 43.7 l
  360.825 43.956 l
  360.863 51.716 l
  374.762 51.478 l
  374.804 60.178 l
  360.904 60.416 l
  360.958 71.516 l
  375.958 71.26 l
  f
  413 57 m
  413.02 61.187 412.357 64.953 411.01 68.3 c
  409.663 71.627 407.95 74.193 405.87 76 c
  404.31 77.353 402.597 78.31 400.73 78.87 c
  398.863 79.425 396.65 79.725 394.09 79.769 c
  382.79 79.963 l
  382.573 34.963 l
  394.173 34.764 l
  396.786 34.719 399.043 34.993 400.943 35.584 c
  402.843 36.155 404.443 36.992 405.743 38.094 c
  407.963 39.947 409.713 42.474 410.993 45.674 c
  412.286 48.854 412.943 52.621 412.963 56.974 c
  h
  404.44 57.056 m
  404.426 54.096 404.026 51.576 403.24 49.496 c
  402.467 47.396 401.243 45.766 399.57 44.606 c
  398.717 44.037 397.847 43.66 396.96 43.476 c
  396.08 43.269 394.75 43.181 392.97 43.212 c
  390.88 43.248 l
  391.016 71.348 l
  393.106 71.312 l
  395.073 71.278 396.516 71.133 397.436 70.876 c
  398.356 70.599 399.253 70.122 400.126 69.446 c
  401.626 68.213 402.726 66.583 403.426 64.556 c
  404.119 62.509 404.459 59.996 404.446 57.016 c
  f
  `,DEPARTMENTAL:`33.5 13.4 m
  404.5 6.92 l
  419.6 6.657 431.9 18.52 432.1 33.62 c
  432.89 78.92 l
  433.153 94.02 421.29 106.32 406.19 106.52 c
  35.19 113 l
  20.09 113.263 7.79 101.4 7.59 86.3 c
  6.8 41 l
  6.537 25.9 18.4 13.6 33.5 13.4 c
  s
  56.4 63.1 m
  56.412 67.46 55.746 71.393 54.4 74.9 c
  53.06 78.36 51.36 81.03 49.3 82.91 c
  47.753 84.317 46.053 85.31 44.2 85.89 c
  26.42 86.996 l
  26.286 40.196 l
  37.786 40.009 l
  40.379 39.967 42.616 40.256 44.496 40.875 c
  46.376 41.474 47.959 42.35 49.246 43.505 c
  51.446 45.438 53.176 48.072 54.436 51.405 c
  55.709 54.718 56.353 58.652 56.366 63.205 c
  h
  47.92 63.143 m
  47.911 60.063 47.518 57.437 46.74 55.263 c
  45.98 53.077 44.773 51.377 43.12 50.163 c
  42.28 49.569 41.417 49.175 40.53 48.983 c
  39.663 48.767 38.347 48.673 36.58 48.701 c
  34.51 48.735 l
  34.594 78.035 l
  36.664 78.001 l
  38.617 77.97 40.047 77.821 40.954 77.554 c
  41.867 77.267 42.757 76.77 43.624 76.064 c
  45.117 74.784 46.207 73.088 46.894 70.974 c
  47.587 68.848 47.927 66.231 47.914 63.124 c
  f
  85.8 86 m
  62.8 86.373 l
  62.666 39.573 l
  85.666 39.2 l
  85.692 48.26 l
  70.892 48.501 l
  70.915 56.581 l
  84.715 56.357 l
  84.741 65.417 l
  70.941 65.641 l
  70.974 77.241 l
  85.774 77 l
  f
  119 53.4 m
  119.006 55.493 118.763 57.553 118.27 59.58 c
  117.777 61.58 117.071 63.27 116.15 64.65 c
  114.89 66.517 113.477 67.933 111.91 68.9 c
  110.363 69.867 108.43 70.37 106.11 70.41 c
  101.01 70.493 l
  101.054 85.793 l
  92.854 85.926 l
  92.72 39.126 l
  106.22 38.907 l
  108.24 38.874 109.943 39.108 111.33 39.61 c
  112.723 40.091 113.956 40.837 115.03 41.85 c
  116.316 43.063 117.296 44.63 117.97 46.55 c
  118.656 48.47 119.003 50.78 119.01 53.48 c
  h
  110.52 53.821 m
  110.516 52.501 110.271 51.374 109.784 50.441 c
  109.297 49.488 108.734 48.824 108.094 48.451 c
  107.241 47.962 106.407 47.703 105.594 47.674 c
  104.781 47.624 103.697 47.61 102.344 47.632 c
  100.934 47.655 l
  100.974 61.655 l
  103.324 61.617 l
  104.717 61.595 105.864 61.45 106.764 61.184 c
  107.677 60.918 108.437 60.401 109.044 59.634 c
  109.569 58.954 109.945 58.151 110.174 57.224 c
  110.413 56.278 110.531 55.134 110.527 53.794 c
  f
  154 84.9 m
  145.52 85.038 l
  143.29 75.608 l
  131.49 75.799 l
  129.32 85.299 l
  121.06 85.433 l
  132.66 38.433 l
  142.1 38.28 l
  h
  141.3 67.1 m
  137.34 50.4 l
  133.48 67.3 l
  f
  176 52 m
  175.997 50.827 175.83 49.823 175.5 48.99 c
  175.17 48.157 174.607 47.507 173.81 47.04 c
  173.254 46.713 172.604 46.525 171.86 46.474 c
  171.12 46.402 170.26 46.374 169.28 46.39 c
  166.31 46.438 l
  166.346 59.038 l
  168.866 58.998 l
  170.173 58.976 171.269 58.864 172.156 58.662 c
  173.036 58.458 173.776 58.015 174.376 57.332 c
  174.943 56.672 175.353 55.952 175.606 55.172 c
  175.874 54.372 176.006 53.312 176.003 51.992 c
  h
  188.9 84.3 m
  178.9 84.463 l
  170.18 67.463 l
  166.4 67.524 l
  166.449 84.724 l
  158.289 84.856 l
  158.155 38.056 l
  171.955 37.833 l
  173.835 37.803 175.452 37.934 176.805 38.226 c
  178.158 38.519 179.428 39.179 180.615 40.206 c
  181.815 41.233 182.765 42.58 183.465 44.246 c
  184.178 45.893 184.542 47.973 184.555 50.486 c
  184.565 53.946 184.025 56.776 182.935 58.976 c
  181.862 61.176 180.315 63.016 178.295 64.496 c
  f
  218 46.1 m
  208.07 46.261 l
  208.178 84.061 l
  199.978 84.194 l
  199.87 46.394 l
  189.94 46.555 l
  189.914 37.495 l
  218.014 37.039 l
  f
  256 83.2 m
  247.84 83.332 l
  247.75 51.932 l
  241.91 72.332 l
  236.25 72.424 l
  230.3 52.124 l
  230.39 83.524 l
  222.66 83.65 l
  222.526 36.85 l
  232.046 36.695 l
  239.266 60.095 l
  246.336 36.495 l
  255.856 36.34 l
  f
  287 82.7 m
  264 83.073 l
  263.866 36.273 l
  286.866 35.9 l
  286.892 44.96 l
  272.092 45.201 l
  272.115 53.281 l
  285.915 53.057 l
  285.941 62.117 l
  272.141 62.341 l
  272.174 73.941 l
  286.974 73.7 l
  f
  323 82.2 m
  315.1 82.328 l
  301.5 50.428 l
  301.592 82.528 l
  294.072 82.65 l
  293.938 35.85 l
  303.738 35.691 l
  315.438 62.291 l
  315.361 35.491 l
  322.881 35.369 l
  f
  356 43.9 m
  346.07 44.061 l
  346.178 81.861 l
  337.978 81.994 l
  337.87 44.194 l
  327.94 44.355 l
  327.914 35.295 l
  356.014 34.839 l
  f
  390 81.1 m
  381.52 81.238 l
  379.29 71.808 l
  367.49 71.999 l
  365.32 81.499 l
  357.06 81.633 l
  368.66 34.633 l
  378.1 34.48 l
  h
  377.3 63.3 m
  373.34 46.6 l
  369.48 63.5 l
  f
  418 80.6 m
  395.1 80.972 l
  394.966 34.172 l
  403.166 34.039 l
  403.274 71.839 l
  417.974 71.6 l
  f
  `,CONFIDENTIAL:`33.5 13.4 m
  404.5 6.92 l
  419.6 6.657 431.9 18.52 432.1 33.62 c
  432.89 78.92 l
  433.153 94.02 421.29 106.32 406.19 106.52 c
  35.19 113 l
  20.09 113.263 7.79 101.4 7.59 86.3 c
  6.8 41 l
  6.537 25.9 18.4 13.6 33.5 13.4 c
  s
  48 86.5 m
  45.613 86.541 43.403 86.084 41.37 85.13 c
  39.35 84.177 37.61 82.737 36.15 80.81 c
  34.69 78.883 33.55 76.467 32.73 73.56 c
  31.923 70.653 31.513 67.287 31.5 63.46 c
  31.483 59.9 31.849 56.663 32.6 53.75 c
  33.347 50.837 34.44 48.333 35.88 46.24 c
  37.267 44.227 38.983 42.657 41.03 41.53 c
  43.097 40.41 45.35 39.827 47.79 39.78 c
  49.143 39.757 50.36 39.847 51.44 40.05 c
  52.533 40.233 53.54 40.487 54.46 40.814 c
  55.427 41.18 56.297 41.597 57.07 42.064 c
  57.863 42.513 58.557 42.933 59.15 43.324 c
  59.203 54.224 l
  58.254 54.24 l
  57.849 53.764 57.336 53.201 56.714 52.55 c
  56.107 51.896 55.414 51.253 54.634 50.62 c
  53.84 49.99 52.984 49.46 52.064 49.03 c
  51.144 48.603 50.157 48.398 49.104 48.416 c
  47.937 48.436 46.83 48.717 45.784 49.258 c
  44.737 49.78 43.77 50.643 42.884 51.848 c
  42.044 53.008 41.36 54.538 40.834 56.438 c
  40.326 58.338 40.078 60.638 40.091 63.338 c
  40.104 66.158 40.396 68.508 40.966 70.388 c
  41.55 72.268 42.276 73.745 43.146 74.818 c
  44.026 75.912 45.006 76.692 46.086 77.158 c
  47.166 77.603 48.229 77.816 49.276 77.798 c
  50.282 77.781 51.272 77.553 52.246 77.113 c
  53.232 76.674 54.142 76.084 54.976 75.343 c
  55.676 74.747 56.326 74.111 56.926 73.433 c
  57.526 72.76 58.02 72.177 58.406 71.683 c
  59.268 71.668 l
  59.32 82.368 l
  58.52 82.885 57.753 83.372 57.02 83.828 c
  56.286 84.284 55.52 84.68 54.72 85.018 c
  53.673 85.459 52.69 85.799 51.77 86.038 c
  f
  96.6 62.3 m
  96.635 69.433 95.195 75.167 92.28 79.5 c
  89.367 83.76 85.333 85.933 80.18 86.02 c
  75.02 86.108 70.953 84.075 67.98 79.92 c
  65.027 75.74 63.533 70.073 63.5 62.92 c
  63.465 55.72 64.905 49.987 67.82 45.72 c
  70.733 41.46 74.767 39.287 79.92 39.2 c
  85.067 39.112 89.133 41.145 92.12 45.3 c
  95.087 49.433 96.587 55.1 96.62 62.3 c
  h
  85.7 73.9 m
  86.5 72.52 87.09 70.9 87.47 69.04 c
  87.849 67.16 88.033 64.963 88.02 62.45 c
  88.007 59.75 87.773 57.46 87.318 55.58 c
  86.863 53.693 86.273 52.173 85.548 51.02 c
  84.808 49.827 83.955 48.967 82.988 48.44 c
  82.035 47.913 81.041 47.658 80.008 47.676 c
  78.961 47.694 77.971 47.973 77.038 48.512 c
  76.118 49.051 75.275 49.931 74.508 51.152 c
  73.795 52.292 73.211 53.862 72.758 55.862 c
  72.322 57.842 72.11 60.142 72.123 62.762 c
  72.136 65.442 72.363 67.722 72.803 69.602 c
  73.258 71.469 73.848 72.989 74.573 74.162 c
  75.3 75.335 76.146 76.195 77.113 76.742 c
  78.08 77.289 79.093 77.554 80.153 77.535 c
  81.22 77.517 82.233 77.218 83.193 76.638 c
  84.153 76.038 84.99 75.128 85.703 73.908 c
  f
  132 84.2 m
  124.02 84.336 l
  110.22 53.736 l
  110.369 84.636 l
  102.779 84.766 l
  102.562 39.766 l
  112.462 39.597 l
  124.262 65.197 l
  124.138 39.397 l
  131.728 39.267 l
  f
  163 47.4 m
  148.2 47.653 l
  148.24 56.013 l
  161.94 55.779 l
  161.982 64.479 l
  148.282 64.713 l
  148.375 83.913 l
  140.135 84.054 l
  139.918 39.054 l
  162.918 38.66 l
  f
  186 83.3 m
  167.2 83.622 l
  167.161 75.652 l
  172.421 75.562 l
  172.281 46.562 l
  167.022 46.652 l
  166.983 38.682 l
  185.783 38.36 l
  185.822 46.33 l
  180.562 46.42 l
  180.702 75.42 l
  185.962 75.33 l
  f
  223 60.2 m
  223.02 64.387 222.357 68.153 221.01 71.5 c
  219.663 74.827 217.95 77.393 215.87 79.2 c
  214.31 80.553 212.597 81.51 210.73 82.07 c
  208.863 82.625 206.65 82.925 204.09 82.969 c
  192.79 83.163 l
  192.573 38.163 l
  204.173 37.964 l
  206.786 37.919 209.043 38.193 210.943 38.784 c
  212.843 39.355 214.443 40.192 215.743 41.294 c
  217.963 43.147 219.713 45.674 220.993 48.874 c
  222.286 52.054 222.943 55.821 222.963 60.174 c
  h
  214.44 60.256 m
  214.426 57.296 214.026 54.776 213.24 52.696 c
  212.467 50.596 211.243 48.966 209.57 47.806 c
  208.717 47.237 207.847 46.86 206.96 46.676 c
  206.08 46.469 204.75 46.381 202.97 46.412 c
  200.88 46.448 l
  201.016 74.548 l
  203.106 74.512 l
  205.073 74.478 206.516 74.333 207.436 74.076 c
  208.356 73.799 209.253 73.322 210.126 72.646 c
  211.626 71.413 212.726 69.783 213.426 67.756 c
  214.119 65.709 214.459 63.196 214.446 60.216 c
  f
  253 82.1 m
  229.8 82.497 l
  229.583 37.497 l
  252.783 37.1 l
  252.825 45.8 l
  237.825 46.056 l
  237.862 53.816 l
  251.762 53.578 l
  251.804 62.278 l
  237.904 62.516 l
  237.958 73.616 l
  252.958 73.36 l
  f
  289 81.5 m
  281.02 81.636 l
  267.22 51.036 l
  267.369 81.936 l
  259.779 82.066 l
  259.562 37.066 l
  269.462 36.897 l
  281.262 62.497 l
  281.138 36.697 l
  288.728 36.567 l
  f
  322 44.7 m
  312 44.872 l
  312.175 81.172 l
  303.895 81.314 l
  303.72 45.014 l
  293.72 45.186 l
  293.678 36.486 l
  321.978 36.001 l
  f
  345 80.6 m
  326.2 80.922 l
  326.161 72.952 l
  331.421 72.862 l
  331.281 43.862 l
  326.022 43.952 l
  325.983 35.982 l
  344.783 35.66 l
  344.822 43.63 l
  339.562 43.72 l
  339.702 72.72 l
  344.962 72.63 l
  f
  381 79.9 m
  372.44 80.046 l
  370.18 70.996 l
  358.28 71.2 l
  356.1 80.33 l
  347.76 80.473 l
  359.36 35.273 l
  368.89 35.11 l
  h
  368.1 62.8 m
  364.08 46.7 l
  360.21 62.9 l
  f
  409 79.5 m
  385.8 79.896 l
  385.583 34.896 l
  393.863 34.754 l
  394.038 71.054 l
  408.938 70.799 l
  f
  `,FINAL:`33.5 13.4 m
  404.5 6.92 l
  419.6 6.657 431.9 18.52 432.1 33.62 c
  432.89 78.92 l
  433.153 94.02 421.29 106.32 406.19 106.52 c
  35.19 113 l
  20.09 113.263 7.79 101.4 7.59 86.3 c
  6.8 41 l
  6.537 25.9 18.4 13.6 33.5 13.4 c
  s
  148 44.7 m
  126.9 45.053 l
  126.995 54.943 l
  146.495 54.616 l
  146.593 64.916 l
  127.093 65.243 l
  127.31 87.943 l
  115.51 88.14 l
  115.001 35.04 l
  147.801 34.491 l
  f
  181 87 m
  154.2 87.449 l
  154.11 78.029 l
  161.62 77.903 l
  161.292 43.603 l
  153.782 43.729 l
  153.692 34.309 l
  180.492 33.86 l
  180.582 43.28 l
  173.072 43.406 l
  173.4 77.706 l
  180.91 77.58 l
  f
  233 86.1 m
  221.6 86.291 l
  201.8 50.191 l
  202.149 86.691 l
  191.349 86.872 l
  190.84 33.772 l
  204.94 33.536 l
  221.94 63.736 l
  221.649 33.336 l
  232.449 33.155 l
  f
  287 85.2 m
  274.8 85.404 l
  271.53 74.704 l
  254.53 74.988 l
  251.46 85.788 l
  239.56 85.987 l
  255.96 32.587 l
  269.56 32.359 l
  h
  268.6 65 m
  262.78 46 l
  257.33 65.2 l
  f
  326 84.5 m
  292.9 85.053 l
  292.391 31.953 l
  304.191 31.755 l
  304.601 74.655 l
  325.801 74.3 l
  f
  `,EXPIRED:`33.5 13.4 m
  404.5 6.92 l
  419.6 6.657 431.9 18.52 432.1 33.62 c
  432.89 78.92 l
  433.153 94.02 421.29 106.32 406.19 106.52 c
  35.19 113 l
  20.09 113.263 7.79 101.4 7.59 86.3 c
  6.8 41 l
  6.537 25.9 18.4 13.6 33.5 13.4 c
  s
  99.4 88.3 m
  66.3 88.855 l
  65.791 35.755 l
  98.891 35.2 l
  98.989 45.5 l
  77.589 45.858 l
  77.677 55.028 l
  97.577 54.696 l
  97.676 64.996 l
  77.776 65.328 l
  77.902 78.428 l
  99.302 78.07 l
  f
  151 87.5 m
  137.3 87.729 l
  127.3 70.429 l
  117.4 88.129 l
  104.3 88.347 l
  120.3 61.347 l
  104.1 35.247 l
  117.7 35.019 l
  127.4 51.419 l
  137.06 34.719 l
  150.16 34.5 l
  134.36 60.6 l
  f
  195 50.4 m
  195.023 52.78 194.686 55.117 193.99 57.41 c
  193.297 59.683 192.29 61.603 190.97 63.17 c
  189.163 65.297 187.137 66.913 184.89 68.02 c
  182.663 69.127 179.877 69.71 176.53 69.77 c
  169.17 69.893 l
  169.336 87.193 l
  157.536 87.391 l
  157.027 34.291 l
  176.527 33.966 l
  179.44 33.917 181.894 34.174 183.887 34.735 c
  185.9 35.272 187.684 36.112 189.237 37.255 c
  191.097 38.628 192.52 40.402 193.507 42.575 c
  194.514 44.748 195.03 47.368 195.057 50.435 c
  h
  182.8 50.926 m
  182.786 49.426 182.426 48.146 181.72 47.086 c
  181.013 46.006 180.197 45.259 179.27 44.846 c
  178.037 44.295 176.833 44.006 175.66 43.978 c
  174.487 43.926 172.927 43.917 170.98 43.949 c
  168.95 43.983 l
  169.102 59.883 l
  172.492 59.827 l
  174.505 59.793 176.155 59.623 177.442 59.316 c
  178.755 59.008 179.849 58.418 180.722 57.546 c
  181.475 56.772 182.012 55.859 182.332 54.806 c
  182.671 53.732 182.833 52.432 182.818 50.906 c
  f
  228 86.2 m
  201.2 86.649 l
  201.11 77.229 l
  208.62 77.103 l
  208.292 42.803 l
  200.782 42.929 l
  200.692 33.509 l
  227.492 33.06 l
  227.582 42.48 l
  220.072 42.606 l
  220.4 76.906 l
  227.91 76.78 l
  f
  263 48.7 m
  262.987 47.367 262.74 46.23 262.259 45.29 c
  261.778 44.343 260.961 43.607 259.809 43.08 c
  259.002 42.713 258.066 42.502 256.999 42.449 c
  255.932 42.372 254.689 42.345 253.269 42.369 c
  248.989 42.44 l
  249.126 56.74 l
  252.756 56.679 l
  254.643 56.648 256.223 56.514 257.496 56.279 c
  258.769 56.044 259.833 55.537 260.686 54.759 c
  261.499 54.006 262.086 53.186 262.446 52.299 c
  262.827 51.386 263.011 50.183 262.996 48.689 c
  h
  281.8 85.3 m
  267.4 85.541 l
  254.7 66.241 l
  249.25 66.332 l
  249.437 85.832 l
  237.637 86.029 l
  237.128 32.929 l
  256.928 32.597 l
  259.635 32.552 261.965 32.691 263.918 33.015 c
  265.871 33.339 267.705 34.082 269.418 35.245 c
  271.151 36.405 272.531 37.928 273.558 39.815 c
  274.605 41.675 275.141 44.035 275.168 46.895 c
  275.206 50.822 274.446 54.035 272.888 56.535 c
  271.355 59.035 269.138 61.132 266.238 62.825 c
  f
  321 84.6 m
  287.9 85.155 l
  287.391 32.055 l
  320.491 31.5 l
  320.589 41.8 l
  299.189 42.158 l
  299.277 51.328 l
  319.177 50.996 l
  319.276 61.296 l
  299.376 61.628 l
  299.502 74.728 l
  320.902 74.37 l
  f
  373 57.2 m
  373.047 62.147 372.114 66.613 370.2 70.6 c
  368.287 74.533 365.853 77.573 362.9 79.72 c
  360.68 81.327 358.24 82.463 355.58 83.13 c
  352.92 83.793 349.763 84.157 346.11 84.22 c
  329.91 84.49 l
  329.401 31.39 l
  346.001 31.112 l
  349.734 31.05 352.961 31.365 355.681 32.057 c
  358.394 32.724 360.681 33.707 362.541 35.007 c
  365.721 37.194 368.234 40.174 370.081 43.947 c
  371.941 47.7 372.898 52.134 372.951 57.247 c
  h
  360.8 57.297 m
  360.767 53.797 360.183 50.821 359.05 48.367 c
  357.937 45.887 356.183 43.964 353.79 42.597 c
  352.57 41.931 351.323 41.487 350.05 41.267 c
  348.797 41.027 346.897 40.928 344.35 40.97 c
  341.36 41.02 l
  341.678 74.32 l
  344.668 74.27 l
  347.481 74.223 349.541 74.046 350.848 73.738 c
  352.161 73.407 353.438 72.837 354.678 72.028 c
  356.818 70.562 358.381 68.632 359.368 66.238 c
  360.348 63.818 360.821 60.848 360.788 57.328 c
  f
  `,AS_IS:`33.5 13.4 m
  404.5 6.92 l
  419.6 6.657 431.9 18.52 432.1 33.62 c
  432.89 78.92 l
  433.153 94.02 421.29 106.32 406.19 106.52 c
  35.19 113 l
  20.09 113.263 7.79 101.4 7.59 86.3 c
  6.8 41 l
  6.537 25.9 18.4 13.6 33.5 13.4 c
  s
  170 87.2 m
  157.8 87.404 l
  154.53 76.704 l
  137.53 76.988 l
  134.46 87.788 l
  122.56 87.987 l
  138.96 34.587 l
  152.56 34.359 l
  h
  151.6 67 m
  145.78 48 l
  140.33 67.2 l
  f
  213 69.7 m
  213.05 74.933 211.173 79.233 207.37 82.6 c
  203.583 85.927 198.417 87.643 191.87 87.75 c
  188.077 87.813 184.76 87.488 181.92 86.774 c
  179.1 86.034 176.453 85.091 173.98 83.944 c
  173.858 71.244 l
  175.148 71.222 l
  177.615 73.442 180.361 75.132 183.388 76.292 c
  186.435 77.452 189.355 78.009 192.148 77.962 c
  192.868 77.95 193.811 77.863 194.978 77.7 c
  196.145 77.538 197.098 77.284 197.838 76.938 c
  198.738 76.495 199.471 75.948 200.038 75.298 c
  200.627 74.646 200.915 73.689 200.903 72.428 c
  200.892 71.262 200.452 70.268 199.583 69.448 c
  198.736 68.608 197.49 67.975 195.843 67.548 c
  194.116 67.101 192.286 66.691 190.353 66.318 c
  188.44 65.922 186.64 65.415 184.953 64.798 c
  181.08 63.412 178.28 61.495 176.553 59.048 c
  174.846 56.575 173.976 53.495 173.943 49.808 c
  173.896 44.862 175.766 40.795 179.553 37.608 c
  183.36 34.402 188.26 32.748 194.253 32.648 c
  197.266 32.598 200.246 32.893 203.193 33.534 c
  206.153 34.151 208.716 34.954 210.883 35.944 c
  211 48.144 l
  209.74 48.166 l
  207.88 46.486 205.6 45.095 202.9 43.995 c
  200.22 42.875 197.487 42.339 194.7 42.386 c
  193.713 42.402 192.73 42.502 191.75 42.684 c
  190.79 42.843 189.86 43.144 188.96 43.587 c
  188.16 43.958 187.477 44.518 186.91 45.267 c
  186.342 45.994 186.063 46.821 186.072 47.747 c
  186.085 49.154 186.559 50.227 187.492 50.967 c
  188.425 51.687 190.175 52.337 192.742 52.917 c
  194.429 53.293 196.042 53.66 197.582 54.017 c
  199.142 54.372 200.819 54.869 202.612 55.508 c
  206.132 56.781 208.735 58.557 210.422 60.837 c
  212.129 63.091 212.999 66.051 213.032 69.718 c
  f
  267 85.5 m
  240.2 85.949 l
  240.11 76.529 l
  247.62 76.403 l
  247.292 42.103 l
  239.782 42.229 l
  239.692 32.809 l
  266.492 32.36 l
  266.582 41.78 l
  259.072 41.906 l
  259.4 76.206 l
  266.91 76.08 l
  f
  313 68.1 m
  313.05 73.333 311.173 77.633 307.37 81 c
  303.583 84.327 298.417 86.043 291.87 86.15 c
  288.077 86.213 284.76 85.888 281.92 85.174 c
  279.1 84.434 276.453 83.491 273.98 82.344 c
  273.858 69.644 l
  275.148 69.622 l
  277.615 71.842 280.361 73.532 283.388 74.692 c
  286.435 75.852 289.355 76.409 292.148 76.362 c
  292.868 76.35 293.811 76.263 294.978 76.1 c
  298.738 74.895 299.471 74.348 300.038 73.698 c
  300.627 73.046 300.915 72.089 300.903 70.828 c
  300.892 69.662 300.452 68.668 299.583 67.848 c
  298.736 67.008 297.49 66.375 295.843 65.948 c
  294.116 65.501 292.286 65.091 290.353 64.718 c
  288.44 64.322 286.64 63.815 284.953 63.198 c
  281.08 61.812 278.28 59.895 276.553 57.448 c
  274.846 54.975 273.976 51.895 273.943 48.208 c
  273.896 43.262 275.766 39.195 279.553 36.008 c
  283.36 32.802 288.26 31.148 294.253 31.048 c
  297.266 30.998 300.246 31.293 303.193 31.934 c
  306.153 32.551 308.716 33.354 310.883 34.344 c
  311 46.544 l
  309.74 46.565 l
  307.88 44.885 305.6 43.495 302.9 42.395 c
  300.22 41.275 297.487 40.739 294.7 40.785 c
  293.713 40.802 292.73 40.902 291.75 41.084 c
  290.79 41.243 289.86 41.544 288.96 41.987 c
  288.16 42.357 287.477 42.917 286.91 43.667 c
  286.342 44.394 286.063 45.221 286.072 46.147 c
  286.085 47.554 286.559 48.627 287.492 49.367 c
  288.425 50.087 290.175 50.737 292.742 51.317 c
  294.429 51.693 296.042 52.06 297.582 52.417 c
  299.142 52.772 300.819 53.269 302.612 53.907 c
  306.132 55.181 308.735 56.957 310.422 59.237 c
  312.129 61.491 312.999 64.451 313.032 68.117 c
  f  
  `,SOLD:`33.5 13.4 m
  404.5 6.92 l
  419.6 6.657 431.9 18.52 432.1 33.62 c
  432.89 78.92 l
  433.153 94.02 421.29 106.32 406.19 106.52 c
  35.19 113 l
  20.09 113.263 7.79 101.4 7.59 86.3 c
  6.8 41 l
  6.537 25.9 18.4 13.6 33.5 13.4 c
  s
  166 70.5 m
  166.05 75.733 164.173 80.033 160.37 83.4 c
  156.583 86.727 151.417 88.443 144.87 88.55 c
  141.077 88.613 137.76 88.288 134.92 87.574 c
  132.1 86.834 129.453 85.891 126.98 84.744 c
  126.858 72.044 l
  128.148 72.022 l
  130.615 74.242 133.361 75.932 136.388 77.092 c
  139.435 78.252 142.355 78.809 145.148 78.762 c
  145.868 78.75 146.811 78.663 147.978 78.5 c
  149.145 78.338 150.098 78.084 150.838 77.738 c
  151.738 77.295 152.471 76.748 153.038 76.098 c
  153.627 75.446 153.915 74.489 153.903 73.228 c
  153.892 72.062 153.452 71.068 152.583 70.248 c
  151.736 69.408 150.49 68.775 148.843 68.348 c
  147.116 67.901 145.286 67.491 143.353 67.118 c
  141.44 66.722 139.64 66.215 137.953 65.598 c
  134.08 64.212 131.28 62.295 129.553 59.848 c
  127.846 57.375 126.976 54.295 126.943 50.608 c
  126.896 45.662 128.766 41.595 132.553 38.408 c
  136.36 35.202 141.26 33.548 147.253 33.448 c
  150.266 33.398 153.246 33.693 156.193 34.334 c
  159.153 34.951 161.716 35.754 163.883 36.744 c
  164 48.944 l
  162.74 48.965 l
  160.88 47.285 158.6 45.895 155.9 44.795 c
  153.22 43.675 150.487 43.139 147.7 43.185 c
  146.713 43.202 145.73 43.302 144.75 43.484 c
  143.79 43.643 142.86 43.944 141.96 44.387 c
  141.16 44.757 140.477 45.317 139.91 46.067 c
  139.342 46.794 139.063 47.621 139.072 48.547 c
  139.085 49.954 139.559 51.027 140.492 51.767 c
  141.425 52.487 143.175 53.137 145.742 53.717 c
  147.429 54.093 149.042 54.46 150.582 54.817 c
  152.142 55.172 153.819 55.669 155.612 56.307 c
  159.132 57.581 161.735 59.357 163.422 61.637 c
  165.129 63.891 165.999 66.851 166.032 70.517 c
  f
  218 59.8 m
  218.081 68.267 216.051 75.033 211.91 80.1 c
  207.77 85.14 202.003 87.723 194.61 87.85 c
  187.277 87.973 181.477 85.583 177.21 80.68 c
  172.977 75.753 170.82 69.053 170.74 60.58 c
  170.658 52.047 172.688 45.28 176.83 40.28 c
  180.97 35.24 186.737 32.657 194.13 32.53 c
  201.463 32.407 207.263 34.797 211.53 39.7 c
  215.783 44.58 217.95 51.28 218.03 59.8 c
  h
  202.5 73.5 m
  203.633 71.86 204.467 69.943 205 67.75 c
  205.533 65.53 205.785 62.933 205.757 59.96 c
  205.726 56.773 205.383 54.067 204.727 51.84 c
  204.07 49.613 203.22 47.82 202.177 46.46 c
  201.117 45.047 199.897 44.033 198.517 43.42 c
  197.157 42.8 195.737 42.502 194.257 42.527 c
  192.757 42.552 191.344 42.885 190.017 43.526 c
  188.71 44.167 187.51 45.21 186.417 46.656 c
  185.404 48.003 184.58 49.859 183.947 52.226 c
  183.333 54.566 183.041 57.283 183.071 60.376 c
  183.101 63.543 183.435 66.239 184.071 68.466 c
  184.728 70.666 185.578 72.459 186.621 73.846 c
  187.661 75.233 188.871 76.246 190.251 76.886 c
  191.631 77.529 193.081 77.838 194.601 77.813 c
  196.121 77.788 197.564 77.431 198.931 76.743 c
  200.298 76.03 201.488 74.95 202.501 73.503 c
  f
  261 85.6 m
  227.9 86.153 l
  227.391 33.053 l
  239.191 32.855 l
  239.601 75.755 l
  260.801 75.4 l
  f
  311 58.3 m
  311.047 63.247 310.114 67.713 308.2 71.7 c
  306.287 75.633 303.853 78.673 300.9 80.82 c
  298.68 82.427 296.24 83.563 293.58 84.23 c
  267.91 85.59 l
  267.401 32.49 l
  284.001 32.212 l
  287.734 32.15 290.961 32.465 293.681 33.157 c
  296.394 33.824 298.681 34.807 300.541 36.107 c
  303.721 38.294 306.234 41.274 308.081 45.047 c
  309.941 48.8 310.898 53.234 310.951 58.347 c
  h
  298.8 58.397 m
  298.767 54.897 298.183 51.921 297.05 49.467 c
  295.937 46.987 294.183 45.064 291.79 43.697 c
  290.57 43.031 289.323 42.587 288.05 42.367 c
  286.797 42.127 284.897 42.028 282.35 42.07 c
  279.36 42.12 l
  279.678 75.42 l
  282.668 75.37 l
  285.481 75.323 287.541 75.146 288.848 74.838 c
  290.161 74.507 291.438 73.937 292.678 73.128 c
  294.818 71.662 296.381 69.732 297.368 67.338 c
  298.348 64.918 298.821 61.948 298.788 58.428 c
  f
  `,EXPERIMENTAL:`33.5 13.4 m
  404.5 6.92 l
  419.6 6.657 431.9 18.52 432.1 33.62 c
  432.89 78.92 l
  433.153 94.02 421.29 106.32 406.19 106.52 c
  35.19 113 l
  20.09 113.263 7.79 101.4 7.59 86.3 c
  6.8 41 l
  6.537 25.9 18.4 13.6 33.5 13.4 c
  s
  55.9 86.5 m
  32.9 86.873 l
  32.766 40.073 l
  55.766 39.7 l
  55.792 48.76 l
  40.992 49.001 l
  41.015 57.081 l
  54.815 56.857 l
  54.841 65.917 l
  41.041 66.141 l
  41.074 77.741 l
  55.874 77.5 l
  f
  91.6 85.9 m
  82.12 86.054 l
  75.22 70.754 l
  68.28 86.254 l
  59.23 86.401 l
  70.43 62.601 l
  59.33 39.501 l
  68.79 39.347 l
  75.45 53.847 l
  82.22 39.147 l
  91.3 39 l
  80.3 61.9 l
  f
  122 53.4 m
  122 55.493 121.757 57.553 121.27 59.58 c
  120.777 61.58 120.071 63.27 119.15 64.65 c
  117.89 66.517 116.477 67.933 114.91 68.9 c
  113.363 69.867 111.43 70.37 109.11 70.41 c
  104.01 70.493 l
  104.054 85.793 l
  95.854 85.926 l
  95.72 39.126 l
  109.22 38.907 l
  111.24 38.874 112.943 39.108 114.33 39.61 c
  115.723 40.091 116.956 40.837 118.03 41.85 c
  119.316 43.063 120.296 44.63 120.97 46.55 c
  121.656 48.47 122.003 50.78 122.01 53.48 c
  h
  113.52 53.821 m
  113.52 52.501 113.275 51.374 112.784 50.441 c
  112.297 49.488 111.734 48.824 111.094 48.451 c
  110.241 47.962 109.407 47.703 108.594 47.674 c
  107.781 47.624 106.697 47.61 105.344 47.632 c
  103.934 47.655 l
  103.974 61.655 l
  106.324 61.617 l
  107.717 61.595 108.864 61.45 109.764 61.184 c
  110.677 60.918 111.437 60.401 112.044 59.634 c
  112.569 58.954 112.945 58.151 113.174 57.224 c
  113.413 56.278 113.531 55.134 113.527 53.794 c
  f
  151 84.9 m
  128 85.273 l
  127.866 38.473 l
  150.866 38.1 l
  150.892 47.16 l
  136.092 47.401 l
  136.115 55.481 l
  149.915 55.257 l
  149.941 64.317 l
  136.141 64.541 l
  136.174 76.141 l
  150.974 75.9 l
  f
  176 52.1 m
  176 50.927 175.833 49.923 175.5 49.09 c
  175.17 48.257 174.607 47.607 173.81 47.14 c
  173.254 46.813 172.604 46.625 171.86 46.574 c
  171.12 46.502 170.26 46.474 169.28 46.49 c
  166.31 46.538 l
  166.346 59.138 l
  168.866 59.098 l
  170.173 59.076 171.269 58.964 172.156 58.762 c
  173.036 58.558 173.776 58.115 174.376 57.432 c
  174.943 56.772 175.353 56.052 175.606 55.272 c
  175.874 54.471 176.006 53.411 176.003 52.092 c
  h
  188.9 84.4 m
  178.9 84.563 l
  170.18 67.563 l
  166.4 67.624 l
  166.449 84.824 l
  158.289 84.956 l
  158.155 38.156 l
  171.955 37.933 l
  173.835 37.903 175.452 38.034 176.805 38.326 c
  178.158 38.619 179.428 39.279 180.615 40.306 c
  181.815 41.333 182.765 42.68 183.465 44.346 c
  184.178 45.993 184.542 48.073 184.555 50.586 c
  184.565 54.046 184.025 56.876 182.935 59.076 c
  181.862 61.276 180.315 63.116 178.295 64.596 c
  f
  210 84 m
  191.4 84.302 l
  191.376 76.002 l
  196.586 75.917 l
  196.5 45.717 l
  191.29 45.802 l
  191.266 37.502 l
  209.866 37.2 l
  209.89 45.5 l
  204.68 45.585 l
  204.766 75.785 l
  209.976 75.7 l
  f
  250 83.3 m
  241.84 83.432 l
  241.75 52.032 l
  235.91 72.432 l
  230.25 72.524 l
  224.3 52.224 l
  224.39 83.624 l
  216.66 83.75 l
  216.526 36.95 l
  226.046 36.795 l
  233.266 60.195 l
  240.336 36.595 l
  249.856 36.44 l
  f
  281 82.8 m
  258 83.173 l
  257.866 36.373 l
  280.866 36 l
  280.892 45.06 l
  266.092 45.301 l
  266.115 53.381 l
  279.915 53.157 l
  279.941 62.217 l
  266.141 62.441 l
  266.174 74.041 l
  280.974 73.8 l
  f
  316 82.3 m
  308.1 82.428 l
  294.5 50.528 l
  294.592 82.628 l
  287.072 82.75 l
  286.938 35.95 l
  296.738 35.791 l
  308.438 62.391 l
  308.361 35.591 l
  315.881 35.469 l
  f
  349 44 m
  339.07 44.161 l
  339.178 81.961 l
  330.978 82.094 l
  330.87 44.294 l
  320.94 44.455 l
  320.914 35.395 l
  349.014 34.939 l
  f
  384 81.2 m
  375.52 81.338 l
  373.29 71.908 l
  361.49 72.099 l
  359.32 81.599 l
  351.06 81.733 l
  362.66 34.733 l
  372.1 34.58 l
  h
  371.3 63.4 m
  367.34 46.7 l
  363.48 63.6 l
  f
  411 80.7 m
  388.1 81.072 l
  387.966 34.272 l
  396.166 34.139 l
  396.274 71.939 l
  410.974 71.7 l
  f
  `,FOR_COMMENT:`33.5 13.4 m
  404.5 6.92 l
  419.6 6.657 431.9 18.52 432.1 33.62 c
  432.89 78.92 l
  433.153 94.02 421.29 106.32 406.19 106.52 c
  35.19 113 l
  20.09 113.263 7.79 101.4 7.59 86.3 c
  6.8 41 l
  6.537 25.9 18.4 13.6 33.5 13.4 c
  s
  61.6 49.9 m
  46.8 50.184 l
  46.866 58.134 l
  60.566 57.871 l
  60.635 66.141 l
  46.935 66.404 l
  47.087 84.704 l
  38.837 84.862 l
  38.48 42.162 l
  61.48 41.72 l
  f
  98.7 62.3 m
  98.757 69.1 97.334 74.533 94.43 78.6 c
  91.523 82.653 87.49 84.73 82.33 84.83 c
  77.163 84.929 73.097 83.006 70.13 79.06 c
  67.157 75.1 65.643 69.7 65.59 62.86 c
  65.533 55.993 66.956 50.527 69.86 46.46 c
  72.767 42.407 76.8 40.33 81.96 40.23 c
  87.113 40.131 91.18 42.055 94.16 46 c
  97.147 49.927 98.667 55.327 98.72 62.2 c
  h
  87.8 73.3 m
  88.593 71.98 89.177 70.437 89.55 68.67 c
  89.924 66.883 90.101 64.793 90.081 62.4 c
  90.06 59.833 89.818 57.657 89.357 55.87 c
  88.896 54.077 88.299 52.633 87.567 51.54 c
  86.82 50.407 85.964 49.59 84.997 49.09 c
  84.044 48.591 83.047 48.352 82.007 48.372 c
  80.954 48.392 79.964 48.66 79.037 49.176 c
  78.117 49.691 77.274 50.531 76.507 51.696 c
  75.794 52.783 75.217 54.276 74.777 56.176 c
  74.346 58.063 74.141 60.249 74.162 62.736 c
  74.183 65.283 74.417 67.449 74.864 69.236 c
  75.325 71.009 75.922 72.453 76.654 73.566 c
  80.171 76.533 81.187 76.782 82.254 76.761 c
  83.321 76.741 84.334 76.453 85.294 75.899 c
  86.254 75.326 87.091 74.459 87.804 73.299 c
  f
  123 53.6 m
  122.991 52.527 122.818 51.61 122.48 50.85 c
  122.143 50.09 121.569 49.497 120.76 49.07 c
  120.196 48.775 119.539 48.605 118.79 48.562 c
  118.043 48.5 117.173 48.478 116.18 48.497 c
  113.18 48.555 l
  113.276 60.055 l
  115.826 60.006 l
  117.153 59.981 118.259 59.873 119.146 59.684 c
  120.039 59.495 120.786 59.088 121.386 58.464 c
  121.957 57.86 122.37 57.2 122.626 56.484 c
  122.893 55.751 123.022 54.781 123.012 53.574 c
  h
  136.2 83 m
  126.1 83.194 l
  117.2 67.694 l
  113.38 67.767 l
  113.511 83.467 l
  105.261 83.625 l
  104.904 40.925 l
  118.804 40.658 l
  120.704 40.622 122.341 40.734 123.714 40.995 c
  125.087 41.256 126.374 41.853 127.574 42.785 c
  128.794 43.719 129.761 44.945 130.474 46.465 c
  131.207 47.965 131.584 49.862 131.604 52.155 c
  131.63 55.315 131.097 57.899 130.004 59.905 c
  128.924 61.919 127.367 63.605 125.334 64.965 c
  f
  169 83.2 m
  166.607 83.246 164.393 82.819 162.36 81.92 c
  160.333 81.02 158.587 79.657 157.12 77.83 c
  155.653 76.003 154.503 73.71 153.67 70.95 c
  152.857 68.19 152.433 64.993 152.4 61.36 c
  152.372 57.973 152.728 54.893 153.47 52.12 c
  154.21 49.347 155.3 46.963 156.74 44.97 c
  158.12 43.05 159.837 41.553 161.89 40.48 c
  163.957 39.407 166.213 38.847 168.66 38.8 c
  170.013 38.774 171.23 38.856 172.31 39.046 c
  173.403 39.217 174.413 39.456 175.34 39.763 c
  176.307 40.108 177.18 40.502 177.96 40.943 c
  178.753 41.368 179.447 41.764 180.04 42.133 c
  180.127 52.533 l
  179.177 52.551 l
  178.77 52.1 178.253 51.563 177.627 50.941 c
  177.017 50.321 176.32 49.711 175.537 49.111 c
  174.737 48.514 173.877 48.014 172.957 47.611 c
  168.83 47.059 167.723 47.329 166.677 47.846 c
  165.63 48.345 164.663 49.168 163.777 50.316 c
  162.937 51.423 162.257 52.88 161.737 54.686 c
  161.233 56.493 160.992 58.68 161.014 61.246 c
  161.036 63.926 161.335 66.16 161.912 67.946 c
  162.502 69.733 163.236 71.136 164.112 72.156 c
  164.998 73.19 165.985 73.926 167.072 74.366 c
  168.158 74.786 169.225 74.985 170.272 74.965 c
  171.278 74.946 172.271 74.726 173.251 74.305 c
  174.245 73.885 175.155 73.321 175.981 72.615 c
  176.681 72.047 177.332 71.44 177.931 70.795 c
  178.531 70.152 179.024 69.599 179.411 69.135 c
  180.275 69.119 l
  180.361 79.319 l
  179.561 79.813 178.794 80.276 178.061 80.709 c
  177.327 81.144 176.561 81.524 175.761 81.849 c
  174.714 82.271 173.731 82.596 172.811 82.824 c
  171.891 83.052 170.624 83.181 169.011 83.213 c
  f
  218 60 m
  218.057 66.8 216.634 72.233 213.73 76.3 c
  210.823 80.353 206.79 82.43 201.63 82.53 c
  196.463 82.629 192.397 80.706 189.43 76.76 c
  186.457 72.8 184.943 67.4 184.89 60.56 c
  184.833 53.693 186.256 48.227 189.16 44.16 c
  192.067 40.107 196.1 38.03 201.26 37.93 c
  206.413 37.831 210.48 39.755 213.46 43.7 c
  216.447 47.627 217.967 53.027 218.02 59.9 c
  h
  207.1 71 m
  207.893 69.68 208.477 68.137 208.85 66.37 c
  209.224 64.583 209.401 62.493 209.381 60.1 c
  209.36 57.533 209.118 55.357 208.657 53.57 c
  208.196 51.777 207.599 50.333 206.867 49.24 c
  206.12 48.107 205.264 47.29 204.297 46.79 c
  203.344 46.291 202.347 46.052 201.307 46.072 c
  200.254 46.092 199.264 46.36 198.337 46.876 c
  197.417 47.391 196.574 48.231 195.807 49.396 c
  195.094 50.483 194.517 51.976 194.077 53.876 c
  193.646 55.763 193.441 57.949 193.462 60.436 c
  193.483 62.983 193.717 65.149 194.164 66.936 c
  194.625 68.709 195.222 70.153 195.954 71.266 c
  199.471 74.233 200.487 74.482 201.554 74.461 c
  202.621 74.441 203.634 74.153 204.594 73.599 c
  205.554 73.026 206.391 72.159 207.104 70.999 c
  f
  258 80.6 m
  249.75 80.758 l
  249.511 52.158 l
  243.701 70.858 l
  237.981 70.968 l
  231.861 52.468 l
  232.1 81.068 l
  224.28 81.218 l
  223.923 38.518 l
  233.553 38.333 l
  240.963 59.633 l
  247.993 38.033 l
  257.623 37.848 l
  f
  300 79.8 m
  291.75 79.958 l
  291.511 51.358 l
  285.701 70.058 l
  279.981 70.168 l
  273.861 51.668 l
  274.1 80.268 l
  266.28 80.418 l
  265.923 37.718 l
  275.553 37.533 l
  282.963 58.833 l
  289.993 37.233 l
  299.623 37.048 l
  f
  332 79.2 m
  308.7 79.646 l
  308.343 36.946 l
  331.643 36.5 l
  331.712 44.77 l
  316.712 45.058 l
  316.774 52.438 l
  330.674 52.171 l
  330.743 60.441 l
  316.843 60.708 l
  316.931 71.308 l
  331.931 71.02 l
  f
  368 78.5 m
  360.01 78.653 l
  346.11 49.553 l
  346.355 78.853 l
  338.755 78.999 l
  338.398 36.299 l
  348.308 36.109 l
  360.208 60.409 l
  360.004 35.909 l
  367.604 35.763 l
  f
  401 43.4 m
  391 43.593 l
  391.288 78.093 l
  382.998 78.252 l
  382.71 43.752 l
  372.71 43.945 l
  372.641 35.675 l
  401.041 35.131 l
  f  
  `,TOP_SECRET:`33.5 13.4 m
  404.5 6.92 l
  419.6 6.657 431.9 18.52 432.1 33.62 c
  432.89 78.92 l
  433.153 94.02 421.29 106.32 406.19 106.52 c
  35.19 113 l
  20.09 113.263 7.79 101.4 7.59 86.3 c
  6.8 41 l
  6.537 25.9 18.4 13.6 33.5 13.4 c
  s
  67.5 47.4 m
  55 47.623 l
  55.357 87.423 l
  45.057 87.607 l
  44.7 47.807 l
  32.2 48.03 l
  32.114 38.48 l
  67.314 37.851 l
  f
  113 61.7 m
  113.071 69.567 111.304 75.867 107.7 80.6 c
  104.093 85.287 99.06 87.687 92.6 87.8 c
  86.187 87.915 81.12 85.695 77.4 81.14 c
  73.713 76.56 71.833 70.327 71.76 62.44 c
  71.689 54.507 73.455 48.207 77.06 43.54 c
  80.667 38.853 85.667 36.453 92.06 36.34 c
  98.453 36.226 103.52 38.446 107.26 43 c
  110.967 47.533 112.853 53.767 112.92 61.7 c
  h
  99.5 74.4 m
  100.487 72.88 101.213 71.097 101.68 69.05 c
  102.144 66.983 102.364 64.57 102.339 61.81 c
  102.312 58.85 102.013 56.333 101.44 54.26 c
  100.867 52.193 100.127 50.527 99.22 49.26 c
  98.3 47.947 97.237 47.003 96.03 46.43 c
  94.843 45.854 93.607 45.577 92.32 45.6 c
  91.013 45.623 89.783 45.933 88.63 46.528 c
  87.49 47.123 86.443 48.093 85.49 49.438 c
  84.61 50.691 83.893 52.418 83.34 54.618 c
  82.805 56.798 82.551 59.325 82.577 62.198 c
  82.603 65.138 82.894 67.645 83.449 69.718 c
  84.022 71.765 84.762 73.431 85.669 74.718 c
  86.576 76.005 87.629 76.948 88.829 77.548 c
  90.029 78.146 91.292 78.433 92.619 78.409 c
  93.939 78.385 95.196 78.053 96.389 77.413 c
  97.582 76.75 98.619 75.747 99.499 74.403 c
  f
  153 51.9 m
  153.02 54.113 152.726 56.287 152.12 58.42 c
  151.513 60.533 150.637 62.317 149.49 63.77 c
  147.917 65.743 146.153 67.247 144.2 68.28 c
  142.26 69.307 139.833 69.847 136.92 69.9 c
  130.51 70.014 l
  130.654 86.114 l
  120.354 86.298 l
  119.911 36.898 l
  136.811 36.596 l
  139.351 36.551 141.488 36.789 143.221 37.311 c
  144.974 37.81 146.528 38.59 147.881 39.651 c
  149.501 40.924 150.741 42.571 151.601 44.591 c
  152.474 46.611 152.924 49.048 152.951 51.901 c
  h
  142.4 52.388 m
  142.388 50.995 142.073 49.805 141.457 48.818 c
  140.84 47.811 140.127 47.115 139.317 46.728 c
  138.237 46.217 137.19 45.948 136.177 45.922 c
  135.157 45.874 133.8 45.865 132.107 45.895 c
  130.337 45.927 l
  130.47 60.727 l
  133.42 60.674 l
  135.173 60.643 136.61 60.485 137.73 60.199 c
  138.87 59.913 139.82 59.367 140.58 58.559 c
  141.235 57.839 141.701 56.989 141.98 56.009 c
  142.275 55.009 142.416 53.803 142.403 52.389 c
  f
  211 69.1 m
  211.044 73.967 209.407 77.967 206.09 81.1 c
  202.797 84.187 198.297 85.783 192.59 85.89 c
  189.283 85.949 186.393 85.647 183.92 84.983 c
  181.467 84.296 179.163 83.42 177.01 82.353 c
  176.904 70.553 l
  178.034 70.533 l
  180.181 72.593 182.571 74.166 185.204 75.253 c
  187.857 76.333 190.401 76.853 192.834 76.813 c
  193.459 76.802 194.279 76.721 195.294 76.57 c
  196.314 76.419 197.144 76.183 197.784 75.862 c
  198.564 75.45 199.204 74.94 199.704 74.332 c
  200.217 73.726 200.468 72.836 200.457 71.662 c
  200.447 70.575 200.064 69.652 199.307 68.892 c
  198.567 68.112 197.48 67.522 196.047 67.122 c
  194.54 66.707 192.947 66.327 191.267 65.982 c
  189.6 65.613 188.034 65.143 186.567 64.572 c
  183.194 63.285 180.757 61.505 179.257 59.232 c
  177.77 56.939 177.01 54.079 176.977 50.652 c
  176.936 46.052 178.562 42.285 181.857 39.352 c
  185.17 36.372 189.437 34.835 194.657 34.742 c
  197.284 34.695 199.877 34.969 202.437 35.565 c
  205.017 36.138 207.247 36.885 209.127 37.805 c
  209.229 49.205 l
  208.129 49.225 l
  206.509 47.658 204.522 46.368 202.169 45.355 c
  199.836 44.315 197.456 43.815 195.029 43.855 c
  194.169 43.87 193.312 43.963 192.459 44.133 c
  191.619 44.281 190.809 44.561 190.029 44.973 c
  189.336 45.317 188.742 45.837 188.249 46.533 c
  187.754 47.206 187.511 47.973 187.519 48.833 c
  187.531 50.139 187.941 51.139 188.749 51.833 c
  189.562 52.506 191.086 53.109 193.319 53.643 c
  194.786 53.993 196.192 54.333 197.539 54.663 c
  198.899 54.992 200.359 55.452 201.919 56.043 c
  204.986 57.229 207.252 58.879 208.719 60.993 c
  210.206 63.086 210.962 65.836 210.989 69.243 c
  f
  248 84 m
  219.1 84.515 l
  218.657 35.115 l
  247.557 34.6 l
  247.643 44.15 l
  229.043 44.483 l
  229.119 53.003 l
  246.419 52.694 l
  246.505 62.244 l
  229.205 62.553 l
  229.314 74.753 l
  247.914 74.42 l
  f
  274 84.5 m
  271.033 84.553 268.287 84.06 265.76 83.02 c
  263.247 81.98 261.08 80.403 259.26 78.29 c
  257.433 76.177 256.007 73.527 254.98 70.34 c
  253.967 67.153 253.443 63.453 253.41 59.24 c
  253.375 55.327 253.815 51.76 254.73 48.54 c
  255.65 45.34 257 42.583 258.78 40.27 c
  260.493 38.05 262.623 36.32 265.17 35.08 c
  267.73 33.84 270.53 33.193 273.57 33.14 c
  275.25 33.11 276.76 33.205 278.1 33.424 c
  279.46 33.621 280.713 33.897 281.86 34.253 c
  283.06 34.652 284.147 35.108 285.12 35.623 c
  286.107 36.114 286.97 36.574 287.71 37.003 c
  287.817 49.003 l
  286.637 49.024 l
  286.132 48.502 285.492 47.882 284.717 47.164 c
  283.957 46.451 283.094 45.747 282.127 45.054 c
  281.14 44.361 280.07 43.784 278.917 43.324 c
  277.77 42.858 276.544 42.637 275.237 42.66 c
  273.79 42.686 272.417 42.998 271.117 43.596 c
  269.817 44.172 268.62 45.122 267.527 46.446 c
  266.487 47.726 265.644 49.409 264.997 51.496 c
  264.372 53.589 264.073 56.116 264.1 59.076 c
  264.128 62.169 264.498 64.749 265.21 66.816 c
  265.943 68.883 266.85 70.503 267.93 71.676 c
  269.03 72.876 270.253 73.729 271.6 74.236 c
  272.947 74.721 274.27 74.951 275.57 74.928 c
  276.823 74.906 278.053 74.651 279.26 74.165 c
  280.487 73.678 281.617 73.028 282.65 72.215 c
  283.517 71.558 284.323 70.858 285.07 70.115 c
  285.817 69.375 286.427 68.735 286.9 68.195 c
  287.97 68.176 l
  288.076 79.976 l
  287.083 80.547 286.133 81.083 285.226 81.586 c
  284.319 82.089 283.366 82.525 282.366 82.896 c
  281.066 83.383 279.846 83.76 278.706 84.026 c
  277.566 84.289 275.996 84.439 273.996 84.475 c
  f
  318 48.5 m
  317.989 47.26 317.774 46.203 317.355 45.33 c
  316.936 44.45 316.223 43.767 315.215 43.28 c
  314.515 42.939 313.702 42.743 312.775 42.693 c
  311.848 42.621 310.768 42.596 309.535 42.618 c
  305.805 42.685 l
  305.924 55.985 l
  309.084 55.928 l
  310.731 55.899 312.104 55.775 313.204 55.556 c
  314.311 55.338 315.237 54.868 315.984 54.146 c
  316.691 53.446 317.201 52.686 317.514 51.866 c
  317.846 51.02 318.006 49.9 317.993 48.506 c
  h
  334.4 82.5 m
  321.8 82.724 l
  310.8 64.824 l
  306.06 64.909 l
  306.222 83.009 l
  296.022 83.192 l
  295.579 33.792 l
  312.879 33.484 l
  315.239 33.442 317.269 33.571 318.969 33.873 c
  320.669 34.174 322.266 34.864 323.759 35.943 c
  325.272 37.023 326.472 38.439 327.359 40.193 c
  328.266 41.926 328.732 44.119 328.759 46.773 c
  328.792 50.419 328.132 53.406 326.779 55.733 c
  325.439 58.059 323.509 60.006 320.989 61.573 c
  f
  368 81.9 m
  339.1 82.415 l
  338.657 33.015 l
  367.557 32.5 l
  367.643 42.05 l
  349.043 42.383 l
  349.119 50.903 l
  366.419 50.594 l
  366.505 60.144 l
  349.205 60.453 l
  349.314 72.653 l
  367.914 72.32 l
  f
  407 41.3 m
  394.5 41.523 l
  394.857 81.323 l
  384.557 81.507 l
  384.2 41.707 l
  371.7 41.93 l
  371.614 32.38 l
  406.814 31.751 l
  f  
  `,FOR_PUBLIC_RELEASE:`33.5 13.4 m
  404.5 6.92 l
  419.6 6.657 431.9 18.52 432.1 33.62 c
  432.89 78.92 l
  433.153 94.02 421.29 106.32 406.19 106.52 c
  35.19 113 l
  20.09 113.263 7.79 101.4 7.59 86.3 c
  6.8 41 l
  6.537 25.9 18.4 13.6 33.5 13.4 c
  s
  93.2 32.1 m
  78.5 32.323 l
  78.566 38.583 l
  92.166 38.376 l
  92.234 44.886 l
  78.634 45.093 l
  78.785 59.493 l
  70.605 59.618 l
  70.251 25.918 l
  93.151 25.57 l
  f
  130 41.8 m
  130.056 47.167 128.646 51.467 125.77 54.7 c
  122.89 57.893 118.89 59.53 113.77 59.61 c
  108.643 59.688 104.61 58.175 101.67 55.07 c
  98.723 51.95 97.223 47.717 97.17 42.37 c
  97.113 36.957 98.523 32.657 101.4 29.47 c
  104.28 26.277 108.28 24.64 113.4 24.56 c
  118.513 24.482 122.547 25.995 125.5 29.1 c
  128.46 32.187 129.97 36.453 130.03 41.9 c
  h
  119.2 50.49 m
  119.987 49.45 120.567 48.237 120.94 46.85 c
  121.311 45.443 121.486 43.797 121.466 41.91 c
  121.445 39.89 121.205 38.177 120.748 36.77 c
  120.291 35.363 119.701 34.227 118.978 33.36 c
  118.238 32.467 117.388 31.823 116.428 31.43 c
  115.481 31.037 114.495 30.849 113.468 30.865 c
  112.428 30.881 111.445 31.092 110.518 31.498 c
  109.611 31.904 108.775 32.564 108.008 33.478 c
  107.301 34.331 106.728 35.508 106.288 37.008 c
  105.861 38.495 105.657 40.215 105.678 42.168 c
  105.699 44.175 105.931 45.881 106.375 47.288 c
  106.832 48.681 107.422 49.818 108.145 50.698 c
  108.865 51.578 109.708 52.221 110.675 52.628 c
  111.635 53.035 112.645 53.231 113.705 53.215 c
  114.758 53.199 115.762 52.973 116.715 52.536 c
  117.668 52.085 118.495 51.401 119.195 50.486 c
  f
  154 34.9 m
  153.991 34.053 153.819 33.333 153.485 32.74 c
  153.15 32.142 152.58 31.675 151.775 31.34 c
  151.216 31.107 150.566 30.974 149.825 30.94 c
  149.085 30.891 148.222 30.874 147.235 30.889 c
  144.255 30.934 l
  144.35 39.994 l
  146.88 39.956 l
  148.194 39.936 149.294 39.851 150.18 39.702 c
  151.067 39.552 151.807 39.232 152.4 38.741 c
  152.966 38.265 153.376 37.745 153.63 37.181 c
  153.896 36.604 154.023 35.841 154.013 34.891 c
  h
  167.1 58.1 m
  157.1 58.253 l
  148.27 46.053 l
  144.48 46.111 l
  144.61 58.411 l
  136.43 58.536 l
  136.076 24.836 l
  149.876 24.626 l
  151.763 24.597 153.386 24.685 154.746 24.891 c
  156.106 25.096 157.383 25.566 158.576 26.301 c
  159.783 27.034 160.743 28.001 161.456 29.201 c
  162.183 30.381 162.556 31.874 162.576 33.681 c
  162.602 36.167 162.072 38.204 160.986 39.791 c
  159.919 41.377 158.376 42.704 156.356 43.771 c
  f
  212 34.4 m
  212.016 35.907 211.782 37.387 211.297 38.84 c
  210.812 40.28 210.112 41.497 209.197 42.49 c
  207.937 43.837 206.527 44.86 204.967 45.56 c
  203.42 46.26 201.48 46.63 199.147 46.67 c
  194.027 46.748 l
  194.142 57.748 l
  185.922 57.873 l
  185.568 24.173 l
  199.068 23.967 l
  201.095 23.936 202.801 24.098 204.188 24.454 c
  205.588 24.795 206.828 25.325 207.908 26.044 c
  209.201 26.911 210.191 28.034 210.878 29.414 c
  211.578 30.787 211.938 32.447 211.958 34.394 c
  h
  203.5 34.733 m
  203.49 33.786 203.239 32.976 202.746 32.303 c
  202.253 31.616 201.683 31.143 201.036 30.883 c
  200.176 30.534 199.339 30.351 198.526 30.333 c
  197.713 30.3 196.626 30.294 195.266 30.315 c
  193.856 30.336 l
  193.962 40.436 l
  196.322 40.4 l
  197.722 40.379 198.872 40.271 199.772 40.076 c
  200.685 39.882 201.445 39.508 202.052 38.956 c
  202.575 38.466 202.949 37.886 203.172 37.216 c
  203.407 36.536 203.52 35.713 203.51 34.746 c
  f
  246 44.7 m
  246.044 48.86 244.877 52.067 242.5 54.32 c
  240.127 56.573 236.593 57.733 231.9 57.8 c
  227.233 57.871 223.7 56.818 221.3 54.64 c
  218.893 52.46 217.667 49.3 217.62 45.16 c
  217.394 23.66 l
  225.664 23.534 l
  225.885 44.534 l
  225.91 46.867 226.393 48.601 227.335 49.734 c
  228.275 50.867 229.788 51.417 231.875 51.384 c
  233.928 51.353 235.422 50.779 236.355 49.664 c
  237.302 48.551 237.762 46.781 237.735 44.354 c
  237.514 23.354 l
  245.784 23.228 l
  f
  281 46.1 m
  281.017 47.727 280.718 49.187 280.103 50.48 c
  279.502 51.773 278.662 52.85 277.583 53.71 c
  276.336 54.723 274.96 55.453 273.453 55.9 c
  271.96 56.345 270.056 56.585 267.743 56.62 c
  253.843 56.832 l
  253.489 23.132 l
  265.889 22.944 l
  268.462 22.905 270.342 22.967 271.529 23.129 c
  272.729 23.292 273.919 23.672 275.099 24.269 c
  276.319 24.898 277.229 25.758 277.829 26.849 c
  278.44 27.922 278.753 29.162 278.768 30.569 c
  278.785 32.196 278.392 33.642 277.588 34.909 c
  276.788 36.156 275.648 36.156 274.168 34.909 c
  276.255 35.314 277.915 36.194 279.148 37.549 c
  280.388 38.902 281.021 40.702 281.048 42.949 c
  h
  270.3 32.4 m
  270.3 31.843 270.158 31.286 269.875 30.73 c
  269.612 30.176 269.142 29.769 268.465 29.51 c
  267.863 29.278 267.113 29.161 266.215 29.16 c
  265.328 29.143 264.078 29.147 262.465 29.172 c
  261.694 29.184 l
  261.769 36.304 l
  263.059 36.284 l
  264.359 36.264 265.466 36.225 266.379 36.166 c
  267.292 36.107 268.012 35.945 268.539 35.681 c
  269.279 35.323 269.759 34.87 269.979 34.321 c
  270.202 33.76 270.309 33.116 270.301 32.391 c
  h
  272.46 46.1 m
  272.449 45.033 272.24 44.217 271.834 43.65 c
  271.442 43.068 270.772 42.641 269.824 42.37 c
  269.179 42.184 268.293 42.092 267.164 42.094 c
  266.037 42.096 264.861 42.107 263.634 42.125 c
  261.834 42.153 l
  261.922 50.543 l
  262.522 50.534 l
  264.836 50.498 266.492 50.466 267.492 50.435 c
  268.492 50.405 269.412 50.195 270.252 49.805 c
  271.106 49.415 271.686 48.909 271.992 48.285 c
  272.314 47.647 272.471 46.921 272.462 46.105 c
  f
  310 55.9 m
  287 56.25 l
  286.646 22.55 l
  294.866 22.425 l
  295.152 49.525 l
  309.952 49.3 l
  f
  332 55.6 m
  313.3 55.884 l
  313.237 49.914 l
  318.467 49.834 l
  318.239 28.134 l
  313.009 28.214 l
  312.946 22.244 l
  331.646 21.96 l
  331.709 27.93 l
  326.479 28.01 l
  326.707 49.71 l
  331.937 49.63 l
  f
  353 55.9 m
  350.627 55.936 348.43 55.599 346.41 54.89 c
  344.403 54.183 342.67 53.11 341.21 51.67 c
  339.75 50.23 338.61 48.423 337.79 46.25 c
  336.983 44.077 336.563 41.56 336.53 38.7 c
  336.502 36.033 336.855 33.61 337.59 31.43 c
  338.323 29.25 339.403 27.373 340.83 25.8 c
  342.197 24.287 343.897 23.107 345.93 22.26 c
  347.977 21.413 350.213 20.973 352.64 20.94 c
  353.98 20.92 355.187 20.984 356.26 21.134 c
  357.347 21.268 358.347 21.456 359.26 21.699 c
  360.22 21.971 361.087 22.282 361.86 22.632 c
  362.647 22.967 363.337 23.28 363.93 23.573 c
  364.016 31.733 l
  363.074 31.747 l
  362.67 31.392 362.16 30.969 361.544 30.477 c
  360.939 29.989 360.249 29.509 359.474 29.037 c
  358.68 28.567 357.827 28.174 356.914 27.857 c
  355.994 27.54 355.014 27.389 353.974 27.404 c
  352.82 27.422 351.724 27.635 350.684 28.042 c
  349.644 28.435 348.687 29.082 347.814 29.982 c
  346.98 30.856 346.307 32.002 345.794 33.422 c
  345.294 34.849 345.055 36.572 345.077 38.592 c
  345.099 40.699 345.396 42.459 345.968 43.872 c
  346.554 45.279 347.28 46.382 348.148 47.182 c
  349.028 47.996 350.004 48.576 351.078 48.922 c
  352.151 49.252 353.211 49.41 354.258 49.394 c
  355.258 49.379 356.241 49.206 357.208 48.874 c
  358.188 48.543 359.091 48.1 359.918 47.544 c
  360.611 47.096 361.254 46.62 361.848 46.114 c
  362.442 45.608 362.929 45.171 363.308 44.804 c
  364.165 44.791 l
  364.249 52.841 l
  363.456 53.23 362.696 53.597 361.969 53.941 c
  361.243 54.284 360.483 54.582 359.689 54.835 c
  358.649 55.168 357.673 55.424 356.759 55.603 c
  355.846 55.783 354.589 55.885 352.989 55.909 c
  f
  130 74.7 m
  129.991 73.853 129.819 73.133 129.485 72.54 c
  129.15 71.942 128.58 71.475 127.775 71.14 c
  127.216 70.907 126.566 70.774 125.825 70.74 c
  125.085 70.691 124.222 70.674 123.235 70.689 c
  120.255 70.734 l
  120.35 79.794 l
  122.88 79.756 l
  124.194 79.736 125.294 79.651 126.18 79.502 c
  127.067 79.352 127.807 79.032 128.4 78.541 c
  128.966 78.065 129.376 77.545 129.63 76.981 c
  129.896 76.404 130.023 75.641 130.013 74.691 c
  h
  143.1 97.9 m
  133.1 98.053 l
  124.27 85.853 l
  120.48 85.911 l
  120.61 98.211 l
  112.43 98.336 l
  112.076 64.636 l
  125.876 64.426 l
  127.763 64.397 129.386 64.485 130.746 64.691 c
  132.106 64.896 133.383 65.366 134.576 66.101 c
  135.783 66.834 136.743 67.801 137.456 69.001 c
  138.183 70.181 138.556 71.674 138.576 73.481 c
  138.602 75.967 138.072 78.004 136.986 79.591 c
  135.919 81.177 134.376 82.504 132.356 83.571 c
  f
  170 97.4 m
  146.9 97.751 l
  146.546 64.051 l
  169.646 63.7 l
  169.714 70.21 l
  154.814 70.437 l
  154.876 76.247 l
  168.676 76.037 l
  168.744 82.547 l
  154.944 82.757 l
  155.032 91.077 l
  169.932 90.85 l
  f
  200 97 m
  177 97.35 l
  176.646 63.65 l
  184.866 63.525 l
  185.152 90.625 l
  199.952 90.4 l
  f
  228 96.5 m
  204.9 96.851 l
  204.546 63.151 l
  227.646 62.8 l
  227.714 69.31 l
  212.814 69.537 l
  212.876 75.347 l
  226.676 75.137 l
  226.744 81.647 l
  212.944 81.857 l
  213.032 90.177 l
  227.932 89.95 l
  f
  264 96 m
  255.5 96.129 l
  253.22 89.359 l
  241.42 89.539 l
  239.29 96.379 l
  231 96.505 l
  242.4 62.705 l
  251.87 62.561 l
  h
  251.2 83.2 m
  247.15 71.2 l
  243.36 83.3 l
  f
  294 84.9 m
  294.035 88.213 292.728 90.93 290.08 93.05 c
  287.447 95.157 283.847 96.243 279.28 96.31 c
  276.64 96.35 274.33 96.144 272.35 95.692 c
  270.39 95.225 268.55 94.628 266.83 93.902 c
  266.745 85.832 l
  267.645 85.818 l
  269.358 87.225 271.268 88.295 273.375 89.028 c
  275.495 89.762 277.525 90.115 279.465 90.088 c
  279.965 90.081 280.622 90.025 281.435 89.922 c
  282.248 89.82 282.912 89.659 283.425 89.44 c
  284.05 89.16 284.56 88.813 284.955 88.4 c
  285.365 87.987 285.566 87.38 285.557 86.58 c
  285.549 85.84 285.243 85.21 284.637 84.69 c
  284.046 84.157 283.179 83.757 282.037 83.49 c
  280.837 83.207 279.564 82.948 278.217 82.712 c
  276.884 82.461 275.63 82.141 274.457 81.752 c
  271.764 80.872 269.817 79.659 268.617 78.112 c
  267.43 76.546 266.824 74.596 266.797 72.262 c
  266.764 69.129 268.064 66.556 270.697 64.542 c
  273.344 62.516 276.744 61.469 280.897 61.402 c
  282.997 61.37 285.07 61.557 287.117 61.963 c
  289.177 62.354 290.96 62.861 292.467 63.483 c
  292.549 71.233 l
  291.671 71.247 l
  290.377 70.18 288.791 69.3 286.911 68.607 c
  285.044 67.893 283.141 67.553 281.201 67.587 c
  280.514 67.597 279.831 67.66 279.151 67.777 c
  278.477 67.877 277.831 68.068 277.211 68.349 c
  276.656 68.583 276.183 68.937 275.791 69.409 c
  275.395 69.867 275.201 70.39 275.208 70.979 c
  275.217 71.865 275.545 72.545 276.193 73.019 c
  276.84 73.476 278.057 73.886 279.843 74.249 c
  281.016 74.487 282.139 74.719 283.213 74.944 c
  284.299 75.168 285.466 75.482 286.713 75.885 c
  289.166 76.691 290.976 77.818 292.143 79.265 c
  293.329 80.691 293.936 82.565 293.963 84.885 c
  f
  323 95.1 m
  299.9 95.451 l
  299.546 61.751 l
  322.646 61.4 l
  322.714 67.91 l
  307.815 68.137 l
  307.876 73.947 l
  321.676 73.737 l
  321.744 80.247 l
  307.944 80.457 l
  308.032 88.777 l
  322.932 88.55 l
  f  
  `,NOT_FOR_PUBLIC_RELEASE:`33.5 13.4 m
  404.5 6.92 l
  419.6 6.657 431.9 18.52 432.1 33.62 c
  432.89 78.92 l
  433.153 94.02 421.29 106.32 406.19 106.52 c
  35.19 113 l
  20.09 113.263 7.79 101.4 7.59 86.3 c
  6.8 41 l
  6.537 25.9 18.4 13.6 33.5 13.4 c
  s
  140 57.9 m
  132.53 58.021 l
  119.53 35.121 l
  119.759 58.221 l
  112.649 58.336 l
  112.315 24.636 l
  121.585 24.486 l
  132.785 43.586 l
  132.594 24.286 l
  139.704 24.171 l
  f
  177 40.5 m
  177.053 45.867 175.723 50.167 173.01 53.4 c
  170.297 56.593 166.53 58.23 161.71 58.31 c
  156.877 58.388 153.077 56.875 150.31 53.77 c
  147.53 50.65 146.113 46.417 146.06 41.07 c
  146.006 35.657 147.336 31.357 150.05 28.17 c
  152.763 24.977 156.53 23.34 161.35 23.26 c
  166.17 23.182 169.97 24.695 172.75 27.8 c
  175.543 30.887 176.967 35.153 177.02 40.6 c
  h
  166.8 49.19 m
  167.547 48.15 168.093 46.937 168.44 45.55 c
  168.789 44.143 168.955 42.497 168.936 40.61 c
  168.916 38.59 168.69 36.877 168.259 35.47 c
  167.828 34.063 167.271 32.927 166.589 32.06 c
  165.896 31.167 165.096 30.523 164.189 30.13 c
  163.296 29.737 162.366 29.549 161.399 29.565 c
  160.419 29.581 159.492 29.792 158.619 30.198 c
  157.759 30.604 156.972 31.264 156.259 32.178 c
  155.594 33.031 155.054 34.208 154.639 35.708 c
  154.236 37.195 154.045 38.915 154.064 40.868 c
  154.084 42.875 154.303 44.581 154.721 45.988 c
  155.152 47.381 155.709 48.518 156.391 49.398 c
  157.071 50.278 157.864 50.921 158.771 51.328 c
  159.678 51.735 160.628 51.931 161.621 51.915 c
  162.614 51.899 163.561 51.673 164.461 51.236 c
  165.361 50.785 166.141 50.101 166.801 49.186 c
  f
  207 29.7 m
  197.61 29.852 l
  197.879 56.952 l
  190.129 57.077 l
  189.86 29.977 l
  180.47 30.129 l
  180.406 23.619 l
  206.906 23.19 l
  f
  247 29 m
  233.2 29.223 l
  233.262 35.483 l
  246.062 35.276 l
  246.127 41.786 l
  233.327 41.993 l
  233.47 56.393 l
  225.76 56.518 l
  225.426 22.818 l
  246.926 22.47 l
  f
  282 38.8 m
  282.053 44.167 280.723 48.467 278.01 51.7 c
  275.297 54.893 271.53 56.53 266.71 56.61 c
  261.877 56.688 258.077 55.175 255.31 52.07 c
  252.53 48.95 251.113 44.717 251.06 39.37 c
  251.006 33.957 252.336 29.657 255.05 26.47 c
  257.763 23.277 261.53 21.64 266.35 21.56 c
  271.17 21.482 274.97 22.995 277.75 26.1 c
  280.543 29.187 281.967 33.453 282.02 38.9 c
  h
  271.8 47.49 m
  272.547 46.45 273.093 45.237 273.44 43.85 c
  273.789 42.443 273.955 40.797 273.936 38.91 c
  273.916 36.89 273.69 35.177 273.259 33.77 c
  272.828 32.363 272.271 31.227 271.589 30.36 c
  270.896 29.467 270.096 28.823 269.189 28.43 c
  268.296 28.037 267.366 27.849 266.399 27.865 c
  265.419 27.881 264.492 28.092 263.619 28.498 c
  262.759 28.904 261.972 29.564 261.259 30.478 c
  260.594 31.331 260.054 32.508 259.639 34.008 c
  259.236 35.495 259.045 37.215 259.064 39.168 c
  259.084 41.175 259.303 42.881 259.721 44.288 c
  260.152 45.681 260.709 46.818 261.391 47.698 c
  262.071 48.578 262.864 49.221 263.771 49.628 c
  264.678 50.035 265.628 50.231 266.621 50.215 c
  267.614 50.199 268.561 49.973 269.461 49.536 c
  270.361 49.085 271.141 48.401 271.801 47.486 c
  f
  304 31.9 m
  303.992 31.053 303.83 30.333 303.514 29.74 c
  303.199 29.142 302.662 28.675 301.904 28.34 c
  301.377 28.107 300.763 27.974 300.064 27.94 c
  299.364 27.891 298.551 27.874 297.624 27.889 c
  294.814 27.934 l
  294.904 36.994 l
  297.284 36.956 l
  298.524 36.936 299.561 36.851 300.394 36.702 c
  301.227 36.552 301.924 36.232 302.484 35.741 c
  303.018 35.265 303.405 34.745 303.644 34.181 c
  303.894 33.604 304.014 32.841 304.005 31.891 c
  h
  316.3 55.1 m
  306.83 55.253 l
  298.51 43.053 l
  294.94 43.111 l
  295.062 55.411 l
  287.352 55.536 l
  287.018 21.836 l
  300.018 21.626 l
  301.791 21.597 303.321 21.685 304.608 21.891 c
  305.888 22.096 307.091 22.566 308.218 23.301 c
  309.358 24.034 310.261 25.001 310.928 26.201 c
  311.615 27.381 311.965 28.874 311.978 30.681 c
  312.003 33.167 311.506 35.204 310.488 36.791 c
  309.481 38.377 308.028 39.704 306.128 40.771 c
  f
  52 75.7 m
  52.015 77.207 51.794 78.687 51.337 80.14 c
  50.88 81.58 50.22 82.797 49.357 83.79 c
  48.17 85.137 46.84 86.16 45.367 86.86 c
  43.907 87.56 42.08 87.93 39.887 87.97 c
  35.057 88.048 l
  35.166 99.048 l
  27.416 99.173 l
  27.082 65.473 l
  39.882 65.267 l
  41.795 65.236 43.405 65.398 44.712 65.754 c
  46.032 66.095 47.202 66.625 48.222 67.344 c
  49.442 68.211 50.375 69.334 51.022 70.714 c
  51.682 72.087 52.022 73.747 52.042 75.694 c
  h
  43.99 76.033 m
  43.981 75.086 43.744 74.276 43.279 73.603 c
  42.814 72.916 42.278 72.443 41.669 72.183 c
  40.856 71.834 40.066 71.651 39.299 71.633 c
  38.532 71.6 37.509 71.594 36.229 71.615 c
  34.899 71.636 l
  34.999 81.736 l
  37.219 81.7 l
  38.539 81.679 39.622 81.571 40.469 81.376 c
  41.329 81.182 42.046 80.808 42.619 80.256 c
  43.112 79.766 43.462 79.186 43.669 78.516 c
  43.891 77.836 43.997 77.013 43.988 76.046 c
  f
  83.9 86 m
  83.941 90.16 82.841 93.367 80.6 95.62 c
  78.36 97.873 75.04 99.033 70.64 99.1 c
  66.24 99.171 62.907 98.118 60.64 95.94 c
  58.373 93.76 57.217 90.6 57.17 86.46 c
  56.957 64.96 l
  64.747 64.834 l
  64.955 85.834 l
  64.978 88.167 65.431 89.901 66.315 91.034 c
  67.202 92.167 68.628 92.717 70.595 92.684 c
  72.535 92.653 73.942 92.079 74.815 90.964 c
  75.708 89.851 76.142 88.081 76.115 85.654 c
  75.907 64.654 l
  83.697 64.528 l
  f
  117 87.3 m
  117.016 88.927 116.734 90.387 116.155 91.68 c
  115.589 92.973 114.799 94.05 113.785 94.91 c
  112.612 95.923 111.312 96.653 109.885 97.1 c
  108.478 97.545 106.685 97.785 104.505 97.82 c
  91.405 98.032 l
  91.071 64.332 l
  102.771 64.144 l
  105.191 64.105 106.961 64.167 108.081 64.329 c
  109.214 64.492 110.334 64.872 111.441 65.469 c
  112.594 66.098 113.451 66.958 114.011 68.049 c
  114.587 69.122 114.882 70.362 114.896 71.769 c
  114.912 73.396 114.542 74.842 113.786 76.109 c
  113.033 77.356 111.959 77.356 110.566 76.109 c
  112.533 76.514 114.096 77.394 115.256 78.749 c
  116.429 80.102 117.026 81.902 117.046 84.149 c
  h
  106.9 73.6 m
  106.9 73.043 106.767 72.486 106.5 71.93 c
  106.252 71.376 105.812 70.969 105.18 70.71 c
  104.612 70.478 103.905 70.361 103.06 70.36 c
  102.227 70.343 101.05 70.347 99.53 70.372 c
  98.803 70.384 l
  98.874 77.504 l
  100.084 77.484 l
  101.31 77.464 102.354 77.425 103.214 77.366 c
  104.074 77.307 104.75 77.145 105.244 76.881 c
  105.937 76.523 106.39 76.07 106.604 75.521 c
  106.814 74.96 106.915 74.316 106.908 73.591 c
  h
  108.93 87.3 m
  108.919 86.233 108.723 85.417 108.34 84.85 c
  107.971 84.268 107.341 83.841 106.45 83.57 c
  105.843 83.384 105.006 83.292 103.94 83.294 c
  102.873 83.296 101.763 83.307 100.61 83.325 c
  98.91 83.353 l
  98.993 91.743 l
  99.558 91.733 l
  101.738 91.698 103.298 91.666 104.238 91.635 c
  105.178 91.605 106.045 91.395 106.838 91.005 c
  107.645 90.615 108.191 90.109 108.478 89.485 c
  108.781 88.847 108.929 88.121 108.921 87.305 c
  f
  144 97.2 m
  122.3 97.55 l
  121.966 63.85 l
  129.716 63.725 l
  129.985 90.825 l
  143.885 90.6 l
  f
  165 96.9 m
  147.4 97.184 l
  147.341 91.214 l
  152.271 91.134 l
  152.056 69.434 l
  147.126 69.514 l
  147.067 63.544 l
  164.667 63.26 l
  164.726 69.23 l
  159.796 69.31 l
  160.011 91.01 l
  164.941 90.93 l
  f
  185 97.2 m
  182.767 97.236 180.697 96.899 178.79 96.19 c
  176.897 95.483 175.263 94.41 173.89 92.97 c
  172.517 91.53 171.443 89.723 170.67 87.55 c
  169.91 85.377 169.513 82.86 169.48 80 c
  169.454 77.333 169.786 74.91 170.478 72.73 c
  171.171 70.55 172.188 68.673 173.528 67.1 c
  174.821 65.587 176.425 64.407 178.338 63.56 c
  180.271 62.713 182.381 62.273 184.668 62.24 c
  185.935 62.22 187.071 62.284 188.078 62.434 c
  189.105 62.568 190.048 62.756 190.908 62.999 c
  191.815 63.271 192.631 63.582 193.358 63.932 c
  194.105 64.267 194.755 64.58 195.308 64.873 c
  195.389 73.033 l
  194.501 73.047 l
  194.12 72.692 193.637 72.269 193.051 71.777 c
  192.481 71.289 191.831 70.809 191.101 70.337 c
  190.354 69.867 189.551 69.474 188.691 69.157 c
  187.824 68.84 186.901 68.689 185.921 68.704 c
  184.828 68.722 183.794 68.935 182.821 69.342 c
  181.841 69.735 180.938 70.382 180.111 71.282 c
  179.324 72.156 178.691 73.302 178.211 74.722 c
  177.74 76.149 177.515 77.872 177.535 79.892 c
  177.556 81.999 177.836 83.759 178.375 85.172 c
  178.928 86.579 179.611 87.682 180.425 88.482 c
  181.252 89.296 182.172 89.876 183.185 90.222 c
  184.198 90.552 185.195 90.71 186.175 90.694 c
  187.115 90.679 188.042 90.506 188.955 90.174 c
  189.882 89.843 190.732 89.4 191.505 88.844 c
  192.16 88.396 192.767 87.92 193.325 87.414 c
  193.886 86.908 194.346 86.471 194.705 86.104 c
  195.513 86.091 l
  195.593 94.141 l
  194.846 94.53 194.129 94.897 193.443 95.241 c
  192.763 95.584 192.046 95.882 191.293 96.135 c
  190.313 96.468 189.393 96.724 188.533 96.903 c
  f
  232 72.4 m
  231.992 71.553 231.83 70.833 231.514 70.24 c
  231.199 69.642 230.662 69.175 229.904 68.84 c
  229.377 68.607 228.763 68.474 228.064 68.44 c
  227.364 68.391 226.551 68.374 225.624 68.389 c
  222.814 68.434 l
  222.904 77.494 l
  225.284 77.456 l
  226.524 77.436 227.56 77.351 228.394 77.202 c
  229.227 77.052 229.924 76.732 230.484 76.241 c
  231.018 75.765 231.404 75.245 231.644 74.681 c
  231.894 74.104 232.014 73.341 232.005 72.391 c
  h
  244.3 95.6 m
  234.83 95.753 l
  226.51 83.553 l
  222.94 83.611 l
  223.062 95.911 l
  215.352 96.036 l
  215.018 62.336 l
  228.018 62.126 l
  229.791 62.097 231.321 62.185 232.608 62.391 c
  233.888 62.596 235.091 63.066 236.218 63.801 c
  237.358 64.534 238.261 65.501 238.928 66.701 c
  239.615 67.881 239.965 69.374 239.978 71.181 c
  240.003 73.667 239.506 75.704 238.488 77.291 c
  237.481 78.877 236.028 80.204 234.128 81.271 c
  f
  270 95.2 m
  248.3 95.551 l
  247.966 61.851 l
  269.666 61.5 l
  269.731 68.01 l
  255.731 68.237 l
  255.788 74.047 l
  268.788 73.837 l
  268.853 80.347 l
  255.853 80.557 l
  255.935 88.877 l
  269.935 88.65 l
  f
  298 94.7 m
  276.3 95.05 l
  275.966 61.35 l
  283.716 61.225 l
  283.985 88.325 l
  297.885 88.1 l
  f
  324 94.3 m
  302.3 94.651 l
  301.966 60.951 l
  323.666 60.6 l
  323.731 67.11 l
  309.731 67.337 l
  309.788 73.147 l
  322.788 72.937 l
  322.853 79.447 l
  309.853 79.657 l
  309.935 87.977 l
  323.935 87.75 l
  f
  359 93.7 m
  350.99 93.829 l
  348.84 87.059 l
  337.74 87.239 l
  335.73 94.079 l
  327.92 94.205 l
  338.72 60.405 l
  347.64 60.261 l
  h
  346.9 80.9 m
  343.09 68.9 l
  339.52 81 l
  f
  387 82.7 m
  387.033 86.013 385.8 88.73 383.3 90.85 c
  380.82 92.957 377.42 94.043 373.1 94.11 c
  370.613 94.15 368.437 93.944 366.57 93.492 c
  364.723 93.025 362.987 92.428 361.36 91.702 c
  361.28 83.632 l
  362.128 83.618 l
  363.741 85.025 365.541 86.095 367.528 86.828 c
  369.528 87.562 371.445 87.915 373.278 87.888 c
  373.749 87.881 374.369 87.825 375.138 87.722 c
  375.905 87.62 376.528 87.459 377.008 87.24 c
  377.597 86.96 378.077 86.613 378.448 86.2 c
  378.834 85.787 379.023 85.18 379.016 84.38 c
  379.009 83.64 378.72 83.01 378.149 82.49 c
  377.592 81.957 376.772 81.557 375.689 81.29 c
  374.556 81.007 373.356 80.748 372.089 80.512 c
  370.836 80.261 369.656 79.941 368.549 79.552 c
  366.009 78.672 364.172 77.459 363.039 75.912 c
  361.919 74.346 361.349 72.396 361.329 70.062 c
  361.298 66.929 362.525 64.356 365.009 62.342 c
  367.509 60.316 370.729 59.269 374.669 59.202 c
  376.649 59.17 378.602 59.357 380.529 59.763 c
  382.469 60.154 384.149 60.661 385.569 61.283 c
  385.646 69.033 l
  384.818 69.047 l
  383.598 67.98 382.101 67.1 380.328 66.407 c
  378.568 65.693 376.775 65.353 374.948 65.387 c
  374.302 65.397 373.655 65.46 373.008 65.577 c
  372.376 65.677 371.766 65.868 371.178 66.149 c
  370.655 66.383 370.209 66.737 369.838 67.209 c
  369.465 67.667 369.282 68.19 369.288 68.779 c
  369.297 69.665 369.606 70.345 370.217 70.819 c
  370.827 71.276 371.974 71.686 373.657 72.049 c
  374.764 72.287 375.824 72.519 376.837 72.744 c
  377.864 72.968 378.964 73.282 380.137 73.685 c
  382.444 74.491 384.15 75.618 385.257 77.065 c
  386.377 78.491 386.947 80.365 386.967 82.685 c
  f
  414 92.9 m
  392.3 93.251 l
  391.966 59.551 l
  413.666 59.2 l
  413.731 65.71 l
  399.731 65.937 l
  399.788 71.747 l
  412.788 71.537 l
  412.853 78.047 l
  399.853 78.257 l
  399.935 86.577 l
  413.935 86.35 l
  f
  `},standardStampCreationInfos={"/Draft":{textStreamData:standardStampForms.DRAFT,color:standardStampColors.redColor,subject:"Draft",bbox:standardStampBBox,rect:standardStampRect},"/Approved":{textStreamData:standardStampForms.APPROVED,color:standardStampColors.greenColor,subject:"Approved",bbox:standardStampBBox,rect:standardStampRect},"/NotApproved":{textStreamData:standardStampForms.NOT_APPROVED,color:standardStampColors.redColor,subject:"Not Approved",bbox:standardStampBBox,rect:standardStampRect},"/Departmental":{textStreamData:standardStampForms.DEPARTMENTAL,color:standardStampColors.blueColor,subject:"Departmental",bbox:standardStampBBox,rect:standardStampRect},"/Confidential":{textStreamData:standardStampForms.CONFIDENTIAL,color:standardStampColors.redColor,subject:"Confidential",bbox:standardStampBBox,rect:standardStampRect},"/Final":{textStreamData:standardStampForms.FINAL,color:standardStampColors.redColor,subject:"Final",bbox:standardStampBBox,rect:standardStampRect},"/Expired":{textStreamData:standardStampForms.EXPIRED,color:standardStampColors.redColor,subject:"Expired",bbox:standardStampBBox,rect:standardStampRect},"/AsIs":{textStreamData:standardStampForms.AS_IS,color:standardStampColors.redColor,subject:"As Is",bbox:standardStampBBox,rect:standardStampRect},"/Sold":{textStreamData:standardStampForms.SOLD,color:standardStampColors.blueColor,subject:"Sold",bbox:standardStampBBox,rect:standardStampRect},"/Experimental":{textStreamData:standardStampForms.EXPERIMENTAL,color:standardStampColors.blueColor,subject:"Experimental",bbox:standardStampBBox,rect:standardStampRect},"/ForComment":{textStreamData:standardStampForms.FOR_COMMENT,color:standardStampColors.greenColor,subject:"For Comment",bbox:standardStampBBox,rect:standardStampRect},"/TopSecret":{textStreamData:standardStampForms.TOP_SECRET,color:standardStampColors.redColor,subject:"Top Secret",bbox:standardStampBBox,rect:standardStampRect},"/ForPublicRelease":{textStreamData:standardStampForms.FOR_PUBLIC_RELEASE,color:standardStampColors.greenColor,subject:"For Public Release",bbox:standardStampBBox,rect:standardStampRect},"/NotForPublicRelease":{textStreamData:standardStampForms.NOT_FOR_PUBLIC_RELEASE,color:standardStampColors.redColor,subject:"Not For Public Release",bbox:standardStampBBox,rect:standardStampRect}};class StampAnnotation extends MarkupAnnotation{Name=stampTypes.DRAFT;IT="/Stamp";_customImageData;constructor(){super(annotationTypes.STAMP)}static createFromDto(e){if(e.annotationType!=="/Stamp")throw new Error("Invalid annotation type");const t=DateString.fromDate(new Date(e.dateCreated)),s=DateString.fromDate(new Date(e.dateModified)),r=new XFormStream;r.LastModified=s,r.Filter="/FlateDecode",r.Resources=new ResourceDict,r.Matrix=e.matrix||[1,0,0,1,0,0];const o=new StampAnnotation;o.$name=e.uuid,o.NM=LiteralString.fromString(e.uuid),o.T=LiteralString.fromString(e.author||"unknown"),o.M=s,o.CreationDate=t,o.Name=e.stampType,o.apStream=r;const a=standardStampCreationInfos[e.stampType];if(a){const f=new XFormStream;f.LastModified=s,f.Filter="/FlateDecode",f.setTextStreamData(a.textStreamData);const m=a.color,g=a.subject,p=a.bbox,y=e.rect||a.rect||a.bbox;f.BBox=p;const C=m[0].toFixed(3),A=m[1].toFixed(3),w=m[2].toFixed(3),_=`${C} ${A} ${w} rg ${C} ${A} ${w} RG`;r.BBox=p,r.Resources.setXObject("/Fm",f),r.setTextStreamData(`q 1 0 0 -1 0 ${p[3]} cm ${_} 1 j 8.58 w /Fm Do Q`),o.Rect=y,o.Subj=LiteralString.fromString(g),o.Contents=e.textContent?LiteralString.fromString(e.textContent):o.Subj,o.C=m,o.CA=1}else if(e.stampImageData?.length&&!(e.stampImageData.length%4)){const f=new Uint8Array(e.stampImageData);o._customImageData=f;const m=new ImageStream,g=new DecodeParamsDict;g.setIntProp("/Predictor",12),g.setIntProp("/Colors",1),g.setIntProp("/BitsPerComponent",8),g.setIntProp("/Columns",e.bbox[2]),m.DecodeParms=g,m.Filter="/FlateDecode",m.BitsPerComponent=8,m.Width=e.bbox[2],m.Height=e.bbox[3],m.ColorSpace=colorSpaces.GRAYSCALE,m.streamData=f.filter((C,A)=>(A+1)%4===0);const p=new ImageStream,y=new DecodeParamsDict;y.setIntProp("/Predictor",12),y.setIntProp("/Colors",3),y.setIntProp("/BitsPerComponent",8),y.setIntProp("/Columns",e.bbox[2]),p.DecodeParms=y,p.Filter="/FlateDecode",p.BitsPerComponent=8,p.Width=e.bbox[2],p.Height=e.bbox[3],p.ColorSpace=colorSpaces.RGB,p.streamData=f.filter((C,A)=>(A+1)%4!==0),p.sMask=m,r.BBox=e.bbox,r.Resources.setXObject("/Im",p),r.setTextStreamData(`q ${e.bbox[2]} 0 0 ${e.bbox[3]} 0 0 cm /Im Do Q`),o.Rect=e.rect,o.Subj=e.stampSubject?LiteralString.fromString(e.stampSubject):LiteralString.fromString(e.stampType),o.Contents=e.textContent?LiteralString.fromString(e.textContent):o.Subj}else throw new Error("Custom stamp has no valid image data");return o._added=!0,o.initProxy()}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new StampAnnotation;return await t.parsePropsAsync(e),{value:t.initProxy(),start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.Name&&r.push(...s.encode("/Name "),...s.encode(this.Name)),this.IT&&r.push(...s.encode("/IT "),...s.encode(this.IT));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}toDto(){return{annotationType:"/Stamp",uuid:this.$name,pageId:this.$pageId,dateCreated:this.CreationDate?.date.toISOString()||new Date().toISOString(),dateModified:this.M?this.M instanceof LiteralString?this.M.literal:this.M.date.toISOString():new Date().toISOString(),author:this.T?.literal,textContent:this.Contents?.literal,rect:this.Rect,bbox:this.apStream?.BBox,matrix:this.apStream?.Matrix,stampType:this.Name,stampSubject:this.Subj?.literal,stampImageData:this._customImageData?[...this._customImageData]:null}}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/Name":a=await this.parseNamePropAsync(f,t,a);break;default:a=await t.skipToNextNameAsync(a,o-1);break}if(!this.Name)throw new Error("Not all required properties parsed")}initProxy(){return super.initProxy()}getProxy(){return super.getProxy()}}const textNoteForms={NOTE:`25 10 m
  175 10 l
  175 10 190 10 190 25 c
  190 135 l
  190 135 190 150 175 150 c
  95 150 l
  10 190 l
  35 150 l
  25 150 l
  25 150 10 150 10 135 c
  10 25 l
  10 25 10 10 25 10 c
  b  
  35 35 m
  165 35 l
  S  
  35 55 m
  165 55 l
  S
  35 75 m
  125 75 l
  S
  35 95 m
  165 95 l
  S
  35 115 m
  115 115 l
  S
  `},textNoteCreationInfos={"/Note":{textStreamData:textNoteForms.NOTE,fillColor:[1,1,.4],subject:"Note",bBox:[0,0,200,200],rect:[0,0,25,25]}};class TextAnnotation extends MarkupAnnotation{Open=!1;Name=annotationIconTypes.NOTE;State;StateModel;constructor(){super(annotationTypes.TEXT)}static createStandard(e,t,s=annotationIconTypes.NOTE){const r=new Date().toISOString(),o={uuid:UUID.getRandomUuid(),annotationType:"/Text",pageId:null,dateCreated:r,dateModified:r,author:e||"unknown",textContent:null,rect:null,matrix:null,color:t,textNoteType:s};return this.createFromDto(o)}static createFromDto(e){if(e.annotationType!=="/Text")throw new Error("Invalid annotation type");const t=DateString.fromDate(new Date(e.dateCreated)),s=DateString.fromDate(new Date(e.dateModified)),r=new XFormStream;r.LastModified=s,r.Filter="/FlateDecode";const o=textNoteCreationInfos[e.textNoteType];if(!o)throw new Error(`Stamp type '${e.textNoteType}' is not supported`);r.setTextStreamData(o.textStreamData);const a=e.color,f=o.fillColor,m=o.subject,g=o.bBox;r.BBox=g;const p=a[0].toFixed(3),y=a[1].toFixed(3),C=a[2].toFixed(3),A=f[0].toFixed(3),w=f[1].toFixed(3),_=f[2].toFixed(3),E=`${A} ${w} ${_} rg ${p} ${y} ${C} RG`,v=new XFormStream;v.LastModified=s,v.BBox=g,v.Matrix=e.matrix||[1,0,0,1,0,0],v.Resources=new ResourceDict,v.Resources.setXObject("/Fm",r),v.Filter="/FlateDecode",v.setTextStreamData(`q 1 0 0 -1 0 ${g[3]} cm ${E} 1 j 8.58 w /Fm Do Q`);const k=new TextAnnotation;return k.$name=e.uuid,k.NM=LiteralString.fromString(e.uuid),k.T=LiteralString.fromString(e.author||"unknown"),k.M=s,k.CreationDate=t,k.Contents=e.textContent?LiteralString.fromString(e.textContent):LiteralString.fromString(m),k.Subj=LiteralString.fromString(m),k.Name=e.textNoteType,k.State=e.textNoteState,k.StateModel=e.textNoteStateModel,k.Rect=e.rect||o.rect,k.C=a,k.CA=1,k.apStream=v,k._added=!0,k.initProxy()}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new TextAnnotation;return await t.parsePropsAsync(e),{value:t.initProxy(),start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.Open&&r.push(...s.encode("/Open "),...s.encode(" "+this.Open)),this.Name&&r.push(...s.encode("/Name "),...s.encode(this.Name)),this.State&&r.push(...s.encode("/State "),...s.encode(this.State)),this.StateModel&&r.push(...s.encode("/StateModel "),...s.encode(this.StateModel));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}toDto(){const e=this.getColorRect();return{annotationType:"/Text",uuid:this.$name,pageId:this.$pageId,dateCreated:this.CreationDate?.date.toISOString()||new Date().toISOString(),dateModified:this.M?this.M instanceof LiteralString?this.M.literal:this.M.date.toISOString():new Date().toISOString(),author:this.T?.literal,textContent:this.Contents?.literal,rect:this.Rect,bbox:this.apStream?.BBox,matrix:this.apStream?.Matrix,color:e,textNoteType:this.Name,textNoteState:this.State,textNoteStateModel:this.StateModel}}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/Open":a=await this.parseBoolPropAsync(f,t,a);break;case"/Name":const g=await t.parseNameAtAsync(a,!0);if(g&&Object.values(annotationIconTypes).includes(g.value))this.Name=g.value,a=g.end+1;else throw new Error("Can't parse /Name property value");break;case"/State":const p=await t.parseNameAtAsync(a,!0);if(p&&Object.values(annotationMarkedStates).concat(Object.values(annotationReviewStates)).includes(p.value))this.State=p.value,a=p.end+1;else throw new Error("Can't parse /State property value");break;case"/StateModel":const y=await t.parseNameAtAsync(a,!0);if(y&&Object.values(annotationStateModelTypes).includes(y.value))this.StateModel=y.value,a=y.end+1;else throw new Error("Can't parse /StateModel property value");break;default:a=await t.skipToNextNameAsync(a,o-1);break}}renderHandles(){return[]}initProxy(){return super.initProxy()}getProxy(){return super.getProxy()}}class InkAnnotation extends MarkupAnnotation{InkList;constructor(){super(annotationTypes.INK)}static createFromDto(e){if(e.annotationType!=="/Ink")throw new Error("Invalid annotation type");const t=new BorderStyleDict;t.W=e.strokeWidth,e.strokeDashGap&&(t.D=e.strokeDashGap);const s=new InkAnnotation;return s.$name=e.uuid,s.NM=LiteralString.fromString(e.uuid),s.T=LiteralString.fromString(e.author),s.M=DateString.fromDate(new Date(e.dateModified)),s.CreationDate=DateString.fromDate(new Date(e.dateCreated)),s.Contents=e.textContent?LiteralString.fromString(e.textContent):null,s.InkList=e.inkList,s.Rect=e.rect,s.C=e.color.slice(0,3),s.CA=e.color[3],s.BS=t,s.generateApStream(),s._added=!0,s.initProxy()}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new InkAnnotation;return await t.parsePropsAsync(e),{value:t.initProxy(),start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.InkList&&r.push(...s.encode("/InkList "),...this.encodeNestedPrimitiveArray(this.InkList));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}toDto(){const e=this.getColorRect();return{annotationType:"/Ink",uuid:this.$name,pageId:this.$pageId,dateCreated:this.CreationDate?.date.toISOString()||new Date().toISOString(),dateModified:this.M?this.M instanceof LiteralString?this.M.literal:this.M.date.toISOString():new Date().toISOString(),author:this.T?.literal,textContent:this.Contents?.literal,rect:this.Rect,bbox:this.apStream?.BBox,matrix:this.apStream?.Matrix,inkList:this.InkList,color:e,strokeWidth:this.BS?.W??this.Border?.width??1,strokeDashGap:this.BS?.D??[3,0]}}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/InkList":if(a=await t.skipEmptyAsync(a),await t.getValueTypeAtAsync(a)===valueTypes.ARRAY){const p=[];let y=++a;for(;;){const C=await t.parseNumberArrayAtAsync(y);if(!C)break;p.push(C.value),y=C.end+1}this.InkList=p;break}throw new Error("Can't parse /InkList property value");default:a=await t.skipToNextNameAsync(a,o-1);break}if(!this.InkList?.length)throw new Error("Not all required properties parsed");await this.bakeRotationAsync()}generateApStream(){const e=new XFormStream;e.Filter="/FlateDecode",e.LastModified=DateString.fromDate(new Date),e.BBox=[this.Rect[0],this.Rect[1],this.Rect[2],this.Rect[3]];const t=this.CA||1,s=this.strokeWidth,r=this.BS?.D[0]??this.Border?.dash??3,o=this.BS?.D[1]??this.Border?.gap??0,a=new GraphicsStateDict;a.AIS=!0,a.BM="/Normal",a.CA=t,a.ca=t,a.LW=s,a.LJ=lineJoinStyles.ROUND,a.LC=lineCapStyles.ROUND,a.D=[[r,o],0];let m=`q ${this.getColorString()} /GS0 gs`,g,p;this.InkList.forEach(y=>{g=y[0],p=y[1],m+=`
${g} ${p} m`;for(let C=2;C<y.length;C=C+2)g=y[C],p=y[C+1],m+=`
${g} ${p} l`;m+=`
S`}),m+=`
Q`,e.Resources=new ResourceDict,e.Resources.setGraphicsState("/GS0",a),e.setTextStreamData(m),this.apStream=e}async applyCommonTransformAsync(e,t=!0){const s=this.getProxy();let r,o,a,f,m,g;const p=new u;s.InkList.forEach(C=>{for(let A=0;A<C.length;A=A+2)r=C[A],o=C[A+1],p.set(r,o).applyMat3(e),C[A]=p.x,C[A+1]=p.y,(!a||p.x<a)&&(a=p.x),(!f||p.y<f)&&(f=p.y),(!m||p.x>m)&&(m=p.x),(!g||p.y>g)&&(g=p.y)});const y=(s.BS?.W??s.Border?.width??1)/2;if(a-=y,f-=y,m+=y,g+=y,this.Rect=[a,f,m,g],this._bBox){const C=s.getLocalBB();C.ll.set(a,f),C.lr.set(m,f),C.ur.set(m,g),C.ul.set(a,g)}if(this.generateApStream(),s.M=DateString.fromDate(new Date),s.$onEditAction){const C=l.invert(e);s.$onEditAction(t?async()=>{await s.applyCommonTransformAsync(C,!1),await s.updateRenderAsync()}:void 0)}}async bakeRotationAsync(){const e=this.getCurrentRotation(),t=(this.Rect[0]+this.Rect[2])/2,s=(this.Rect[1]+this.Rect[3])/2,r=new l().applyTranslation(-t,-s).applyRotation(e).applyTranslation(t,s);await this.applyCommonTransformAsync(r)}initProxy(){return super.initProxy()}getProxy(){return super.getProxy()}}class GeometricAnnotation extends MarkupAnnotation{IC;constructor(e){super(e)}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.IC&&r.push(...s.encode("/IC "),...this.encodePrimitiveArray(this.IC,s));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/IC":a=await this.parseNumberArrayPropAsync(f,t,a,!0);break;default:a=await t.skipToNextNameAsync(a,o-1);break}}}class SquareAnnotation extends GeometricAnnotation{static cloudArcSize=20;RD;_cloud;constructor(){super(annotationTypes.SQUARE)}static createFromDto(e){if(e.annotationType!=="/Square")throw new Error("Invalid annotation type");const t=new BorderStyleDict;t.W=e.strokeWidth,e.strokeDashGap&&(t.D=e.strokeDashGap);const s=new SquareAnnotation;return s.$name=e.uuid,s.NM=LiteralString.fromString(e.uuid),s.T=LiteralString.fromString(e.author),s.M=DateString.fromDate(new Date(e.dateModified)),s.CreationDate=DateString.fromDate(new Date(e.dateCreated)),s.Contents=e.textContent?LiteralString.fromString(e.textContent):null,s.Rect=e.rect,s.RD=e.rectMargins,s.C=e.color.slice(0,3),s.CA=e.color[3],s.BS=t,s._cloud=e.cloud,s.generateApStream(e.bbox,e.matrix),s._added=!0,s.initProxy()}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new SquareAnnotation;return await t.parsePropsAsync(e),{value:t.initProxy(),start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.RD&&r.push(...s.encode("/RD "),...this.encodePrimitiveArray(this.RD,s));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}toDto(){const e=this.getColorRect();return{annotationType:"/Square",uuid:this.$name,pageId:this.$pageId,dateCreated:this.CreationDate?.date.toISOString()||new Date().toISOString(),dateModified:this.M?this.M instanceof LiteralString?this.M.literal:this.M.date.toISOString():new Date().toISOString(),author:this.T?.literal,textContent:this.Contents?.literal,rect:this.Rect,rectMargins:this.RD,bbox:this.apStream?.BBox,matrix:this.apStream?.Matrix,cloud:this._cloud,color:e,strokeWidth:this.BS?.W??this.Border?.width??1,strokeDashGap:this.BS?.D??[3,0]}}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/RD":a=await this.parseNumberArrayPropAsync(f,t,a,!0);break;default:a=await t.skipToNextNameAsync(a,o-1);break}}generateApStream(e,t){const s=new XFormStream;s.Filter="/FlateDecode",s.LastModified=DateString.fromDate(new Date);const r=e?[e[0],e[1],e[2],e[3]]:[this.Rect[0],this.Rect[1],this.Rect[2],this.Rect[3]];s.BBox=r;const o=t?[t[0],t[1],t[2],t[3],t[4],t[5]]:[1,0,0,1,0,0];s.Matrix=o;const a=this.CA||1,f=this.strokeWidth,m=this.BS?.D[0]??this.Border?.dash??3,g=this.BS?.D[1]??this.Border?.gap??0,p=new GraphicsStateDict;if(p.AIS=!0,p.BM="/Normal",p.CA=a,p.ca=a,p.LW=f,p.D=[[m,g],0],!this.RD){const J=this._cloud?SquareAnnotation.cloudArcSize/2:f/2;this.RD||=[J,J,J,J]}const y=calcPdfBBoxToRectMatrices(r,this.Rect,o).matAA,C=l.invert(y).toFloatShortArray(),{r:A}=s.matrix.getTRS(),w=new l().applyRotation(A),_=new u(r[0],r[1]),E=new u(r[2],r[1]),v=new u(r[2],r[3]),k=new u(r[0],r[3]),[R,L,B,X]=this.RD,U=new u(R,X).applyMat3(w),M=new u(-B,X).applyMat3(w),F=new u(-B,-L).applyMat3(w),$=new u(R,-L).applyMat3(w),ee=u.applyMat3(_,y).add(U),te=u.applyMat3(E,y).add(M),he=u.applyMat3(v,y).add(F),re=u.applyMat3(k,y).add($);let le=`q ${this.getColorString()} /GS0 gs`;if(le+=`
${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} cm`,this._cloud){p.LC=lineCapStyles.ROUND,p.LJ=lineJoinStyles.ROUND;const J=CloudCurveData.buildFromPolyline([ee.clone(),te.clone(),he.clone(),re.clone(),ee.clone()],SquareAnnotation.cloudArcSize);le+=`
${J.start.x} ${J.start.y} m`,J.curves.forEach(se=>{le+=`
${se[0].x} ${se[0].y} ${se[1].x} ${se[1].y} ${se[2].x} ${se[2].y} c`}),le+=`
S`}else p.LC=lineCapStyles.SQUARE,p.LJ=lineJoinStyles.MITER,le+=`
${ee.x} ${ee.y} m`,le+=`
${te.x} ${te.y} l`,le+=`
${he.x} ${he.y} l`,le+=`
${re.x} ${re.y} l`,le+=`
s`;le+=`
Q`,s.Resources=new ResourceDict,s.Resources.setGraphicsState("/GS0",p),s.setTextStreamData(le),this.apStream=s}async applyCommonTransformAsync(e,t=!0){const s=this.getProxy();s.applyRectTransform(e);const r=s.apStream;if(r){const o=l.multiply(r.matrix,e);s.generateApStream(r.BBox,o.toFloatShortArray())}if(s.M=DateString.fromDate(new Date),s.$onEditAction){const o=l.invert(e);s.$onEditAction(t?async()=>{await s.applyCommonTransformAsync(o,!1),await s.updateRenderAsync()}:void 0)}}initProxy(){return super.initProxy()}getProxy(){return super.getProxy()}}class CircleAnnotation extends GeometricAnnotation{static cloudArcSize=20;RD;_cloud;constructor(){super(annotationTypes.CIRCLE)}static createFromDto(e){if(e.annotationType!=="/Circle")throw new Error("Invalid annotation type");const t=new BorderStyleDict;t.W=e.strokeWidth,e.strokeDashGap&&(t.D=e.strokeDashGap);const s=new CircleAnnotation;return s.$name=e.uuid,s.NM=LiteralString.fromString(e.uuid),s.T=LiteralString.fromString(e.author),s.M=DateString.fromDate(new Date(e.dateModified)),s.CreationDate=DateString.fromDate(new Date(e.dateCreated)),s.Contents=e.textContent?LiteralString.fromString(e.textContent):null,s.Rect=e.rect,s.RD=e.rectMargins,s.C=e.color.slice(0,3),s.CA=e.color[3],s.BS=t,s._cloud=e.cloud,s.generateApStream(e.bbox,e.matrix),s._added=!0,s.initProxy()}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new CircleAnnotation;return await t.parsePropsAsync(e),{value:t.initProxy(),start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.RD&&r.push(...s.encode("/RD "),...this.encodePrimitiveArray(this.RD,s));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}toDto(){const e=this.getColorRect();return{annotationType:"/Circle",uuid:this.$name,pageId:this.$pageId,dateCreated:this.CreationDate?.date.toISOString()||new Date().toISOString(),dateModified:this.M?this.M instanceof LiteralString?this.M.literal:this.M.date.toISOString():new Date().toISOString(),author:this.T?.literal,textContent:this.Contents?.literal,rect:this.Rect,rectMargins:this.RD,bbox:this.apStream?.BBox,matrix:this.apStream?.Matrix,cloud:this._cloud,color:e,strokeWidth:this.BS?.W??this.Border?.width??1,strokeDashGap:this.BS?.D??[3,0]}}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/RD":a=await this.parseNumberArrayPropAsync(f,t,a,!0);break;default:a=await t.skipToNextNameAsync(a,o-1);break}}generateApStream(e,t){const s=new XFormStream;s.Filter="/FlateDecode",s.LastModified=DateString.fromDate(new Date);const r=e?[e[0],e[1],e[2],e[3]]:[this.Rect[0],this.Rect[1],this.Rect[2],this.Rect[3]];s.BBox=r;const o=t?[t[0],t[1],t[2],t[3],t[4],t[5]]:[1,0,0,1,0,0];s.Matrix=o;const a=this.CA||1,f=this.strokeWidth,m=this.BS?.D[0]??this.Border?.dash??3,g=this.BS?.D[1]??this.Border?.gap??0,p=new GraphicsStateDict;if(p.AIS=!0,p.BM="/Normal",p.CA=a,p.ca=a,p.LW=f,p.D=[[m,g],0],p.LC=lineCapStyles.ROUND,p.LJ=lineJoinStyles.ROUND,!this.RD){const b=this._cloud?CircleAnnotation.cloudArcSize/2:f/2;this.RD||=[b,b,b,b]}const y=calcPdfBBoxToRectMatrices(r,this.Rect,o).matAA,C=l.invert(y).toFloatShortArray(),{r:A}=s.matrix.getTRS(),w=new l().applyRotation(A),_=new u(r[0],r[1]),E=new u(r[2],r[1]),v=new u(r[2],r[3]),k=new u(r[0],r[3]),[R,L,B,X]=this.RD,U=new u(R,X).applyMat3(w),M=new u(-B,X).applyMat3(w),F=new u(-B,-L).applyMat3(w),$=new u(R,-L).applyMat3(w),ee=u.applyMat3(_,y).add(U),te=u.applyMat3(E,y).add(M),he=u.applyMat3(v,y).add(F),re=u.applyMat3(k,y).add($),pe=u.add(ee,he).multiplyByScalar(.5),le=u.add(ee,re).multiplyByScalar(.5),J=u.add(re,he).multiplyByScalar(.5),se=u.add(te,he).multiplyByScalar(.5),Y=u.add(ee,te).multiplyByScalar(.5),I=u.subtract(se,le).multiplyByScalar(.5),P=u.subtract(J,Y).multiplyByScalar(.5);let q=`q ${this.getColorString()} /GS0 gs`;if(q+=`
${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} cm`,this._cloud){const b=CloudCurveData.buildFromEllipse(I.getMagnitude(),P.getMagnitude(),CircleAnnotation.cloudArcSize,new l().applyRotation(A).applyTranslation(pe.x,pe.y));q+=`
${b.start.x} ${b.start.y} m`,b.curves.forEach(D=>{q+=`
${D[0].x} ${D[0].y} ${D[1].x} ${D[1].y} ${D[2].x} ${D[2].y} c`}),q+=`
S`}else{const b=BEZIER_CONSTANT,D=u.multiplyByScalar(I,b),N=u.multiplyByScalar(P,b),j=u.add(u.add(pe,P),D),V=u.add(u.add(pe,N),I),Z=u.add(u.subtract(pe,N),I),Q=u.add(u.subtract(pe,P),D),ie=u.subtract(u.subtract(pe,P),D),ce=u.subtract(u.subtract(pe,N),I),ne=u.subtract(u.add(pe,N),I),de=u.subtract(u.add(pe,P),D);q+=`
${J.x} ${J.y} m`,q+=`
${j.x} ${j.y} ${V.x} ${V.y} ${se.x} ${se.y} c`,q+=`
${Z.x} ${Z.y} ${Q.x} ${Q.y} ${Y.x} ${Y.y} c`,q+=`
${ie.x} ${ie.y} ${ce.x} ${ce.y} ${le.x} ${le.y} c`,q+=`
${ne.x} ${ne.y} ${de.x} ${de.y} ${J.x} ${J.y} c`,q+=`
s`}q+=`
Q`,s.Resources=new ResourceDict,s.Resources.setGraphicsState("/GS0",p),s.setTextStreamData(q),this.apStream=s}async applyCommonTransformAsync(e,t=!0){const s=this.getProxy();s.applyRectTransform(e);const r=s.apStream;if(r){const o=l.multiply(r.matrix,e);s.generateApStream(r.BBox,o.toFloatShortArray())}if(s.M=DateString.fromDate(new Date),s.$onEditAction){const o=l.invert(e);s.$onEditAction(t?async()=>{await s.applyCommonTransformAsync(o,!1),await s.updateRenderAsync()}:void 0)}}initProxy(){return super.initProxy()}getProxy(){return super.getProxy()}}class PolyAnnotation extends GeometricAnnotation{Vertices;IT;Measure;constructor(e){super(e)}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.Vertices&&r.push(...s.encode("/Vertices "),...this.encodePrimitiveArray(this.Vertices,s)),this.IT&&r.push(...s.encode("/IT "),...s.encode(this.IT)),this.Measure&&r.push(...s.encode("/Measure "),...this.Measure.toArray(e));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/Vertices":a=await this.parseNumberArrayPropAsync(f,t,a,!0);break;case"/IT":const g=await t.parseNameAtAsync(a,!0);if(g&&Object.values(polyIntents).includes(g.value)){this.IT=g.value,a=g.end+1;break}throw new Error("Can't parse /IT property value");case"/Measure":const p=await t.getValueTypeAtAsync(a);if(p===valueTypes.REF){const y=await ObjectId.parseRefAsync(t,a);if(y&&e.parseInfoGetterAsync){const C=await e.parseInfoGetterAsync(y.value.id);if(C){const A=await MeasureDict.parseAsync(C);if(A){this.Measure=A.value,a=A.end+1;break}}}throw new Error("Can't parse /Measure value reference")}else if(p===valueTypes.DICTIONARY){const y=await t.getDictBoundsAtAsync(a);if(y){const C=await MeasureDict.parseAsync({parser:t,bounds:y});if(C){this.Measure=C.value,a=C.end+1;break}}throw new Error("Can't parse /Measure value dictionary")}throw new Error(`Unsupported /Measure property value type: ${p}`);default:a=await t.skipToNextNameAsync(a,o-1);break}if(!this.Vertices)throw new Error("Not all required properties parsed")}}class PolygonAnnotation extends PolyAnnotation{static cloudArcSize=20;constructor(){super(annotationTypes.POLYGON)}static createFromDto(e){if(e.annotationType!=="/Polygon")throw new Error("Invalid annotation type");const t=new BorderStyleDict;t.W=e.strokeWidth,e.strokeDashGap&&(t.D=e.strokeDashGap);const s=new PolygonAnnotation;return s.$name=e.uuid,s.NM=LiteralString.fromString(e.uuid),s.T=LiteralString.fromString(e.author),s.M=DateString.fromDate(new Date(e.dateModified)),s.CreationDate=DateString.fromDate(new Date(e.dateCreated)),s.Contents=e.textContent?LiteralString.fromString(e.textContent):null,s.Rect=e.rect,s.C=e.color.slice(0,3),s.CA=e.color[3],s.BS=t,s.IT=e.cloud?polyIntents.CLOUD:polyIntents.POLYGON_DIMENSION,s.Vertices=e.vertices,s.generateApStream(),s._added=!0,s.initProxy()}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new PolygonAnnotation;return await t.parsePropsAsync(e),{value:t.initProxy(),start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}toArray(e){return super.toArray(e)}toDto(){const e=this.getColorRect();return{annotationType:"/Polygon",uuid:this.$name,pageId:this.$pageId,dateCreated:this.CreationDate?.date.toISOString()||new Date().toISOString(),dateModified:this.M?this.M instanceof LiteralString?this.M.literal:this.M.date.toISOString():new Date().toISOString(),author:this.T?.literal,textContent:this.Contents?.literal,rect:this.Rect,bbox:this.apStream?.BBox,matrix:this.apStream?.Matrix,vertices:this.Vertices,cloud:this.IT===polyIntents.CLOUD,color:e,strokeWidth:this.BS?.W??this.Border?.width??1,strokeDashGap:this.BS?.D??[3,0]}}async parsePropsAsync(e){await super.parsePropsAsync(e),await this.bakeRotationAsync()}generateApStream(){if(!this.Vertices?.length||this.Vertices.length<6)return;const e=new XFormStream;e.Filter="/FlateDecode",e.LastModified=DateString.fromDate(new Date),e.BBox=[this.Rect[0],this.Rect[1],this.Rect[2],this.Rect[3]];const t=this.CA||1,s=this.strokeWidth,r=this.BS?.D[0]??this.Border?.dash??3,o=this.BS?.D[1]??this.Border?.gap??0,a=new GraphicsStateDict;a.AIS=!0,a.BM="/Normal",a.CA=t,a.ca=t,a.LW=s,a.D=[[r,o],0];const f=this.getColorString(),m=this.Vertices;let g=`q ${f} /GS0 gs`;if(this.IT===polyIntents.CLOUD){a.LC=lineCapStyles.ROUND,a.LJ=lineJoinStyles.ROUND;const p=[];for(let C=0;C<m.length;C=C+2)p.push(new u(m[C],m[C+1]));p.push(new u(m[0],m[1]));const y=CloudCurveData.buildFromPolyline(p,PolygonAnnotation.cloudArcSize);g+=`
${y.start.x} ${y.start.y} m`,y.curves.forEach(C=>{g+=`
${C[0].x} ${C[0].y} ${C[1].x} ${C[1].y} ${C[2].x} ${C[2].y} c`}),g+=`
S`}else{a.LC=lineCapStyles.SQUARE,a.LJ=lineJoinStyles.MITER;let p,y;g+=`
${m[0]} ${m[1]} m`;for(let C=2;C<m.length;C=C+2)p=m[C],y=m[C+1],g+=`
${p} ${y} l`;g+=`
s`}g+=`
Q`,e.Resources=new ResourceDict,e.Resources.setGraphicsState("/GS0",a),e.setTextStreamData(g),this.apStream=e}async applyCommonTransformAsync(e,t=!0){const s=this.getProxy();let r,o,a,f,m,g;const p=new u,y=s.Vertices;for(let w=0;w<y.length;w=w+2)r=y[w],o=y[w+1],p.set(r,o).applyMat3(e),y[w]=p.x,y[w+1]=p.y,(!a||p.x<a)&&(a=p.x),(!f||p.y<f)&&(f=p.y),(!m||p.x>m)&&(m=p.x),(!g||p.y>g)&&(g=p.y);const C=(s.BS?.W??s.Border?.width??1)/2,A=s.IT===polyIntents.CLOUD?PolygonAnnotation.cloudArcSize/2+C:C;if(a-=A,f-=A,m+=A,g+=A,s.Rect=[a,f,m,g],s._bBox){const w=s.getLocalBB();w.ll.set(a,f),w.lr.set(m,f),w.ur.set(m,g),w.ul.set(a,g)}if(s.generateApStream(),s.M=DateString.fromDate(new Date),s.$onEditAction){const w=l.invert(e);s.$onEditAction(t?async()=>{await s.applyCommonTransformAsync(w,!1),await s.updateRenderAsync()}:void 0)}}async bakeRotationAsync(){const e=this.getCurrentRotation(),t=(this.Rect[0]+this.Rect[2])/2,s=(this.Rect[1]+this.Rect[3])/2,r=new l().applyTranslation(-t,-s).applyRotation(e).applyTranslation(t,s);await this.applyCommonTransformAsync(r)}initProxy(){return super.initProxy()}getProxy(){return super.getProxy()}}class PolylineAnnotation extends PolyAnnotation{LE=[lineEndingTypes.NONE,lineEndingTypes.NONE];constructor(){super(annotationTypes.POLYLINE)}static createFromDto(e){if(e.annotationType!=="/Polyline")throw new Error("Invalid annotation type");const t=new BorderStyleDict;t.W=e.strokeWidth,e.strokeDashGap&&(t.D=e.strokeDashGap);const s=new PolylineAnnotation;return s.$name=e.uuid,s.NM=LiteralString.fromString(e.uuid),s.T=LiteralString.fromString(e.author),s.M=DateString.fromDate(new Date(e.dateModified)),s.CreationDate=DateString.fromDate(new Date(e.dateCreated)),s.Contents=e.textContent?LiteralString.fromString(e.textContent):null,s.Rect=e.rect,s.C=e.color.slice(0,3),s.CA=e.color[3],s.BS=t,s.IT=polyIntents.POLYLINE_DIMENSION,s.LE=e.endingType||[lineEndingTypes.NONE,lineEndingTypes.NONE],s.Vertices=e.vertices,s.generateApStream(),s._added=!0,s.initProxy()}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new PolylineAnnotation;return await t.parsePropsAsync(e),{value:t.initProxy(),start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.LE&&r.push(...s.encode("/LE "),...this.encodePrimitiveArray(this.LE,s));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}toDto(){const e=this.getColorRect();return{annotationType:"/PolyLine",uuid:this.$name,pageId:this.$pageId,dateCreated:this.CreationDate?.date.toISOString()||new Date().toISOString(),dateModified:this.M?this.M instanceof LiteralString?this.M.literal:this.M.date.toISOString():new Date().toISOString(),author:this.T?.literal,textContent:this.Contents?.literal,rect:this.Rect,bbox:this.apStream?.BBox,matrix:this.apStream?.Matrix,vertices:this.Vertices,endingType:this.LE,color:e,strokeWidth:this.BS?.W??this.Border?.width??1,strokeDashGap:this.BS?.D??[3,0]}}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/LE":const g=await t.parseNameArrayAtAsync(a,!0);if(g&&Object.values(lineEndingTypes).includes(g.value[0])&&Object.values(lineEndingTypes).includes(g.value[1]))this.LE=[g.value[0],g.value[1]],a=g.end+1;else throw new Error("Can't parse /LE property value");break;default:a=await t.skipToNextNameAsync(a,o-1);break}await this.bakeRotationAsync()}generateApStream(){if(!this.Vertices?.length||this.Vertices.length<4)return;const e=new XFormStream;e.Filter="/FlateDecode",e.LastModified=DateString.fromDate(new Date),e.BBox=[this.Rect[0],this.Rect[1],this.Rect[2],this.Rect[3]];const t=this.CA||1,s=this.strokeWidth,r=this.BS?.D[0]??this.Border?.dash??3,o=this.BS?.D[1]??this.Border?.gap??0,a=new GraphicsStateDict;a.AIS=!0,a.BM="/Normal",a.CA=t,a.ca=t,a.LW=s,a.D=[[r,o],0],a.LC=lineCapStyles.SQUARE,a.LJ=lineJoinStyles.MITER;const f=this.getColorString(),m=this.Vertices;let g=`q ${f} /GS0 gs`,p,y;g+=`
${m[0]} ${m[1]} m`;for(let C=2;C<m.length;C=C+2)p=m[C],y=m[C+1],g+=`
${p} ${y} l`;g+=`
S`,g+=`
Q`,e.Resources=new ResourceDict,e.Resources.setGraphicsState("/GS0",a),e.setTextStreamData(g),this.apStream=e}async applyCommonTransformAsync(e,t=!0){const s=this.getProxy();let r,o,a,f,m,g;const p=new u,y=s.Vertices;for(let A=0;A<y.length;A=A+2)r=y[A],o=y[A+1],p.set(r,o).applyMat3(e),y[A]=p.x,y[A+1]=p.y,(!a||p.x<a)&&(a=p.x),(!f||p.y<f)&&(f=p.y),(!m||p.x>m)&&(m=p.x),(!g||p.y>g)&&(g=p.y);const C=(s.BS?.W??s.Border?.width??1)/2;if(a-=C,f-=C,m+=C,g+=C,s.Rect=[a,f,m,g],s._bBox){const A=s.getLocalBB();A.ll.set(a,f),A.lr.set(m,f),A.ur.set(m,g),A.ul.set(a,g)}if(s.generateApStream(),s.M=DateString.fromDate(new Date),s.$onEditAction){const A=l.invert(e);s.$onEditAction(t?async()=>{await s.applyCommonTransformAsync(A,!1),await s.updateRenderAsync()}:void 0)}}async bakeRotationAsync(){const e=this.getCurrentRotation(),t=(this.Rect[0]+this.Rect[2])/2,s=(this.Rect[1]+this.Rect[3])/2,r=new l().applyTranslation(-t,-s).applyRotation(e).applyTranslation(t,s);await this.applyCommonTransformAsync(r)}initProxy(){return super.initProxy()}getProxy(){return super.getProxy()}}class LineAnnotation extends GeometricAnnotation{IT=lineIntents.DIMENSION;L;LE=[lineEndingTypes.NONE,lineEndingTypes.NONE];LLE=0;LL=0;LLO=0;Cap=!1;CP=lineCaptionPositions.INLINE;CO=[0,0];Measure;_scaleHandleActive;_rtStyle;_rtText;_fontMap;_svgTemp=new SvgTempPath;get offsetY(){return(Math.abs(this.LL||0)+(this.LLO||0))*(this.LL<0?-1:1)}get minMargin(){const e=this.strokeWidth,t=e/2;let s=0;return this.LE[0]!==lineEndingTypes.NONE||this.LE[1]!==lineEndingTypes.NONE?s=(Math.max(e*LINE_END_MULTIPLIER,LINE_END_MIN_SIZE)+e)/2:s=t,s}constructor(){super(annotationTypes.LINE)}static async createFromDtoAsync(e,t){if(e.annotationType!=="/Line")throw new Error("Invalid annotation type");const s=new BorderStyleDict;s.W=e.strokeWidth,e.strokeDashGap&&(s.D=e.strokeDashGap);const r=new LineAnnotation;return r.$name=e.uuid,r.NM=LiteralString.fromString(e.uuid),r.T=LiteralString.fromString(e.author),r.M=DateString.fromDate(new Date(e.dateModified)),r.CreationDate=DateString.fromDate(new Date(e.dateCreated)),r.Contents=e.textContent?LiteralString.fromString(e.textContent):null,r.Rect=e.rect,r.C=e.color.slice(0,3),r.CA=e.color[3],r.BS=s,r.IT=e.intent||lineIntents.DIMENSION,r.LE=e.endingType||[lineEndingTypes.NONE,lineEndingTypes.NONE],r.L=e.vertices,r.LL=e.leaderLineLength||0,r.LLE=e.leaderLineExtension||0,r.LLO=e.leaderLineOffset||0,r.Cap=e.caption,r.CP=e.captionPosition||lineCaptionPositions.INLINE,r.CO=e.captionOffset||[0,0],r._fontMap=t,await r.generateApStreamAsync(),r._added=!0,r.initProxy()}static async parseAsync(e,t){if(!e)throw new Error("Parsing information not passed");try{const s=new LineAnnotation;return await s.parsePropsAsync(e),s._fontMap=t,{value:s.initProxy(),start:e.bounds.start,end:e.bounds.end}}catch(s){return console.log(s.message),null}}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.L&&r.push(...s.encode("/L "),...this.encodePrimitiveArray(this.L,s)),this.LE&&r.push(...s.encode("/LE "),...this.encodePrimitiveArray(this.LE,s)),this.LL&&r.push(...s.encode("/LL "),...s.encode(" "+this.LL)),this.LLE&&r.push(...s.encode("/LLE "),...s.encode(" "+this.LLE)),this.Cap&&r.push(...s.encode("/Cap "),...s.encode(" "+this.Cap)),this.IT&&r.push(...s.encode("/IT "),...s.encode(this.IT)),this.LLO&&r.push(...s.encode("/LLO "),...s.encode(" "+this.LLO)),this.CP&&r.push(...s.encode("/CP "),...s.encode(this.CP)),this.Measure&&r.push(...s.encode("/Measure "),...this.Measure.toArray(e)),this.CO&&r.push(...s.encode("/CO "),...this.encodePrimitiveArray(this.CO,s));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}toDto(){const e=this.getColorRect();return{annotationType:"/Line",uuid:this.$name,pageId:this.$pageId,dateCreated:this.CreationDate?.date.toISOString()||new Date().toISOString(),dateModified:this.M?this.M instanceof LiteralString?this.M.literal:this.M.date.toISOString():new Date().toISOString(),author:this.T?.literal,textContent:this.Contents?.literal,rect:this.Rect,bbox:this.apStream?.BBox,matrix:this.apStream?.Matrix,vertices:this.L,intent:this.IT,endingType:this.LE,leaderLineLength:this.LL,leaderLineExtension:this.LLE,leaderLineOffset:this.LLO,caption:this.Cap,captionPosition:this.CP,captionOffset:this.CO,color:e,strokeWidth:this.BS?.W??this.Border?.width??1,strokeDashGap:this.BS?.D??[3,0]}}async setTextContentAsync(e,t=!0){await super.setTextContentAsync(e,t),await this.updateStreamAsync()}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/L":case"/CO":a=await this.parseNumberArrayPropAsync(f,t,a,!0);break;case"/LE":const g=await t.parseNameArrayAtAsync(a,!0);if(g&&Object.values(lineEndingTypes).includes(g.value[0])&&Object.values(lineEndingTypes).includes(g.value[1]))this.LE=[g.value[0],g.value[1]],a=g.end+1;else throw new Error("Can't parse /LE property value");break;case"/IT":const p=await t.parseNameAtAsync(a,!0);if(p&&Object.values(lineIntents).includes(p.value)){this.IT=p.value,a=p.end+1;break}throw new Error("Can't parse /IT property value");case"/CP":const y=await t.parseNameAtAsync(a,!0);if(y&&Object.values(lineCaptionPositions).includes(y.value))this.CP=y.value,a=y.end+1;else throw new Error("Can't parse /CP property value");break;case"/LL":case"/LLE":case"/LLO":a=await this.parseNumberPropAsync(f,t,a,!1);break;case"/Cap":a=await this.parseBoolPropAsync(f,t,a);break;case"/Measure":const C=await t.getValueTypeAtAsync(a);if(C===valueTypes.REF){const A=await ObjectId.parseRefAsync(t,a);if(A&&e.parseInfoGetterAsync){const w=await e.parseInfoGetterAsync(A.value.id);if(w){const _=await MeasureDict.parseAsync(w);if(_){this.Measure=_.value,a=_.end+1;break}}}throw new Error("Can't parse /BS value reference")}else if(C===valueTypes.DICTIONARY){const A=await t.getDictBoundsAtAsync(a);if(A){const w=await MeasureDict.parseAsync({parser:t,bounds:A});if(w){this.Measure=w.value,a=w.end+1;break}}throw new Error("Can't parse /Measure value dictionary")}throw new Error(`Unsupported /Measure property value type: ${C}`);default:a=await t.skipToNextNameAsync(a,o-1);break}if(this.RC){const p=new DOMParser().parseFromString(this.RC.literal,"text/xml")?.querySelector("body");if(p){const y=p.getAttribute("style"),C=p.querySelector("p");this._rtStyle=y||"",this._rtText=C?.textContent||""}}}async applyCommonTransformAsync(e,t=!0){const s=this.getProxy(),[r,o,a,f]=s.L,m=new u(r,o).applyMat3(e),g=new u(a,f).applyMat3(e);if(s.L=[m.x,m.y,g.x,g.y],await s.generateApStreamAsync(),s.M=DateString.fromDate(new Date),s.$onEditAction){const p=l.invert(e);s.$onEditAction(t?async()=>{await s.applyCommonTransformAsync(p,!1),await s.updateRenderAsync()}:void 0)}}async updateStreamAsync(){const e=this.getProxy();await e.generateApStreamAsync(),await e.updateRenderAsync()}async calculateStreamBboxAsync(){const[e,t,s,r]=this.L,o=new u(s-e,r-t).getMagnitude(),a=this.strokeWidth,f=a/2,m=this.minMargin,g=4*m,p=o>g?o-g:o,y=await this.updateTextDataAsync({maxWidth:p,fontSize:9,strokeWidth:a,textAlign:"center",pivotPoint:this.CP===lineCaptionPositions.INLINE?"center":"bottom-margin"}),C=Math.max(Math.abs(this.LL||0)+(this.LLO||0)+f,m),A=Math.max((this.LLE||0)+f,m),w=C+A,_=this.LL<0?m:w,E=this.LL<0?w:m;let v=-m,k=-E,R=o+m,L=_;if(y){const X=this.offsetY,[U,M,F,$]=y.relativeRect;v=Math.min(v,U+o/2),k=Math.min(k,M+X),R=Math.max(R,F+o/2),L=Math.max(L,$+X)}return[new u(v,k),new u(R,L)]}calculateStreamMatrix(){const[e,t,s,r]=this.L,o=new u(e,t),a=new u(s,r),f=u.subtract(a,o).getMagnitude(),m=new u,g=new u(f,0);return l.from4Vec2(m,g,o,a)}updateRect(e,t){const s=this.getLocalBB();s.ll.set(e[0].x,e[0].y).applyMat3(t),s.lr.set(e[1].x,e[0].y).applyMat3(t),s.ur.set(e[1].x,e[1].y).applyMat3(t),s.ul.set(e[0].x,e[1].y).applyMat3(t);const{min:r,max:o}=u.minMax(s.ll,s.lr,s.ur,s.ul);this.Rect=[r.x,r.y,o.x,o.y]}getLineEndsStreamCoords(e){const t=l.invert(e),s=new u(this.L[0],this.L[1]).applyMat3(t).truncate(),r=new u(this.L[2],this.L[3]).applyMat3(t).truncate(),o=this.offsetY;return s.y+=o,r.y+=o,[s,r]}getLineStreamPart(e,t){let s="";return s+=`
${e.x} ${e.y} m`,s+=`
${t.x} ${t.y} l`,s+=`
S`,this.LL&&(this.LL>0?(s+=`
${e.x} ${e.y-Math.abs(this.LL)} m`,s+=`
${e.x} ${e.y+this.LLE} l`,s+=`
S`,s+=`
${t.x} ${t.y-Math.abs(this.LL)} m`,s+=`
${t.x} ${t.y+this.LLE} l`,s+=`
S`):(s+=`
${e.x} ${e.y+Math.abs(this.LL)} m`,s+=`
${e.x} ${e.y-this.LLE} l`,s+=`
S`,s+=`
${t.x} ${t.y+Math.abs(this.LL)} m`,s+=`
${t.x} ${t.y-this.LLE} l`,s+=`
S`)),s}async getTextStreamPartAsync(e,t){const s=this._textData;if(!s)return"";const[r,o,a,f]=s.relativeRect,m=new u(r,o).add(e),g=new u(a,f).add(e),p=`
q 1 g 1 G
${m.x} ${m.y} m
${m.x} ${g.y} l
${g.x} ${g.y} l
${g.x} ${m.y} l
f
Q`;let y=`
q 0 g 0 G`;const C=9;for(const A of s.lines){if(!A.text)continue;const w=new u(A.relativeRect[0],A.relativeRect[1]).add(e);let _="";for(const E of A.text){const v=t.encoding.codeMap.get(E);v&&(_+=v.toString(16).padStart(2,"0"))}y+=`
BT 0 Tc 0 Tw 100 Tz ${t.name} ${C} Tf 0 Tr`,y+=`
1 0 0 1 ${w.x} ${w.y+C*.2} Tm`,y+=`
<${_}> Tj`,y+=`
ET`}return y+=`
Q`,p+y}async generateApStreamAsync(){if(!this.L)return;const e=await this.calculateStreamBboxAsync(),t=this.calculateStreamMatrix();this.updateRect(e,t);const s=new XFormStream;s.Filter="/FlateDecode",s.LastModified=DateString.fromDate(new Date),s.BBox=[e[0].x,e[0].y,e[1].x,e[1].y],s.Matrix=t.toFloatShortArray(),s.Resources=new ResourceDict;const r=this.CA||1,o=this.strokeWidth,a=this.BS?.D[0]??this.Border?.dash??3,f=this.BS?.D[1]??this.Border?.gap??0,m=new GraphicsStateDict;m.AIS=!0,m.BM="/Normal",m.CA=r,m.ca=r,m.LW=o,m.D=[[a,f],0],m.LC=lineCapStyles.SQUARE,m.LJ=lineJoinStyles.MITER,s.Resources.setGraphicsState("/GS0",m);const g="arial",p=this._fontMap?.get(g);if(!p||!p.encoding?.codeMap)throw new Error(`Suitable font is not found in the font map: '${g}'`);s.Resources.setFont(p.name,p);const y=this.getColorString(),[C,A]=this.getLineEndsStreamCoords(t),w=this.getLineStreamPart(C,A),_=this.getLineEndingStreamPart(C,this.LE[0],o,"left"),E=this.getLineEndingStreamPart(A,this.LE[1],o,"right"),v=await this.getTextStreamPartAsync(u.add(C,A).multiplyByScalar(.5),p),k=`q ${y} /GS0 gs`+w+_+E+v+`
Q`;s.setTextStreamData(k),this.apStream=s}renderHandles(){return[...this.renderLineEndHandles(),this.renderRotationHandle()]}renderLineEndHandles(){const e=document.createElementNS("http://www.w3.org/2000/svg","line");e.classList.add("annotation-handle","scale"),e.setAttribute("data-handle-name","start"),e.setAttribute("x1",this.L[0]+""),e.setAttribute("y1",this.L[1]+""),e.setAttribute("x2",this.L[0]+""),e.setAttribute("y2",this.L[1]+.1+""),e.addEventListener("pointerdown",this.onLineEndHandlePointerDown);const t=document.createElementNS("http://www.w3.org/2000/svg","line");return t.classList.add("annotation-handle","scale"),t.setAttribute("data-handle-name","end"),t.setAttribute("x1",this.L[2]+""),t.setAttribute("y1",this.L[3]+""),t.setAttribute("x2",this.L[2]+""),t.setAttribute("y2",this.L[3]+.1+""),t.addEventListener("pointerdown",this.onLineEndHandlePointerDown),[e,t]}onLineEndHandlePointerDown=e=>{if(!e.isPrimary)return;const t=e.target;t.setPointerCapture(e.pointerId),t.addEventListener("pointerup",this.onLineEndHandlePointerUp),t.addEventListener("pointerout",this.onLineEndHandlePointerUp);const s=t.dataset.handleName;switch(s){case"start":this._scaleHandleActive="start";break;case"end":this._scaleHandleActive="end";break;default:throw new Error(`Invalid handle name: ${s}`)}this._moved=!1,this._transformationTimer=setTimeout(()=>{this._transformationTimer=null,this._svgTemp.insertAfter(this._renderedControls),t.addEventListener("pointermove",this.onLineEndHandlePointerMove)},200),e.stopPropagation()};onLineEndHandlePointerMove=e=>{if(!e.isPrimary||!this._scaleHandleActive)return;const t=new u(this.L[0],this.L[1]),s=new u(this.L[2],this.L[3]);let r,o;this._scaleHandleActive==="start"?(r=this.convertClientCoordsToPage(e.clientX,e.clientY),o=s.clone()):(r=t.clone(),o=this.convertClientCoordsToPage(e.clientX,e.clientY)),this._tempTransformationMatrix=l.from4Vec2(t,s,r,o),this._svgTemp.set("none","blue",this.strokeWidth,[r,o]),this._moved=!0};onLineEndHandlePointerUp=e=>{if(!e.isPrimary)return;const t=e.target;t.removeEventListener("pointermove",this.onLineEndHandlePointerMove),t.removeEventListener("pointerup",this.onLineEndHandlePointerUp),t.removeEventListener("pointerout",this.onLineEndHandlePointerUp),t.releasePointerCapture(e.pointerId),this._svgTemp.remove(),this.applyTempTransformAsync()};initProxy(){return super.initProxy()}getProxy(){return super.getProxy()}}class TextMarkupAnnotation extends MarkupAnnotation{QuadPoints;constructor(e){super(e)}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.QuadPoints&&r.push(...s.encode("/QuadPoints "),...this.encodePrimitiveArray(this.QuadPoints,s));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/QuadPoints":a=await this.parseNumberArrayPropAsync(f,t,a,!0);break;default:a=await t.skipToNextNameAsync(a,o-1);break}if(!this.QuadPoints)throw new Error("Not all required properties parsed")}onTranslationPointerDown=e=>{};renderHandles(){return[]}}class HighlightAnnotation extends TextMarkupAnnotation{constructor(){super(annotationTypes.HIGHLIGHT)}static createFromDto(e){if(e.annotationType!=="/Highlight")throw new Error("Invalid annotation type");if(!e?.quadPoints?.length||e.quadPoints.length%8)return;const t=new BorderStyleDict;t.W=e.strokeWidth,e.strokeDashGap&&(t.D=e.strokeDashGap);const s=new HighlightAnnotation;if(s.$name=e.uuid,s.NM=LiteralString.fromString(e.uuid),s.T=LiteralString.fromString(e.author),s.M=DateString.fromDate(new Date(e.dateModified)),s.CreationDate=DateString.fromDate(new Date(e.dateCreated)),s.Contents=e.textContent?LiteralString.fromString(e.textContent):null,e.rect)s.Rect=e.rect;else{const r=[];for(let f=0;f<e.quadPoints.length;f+=2)r.push(new u(e.quadPoints[f],e.quadPoints[f+1]));const{min:o,max:a}=u.minMax(...r);s.Rect=[o.x,o.y,a.x,a.y]}return s.C=e.color.slice(0,3),s.CA=e.color[3],s.BS=t,s.QuadPoints=e.quadPoints,s.generateApStream(),s._added=!0,s.initProxy()}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new HighlightAnnotation;return await t.parsePropsAsync(e),{value:t.initProxy(),start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}toArray(e){return super.toArray(e)}toDto(){const e=this.getColorRect();return{annotationType:"/Highlight",uuid:this.$name,pageId:this.$pageId,dateCreated:this.CreationDate?.date.toISOString()||new Date().toISOString(),dateModified:this.M?this.M instanceof LiteralString?this.M.literal:this.M.date.toISOString():new Date().toISOString(),author:this.T?.literal,textContent:this.Contents?.literal,rect:this.Rect,bbox:this.apStream?.BBox,matrix:this.apStream?.Matrix,quadPoints:this.QuadPoints,color:e,strokeWidth:this.BS?.W??this.Border?.width??1,strokeDashGap:this.BS?.D??[3,0]}}async parsePropsAsync(e){await super.parsePropsAsync(e)}generateApStream(){if(!this.QuadPoints?.length||this.QuadPoints.length%8)return;const e=new XFormStream;e.Filter="/FlateDecode",e.LastModified=DateString.fromDate(new Date),e.BBox=[this.Rect[0],this.Rect[1],this.Rect[2],this.Rect[3]];const t=this.CA||1,s=this.strokeWidth,r=this.BS?.D[0]??this.Border?.dash??3,o=this.BS?.D[1]??this.Border?.gap??0,a=new GraphicsStateDict;a.AIS=!0,a.BM="/Normal",a.CA=t,a.ca=t,a.LW=s,a.LC=lineCapStyles.SQUARE,a.LJ=lineJoinStyles.MITER,a.D=[[r,o],0],a.BM=blendModes.MULTIPLY;let m=`q ${this.getColorString()} /GS0 gs`;const g=new u,p=new u,y=new u,C=new u,A=this.QuadPoints;for(let w=0;w<A.length;w+=8)g.set(A[w+4],A[w+5]),p.set(A[w+6],A[w+7]),y.set(A[w+2],A[w+3]),C.set(A[w+0],A[w+1]),m+=`
${g.x} ${g.y} m`,m+=`
${p.x} ${p.y} l`,m+=`
${y.x} ${y.y} l`,m+=`
${C.x} ${C.y} l`,m+=`
f`;m+=`
Q`,e.Resources=new ResourceDict,e.Resources.setGraphicsState("/GS0",a),e.setTextStreamData(m),this.apStream=e}initProxy(){return super.initProxy()}getProxy(){return super.getProxy()}}class UnderlineAnnotation extends TextMarkupAnnotation{constructor(){super(annotationTypes.UNDERLINE)}static createFromDto(e){if(e.annotationType!=="/Underline")throw new Error("Invalid annotation type");if(!e?.quadPoints?.length||e.quadPoints.length%8)return;const t=new BorderStyleDict;t.W=e.strokeWidth,e.strokeDashGap&&(t.D=e.strokeDashGap);const s=new UnderlineAnnotation;if(s.$name=e.uuid,s.NM=LiteralString.fromString(e.uuid),s.T=LiteralString.fromString(e.author),s.M=DateString.fromDate(new Date(e.dateModified)),s.CreationDate=DateString.fromDate(new Date(e.dateCreated)),s.Contents=e.textContent?LiteralString.fromString(e.textContent):null,e.rect)s.Rect=e.rect;else{const r=[];for(let m=0;m<e.quadPoints.length;m+=2)r.push(new u(e.quadPoints[m],e.quadPoints[m+1]));const{min:o,max:a}=u.minMax(...r),f=e.strokeWidth?e.strokeWidth/2:1;s.Rect=[o.x-f,o.y-f,a.x+f,a.y+f]}return s.C=e.color.slice(0,3),s.CA=e.color[3],s.BS=t,s.QuadPoints=e.quadPoints,s.generateApStream(),s._added=!0,s.initProxy()}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new UnderlineAnnotation;return await t.parsePropsAsync(e),{value:t.initProxy(),start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}toArray(e){return super.toArray(e)}toDto(){const e=this.getColorRect();return{annotationType:"/Underline",uuid:this.$name,pageId:this.$pageId,dateCreated:this.CreationDate?.date.toISOString()||new Date().toISOString(),dateModified:this.M?this.M instanceof LiteralString?this.M.literal:this.M.date.toISOString():new Date().toISOString(),author:this.T?.literal,textContent:this.Contents?.literal,rect:this.Rect,bbox:this.apStream?.BBox,matrix:this.apStream?.Matrix,quadPoints:this.QuadPoints,color:e,strokeWidth:this.BS?.W??this.Border?.width??1,strokeDashGap:this.BS?.D??[3,0]}}async parsePropsAsync(e){await super.parsePropsAsync(e)}generateApStream(){if(!this.QuadPoints?.length||this.QuadPoints.length%8)return;const e=new XFormStream;e.Filter="/FlateDecode",e.LastModified=DateString.fromDate(new Date),e.BBox=[this.Rect[0],this.Rect[1],this.Rect[2],this.Rect[3]];const t=this.CA||1,s=this.strokeWidth,r=this.BS?.D[0]??this.Border?.dash??3,o=this.BS?.D[1]??this.Border?.gap??0,a=new GraphicsStateDict;a.AIS=!0,a.BM="/Normal",a.CA=t,a.ca=t,a.LW=s,a.LC=lineCapStyles.SQUARE,a.LJ=lineJoinStyles.MITER,a.D=[[r,o],0];let m=`q ${this.getColorString()} /GS0 gs`;const g=new u,p=new u,y=this.QuadPoints;for(let C=0;C<y.length;C+=8)g.set(y[C+4],y[C+5]),p.set(y[C+6],y[C+7]),m+=`
${g.x} ${g.y} m`,m+=`
${p.x} ${p.y} l`,m+=`
S`;m+=`
Q`,e.Resources=new ResourceDict,e.Resources.setGraphicsState("/GS0",a),e.setTextStreamData(m),this.apStream=e}initProxy(){return super.initProxy()}getProxy(){return super.getProxy()}}class StrikeoutAnnotation extends TextMarkupAnnotation{constructor(){super(annotationTypes.STRIKEOUT)}static createFromDto(e){if(e.annotationType!=="/Strikeout")throw new Error("Invalid annotation type");if(!e?.quadPoints?.length||e.quadPoints.length%8)return;const t=new BorderStyleDict;t.W=e.strokeWidth,e.strokeDashGap&&(t.D=e.strokeDashGap);const s=new StrikeoutAnnotation;if(s.$name=e.uuid,s.NM=LiteralString.fromString(e.uuid),s.T=LiteralString.fromString(e.author),s.M=DateString.fromDate(new Date(e.dateModified)),s.CreationDate=DateString.fromDate(new Date(e.dateCreated)),s.Contents=e.textContent?LiteralString.fromString(e.textContent):null,e.rect)s.Rect=e.rect;else{const r=[];for(let f=0;f<e.quadPoints.length;f+=2)r.push(new u(e.quadPoints[f],e.quadPoints[f+1]));const{min:o,max:a}=u.minMax(...r);s.Rect=[o.x,o.y,a.x,a.y]}return s.C=e.color.slice(0,3),s.CA=e.color[3],s.BS=t,s.QuadPoints=e.quadPoints,s.generateApStream(),s._added=!0,s.initProxy()}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new StrikeoutAnnotation;return await t.parsePropsAsync(e),{value:t.initProxy(),start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}toArray(e){return super.toArray(e)}toDto(){const e=this.getColorRect();return{annotationType:"/Strikeout",uuid:this.$name,pageId:this.$pageId,dateCreated:this.CreationDate?.date.toISOString()||new Date().toISOString(),dateModified:this.M?this.M instanceof LiteralString?this.M.literal:this.M.date.toISOString():new Date().toISOString(),author:this.T?.literal,textContent:this.Contents?.literal,rect:this.Rect,bbox:this.apStream?.BBox,matrix:this.apStream?.Matrix,quadPoints:this.QuadPoints,color:e,strokeWidth:this.BS?.W??this.Border?.width??1,strokeDashGap:this.BS?.D??[3,0]}}async parsePropsAsync(e){await super.parsePropsAsync(e)}generateApStream(){if(!this.QuadPoints?.length||this.QuadPoints.length%8)return;const e=new XFormStream;e.Filter="/FlateDecode",e.LastModified=DateString.fromDate(new Date),e.BBox=[this.Rect[0],this.Rect[1],this.Rect[2],this.Rect[3]];const t=this.CA||1,s=this.strokeWidth,r=this.BS?.D[0]??this.Border?.dash??3,o=this.BS?.D[1]??this.Border?.gap??0,a=new GraphicsStateDict;a.AIS=!0,a.BM="/Normal",a.CA=t,a.ca=t,a.LW=s,a.LC=lineCapStyles.SQUARE,a.LJ=lineJoinStyles.MITER,a.D=[[r,o],0];let m=`q ${this.getColorString()} /GS0 gs`;const g=new u,p=new u,y=new u,C=new u,A=new u,w=new u,_=this.QuadPoints;for(let E=0;E<_.length;E+=8)g.set(_[E+4],_[E+5]),p.set(_[E+6],_[E+7]),y.set(_[E+2],_[E+3]),C.set(_[E+0],_[E+1]),A.setFromVec2(g).add(C).multiplyByScalar(.5),w.setFromVec2(p).add(y).multiplyByScalar(.5),m+=`
${A.x} ${A.y} m`,m+=`
${w.x} ${w.y} l`,m+=`
S`;m+=`
Q`,e.Resources=new ResourceDict,e.Resources.setGraphicsState("/GS0",a),e.setTextStreamData(m),this.apStream=e}initProxy(){return super.initProxy()}getProxy(){return super.getProxy()}}class SquigglyAnnotation extends TextMarkupAnnotation{static squiggleSize=6;constructor(){super(annotationTypes.SQUIGGLY)}static createFromDto(e){if(e.annotationType!=="/Squiggly")throw new Error("Invalid annotation type");if(!e?.quadPoints?.length||e.quadPoints.length%8)return;const t=new BorderStyleDict;t.W=e.strokeWidth,e.strokeDashGap&&(t.D=e.strokeDashGap);const s=new SquigglyAnnotation;if(s.$name=e.uuid,s.NM=LiteralString.fromString(e.uuid),s.T=LiteralString.fromString(e.author),s.M=DateString.fromDate(new Date(e.dateModified)),s.CreationDate=DateString.fromDate(new Date(e.dateCreated)),s.Contents=e.textContent?LiteralString.fromString(e.textContent):null,e.rect)s.Rect=e.rect;else{const r=[];for(let m=0;m<e.quadPoints.length;m+=2)r.push(new u(e.quadPoints[m],e.quadPoints[m+1]));const{min:o,max:a}=u.minMax(...r),f=this.squiggleSize/2+(e.strokeWidth||2)/2;s.Rect=[o.x-f,o.y-f,a.x+f,a.y+f]}return s.C=e.color.slice(0,3),s.CA=e.color[3],s.BS=t,s.QuadPoints=e.quadPoints,s.generateApStream(),s._added=!0,s.initProxy()}static async parseAsync(e){if(!e)throw new Error("Parsing information not passed");try{const t=new SquigglyAnnotation;return await t.parsePropsAsync(e),{value:t.initProxy(),start:e.bounds.start,end:e.bounds.end}}catch(t){return console.log(t.message),null}}toArray(e){return super.toArray(e)}toDto(){const e=this.getColorRect();return{annotationType:"/Squiggly",uuid:this.$name,pageId:this.$pageId,dateCreated:this.CreationDate?.date.toISOString()||new Date().toISOString(),dateModified:this.M?this.M instanceof LiteralString?this.M.literal:this.M.date.toISOString():new Date().toISOString(),author:this.T?.literal,textContent:this.Contents?.literal,rect:this.Rect,bbox:this.apStream?.BBox,matrix:this.apStream?.Matrix,quadPoints:this.QuadPoints,color:e,strokeWidth:this.BS?.W??this.Border?.width??1,strokeDashGap:this.BS?.D??[3,0]}}async parsePropsAsync(e){await super.parsePropsAsync(e)}generateApStream(){if(!this.QuadPoints?.length||this.QuadPoints.length%8)return;const e=new XFormStream;e.Filter="/FlateDecode",e.LastModified=DateString.fromDate(new Date),e.BBox=[this.Rect[0],this.Rect[1],this.Rect[2],this.Rect[3]];const t=this.CA||1,s=this.strokeWidth,r=this.BS?.D[0]??this.Border?.dash??3,o=this.BS?.D[1]??this.Border?.gap??0,a=new GraphicsStateDict;a.AIS=!0,a.BM="/Normal",a.CA=t,a.ca=t,a.LW=s,a.LC=lineCapStyles.SQUARE,a.LJ=lineJoinStyles.MITER,a.D=[[r,o],0];let m=`q ${this.getColorString()} /GS0 gs`;const g=new u,p=new u,y=this.QuadPoints;for(let C=0;C<y.length;C+=8){g.set(y[C+4],y[C+5]),p.set(y[C+6],y[C+7]);const A=buildSquigglyLine(g,p,SquigglyAnnotation.squiggleSize);if(A?.length){m+=`
${A[0].x} ${A[0].y} m`;for(let w=1;w<A.length;w++)m+=`
${A[w].x} ${A[w].y} l`;m+=`
S`}}m+=`
Q`,e.Resources=new ResourceDict,e.Resources.setGraphicsState("/GS0",a),e.setTextStreamData(m),this.apStream=e}initProxy(){return super.initProxy()}getProxy(){return super.getProxy()}}class FreeTextAnnotation extends MarkupAnnotation{DA;Q=justificationTypes.LEFT;DS;CL;IT=freeTextIntents.PLAIN_TEXT;RD;LE=lineEndingTypes.NONE;_defaultStyle;_rtStyle;_rtText;_fontMap;_svgTemp=new SvgTempPath;_pointsTemp;get pointsStreamCS(){const t=this.strokeWidth/2,[s,r,o,a]=this.apStream.BBox,[f,m,g,p]=this.RD||[t,t,t,t],y=new u(s+f,r+m),C=new u(o-g,a-p),A=new u(C.x,y.y),w=new u(y.x,C.y),_=u.add(y,w).multiplyByScalar(.5),E=u.add(w,C).multiplyByScalar(.5),v=u.add(A,C).multiplyByScalar(.5),k=u.add(y,A).multiplyByScalar(.5),R=this.CL;let L,B,X;return R&&(R.length===6?(L=new u(R[4],R[5]),X=new u(R[2],R[3]),B=new u(R[0],R[1])):R.length===4&&(L=new u(R[2],R[3]),B=new u(R[0],R[1]))),{bl:y,tr:C,br:A,tl:w,l:_,t:E,r:v,b:k,cob:L,cok:X,cop:B}}get pointsPageCS(){const e=this.pointsStreamCS,{matAA:t}=calcPdfBBoxToRectMatrices(this.apStream.BBox,this.Rect,this.apStream.Matrix);return{bl:e.bl.applyMat3(t),tr:e.tr.applyMat3(t),br:e.br.applyMat3(t),tl:e.tl.applyMat3(t),l:e.l.applyMat3(t),t:e.t.applyMat3(t),r:e.r.applyMat3(t),b:e.b.applyMat3(t),cob:e.cob?e.cob.applyMat3(t):null,cok:e.cok?e.cok.applyMat3(t):null,cop:e.cop?e.cop.applyMat3(t):null}}get minMargin(){const e=this.strokeWidth,t=e/2;let s;return this.LE&&this.LE!==lineEndingTypes.NONE?s=(Math.max(e*LINE_END_MULTIPLIER,LINE_END_MIN_SIZE)+e)/2:s=t,s}constructor(){super(annotationTypes.FREE_TEXT)}static async createFromDtoAsync(e,t){if(e.annotationType!=="/FreeText")throw new Error("Invalid annotation type");const s=new BorderStyleDict;s.W=e.strokeWidth,e.strokeDashGap&&(s.D=e.strokeDashGap);const r=new FreeTextAnnotation;r.$name=e.uuid,r.NM=LiteralString.fromString(e.uuid),r.T=LiteralString.fromString(e.author),r.M=DateString.fromDate(new Date(e.dateModified)),r.CreationDate=DateString.fromDate(new Date(e.dateCreated)),r.Contents=e.textContent?LiteralString.fromString(e.textContent):null,r.Rect=e.rect,r.C=e.color.slice(0,3),r.CA=e.color[3],r.BS=s,r.IT=e.intent||freeTextIntents.PLAIN_TEXT,r.LE=e.calloutEndingType||lineEndingTypes.NONE,r.Q=e.justification||justificationTypes.LEFT,r._fontMap=t;const{bl:o,tr:a,br:f,tl:m,l:g,t:p,r:y,b:C,cob:A,cok:w,cop:_}=e.points,E={bl:new u(o[0],o[1]),tr:new u(a[0],a[1]),br:new u(f[0],f[1]),tl:new u(m[0],m[1]),l:new u(g[0],g[1]),t:new u(p[0],p[1]),r:new u(y[0],y[1]),b:new u(C[0],C[1]),cob:A?new u(A[0],A[1]):null,cok:w?new u(w[0],w[1]):null,cop:_?new u(_[0],_[1]):null};return await r.generateApStreamAsync(E),r._added=!0,r.initProxy()}static async parseAsync(e,t){if(!e)throw new Error("Parsing information not passed");try{const s=new FreeTextAnnotation;return await s.parsePropsAsync(e),s._fontMap=t,{value:s.initProxy(),start:e.bounds.start,end:e.bounds.end}}catch(s){return console.log(s.message),null}}toArray(e){const t=super.toArray(e),s=new TextEncoder,r=[];this.DA&&r.push(...s.encode("/DA "),...this.DA.toArray(e)),this.Q&&r.push(...s.encode("/Q "),...s.encode(" "+this.Q)),this.DS&&r.push(...s.encode("/DS "),...this.DS.toArray(e)),this.RC&&r.push(...s.encode("/RC "),...this.RC.toArray(e)),this.CL&&r.push(...s.encode("/CL "),...this.encodePrimitiveArray(this.CL,s)),this.IT&&r.push(...s.encode("/IT "),...s.encode(this.IT)),this.RD&&r.push(...s.encode("/RD "),...this.encodePrimitiveArray(this.RD,s)),this.LE&&r.push(...s.encode("/LE "),...s.encode(this.LE));const o=[...t.subarray(0,2),...r,...t.subarray(2,t.length)];return new Uint8Array(o)}toDto(){const e=this.getColorRect(),{bl:t,tr:s,br:r,tl:o,l:a,t:f,r:m,b:g,cob:p,cok:y,cop:C}=this.pointsPageCS,A={bl:t.truncate().toFloatArray(),tr:s.truncate().toFloatArray(),br:r.truncate().toFloatArray(),tl:o.truncate().toFloatArray(),l:a.truncate().toFloatArray(),t:f.truncate().toFloatArray(),r:m.truncate().toFloatArray(),b:g.truncate().toFloatArray(),cob:p?p.truncate().toFloatArray():null,cok:y?y.truncate().toFloatArray():null,cop:C?C.truncate().toFloatArray():null};return{annotationType:"/FreeText",uuid:this.$name,pageId:this.$pageId,dateCreated:this.CreationDate?.date?.toISOString()||new Date().toISOString(),dateModified:this.M?this.M instanceof LiteralString?this.M.literal:this.M.date.toISOString():new Date().toISOString(),author:this.T?.literal,textContent:this.Contents?.literal,rect:this.Rect,bbox:this.apStream?.BBox,matrix:this.apStream?.Matrix,points:A,color:e,strokeWidth:this.BS?.W??this.Border?.width??1,strokeDashGap:this.BS?.D??[3,0],intent:this.IT,justification:this.Q,calloutEndingType:this.LE}}async setTextContentAsync(e,t=!0){await super.setTextContentAsync(e,t),await this.updateStreamAsync(null)}async parsePropsAsync(e){await super.parsePropsAsync(e);const{parser:t,bounds:s}=e,r=s.contentStart||s.start,o=s.contentEnd||s.end;let a=await t.skipToNextNameAsync(r,o-1),f,m;for(;m=await t.parseNameAtAsync(a),m;)switch(a=m.end+1,f=m.value,f){case"/DA":case"/DS":case"/RC":a=await this.parseLiteralPropAsync(f,t,a,e.cryptInfo);break;case"/Q":const g=await t.parseNumberAtAsync(a,!0);if(g&&Object.values(justificationTypes).includes(g.value))this.Q=g.value,a=g.end+1;else throw new Error("Can't parse /Q property value");break;case"/LE":const p=await t.parseNameAtAsync(a,!0);if(p&&Object.values(lineEndingTypes).includes(p.value))this.LE=p.value,a=p.end+1;else throw new Error("Can't parse /LE property value");break;case"/CL":case"/RD":a=await this.parseNumberArrayPropAsync(f,t,a,!0);break;case"/IT":const y=await t.parseNameAtAsync(a,!0);if(y){if(y.value==="/FreeTextTypewriter"){this.IT=freeTextIntents.CLICK_TO_TYPE,a=y.end+1;break}else if(Object.values(freeTextIntents).includes(y.value)){this.IT=y.value,a=y.end+1;break}}throw new Error("Can't parse /IT property value");default:a=await t.skipToNextNameAsync(a,o-1);break}if(this.DS&&(this._defaultStyle=this.DS.literal),this.RC){const p=new DOMParser().parseFromString(this.RC.literal,"text/xml")?.querySelector("body");if(p){const y=p.getAttribute("style"),C=p.querySelector("p");this._rtStyle=y||"",this._rtText=C?.textContent||""}}if(!this.DA)throw new Error("Not all required properties parsed");(!this.C||this.C[0]===1&&this.C[1]===1&&this.C[2]===1)&&(this.C=[1,0,0])}calculateStreamMatrix(e,t){const s=u.subtract(t,e).getMagnitude(),r=new u,o=new u(s,0);return l.from4Vec2(r,o,e,t)}calculateStreamBbox(e,t){const{bl:s,tr:r,br:o,tl:a,l:f,t:m,r:g,b:p,cob:y,cok:C,cop:A}=e,w=this.minMargin,_=l.invert(t),E=u.applyMat3(s,_).truncate(),v=u.applyMat3(r,_).truncate(),k=u.applyMat3(o,_).truncate(),R=u.applyMat3(a,_).truncate(),L=u.applyMat3(f,_).truncate(),B=u.applyMat3(m,_).truncate(),X=u.applyMat3(g,_).truncate(),U=u.applyMat3(p,_).truncate(),M=y?u.applyMat3(y,_).truncate():null,F=C?u.applyMat3(C,_).truncate():null,$=A?u.applyMat3(A,_).truncate():null,ee=[E,v,k,R,F,$].filter(le=>le),{min:te,max:he}=u.minMax(...ee),re=new u(te.x-w,te.y-w),pe=new u(he.x+w,he.y+w);return{bbox:[re,pe],points:{bl:E,tr:v,br:k,tl:R,l:L,t:B,r:X,b:U,cob:M,cok:F,cop:$}}}updateAnnotCoords(e,t,s){const{bl:r,tr:o,cob:a,cok:f,cop:m}=e,[g,p]=s,y=this.getLocalBB();y.ll.set(g.x,g.y).applyMat3(t).truncate(),y.lr.set(p.x,g.y).applyMat3(t).truncate(),y.ur.set(p.x,p.y).applyMat3(t).truncate(),y.ul.set(g.x,p.y).applyMat3(t).truncate();const{min:C,max:A}=u.minMax(y.ll,y.lr,y.ur,y.ul);this.Rect=[C.x,C.y,A.x,A.y],m&&a?(f?this.CL=[m.x,m.y,f.x,f.y,a.x,a.y]:this.CL=[m.x,m.y,a.x,a.y],this.IT=freeTextIntents.WITH_CALLOUT):(this.CL=void 0,this.IT=freeTextIntents.PLAIN_TEXT),this.RD=[r.x-g.x,r.y-g.y,p.x-o.x,p.y-o.y]}getColorString(){const[e,t,s]=this.getColorRect();return`${e} ${t} ${s} RG 1 g`}getCalloutStreamPart(e){let t="";if(e.cop&&e.cob){t+=`
${e.cob.x} ${e.cob.y} m`,e.cok&&(t+=`
${e.cok.x} ${e.cok.y} l`),t+=`
${e.cop.x} ${e.cop.y} l`,t+=`
S`;const s=e.cok?[e.cok,e.cop]:[e.cob,e.cop],[r,o]=s,a=new u(0,0),f=new u(u.subtract(o,r).getMagnitude()),m=l.from4Vec2(a,f,r,o),g=this.getLineEndingStreamPart(f,this.LE,this.strokeWidth,"right"),p=m.toFloatShortArray();t+=`
q ${p[0].toFixed(5)} ${p[1].toFixed(5)} ${p[2].toFixed(5)} ${p[3].toFixed(5)} ${p[4].toFixed(5)} ${p[5].toFixed(5)} cm`,t+=g,t+=`
Q`}return t}async getTextStreamPartAsync(e,t){const s=this.strokeWidth,r=e.br.x-e.bl.x-2*s;if(r<=0)return"";const o=12;let a;this.Q?a=this.Q===justificationTypes.CENTER?"center":"right":a="left";const f=await this.updateTextDataAsync({maxWidth:r,fontSize:o,strokeWidth:s,textAlign:a,pivotPoint:"top-left"});if(!f)return"";let m=`
q 0 g 0 G`;const g=t.encoding.codeMap;for(const p of f.lines){if(!p.text)continue;const y=new u(p.relativeRect[0],p.relativeRect[1]).add(e.tl).add(new u(s,-s)).truncate();let C="";for(const A of p.text){const w=g.get(A);w&&(C+=w.toString(16).padStart(2,"0"))}m+=`
BT 0 Tc 0 Tw 100 Tz ${t.name} ${o} Tf 0 Tr`,m+=`
1 0 0 1 ${y.x} ${y.y+o*.2} Tm`,m+=`
<${C}> Tj`,m+=`
ET`}return m+=`
Q`,m}async generateApStreamAsync(e){if(!e)throw new Error("No key annotation point coordinates passed");const t=this.calculateStreamMatrix(e.tl,e.tr),{bbox:s,points:r}=this.calculateStreamBbox(e,t);this.updateAnnotCoords(r,t,s);const o=new XFormStream;o.Filter="/FlateDecode",o.LastModified=DateString.fromDate(new Date),o.BBox=[s[0].x,s[0].y,s[1].x,s[1].y],o.Matrix=t.toFloatShortArray(),o.Resources=new ResourceDict;const a=this.CA||1,f=this.strokeWidth,m=this.BS?.D[0]??this.Border?.dash??3,g=this.BS?.D[1]??this.Border?.gap??0,p=new GraphicsStateDict;p.AIS=!0,p.BM="/Normal",p.CA=a,p.ca=a,p.LW=f,p.D=[[m,g],0],p.LC=lineCapStyles.SQUARE,p.LJ=lineJoinStyles.MITER,o.Resources.setGraphicsState("/GS0",p);const y="arial",C=this._fontMap?.get(y);if(!C||!C.encoding?.codeMap)throw new Error(`Suitable font is not found in the font map: '${y}'`);o.Resources.setFont(C.name,C);const A=this.getColorString(),w=this.getCalloutStreamPart(r),_=`
${r.bl.x} ${r.bl.y} m
${r.br.x} ${r.br.y} l
${r.tr.x} ${r.tr.y} l
${r.tl.x} ${r.tl.y} l
b`,E=await this.getTextStreamPartAsync(r,C),v=`q ${A} /GS0 gs`+w+_+E+`