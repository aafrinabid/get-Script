import React, { Fragment } from 'react';
import classes from './Profile.module.css'
import { useParams,useLocation ,useHistory} from 'react-router-dom';
import { Instagram, Facebook , LinkedIn, Twitter ,ChatBubble} from '@mui/icons-material';
import ScriptPostedCards from '../PostedScriptCards/ScriptPostedCards';
import { useEffect } from 'react';
import { useState } from 'react';
import {useSelector} from 'react-redux'
import axios from 'axios';



function ProfileInfo() {
  const history= useHistory();
   const [details,setDetails]=useState({})
   const [name,setName]=useState('')
   const [scriptCount,setScriptCount]=useState(0)
  const userRole=useSelector(state=>state.authHandler.role)

   
   console.log(details)
   const params=useParams();
   const {userid}=params;
   const {role}=params;
  useEffect(()=>{
    console.log('dddhdhdhdhdh')
  axios.post('http://localhost:3500/getProfileInfo',{
    userid:userid,
    role
  }).then((res)=>{
    console.log(res)
    setDetails(res.data.result)
    setName(res.data.username)
    setScriptCount(res.data.scriptCount)
  }).catch(e=>console.log(e))
  },[userid])
  const location=useLocation()
  // console.log(params)
  const {pathname}=location
  console.log(pathname)
  const url='https://images.unsplash.com/photo-1452423668729-43a98052d3ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
  const divImage =  {
    
    backgroundImage: `linear-gradient(180deg, rgba(1, 3, 15, 0.952), rgba(73, 69, 68, 0.64)), url(${url})`,
       height:'300px',
      //  width:'2500px',
    //    marginTop:'-70px',
    //    fontSize:'50px',
       backgroundSize: '100%',
       backgroundRepeat: 'no-repeat',
   };
  //  let [userId,setUserId]=useState()
   const chatHandler=(id)=>{
    axios.get('http://localhost:3500/getId',{
      headers:{
        'x-access-token':localStorage.getItem('token')?localStorage.getItem('token'):""
      }
    }).then((res)=>{
      console.log(res.data)
 const date=new Date()

    axios.post('http://localhost:3500/messagelist',{
     senderId:res.data.userId,
     recieverId:id,
     date
    }
    ).then(res=>{
      history.push(`/chat/t/${details.id}/${1}`)
     

    }).catch(e=>{
      console.error(e)
    })
    }).catch(e=>{
      console.log(e)
    })
    

    

    
   }

  return (
    <div className={classes.profile}>
    <div className= { `${classes.profilecard} w-full` }style={divImage} >
      <img src='https://media.istockphoto.com/photos/cinematographer-picture-id504854133?k=20&m=504854133&s=612x612&w=0&h=h81HJkAJRoGH5_6WcLV--t-XDQUbDyCizhKmfS_dGhA=' className='h-44 mt-12 ml-12 pl-8 pt-4 shadow-l rounded ' />
     <div className='p-5  pl-11'>
      <h1 className='text-9xl px-10 pt-10'>{name}</h1>
     {
      (userRole===2 || userRole===3) 
      &&
      <ChatBubble className='text-3xl  cursor-pointer' onClick={chatHandler.bind(null,details.id)}/>  
    }
      </div>
      <div className={ `${classes.details}  pt-12 mt-2 `} >
        <div className={classes.socials}>
         <h1 className='text-3xl mb-3'> Socials </h1>
        <Instagram className='text-3xl mx-3 cursor-pointer'/>
        <Facebook className='text-3xl mx-3 cursor-pointer'/>
        <Twitter className='text-3xl mx-3 cursor-pointer'/>
        <LinkedIn className='text-3xl mx-3 cursor-pointer'/>
        {details.type==='scriptwriter' &&

        <h1 className='text-3xl mt-7'>Scripts Posted</h1>
        }
        {
          details.type==='scriptwriter' &&

        <h1 className='text-5xl'>{scriptCount}</h1>
        }
        </div>
      </div>
      {/* <div className='h-0.5 bg-cyan-800 col-span-3 m-4'></div> */}
      <div className={`text-xl col-span-3 pl-12 ml-7 pt-6 mt-12 text-left ${classes.description}`}>
      Ancient myths, tall tales and ghost stories - Lore and lies. Fascinated by every language in the world and endeavoring to pick at least one up before I die. My cats will tell you I sing too loudly and dance terribly, though I would advise you not to believe them as both are notorious liars. Country, hip-hop, disco, soul, grunge, pop, rock and everything in between. My favourite hobby is laughing until I cry and my goal is making others do the same.

      </div>
      
      </div>
      <div className={`mt-20 pt-11  w-full bg-inherit ${classes.postedScripts}`} >
        <h1 className='pt-12 text-3xl text-white  font-extrabold' style={{paddingTop:'100px'}}>Posted Scripts</h1>
        <div className='bg-inherit w-full'>
          <ScriptPostedCards id={userid} url={'http://localhost:3500/writersscripts'}/>

        </div>

      </div>
      <div>
        
      </div>
      </div>
  )
}

export default ProfileInfo