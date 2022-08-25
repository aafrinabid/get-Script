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
            padding:'0 7px',
            paddingBottom:'3px',
            // border:'2.5px solid #9719f6',
            backgroundColor:'#005d4a',
            wordBreak:'break-all',

            width:props.message.length>35?'50%':'',
            borderRadius:'10px',
            // justifyContent:'flex-start',
            alignItems:'flex-end',
           margin:'5px 0px',
           color:'#bedad6',

        }
        direction='flex-end'
        
    }else{
         style={
            // padding:'5px 0px',
            padding:'0 7px',
            paddingBottom:'3px',
            // border:'2.5px solid #1155e6',
            backgroundColor:'#202c33',
            width:props.message.length>35?'50%':'',
            wordBreak:'break-all',
            // width:'50%',
            alignItems:'flex-start',
            borderRadius:'13px',
            justifyContent:'flex-start',
            // border:'.5px solid rgb(239,238,238)',
            // backgroundColor:'rgb(116 204 251)'
           color:'#bedad6',
            

        }
        direction='flex-start'

        
    }
  return (
    <div ref={props.scrollRef} style={{display:'flex',justifyContent:direction,padding:'2px 5px'}}>
    <div style={style}>
       <p style={{paddingRight:'5px',textAlign:'left'}}>{props.message}</p>
     </div>
     </div>
  )
}

export default MessageBox