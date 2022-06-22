import { Typography } from '@material-ui/core'
import { AddCircleOutline, Dashboard,EmojiPeopleOutlined,Note } from '@material-ui/icons';
import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Option.module.css';
import { useSelector } from 'react-redux';

function Options() {
  const optionSeen=useSelector(state=>state.UiHandler.optionSeen)
  return (
    <div className={`flex flex-col justify-start text-left border-r-1 h-screen border-black-100 shadow-xl text-white ${classes.options}`}>
        <div className='p-5 pt-2'>
     <Link to='/AdminPanel' > <Typography
            variant="h7"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
           <Dashboard /> DashBoard
          </Typography>
          </Link>
          </div>
          <div className='p-5 pt-2'>
       <Link to='/AdminPanel/Posts'> <Typography
            variant="h7"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <EmojiPeopleOutlined /> Users
          </Typography>
          </Link>
          </div>        <div className='p-5 pt-2'>
       <Link to='/AdminPanel/Posts'>  <Typography
            variant="h7"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <Note/> Posts
          </Typography>
          </Link>
          </div>
          <div className='p-5 pt-2'>
       <Link to='/AdminPanel/Requests'>  <Typography
            variant="h7"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <AddCircleOutline /> Request Handler
          </Typography>
          </Link>
          </div>
    </div>
  )
}

export default Options