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
  // useEffect(()=>{
  //   console.log('what the hell dude its more than i think')
  //   axios.get('http://localhost:3500/getId',{
  //     headers:{
  //       'x-access-token':localStorage.getItem('token')?localStorage.getItem('token'):""
  //     }
  //   }).then(res=>{
  //     console.log(res.data)
  //     // userId=res.data.userId
  //     role=res.data.role
  //     axios.post('http://localhost:3500/getMessages',{
  //       from:res.data.userId,
  //       to:recieverid
  //         }).then(res=>{
  //          console.log(res.data)
  //          setData([...res.data])
  //        }).catch(e=>console.error(e))
       
  //   }).catch((e)=>console.log(e))
 
  // },[])
  return (
    <div className={classes.component}>

     {/* <h1>start sending messages to script writer</h1> */}
     <ChatContent socket={props.socket} recieverid={recieverid} stream={props.stream} callUser={props.callUser} connectionRef={props.connectionRef} userVideo={props.userVideo}/>
    </div>
  )
}

export default ChatComponent