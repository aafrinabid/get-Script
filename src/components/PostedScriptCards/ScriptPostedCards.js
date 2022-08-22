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
const backgroundChanger=(url)=>{
  
    let divImage={
  
      // backgroundImage: `linear-gradient(180deg, rgba(1, 3, 15, 0.252), rgba(73, 69, 68, 0.64)), url(${url})`,
        backgroundImage:`url(${url})`,
         height:'300px',
         position:'relative',
         cursor:'pointer',
         width:'100%',
         color: "white",
      //    marginTop:'-70px',
      //    fontSize:'50px',
         padding:'142px',
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
        //  cursor:'pointer',
        //  backgroundSize: '111%'
         
     };
    

  
   return divImage
}

function ScriptPostedCards(props) {
  useEffect(()=>{
    axios.post('/fetchScripts',{
      id:props.id
    })
  })
    const [showContent,setShowContent]=useState(false);
    const scripts=[1,2,3,4,6,7];
    const showcontent=()=>{
        setShowContent(true)
        console.log('hovering');

    }
    const hideContent=()=>{
        setShowContent(false)

    }
  return (
    <div className={classes.gridWrapper}>
    <div className={classes.postedscripts}>
        {scripts.map((i)=>(
          <div key={i} className={classes.background}   style={backgroundChanger('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')}>
      {/* <div className={classes.background}> */}
            <div className={classes.DisplayOver}>
              <h1 className={classes.BigTitle}>
                Tinder
              </h1>
            <div className={classes.hover}>
             {/* <h4 className={classes.subTitle}>
               noce
             </h4>  */}
            <p className={classes.paragraph}>
              MOre description herererer

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







