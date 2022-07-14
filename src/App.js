import './App.css';
import { Switch,Route ,Redirect,useLocation, useHistory} from 'react-router-dom';
import Navbar from './components/UI/NavBar'
import SignIn from './pages/AuthenticationPage';
import SignUp from './pages/SignUp';
import Browse from './pages/Browse';
import ScriptDetails from './pages/ScriptDetails';
import Profile from './pages/Profile';
import { useEffect, useState } from 'react';
import UploadScript from './pages/UploadScript';
import AdminPanel from './pages/AdminPanel';
import BackgroundIamge from './components/BackgroundImage/BackgroundIamge';
import { useSelector,useDispatch} from 'react-redux';
import axios from 'axios';
import { authActions } from './assets/store/authSlice';
import Message from './pages/Message'

function App() {
  const dispatch=useDispatch()
  const history=useHistory()
  const loginStatus=useSelector(state=>state.authHandler.isLoggedIn)
  const userRole=useSelector(state=>state.authHandler.role)
  console.log(loginStatus,userRole);
  useEffect(
    ()=>{
      console.log('app.js hype')
      axios.get('http://localhost:4000/isAuth',{
        headers:{
          'x-access-token':localStorage.getItem('token')?localStorage.getItem('token'):""
        }
      }).then(res=>{
        console.log('checking auth')
        dispatch(authActions.loginHandler(res.data))
        console.log(res.data);
        // if(res.data['auth'] && res.data['status']){
        //   history.replace('/')
        // }
      }).catch((e)=>{
        console.log('kili');
        console.log(e.message)
      })
    }
    ,[dispatch,history]) 
  const [colorChange,setColorchange]=useState(false);
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



 const location=useLocation()
 // console.log(params)
 const {pathname}=location
 useEffect(()=>{
  console.log(pathname)
  if(pathname==="/Profile"){
   setColorchange(true)
  }else{
    setColorchange(false)
  }
 },[pathname])

  return (
    <div className="App">
  {loginStatus && <>     
{pathname.startsWith('/Admin') || pathname.startsWith('/logi') ?'':<Navbar colorChange={colorChange}/>}
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
 <Message />
</Route>
} 
      <Route path='*'>

        {loginStatus?<Redirect to='/'/>:<Redirect to='/login'/>}
        {console.log(loginStatus)}
        // {/* {!loginStatus && <Redirect to='/login'/> } */}
      </Route>
      </Switch>

      
    </div>
  );
}

export default App;
