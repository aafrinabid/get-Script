import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import classes from './UserNameContent.module.css'
import axios from 'axios'
import { OndemandVideo} from '@material-ui/icons';
import { useDispatch } from 'react-redux'
import { videoActions } from '../../assets/store/videoSlice'
import Peer from 'simple-peer';

function UserNameContent(props) {
  const dispatch=useDispatch()
  const params=useParams();
  const {role}=params
  const [data,setData]=useState('')
  console.log(data)
  const callUser=(recieverId,username)=>{
    console.log('callllling please',recieverId,username)
    dispatch(videoActions.isCalling())
    const peer=new Peer({initiator:true,trickle:false,stream:props.stream})
    peer.on('error', err => console.log('error', err))
    console.log(peer)
    peer.on('signal',(signal)=>{
      console.log(signal,'signaling happening')
      props.socket.current.emit('callUser',{
        recieverId:recieverId,
        signalData:signal,
        name:username
      })
    })
  
    peer.on('stream',(currentStream)=>{
      // dispatch(videoActions.setUserVideo(currentStream))
      props.userVideo.current.srcObject=currentStream
    })
    props.socket.current.on('callAccepted',(signal)=>{
      dispatch(videoActions.setCallAccepted())
      peer.signal(signal)
    })
  
    props.connectionRef.current=peer;
  
  }
  
  // const callUser=()=>{
  //   dispatch(videoActions.isCalling())
  //   const peer=new Peer({initiator:true,trickle:false,stream})
  //   peer.on('signal',(x)=>{
  //     props.socket.current.emit('callUser',{
  //       recieverId:props.userId,
  //       signalData:x,
  //       name:data.username
  //     })
  //   })

  //   peer.on('stream',(currentStream)=>{
  //     dispatch(videoActions.setUserVideo(currentStream))
  //   })
  //   props.socket.current('callAccepted',(signal)=>{
  //     dispatch(videoActions.setCallAccepted())
  //     peer.signal(signal)
  //   })
  
  // }

  useEffect(()=>{
  console.log('sssssssssssss***************')

axios.post('http://localhost:3500/userDetails',{
  id:props.userId,
  role:role
}).then((res)=>{
  console.log(res.data.username)
  setData(res.data)
}).catch((e)=>console.log(e))
  },[role,props.userId])
  return (
    <div className={classes.upperpart}>
         <img className={classes.profile} src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80' />
         <p style={{margin:'0px',marginLeft:'10px',textAlign:'start', padding:'15px 0px'}}>{data.username}</p>
           <OndemandVideo onClick={callUser.bind(null,{recieverId:props.userId,username:data.username})}/>

    </div>
  )
}
 
export default UserNameContent