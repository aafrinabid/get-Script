import React from 'react';
import ScriptDetail from '../components/Details/ScriptDetail';
import classes from './ScriptDetail.module.css'



function ScriptDetails() {
  return (
    <div className={classes.detail}>
        <ScriptDetail />
    </div>
  )
}

export default ScriptDetails