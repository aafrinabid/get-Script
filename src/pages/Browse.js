import React, { useEffect } from 'react';
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
 
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
  useEffect(()=>{
    shuffleArray(genres)
   


  },[])
  return (
    <div className='bg-black transition-all'>
        <Banner  />
        {
          genres.map((genre)=>(

            <Rows screenper={6} genre={genre} />
          ))
        }
        {/* <Rows screenper={6} genre='Comedy Genre' />
        <Rows screenper={6} genre='Fantasy Genre' />
        <Rows screenper={6} genre='Action Genre' />
        <Rows screenper={6} genre='Thriller Genre' />
        <Rows screenper={6} genre='Horror Genre' />
        <Rows screenper={6} genre='Crime Genre' />
        <Rows screenper={6} genre='Drama Genre' />
        <Rows screenper={6} genre='Animation Genre' /> */}







        

        {/* <Rows screenper={6} />
        <Rows screenper={6}/>
        <Rows screenper={6}/>
        <Rows screenper={6}/>
        <Rows screenper={6}/> */}

    </div>
  )
}

export default Browse