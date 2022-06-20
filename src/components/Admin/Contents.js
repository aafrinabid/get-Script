import React from 'react';
import Cards from './Cards';
import classes from './content.module.css'
import Options from './Options';

function Contents() {
  return (
    <div className={classes.contents}>
        <Options/>
        <Cards />
    </div>
  )
}

export default Contents