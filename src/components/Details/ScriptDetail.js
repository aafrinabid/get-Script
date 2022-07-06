import React,{useEffect, useState} from 'react';
import ScriptCard from './ScriptCard';
import classes from './ScriptDetail.module.css'
import SuggestionRows from '../SuggestionRows/SuggestionRows'
import ScriptInfo from './ScriptInfo';
import ScriptTable from './ScriptTable';
import ScriptPdf from './ScriptPdf'
import Rows from '../Rows/Rows';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function ScriptDetail() {
    const params=useParams()
    const [detail,setDetail]=useState([]);
    console.log(detail)
    const [isLoading,setIsLoading]=useState(false)
    const {scriptId}=params
    console.log(scriptId)
    useEffect(()=>{
       setIsLoading(true)
        axios.get('http://localhost:4000/scriptdetails',{
            headers:{
                'scriptid':scriptId
            }
        }).then((res)=>{
            setDetail(res.data.result)
            setIsLoading(false)
       
        }).catch(e=>{
            setIsLoading(false)

        })

    },[])
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
        {isLoading && <h1>loading....</h1>}
        {!isLoading &&  
        <>
        <ScriptCard img={detail.script_poster}/>
        <ScriptInfo detail={detail}/>
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
        </>
        }
        </div>


  )
}

export default ScriptDetail