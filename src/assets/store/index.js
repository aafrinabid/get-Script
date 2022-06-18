import { configureStore } from "@reduxjs/toolkit";
import formHandleSlice from './formslice'

const store =configureStore({
    reducer:{formHandler:formHandleSlice}
})

export default store;