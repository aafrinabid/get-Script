import { configureStore } from "@reduxjs/toolkit";
import formHandleSlice from './formslice'
import producerSlice from "./producerSlice";
import UiSlice from "./UiSlice";

const store =configureStore({
    reducer:{formHandler:formHandleSlice,UiHandler:UiSlice, ProducerHandler:producerSlice}
})

export default store;