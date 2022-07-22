import { createSlice } from "@reduxjs/toolkit";

const ChatSlice =createSlice({
    name:'chatslice',
    initialState:{
        room:[],
        change:true
    },
    reducers:{
        roomAdder(state,action){
            if(state.room[action.payload.room]){
                return
            }else{

                state.room.push(action.payload.room)
            }
        },
        roomRemover(state,action){
            state.room=[]
        },
        changeHandler(state,action){
            console.log(action.payload)
            state.change=!state.change
        }
    }
})
export const chatActions=ChatSlice.actions;
export default ChatSlice.reducer;