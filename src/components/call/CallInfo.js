import React from 'react'

function CallInfo(props) {
  return (
    <div className='flex'>
      <h1>{props.call.from} is calling you</h1>
      <h3 onClick={props.answerCall}>answer</h3>
      <h3>reject</h3>

    </div>
  )
}

export default CallInfo