import { Typography } from '@material-ui/core'
import React from 'react'

function Options() {
  return (
    <div className='flex flex-col justify-start text-left border-r-1 h-screen border-black-100 shadow-xl'>
        <div className='p-5 pt-2'>
       <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            DashBoard
          </Typography>
          </div>
          <div className='p-5 pt-2'>
       <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Users
          </Typography>
          </div>        <div className='p-5 pt-2'>
       <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Posts
          </Typography>
          </div>
    </div>
  )
}

export default Options