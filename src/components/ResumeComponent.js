import React from 'react';
import { Document, Page } from 'react-pdf';

function ResumeComponent() {
  return(
    <div>
      <h1>Resume</h1>
      <Document file="../../pdfs/Resume.pdf">
        <Page pageNumber={1} />
      </Document>
    </div>
  )
}
export default ResumeComponent