import React from 'react';
import Cards from './Cards';
import classes from './content.module.css'
import Options from './Options';
import { Switch,Route ,Redirect,useLocation} from 'react-router-dom';
import PostCards from './PostCard';
import { useSelector } from 'react-redux';
import { Box, Card, Typography } from '@material-ui/core';
import { Refresh, Sort } from '@material-ui/icons';


function Contents() {

  const optionSeen=useSelector(state=>state.UiHandler.optionSeen)
  return (<div>
   
  <div className={optionSeen?classes.contents:classes.clickcontents}>
        <Options/>
<Switch>
  
  <Route path='/AdminPanel' exact>
    <div>
  <div className={classes.adminTitle}>
    <Typography variant='h6'>
      Admin DashBoard
    </Typography>
    <Typography inputProps={{ style: {textAlign: 'right'} }} align={'right'} variant='h7'>
      <Refresh/> 
      <Sort/>
      {/* <Card>
        Today: April 29
      </Card> */}
    </Typography>
    <Typography variant='h7'>
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
    <div className='text-right'>
    <Typography variant='h7' >
      <Refresh/> 
      <Sort/>
    </Typography>
    </div>
    <Typography variant='h7'>
      Welcome , Master 
    </Typography>

    </div>
   <PostCards />
   </div>
  </Route>

</Switch>
    </div>
    </div>
  )
}

export default Contents