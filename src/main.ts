import OBR from "@owlbear-rodeo/sdk";
import { TsPdfViewer, AnnotEventDetail, TsPdfViewerOptions } from "./ts-pdf";
import * as Utilities from './utilities';
import '/src/style.css'

let currentHeight = 800;
let currentWidth = 600;
let currentTheme: "LIGHT" | "DARK";

const addSize = 200;

OBR.onReady(async ()=>
{
    // Set theme accordingly
    const theme = await OBR.theme.getTheme();
    currentTheme = theme.mode;
    Utilities.SetThemeMode(theme, document);
    OBR.theme.onChange((theme) =>
    {
        currentTheme = theme.mode;
        Utilities.SetThemeMode(theme, document);
    })

   await RenderPDFReader();
});

async function RenderPDFReader(): Promise<void>
{
    const options: TsPdfViewerOptions = {
        containerSelector: "#app",
        workerSource: "./pdf.worker.min.js", // path to the PDF.js worker script
        fileButtons: ["open", "save"], // you can check other properties using your editor hints
        disabledModes: ["comparison"],
        annotChangeCallback: (detail: AnnotEventDetail) =>  {
            if (detail.type === "focus" 
              || detail.type === "select"
              || detail.type === "render") {
              return;
            }
            console.log(detail);
          },
    };

    const viewer = new TsPdfViewer(options);
    await viewer.openPdfAsync("./example2.pdf");

    const expandButton = document.querySelector("#app").shadowRoot.querySelector("#toggle-expand") as HTMLInputElement;
    expandButton.onclick = async function ()
    {
        currentHeight += addSize;
        currentWidth += addSize;

        await OBR.action.setHeight(currentHeight);
        await OBR.action.setWidth(currentWidth);
        setTimeout(() => viewer.onZoomFitViewerClick(), 250);
    };
    const shrinkButton = document.querySelector("#app").shadowRoot.querySelector("#toggle-shrink") as HTMLInputElement;
    shrinkButton.onclick = async function ()
    {
        currentHeight -= addSize;
        currentWidth -= addSize;

        await OBR.action.setHeight(currentHeight);
        await OBR.action.setWidth(currentWidth);
        viewer.onZoomFitViewerClick();
        setTimeout(() => viewer.onZoomFitViewerClick(), 250);
    };
}