import axios from 'axios'
import React,{useEffect,useState} from 'react'
import MessageArea from './MessageArea'
import TextArea from './TextArea'
import UserNameContent from './UserNameContent'
import { useParams } from 'react-router-dom'

function ChatContent() {
  const params=useParams()
  const {recieverid}=params
  const [data,setData]=useState({})
  console.log(recieverid)
  let userId
  let role
  useEffect(()=>{
    axios.get('http://localhost:4000/getId',{
      headers:{
        'x-access-token':localStorage.getItem('token')?localStorage.getItem('token'):""
      }
    }).then(res=>{
      console.log(res.data)
      userId=res.data.userId
      role=res.data.role
    })
  axios.post('http://localhost:4000/getMessages',{
 from:userId,
 to:recieverid
   }).then(res=>{
    console.log(res.data)
    setData(res.data.projectedMessages)
  })

  },[recieverid,userId])
  return (
    <div>
<UserNameContent userId={recieverid} />
<MessageArea message={data}/>
<TextArea from={userId} to={recieverid} />
    </div>
  )
}

export default ChatContent