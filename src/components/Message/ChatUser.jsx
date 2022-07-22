import { data } from 'autoprefixer'
import axios from 'axios'
import React from 'react'
import { useEffect,useState,useRef } from 'react'
import classes from './ChatUser.module.css'
import UserContainer from './UserContainer'
import {useHistory, useParams} from 'react-router-dom'
import { useSelector } from 'react-redux'


function ChatUser(props) {
  const [userId,setUserId]=useState(null)
  const history=useHistory();
 const change=useSelector(state=>state.chatHandler.change)
 
  // const params=useParams()

  // const {recieverid}=params
  const [datas,setDatas]=useState([])
    let role
  console.log(datas)
  useEffect(()=>{
      axios.get('http://localhost:3500/getId',{
        headers:{
          'x-access-token':localStorage.getItem('token')?localStorage.getItem('token'):""
        }
      }).then(res=>{
        console.log(res.data)
        // userId=res.data.userId
        role=res.data.role
        setUserId(res.data.userId)
        // const recId=r
        axios.post('http://localhost:3500/messagedetail',{
          userid:res.data.userId,
        }).then((res)=>{
          console.log(res.data)
          setDatas([...res.data.result])
      
        })
      })
 
  },[change])
  
  return (
    <div style={{backgroundColor:'rgb(255,254,254)',border:'1px rgb(237,236,237)'}} >
        <div style={{border:'1px rgb(237,236,237)'}}>
      <h4 style={{color:'black',textAlign:'center',border:'1px rgb(237,236,237)'}}>username</h4>
      </div>
      <h3>scriptWriters</h3>
    <div className={classes.list}>

        {
                  datas.map((data)=>(

            <UserContainer key={data.reciever_id} userId={data.reciever_id} setSeen={props.setSeen} messageId={data.message_id} socket={props.socket}/>
          ))
        }
       {/* <UserContainer/>
       <UserContainer/>
       <UserContainer/>
       <UserContainer/>
       <UserContainer/>
       <UserContainer/>
       <UserContainer/> */}

        

        
    </div>
    </div>
  )
}

export default ChatUser