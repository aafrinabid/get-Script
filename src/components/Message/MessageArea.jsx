import React from 'react'
import MessageBox from './MessageBox';
import { useSelector } from 'react-redux';


function MessageArea(props) {
  // const messages=useSelector(state=>state.messageHandler.message)
  // console.log(messages)
  return (
        <div style={{height:'568px',border:'1px solid black',display:'flex',flexDirection:'column',overflowY:'scroll',backgroundColor:'rgb(255,254,254)'}}>
          {
            props.messages.map(message=>(
              

              <MessageBox key={Math.random()*10000} message={message.message} from={message.fromSelf} />
            )
            )

          }
        

        </div>

  )
}

export default MessageArea