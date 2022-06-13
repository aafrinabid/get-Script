import React,{useState} from 'react';
import classes from './ScriptInfo.module.css';
import {Fab} from '@mui/material';
import {AddBoxRounded} from '@mui/icons-material'
import { Button } from '@mui/material';
import { DoneRounded } from '@material-ui/icons';


function ScripInfo() {
  const [saved,setSaved]=useState(false);
  const saveClick=()=>{
      setSaved((prevState)=>!prevState)
  }

  return (
    <div className={`${classes.content} text-white p-10`}>
      <div className={classes.scriptmajor}>
     <h1 className='text-xl font-bold text-left'>The Cosmos</h1>
     <div className='flex'>
      <img className={classes.miniposter} src="https://images.alphacoders.com/530/530505.jpg"/>
      <div className={classes.button}>
      <Button  variant='contained' id={classes.download} className='m-2 justify-center items-center' size='large'>Download</Button>
         
         <Fab color="primary" aria-label="add" onClick={saveClick} id={classes.savebutton}>
          {!saved && <AddBoxRounded  />}   
          {saved &&  <DoneRounded />}  
         </Fab>
         </div>
      </div>
     </div>
     <div className={classes.details}>
     <h2 className='text-l font-normal pr-5 text-left col-span-2'>When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.</h2>
     <h2 className='text-l font-normal text-left'>Genres :Military, Science Fiction, Astronomy</h2>
     <h2 className='text-l font-normal'>Language: English </h2>
     <h2 className='text -l font-normal text-left'>Type: Series Concept</h2>
     <h2 className='text-l font-normal'>Uploaded by: Babu Raj </h2>

     </div>
    </div>
  )
}

export default ScripInfo