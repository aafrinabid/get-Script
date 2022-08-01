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
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [isCalling,setIsCalling]=useState(false)
  const [stream, setStream] = useState();
  const [name, setName] = useState('');
  const [call, setCall] = useState({});
  const [isRecieving,setIsRecieving]=useState(false)
//   const [me, setMe] = useState('');

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();
  let socket=useRef()
  console.log(socket)

  useEffect(() => {
    // (isRecieving||isCalling)&& navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    //   .then((currentStream) => {
    //     setStream(currentStream);
    //     console.log('setting stream',currentStream)
    //     myVideo.current.srcObject = currentStream;
    //   });
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
        setIsRecieving(true)
        setCall({ from, name: callerName, signal });

    });
  }
  }, [loginStatus,isRecieving,isCalling]);
  

  const fixCall=(obj)=>{
    setIsRecieving(true)

    setCall(obj)

  }

  const answerCall = () => {
    setIsRecieving(false)
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.current.emit('answerCall', { signal: data, to: call.from });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };

  const callUser = (id) => {
    setIsCalling(true)
    history.push('/video')
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.current.emit('callUser', { id, signalData: data});
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    socket.current.on('callAccepted', (signal) => {
      setCallAccepted(true);

      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);

    connectionRef.current.destroy();

    // window.location.reload();
  };
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
  function socketEmiter(name,obj){
    console.log(name,obj)
socket.current.emit(name,obj)
  }

  function socketOn(name,cb){
    console.log(name,cb)
socket.current.on(name,cb)
  }
  function fixStream(stream){
    setStream(stream)
  }

  return (
    <SocketContext.Provider value={{
      socketEmiter,
      socketOn,
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
      fixStream,
      fixCall
    }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };