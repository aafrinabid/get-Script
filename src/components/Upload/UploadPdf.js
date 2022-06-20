import { useDispatch } from 'react-redux';
import { Card, Select, TextField,CardContent,Grid, MenuItem,Box,Button} from '@mui/material'
import { makeStyles } from "@material-ui/core/styles";
import React,{useRef,useState} from 'react';
import clas from './UploadPdf.module.css';
import {FormControl,InputLabel,OutlinedInput} from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { formAction } from '../../assets/store/formslice';
import { DropzoneArea } from 'material-ui-dropzone';



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
    
    const url='https://images.unsplash.com/photo-1581390114939-946f9a890a7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80';
    const divImage =  {
    
        backgroundImage: `linear-gradient(180deg, rgba(1, 3, 15, 0.952), rgba(73, 69, 68, 0.64)), url(${url})`,
           height:'550px',
        //    marginTop:'-70px',
        //    fontSize:'50px',
           backgroundSize: '150%',
           backgroundRepeat: 'no-repeat',
       };

       function UploadPdf(props) {
        const classes=useStyles()
        const [files,setFiles]=useState('')
        const dispatch=useDispatch()
        const nextPageHandler=()=>dispatch(formAction.nextStepHandler())
        const backPageHandler=()=>dispatch(formAction.backStepHandler())

        const fileHandler=(file)=>{
            setFiles(file)
            console.log(files)
        }

  return (
    <div className='flex justify-center h-screen bg-zinc-700'>
  <Card className='w-1/2 text-white'style={divImage}>
    <CardContent  >
<DropzoneArea onChange={fileHandler.bind(this)} filesLimit={1} dropzoneClass='bg-inherit border-2 border-white' maxFileSize={5000000}  acceptedFiles={['.pdf', ]} className={clas.uploadArea}/>
  
   
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

export default UploadPdf