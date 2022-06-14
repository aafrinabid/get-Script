// import Modal from '../UI/Modal';
import React from 'react';
import Classes from './ScriptTable.module.css'
import { Modal } from '@mui/material';
import { Box } from '@mui/system';
  

function ScriptTable(props) {
    const pitch=['The origin','Human Hook','Character','Desires','Obstacles','Highlights','Open Road']
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
            <div className={Classes.tablecontent}>
            <h1 className='border-gray-300  border-transparent text-center'>{i}</h1>
            <h1 className='border-gray-300  border-transparent text-center'>{e}</h1>
            <h1 className={`border-gray-300 border-transparent ${Classes.description} text-left`}>Vince was talking to his mother but later he saw that its his mother that was hurt so i was never wrong lorem ipsam</h1>
           </div>
        ))}



    </div>
    </div>
    {/* </Box> */}
        </Modal>       
  )
}

export default ScriptTable