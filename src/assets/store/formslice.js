import { Create } from "@material-ui/icons";
import { createSlice } from "@reduxjs/toolkit";


const formHandleSlice=createSlice({
    name:'formHandler',
    initialState:{
        activeStepState:0,
    },
    reducers:{
        nextStepHandler(state){
            state.activeStepState++
        },
        backStepHandler(state){
            state.activeStepState--
        },
        resetStepHandler(state){
            state.activeStepState=0
        }
        
    }
})


export const formAction=formHandleSlice.actions;
 export default formHandleSlice.reducer;