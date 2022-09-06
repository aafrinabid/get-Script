import React, { useEffect, useState } from 'react';
import {Bar,Line} from 'react-chartjs-2';
import { Typography, CardContent, Card } from '@material-ui/core';
import Countup from 'react-countup';
// let cx = classnames.bind(classes);
import classes from './cards.module.css'
import Chart from './chart/chart';
import PostChart from './chart/postChart';
import axios from 'axios';

function Cards() {
  const [producerCount,setProducerCount]=useState(0)
  const [scriptwriterCount,setScriptwriterCount]=useState(0)
  const [totalUsers,setTotalUsers]=useState(0)
  


  useEffect(()=>{
    axios.get('http://localhost:3500/getUserCount').then((res)=>{
      console.log(res.data)
      setProducerCount(res.data.producerCount)  
      setScriptwriterCount(res.data.scriptwriterCount)
      setTotalUsers(res.data.totalUsers)    
    })

  },[])
  return (
        // <div className={classes.fullcontainer}>
		

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
        Total Producers
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
 

			
	{/* </div> */}
    
    <div className= {`${classes.userscharts} `}>
        <Chart />
		</div>
		 <div className= {`${classes.Postcharts}`}>
		 <PostChart /> 
     </div>
   </div>
      //  </div>

  )
}

export default Cards






