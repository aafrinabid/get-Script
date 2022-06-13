import React from 'react';
import Banner from '../components/Banner/Banner';
import Rows from '../components/Rows/Rows';

function Browse() {
  return (
    <div>
        <Banner  />
        <Rows screenper={6}/>
        <Rows screenper={6}/>
        <Rows screenper={6}/>
        <Rows screenper={6}/>
        <Rows screenper={6}/>
        <Rows screenper={6}/>

    </div>
  )
}

export default Browse