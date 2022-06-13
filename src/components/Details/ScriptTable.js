import React from 'react';
import Classes from './ScriptTable.module.css'


function ScriptTable() {
    const pitch=['The origin','Human Hook','Character','Desires','Obstacles','Highlights','Open Road']
  return (
    <div className={` text-white shadow ${Classes.table}`}>
        
        {pitch.map((e,i)=>(
            <div className={Classes.tablecontent}>
            <h1 className='border-gray-300  border-transparent'>{i}</h1>
            <h1 className='border-gray-300  border-transparent'>{e}</h1>
            <h1 className={`border-gray-300 border-transparent ${Classes.description} text-left`}>Vince was talking to his mother but later he saw that its his mother that was hurt so i was never wrong lorem ipsam</h1>
           </div>
        ))}
        



    </div>
  )
}

export default ScriptTable