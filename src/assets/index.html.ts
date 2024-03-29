/// <reference path="./assets.d.ts" />

import { Icons } from "ts-viewers-core";

export const mainHtml = /*html*/`
  <div id="main-container" tabindex="0" class="hide-previewer disabled" 
    ondragstart="return false;" ondrop="return false;">
    <div id="viewer"></div>
    <div id="previewer"></div>
    <div id="top-panel"> 
      <div class="subpanel panel-item">
        <div id="whatsNew"></div>
        <div id="toggle-previewer" class="panel-button panel-item">
          <img src="${Icons.icon_sidebar}"/>
        </div>
        <div id="toggle-expand" class="panel-sizers panel-button panel-item" type="button" title="Expand Window"><embed class="svg" src="/expand.svg" /></div>
        <div id="toggle-shrink" class="panel-sizers panel-button panel-item" type="button" title="Shrink Window"><embed class="svg" src="/shrink.svg" /></div> 
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
`;

export const passwordDialogHtml =  /*html*/`
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
`;
