import React from 'react';
import {Bar,Line} from 'react-chartjs-2';
import { Typography, CardContent, Card } from '@material-ui/core';
import Countup from 'react-countup';
// let cx = classnames.bind(classes);
import classes from './PostCard.module.css';
import UserChart from './chart/UserChart';
import UserDataBar from './chart/UserDataBar';

function PostCards() {
  return (
    <div className={`bg-inherit ${classes.container}` }>
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


			
  <div className= {`${classes.userscharts} h-full`}>
        <UserChart />
	</div>
  <div className= {`${classes.Postcharts} h-full` }>
  
        <UserDataBar />
        
    </div>
   </div>
  )
}

export default PostCards