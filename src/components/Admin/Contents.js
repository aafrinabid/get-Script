import React from 'react';
import Cards from './Cards';
import classes from './content.module.css'
import Options from './Options';
import { Switch,Route ,Redirect,useLocation} from 'react-router-dom';
import PostCards from './PostCard';


function Contents() {
  return (<div>
   
  <div className={classes.contents}>
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