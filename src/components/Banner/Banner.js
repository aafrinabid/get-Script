import { Button } from '@mui/material'
import React, { useEffect,useState } from 'react'
import classes from './Banner.module.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NavBar from '../UI/NavBar';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Banner() {
  const history=useHistory()
const [script,setScript] = useState([])
console.log(script)
const [isLoading,setIsLoading] = useState(false)
const [title,setTitle]=useState('')

useEffect(()=>{
  
    setIsLoading(true)
    axios.get('http://localhost:3500/bannerscript',{
      headers:{
    
      }
    }).then((res)=>{
    
      setScript(res.data.result)
      setTitle(res.data.result.script_title)
      setIsLoading(false)
    
    }).catch(e=>{
      console.error(e)
      setIsLoading(false)
    })
    
 
  // first();
  const intervalId=setInterval(()=>{
    setIsLoading(true)
    axios.get('http://localhost:3500/bannerscript',{
      headers:{
    
      }
    }).then((res)=>{
    
      setScript(res.data.result)
      setTitle(res.data.result.script_title)
      setIsLoading(false)
    
    }).catch(e=>{
      console.error(e)
      setIsLoading(false)
    })
  },10000)
  return ()=>clearInterval(intervalId)
 
},[])



  let url=script.script_poster
  const divImage =  {
    
    backgroundImage: `linear-gradient(180deg, rgba(1, 3, 15, 0.952), rgba(73, 69, 68, 0.64)), url(${url})`,
       height:'400px',
      //  width:'100vw',
    //    marginTop:'-70px',
    //    fontSize:'50px',
       backgroundSize: '100%',
       backgroundRepeat: 'no-repeat',
       overflow:'hidden',
    transition: 'all 1.5s',

   };
   const clickHandler=(id)=>{
    history.push(`/details/${id}`)
   }
  
  return (
    <div className={classes.banner}  style={divImage}>
      <div className={`${classes.details}`}>
        {/* <img className={classes.titleimage} src="https://occ-0-6058-3663.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUJuexBo9PcuDem99SxCIRkLb6vllV0EfehwnalimUa6Wqqm8gSFD8zkIjAUzPt4byng_57yB8mtGQQOkeE7tXaj6vT7kcZPjWYLARDnTtWQ0BpJg-XYmiEXRN1IcSPFw4iAb9b9vIDg9ggS79aLU8shH8gk_YsyLIAnQfKPgyreG6t667uzow.png?r=e43" />
         */}
         {/* <h1 className='text-3xl'>holly shit</h1> */}

         <h1 className='text-white text-3xl'>{title.toUpperCase()}</h1>
        <h1 className={`text-green-50 text-xs ml-5 ${classes.description}`}>{script.description}</h1>        
        <div className='buttons' id={classes.buttons}> 
       <a href={script.script_pdf_url}> <Button  variant='contained' id={classes.download} size='large'>Download</Button></a>
        <Button  variant='contained' id={classes.info} size='large' onClick={clickHandler.bind(null,script.script_id)}>View More</Button>
        {/* <FavoriteBorderIcon fontSize='large' className={classes.like}/> */}
       </div>
        </div>
        <div className={classes.rating}>

          
       </div>


    </div>
  )
}

export default Banner