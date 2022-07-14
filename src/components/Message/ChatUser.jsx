import React from 'react'
import ChatList from './ChatList'
import classes from './ChatUser.module.css'
import UserContainer from './UserContainer'

function ChatUser() {
  return (
    <div style={{backgroundColor:'rgb(255,254,254)',border:'1px rgb(237,236,237)'}}>
        <div style={{border:'1px rgb(237,236,237)'}}>
      <h4 style={{color:'black',textAlign:'center',border:'1px rgb(237,236,237)'}}>username</h4>
      </div>
    <div className={classes.list}>
        
       <UserContainer/>
       <UserContainer/>
       <UserContainer/>
       <UserContainer/>
       <UserContainer/>
       <UserContainer/>
       <UserContainer/>
       <UserContainer/>

        

        
    </div>
    </div>
  )
}

export default ChatUser