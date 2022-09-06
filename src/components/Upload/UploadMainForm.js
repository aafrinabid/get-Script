import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import { useSelector,useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";

import UploadFormInput from './UploadFormInput'
import UploadForm2 from './UploadForm2'
import UplpoadPdf from './UploadPdf'
import UploadPdf from './UploadPdf'
import axios from 'axios'
import ScriptDetail from '../Details/ScriptDetail'
import { formAction } from '../../assets/store/formslice'

const useStyles = makeStyles({
  input: {
    color: "white",
  }
});


const labels = ['First Step', 'Second Step', 'Confirmation']
const handleSteps = (step) => {
  switch (step) {
    case 0:
      return <div className='h-screen bg-inherit'> <UploadFormInput /> </div>
    case 1:
      return <UploadForm2 /> 
    case 2:
      return <UploadPdf />
    default:
      throw new Error('Unknown step')
  }
}

function UploadMainForm() {

  const clas=useStyles()
  const dispatch=useDispatch();
    const history= useHistory()
    const activeStep=useSelector((state)=>state.formHandler.activeStepState)
    const tableData=useSelector(state=>state.formHandler.userData)
      console.log(tableData)
    const addEpisodeState=useSelector(state=>state.formHandler['nextEpisode']['state'])
    const updateState=useSelector(state=>state.formHandler['updateScript']['state'])
    const mainScript=useSelector(state=>state.formHandler['nextEpisode']['mainScript'])
    const scriptId=useSelector(state=>state.formHandler['updateScript']['scriptId'])

    useEffect(()=>{
      if(addEpisodeState||updateState){
        axios.post('http://localhost:3500/nextScriptEpisode',{
   id:addEpisodeState?mainScript:scriptId,
   addEpisodeState:addEpisodeState,
   updateState:updateState

        }).then((res)=>{
          console.log(res.data.result)
          const obj=res.data.result
          const keys=Object.keys(obj)
          const medias=res.data.media
          const k=Object.keys(medias)
          console.log(keys)
          keys.map(key=>{
            dispatch(formAction.inputChangeHandler({name:key,value:obj[key]}))
            if(res.data.episodeState){
            dispatch(formAction.episodePageHandler())
            }
          })
if(!res.data.episodeState){
  k.map(key=>{
    dispatch(formAction.mediaHandler({name:key,value:medias[key]}))
    dispatch(formAction.uploadHandler({name:key}))
  })

}
          

          
        })
      }

    },[])
  return (
    <div>
{activeStep === labels.length?(
 <>
   {history.push(`/Browse/${0}`)}
</> 

):(
    <>
          {/* <Box sx={{ my: 5 }} className='p-15'>
            <Typography variant="h4" align="center">
              Multi Step Form
            </Typography>
          </Box> */}
          <Stepper activeStep={activeStep} sx={{ py: 3,color:'white' }} alternativeLabel className='pb-6'>
            {labels.map((label) => (
              <Step key={label}>
                <StepLabel sx={{color:'white'}} className={clas.input}><h1 className='text-white'>{label}</h1> </StepLabel>
              </Step>
            ))}
          </Stepper>

          {handleSteps(activeStep)}
        </>
)
            }
    </div>
  )
}

export default UploadMainForm