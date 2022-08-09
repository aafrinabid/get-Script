import { Button, Divider } from '@mui/material'
import React from 'react'
import classes from './Payment.module.css'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

function Payment() {
    const params=useParams()
    const {scriptId}=params
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
                <Button>Pay with Stripe</Button>

            </div>

        </div>


    </div>
  )
}

export default Payment