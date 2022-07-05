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
            genres:Array(),
            description:'',
            table:{
                theOrigin:'',
                humanHook:'',
                character:'',
                Desires:'',
                obstacles:'',
                highlights:'',
                openRoad:''
            },
            pdf:'',
            poster:'',
            miniPoster:'',
            video:'',
            isUploaded:{
                pdf:false,
                poster:false,
                miniPoster:false,
                video:false
            }
            
        },
        formValidator:{
            scriptInfo:false,
            pitchTable:false,
            uploadPage:false
            

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
            console.log(action)
            const data= Object.keys(state.userData)
            data.forEach(key=>{
                if(key===action.payload.name){
                    if(key==='genres'){
                        console.log(state);
                        console.log(action.payload)
                        return state['userData'][key]=action.payload.value
              }
                    state['userData'][key]=action.payload.value
                }
                if(typeof state['userData'][key]==='object'){
                    const objdata= Object.keys(state['userData'][key])
                    objdata.forEach(key=>{
                        if(key===action.payload.name){
                            state['userData']['table'][key]=action.payload.value
                        }
                    })
                }
            })
        },
        mediaHandler(state,action){
       if (action.payload.name==='pdf'){
        state['userData']['pdf']=action.payload.value
       }
       if (action.payload.name==='poster'){
        state['userData']['poster']=action.payload.value
       } 
       if (action.payload.name==='miniPoster'){
        state['userData']['miniPoster']=action.payload.value
       }
       if (action.payload.name==='video'){
       state['userData']['video']=action.payload.value
       }
    },
    uploadHandler(state,action){
       const data= state['userData']['isUploaded']
       const key=Object.keys(data)
       key.forEach(k=>{
        if(k===action.payload.name){
            state['userData']['isUploaded'][k]=true
        }
       })
    
    }, formavalidator(state,action){
        if(action.payload.name==='scriptInfo'){
            if(state.userData['titleName'].length>0 && state.userData['scriptType'].length>0&& state.userData['entertainmentType']&&state.userData['genres'].length>0){
                state['formValidator']['scriptInfo']=true
            }
            if(action.payload.name==='pitchTable'){
                if(state['userData']['table']['theOrigin'].length>0 && state['userData']['table']['Desires'].length>0 && state['userData']['table']['humanHook'].length>0 && state['userData']['table']['obstacles'].length>0 && state['userData']['table']['highlights'].length>0 && state['userData']['table']['openRoad'].length>0 ){
                    state['formValidator']['pitchTable']=true
                }
            }
            if(action.payload.name==='uploadPage'){
                if(state['userData']['description'].length>0 && state['userData']['isUploaded']['miniPoster']===true && state['userData']['isUploaded']['pdf']===true && state['userData']['isUploaded']['poster']===true){
                    state['formValidator']['uploadPage']=true
                }
            }
        }

    },
        submitFormHandler(state){
            console.log('happening at submitHandler')
            state.activeStepState=0
            const data= Object.keys(state.userData)
            console.log(data)
            data.forEach(key=>{
                console.log(typeof state['userData'][key],key)
                if(typeof state['userData'][key]==='string'){
                    
                    state['userData'][key]=''
                }
                if(typeof state['userData'][key]==='number'){
                    
                    state['userData'][key]=''
                }
                if(typeof state['userData'][key]==='object'){
                    if(key==='genres'){
                        console.log(key,'dkdjkd')
                       return state['userData'][key]=Array()
              }
                    const objdata= Object.keys(state['userData'][key])
                    console.log(objdata,'crazy boys')
                    objdata.forEach(key=>{
                        if(typeof state['userData']['table'][key]==='string'){
                            state['userData']['table'][key]=''
                        }
                    })
                }
            })
        }
        
    }
})


export const formAction=formHandleSlice.actions;
 export default formHandleSlice.reducer;