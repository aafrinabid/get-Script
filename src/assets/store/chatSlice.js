import { createSlice,current } from "@reduxjs/toolkit";

const ChatSlice =createSlice({
    name:'chatslice',
    initialState:{
        onlineUsers:[],
        users:[],
        room:[],
        change:'',
        currentChat:''
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
            state.users=[...action.payload.users]
        },
        OnlineuserAdder(state,action){
            // console.log(action.payload)
            const existingIndex=state.onlineUsers.findIndex(user=>user.id===action.payload.users.id)
            const existingUser=state.onlineUsers[existingIndex]
            let updatedlist
            if(existingUser){
                if(existingUser.socketId===action.payload.users.socketId){
                    return
                }else{
                    const updatedUser={...existingUser,socketId:action.payload.users.socketId}
                    updatedlist=[...state.onlineUsers]
                    updatedlist[existingIndex]=updatedUser
                }
            }else{
                console.log(current(state.onlineUsers))
                updatedlist=state.onlineUsers.concat(action.payload.users)
                // state.users=[...state.users,action.payload.users]


            }
            state.onlineUsers=updatedlist
        },
        userRemover(state,action){
           const updatedList=state.onlineUsers.filter(user=>user.socketId!==action.payload)
           state.onlineUsers=updatedList 
        },
        logoutRemover(state,action){
            const updatedList=state.onlineUsers.filter(user=>user.userId!==action.payload)
            state.onlineUsers=updatedList
        },
        changeOnlineUsers(state,action){
            console.log(action.payload)
            const updatedList=[...action.payload.users]
            state.onlineUsers=updatedList
        },
        currentChatAdder(state,action){
            state.currentChat=action.payload;
        },
        userCleaner(state){
            state.users=[]
        }
        
    }
})
export const chatActions=ChatSlice.actions;
export default ChatSlice.reducer;