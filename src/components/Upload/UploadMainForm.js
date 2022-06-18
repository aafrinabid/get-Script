import React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import UploadFormInput from './UploadFormInput'
// Step titles
const labels = ['First Step', 'Second Step', 'Confirmation']
const handleSteps = (step) => {
  switch (step) {
    case 0:
      return <div className='h-screen bg-inherit'> <UploadFormInput /> </div>
    case 1:
      return <h1>step 2</h1> 
    case 2:
      return <h2>ALL OK</h2>
    default:
      throw new Error('Unknown step')
  }
}

function UploadMainForm() {
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
          <Stepper activeStep={activeStep} sx={{ py: 3 }} alternativeLabel className='pb-6'>
            {labels.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
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