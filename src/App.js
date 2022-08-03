import './App.css';
import { Switch,Route ,Redirect,useLocation, useHistory} from 'react-router-dom';
import Navbar from './components/UI/NavBar'
import SignIn from './pages/AuthenticationPage';
import SignUp from './pages/SignUp';
import Browse from './pages/Browse';
import ScriptDetails from './pages/ScriptDetails';
import Profile from './pages/Profile';
import { useEffect, useState,useRef,useContext } from 'react';
import UploadScript from './pages/UploadScript';
import AdminPanel from './pages/AdminPanel';
import BackgroundIamge from './components/BackgroundImage/BackgroundIamge';
import { useSelector,useDispatch, connect} from 'react-redux';
import axios from 'axios';
import { authActions } from './assets/store/authSlice';
import Message from './pages/Message'
import {io} from 'socket.io-client';
import { chatActions } from './assets/store/chatSlice';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import VideoChat from './components/VideoChat/VideoChat';
import { videoActions } from './assets/store/videoSlice';
import Peer from 'simple-peer';
import CallInfo from './components/call/CallInfo';
import { SocketContext } from './assets/context';



function App() {
  // console.log(SocketContext)
  const { callAccepted,isCalling,isRecieving,rejectCall,call,fixCall,callAccepter,isCallingHandler,endingCall,userVideoHandler,setConnectionRef,answering,leaveCall} = useContext(SocketContext);
  // console.log(socketEmiter,callAccepted,isCalling,isRecieving,rejectCall,answerCall,socketOn)
  const localConnection=new RTCPeerConnection()
  const rc=new RTCPeerConnection()
  const [stream,setStream]=useState()
  const userVideo=useRef()
  console.log(userVideo)
  const myVideo=useRef()
  console.log(myVideo)
  const connectionRef=useRef()
  // const isCalling=useSelector(state=>state.videoHandler.calling)
  // const isRecieving=useSelector(state=>state.videoHandler.recieving)
  // const CallAccepted=useSelector(state=>state.videoHandler.CallAccepted)
  const [open, setOpen] =useState(false);
  const [connection,setConnection]=useState(false)
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const onlineUsers=useSelector((state=>state.chatHandler.onlineUsers))
  console.log(onlineUsers)

const socket=useRef();
console.log(socket)
const [userId,setUserId]=useState(null)
console.log(userId)

  const dispatch=useDispatch()
  const history=useHistory()
  const loginStatus=useSelector(state=>state.authHandler.isLoggedIn)
  // loginStatus && socket.current.emit('online',)

 
  const userRole=useSelector(state=>state.authHandler.role)
  console.log(loginStatus,userRole);
  useEffect(
    ()=>{
     
      socket.current= io('http://localhost:3001',{
        auth:{
          token:localStorage.getItem('token')?localStorage.getItem('token'):""
        }
      })
      console.log('app.js hype')
      axios.get('http://localhost:3500/isAuth',{
        headers:{
          'x-access-token':localStorage.getItem('token')?localStorage.getItem('token'):""
        }
      }).then(res=>{
        console.log('checking auth')
        dispatch(authActions.loginHandler(res.data))
        console.log(res.data);
        setUserId(res.data.id)
        // if(res.data['auth'] && res.data['status']){
        //   history.replace('/')
        // }
      }).catch((e)=>{
        console.log('kili');
        console.log(e.message)
      })
    }
    ,[dispatch,history]) 
  useEffect(()=>{
    console.log(loginStatus,userId)
   
     
      // if(loginStatus && userId){
        loginStatus&& socket.current.emit('online',{
          room:'room',
        })
      socket.current.on('addUserOnline',(data)=>{
        socket.current.emit('changeOnline',{
          users:data.onlineUsers
        })

      })
       socket.current.on('offlineUsers',data=>{
        dispatch(chatActions.userRemover(data.socketId))
      })
       socket.current.on('isonline',data=>{
     dispatch(chatActions.logoutRemover(data.userId))
    
      })
      socket.current.on('modify',(data)=>{
        console.log(data)
        // dispatch(chatActions.OnlineuserAdder({users:{id:data.id,socketId:data.socketId}}))
        dispatch(chatActions.changeOnlineUsers({users:[...data]}))
        
        // socket.current.emit('newUsers',{onlineUsers,socketId:socket.id})
       })
       socket.current.on('changeIt',(data)=>{
        dispatch(chatActions.changeOnlineUsers({users:[...data.users]}))
       })
   
       socket.current.on('recieveCall', ({ from,signal, }) => {
        console.log('recieving call machane do something')
        console.log(signal)
          fixCall({ from,signal});
  
      });

      socket.current.on('callEnded',(data)=>{
        console.log('ending call')
        endingCall()
      })
    //    socket.current.on('callAccepted', (signal) => {
    //   console.log('answer',signal)

    //  fixSignal(signal)
    // });
     

    // }
  },[dispatch,loginStatus])
  useEffect(()=>{
    stream && stream.getTracks().forEach(function (track) {
      console.log(track,'trackingg',stream)
      rc.addTrack(track,stream);
      localConnection.addTrack(track,stream);
    });

  },[stream,connection])

  useEffect(()=>{
    
   (isCalling||callAccepted) && navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then((currentStream) => {
      // setStream(currentStream);
      setStream(currentStream)
      // currentStream.getTracks().forEach(function (track) {
      //   console.log(track,'trackingg')
      //   rc.addTrack(track,currentStream);
      //   localConnection.addTrack(track, currentStream);
      // });
      console.log('setting stream',currentStream)
      myVideo.current.srcObject = currentStream;
    }).catch((e)=>console.log(e));
  
    
  },[isCalling,callAccepted,userVideo])
  useEffect(()=>{
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        // setStream(currentStream);
        setStream(currentStream)
        currentStream.getTracks().forEach(function (track) {
          console.log(track,'trackingg')
          rc.addTrack(track,currentStream);
          localConnection.addTrack(track, currentStream);
        });
        rc.addEventListener('track',(e)=>{
          console.log('****************************************************************************')
          userVideo.current.srcObject=e.streams[0]
         },false)
          localConnection.addEventListener('track',(e)=>{
    console.log(e,'setting uservideo')
    userVideo.current.srcObject=e.streams[0]
   },false)

        console.log('setting stream',currentStream)
        myVideo.current.srcObject = currentStream;
      }).catch((e)=>console.log(e));
    
      
    },[])

 
 

  const [colorChange,setColorchange]=useState(false);
  const changeNavbarColor = () =>{
    // console.log('happening guys')
    if(window.scrollY >= 80){
      setColorchange(true);
    }
    else{
      setColorchange(false);
    }
 };
 window.addEventListener('scroll', changeNavbarColor);



 const location=useLocation()
 // console.log(params)
 const {pathname}=location
 useEffect(()=>{
  console.log(pathname)
  if(pathname.startsWith("/Profile") || pathname.startsWith("/chat")){
    console.log('########################################*******************************')
   setColorchange(true)
  }else{
    setColorchange(false)
  }
 },[pathname])



 const answerCall = () => {
  answering()
  // const rc=new RTCPeerConnection()
  rc.ondatachannel=e=>{
    rc.dc=e.channel
    rc.dc.onmessage=e=>console.log('new message is here',e.data)
    rc.dc.onopen=e=>{
      console.log('connection opened')
      setConnection(true)
    }
  }

  // rc.ontrack=(e)=>{
  //   console.log(e)
  //   userVideo.current.srcObject=e.streams[0]
  //  }

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
           socket.current.emit('answerCall',{signal:answer,to:call.from})        
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
    localConnection.addTrack(track,stream);
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

  isCallingHandler()
  // const localConnection=new RTCPeerConnection()
  const sendChannel=localConnection.createDataChannel('sendChannel')
  sendChannel.onmessage=e=>console.log('message recieved!!!'+e.data)
  sendChannel.onopen=e=>{
    console.log('connection opened')
    setConnection(true)
  }
  // stream.getTracks().forEach(function (track) {
  //   localConnection.addTrack(track, stream);
  // });

  // localConnection.ontrack=(e)=>{
  //   console.log(e)
  //   userVideo.current.srcObject=e.streams[0]
  // }   
  // localConnection.addEventListener('track',(e)=>{
  //   console.log(e,'setting uservideo')
  //   userVideo.current.srcObject=e.streams[0]
  //  },false)
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
   const peer = new Peer({ initiator: true, trickle: false, stream });

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
    <div className="App">
  {loginStatus && <>     
{pathname.startsWith('/Admin') || pathname.startsWith('/logi')  ?'':<Navbar colorChange={colorChange} socket={socket} userId={userId} handleToggle={handleToggle}/>}
</>    
}
      <Switch>
      {loginStatus &&   <Route path='/' exact>
      <Browse />
        </Route>
}
        {loginStatus &&   <Route path='/details/:scriptId'>
          <ScriptDetails />
        </Route>
}
     {!loginStatus && <Route path='/login'>
        <div className='signin'>
          <BackgroundIamge />
        <SignIn />

        </div>
      </Route>
      }

      {/* <Route path='/sign-up'>
        <SignUp />
      </Route> */}

      {loginStatus && <Route path='/profile/:userid/:role'>
        <Profile />
      </Route>}

      {loginStatus && (userRole===1 || userRole===3) && <Route path='/UploadScript'>
        {console.log(userRole,'upload in script')}
        <UploadScript />
      </Route>
      }

{loginStatus && userRole===3 && 
 <Route path='/AdminPanel'>
  {console.log('what the fuck happended')}
 <AdminPanel />
</Route>
}    
{loginStatus&& 
 <Route path='/chat/t'>
  {console.log('message')}
 <Message socket={socket} callUser={callUser}/>
</Route>
} 
      <Route path='*'>

        {loginStatus?<Redirect to='/'/>:<Redirect to='/login'/>}
        {console.log(loginStatus)}
        // {/* {!loginStatus && <Redirect to='/login'/> } */}
      </Route>
      </Switch>
      {/* </Switch> */}
      {loginStatus  &&(isCalling||callAccepted)&& 
      <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isCalling||callAccepted}
      // onClick={handleClose}
    >
      {/* <CircularProgress color="inherit" /> */}
   <VideoChat myVideo={myVideo} userVideo={userVideo} endCall={endCall} rc={rc} conncection={connection} localConnection={localConnection}/>
    </Backdrop>
    }


    {isRecieving && 
    <>
      <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isRecieving}
      // onClick={handleClose}
    >
   <CallInfo  answerCall={answerCall}/>
   </Backdrop>
    </>
    }

      
    </div>
  );
}

export default App;
