import React,{useState} from 'react';
import Dropzone from 'react-dropzone'
import {Button} from '@mui/material';
import axios from 'axios';
import { useDispatch ,useSelector} from 'react-redux';
import { formAction } from '../../assets/store/formslice';


function UploadData(props) {
    const dispatch=useDispatch()
    const isUploaded=useSelector(state=>state.formHandler['userData']['isUploaded'][props.ext])
    const [isError,setIsError]=useState(false)
    const [errorMsg,setErrorMsg]=useState('')
    const [isValid,setIsValid]=useState(false)
    const [file,setFile]=useState(null)
    // const [isUploaded,setIsUploaded]=useState(false)
const handleOnDrop=async(files,rejectedFiles)=>{
    console.log(files)
    console.log(rejectedFiles)
    // if(rejectedFiles && rejectedFiles.length>0){
    //     const currentRejectFile=rejectedFiles[0]
    //     const currentRejecetedFileType=currentRejectFile.type
    //     const currentRejectFileSize=currentRejectFile.maxSize
    //     if(currentRejectFileSize>props.dataSize){
    //         alert('this file is too big')
    //     }
    // }

    if(files && files.length>0){
        const currentFile=files[0]
        const currentFileType=currentFile.type
        const currentFileSize=currentFile.maxSize
        console.log(props.type)
        if(props.type.length===1){
            console.log('here')
            if(currentFileType!==props.type[0]){
                setIsError(true)
                setIsValid(false)
                return setErrorMsg('file is not of the recommended type')
                
               
            }
        }
        if(props.type.length>1){
            if(currentFileType!==props.type[0]&&currentFileType!==props.type[1]&&currentFileType!==props.type[2]){
         console.log(currentFileType)
         setIsError(true)
         setIsValid(false)
         return setErrorMsg('file is not of the recommended type')
        }
       

        }
        if(currentFileSize>props.dataSize){
            setIsError(true)
           return setErrorMsg('file size is too large')
        }
        console.log('all set')
        setIsError(false)
        setIsValid(true)
        setFile(currentFile)
        
    }
}
const onUpload =()=>{
    const formData=new FormData();
    formData.append('file',file)
    
    axios.post('http://localhost:4000/uploadscript',formData,{
  headers:{
    'Content-Type':'multipart/form-data'
  }
 }).then((res)=>{
        const url=res.data.url
        dispatch(formAction.mediaHandler({name:props.ext,value:url}))
        dispatch(formAction.uploadHandler({name:props.ext}))

    }).catch(e=>{
        setIsValid(false)
        setIsError(true)
        console.log(e)
        setErrorMsg('server issue')
    })
    

}

  return (
    <>
 {isUploaded?'cooool':
    <section className="container">
  <Dropzone onDrop={handleOnDrop}  multiple={false} accept={props.type} maxSize={props.dataSize}>
  {({getRootProps, getInputProps}) => (
    <section >
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {!isValid?
        !isError && !isValid?<p className='cursor-pointer'>Drag 'n' drop some your {props.name} here, or click to select the {props.name}</p>:<p className='text-red-600'>{errorMsg}</p>:''}
        
       {!isError && isValid?<p className='text-green-500 cursor-pointer'>selected file has been added</p>:''}
      </div>
    
    </section>
  )}
  </Dropzone>
  {file && isValid?<h1>{file.name} added</h1>:''}
  <div>

{isValid?<Button variant="contained" component="span" onClick={onUpload}>
Upload
</Button>:''}
</div>

</section>
}
</>
  );
}

export default UploadData