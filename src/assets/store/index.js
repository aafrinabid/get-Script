import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import chatSlice from "./chatSlice";
import formHandleSlice from './formslice'
import producerSlice from "./producerSlice";
import UiSlice from "./UiSlice";
import videoSlice from "./videoSlice";

const store =configureStore({
    reducer:{formHandler:formHandleSlice,UiHandler:UiSlice, ProducerHandler:producerSlice,authHandler:authSlice,chatHandler:chatSlice,videoHandler:videoSlice}
})

export default store;