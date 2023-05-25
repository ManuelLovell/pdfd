import { AnnotEventDetail, TsPdfViewerOptions, TsPdfViewer } from "ts-pdf"
import '/src/style.css'
import path from "path";

//const filePath = path.relative("./src/pdf.worker.min.js");
let url = new URL("lib/foo/bar.js", window.location.origin);
console.log(url.toString());
let worker = new Worker(url.toString());
console.log(worker);

async function run(): Promise<void>
{
    const options: TsPdfViewerOptions = {
        containerSelector: "#app",
        workerSource: url.toString(), // path to the PDF.js worker script
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
}

run();