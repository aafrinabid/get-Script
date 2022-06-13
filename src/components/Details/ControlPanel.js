import React from 'react';
import { Forward } from '@mui/icons-material';
import classes from './ControlPanel.module.css';


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
      <div className={`${classes.controlpanel} p-4`}>
          <Forward className='rotate-180 text-white text-4xl cursor-pointer' onClick={pageBackward}/>
    <h1 className='text-xl font-semibold text-white px-8'>
    Page {props.pageNumber} of { numPages}
  </h1>
  <Forward className='text-white text-4xl cursor-pointer' onClick={pageForward}/>
  </div>
  )
}

export default ControlPanel