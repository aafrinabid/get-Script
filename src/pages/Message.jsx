import React from 'react';
import Chat from '../components/Message/chat';


function Message(props) {
  return (
    <Chat socket={props.socket}callUser={props.callUser} stream={props.stream} connectionRef={props.connectionRef} userVideo={props.userVideo}/>
  )
}

export default Message