import React, { useState,useEffect } from 'react';
import classes from './NavBar.module.css';
import { Book, Notifications,AddBoxSharp,ChatRounded } from '@material-ui/icons';
import { Avatar, Fab, IconButton, Menu, MenuItem } from '@mui/material';
import {Link, useHistory} from 'react-router-dom';
import { color } from '@mui/system';
import { useDispatch ,useSelector} from 'react-redux';
import { authActions } from '../../assets/store/authSlice';
import axios from 'axios'

function NavBar({colorChange,socket,userId,handleToggle}) {
  const [id,setId]=useState('')
  const [role,setRole]=useState('')

  useEffect(()=>{
 axios.get('http://localhost:3500/getId',{
  headers:{
    'x-access-token':localStorage.getItem('token')?localStorage.getItem('token'):""
  }
  }).then((res)=>{
    setId(res.data.userId)
    setRole(res.data.role)

  })
  },[])
  const userRole=useSelector(state=>state.authHandler.role)

  const history=useHistory()
  const dispatch=useDispatch();
  const onLogoutHandler=()=>{

    console.log('logiinhouu')
    dispatch(authActions.logoutHandler())
    socket.current.emit('offline',{
      userId:userId
    })
    history.push('/login')
  }
  const [anchorEl,setAnchorEl]=useState(null)
  const open=Boolean(anchorEl)
  const handleClick = (event) => {
    console.log(event)
    setAnchorEl(event.currentTarget);
  };
      const handleClose = () => {
        setAnchorEl(null);
      };

  return (
    <div className={`${colorChange?`bg-black ${classes.navbar}`:classes.navbar}` } >
    <div className={`flex ${classes.logo} justify-end items-center object-contain`} >
<Link to='/'>  <h1 className='text-white text-xl'>getScript</h1> </Link>
{/* <p className='ml-3 text-2xl'>GetScript</p>      */}
    </div>
     <div className={`flex items-center justify-center ${classes.browse}`}> 
    <Link to='/'> <h1 className='mx-2 text-l cursor-pointer'>Browse</h1> </Link>
    <Link to='/'> <h1 className='mx-2 text-l  cursor-pointer'>TV Shows</h1> </Link>
    <Link to='/'> <h1 className='mx-2 text-l  cursor-pointer'>Movies</h1> </Link>
    <Link to='/'> <h1 className='mx-2 text-l cursor-pointer'>Anime</h1> </Link>
    <Link to='/'> <h1 className='mx-2 text-l  cursor-pointer'>Saved Script</h1> </Link>
        </div>
        <div className= {`flex ${classes.profile}`} >
    {(userRole===1 || userRole===3) && <Link to='/UploadScript'> <h1 className='mx-2 text-l ml-5  cursor-pointer'><AddBoxSharp /></h1> </Link>}    
        <Link to='/chat/t'> <h1 className='mx-2 text-l ml-5  cursor-pointer'><ChatRounded /></h1> </Link>
        <Link to='/'> <h1 className='mx-2 text-l ml-5  cursor-pointer'><Notifications onClick={handleToggle}/></h1> </Link>

         <IconButton size='large'
         aria-label='profile'
         color='inherit'
         onClick={handleClick}
         >
            <Avatar  className='ml-11 mr-2 text-l bg-black  cursor-pointer'>BR</Avatar>
            </IconButton>
            <Menu
             id="profile"
             anchorEl={anchorEl}
             anchorOrigin={{
               vertical: "top",
               horizontal: "right"
             }}
             keepMounted
             transformOrigin={{
               vertical: "top",
               horizontal: "right"
             }}
             open={open}
             onClose={handleClose}
           >
              <MenuItem onClick={handleClose}><Link to={`/Profile/${id}/${role}`}>Profile</Link></MenuItem>
            {userRole===3 && <MenuItem onClick={handleClose}><Link to='/AdminPanel'>Admin Panel</Link></MenuItem>}
                <MenuItem onClick={onLogoutHandler}> logout</MenuItem>

              </Menu>
        </div>
        </div>
  )
}

export default NavBar