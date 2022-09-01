import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import classes from './ChatComponent.module.css'
import ChatContent from './ChatContent'
import axios from 'axios'

function ChatComponent(props) {
  const params=useParams()
  const {recieverid}=params
  const [data,setData]=useState([])
  console.log(recieverid)
  console.log(data)
  let userId
  let role

  return (
    <div className={classes.component}>

     {/* <h1>start sending messages to script writer</h1> */}
     <ChatContent socket={props.socket} recieverid={recieverid}/>
    </div>
  )
}

export default ChatComponent