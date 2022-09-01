import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { UiAction } from '../../assets/store/UiSlice';
import { useDispatch, useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Check from '@mui/icons-material/Check';
import { authActions } from '../../assets/store/authSlice';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'blue',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [notDetails,setNotDetails]=useState([])
  const [isLoading,setIsLoading]=useState(false)
  const producer=useSelector(state=>state.ProducerHandler.producers)
  useEffect(()=>{
    setIsLoading(true)
   axios.get('http://localhost:3500/fetchnotification').then((res)=>{
    setNotDetails([...res.data.result])
    setIsLoading(false)
   }).catch(e=>{console.log(e)
  setIsLoading(false)
  })
  },[producer])
  console.log(notDetails)
  const dispatch= useDispatch();
  const optionShower=()=>dispatch(UiAction.onClickLogo())
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [notAnchorEl, setNotAnchorEl] = React.useState(null);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const notopen = Boolean(notAnchorEl);

   const handleLogout=()=>{
    dispatch(authActions.logoutHandler())
   }

   const notHandleClick = (event) => {
    console.log(event)
    setNotAnchorEl(event.currentTarget);
  };
      const notHandleClose = () => {
        setNotAnchorEl(null);
      };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    // handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}><Link to={`/Browse/${0}`}>  GetScript Page</Link></MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit" 
          >
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        {/* <p>Messages</p> */}
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          // onClick={notHandleClick}
        >
          {/* <Badge badgeContent={17} color="error"> */}
            <NotificationsIcon />
          {/* </Badge> */}
        </IconButton>
        <Menu
                // className='h-full'
                id="notifications"
                anchorEl={notAnchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={notopen}
                onClose={notHandleClose}
              >
                {/* <MenuItem className='bg-black' onClick={notHandleClose}>Nolan requested for Producer Access </MenuItem>
                <MenuItem onClick={notHandleClose}>Rafi requested for Producer Access</MenuItem>
                <MenuItem onClick={notHandleClose}>Kamal requested for Producer Access </MenuItem> */}
                 <Paper sx={{ width: 320,color:'black' ,height:'100%'}}>
      <MenuList >
        {isLoading && <h1>Loading...</h1>}
        {!isLoading && notDetails.map(detail=>(
          <>
           <MenuItem onClick={notHandleClose}>
           <ListItemText >
             <Link to='/AdminPanel/Requests' onClick={notHandleClose}> <Typography variant='inherit' noWrap >{detail.username} requested for Producer Access</Typography></Link>
           </ListItemText>
           </MenuItem>
        <Divider/>
        </>


        ))}
       
      </MenuList>
    </Paper>

              </Menu>

        
        {/* <p>Notifications</p> */}
      </MenuItem>
      <MenuItem >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          onClick={handleMobileMenuOpen}
        >
          <AccountCircle />
        </IconButton>
        <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}><Link to={`/Browse/${0}`}>  GetScript Page</Link></MenuItem>
                <MenuItem onClick={handleLogout}> logout</MenuItem>

              </Menu>

        {/* <p>Profile</p> */}
      </MenuItem>
    </Menu>
    
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className='bg-gray-900 text-white'>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={optionShower}
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            GS
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search ..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={notHandleClick}
            >
              <Badge badgeContent={notDetails.length} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
