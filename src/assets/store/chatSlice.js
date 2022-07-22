import { createSlice } from "@reduxjs/toolkit";

const ChatSlice =createSlice({
    name:'chatslice',
    initialState:{
        room:[]
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
        }
    }
})
export const chatActions=ChatSlice.actions;
export default ChatSlice.reducer;