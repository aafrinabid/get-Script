import { Button } from '@material-ui/core'
import React,{useContext} from 'react'
import { SocketContext } from '../../assets/videoContext'
function CallInfo() {
  const {call,answerCall,leaveCall}=useContext(SocketContext)
  return (
    <div className='flex flex-col'>
      <h1>{call.name} is calling you</h1>
      <div>
      <Button style={{color:'white',background:'green', margin:'20px'}} onClick={answerCall}>answer</Button> 
      <Button style={{color:'white',background:'red'}} onClick={leaveCall}>reject</Button>
      </div>
    </div>
  )
}

export default CallInfo