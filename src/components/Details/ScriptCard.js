import { Button } from '@mui/material';
import React, { useState } from 'react'
import classes from './ScriptCard.module.css';
import {Fab} from '@mui/material';
import {AddBoxRounded} from '@mui/icons-material'
// import {FavoriteIcon} from '@mui/icons-material'
import { DoneRounded } from '@material-ui/icons';

function ScriptCard(props) {

    let url=props.img
    const divImage =  {
        backgroundImage: `url(${url})`,
           height:'400px',
        //    marginTop:'-70px',
        //    fontSize:'50px',
           backgroundSize: '100%',
           backgroundRepeat: 'no-repeat',
       };
  return (
      <div className={`${classes.border}`} style={divImage}>
        <div className={classes.scriptcard} >
        {/* <img className={classes.titleimage} src="https://occ-0-6058-3663.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUJuexBo9PcuDem99SxCIRkLb6vllV0EfehwnalimUa6Wqqm8gSFD8zkIjAUzPt4byng_57yB8mtGQQOkeE7tXaj6vT7kcZPjWYLARDnTtWQ0BpJg-XYmiEXRN1IcSPFw4iAb9b9vIDg9ggS79aLU8shH8gk_YsyLIAnQfKPgyreG6t667uzow.png?r=e43" /> */}
        {/* <div className={classes.button}>
        <Button  variant='contained' id={classes.download} size='large'>Download</Button>
         
         <Fab color="primary" aria-label="add" onClick={saveClick} id={classes.savebutton}>
          {!saved && <AddBoxRounded  />}   
          {saved &&  <DoneRounded />}  
         </Fab>
         
            
        </div> */}
        </div>
        <div>3+</div>
        </div>
  )
}

export default ScriptCard