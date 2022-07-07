import React from 'react';
import { Forward } from '@mui/icons-material';
import classes from './ControlPanel.module.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import clas from './ScriptPdf.module.css';

function ControlPanel(props) {
    const setPageNumber=props.setPageNumber;
    const numPages=props.numpages
    const pageForward=()=>{
        console.log("clickeddddd",props);
        let pageNumber=props.pageNumber
        
        if(props.pageNumber>props.numpages){
          return            
        }else{
            pageNumber++
            console.log(pageNumber);
            props.setPageNumber(pageNumber)

        }
        
    }

    const pageBackward=()=>{
        let pageNumber=props.pageNumber

        if(props.pageNumber==1){
          return            
        }else{
            pageNumber--
            setPageNumber(pageNumber)

        }
        
    }



  return (
      <div className={`${props.className} fixed pt-4 px-4`} >
          <ArrowBackIcon className='rotate-180 text-white text-4xl cursor-pointer pr-4'  onClick={pageBackward}/>
    <h1 className={`${classes.control}  `}   >
    Page {props.pageNumber} of { numPages}
  </h1>
  <ArrowForwardIcon className='text-white text-4xl cursor-pointer' onClick={pageForward}/>
  </div>
  )
}

export default ControlPanel