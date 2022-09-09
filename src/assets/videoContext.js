import React, { createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
import { useSelector } from 'react-redux';

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
  const [answer,setAnswer]=useState({})
  // console.log(offer)
console.log(call)

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
  (callAccepted||isCalling) && navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);

        myVideo.current.srcObject = currentStream;
      });

      isLoggedIn && socket.emit('join-video-channel')

    socket.on('me', (id) => setMe(id));

    socket.on('callUser', ({ from, name: callerName, signal }) => {
      setIsRecieving(true)
      setCall({ isReceivingCall: true, from, name: callerName, signal });
    });
  }, [callAccepted,isCalling,isLoggedIn]);

  // const answerCall = () => {
  //   setCallAccepted(true);

  //   const peer = new Peer({ initiator: false, trickle: false, stream });

  //   peer.on('signal', (data) => {
  //     socket.emit('answerCall', { signal: data, to: call.from });
  //   });

  //   peer.on('stream', (currentStream) => {
  //     console.log(currentStream,'to caller')
  //     userVideo.current.srcObject = currentStream;
  //   });
    const answerCall = () => {
      setCallAccepted(true);
      const rc=new RTCPeerConnection()
      // rc.onicecandidate=e=>{
      //   console.log('new ice kittiye')
      //   setAnswer(JSON.stringify(rc.localDescription))

      // }
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

    //   const peer = new Peer({ initiator: false, trickle: false, stream });
  
    //   peer.on('signal', (data) => {
    //     socket.emit('answerCall', { signal: data, to: call.from });
    //   });
  
    //   peer.on('stream', (currentStream) => {
    //     console.log(currentStream,'to caller')
    //     userVideo.current.srcObject = currentStream;
    //   });

    // peer.signal(call.signal);
    // console.log(call.signal)

    // connectionRef.current = peer;
  };

  // const callUser = (id) => {
  //   const peer = new Peer({ initiator: true, trickle: false, stream });

  //   peer.on('signal', (data) => {
  //     socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
  //   });

  //   peer.on('stream', (currentStream) => {
  //     console.log(currentStream,'to other end reciever')
  //     userVideo.current.srcObject = currentStream;
  //   });

  //   socket.on('callAccepted', (signal) => {
  //     setCallAccepted(true);
  //     const sing='singjiii'

  //     peer.signal(signal);
  //   });

  //   connectionRef.current = peer;
  // };
  const callUser = (id) => {
    setIsCalling(true)
     const localConnection=new RTCPeerConnection()
     let sdp
    //  localConnection.onicecandidate=e=>{
    //   console.log('NEW Ice candidtnant!! on Localconnection reprintinf sdp')
    //    setOffer(JSON.stringify(localConnection.localDescription))
    //  }
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
                socket.emit('callUser', { userId:id, signalData: offer, from: me, name })
                

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

    socket.on('callAccepted', (signal) => {
      localConnection.setRemoteDescription(signal)
      setIsCalling(false)
      setCallAccepted(true);
      const sing='singjiii'

      // peer.signal(signal);
    });

    // connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    setCallAccepted(false)

    connectionRef.current.destroy();

    window.location.reload();
  };

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
      isCalling
    }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };