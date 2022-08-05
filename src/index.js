import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StyledEngineProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './assets/store';
import { ContextProvider } from './assets/context';
// const root=document.getElementById('root');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StyledEngineProvider injectFirst>
    <BrowserRouter>
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
    <App />
    </ContextProvider>
    </Provider>
  </React.StrictMode>
  </BrowserRouter>
  </StyledEngineProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
