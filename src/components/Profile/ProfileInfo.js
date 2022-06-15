import React from 'react';
import classes from './Profile.module.css'
import { useParams,useLocation } from 'react-router-dom';


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
    <div className= { `${classes.profilecard} w-screen` }style={divImage} >
      <img src='https://media.istockphoto.com/photos/cinematographer-picture-id504854133?k=20&m=504854133&s=612x612&w=0&h=h81HJkAJRoGH5_6WcLV--t-XDQUbDyCizhKmfS_dGhA=' className='h-44 mt-12 ml-12 pl-8 pt-4 shadow-l rounded ' />
      <h1 className='text-9xl py-20'>Babu Raj</h1>
      <div className={ `${classes.details}  pt-12 mt-2 `} >
        <div className='flex flex-col justify-center  '>
         <h1> Details </h1>
        <li className='list-none'>awards</li>
        <li className='list-none'>script writer</li>
        </div>
      </div>
      {/* <div className='h-0.5 bg-cyan-800 col-span-3 m-4'></div> */}
      <div className={`text-l col-span-3 pl-12 ml-7 pt-6  text-left ${classes.description}`}>
      Ancient myths, tall tales and ghost stories - Lore and lies. Fascinated by every language in the world and endeavoring to pick at least one up before I die. My cats will tell you I sing too loudly and dance terribly, though I would advise you not to believe them as both are notorious liars. Country, hip-hop, disco, soul, grunge, pop, rock and everything in between. My favourite hobby is laughing until I cry and my goal is making others do the same.

      </div>
      
      

      </div>
  )
}

export default ProfileInfo