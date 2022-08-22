import React,{useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import classes from './ScriptPostedCards.module.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const backgroundChanger=(url)=>{
  
    let divImage={
  
      // backgroundImage: `linear-gradient(180deg, rgba(1, 3, 15, 0.252), rgba(73, 69, 68, 0.64)), url(${url})`,
        // borderRadius:'20px',
        backgroundImage:`url(${url})`,
         height:'300px',
         position:'relative',
         cursor:'pointer',
         width:'100%',
         color: "white",
      //    marginTop:'-70px',
      //    fontSize:'50px',
         padding:'142px',
         backgroundSize: '100% 100%',
         backgroundRepeat: 'no-repeat',
        //  cursor:'pointer',
        //  backgroundSize: '111%'
         
     };
    

  
   return divImage
}


function ScriptPostedCards(props) {
  const history=useHistory()
  useEffect(()=>{
    axios.post('http://localhost:3500/writersscripts',{
      username:props.id
    }).then(res=>{
      setScripts([...res.data])

    })
  })
    const [showContent,setShowContent]=useState(false);
    const [scripts,setScripts]=useState([])
    const showcontent=()=>{
        setShowContent(true)
        console.log('hovering');

    }
    const hideContent=()=>{
        setShowContent(false)

    }
    const scriptViewer=(id)=>{
      history.push(`/details/${id}`)
    }
  return (
    <div className={classes.gridWrapper}>
    <div className={classes.postedscripts}>
        {scripts.map((script)=>(
          <div onClick={scriptViewer.bind(null,script.script_id)} key={script.script_id} className={classes.background}   style={backgroundChanger(script.script_mini_poster)}>
      {/* <div className={classes.background}> */}
            <div className={classes.DisplayOver}>
              <h1 className={classes.BigTitle}>
                {script.script_title}
              </h1>
            <div className={classes.hover}>
             {/* <h4 className={classes.subTitle}>
               noce
             </h4>  */}
            <p className={classes.paragraph}>
              {script.description}

            </p>
              
            </div>

            </div>
          {/* </div> */}
          </div>
 
        ))}
        
    </div>
    </div>
  )
}

export default ScriptPostedCards







