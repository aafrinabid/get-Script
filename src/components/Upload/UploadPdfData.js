import React,{useState} from 'react';
import Dropzone from 'react-dropzone'


function UploadData(props) {
    const [isError,setIsError]=useState(false)
    const [errorMsg,setErrorMsg]=useState('')
    const [isValid,setIsValid]=useState(false)
    const [file,setFile]=useState(null)
    console.log(props)
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
        if(props.type.length>1){
            if(currentFileType!==props.type[0]&&currentFileType!==props.type[1]&&currentFileType!==props.type[2]){
         console.log(currentFileType)
         setIsError(true)
         setIsValid(false)
         return setErrorMsg('file is not of the recommended type')
        }
        if(props.type.length===1){
            if(currentFileType!==props.type[0]){
                setIsError(true)
                setIsValid(false)
                return setErrorMsg('file is not of the recomended type')
            }
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

  return (
    <section className="container">
  <Dropzone onDrop={handleOnDrop}  multiple={false} accept={props.type} maxSize={props.dataSize}>
  {({getRootProps, getInputProps}) => (
    <section >
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {!isValid?
        !isError && !isValid?<p>Drag 'n' drop some your {props.name} here, or click to select the {props.name}</p>:<p className='text-red-600'>{errorMsg}</p>:''}
        
       {!isError && isValid?<p className='text-green-500'>selected file has been added</p>:''}
      </div>
    </section>
  )}
  </Dropzone>
  {file && isValid?<h1>{file.name} added</h1>:''}

    </section>
  );
}

export default UploadData