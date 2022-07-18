import React from 'react';
import {io} from 'socket.io-client'
// import { useDispatch } from 'react-redux';
// import { messageActions } from '../assets/store/messageSlice';

// const socket =io('http://localhost:3001')


function MessageBox(props){
  // const dispatch= useDispatch();
    // console.log(props)
    let style
    let direction
    if(props.from===true){
        style={
            // padding:'5px 0px',
            paddingLeft:'5px',

            width:'50%',
            borderRadius:'10px',
            // justifyContent:'flex-start',
            alignItems:'flex-end',
            border:'0px solid black',
           margin:'5px 0px',
           backgroundColor:'rgb(239,238,238)'

        }
        direction='flex-end'
        
    }else{
         style={
            // padding:'5px 0px',
            paddingLeft:'5px',

            width:'50%',
            alignItems:'flex-start',
            borderRadius:'13px',
            justifyContent:'flex-start',
            border:'.5px solid rgb(239,238,238)',
            backgroundColor:'rgb(255,254,254)'


        }
        direction='flex-start'

        
    }
  return (
    <div style={{display:'flex',justifyContent:direction,padding:'2px 5px'}}>
    <div style={style}>
       <p style={{paddingRight:'5px'}}>{props.message}</p>
     </div>
     </div>
  )
}

export default MessageBox