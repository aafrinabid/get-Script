import React, { useEffect, useState,useRef } from 'react'
import MessageBox from './MessageBox';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function MessageArea(props) {
  let role
  const [msgData,setMsgData]=useState([...props.message])
   const params=useParams()
  const {recieverid}=params
  console.log('gettttting messages',recieverid)
  useEffect(()=>{
    console.log('what the hell dude its more than i think')
    axios.get('http://localhost:3500/getId',{
      headers:{
        'x-access-token':localStorage.getItem('token')?localStorage.getItem('token'):""
      }
    }).then(res=>{
      console.log(res.data)
      // setUserId(res.data.userId)
      role=res.data.role
      axios.post('http://localhost:3500/getMessages',{
        from:res.data.userId,
        to:recieverid
          }).then(res=>{
           console.log(res.data)
           setMsgData([...res.data])
         }).catch(e=>console.error(e))
       
    }).catch((e)=>console.log(e))
 
  },[recieverid])
  // const [userId,setUserId]=useState('')
  console.log(props)
  const scrollRef= useRef()
  const [arrivalMessage,setArrivalMessage]=useState(null)
  console.log(arrivalMessage)
  useEffect(()=>{
   if(props.socket.current){
    props.socket.current.on('recieve-msg',(data)=>{
      console.log('messageArea',data)
      setArrivalMessage({fromSelf:props.userId.toString()===data.sender,message:data.msg})
   })
  }
}
      // setUserId(res.data.userId)
    

)

useEffect(()=>{
arrivalMessage && setMsgData((prevState)=>[...prevState,arrivalMessage])
},[arrivalMessage])

useEffect(()=>{
scrollRef.current?.scrollIntoView({ behavior: "smooth" });
},[msgData])
  // const messages=useSelector(state=>state.messageHandler.message)
  // console.log(messages)
  return (
        <div style={{height:'568px',border:'1px solid black',display:'flex',flexDirection:'column',overflowY:'scroll',backgroundColor:'rgb(255,254,254)'}}>
          {
            msgData.map(message=>(
              

              <MessageBox key={Math.random()*10000} message={message.message} from={message.fromSelf} scrollRef={scrollRef} />
            )
            )

          }
        

        </div>

  )
}

export default MessageArea