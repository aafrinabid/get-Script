import { useDispatch, useSelector } from 'react-redux';
import { Card, Select, TextField,CardContent,Grid, MenuItem,Box,Button} from '@mui/material'
import { makeStyles } from "@material-ui/core/styles";
import React,{useRef,useState} from 'react';
import clas from './UploadForm2.module.css';
import {FormControl,InputLabel,OutlinedInput} from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { formAction } from '../../assets/store/formslice';



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
    
    const url='https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNpbmVtYXxlbnwwfHwwfHw%3D&w=1000&q=80';
    const divImage =  {
    
        backgroundImage: `linear-gradient(180deg, rgba(1, 3, 15, 0.952), rgba(73, 69, 68, 0.64)), url(${url})`,
           height:'550px',
        //    marginTop:'-70px',
        //    fontSize:'50px',
           backgroundSize: '150%',
           backgroundRepeat: 'no-repeat',
       };

       function UploadForm2(props) {
        const tableData=useSelector(state=>state.formHandler.userData['table'])
        const tablekey=Object.keys(tableData)
        console.log(tablekey);
        console.log(tableData)
        const pitch=[
          'The origin',
          'Human Hook',
          'Character',
          'Desires',
          'Obstacles',
          'Highlights',
          'Open Road']
        const classes=useStyles()
        const dispatch=useDispatch()
        const nextPageHandler=()=>dispatch(formAction.nextStepHandler())
        const backPageHandler=()=>dispatch(formAction.backStepHandler())
        // const onChangeHandler=(event)=>{
        //   console.log('changing it');
        //   const value=event.target.value;
        //   const name=event.target.name;
        //   dispatch(formAction.inputChangeHandler(name,value))

        // }

  return (
    <div className='flex justify-center h-screen '>
  <Card className='w-1/2 text-white'style={divImage}>
    <CardContent  >

  
    <div className={` text-white shadow  ${clas.table}`}>
        
        {pitch.map((e,i)=>(
            <div key={i}  className={clas.tablecontent}>
              {console.log(tableData[tablekey[i]])}
            <h1 className='border-gray-300  border-transparent text-center'>{i+1}</h1>
            <h1 className='border-gray-300  border-transparent text-center'>{e}</h1>
            <TextField className={`border-white-300 text-white ${clas.description} text-left`} name={tablekey[i]} value={tableData[tablekey[i]]} inputProps={{ className: classes.input }} ></TextField>
           </div>
        ))}
    </div>
    <div  className={` ${clas.nextPage}`}>
    <Button
        className={`ml-14 ${clas.formButton}`}
          variant="contained"
          sx={{ mt: 3, ml: 1 }}
          color="secondary"
          onClick={backPageHandler}
        >
          Back
        </Button>
        <Button
        className={`ml-14 ${clas.formButton}`}
          variant="contained"
          sx={{ mt: 3, ml: 1 }}
          color="secondary"
          onClick={nextPageHandler}
        >
          Next
        </Button>
      </div>
  
    </CardContent>
  </Card>
    </div>
  )
}

export default UploadForm2