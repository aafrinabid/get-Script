import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import formHandleSlice from './formslice'
import producerSlice from "./producerSlice";
import UiSlice from "./UiSlice";

const store =configureStore({
    reducer:{formHandler:formHandleSlice,UiHandler:UiSlice, ProducerHandler:producerSlice,authHandler:authSlice}
})

export default store;