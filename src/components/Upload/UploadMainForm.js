import React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";

import UploadFormInput from './UploadFormInput'
import UploadForm2 from './UploadForm2'
import UplpoadPdf from './UploadPdf'
import UploadPdf from './UploadPdf'
// Step titles

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
    const history= useHistory()
    const activeStep=useSelector((state)=>state.formHandler.activeStepState)
  return (
    <div>
{activeStep === labels.length?(
 <>
   {history.push('/')}
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