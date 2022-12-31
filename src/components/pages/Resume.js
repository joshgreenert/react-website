import React from 'react';
import PDF from "../pdfs/Resume.pdf";
import '../../App.css';

function Resume() {
  return (
      <embed
        src={PDF}
        type="application/pdf"
        height={950}
        width="100%"
      />
  );
}
export default Resume;