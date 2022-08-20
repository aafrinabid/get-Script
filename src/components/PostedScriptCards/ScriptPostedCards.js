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
    <div className={`${classes.postedscripts}  bg-inherit`}>
        {scripts.map((i)=>(
             <Card key={i} sx={{ maxWidth: 345 }}    className= {`bg-black text-white ${classes.scriptCard}`}  >
             <CardMedia
             className={`${classes.image}`}
               component="img"
               height="340"
               image="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
               alt="green iguana"
             />
             <Typography gutterBottom variant="h5" component="div">
                 Lizard
               </Typography>
             <CardContent className= { `${classes.description}`} >
               
               <Typography variant="body2" color="text.secondary" className='text-white'>
                 Lizards are a widespread group of squamate reptiles, with over 6,000
                 species, ranging across all continents except Antarctica
               </Typography>
             </CardContent>
           </Card>
        ))}
        
    </div>
  )
}

export default ScriptPostedCards