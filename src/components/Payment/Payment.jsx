import { Button, Divider } from '@mui/material'
import React from 'react'
import classes from './Payment.module.css'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {useHistory} from 'react-router-dom'
function Payment() {
  const history=useHistory()
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
      console.log(result)

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
                stripeKey='pk_test_51LTPCzSCQkcXAqhhHp9ueINd9xnLf5PpFwJ86Hb5uRafifCIN1yTYThFBNlEjaLhby1ppWF4czlo4T6s25kETBDK00meMrvl4U'
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