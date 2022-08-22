import React, { useEffect, useState,useRef } from 'react'
import MessageBox from './MessageBox';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { chatActions } from '../../assets/store/chatSlice';


function MessageArea(props) {
  console.log(props)
  let role
  const dispatch=useDispatch()
  const [msgData,setMsgData]=useState([...props.message])
   const params=useParams()
  const {recieverid}=params
  const [recieverId,setRecieverId]=useState(null)
  console.log(recieverId)
  const [userId,setUserId]=useState(null)
  const [trues,setTrues]=useState(null)
 useEffect(()=>{
  setRecieverId(props.to)
 },[props.to])
  console.log('gettttting messagehfiehfsdfdkdfs',recieverid)
  useEffect(()=>{
    console.log('singis isk king ')
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
           setMsgData([...res.data.projectedMessages])
           setUserId(res.data.from)
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
      props.socket.current.on('update-list',(data)=>{
        console.log(data,'sing for the dancer')
        props.socket.current.emit('fetch-list',{
          userId:props.from
        })
        props.socket.current.on('list',(data)=>{
          console.log(data)
          dispatch(chatActions.userAdder({users:[...data.users]}))
        })
  
      //  dispatch(chatActions.changeHandler({date:data}))
        
      })
    
   
    props.socket.current.on('recieve-msg',(data)=>{
      console.log('messageArea',data,props.messageId)
      console.log(recieverid,'smeeesfge',props.to)
      // if(data.room==props.messageId){
        // if(data.reciever===userId || data.sender===userId){

          console.log('inside the most the sdfe shit',props.to)
          if(recieverId){
            if(data.reciever===recieverId || data.sender===recieverId){
          
              const isit=data.reciever===props.to
              const it=data.sender===props.to
              console.log(isit,it)
            setArrivalMessage({fromSelf:props.userId.toString()===data.sender,message:data.msg})
          // }
          }
          
        
        
      }
     
      // }
      

      
   })

   return () => {
    props.socket.current.off("recieve-msg", (callback)=>{
      console.log(callback)
    });
 }
  }
},[recieverId,props.socket])

useEffect(()=>{
  console.log('arrival teams')
  dispatch(chatActions.changeHandler({where:'messageArea'}))
arrivalMessage && setMsgData((prevState)=>[...prevState,arrivalMessage])
},[arrivalMessage])

useEffect(()=>{
scrollRef.current?.scrollIntoView({ behavior: "smooth" });
},[msgData])
  // const messages=useSelector(state=>state.messageHandler.message)
  // console.log(messages)
  return (
        <div style={{height:'592px',border:'1px solid black',display:'flex',flexDirection:'column',overflowY:'scroll',backgroundColor:'#40A8A9'}}>
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