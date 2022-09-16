import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import chatSlice from "./chatSlice";
import formHandleSlice from './formslice'
import producerSlice from "./producerSlice";
import snackbarSlice from "./snackbarSlice";
import UiSlice from "./UiSlice";

const store =configureStore({
    reducer:{formHandler:formHandleSlice,UiHandler:UiSlice, ProducerHandler:producerSlice,authHandler:authSlice,chatHandler:chatSlice,snackBarHandler:snackbarSlice}
})

export default store;