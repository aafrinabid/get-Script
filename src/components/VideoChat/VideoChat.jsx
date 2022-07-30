import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';


import React from 'react'
import { useEffect , useRef} from 'react'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
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
  const dispatch=useDispatch();
  const CallAccepted=useSelector(state=>state.videoHandler.CallAccepted)
  const classes=useStyles()
    // const [stream,setStream]=useState()
    const myVideo = useRef();
  // const userVideo = useRef();
  // const connectionRef = useRef();
    useEffect(()=>{
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((currentStream) => {
          // setStream(currentStream);
          // dispatch(videoActions.setStream(currentStream))  
          props.setStream(currentStream)
          myVideo.current.srcObject = currentStream;
        });
    },[])

    
  return (
    <Grid container className={classes.gridContainer}>
    {props.stream && (
      <Paper className={classes.paper}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>{'Name'}</Typography>
          <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
        </Grid>
      </Paper>
    )}
    {CallAccepted && (
      <Paper className={classes.paper}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>{ 'Name'}</Typography>
          <video playsInline ref={props.userVideo} autoPlay className={classes.video} />
        </Grid>
      </Paper>
    )}
  </Grid>
);
  
}

export default VideoChat