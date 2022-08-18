import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StyledEngineProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './assets/store';
import {Auth0Provider} from '@auth0/auth0-react'
// const root=document.getElementById('root');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StyledEngineProvider injectFirst>
    <BrowserRouter>
  <React.StrictMode>
    <Provider store={store}>
    <Auth0Provider
    domain="aafrinabid9.us.auth0.com"
    clientId="BIF4y85zwcZ5xonQj2PIkRpvtupfhwcY"
    redirectUri={window.location.origin}
  >
    <App />
    </Auth0Provider>
    </Provider>
  </React.StrictMode>
  </BrowserRouter>
  </StyledEngineProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
