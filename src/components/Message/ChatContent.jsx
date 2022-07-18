import axios from 'axios'
import React,{useEffect,useState} from 'react'
import MessageArea from './MessageArea'
import TextArea from './TextArea'
import UserNameContent from './UserNameContent'
import { useParams } from 'react-router-dom'

function ChatContent() {
  const params=useParams()
  const {recieverid}=params
  const [data,setData]=useState([])
  console.log(data)
  const [userId,setUserId]=useState(null)
  let role
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
        to:recieverid
          }).then(res=>{
           console.log(res.data)
           setData([...res.data])
         }).catch(e=>console.error(e))
       
    }).catch((e)=>console.log(e))
 
  },[])
  return (
    <div>
<UserNameContent userId={recieverid} />
{data.length>0?<MessageArea message={data}/>:''}
<TextArea from={userId} to={recieverid} />
    </div>
  )
}

export default ChatContent