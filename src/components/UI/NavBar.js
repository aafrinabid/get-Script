import React from 'react';
import classes from './NavBar.module.css';
import { Book, Notifications,AddBoxSharp } from '@material-ui/icons';
import { Avatar, Fab } from '@mui/material';
import {Link} from 'react-router-dom';
import { color } from '@mui/system';


function NavBar({colorChange}) {
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
        <Link to='/UploadScript'> <h1 className='mx-2 text-l ml-5  cursor-pointer'><AddBoxSharp /></h1> </Link>
        <Link to='/'> <h1 className='mx-2 text-l ml-5  cursor-pointer'><Notifications/></h1> </Link>
        <Link to='/Profile'>   <Avatar  className='ml-11 mr-2 text-l bg-black  cursor-pointer'>BR</Avatar> </Link> 
        </div>
        </div>
  )
}

export default NavBar