import React from 'react';
import Cards from './Cards';
import classes from './content.module.css'
import Options from './Options';
import { Switch,Route ,Redirect,useLocation} from 'react-router-dom';
import PostCards from './PostCard';
import { useSelector } from 'react-redux';


function Contents() {
  const optionSeen=useSelector(state=>state.UiHandler.optionSeen)
  return (<div>
   
  <div className={optionSeen?classes.contents:classes.clickcontents}>
        <Options/>
<Switch>
  <Route path='/AdminPanel' exact>
<Cards />
</Route>
  <Route path='/AdminPanel/Posts'>
   <PostCards />
  </Route>

</Switch>
    </div>
    </div>
  )
}

export default Contents