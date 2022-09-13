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
import Featured from './pages/Featured';
import Saved from './pages/Saved';
import Backdrop from '@mui/material/Backdrop';
import { SocketContext } from './assets/videoContext';
import CallInfo from './components/call/CallInfo';
import VideoChat from './components/VideoChat/VideoChat';




function App() {
  const { callAccepted,isCalling,isRecieving,setAnswer,setCall,setIsRecieving}=useContext(SocketContext)

  const onlineUsers=useSelector((state=>state.chatHandler.onlineUsers))
  console.log(onlineUsers)

const socket=useRef();
const [userId,setUserId]=useState(null)
console.log(userId)

  const dispatch=useDispatch()
  const history=useHistory()
  const loginStatus=useSelector(state=>state.authHandler.isLoggedIn)

 
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
       
      }).catch((e)=>{
        console.log('kili');
        console.log(e.message)
      })
    }
    ,[dispatch,history,loginStatus]) 
  useEffect(()=>{
    console.log(loginStatus,userId)
   
     
     loginStatus&& socket.current.emit('online',{
        room:'room',
      })
      socket.current.on('addUserOnline',(data)=>{
        console.log(data.onlineUsers)
     
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
        dispatch(chatActions.changeOnlineUsers({users:[...data]}))
        
       })
       socket.current.on('changeIt',(data)=>{
        dispatch(chatActions.changeOnlineUsers({users:[...data.users]}))
       })
     
    // }
  },[dispatch,loginStatus])
  const location=useLocation()
  const {pathname}=location
  const [colorChange,setColorchange]=useState(false);
  const [blockChange,setBlockChange]=useState(false)
  const changeNavbarColor = () =>{
    console.log('happening guys')
    if(window.scrollY >= 80){
      setColorchange(true);
    }
    else{
      setColorchange(false);
    }
 };
 window.addEventListener('scroll', changeNavbarColor);




 useEffect(()=>{
  console.log(pathname)
  if(pathname.startsWith("/Profile") || pathname.startsWith("/chat") || pathname.startsWith('/UploadScript')){
    console.log('########################################*******************************')
   setBlockChange(true)
  }else{
    setBlockChange(false)
  }
 },[pathname])

  return (
    <div className="App">
  {loginStatus && <>     
{pathname.startsWith('/Admin') || pathname.startsWith('/logi')  ?'':<Navbar blockChange={blockChange} colorChange={colorChange} socket={socket} userId={userId}/>}
</>    
}
      <Switch>
      {loginStatus &&   <Route path='/Browse/:type' exact>
      <Browse />
        </Route>
}

{loginStatus &&   <Route path='/savedscript'>
          <Saved />
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
 <AdminPanel />
</Route>
}    
{loginStatus&& 
 <Route path='/chat/t'>
  {console.log('message')}
 <Message socket={socket}/>
</Route>
} 

<Route path='/featured/:scriptId'>
        <Featured />
      </Route>

      <Route path='*'>

        {loginStatus?<Redirect to={`/Browse/${0}`}/>:<Redirect to='/login'/>}
        {console.log(loginStatus)}
        // {/* {!loginStatus && <Redirect to='/login'/> } */}
      </Route>

      </Switch>
      
    <div>

    </div>
    {loginStatus  &&(isCalling||callAccepted)&& 
      <>
      <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isCalling||callAccepted}
      // onClick={handleClose}
    >
      {/* <CircularProgress color="inherit" /> */}
   <VideoChat/>
    </Backdrop>
    </>
    }

    {isRecieving && 
    <>
      <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isRecieving}
      // onClick={handleClose}
    >
   <CallInfo />
   </Backdrop>
    </>
    }
    </div>
  );
}

export default App;
