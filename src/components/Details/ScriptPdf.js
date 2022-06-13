import React, { useState } from 'react';
import ControlPanel from './ControlPanel';
import classes from './ScriptPdf.module.css'
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

function ScriptPdf() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className={`bg-inherit ${classes.pdf}`} >
    <ControlPanel numpages={numPages} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      <Document file="/assets/pdf/my_resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
}

export default ScriptPdf;