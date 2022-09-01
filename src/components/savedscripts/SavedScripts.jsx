import React, { Fragment } from 'react';
import ScriptPostedCards from '../PostedScriptCards/ScriptPostedCards';

function SavedScripts() {


  return (

      
      <div className={`mt-20 pt-11 h-screen w-full bg-inheri`} >
        <h1 className='text-3xl text-white  font-extrabold' >Saved Scripts</h1>
        <div className='bg-inherit w-full'>
          <ScriptPostedCards  url={'http://localhost:3500/savedscripts'}/>

        </div>

      </div>

  )
}

export default SavedScripts