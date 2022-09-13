import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({severity,state,message,vertical,horizontal,setSnakeState}) {
//   const [open, setOpen] = React.useState(state);
//   const [vertical,setVertical]=useState(vertical)
//   const [horizontal,setHorizontal]=useState(horizontal)


//   const handleClick = () => {
    // setOpen(true);
//   };

  const handleClose = (event, reason) => {
    console.log(event,reason)
    if (reason === 'clickaway') {
      return;
    }
    setSnakeState(false)
    // setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
      <Snackbar open={state} autoHideDuration={6000} anchorOrigin={{ vertical:vertical, horizontal:horizontal }} onClose={handleClose}>
        <Alert onClose={handleClose} severity= {severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> */}
    </Stack>
  );
}