import { Grid, Typography, Paper, makeStyles, Button } from '@material-ui/core';


import React, { useContext } from 'react'
import { useEffect , useRef} from 'react'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
// import { videoActions } from '../../assets/store/videoSlice';
import { SocketContext } from '../../assets/videoContext';
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
  const {myVideo,userVideo,leaveCall,stream,callAccepted}=useContext(SocketContext)
  console.log(userVideo,stream,myVideo)

    
  return (
    <div>
    <Grid container className={classes.gridContainer}>
      <Paper className={classes.paper}>
        <Grid item xs={12} md={12}>
          <Typography variant="h5" gutterBottom>{'Name'}</Typography>
          <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
        </Grid>
      </Paper>
    {callAccepted && (
      <Paper className={classes.paper}>
        <Grid item xs={12} md={12}>
          <Typography variant="h5" gutterBottom>{ 'Name'}</Typography>
          <video playsInline ref={userVideo} autoPlay className={classes.video} />
        </Grid>
      </Paper>
    )}
  </Grid>
  <Button onClick={leaveCall} style={{color:'red',background:'white'}} >END CALL</Button>
  </div>
);
  
}

export default VideoChat