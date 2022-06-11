import React from 'react';
import classes from './SuggestionRows.module.css'
import ScriptSuggestionCard from './ScriptSuggestionCard';

function SuggestionRows() {
  return (
    <div className={classes.SuggestionRows} >
        <ScriptSuggestionCard />
        
    </div>
  )
}

export default SuggestionRows