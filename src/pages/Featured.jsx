import axios from 'axios'
import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Payment from '../components/Payment/Payment'

function Featured() {
  const params=useParams();
  const {scriptId}=params
  console.log(scriptId)
  const history = useHistory()
  useEffect(()=>{
    axios.get('http://localhost:3500/isAuthPayment',{
      headers:{
        'x-access-token':localStorage.getItem('token')?localStorage.getItem('token'):"",
        'scriptid':scriptId
      }
    }).then((res)=>{
      console.log(res)
      if(res.data.auth===false){
        return history.replace('/login')
      }if(res.data.pAuth===true){
        return
        // return history.push('/chat/t')

      }if(res.data.pAuth===false&&res.data.auth===true){
        return history.replace('/')
      }

    })

  },[scriptId])
  return (
    <div style={{marginTop:'100px'}}>
        <Payment />
        {/* <h1>hiiiiiiiiiiii</h1> */}
        </div>
  )
}

export default Featured