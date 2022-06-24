import { Create } from "@material-ui/icons";
import { createSlice } from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";


const formHandleSlice=createSlice({
    name:'formHandler',
    initialState:{
        activeStepState:0,
        userData:{
            titleName:'',
            entertainmentType:'',
            scriptType:'',
            genres:'',
            table:{
                theOrigin:'',
                humanHook:'',
                character:'',
                Desires:'',
                obstacles:'',
                highlights:'',
                openRoad:''
            },
            pdf:''
        }
    },
    reducers:{
        nextStepHandler(state){

            state.activeStepState=state.activeStepState+1
            console.log(state.activeStepState)
        },
        backStepHandler(state){
            state.activeStepState=state.activeStepState-1
            
        },
        resetStepHandler(state){
            state.activeStepState=0
        },
        inputChangeHandler(state,action){
            const data= Object.keys(state.userData)
            data.forEach(key=>{
                if(key===action.payload.name){
                    state.userData[key]===action.payload.value
                }
                if(typeof state.userData[key]==='object'){
                    const objdata= Object.keys(state.userData[key])
                    objdata.forEach(key=>{
                        if(key===action.payload.name){
                            state.userData['table'][key]=action.payload.value
                        }
                    })
                }
            })
        },
        submitFormHandler(state){
            const data= Object.keys(state.userData)
            data.forEach(key=>{
                if(typeof state.userData[key]==='string'){
                    state.userData[key]===''
                }
                if(typeof state.userData[key]==='object'){
                    const objdata= Object.keys(state.userData[key])
                    objdata.forEach(key=>{
                        if(typeof state.userData['table']==='string'){
                            state.userData['table'][key]=''
                        }
                    })
                }
            })
        }
        
    }
})


export const formAction=formHandleSlice.actions;
 export default formHandleSlice.reducer;