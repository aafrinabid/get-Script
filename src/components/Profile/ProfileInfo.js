import React, { Fragment } from 'react';
import classes from './Profile.module.css'
import { useParams,useLocation } from 'react-router-dom';
import { Instagram, Facebook , LinkedIn, Twitter } from '@mui/icons-material';
import ScriptPostedCards from '../PostedScriptCards/ScriptPostedCards';


function ProfileInfo() {
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

  return (
    <div className={classes.profile}>
    <div className= { `${classes.profilecard} w-full` }style={divImage} >
      <img src='https://media.istockphoto.com/photos/cinematographer-picture-id504854133?k=20&m=504854133&s=612x612&w=0&h=h81HJkAJRoGH5_6WcLV--t-XDQUbDyCizhKmfS_dGhA=' className='h-44 mt-12 ml-12 pl-8 pt-4 shadow-l rounded ' />
      <h1 className='text-9xl py-20'>Babu Raj</h1>
      <div className={ `${classes.details}  pt-12 mt-2 `} >
        <div className={classes.socials}>
         <h1 className='text-3xl mb-3'> Socials </h1>
        <Instagram className='text-3xl mx-3 cursor-pointer'/>
        <Facebook className='text-3xl mx-3 cursor-pointer'/>
        <Twitter className='text-3xl mx-3 cursor-pointer'/>
        <LinkedIn className='text-3xl mx-3 cursor-pointer'/>
        <h1 className='text-3xl mt-7'>Scripts Posted</h1>
        <h1 className='text-5xl'>12</h1>
        </div>
      </div>
      {/* <div className='h-0.5 bg-cyan-800 col-span-3 m-4'></div> */}
      <div className={`text-xl col-span-3 pl-12 ml-7 pt-6  text-left ${classes.description}`}>
      Ancient myths, tall tales and ghost stories - Lore and lies. Fascinated by every language in the world and endeavoring to pick at least one up before I die. My cats will tell you I sing too loudly and dance terribly, though I would advise you not to believe them as both are notorious liars. Country, hip-hop, disco, soul, grunge, pop, rock and everything in between. My favourite hobby is laughing until I cry and my goal is making others do the same.

      </div>
      
      </div>
      <div className={`mt-20 pt-11 h-screen w-full bg-inherit ${classes.postedScripts}`} >
        <h1 className='py-7 text-3xl text-white  font-extrabold'>Posted Scripts</h1>
        <div className='bg-inherit'>
          <ScriptPostedCards />

        </div>

      </div>
      </div>
  )
}

export default ProfileInfo