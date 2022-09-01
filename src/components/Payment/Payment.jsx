import { Button, Divider } from '@mui/material'
import React from 'react'
import classes from './Payment.module.css'
import { useEffect ,useRef} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {io} from 'socket.io-client';
import { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {useHistory} from 'react-router-dom'
import {useStripe,useElements} from '@stripe/react-stripe-js';
function Payment() {

  const history=useHistory() 
 const stripe=useStripe()
  // const stripe=loadStripe('pk_test_51LTPCzSCQkcXAqhhZxyMcv6zvoLE9nQfQxavukoJtkHgbtANrn1G2e9irr9AdYOgUynxPNVpfFYMdEWpK907C3PV00pR4loQYv')
    const params=useParams()
    const {scriptId}=params
    const [price,setPrice]=useState(500)
    const [email,setEmail]=useState('')
    console.log(email)
    useEffect(() => {
      axios.post('http://localhost:3500/getemail',{
        scriptId
      }).then((res)=>{
        setEmail(res.data)
      })
    
      
    }, [scriptId])
    



    function isDate(val) {
        // Cross realm comptatible
        return Object.prototype.toString.call(val) === '[object Date]'
      }
      
      function isObj(val) {
        return typeof val === 'object'
      }
      
       function stringifyValue(val) {
        if (isObj(val) && !isDate(val)) {
          return JSON.stringify(val)
        } else {
          return val
        }
      }
      
      function buildForm({ action, params }) {
        const form = document.createElement('form')
        form.setAttribute('method', 'post')
        form.setAttribute('action', action)
      
        Object.keys(params).forEach(key => {
          const input = document.createElement('input')
          input.setAttribute('type', 'hidden')
          input.setAttribute('name', key)
          input.setAttribute('value', stringifyValue(params[key]))
          form.appendChild(input)
        })
      
        return form
      }
      
       function post(details) {
        console.log(details)
        const form = buildForm(details)
        document.body.appendChild(form)
        form.submit()
        form.remove()
      }
      
      const getData=(data)=>{
        console.log(data)

        return fetch(`http://localhost:3500/payment`,{
          method:"POST",
          headers:{
              Accept:"application/json",
              "Content-Type":"application/json",
          },
          body:JSON.stringify(data)
      }).then(response=>response.json()).catch(err=>console.log(err))
    }
       


     const makePayment=()=>
  {
    getData({amount:500,email,scriptId}).then(response=>{
      console.log(response)

      var information={
          action:"https://securegw-stage.paytm.in/order/process",
          params:response
      }
    post(information)
  
  })
  


  }

  const makeStripePayment=async(token)=>{
    try{
      const body={
        token,
        product:{
          price,
          id:scriptId
        }
      }
  
      // const headers={
      //   "Content-Type":'application/json'
      // }
  
      const result=await axios.post(`http://localhost:3500/paymentstripe`,body)
      console.log(result.data)
      if(result.data.requires_action){
        const data= await stripe.confirmCardPayment(result.data.payment_intent_client_secret)
        console.log(data.paymentIntent.status)
        if(data.paymentIntent.status==='succeeded'){
          console.log('it is confirmed op now')
          history.replace(`/Browse/${0}`)
        }
      }
      

      // .then(res=>{
      //   console.log('RESPONSE',res)
      //   const {status}=res
      //   console.log(status)
      //   if(status===200){
      //     console.log(res.data)
      //     history.push('/')
      //   }
  
      // })
     
    }catch(e){
      console.log(e)
    }

  }
  return (
    <div className={classes.payment} style={{color:'white'}}>
        <div className={classes.feature}>
            <div className={classes.featuremsg}>
         <h1> want to your script to be featured and read by more producers <br />
         and users</h1>
         <h2>Upgrade your Script to top position <br />
            with featured tag
         </h2>         
            </div>

            <Divider />

            <div>
<h1>Feature your Script here just for <br/>
    500Rs </h1>

            </div>
            <Divider />
            <div className={classes.method}>
                <Button onClick={makePayment}>Pay with Paytm</Button>
                <StripeCheckout
                stripeKey='pk_test_51LTPCzSCQkcXAqhhdPxstVEJtN1QMAeBuzNaMJuyokB9etMIUE1JtCfkAiGXTib6psO8PzrNNJ6S7dXLMv7gSwRh00oT21JnUo'
                token={makeStripePayment}
                name={'featur your script'}
                amount={price *100}

                >

                <Button>Pay with Stripe</Button>
                </StripeCheckout>

            </div>

        </div>


    </div>
  )
}

export default Payment