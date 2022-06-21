import { configureStore } from "@reduxjs/toolkit";
import formHandleSlice from './formslice'
import UiSlice from "./UiSlice";

const store =configureStore({
    reducer:{formHandler:formHandleSlice,UiHandler:UiSlice}
})

export default store;