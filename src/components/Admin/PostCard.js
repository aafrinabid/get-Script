import React,{useState, useEffect} from 'react';
import {Bar,Line} from 'react-chartjs-2';
import { Typography, CardContent, Card } from '@material-ui/core';
import Countup from 'react-countup';
// let cx = classnames.bind(classes);
import classes from './PostCard.module.css';
import UserChart from './chart/UserChart';
import UserDataBar from './chart/UserDataBar';
// import { useEffect, useState } from 'react';
import axios from 'axios';

function PostCards() {
  const [producerCount,setProducerCount]=useState(0)
  const [scriptwriterCount,setScriptwriterCount]=useState(0)
  const [totalUsers,setTotalUsers]=useState(0)
  const [pendingProducers,setPendingProducers]=useState(0)
  const [declinedProducers,setDeclinedProducers]=useState(0)
  const [declinedScriptwriters,setDeclinedScriptwriters]=useState(0)
  const [blockedUsers,setBlockedUsers]=useState(0)

  useEffect(()=>{
    axios.get('http://localhost:4000/getUserCount').then((res)=>{
      console.log(res.data)
      setProducerCount(res.data.producerCount)  
      setScriptwriterCount(res.data.scriptwriterCount)
      setTotalUsers(res.data.totalUsers)
      setPendingProducers(res.data.pendingProducersCount)
      setDeclinedProducers(res.data.declinedProducersCount)
      setDeclinedScriptwriters(res.data.declinedScriptwritersCount)
      setBlockedUsers(res.data.blockedUsers)    
    })

  },[])
  return (
    <div className={`bg-inherit ${classes.container}` }>
		<Card className={` h-full  text-white bg-inherit w-full`}>
		<CardContent className={`${classes.cardcontent} ${classes.totusers} h-full`}>
      <Typography sx={{ fontSize: 10 }} color="text.secondary" className='col-span-2' gutterBottom>
        Total Users
      </Typography>
      <Typography variant="h6" component="div" className='row-span-2 col-span-2'>
	  <Countup start={0} end={totalUsers} duration={1.5} separator="," />
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        
      </Typography>
      <Typography variant="body2" className='col-span-2'>
        since last year
      </Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </Card>
  <Card className={` h-full  text-white bg-inherit w-full`}>
		<CardContent className={`${classes.cardcontent} ${classes.totusers} h-full`}>
      <Typography sx={{ fontSize: 10 }} color="text.secondary" className='col-span-2' gutterBottom>
        Total Prouders
      </Typography>
      <Typography variant="h6" component="div" className='row-span-2 col-span-2'>
	  <Countup start={0} end={producerCount} duration={1.5} separator="," />
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        
      </Typography>
      <Typography variant="body2" className='col-span-2'>
        since last year
      </Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </Card>
  <Card className={` h-full  text-white bg-inherit w-full`}>
		<CardContent className={`${classes.cardcontent} ${classes.totusers} h-full`}>
      <Typography sx={{ fontSize: 10 }} color="text.secondary" className='col-span-2' gutterBottom>
        Total Scriptwriters
      </Typography>
      <Typography variant="h6" component="div" className='row-span-2 col-span-2'>
	  <Countup start={0} end={scriptwriterCount} duration={1.5} separator="," />
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        
      </Typography>
      <Typography variant="body2" className='col-span-2'>
        since last year
      </Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </Card>
  <Card className={` h-full  text-white bg-inherit w-full`}>
		<CardContent className={`${classes.cardcontent} ${classes.totusers} h-full`}>
      <Typography sx={{ fontSize: 10 }} color="text.secondary" className='col-span-2' gutterBottom>
        Request Pending Producers
      </Typography>
      <Typography variant="h6" component="div" className='row-span-2 col-span-2'>
	  <Countup start={0} end={pendingProducers} duration={1.5} separator="," />
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        
      </Typography>
      <Typography variant="body2" className='col-span-2'>
        since last year
      </Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </Card>
  <Card className={` h-full  text-white bg-inherit w-full`}>
		<CardContent className={`${classes.cardcontent} ${classes.totusers} h-full`}>
      <Typography sx={{ fontSize: 10 }} color="text.secondary" className='col-span-2' gutterBottom>
        Declined Producers
      </Typography>
      <Typography variant="h6" component="div" className='row-span-2 col-span-2'>
	  <Countup start={0} end={declinedProducers} duration={1.5} separator="," />
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        
      </Typography>
      <Typography variant="body2" className='col-span-2'>
        since last year
      </Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </Card>
  <Card className={` h-full  text-white bg-inherit w-full`}>
		<CardContent className={`${classes.cardcontent} ${classes.totusers} h-full`}>
      <Typography sx={{ fontSize: 10 }} color="text.secondary" className='col-span-2' gutterBottom>
        Declined Scriptwriters
      </Typography>
      <Typography variant="h6" component="div" className='row-span-2 col-span-2'>
	  <Countup start={0} end={declinedScriptwriters} duration={1.5} separator="," />
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        
      </Typography>
      <Typography variant="body2" className='col-span-2'>
        since last year
      </Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </Card>
  <Card className={` h-full  text-white bg-inherit w-full`}>
		<CardContent className={`${classes.cardcontent} ${classes.totusers} h-full`}>
      <Typography sx={{ fontSize: 10 }} color="text.secondary" className='col-span-2' gutterBottom>
        Total Blocked Users
      </Typography>
      <Typography variant="h6" component="div" className='row-span-2 col-span-2'>
	  <Countup start={0} end={blockedUsers} duration={1.5} separator="," />
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        
      </Typography>
      <Typography variant="body2" className='col-span-2'>
        since last year
      </Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </Card>
  <Card className={` h-full  text-white bg-inherit w-full`}>
		<CardContent className={`${classes.cardcontent} ${classes.totusers} h-full`}>
      <Typography sx={{ fontSize: 10 }} color="text.secondary" className='col-span-2' gutterBottom>
        Total Users
      </Typography>
      <Typography variant="h6" component="div" className='row-span-2 col-span-2'>
	  <Countup start={0} end={10000} duration={1.5} separator="," />
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        
      </Typography>
      <Typography variant="body2" className='col-span-2'>
        since last year
      </Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </Card>


			
  <div className= {`${classes.userscharts} h-full`}>
        <UserChart producers={producerCount} scriptwriters={scriptwriterCount}/>
	</div>
  <div className= {`${classes.Postcharts} h-full` }>
  
        <UserDataBar producers={producerCount} scriptwriters={scriptwriterCount}/>
        
    </div>
   </div>
  )
}

export default PostCards