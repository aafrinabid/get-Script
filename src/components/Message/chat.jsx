import React,{useEffect,useState} from 'react'
import classes from './chat.module.css'
import ChatComponent from './ChatComponent'
import ChatUser from './ChatUser'
import { Switch,Route ,Redirect,useLocation, useHistory} from 'react-router-dom';


function Chat() {
  const history=useHistory();
  const [seen,setSeen]=useState(false)
  
  return (
    <div className={classes.container}>
  <div className={classes.chat}>

    <ChatUser setSeen={setSeen}/>
    {!seen && <h1>hiii chat here d</h1>}
    {seen &&
    <Switch>
    <Route path='/chat/t/:recieverid/:role'>
  <ChatComponent/>
  </Route>
  </Switch> 
    } 
    



  </div>
  </div>
  )
}

export default Chat