import './App.css';
import { Switch,Route ,Redirect} from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import SignIn from './pages/AuthenticationPage';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App ">
<Navbar />
      
      <Switch>
        <Route path='/' exact>
      <h1 className='text-green-500'>home page machane</h1>
          
        </Route>
      <Route path='/login'>
        <SignIn />
      </Route>
      <Route path='/sign-up'>
        <SignUp />
      </Route>
      <Route path='*'>
        <Redirect to='/'/>
      </Route>
      </Switch>

      
    </div>
  );
}

export default App;
