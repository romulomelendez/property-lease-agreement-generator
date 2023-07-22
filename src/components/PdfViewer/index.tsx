import { useState } from 'react'

import { Worker, Viewer } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'

// Styles import
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { PdfContainer } from './styles'

// PDF file import
import pdfFilePath from '../../assets/model.pdf'

export const PdfViewer: React.FC = () => {

  const [pdfPlugin] = useState(defaultLayoutPlugin())
  const [pdfFile] = useState(pdfFilePath)

  return (

    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <PdfContainer>
        <Viewer fileUrl={pdfFile} plugins={[pdfPlugin]} theme="dark" />
      </PdfContainer>
    </Worker>
    
  )

}
