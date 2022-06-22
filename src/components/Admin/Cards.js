import React from 'react';
import {Bar,Line} from 'react-chartjs-2';
import { Typography, CardContent, Card } from '@material-ui/core';
import Countup from 'react-countup';
// let cx = classnames.bind(classes);
import classes from './cards.module.css'
import Chart from './chart/chart';
import PostChart from './chart/postChart';

function Cards() {
  return (
        // <div className={classes.fullcontainer}>
		

		<div className={`bg-inherit ${classes.container}` }>
		<Card className={` h-full  text-white bg-inherit w-full`}>
		<CardContent className={`${classes.cardcontent} ${classes.totusers} h-full`}>
      <Typography sx={{ fontSize: 10 }} color="text.secondary" className='col-span-2' gutterBottom>
        Total Users
      </Typography>
      <Typography variant="h5" component="div" className='row-span-2 col-span-2'>
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
      <Typography variant="h5" component="div" className='row-span-2 col-span-2'>
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
      <Typography variant="h5" component="div" className='row-span-2 col-span-2'>
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
      <Typography variant="h5" component="div" className='row-span-2 col-span-2'>
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
      <Typography variant="h5" component="div" className='row-span-2 col-span-2'>
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






// <Grid container spacing={5} justify="center">
// 				<Grid item component={Card} xs={12} md={2}  >
// 					<CardContent className='h-1/2'>
// 						<Typography gutterBottom>Total users</Typography>
// 						<Typography variant="h4" gutterBottom>
// 							<Countup start={0} end={10000} duration={1.5} separator="," />
// 						</Typography>
// 						<Typography variant="body2" gutterBottom>
// 							{/* {new Date(lastUpdate).toDateString()} */}
// 						</Typography>
// 						<Typography variant="body2" component="p">
// 							Total number of users in the app.
// 						</Typography>
// 					</CardContent>
// 				</Grid>
// 				<Grid item component={Card} xs={12} md={2} >
// 					<CardContent>
// 						<Typography gutterBottom>New Accounts</Typography>
// 						<Typography variant="h4" gutterBottom>
// 							<Countup start={0} end={545} duration={2.5} separator="," />
// 						</Typography>
// 						<Typography variant="body2" gutterBottom>
// 							{/* {new Date(lastUpdate).toDateString()} */}
// 						</Typography>
// 						<Typography variant="body2" component="p">
// 							Number of users joined today.
// 						</Typography>
// 					</CardContent>
// 				</Grid>
// 				<Grid item component={Card} xs={12} md={2}>
// 					<CardContent>
// 						<Typography gutterBottom>Total Posts</Typography>
// 						<Typography variant="h4" gutterBottom>
// 							<Countup start={0} end={9000} duration={2.5} separator="," />
// 						</Typography>
// 						<Typography variant="body2" gutterBottom>
// 							{/* {new Date(lastUpdate).toDateString()} */}
// 						</Typography>
// 						<Typography variant="body2" component="p">
// 							number of posts posted by users
// 						</Typography>
// 					</CardContent>
// 				</Grid>
//                 <Grid item component={Card} xs={12} md={2} >
// 					<CardContent>
// 						<Typography gutterBottom>Total Posts Today</Typography>
// 						<Typography variant="h4" gutterBottom>
// 							<Countup start={0} end={600} duration={1.5} separator="," />
// 						</Typography>
// 						<Typography variant="body2" gutterBottom>
// 							{/* {new Date(lastUpdate).toDateString()} */}
// 						</Typography>
// 						<Typography variant="body2" component="p">
// 							Total number of Posts posted by users Today
// 						</Typography>
// 					</CardContent>
// 				</Grid>
// 			</Grid>