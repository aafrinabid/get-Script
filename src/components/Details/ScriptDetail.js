import React,{useEffect, useState} from 'react';
import ScriptCard from './ScriptCard';
import classes from './ScriptDetail.module.css'
import SuggestionRows from '../SuggestionRows/SuggestionRows'
import ScriptInfo from './ScriptInfo';
import ScriptTable from './ScriptTable';
import ScriptPdf from './ScriptPdf'
import Rows from '../Rows/Rows';
import Button from '@mui/material/Button';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import AddEpisodeModal from './AddEpisodeModal';
import Episodes from './Episodes';


function ScriptDetail() {
    const history=useHistory();
    const params=useParams()
    const [detail,setDetail]=useState([]);
    const [genres,setGenres]=useState([])
    const [episodeState,setEpisodeState]=useState(false)
    const [scriptwriterId,setScriptwriterId]=useState('')
    const [userId,setUserId]=useState('')
    const [featured,setFeatured]=useState(false)
    console.log(genres)
    console.log(detail.script_id)
    // const genres=detail.genres
    console.log(detail)
    const [isLoading,setIsLoading]=useState(false)
    const {scriptId}=params
    console.log(scriptId)
    useEffect(()=>{
        axios.get('http://localhost:3500/getId',{
          headers:{
            'x-access-token':localStorage.getItem('token')?localStorage.getItem('token'):""
          }
        }).then(res=>{
          console.log(res.data)
          // userId=res.data.userId
        //   role=res.data.role
          setUserId(res.data.userId)
          // const recId=r
        })
   
    },[])

    useEffect(()=>{
       setIsLoading(true)
        axios.get('http://localhost:3500/scriptdetails',{
            headers:{
                'scriptid':scriptId
            }
        }).then((res)=>{
            console.log(res.data)
            setDetail(res.data.result)
            setGenres(res.data.result.genres)
            setScriptwriterId(res.data.result.id)
            setFeatured(res.data.result.featured)
            setEpisodeState(res.data.episodeState)
            setIsLoading(false)
            
            
        }).catch(e=>{
            setIsLoading(false)
            console.log(e,'poppppppssssss')

        })

    },[scriptId])
    const [seenTable,setSeenTable]=useState(false);
    const [seenScript,setSeenScript]=useState(false);

    const clickHandler=()=>{
        setSeenTable((prevSeen=>!prevSeen))
    }
    const scriptClickHandler=()=>{
        console.log('closssing')
        setSeenScript((prevSeen=>!prevSeen))
    }
    const paymentHandler=()=>{
        history.push(`/featured/${scriptId}`)
    }

  return (
    <div className={classes.scriptdetails}>
        {isLoading && <h1>loading....</h1>}
        {!isLoading &&  
        <>
        <ScriptCard img={detail.script_poster}/>
        <ScriptInfo detail={detail} scriptId={scriptId}/>
        <div className={classes.tablediv}>
           {!seenTable && <Button variant='text' className='text-4xl font-bold text-white p-7' onClick={clickHandler}>Show Pitch</Button>} 
        {seenTable &&<ScriptTable detail={detail} clickHandler={clickHandler}/>}
        </div>
        <div className='bg-inherit'>
       {!seenScript && <Button variant='contained' className='bg-black text-white my-3' onClick={scriptClickHandler}>Script Preview</Button>} 
        {seenScript && <ScriptPdf detail={detail} className='pt-4' scriptHandler={scriptClickHandler}/>}
        </div> 
        {userId===scriptwriterId && detail.entertainment!=='MOVIE' &&

        <AddEpisodeModal scriptId={scriptId}/>
        }
        <div className='bg-inherit'>
       { userId===scriptwriterId && !featured && <Button variant='contained' className='bg-black text-white my-3' onClick={paymentHandler}>Get Featured</Button>} 
        </div> 

        <div className={classes.suggestrows}>
            {episodeState && 
            <div>
                <Episodes scriptId={scriptId}/>
        
        </div>}
            <h1 className='text-xl text-white p-5'>You may also like these scripts...</h1>
            {
               
                genres.map(genre=>(
                    

                    <Rows screenper='5' inDetail={'true'} genre={genre} scriptId={scriptId}/>
                ))

            }
        </div>
        </>
        }
        </div>


  )
}

export default ScriptDetail