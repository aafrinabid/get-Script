import React from 'react'
import ProfileInfo from '../components/Profile/ProfileInfo'
import classes from './Profile.module.css'

function Profile() {
  return (
    <div className={` h-screen w-full ${classes.profile}`}>
     <ProfileInfo />
    </div>
  )
}

export default Profile