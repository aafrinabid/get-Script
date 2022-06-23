import React from 'react';
import Cards from './Cards';
import classes from './content.module.css'
import Options from './Options';
import { Switch,Route ,Redirect,useLocation} from 'react-router-dom';
import PostCards from './PostCard';
import { useSelector } from 'react-redux';
import { Box, Card, Typography } from '@material-ui/core';
import { Refresh, Sort } from '@material-ui/icons';
import { RequestPage } from '@mui/icons-material';
import CollapsibleTable from './chart/RequestPage';


function Contents() {

  const optionSeen=useSelector(state=>state.UiHandler.optionSeen)
  return (<div className='h-screen'>
   
  <div className={optionSeen?classes.contents:classes.clickcontents}>
        <Options/>
<Switch>
  
  <Route path='/AdminPanel' exact>
    <div>
  <div className={classes.adminTitle}>
    <Typography variant='h6'>
      Admin DashBoard
    </Typography>
    <Typography inputProps={{ style: {textAlign: 'right'} }} align={'right'} variant='h6'>
      <Refresh/> 
      <Sort/>
      {/* <Card>
        Today: April 29
      </Card> */}
    </Typography>
    <Typography variant='h6'>
      Welcome you master 
    </Typography>

    </div>
    <div className={classes.border}></div>
<Cards />
</div>
</Route>
  <Route path='/AdminPanel/Posts'>
  <div>
  <div className={classes.adminTitle}>
    <Typography variant='h6'>
      Admin DashBoard
    </Typography>
    <Typography inputProps={{ style: {textAlign: 'right'} }} align={'right'} variant='h6'>
      <Refresh/> 
      <Sort/>
      {/* <Card>
        Today: April 29
      </Card> */}
    </Typography>
    <Typography variant='h6'>
      Welcome you master 
    </Typography>

    </div>
    <div className={classes.border}></div>
  
   <PostCards />
   </div>
  </Route>
  <Route path='/AdminPanel/Requests'>
  <div>
  <div className={classes.adminTitle}>
    <Typography variant='h6'>
      Producers Request
    </Typography>
    <Typography inputProps={{ style: {textAlign: 'right'} }} align={'right'} variant='h6'>
      <Refresh/> 
      <Sort/>
      {/* <Card>
        Today: April 29
      </Card> */}
    </Typography>
    <Typography variant='h6'>
      waiting for your confirmation sir
    </Typography>

    </div>
    <div className={classes.border}></div>
  <div className='p-10 h-screen ' style={{backgroundColor:'rgb(12,22,33)'}}>
   <CollapsibleTable state={false}/>
   <h1 className='text-xl text-white m-4'> Registered Producers</h1>
  <CollapsibleTable state={true} /> 
  </div>
   </div>
  </Route>

</Switch>
    </div>
    </div>
  )
}

export default Contents