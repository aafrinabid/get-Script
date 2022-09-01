import React from 'react'
import Rows from '../Rows/Rows'

function Episodes(props) {
  return (
    <div className='py-5'>
            {/* <h1 className='text-xl text-white p-5'>More Episodes</h1> */}
            <Rows screenper='5' episodes={true}  scriptId={props.scriptId}/>

        </div>
  )
}

export default Episodes