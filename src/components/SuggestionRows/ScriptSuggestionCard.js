import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@material-ui/core';
import classes from './ScriptSuggestionCard.module.css';
import {Fab} from '@mui/material';
import {AddBoxRounded} from '@mui/icons-material';
import { DoneRounded } from '@material-ui/icons';


export default function ImgMediaCard() {
    const scripts=[1,2,3,4,6,7]
    const [saved,setSaved]=useState(false);
    const saveClick=()=>{
        setSaved((prevState)=>!prevState)
    }

  return (
        <div className={classes.grid}>
        {scripts.map((e,i)=>(
<Card key={i} className={classes.card} sx={{ maxWidth: 345,height:650 }}>
        <CardMedia
        className={classes.poster}
          component="img"
          alt="green iguana"
          height="140"
          image="https://i.pinimg.com/originals/11/1c/5c/111c5c9ad99661af2d80e38948cf29d8.jpg"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="div" className='p-2'>
            Interstellar
          </Typography>
          <Fab color="primary" aria-label="add" onClick={saveClick} id={classes.savebutton} className='ml-12 mb-2'>
          {!saved && <AddBoxRounded  />}   
          {saved &&  <DoneRounded />}  
         </Fab>
          <Typography variant="body2" color="text.secondary" className={`text-white text-s ${classes.description}`}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
        <Button className='bg-slate-600 text-white  ml-10'  variant='contained' id={classes.download} size='large'>Download</Button>
         

        </CardActions>
      </Card>
        ))}
        
</div>

    
  );
}
