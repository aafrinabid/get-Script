import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import classes from './UserNameContent.module.css'
import axios from 'axios'
function UserNameContent(props) {
  const params=useParams();
  const {role}=params
  const [data,setData]=useState('')
  console.log(data)

  useEffect(()=>{
  console.log('sssssssssssss***************')

axios.post('http://localhost:3500/userDetails',{
  id:props.userId,
  role:role
}).then((res)=>{
  console.log(res.data.username)
  setData(res.data)
}).catch((e)=>console.log(e))
  },[role,props.userId])
  return (
    <div className={classes.upperpart}>
         <img className={classes.profile} src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80' />
         <p style={{margin:'0px',marginLeft:'10px',textAlign:'start', padding:'15px 0px'}}>{data.username}</p>

    </div>
  )
}

export default UserNameContent