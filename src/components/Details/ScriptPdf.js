import React, { useState } from 'react';
import ControlPanel from './ControlPanel';
import classes from './ScriptPdf.module.css'
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import { Modal } from '@mui/material';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

function ScriptPdf(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const url =props.detail.script_pdf_url

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const className=classes.controlpanel

  return (
    <Modal
    open={props.scriptHandler}
    onClose={props.scriptHandler}
    aria-labelledby="parent-modal-title"
    aria-describedby="parent-modal-description"
  >

      

    <div className={`bg-inherit ${classes.pdf}`} >
    <ControlPanel numpages={numPages} pageNumber={pageNumber} setPageNumber={setPageNumber} className={className} scriptHandler={props.scriptHandler}/>
    {console.log('whereeeeee')}
      <Document  file={url} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
    </Modal>
  );
}

export default ScriptPdf;