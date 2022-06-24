import React from 'react';
// import UploadFormInput from '../components/Upload/UploadFormInput';
import UploadMainForm from '../components/Upload/UploadMainForm';
import {Typography} from '@mui/material'
function UploadScript() {
  return (
    <div className='h-screen w-full bg-inherit block pt-12'>
      {console.log('in uploadd page')}
      {/* <Typography gutterBottom variant='h3' align='center'>
            Upload Form
        </Typography> */}
        <UploadMainForm />
    </div>
  )
}

export default UploadScript