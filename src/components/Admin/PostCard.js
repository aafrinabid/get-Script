import React from 'react';
import {Bar,Line} from 'react-chartjs-2';
import { Typography, CardContent, Card } from '@material-ui/core';
import Countup from 'react-countup';
// let cx = classnames.bind(classes);
import classes from './cards.module.css';
import UserChart from './chart/UserChart';
import UserDataBar from './chart/UserDataBar';

function PostCards() {
  return (
        <div>
		<div className={classes.container}>
		<Card className='h-full '>
		<CardContent className='h-full'>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
        Total No. of Producers
      </Typography>
      <Typography variant="h5" component="div">
	  <Countup start={0} end={2000} duration={1.5} separator="," />
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        
      </Typography>
      <Typography variant="body2">
        Total numbers of producers in
		app .
      </Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </Card>
  <Card className='h-full'>
		<CardContent className='h-full'>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
        New Producers
      </Typography>
      <Typography variant="h5" component="div">
	  <Countup start={0} end={100} duration={1.5} separator="," />
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        
      </Typography>
      <Typography variant="body2">
        Total numbers of Producers joined today.
      </Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </Card>
  <Card className='h-full'>
		<CardContent className='h-full'>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
        Total No. of <br /> Script-Writters
      </Typography>
      <Typography variant="h5" component="div">
	  <Countup start={0} end={8000} duration={1.5} separator="," />
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        
      </Typography>
      <Typography variant="body2">
        Total numbers of scriptwritters in app .
      </Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </Card>
  <Card className='h-full'>
		<CardContent className='h-full'>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
        New ScriptWritters
      </Typography>
      <Typography variant="h5" component="div">
	  <Countup start={0} end={500} duration={1.5} separator="," />
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        
      </Typography>
      <Typography variant="body2">
        Total numbers of posts posted today
      </Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </Card>


			
	</div>
    <div className= {`${classes.charts} pl-5`}>
        <UserChart />
        <UserDataBar />
        
    </div>
   </div>
  )
}

export default PostCards