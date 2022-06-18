import React from 'react';

function UploadForm(props) {
  return (
    <div className='pt-12 text-white '>
            <form action='post' classname='pt-5'>
              {props.children}
           </form>
        </div>
  )
}

export default UploadForm