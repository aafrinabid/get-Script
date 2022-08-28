import { data } from 'autoprefixer'
import axios from 'axios'
import React from 'react'
import { useEffect,useState,useRef } from 'react'
import classes from './ChatUser.module.css'
import UserContainer from './UserContainer'
import {useHistory, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { chatActions } from '../../assets/store/chatSlice'
import { Divider } from '@mui/material';


function ChatUser(props) {
  const [userId,setUserId]=useState(null)
  const [ownerName,setOwnerName]=useState('')
  const history=useHistory();
 const change=useSelector(state=>state.chatHandler.change)
 const users=useSelector(state=>state.chatHandler.users)
 console.log('***************',users,',****************')
 
  // const params=useParams()

  // const {recieverid}=params
  const dispatch= useDispatch()
  const [datas,setDatas]=useState([])
    let role
  console.log(datas)
  useEffect(()=>{
  //     axios.get('http://localhost:3500/getId',{
  //       headers:{
  //         'x-access-token':localStorage.getItem('token')?localStorage.getItem('token'):""
  //       }
  //     }).then(res=>{
  //       console.log(res.data)
  //       // userId=res.data.userId
  //       role=res.data.role
  //       // axios.post('http://localhost:3500/getUsername',{
  //       //   id:res.data.userId
  //       // }).then(res=>{
  //       //   console.log(res.data.username,'username')
  //       //   const length=res.data.username.length
  //       //   const username=res.data.username.split('')
  //       //   const index=username.findIndex(letter=>letter==='@')
  //       //   let finalName
  //       //   if(index>0){
  //       //       const diff=length-index
  //       //       const deleted=username.splice(index,diff)
  //       //       finalName=username.join('')
  //       //   }else{
  //       //       finalName=res.data.username      
  //       //   }
  //       //   setOwnerName(finalName)
  //       // })
  //       // props.socket.current.emit('join-chat',res.data.userId)
  //       setUserId(res.data.userId)
  //       // const recId=r

        axios.post('http://localhost:3500/messagedetail',{
          userid:props.userId,
        },{
        headers:{
          'x-access-token':localStorage.getItem('token')?localStorage.getItem('token'):""
        }
      }).then((res)=>{
          console.log(res.data,'from data baase')
          if(res.data.message>0){

            dispatch(chatActions.userAdder({users:res.data.result}))
          }else{

            dispatch(chatActions.userCleaner())
          }
          // setDatas([...res.data.result])
      
        }).catch(e=>{
          console.log('message details error')

        })
      // })
 
  },[change,props.userId])

//   useEffect(()=>{
//     if(userId){

//         props.socket.current.emit('join-chat',res.data.userId)
//     }
//   },[userId,props.socket.current])

//  const updateList=()=>{
//   props.socket.current.on('update-list',(data)=>{
//           console.log(data)
//           dispatch(chatActions.changeHandler())
//         })

//  }

  useEffect(()=>{
    if(props.socket.current){
      props.socket.current.on('update-list',(data)=>{
        console.log(data,'sing for the dancer')
        props.socket.current.emit('fetch-list',{
          userId:userId
        })
        props.socket.current.on('list',(data)=>{
          console.log(data,'from list')
          // setDatas(...data.users)
          
        })

      //  dispatch(chatActions.changeHandler({date:data}))
        
      })
    }
  },[])
  
  return (
    <div style={{backgroundColor:'rgb(32,44,51)',borderRight:'.1px solid #545353'}} >
        <div style={{border:'1px rgb(237,236,237)',height:'55px'}}>
      <h4 style={{color:'white',textAlign:'center',border:'1px rgb(237,236,237)',paddingTop:'15px'}}>{props.ownerName}</h4>
      {/* <h3>scriptWriters</h3> */}
      </div>
    <div className={classes.list}>
      <Divider />

        {
                  users.map((data)=>(
              
            <UserContainer key={data.reciever_id}  userId={data.reciever_id} setSeen={props.setSeen} messageId={data.message_id} socket={props.socket}  msg={data.last_msg}/>
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