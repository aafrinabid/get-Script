import axios from 'axios'
import React,{useEffect,useState, useRef} from 'react'
import MessageArea from './MessageArea'
import TextArea from './TextArea'
import UserNameContent from './UserNameContent'
import { useParams } from 'react-router-dom'
import {io} from 'socket.io-client'

function ChatContent(props) {
  console.log(props)
  // const socket=useRef();
  const params=useParams()
  const {recieverid}=params
  const [recieverId,setRecieverId]=useState(null)
  const [messageId,setMessageId]=useState(null)
  const [data,setData]=useState([])
  let role
  console.log(data)
  const [userId,setUserId]=useState(null)
  console.log(userId)
  // const socket
  // useEffect(()=>{
  //   if(userId){
  //     socket.current= io('http://localhost:3001')
  //   }
  
  // },[userId])
 
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
    // localStorage.removeItem('params')
    console.log('what the hell dude its more than i think')
    axios.get('http://localhost:3500/getId',{
      headers:{
        'x-access-token':localStorage.getItem('token')?localStorage.getItem('token'):""
      }
    }).then(res=>{
      axios.post('http://localhost:3500/messageId',{
        userid:res.data.userId,
        recieverid:recieverid
       }).then((res)=>{
        console.log(res.data)
        setMessageId(res.data.messageId)
        setRecieverId(res.data.recieverId)
        // localStorage.setItem('params',res.data.recieverId)
       axios.post('http://localhost:3500/getMessages',{
        from:res.data.senderId,
        to:res.data.recieverId
          }).then(res=>{
           console.log(res.data)
           
           setData([...res.data.projectedMessages])
         }).catch(e=>console.error(e))        
       }).catch(e=>console.log(e))
      console.log(res.data)
      setUserId(res.data.userId)
      role=res.data.role
      
       
    }).catch((e)=>console.log(e))
 
  },[recieverid])
  return (
    <div>
<UserNameContent userId={props.recieverid} />
{data.length>0 && recieverId ?<MessageArea message={data} to={recieverId} from={userId} messageId={messageId}  socket={props.socket} userId={userId}/>: <div style={{height:'568px',border:'1px solid black',display:'flex',flexDirection:'column',overflowY:'scroll',backgroundColor:'rgb(255,254,254)'}}>
</div>}
{

messageId? <TextArea from={userId} to={props.recieverid} messageId={messageId} socket={props.socket} setData={setData}/> :''
}
    </div>
  )
}

export default ChatContent