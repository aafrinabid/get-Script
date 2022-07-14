import React from 'react'
import classes from './ChatComponent.module.css'
import ChatContent from './ChatContent'

function ChatComponent() {
  return (
    <div className={classes.component}>

     {/* <h1>start sending messages to script writer</h1> */}
     <ChatContent />
    </div>
  )
}

export default ChatComponent