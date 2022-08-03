import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';


import React from 'react'

import { useEffect , useRef,useContext,useState} from 'react'
// import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { SocketContext } from '../../assets/context';
import { videoActions } from '../../assets/store/videoSlice';
const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
  },
}));

function VideoChat(props) {
  console.log(props)
  const myVideo=useRef();
  const [stream,setStream]=useState()
  const { callAccepted,callEnded,leaveCall,fixStream,call } = useContext(SocketContext);
 

  // const myVideo=useRef()
  const userVideo=useRef()
  console.log(props.userVideo,props.myVideo)

  const dispatch=useDispatch();
  // const CallAccepted=useSelector(state=>state.videoHandler.CallAccepted)
  const classes=useStyles()
    // const [stream,setStream]=useState()
  // const userVideo = useRef();
  // const connectionRef = useRef();
  // useEffect(()=>{
  //   navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  //   .then((currentStream) => {
  //     // setStream(currentStream);
  //     fixStream(currentStream)
  //     console.log('setting stream',currentStream)
  //     myVideo.current.srcObject = currentStream;
  //   }).catch((e)=>console.log(e));
  // },[userVideo])
  
    
  return (
    <div>
    <Grid container className={classes.gridContainer}>
      <Paper className={classes.paper}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>{'Name'}</Typography>
          <video playsInline muted ref={props.userVideo} autoPlay className={classes.video} />
        </Grid>
      </Paper>
    
    {callAccepted && (
      <Paper className={classes.paper}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>{ 'Name'}</Typography>
          <video playsInline ref={props.userVideo} autoPlay className={classes.video} />
        </Grid>
      </Paper>
    )}
  </Grid>
  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
    <h1>join</h1>
    <h1 onClick={props.endCall.bind(null,call.from)}>end call</h1>
  </div>
  </div>
);
  
}

export default VideoChat