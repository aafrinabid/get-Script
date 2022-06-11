import React from 'react';
import ScriptCard from './ScriptCard';
import classes from './ScriptDetail.module.css'
import SuggestionRows from '../SuggestionRows/SuggestionRows'
function ScriptDetail() {
  return (
    <div className={classes.scriptdetails}>
        <ScriptCard />
        <div className={classes.suggestrows}>
            <h1 className='text-xl text-white p-5'>You may also like these scripts...</h1>
            <SuggestionRows />

        </div>
        </div>
  )
}

export default ScriptDetail