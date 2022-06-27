import * as React from 'react';
import { useState,useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link, useHistory} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import classes from './AuthenticationPage.module.css'
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux';
import { authActions } from '../assets/store/authSlice';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();

export default function SignIn() {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const history=useHistory();
  const [open, setOpen] = React.useState(false);
  const [loginUser,setLoginUser]=useState(true);
  const [isLogin,setIsLogin]=useState(true);
  const firstnameRef=useRef();
  const lastnameRef=useRef();
  const usernameRef=useRef();
  const emailRef=useRef();
  const passwordRef =useRef();
  const loginStatus=useSelector(state=>state.authHandler.isLoggedIn)
  let url
  if(isLogin){
    if(loginUser){
    url='http://localhost:4000/loginScriptWriter'
      
    }else
    url='http://localhost:4000/loginProducer'

  }else{
    if(loginUser){
    url='http://localhost:4000/registerScriptWriter'
    }else{

      url='http://localhost:4000/registerProducer'
    }
  }

 const handleClose=()=>{
  setOpen(false)
 }
  const handleLogin=()=>{
    setLoginUser(prevstate=>!prevstate)
  }

  const handleSignUp=()=>{
    setIsLogin(prevstate=>!prevstate)
  }
  const dispatch= useDispatch()

  const appBar=(message)=>{
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredFirstname=!isLogin ? firstnameRef.current.value:'';
    const enteredLastname=!isLogin ? lastnameRef.current.value:'';
    const enteredEmail=!isLogin ? emailRef.current.value:'';
    const enteredUsername=usernameRef.current.value;
    const enteredPassword=passwordRef.current.value;
     axios.post(url,
      {
        username:enteredUsername,
        firstName:enteredFirstname,
        lastName:enteredLastname,
        email:enteredEmail,
        password:enteredPassword

      }).then((res)=>{
        if(res.ok){
          console.log('cool')
        }
        dispatch(authActions.loginHandler(res.data))
        if(loginStatus){
          history.push('/')
        }

      }).catch((err)=>{
        setOpen(true)
        appBar(err.message)
      })
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
           <Typography variant='body2' onClick={handleLogin} className='cursor-pointer'>
                   {isLogin?`${loginUser?'Are you a producer? Sign in here ...':'Are you a Script-writer? sign in here...'}`:`${loginUser?'Are you a producer sign up here...':'Are you a Scriptwriter sign up here...'}` }


                  {/* //  { loginUser? "Are you a producer? sign in here...":"Are you a Script-writer? sign in here..."} */}
                
              </Typography>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           { isLogin?'Sign in':'Sign Up'}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <div className={classes.signup}>
          {!isLogin &&
           <TextField
                  autoComplete="given-name"
                  name="firstName"
                  ref={firstnameRef}
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
          }

     {!isLogin &&
       <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  ref={lastnameRef}
                />
             }
          {!isLogin &&
          <TextField
          className='col-span-2'
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          ref={emailRef}
        />

          }
                
 
                </div>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="username"
              autoFocus
              ref={usernameRef}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              ref={passwordRef}
              autoComplete="current-password"
            />
           {isLogin &&
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />} 
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color='secondary'
              sx={{ mt: 3, mb: 2 ,backgroundColor:'black'}}
            >
             {isLogin?'Sign In':'Sign Up'} 
            </Button>
            <Grid container>
            <Grid item xs={12} sm={6}>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Link  variant="body2" onClick={handleSignUp}>
                  {isLogin?"Don't have an account? Sign Up":'Already have an account ? Sign in here.. '}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
