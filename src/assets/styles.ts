/// <reference path="./assets.d.ts" />

import { getCommonStyles } from "ts-viewers-core";

const appName = "tspdf";

export const styles = /*html*/`
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
  .svg {
    width: 25px;
    height: 25px;
    pointer-events: none;
  }
  .panel-button
  {
    filter: var(--invert);
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

  @keyframes battle-system-glow {
    0% {
        box-shadow: 0 0 2px 0px red;
    }

    50% {
        box-shadow: 0 0 8px 4px red;
    }

    100% {
        box-shadow: 0 0 2px 0px red;
    }
}

@keyframes shine {
    0% {
        background-position: 100% 0;
    }

    100% {
        background-position: -100% 0;
    }
}

.whats-new-shine {
    animation: battle-system-glow 1.5s infinite;
    border-radius: 50%;
}

/* Tool tips*/
.information {
    position: relative;
    display: inline-block;
    cursor: help;
}

.information:hover::after {
    content: attr(data-information);
    display: block;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-75%);
    padding: 5px;
    background-color: var(--OBR-offset-background);
    color: var(--OBR-font);
    border: 2px solid grey;
    border-radius: 4px;
    white-space: pre-line;
    z-index: 1;
}

.imageIcon {
    width: 20px;
    height: 20px;
    margin-left: 6px;
}

.clickable {
    filter: var(--invert);
    background-color: transparent !important;
    border-style: none !important;
    vertical-align: text-bottom;
    height: 20px;
    width: 20px;
    margin-right: 10px;
}
</style>
`;
