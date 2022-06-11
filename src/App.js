import './App.css';
import { Switch,Route ,Redirect} from 'react-router-dom';
// import Navbar from './components/NavBar/NavBar';
import SignIn from './pages/AuthenticationPage';
import SignUp from './pages/SignUp';
import Browse from './pages/Browse';
import ScriptDetails from './pages/ScriptDetails';

function App() {
  return (
    <div className="App">
{/* <Navbar /> */}
      
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
      <Route path='*'>
        <Redirect to='/'/>
      </Route>
      </Switch>

      
    </div>
  );
}

export default App;
