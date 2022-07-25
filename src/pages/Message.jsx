import React from 'react';
import Chat from '../components/Message/chat';


function Message(props) {
  return (
    <Chat socketi={props.socketi}/>
  )
}

export default Message