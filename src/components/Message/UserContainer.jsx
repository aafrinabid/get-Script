import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import classes from './UserContainer.module.css'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { chatActions } from '../../assets/store/chatSlice'

function UserContainer(props) {
  const rooms=useSelector(state=>state.chatHandler.room)
  console.log(rooms)
  const dispatch=useDispatch()
  const history =useHistory();
  const [data,setData]=useState({})
  const params=useParams();
  const chatHandler=()=>{
    history.push(`/chat/t/${props.userId}/${1}`)
    rooms.map((room)=>{
      console.log(room.toString(),'sixer')
      props.socket.current.emit('leave room',room)
    })
    const messageId=props.messageId
    props.socket.current.emit('join room',messageId)
    props.socket.current.on('joined room',data=>{
      console.log(data,'sockeeeeeeeeeeeeeeeeeeeeeeeeeet')
      if(data.state){
        props.setSeen(true)
        dispatch(chatActions.roomAdder({room:data.room}))

      }
    })
  }
  // const {role}=params
  useEffect(()=>{
    axios.post('http://localhost:3500/userDetails',{
      id:props.userId,
      role:1
    }).then((res)=>{
      setData(res.data)
    })
      },[props.userId])

  return (
    <div className={classes.user} onClick={chatHandler} >
        <div>
        <img className={classes.profile} src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80' />
        </div>
        <div className={classes.userText}>
            <p className={classes.usernamecont}>{data.username}</p>
            <p className={classes.usermessage}>sent you message</p>
        </div>
    </div>
  )
}

export default UserContainer