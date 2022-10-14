import React from 'react'
import { useEffect,useState,useContext } from 'react'
import { useParams } from 'react-router-dom'
import classes from './UserNameContent.module.css'
import axios from 'axios'
import { useSelector } from 'react-redux'
import VideocamIcon from '@mui/icons-material/Videocam';
import { SocketContext } from '../../assets/videoContext'
function UserNameContent(props) {
 const users=useSelector(state=>state.chatHandler.users)
  const {callUser,isCallingHandler}=useContext(SocketContext)
  const params=useParams();
  const [data,setData]=useState('')
  console.log(data)
  const callingTheUser=(id)=>{
    isCallingHandler()

    setTimeout(callUser.bind(null,id),1000);
    



  }

  useEffect(()=>{
    const data=users.filter(user=>user.message_id===props.messageId)
    
 console.log(data[0].users,'structured')
axios.post('http://localhost:3500/userDetails',{
  id:props.userId,
  users:data[0].users
}).then((res)=>{
  console.log(res.data,'inserting data')
  setData(res.data)
}).catch((e)=>console.log(e,'insert'))
  },[props.userId])
  return (
    <div className={classes.upperpart} style={{justifyContent:'center',alignItems:'center'}}>
         <img className={classes.profile} src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80' />
         <p style={{color:'#a5b9c4',margin:'0px',marginLeft:'10px',textAlign:'start', padding:'15px 0px'}}>{data.username}</p>
          <VideocamIcon onClick={callingTheUser.bind(null,props.userId)}  style={{cursor:'pointer',color:'rgb(165, 185, 196)'}}/>
    </div>
  )
}

export default UserNameContent