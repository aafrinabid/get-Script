import React from 'react'
import { useEffect } from 'react'
import classes from './UserNameContent.module.css'

function UserNameContent(props) {
  useEffect(()=>{
axios.post('/userDetails',{
  id:props.userId
})
  },[])
  return (
    <div className={classes.upperpart}>
         <img className={classes.profile} src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80' />
         <p style={{margin:'0px',marginLeft:'10px',textAlign:'start', padding:'15px 0px'}}>username</p>

    </div>
  )
}

export default UserNameContent