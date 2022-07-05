import UploadForm from './UploadForm';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Select, TextField,CardContent,Grid, MenuItem,Box,Button} from '@mui/material'
import { makeStyles } from "@material-ui/core/styles";
import React,{useEffect, useRef,useState} from 'react';
import clas from './UploadFormInput.module.css';
import {FormControl,InputLabel,OutlinedInput} from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { formAction } from '../../assets/store/formslice';

// import { useState } from 'react';



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
           height:'550px',
        //    marginTop:'-70px',
        //    fontSize:'50px',
           backgroundSize: '163%',
           backgroundRepeat: 'no-repeat',
       };

function UploadFormInput() {
  const dispatch=useDispatch();
  const formState=useSelector(state=>state.formHandler['formValidator']['scriptInfo'])
  const g=useSelector(state=>state.formHandler['userData']['genres'])
  console.log(g)
  console.log(formState)
  const changeHandler=(e)=>{
   const {value}=e.target
   const {name}=e.target
   dispatch(formAction.inputChangeHandler({name,value}))
  
 }
  useEffect(()=>{
    dispatch(formAction.formavalidator({name:'scriptInfo'})) 

  },[dispatch,formState,changeHandler])
  const [genre,setGenre]=useState([])
  const formData=useSelector(state=>state.formHandler['userData'])
  const formkey=Object.keys(formData)
  console.log(formkey)
    const classes=useStyles();
   const nextPageHandler=()=>{
    dispatch(formAction.nextStepHandler())
   }


    const handleChangeGenre = (event) => {
        let {
          target: { value },
        } = event;
        setGenre(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        )
        console.log(genre);
        const {name}=event.target
        value=genre

    
    dispatch(formAction.inputChangeHandler({name,value}))


        
        ;
      };
  return (
    <div className='flex justify-center h-screen '>
  <Card className='w-1/2 text-white'style={divImage}>
    <CardContent  >
        <Grid container spacing={2} >
            <Grid xs={12} item className='text-white'>
              <InputLabel className='w-full text-white' id='demo-simple-select-label'>Script Title</InputLabel>

                <TextField  placeholder='Enter Titile Name' inputProps={{ className: classes.input }}  variant='outlined' className='w-1/2 text-white'  style={{color:'white'}} name={formkey[0]} value={formData[formkey[0]]} onChange={changeHandler} required>

                </TextField>

            </Grid>
            <Grid xs={12} sm={12}  item>
              <InputLabel className='w-full text-white' id='demo-simple-select-label'>Entertainment Type</InputLabel>
              <Select
              name={formkey[1]}
               value={formData[formkey[1]]}
              className='w-1/2 mt-3 text-white border-white border-2'
             labelId="demo-simple-select-label"
             id="demo-simple-select"
             onChange={changeHandler}
             required
           >
            <MenuItem value={10}>Movie</MenuItem>
            <MenuItem value={20}>TV Series</MenuItem>
            <MenuItem value={30}>Anime</MenuItem>
</Select>
                
            </Grid>
            <Grid xs={12} sm={12}  item>
              <InputLabel className='w-full text-white' id='demo-simple-select-label'>Script Type</InputLabel>
              <Select
              className='w-1/2 mt-3 text-white border-white border-2'
             labelId="demo-simple-select-label"
             id="demo-simple-select"
             name={formkey[2]} 
             value={formData[formkey[2]]}
             onChange={changeHandler}
             required
           >
            <MenuItem value={10} >Movie Concept</MenuItem>
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
          name={formkey[3]}
           value={formData[formkey[3]]}
           onChange={changeHandler}
           required
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
           <div  className={` ${clas.nextPage}`}>
        <Button
        className={`ml-14 ${clas.formButton}`}
          variant="contained"
          sx={{ mt: 3, ml: 1 }}
          color="secondary"
          onClick={nextPageHandler}
          // {formState?'':'disabled'}
          disabled={formState?false:true}
        >
          Next
        </Button>
      </div>
    </CardContent>
  </Card>
    </div>
  )
}

export default UploadFormInput