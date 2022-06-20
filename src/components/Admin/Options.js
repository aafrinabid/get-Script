import { Typography } from '@material-ui/core'
import React from 'react'

function Options() {
  return (
    <div className='flex flex-col justify-start text-left'>
       <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            DashBoard
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            DashBoard
          </Typography> <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            DashBoard
          </Typography>
    </div>
  )
}

export default Options