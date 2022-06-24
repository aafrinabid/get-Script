import React from 'react'
import NavBar from '../components/Admin/NavBar'
import Contents from '../components/Admin/Contents'
import classes from './AdminPanel.module.css'
import { Switch,Route ,Redirect,useLocation} from 'react-router-dom';


function AdminPanel() {
  return (
    <div className={classes.adminbody}>
      <div className='bg-cyan-800'>
        <NavBar  />
        </div> 
        <Contents />
    </div>
  )
}

export default AdminPanel