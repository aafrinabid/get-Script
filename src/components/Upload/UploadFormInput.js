import UploadForm from './UploadForm';
import { Card, Select, TextField,CardContent,Grid, MenuItem} from '@mui/material'
import { makeStyles } from "@material-ui/core/styles";
import React,{useRef,useState} from 'react';
import {Box} from '@mui/material';
import classes from './UploadFormInput.module.css';
import {FormControl,InputLabel,OutlinedInput} from '@mui/material';
import { deepPurple } from '@mui/material/colors';



const useStyles = makeStyles({
    input: {
      color: "white",
      border:"2px solid white"
    }
  });


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
    
    const url='https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80';
    const divImage =  {
    
        backgroundImage: `linear-gradient(180deg, rgba(1, 3, 15, 0.952), rgba(73, 69, 68, 0.64)), url(${url})`,
           height:'450px',
        //    marginTop:'-70px',
        //    fontSize:'50px',
           backgroundSize: '120%',
           backgroundRepeat: 'no-repeat',
       };

function UploadFormInput() {
    const classes=useStyles();
    const scriptTitle= useRef();
    const [Entertainment,setEntertainment]= useState('');
    const [genre,setGenre]=useState([]);

    
    const [type,setType]=useState('');


    console.log(scriptTitle)

    const handleChange=(e)=>{
        setEntertainment(e.target.value)
    }
    const handleChangeType=(e)=>{
        setType(e.target.value)
    }

    const handleChangeGenre = (event) => {
        const {
          target: { value },
        } = event;
        setGenre(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };
  return (
    <div className='flex justify-center'>
  <Card className='w-1/2 text-white'style={divImage}>
    <CardContent  >
        <Grid container spacing={2} >
            <Grid xs={12} item className='text-white'>
              <InputLabel className='w-full text-white' id='demo-simple-select-label'>Script Title</InputLabel>

                <TextField  placeholder='Enter Titile Name' inputProps={{ className: classes.input }}  variant='outlined' className='w-1/2 text-white' inputRef={scriptTitle} style={{color:'white'}} >

                </TextField>

            </Grid>
            <Grid xs={12} sm={12}  item>
              <InputLabel className='w-full text-white' id='demo-simple-select-label'>Entertainment Type</InputLabel>
              <Select
              className='w-1/2 mt-3 text-white border-white border-2'
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
              <InputLabel className='w-full text-white' id='demo-simple-select-label'>Entertainment Type</InputLabel>
              <Select
              className='w-1/2 mt-3 text-white border-white border-2'
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
            <Grid xs={12} sm={12}  item>
            <InputLabel id="demo-multiple-name-label" className='w-full my-3 text-white'>Genres</InputLabel>
        <Select
        className='w-1/2 text-white border-white border-2'
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={genre}
          onChange={handleChangeGenre}
        >
          {genres.map((genre) => (
            <MenuItem
              key={genre}
              value={genre}
            >
              {genre}
            </MenuItem>
          ))}
        </Select>
            </Grid>
        </Grid>
    </CardContent>
  </Card>
    </div>
  )
}

export default UploadFormInput