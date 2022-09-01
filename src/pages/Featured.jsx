import axios from 'axios'
import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Payment from '../components/Payment/Payment'
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';



function Featured() {
  const stripePromise=loadStripe('pk_test_51LTPCzSCQkcXAqhhZxyMcv6zvoLE9nQfQxavukoJtkHgbtANrn1G2e9irr9AdYOgUynxPNVpfFYMdEWpK907C3PV00pR4loQYv')

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
        return history.replace(`/Browse/${0}`)
      }

    })

  },[scriptId])
  return (
    <div style={{marginTop:'100px'}}>
        <Elements stripe={stripePromise}>
        <Payment />
        </Elements>
        {/* <h1>hiiiiiiiiiiii</h1> */}
        </div>
  )
}

export default Featured