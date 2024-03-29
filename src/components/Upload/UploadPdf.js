import { useDispatch,useSelector } from 'react-redux';
import { Card, Select, TextField,CardContent,Grid, MenuItem,Box,Button} from '@mui/material'
import { makeStyles } from "@material-ui/core/styles";
import React,{useEffect, useRef,useState} from 'react';
import clas from './UploadPdf.module.css';
import {FormControl,InputLabel,OutlinedInput} from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { formAction } from '../../assets/store/formslice';
import { DropzoneArea } from 'material-ui-dropzone';
import { useHistory } from 'react-router-dom';
import FileUpload from "react-material-file-upload";
import { margin } from '@mui/system';
import Upload from 'rc-upload';
import { Line } from "rc-progress";
import Dropzone from 'react-dropzone'
import UploadData from './UploadPdfData';
import axios from 'axios';






const useStyles = makeStyles({
  
    input: {
      color: "white",
      width:'100%',
      gridRow:'1 /span 2',
      // margin:'10px',
      // border:"2px solid white"
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
           height:'600px',
        //    marginTop:'-70px',
        //    fontSize:'50px',
           backgroundSize: '165%',
           backgroundRepeat: 'no-repeat',
       };

       function UploadPdf() {
        const data=useSelector(state=>state.formHandler['userData'])
        const formState=useSelector(state=>state.formHandler['formValidator']['uploadPage'])
        const formData=useSelector(state=>state.formHandler['userData'])
        const formkey=Object.keys(formData)
        const addEpisodeState=useSelector(state=>state.formHandler['nextEpisode']['state'])
        const mainScript=useSelector(state=>state.formHandler['nextEpisode']['mainScript'])
        const episode=useSelector(state=>state.formHandler['nextEpisode']['episode'])
        const season=useSelector(state=>state.formHandler['nextEpisode']['season'])
        const updateState=useSelector(state=>state.formHandler['updateScript']['state'])
        const scriptId=useSelector(state=>state.formHandler['updateScript']['scriptId'])

        const dispatch=useDispatch();
        const changeHandler=(e)=>{
          console.log('happening')
         const {value}=e.target
         const {name}=e.target
         console.log(value)
         dispatch(formAction.inputChangeHandler({name,value}))
        }
        useEffect(()=>{
dispatch(formAction.formavalidator({name:'uploadPage'}))
        },[dispatch,changeHandler,UploadData])
        const classes=useStyles()
        const history=useHistory()
        

        const nextPageHandler=()=>{
         
          console.log('happpening')
          
          axios.post('http://localhost:3500/scriptupload',{...data,mainScriptId:addEpisodeState?mainScript:false,scriptId:updateState?scriptId:false}, {headers:{
            'x-access-token':localStorage.getItem('token')?localStorage.getItem('token'):"",
            'mainScriptId':addEpisodeState?mainScript:false,
            'episode':addEpisodeState?episode:false,
            'season':addEpisodeState?season:false,
            
          }
        }).then(res=>{
          if(res.data.uploaded){
            console.log(res.data)
            dispatch(formAction.submitFormHandler())
            if(res.data.updated){
              return history.push(`/details/${scriptId}`)
            }
            if(res.data.paid){
              history.push('/Browse/0')
            }else
            history.push(`/featured/${res.data.scriptId}`)
          }else{
            throw new Error('some issue at our end please try again after some time')
          }
          
        }).catch(e=>{
          console.log(e)
        })
         
          
          

        }
        const backPageHandler=()=>dispatch(formAction.backStepHandler())
        const dropzoneRef = useRef()



  return (
    <div className='flex justify-center h-screen '>
  <Card className='w-1/2 text-white'style={divImage}>
    <CardContent>
      <div className='grid grid-cols-1 '>
<InputLabel className='w-full text-white my-3' id='demo-simple-select-label' >Script Description</InputLabel>
{/* <div className='row-span-3 w-full'> */}
<TextField 
inputProps={{ className: classes.input }}
// sx={{color:'white'}}
 id='outlined-multiline-static'
//  label="Multiline"
 multiline
 maxRows={4}
 className='row-span-3'
 name={formkey[4]}
 value={formData[formkey[4]]}
 onChange={changeHandler}


//  value={value}
//  onChange={handleChange}
>
  </TextField>
  {/* <TextField  placeholder='' inputProps={{ className: classes.input }}  multiline   id='outlined-multiline-static'  variant='outlined' className='w-1/2 row-span-3 text-white'  style={{color:'white'}} name={formkey[4]} value={formData[formkey[4]]} onChange={changeHandler} /> */}

{/* </div> */}
</div>
      <div className=' flex py-9 pb-16'>
    <UploadData dataSize={10000000} type= {['application/pdf']} name='script' ext='pdf' />
    <UploadData dataSize={10000000} type= {['image/png','image/jpeg','image/jpg']} name='poster' ext='poster' />
    <UploadData dataSize={10000000} type= {['image/png','image/jpeg','image/jpg']} name='mini poster' ext='miniPoster'/>
    {/* <Input accept="image/*" id="contained-button-file" multiple type="file" /> */}
 



      {/* <FileUpload value={files} onChange={setFiles} title={'Upload your pdf file here!!'} />
      <FileUpload value={poster} onChange={setPoster} title={'Upload your Script Poster'} />
      <FileUpload value={image} onChange={setImage} title={'Upload your Script image'} />
      <FileUpload value={video} onChange={setVideo} title={'Upload your Script video'} /> */}


</div>
{/* <div>
  <h1>Want your script to get fearured ???</h1>
  <button onClick={makePayment}>click here</button>
</div> */}

  
   
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
          disabled={formState?false:true}
        >
          Submit the script
        </Button>
      </div>
  
    </CardContent>
  </Card>
    </div>
  )
}

export default UploadPdf