import React from 'react'
import { useParams } from 'react-router-dom'
import classes from './UserContainer.module.css'

function UserContainer(props) {
  // const params=useParams();
  // const {role}=params
  useEffect(()=>{
    axios.post('/userDetails',{
      id:props.recieverid,
      role:props.role
    }).then((res)=>{
      setData(res.data)
    })
      },[props.recieverid,props.role])

  const [data,setData]=useState({})
  return (
    <div className={classes.user}>
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