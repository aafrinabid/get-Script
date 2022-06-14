import { Button } from '@mui/material'
import React from 'react'
import classes from './Banner.module.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NavBar from '../UI/NavBar';

function Banner() {
  let url='https://wallpaperaccess.com/full/1268822.jpg'
  const divImage =  {
    
    backgroundImage: `linear-gradient(180deg, rgba(1, 3, 15, 0.952), rgba(73, 69, 68, 0.64)), url(${url})`,
       height:'550px',
    //    marginTop:'-70px',
    //    fontSize:'50px',
    //    backgroundSize: '100%',
       backgroundRepeat: 'no-repeat',
   };
  
  return (
    <div className={classes.banner}  style={divImage}>
      <div className={classes.details}>
        <img className={classes.titleimage} src="https://occ-0-6058-3663.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUJuexBo9PcuDem99SxCIRkLb6vllV0EfehwnalimUa6Wqqm8gSFD8zkIjAUzPt4byng_57yB8mtGQQOkeE7tXaj6vT7kcZPjWYLARDnTtWQ0BpJg-XYmiEXRN1IcSPFw4iAb9b9vIDg9ggS79aLU8shH8gk_YsyLIAnQfKPgyreG6t667uzow.png?r=e43" />
        <h1 className={`text-green-50 text-s ml-2 ${classes.description}`}>Ted Mosby, an architect, recounts to his children the events that led him to meet their mother. His journey is made more eventful by the presence of his friends Lily, Marshall, Robin and Barney.</h1>        
        <div className='buttons' id={classes.buttons}> 
        <Button  variant='contained' id={classes.download} size='large'>Download</Button>
        <Button  variant='contained' id={classes.info} size='large'>View More</Button>
        <FavoriteBorderIcon fontSize='large' className={classes.like}/>
       </div>
        </div>
        <div className={classes.rating}>
          
       </div>


    </div>
  )
}

export default Banner