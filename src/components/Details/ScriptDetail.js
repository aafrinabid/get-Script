import React,{useState} from 'react';
import ScriptCard from './ScriptCard';
import classes from './ScriptDetail.module.css'
import SuggestionRows from '../SuggestionRows/SuggestionRows'
import ScriptInfo from './ScriptInfo';
import ScriptTable from './ScriptTable';
import ScriptPdf from './ScriptPdf'
import Rows from '../Rows/Rows';
import Button from '@mui/material/Button';


function ScriptDetail() {
    const [seenTable,setSeenTable]=useState(false);
    const [seenScript,setSeenScript]=useState(false);

    const clickHandler=()=>{
        setSeenTable((prevSeen=>!prevSeen))
    }
    const scriptClickHandler=()=>{
        console.log('closssing')
        setSeenScript((prevSeen=>!prevSeen))
    }

  return (
    <div className={classes.scriptdetails}>
        <ScriptCard />
        <ScriptInfo />
        <div className={classes.tablediv}>
           {!seenTable && <Button variant='text' className='text-4xl font-bold text-white p-7' onClick={clickHandler}>Show Pitch</Button>} 
        {seenTable &&<ScriptTable clickHandler={clickHandler}/>}
        </div>
        <div className='bg-inherit'>
       {!seenScript && <Button variant='contained' className='bg-black text-white my-3' onClick={scriptClickHandler}>Script Preview</Button>} 
        {seenScript && <ScriptPdf className='pt-4' scriptHandler={scriptClickHandler}/>}
        </div> 
        <div className={classes.suggestrows}>
            <h1 className='text-xl text-white p-5'>You may also like these scripts...</h1>
            <Rows screenper='4' />
        </div>
        </div>


  )
}

export default ScriptDetail