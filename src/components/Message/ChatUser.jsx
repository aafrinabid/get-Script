import { data } from 'autoprefixer'
import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
import classes from './ChatUser.module.css'
import UserContainer from './UserContainer'

function ChatUser() {
  const [datas,setDatas]=useState([])
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
  axios.post('http://localhost:4000/messagedetail',{
    userid:userId
  }).then((res)=>{
    setDatas([...res.data.result])

  })
  },[])
  return (
    <div style={{backgroundColor:'rgb(255,254,254)',border:'1px rgb(237,236,237)'}}>
        <div style={{border:'1px rgb(237,236,237)'}}>
      <h4 style={{color:'black',textAlign:'center',border:'1px rgb(237,236,237)'}}>username</h4>
      </div>
      <h3>scriptWriters</h3>
    <div className={classes.list}>

        {
                  datas.map((data)=>(

            <UserContainer userId={data.recieverid} role={data.role}/>
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