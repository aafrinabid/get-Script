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
        <div>
		<div className={classes.container}>
		<Card>
		<CardContent>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
        Total Users
      </Typography>
      <Typography variant="h5" component="div">
	  <Countup start={0} end={10000} duration={1.5} separator="," />
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        
      </Typography>
      <Typography variant="body2">
        Total numbers of users in
		app .
      </Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </Card>
  <Card>
		<CardContent>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
        New Users
      </Typography>
      <Typography variant="h5" component="div">
	  <Countup start={0} end={200} duration={1.5} separator="," />
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        
      </Typography>
      <Typography variant="body2">
        Total numbers of users joined today.
      </Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </Card>
  <Card>
		<CardContent>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
        Total No. of Posts
      </Typography>
      <Typography variant="h5" component="div">
	  <Countup start={0} end={20000} duration={1.5} separator="," />
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        
      </Typography>
      <Typography variant="body2">
        Total numbers of posts in
		app .
      </Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </Card>
  <Card>
		<CardContent>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
        New Posts
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
        <Chart />
		<PostChart />
    </div>
   </div>
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