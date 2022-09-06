import React,{useEffect, useState} from 'react';
import classes from './ScriptInfo.module.css';
import {Fab} from '@mui/material';
import {AddBoxRounded} from '@mui/icons-material'
import { Button } from '@mui/material';
import { DoneRounded } from '@material-ui/icons';
import { CloudDownloadRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ScripInfo(props) {
  console.log(props)
  const [genres,setGenres]=useState([props.detail.genres])
  const genre=genres.toString()
  const [saved,setSaved]=useState(false);

  useEffect(()=>{
    axios.post('http://localhost:3500/isSaved',{
      scriptId:props.scriptId

    },{
      headers:{
        'x-access-token':localStorage.getItem('token')?localStorage.getItem('token'):""
      }
    }).then(res=>{
      console.log(res)
      setSaved(res.data)
    }).catch(e=>{
      console.log(e)
    })
    
  },[props.scriptId])

  const saveClick=()=>{
    axios.post('http://localhost:3500/savescript',{
      scriptId:props.scriptId,
      state:saved
    },{
      headers:{
        'x-access-token':localStorage.getItem('token')?localStorage.getItem('token'):""
      }
    }).then(res=>{

      if(res.data.updated){

        setSaved((prevState)=>!prevState)
      }
    }).catch(e=>{
      console.log(e)
    })
      

  }

  return (
    <div className={`${classes.content} text-white p-10`}>
      <div className={classes.scriptmajor}>
     <h1 className='text-xl font-bold text-left' style={{    paddingBottom: '10px',
    paddingLeft: '7px',
}}>{props.detail.script_title}</h1>
     <div className='flex'>
      <img className={classes.miniposter} src={props.detail.script_mini_poster}/>
      <div className={classes.button}>
       {props.episodeState &&
        <h1 style={{fontSize:'43px'}}>{`S${props.season} E${props.episode}`}</h1>
          }
      <Fab   id={classes.download} className='m-4 text-l p-7 justify-center items-center' style={{zIndex:'0'}} ><a href={props.detail.script_pdf_url}> <CloudDownloadRounded/></a></Fab>
         
         <Fab color="primary" aria-label="add" onClick={saveClick} style={{zIndex:'0'}} id={classes.savebutton}>
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
    <Link to={`/Profile/${props.detail.username}/${1}`}> <h2 className='text-l font-normal text-left'>Uploaded by: {props.detail.username} </h2></Link>

     </div>
    </div>
  )
}

export default ScripInfo