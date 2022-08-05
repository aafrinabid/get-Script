import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';


import React, { useContext } from 'react'
import { useEffect , useRef} from 'react'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { videoActions } from '../../assets/store/videoSlice';
import { SocketContext } from '../../assets/context';
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
  const classes=useStyles()
  // const myVideo=useRef()
  const {myVideo,userVideo,endCall,stream,callAccepted,fixStream}=useContext(SocketContext)
  console.log(userVideo)

    
  return (
    <Grid container className={classes.gridContainer}>
    {stream && (
      <Paper className={classes.paper}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>{'Name'}</Typography>
          <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
        </Grid>
      </Paper>
    )}
    {callAccepted && (
      <Paper className={classes.paper}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>{ 'Name'}</Typography>
          <video playsInline ref={userVideo} autoPlay className={classes.video} />
        </Grid>
      </Paper>
    )}
  </Grid>
);
  
}

export default VideoChat