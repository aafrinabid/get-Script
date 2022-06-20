import './App.css';
import { Switch,Route ,Redirect,useLocation} from 'react-router-dom';
import Navbar from './components/UI/NavBar'
import SignIn from './pages/AuthenticationPage';
import SignUp from './pages/SignUp';
import Browse from './pages/Browse';
import ScriptDetails from './pages/ScriptDetails';
import Profile from './pages/Profile';
import { useEffect, useState } from 'react';
import UploadScript from './pages/UploadScript';
import AdminPanel from './pages/AdminPanel';


function App() {
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
     
{pathname==='/AdminPanel'?'':<Navbar colorChange={colorChange}/>}
      
      <Switch>
        <Route path='/' exact>
      <Browse />
        </Route>
        <Route path='/details'>
          <ScriptDetails />
        </Route>
      <Route path='/login'>
        <SignIn />
      </Route>
      <Route path='/sign-up'>
        <SignUp />
      </Route>
      <Route path='/profile'>
        <Profile />
      </Route>
      <Route path='/UploadScript'>
        {/* <h1>hiiiii</h1> */}
        <UploadScript />
      </Route>
      <Route path='/AdminPanel'>
        <AdminPanel />
      </Route>
      <Route path='*'>
        <Redirect to='/'/>
      </Route>
      </Switch>

      
    </div>
  );
}

export default App;
