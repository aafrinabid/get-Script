import React,{useEffect} from 'react'
import classes from './chat.module.css'
import ChatComponent from './ChatComponent'
import ChatUser from './ChatUser'
import { Switch,Route ,Redirect,useLocation, useHistory} from 'react-router-dom';


function Chat() {
  return (
    <div className={classes.container}>
  <div className={classes.chat}>
    <ChatUser/>
    <h1>hiii chat here d</h1>
    <Switch>
      <Route path='/chat/t/:recieverid/:role'>
    <ChatComponent/>
    </Route>
    </Switch>



  </div>
  </div>
  )
}

export default Chat