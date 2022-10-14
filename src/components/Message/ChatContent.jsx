import axios from 'axios'
import React,{useEffect,useState, useRef} from 'react'
import MessageArea from './MessageArea'
import TextArea from './TextArea'
import UserNameContent from './UserNameContent'
import { useParams } from 'react-router-dom'
import {io} from 'socket.io-client'

function ChatContent(props) {
  console.log(props)
  const params=useParams()
  const {recieverid}=params
  const [recieverId,setRecieverId]=useState(null)
  const [messageId,setMessageId]=useState(recieverid)
  const [data,setData]=useState([])
  let role
  console.log(data)
  const [userId,setUserId]=useState(null)
  console.log(userId)
 
  useEffect(()=>{
    console.log('what the hell dude its more than i think')
    axios.get('http://localhost:3500/getId',{
      headers:{
        'x-access-token':localStorage.getItem('token')?localStorage.getItem('token'):""
      }
    }).then(res=>{
      // axios.post('http://localhost:3500/messageId',{
      //   userid:res.data.userId,
      //   recieverid:recieverid
      //  }).then((res)=>{
        // console.log(res.data)
        // setMessageId(res.data.messageId)
        // setRecieverId(res.data.recieverId)
       axios.post('http://localhost:3500/getMessages',{
        from:res.data.userId,
        messageId:recieverid
          }).then(res=>{
           console.log(res.data,'my messages')
           
           setData([...res.data.projectedMessages])
         }).catch(e=>console.error(e))        
      //  }).catch(e=>console.log(e))
      console.log(res.data)
      setUserId(res.data.userId)
      role=res.data.role
      
       
    }).catch((e)=>console.log(e))
 
  },[recieverid])
  return (
    <div>
<UserNameContent userId={props.recieverid} />
{data.length>0  ?<MessageArea message={data} to={recieverId} from={userId} messageId={messageId}  socket={props.socket} userId={userId}/>: <div style={{height:'568px',border:'1px solid black',display:'flex',flexDirection:'column',overflowY:'scroll',backgroundImage:`url('https://images.unsplash.com/photo-1531303511320-729cbf66254f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGdyZWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80')`, backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',padding:'0 32px'}}>
</div>}
{

messageId? <TextArea from={userId} to={props.recieverid} messageId={messageId} socket={props.socket} setData={setData}/> :''
}
    </div>
  )
}

export default ChatContent