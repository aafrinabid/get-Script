import React, { createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
import { useSelector } from 'react-redux';
import { current } from '@reduxjs/toolkit';

// import e, { json } from 'express';

const SocketContext = createContext();


const socket = io('http://localhost:5000',{
  auth:{
    token:localStorage.getItem('token')?localStorage.getItem('token'):""
  }
})
// const socket = io('https://sleepy-sierra-81358.herokuapp.com/');

const ContextProvider = ({ children }) => {
  const isLoggedIn=useSelector(state=>state.authHandler.isLoggedIn)
  const room=useSelector(state=>state.chatHandler.room)

  const [open,setOpen]=useState(false)
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState('');
  const [call, setCall] = useState({});
  const [me, setMe] = useState('');
  const [isRecieving,setIsRecieving]=useState(false)
  const [isCalling,setIsCalling]=useState(false)
  const [offer,setOffer]=useState({})
  const [from,setFrom]=useState('')
  const [answer,setAnswer]=useState({})
  console.log(from)
console.log(call)

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
  // (callAccepted||isCalling) &&
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);
        console.log(currentStream)

        myVideo.current.srcObject = currentStream;
      }).catch(e=>console.log(e));

      isLoggedIn && socket.emit('join-video-channel')

    socket.on('me', (id) => setMe(id));

    socket.on('callUser', ({ from, name: callerName, signal,userId }) => {
      console.log('receiving the call',userId)
      setIsRecieving(true)
      setFrom(userId)
      setCall({ isReceivingCall: true, from, name: callerName, signal });
    });

    socket.on('end-call',()=>{
      console.log('ending the call')
      setCallAccepted(false)
      setIsCalling(false)
    })
  }, [callAccepted,isCalling,isLoggedIn]);


    const answerCall = () => {
      setFrom(call.from)
      setIsRecieving(false)
      setCallAccepted(true);
      const rc=new RTCPeerConnection()
      rc.ondatachannel=e=>{
        rc.dc=e.channel
        rc.dc.onmessage=e=>console.log('new message is here'+e.data)
        rc.dc.onopen=e=>console.log('connection OPENED')
        // rc.dc.on
      }
      stream.getTracks().forEach(function (track) {
        rc.addTrack(track, stream);
      });
      rc.ontrack=(e)=>{
        userVideo.current.srcObject=e.streams[0]
       }
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
               socket.emit('answerCall',{signal:answer,to:call.from})        
              }
              break;
        }
      })
      console.log(call.signal)
      const offer=call.signal
    
      rc.setRemoteDescription(new RTCSessionDescription(offer)).then(e=>console.log('offer set'))
      rc.createAnswer().then(a=>rc.setLocalDescription(a)).then(a=>console.log('answer created')).catch(e=>e)

  };

  
  const callUser = (id) => {
    console.log('callingTheUSer')
    console.log(id,stream)
    setFrom(id)
    // setIsCalling(true)
     const localConnection=new RTCPeerConnection()
     console.log(localConnection,'calling the user')
     let sdp

     const sendChannel=localConnection.createDataChannel('sendChannel')
     sendChannel.onmessage=e=>console.log('message recieved!!!'+e.data)
     sendChannel.onopen=e=>console.log('connection open')
    stream.getTracks().forEach(function (track) {
      localConnection.addTrack(track, stream);
    });
     localConnection.ontrack=(e)=>{
      userVideo.current.srcObject=e.streams[0]
     }
  // sendChannel.addEventListener('')
     if(open===true){

       sendChannel.send('heyy yoooooooooooooo')
     }
      
     localConnection.createOffer().then(o=>localConnection.setLocalDescription(o)).then(a=>console.log(a,'setSuccesfully'))
    //  setTimeout(socketCon,10000)
    //  const socketCon=(id)=>{
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
                socket.emit('callUser', { userId:id, signalData: offer, from: me, name})
                

               }

              break;
        }
      })
    //  }
    //  console.log(offer)
    // peer.on('signal', (data) => {
    //   socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
    // });

    // peer.on('stream', (currentStream) => {
    //   console.log(currentStream,'to other end reciever')
    //   userVideo.current.srcObject = currentStream;
    // });

    socket.on('callAccepted', ({signal,from}) => {
      console.log(id,"call accepted")
      localConnection.setRemoteDescription(signal)
      setFrom(from)
      setIsCalling(false)
      setCallAccepted(true);
      console.log('setting the connection')

      // peer.signal(signal);
    });

    // connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    setCallAccepted(false)
    setIsCalling(false)
    socket.emit('end-call',from)

    // connectionRef.current.destroy();

    // window.location.reload();
  };
  
  const isCallingHandler=()=>{
    setIsCalling(true)
  }

  return (
    <SocketContext.Provider value={{
      call,
      isRecieving,
      callAccepted,
      myVideo,
      userVideo,
      stream,
      name,
      setName,
      callEnded,
      me,
      callUser,
      leaveCall,
      answerCall,
      isCalling,
      isCallingHandler
    }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };