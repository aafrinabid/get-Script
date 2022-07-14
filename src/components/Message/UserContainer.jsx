import React from 'react'
import classes from './UserContainer.module.css'

function UserContainer() {
  return (
    <div className={classes.user}>
        <div>
        <img className={classes.profile} src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80' />
        </div>
        <div className={classes.userText}>
            <p className={classes.usernamecont}>username</p>
            <p className={classes.usermessage}>sent you message</p>
        </div>
    </div>
  )
}

export default UserContainer