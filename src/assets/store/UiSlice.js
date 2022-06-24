import { Create } from "@material-ui/icons";
import { createSlice } from "@reduxjs/toolkit";


const UiSlice=createSlice({
    name:'Ui',
    initialState:{
        optionSeen:false
    },
    reducers:{
        onClickLogo(state){

            state.optionSeen=!state.optionSeen
            console.log(state.activeStepState)
        }
    }
})


export const UiAction=UiSlice.actions;
 export default UiSlice.reducer;