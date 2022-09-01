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
 







        


    </div>
  )
}

export default Browse