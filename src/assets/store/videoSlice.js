import { createSlice } from "@reduxjs/toolkit";

const videoSlice=createSlice({
    name:'videoSlcie',
    initialState:{
        call:{},
        CallAccepted:false,
        callEnded:null,
        calling:false,
        recieving:false,
        caller:'',
        stream:null,
        userVideo:null,
        myVideo:null
    },
    reducers:{
        isCalling(state,action){
            console.log('calling')
            state.calling=true

        },setUserVideo(state,action){
            state.userVideo=action.payload
        },
        setMyVideo(state,action){
            state.myVideo=action.payload
        },
        setCallAccepted(state,action){
            state.CallAccepted=true
        },
        setCall(state,action){
            state.call={...action.payload}
        },
        setStream(state,action){
            console.log(action.payload)
            state.stream=action.payload
        },
        setIsRecieving(state,action){
            console.log(action)
            state.recieving=action.payload
        }

    }
})

export const videoActions=videoSlice.actions;
export default videoSlice.reducer;