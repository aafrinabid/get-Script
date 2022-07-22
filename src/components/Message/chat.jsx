import React,{useEffect,useState,useRef} from 'react'
import classes from './chat.module.css'
import ChatComponent from './ChatComponent'
import ChatUser from './ChatUser'
import { Switch,Route ,Redirect,useLocation, useHistory} from 'react-router-dom';
import {io} from 'socket.io-client'
import axios from 'axios';

function Chat() {
  const history=useHistory();
  const [seen,setSeen]=useState(false)
const [userId,setUserId]=useState(null)
const socket=useRef();
let role
 useEffect(()=>{
      axios.get('http://localhost:3500/getId',{
        headers:{
          'x-access-token':localStorage.getItem('token')?localStorage.getItem('token'):""
        }
      }).then(res=>{
        console.log(res.data)
        // userId=res.data.userId
        role=res.data.role
        setUserId(res.data.userId)
        // const recId=r
      })
 
  },[])
  useEffect(()=>{
    if(userId){
      socket.current= io('http://localhost:3001')
    }
  
  },[userId])
  return (
    <div className={classes.container}>
  <div className={classes.chat}>

    <ChatUser socket={socket} setSeen={setSeen}/>
    {!seen && <h1>hiii chat here d</h1>}
    {seen &&
    <Switch>
    <Route path='/chat/t/:recieverid/:role'>
  <ChatComponent socket={socket}/>
  </Route>
  </Switch> 
    } 
    



  </div>
  </div>
  )
}

export default Chat