import axios from 'axios'
import React,{useEffect,useState, useRef} from 'react'
import MessageArea from './MessageArea'
import TextArea from './TextArea'
import UserNameContent from './UserNameContent'
import { useParams } from 'react-router-dom'
import {io} from 'socket.io-client'

function ChatContent(props) {
  console.log(props)
  const socket=useRef();
  // const params=useParams()
  // const {recieverid}=params
  // const [recieverId,setRecieverId]=useState(recieverid)
  const [data,setData]=useState([])
  let role
  console.log(data)
  const [userId,setUserId]=useState(null)
  console.log(userId)
  // const socket
  useEffect(()=>{
    if(userId){
      socket.current= io('http://localhost:3001')
    }
  
  },[userId])
 
//   const [arrivalMessage,setArrivalMessage]=useState(null)
//   console.log(arrivalMessage)
//   useEffect(()=>{
//     console.log('hmmmammamamamamm')
//    if(userId){
//     console.log(userId,'hope to het eth')
//   const socket=io('http://localhost:3001')
//     socket.on('recieve-msg',(data)=>{
//       console.log('messageArea',data)
//       setArrivalMessage({fromSelf:userId.toString()===data.from,message:data.msg})
//    })
//   }
// })
// const socket=io('http://localhost:3001')
//     socket.on('recieve-msg',(data)=>{
//       console.log('messageArea',data)
//       setArrivalMessage({fromSelf:userId.toString()===data.from,message:data.msg})
//    })
  useEffect(()=>{
    console.log('what the hell dude its more than i think')
    axios.get('http://localhost:3500/getId',{
      headers:{
        'x-access-token':localStorage.getItem('token')?localStorage.getItem('token'):""
      }
    }).then(res=>{
      console.log(res.data)
      setUserId(res.data.userId)
      role=res.data.role
      axios.post('http://localhost:3500/getMessages',{
        from:res.data.userId,
        to:props.recieverid
          }).then(res=>{
           console.log(res.data)
           setData([...res.data])
         }).catch(e=>console.error(e))
       
    }).catch((e)=>console.log(e))
 
  },[props.recieverid])
  return (
    <div>
<UserNameContent userId={props.recieverid} />
{data.length>0?<MessageArea message={data}  socket={socket} userId={userId}/>:''}
<TextArea from={userId} to={props.recieverid} socket={socket} setData={setData}/>
    </div>
  )
}

export default ChatContent