import React, { createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SocketContext = createContext();
// const socket = io('https://sleepy-sierra-81358.herokuapp.com/');

const ContextProvider = ({ children }) => {
  const history=useHistory()
  const loginStatus=useSelector(state=>state.authHandler.isLoggedIn)
  const location=useLocation
  const {pathname}=location
  const [signal,setSignal]=useState({})
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [isCalling,setIsCalling]=useState(false)
  const [stream, setStream] = useState();
  const [name, setName] = useState('');
  const [call, setCall] = useState({});
  const [isRecieving,setIsRecieving]=useState(false)
  const localConnection=new RTCPeerConnection()
  
//   const rc=new RTCPeerConnection()
//   const [me, setMe] = useState('');

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();
  let socket=useRef()
  console.log(socket)

  useEffect(() => {
  
if(loginStatus){
  socket.current = io('http://localhost:3002',{
    auth:{
      token:localStorage.getItem('token')?localStorage.getItem('token'):"",
    },
    
})
// }
// socketEmiter('online',{
//   room:'room',
// })
    
    socket.current.emit('joinVideo')
    // socket.on('me', (id) => setMe(id));
    socket.current.on('recieveCall', ({ from, name: callerName, signal }) => {
      console.log('recieving call machane do something')
        setCall({ from, name: callerName, signal });

    });

    socket.current.on('recieveCall', ({ from,signal,socketId }) => {
      console.log('recieving call machane do something')
        setIsRecieving(true)
        setCall({ from, signal,socketId });

    });
  }
 
  }, [loginStatus,isRecieving,isCalling,callAccepted]);
  
 const fixStream=(stream)=>{
setStream(stream)
 }
  const fixCall=(obj)=>{
    setIsRecieving(true)

    setCall(obj)

  }

  const setAnswer=(signal)=>{
    // callAccepter(userId)
    console.log('setting answer ',signal)
    const answer=new RTCSessionDescription(signal)
    localConnection.setRemoteDescription(answer)
  }

  
  const answering=()=>{
    setIsRecieving(false)
    setCallAccepted(true);
  }

  const isCallingHandler=()=>{
    setIsCalling(true)
  }

  const callAccepter=(id)=>{
    console.log('setting call',id)
    setCall({from:id})
    setCallAccepted(true);

  }

 const setConnectionRef=(peer)=>{
  console.log('setting connection ',peer)
    connectionRef.current=peer
  }

  const userVideoHandler=(currentStream)=>{
    userVideo.current.srcObject=currentStream
  }

  const leaveCall = () => {

    setCallEnded(true);
    setCallAccepted(false)


    // window.location.reload();
  };
const endingCall=()=>{
  setIsCalling(false)
  setCallAccepted(false)
}
  
  const rejectCall=()=>{
    socket.current.on('sing',data=>{
      console.log('what the hell')
    })
    setIsRecieving(false)
    connectionRef.current.destroy();
  }

  // const socketEmiter=(name,obj)=>{
  //   console.log(name,obj)
  //   socket.current.emit(name,obj)
  // }
  // const socketOn=(name,cb)=>{

  //   socket.current.on(name,cb)
  // }
 
  
  const answerCall = () => {
    // answering()
    setIsRecieving(false)
    setCallAccepted(true)
    const rc=new RTCPeerConnection()
    rc.ondatachannel=e=>{
      rc.dc=e.channel
      rc.dc.onmessage=e=>console.log('new message is here',e.data)
      rc.dc.onopen=e=>{
        console.log('connection opened')
        // setConnection(true)
      }
    }
    rc.ontrack=(e)=>{
      console.log(e)
      userVideo.current.srcObject=e.streams[0]
     }
     rc.addEventListener('track',(e)=>{
      userVideo.current.srcObject=e.streams[0]
     },false)
    // stream.getTracks().forEach(function (track) {
    //   rc.addTrack(track, stream);
    // });
    
     rc.addEventListener('icegatheringstatechange',(ev)=>{
      let connection=ev.target;
      switch(connection.iceGatheringState){
        case 'gathering':
          console.log('gathering')
          break;
          case  'complete':
            rc.onicecandidate=e=>{
              console.log('new ice kittiye')
             const answer= rc.localDescription
             console.log(answer)
             socket.current.emit('answerCall',{signal:answer,to:call.from,socket})        
            }
            break;
      }
    })
    console.log(call.signal)
    const offer=call.signal
  
    rc.setRemoteDescription(new RTCSessionDescription(offer)).then(e=>console.log('offer set'))
    rc.createAnswer().then(a=>rc.setLocalDescription(a)).then(a=>console.log('answer created')).catch(e=>e)
  
    stream.getTracks().forEach(function (track) {
      console.log(track,'trackingg')
      rc.addTrack(track,stream);
    });
  
  
  
  
  
  
    // const peer = new Peer({ initiator: false, trickle: false, stream });
    // if(call.signal){
    //     console.log(' trying to signal the offer')
    //   peer.signal(call.signal);
    // }
  
    // peer.on('signal', (data) => {
    //   console.log('checking the reciever callings',data)
    //   socket.current.emit('answerCall', { signal: data, to: call.from});
    // });
  
    // peer.on('stream', (currentStream) => {
    //   console.log(currentStream,'shounnnnnnnyyyyyyy')
      
    //  userVideo.current.srcObject=currentStream;
    // });
    
    // console.log(call.signal)
    // console.log(peer.signal)
  
    connectionRef.current = rc;
  };
  const endCall=(id)=>{
    leaveCall()
    connectionRef.current.destroy();
    socket.current.emit('endCall',id)
  
  }
  
  
  const callUser = (id) => {
  
    // isCallingHandler()
    setIsCalling(true)
    const sendChannel=localConnection.createDataChannel('sendChannel')
    sendChannel.onmessage=e=>console.log('message recieved!!!'+e.data)
    sendChannel.onopen=e=>{
      console.log('connection opened')
      // setConnection(true)
    }
    // stream.getTracks().forEach(function (track) {
    //   localConnection.addTrack(track, stream);
    // });
  
    // localConnection.ontrack=(e)=>{
    //   console.log(e)
    //   userVideo.current.srcObject=e.streams[0]
    // }   
    localConnection.addEventListener('track',(e)=>{
      userVideo.current.srcObject=e.streams[0]
     },false)
    localConnection.createOffer().then(o=>localConnection.setLocalDescription(o)).then(a=>console.log(a,'setSuccesfully'))
    localConnection.addEventListener('icegatheringstatechange',(ev)=>{
      let connection=ev.target;
      switch(connection.iceGatheringState){
        case 'gathering':
          console.log('gathering')
          break;
          case  'complete':
            console.log('completeing')
            localConnection.onicecandidate=e=>{
              console.log('NEW Ice candidtnant!! on Localconnection reprintinf sdp')
              // setOffer(JSON.stringify(localConnection.localDescription))
              const offer=localConnection.localDescription
              socket.current.emit('callUser', {id, signalData: offer })
              
  
             }
  
            break;
      }
    })
    stream.getTracks().forEach(function (track) {
      console.log(track,'trackingg')
      localConnection.addTrack(track,stream);
    });
  
  
  
  
    // history.push('/video')
    //  const peer = new Peer({ initiator: true, trickle: false, stream });
  
    // peer.on('signal', (data) => {
    //   socket.current.emit('callUser', { id, signalData: data});
    // });
  
    // peer.on('stream', (currentStream) => {
    //   console.log('useme',currentStream)
    //   // userVideoHandler(currentStream)
    //  userVideo.current.srcObject=currentStream;
      
    // });
    // peer.on('connect',()=>{
    //   peer.send('cooool strytttt')
    // })
  
    socket.current.on('callAccepted', (data) => {
      callAccepter(data.userId)
      console.log(data)
      localConnection.setRemoteDescription(data.signal)
    
    });
  
    connectionRef.current = localConnection;
    // setConnectionRef(peer)
  };

  return (
    <SocketContext.Provider value={{
        setAnswer,
      endCall,
      endingCall,
      setConnectionRef,
      userVideoHandler,
      callAccepter,
      isCallingHandler,
      call,
      isCalling,
      callAccepted,
      isRecieving,
      rejectCall,
      myVideo,
      userVideo,
      stream,
      name,
      setName,
      callEnded,
      callUser,
      leaveCall,
      answerCall,
      fixCall,
      answering,
      fixStream
    }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };