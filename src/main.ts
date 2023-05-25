import { AnnotEventDetail, TsPdfViewerOptions, TsPdfViewer } from "ts-pdf"
import '/src/style.css'
async function run(): Promise<void>
{
    const options: TsPdfViewerOptions = {
        containerSelector: "#app",
        workerSource: "pdfjsdist/pdf.worker.min.js", // path to the PDF.js worker script
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