import React,{useContext} from 'react'
import { SocketContext } from '../../assets/context';


function CallInfo() {
  const {call,answerCall,rejectCall} = useContext(SocketContext);

  return (
    <div className='flex'>
      <h1>{call.from} is calling you</h1>
      <h3 onClick={answerCall}>answer</h3>
      <h3 onClick={rejectCall}>reject</h3>

    </div>
  )
}

export default CallInfo