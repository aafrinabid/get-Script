import React,{useState} from 'react';
import classes from './ScriptInfo.module.css';
import {Fab} from '@mui/material';
import {AddBoxRounded} from '@mui/icons-material'
import { Button } from '@mui/material';
import { DoneRounded } from '@material-ui/icons';
import { CloudDownloadRounded } from '@mui/icons-material';

function ScripInfo(props) {
  const [genres,setGenres]=useState([props.detail.genres])
  const genre=genres.toString()
  const [saved,setSaved]=useState(false);
  const saveClick=()=>{
      setSaved((prevState)=>!prevState)
  }

  return (
    <div className={`${classes.content} text-white p-10`}>
      <div className={classes.scriptmajor}>
     <h1 className='text-xl font-bold text-left'>{props.detail.script_title}</h1>
     <div className='flex'>
      <img className={classes.miniposter} src={props.detail.script_mini_poster}/>
      <div className={classes.button}>
      <Fab   id={classes.download} className='m-4 text-l p-7 justify-center items-center' ><CloudDownloadRounded/></Fab>
         
         <Fab color="primary" aria-label="add" onClick={saveClick} id={classes.savebutton}>
          {!saved && <AddBoxRounded  />}   
          {saved &&  <DoneRounded />}  
         </Fab>
         </div>
      </div>
     </div>
     <div className={classes.details}>
     <h2 className='text-l font-normal pr-5 text-left col-span-2'>{props.detail.description}</h2>
     <h2 className='text-l font-normal text-left'>Genres :{genre}</h2>
     <h2 className='text-l font-normal text-left'>Language: English </h2>
     <h2 className='text -l font-normal text-left'>Type: {props.detail.script_type}</h2>
     <h2 className='text-l font-normal text-left'>Uploaded by: {props.detail.username} </h2>

     </div>
    </div>
  )
}

export default ScripInfo