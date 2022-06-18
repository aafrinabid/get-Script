import UploadForm from './UploadForm';
import { Input, TextField} from '@mui/material'
import React,{useRef} from 'react';
import {Box} from '@mui/material';
import classes from './UploadFormInput.module.css';
import {FormControl,InputLabel,OutlinedInput} from '@mui/material';
import { deepPurple } from '@mui/material/colors';

function UploadFormInput() {
    const scriptTitle=useRef();
    console.log(scriptTitle)
  return (
    <div className='h-screen'>
        
    <UploadForm classname={`text-white pt-4 ${classes.formcontent}`}>
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
  <FormControl classname={`text-white pt-4` } >
        <InputLabel htmlFor="component-outlined">Title Name</InputLabel>
        <OutlinedInput
          id="component-outlined"
          inputRef={scriptTitle}
          label="Title Name"
        />
        
        
        
      </FormControl>
     
      </Box>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' ,backgroundColor:deepPurple},
      }}
      noValidate
      autoComplete="off"
    >
  <FormControl classname={`text-white pt-4` } >
        <InputLabel htmlFor="component-outlined"></InputLabel>
        <OutlinedInput
          id="component-outlined"
          inputRef={scriptTitle}
          label="Title Name"
        />
        
        
        
      </FormControl>
     
      </Box>
        

    </UploadForm>
    </div>
  )
}

export default UploadFormInput