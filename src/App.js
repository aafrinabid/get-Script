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
import { useSelector,useDispatch} from 'react-redux';
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
  const { callAccepted,isCalling,isRecieving,socketEmiter,socketOn,rejectCall,answerCall,fixCall,callAccepter,stream,isCallingHandler,userVideoHandler,setConnectionRef} = useContext(SocketContext);
  console.log(socketEmiter,callAccepted,isCalling,isRecieving,rejectCall,answerCall,socketOn)
  

  // const isCalling=useSelector(state=>state.videoHandler.calling)
  // const isRecieving=useSelector(state=>state.videoHandler.recieving)
  // const CallAccepted=useSelector(state=>state.videoHandler.CallAccepted)
  const [open, setOpen] =useState(false);
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
   
       socket.current.on('recieveCall', ({ from, name: callerName, signal,peer }) => {
        console.log('recieving call machane do something')
          fixCall({ from, name: callerName, signal ,peer});
  
      });
    //    socket.current.on('callAccepted', (signal) => {
    //   console.log('answer',signal)

    //  fixSignal(signal)
    // });
     

    // }
  },[dispatch,loginStatus,socketEmiter,socketOn])

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



//  const answerCall=()=>{
//    dispatch(videoActions.setIsRecieving(false))
//   dispatch(videoActions.setCallAccepted())
//   const peer=new Peer({initiator:false,tricke:false,stream})
//   peer.on('signal',data=>{
//     socket.emit('answerCall',{signal:data,to:call.from})
//   });
//   peer.on('stream',(currentStream)=>{
//     userVideo.current.srcObject=currentStream
//   })
//   peer.signal(call.signal)
//   connectionRef.current = peer;

//  }



const callUser = (id) => {
  isCallingHandler()
  history.push('/video')
   const peer = new Peer({ initiator: true, trickle: false, stream });

  peer.on('signal', (data) => {
    socket.current.emit('callUser', { id, signalData: data});
  });

  peer.on('stream', (currentStream) => {
    userVideoHandler(currentStream)
    // userVideo.current.srcObject = currentStream;
  });

  socket.current.on('callAccepted', (signal) => {
    callAccepter()

    peer.signal(signal);
  });

  // connectionRef.current = peer;
  setConnectionRef(peer)
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
   <VideoChat />
    </Backdrop>
    }


    {isRecieving && 
    <>
      <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isRecieving}
      // onClick={handleClose}
    >
   <CallInfo  />
   </Backdrop>
    </>
    }

      
    </div>
  );
}

export default App;
