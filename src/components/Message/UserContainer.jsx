import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import classes from './UserContainer.module.css'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { chatActions } from '../../assets/store/chatSlice'
import { SwapHorizontalCircleOutlined } from '@mui/icons-material';
import { Divider } from '@mui/material';


function UserContainer(props) {
  console.log(props,props.msg,'checking coming',props.userId)
  const [isOnline,setIsOnline]=useState(null)
  const [msg,setMsg]=useState(props.msg)
  console.log(msg)
  const onlineUsers=useSelector(state=>state.chatHandler.onlineUsers)

  useEffect(()=>{
const onlineuser=onlineUsers.filter(user=>user.userId===props.userId)
if(onlineuser.length>0){
setIsOnline(true)
}else{
  setIsOnline(false)
}
  },[onlineUsers])
 
  
  const rooms=useSelector(state=>state.chatHandler.room)
  console.log(rooms)
  const dispatch=useDispatch()

  const history =useHistory();
  const [data,setData]=useState({})
  const params=useParams();
  console.log(onlineUsers)
 
  
  const chatHandler=()=>{
    history.push(`/chat/t/${props.userId}/${1}`)
    rooms.map((room)=>{
      console.log(room.toString(),'sixer')
      props.socket.current.emit('leave room',room)
    })
    const messageId=props.messageId
    dispatch(chatActions.currentChatAdder(messageId))
    
    console.log(messageId,'set',',*************************')
    props.socket.current.emit('join-room',messageId)
    props.socket.current.on('joined-room',data=>{
      console.log(data,'sockeeeeeeeeeeeeeeeeeeeeeeeeeet')
      if(data.state){
        props.setSeen(true)
        dispatch(chatActions.roomAdder({room:data.room}))

      }
    })
  }

  const currentChat=useSelector(state=>state.chatHandler.currentChat)


  useEffect(()=>{
    axios.post('http://localhost:3500/userDetails',{
      id:props.userId,
      role:1
    }).then((res)=>{
      setData(res.data)
    })
      },[props.userId])
      


  return (
    <>
    <div className={currentChat===props.messageId?classes.currentuser: classes.user} onClick={chatHandler} >
        <div style={{paddingTop:'22px'}}>
        <img className={classes.profile} src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80' />
        </div>
            <div className='flex flex-col'>
        <div className={classes.userText} style={{height:'46px'}}>
            <p className={classes.usernamecont}>{data.username}</p>
            </div>
              {/* <div style={{overflow:'hidden'}}> */}
              <div style={{display:'grid',gridTemplateColumns:'60% 40%'}}>
            <div className={classes.usermessage}>{props.msg}</div>
            {/* </div> */}
            <div>
            <p style={{
            margin:'0px',
            // height:'1px',
            // backgroundc: isOnline?'green':'red',
            backgroundImage:isOnline?'url("https://icon2.cleanpng.com/20180328/tsq/kisspng-circle-n-carpet-cleaning-upland-green-dot-corporat-dots-5abb905aa15890.9523326215222416266609.jpg")':'url("https://icon2.cleanpng.com/20180411/pre/kisspng-visual-perception-optical-illusion-eye-color-circle-5acdca5077ff26.9533774115234361124915.png")',
              color:isOnline?'green':'red',
              fontSize:'50px'
              // borderRadius: '109px',
              // padding: '-12px',
              // margin: '7px 56px'
}}></p>
</div>
            </div>
        </div>
    </div>
    <div>
<Divider />
</div>
</>
  )
}

export default UserContainer