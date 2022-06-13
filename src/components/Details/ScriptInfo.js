import React from 'react';
import classes from './ScriptInfo.module.css';

function ScripInfo() {
  return (
    <div className={`${classes.content} text-white`}>
     <h1 className='text-xl font-bold'>Uploaded by<br/>Sherif sir</h1>
     <h2 className='text-xl font-extrabold pr-5'>When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.</h2>
     <h2 className='text-l font-semibold'>Genres:Military, Science Fiction, Astronomy</h2>
     <h2>Type:Series Concept</h2>
    </div>
  )
}

export default ScripInfo