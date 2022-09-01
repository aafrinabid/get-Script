import React,{useEffect,useState,useRef} from 'react'
import classes from './chat.module.css'
import ChatComponent from './ChatComponent'
import ChatUser from './ChatUser'
import { Switch,Route ,Redirect,useLocation, useHistory} from 'react-router-dom';
import {io} from 'socket.io-client'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { chatActions } from '../../assets/store/chatSlice';

function Chat(props) {
  const dispatch=useDispatch()

  const history=useHistory();
  const [seen,setSeen]=useState(false)
const [userId,setUserId]=useState(null)
const [msg,setMsg]=useState({})
const [ownerName,setOwnerName]=useState('')
let role
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
        axios.post('http://localhost:3500/getUsername',{
          id:res.data.userId
        }).then(res=>{
          console.log(res.data.username,'username')
          const length=res.data.username.length
          const username=res.data.username.split('')
          const index=username.findIndex(letter=>letter==='@')
          let finalName
          if(index>0){
              const diff=length-index
              const deleted=username.splice(index,diff)
              finalName=username.join('')
          }else{
              finalName=res.data.username      
          }
          setOwnerName(finalName)
        })
        // const recId=r
      })
 
  },[])
  useEffect(()=>{
    if(userId){
      // socket.current= io('http://localhost:3001')
      props.socket.current.emit('join-chat',userId)
      props.socket.current.on('notifies',data=>{
  console.log('userdateeea',data)
  // socket.current.emit('fetch-msg',{
  //   // messageId:data.messageid
  //   userId:userId
  // })

    })

    // socket.current.on('last-msg',(data)=>{
    //   dispatch(chatActions.userAdder(...data))

    // })
  
  }
},[userId])
console.log(msg)
  return (
    <div className={classes.container}>
  <div className={classes.chat}>

    <ChatUser socket={props.socket}  ownerName={ownerName} userId={userId} setSeen={setSeen} msg={msg}/>
    {!seen && <h1>hiii chat here d</h1>}
    {seen &&
    <Switch>
    <Route path='/chat/t/:recieverid/:role'>
  <ChatComponent socket={props.socket}/>
  </Route>
  </Switch> 
    } 
    



  </div>
  </div>
  )
}

export default Chat