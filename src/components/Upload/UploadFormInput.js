import UploadForm from './UploadForm';
import { Card, Select, TextField,CardContent,Grid, MenuItem} from '@mui/material'
import React,{useRef,useState} from 'react';
import {Box} from '@mui/material';
import classes from './UploadFormInput.module.css';
import {FormControl,InputLabel,OutlinedInput} from '@mui/material';
import { deepPurple } from '@mui/material/colors';

function UploadFormInput() {
    const scriptTitle=useRef();
    const [Entertainment,setEntertainment]=useState('');
    const [type,setType]=useState('');

    console.log(scriptTitle)

    const handleChange=(e)=>{
        setEntertainment(e.target.value)
    }
    const handleChangeType=(e)=>{
        setType(e.target.value)
    }
  return (
    <div className='flex justify-center'>
  <Card className='w-3/4 '>
    <CardContent>
        <Grid container spacing={2}>
            <Grid xs={12} item>
                <TextField label="Title Name" placeholder='Enter Titile Name' variant='outlined' className='w-full' inputRef={scriptTitle} >

                </TextField>

            </Grid>
            <Grid xs={12} sm={12}  item>
              <InputLabel className='w-full' id='demo-simple-select-label'>Entertainment Type</InputLabel>
              <Select
              className='w-full mt-3 '
             labelId="demo-simple-select-label"
             id="demo-simple-select"
             value={Entertainment}
             onChange={handleChange}
           >
            <MenuItem value={10}>Movie</MenuItem>
            <MenuItem value={20}>TV Series</MenuItem>
            <MenuItem value={30}>Anime</MenuItem>
</Select>
                
            </Grid>
            <Grid xs={12} sm={12}  item>
              <InputLabel className='w-full' id='demo-simple-select-label'>Entertainment Type</InputLabel>
              <Select
              className='w-full mt-3 '
             labelId="demo-simple-select-label"
             id="demo-simple-select"
             value={type}
             onChange={handleChangeType}
           >
            <MenuItem value={10}>Movie Concept</MenuItem>
            <MenuItem value={20}>Series Pilot Episode</MenuItem>
            <MenuItem value={30}>Series Concept</MenuItem>
            <MenuItem value={40}>Anime Concept</MenuItem>
            <MenuItem value={40}>short film Concept</MenuItem>


</Select>
                
            </Grid>
        </Grid>
    </CardContent>
  </Card>
    </div>
  )
}

export default UploadFormInput