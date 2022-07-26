import { createSlice } from "@reduxjs/toolkit";

const ChatSlice =createSlice({
    name:'chatslice',
    initialState:{
        users:[],
        room:[],
        change:''
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
            state.change=action.payload.date
        },
        userAdder(state,action){
            console.log(action.payload)
            const existingIndex=state.users.findIndex(user=>user.id===action.payload.users.id)
            const existingUser=state.users[existingIndex]
            let updatedlist
            if(existingUser){
                if(existingUser.socketId===action.payload.users.socketId){
                    return
                }else{
                    updatedUser={...existingUser,socketId:action.payload.users.socketId}
                    updatedlist=[...state.users]
                    updatedlist[existingIndex]=updatedUser
                }
            }else{
                updatedlist=state.users.concat(action.payload.users)
                // state.users=[...state.users,action.payload.users]


            }
            state.users=updatedlist
        },
        userRemover(state,action){
           const updatedList=state.users.filter(user=>user.socketId!==action.payload)
           state.users=updatedList 
        },
        logoutRemover(state,action){
            const updatedList=state.users.filter(user=>user.id!==action.payload)
            state.users=updatedList
        }
        
    }
})
export const chatActions=ChatSlice.actions;
export default ChatSlice.reducer;