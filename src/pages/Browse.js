import React from 'react';
import Banner from '../components/Banner/Banner';
import Rows from '../components/Rows/Rows';
const genres=['Action Genre',
'Animation Genre',
'Comedy Genre',
    'Crime Genre',
    'Drama Genre',
    'Experimental Genre',
    'Fantasy Genre',
    'Historical Genre',
    'Horror Genre',
    'Romance Genre',
    'Science Fiction Genre',
    'Thriller Genre',
    'Western Genre',
    'Other Genres',]

function Browse() {
  return (
    <div className='bg-black'>
        <Banner  />
        <Rows screenper={6} genre='Science Fiction Genre' />
        <Rows screenper={6} genre='Comedy Genre' />
        <Rows screenper={6} genre='Fantasy Genre' />
        <Rows screenper={6} genre='Action Genre' />
        <Rows screenper={6} genre='Thriller Genre' />


        

        {/* <Rows screenper={6} />
        <Rows screenper={6}/>
        <Rows screenper={6}/>
        <Rows screenper={6}/>
        <Rows screenper={6}/> */}

    </div>
  )
}

export default Browse