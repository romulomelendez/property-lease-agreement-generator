"use client"

import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core'

// Styles
import '@react-pdf-viewer/core/lib/styles/index.css'

export const PdfViewer: React.FC = () => (
    <div className="w-screen md:w-1/2">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer fileUrl="/model.pdf" theme="dark" defaultScale={SpecialZoomLevel.PageFit} />
        </Worker>
    </div>
)