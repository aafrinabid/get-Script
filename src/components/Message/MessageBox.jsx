import React from 'react';
import {io} from 'socket.io-client'



function MessageBox(props){

    let style
    let direction
    
    if(props.from===true){
        style={
            padding:'0 7px',
            paddingBottom:'3px',
            backgroundColor:'#005d4a',
            wordBreak:'break-all',

            width:props.message.length>35?'50%':'',
            borderRadius:'10px',
            alignItems:'flex-end',
           margin:'5px 0px',
           color:'#bedad6',

        }
        direction='flex-end'
        
    }else{
         style={
            padding:'0 7px',
            paddingBottom:'3px',
            backgroundColor:'#202c33',
            width:props.message.length>35?'50%':'',
            wordBreak:'break-all',
            alignItems:'flex-start',
            borderRadius:'13px',
            justifyContent:'flex-start',
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