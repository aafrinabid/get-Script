import React from 'react';
import ScriptCard from './ScriptCard';
import classes from './ScriptDetail.module.css'
import SuggestionRows from '../SuggestionRows/SuggestionRows'
import ScriptInfo from './ScriptInfo';
import ScriptTable from './ScriptTable';
import ScriptPdf from './ScriptPdf'

function ScriptDetail() {
  return (
    <div className={classes.scriptdetails}>
        <ScriptCard />
        <ScriptInfo />
        <ScriptPdf />
        <div className={classes.tablediv}>
        <ScriptTable />
        </div>
        <div className={classes.suggestrows}>
            <h1 className='text-xl text-white p-5'>You may also like these scripts...</h1>
            <SuggestionRows />
        </div>
        </div>


  )
}

export default ScriptDetail