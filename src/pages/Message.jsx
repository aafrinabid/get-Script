import React from 'react';
import Chat from '../components/Message/chat';


function Message(props) {
  return (
    <Chat socket={props.socket}/>
  )
}

export default Message