import React from 'react'
import NavBar from '../components/Admin/NavBar'
import Contents from '../components/Admin/Contents'
import { Switch,Route ,Redirect,useLocation} from 'react-router-dom';


function AdminPanel() {
  return (
    <div>
      <div className='bg-cyan-800'>
        <NavBar  />
        </div> 
        <Contents />
    </div>
  )
}

export default AdminPanel