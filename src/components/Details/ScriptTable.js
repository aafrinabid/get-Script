// import Modal from '../UI/Modal';
import React from 'react';
import Classes from './ScriptTable.module.css'
import { Modal } from '@mui/material';
import { Box } from '@mui/system';
  

function ScriptTable(props) {
    const pitch=['The origin','Human Hook','Character','Desires','Obstacles','Highlights','Open Road']
    const pitcDetail=[props.detail.the_origin, props.detail.human_hook,props.detail.character,props.detail.desires,props.detail.obstacles,props.detail.highlights,props.detail.open_road ]
    // pitch.map(p=>)
  return (
      <Modal 
      disableEnforceFocus
      keepMounted
      open={props.clickHandler}
      onClose={props.clickHandler}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
  >
      {/* <Box sx={style}> */}
      <div className= {Classes.tableborder}>
    <div className={` text-white shadow  ${Classes.table}`}>
        
        {pitch.map((e,i)=>(
            <div key={i}  className={Classes.tablecontent}>
            <h1 className='border-gray-300  border-transparent text-center'>{i+1}</h1>
            <h1 className='border-gray-300  border-transparent text-center'>{e}</h1>
            <h1 className={`border-gray-300 border-transparent ${Classes.description} text-left`}>{pitcDetail[i]}</h1>
           </div>
        ))}



    </div>
    </div>
    {/* </Box> */}
        </Modal>       
  )
}

export default ScriptTable