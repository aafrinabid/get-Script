import { createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";

const authSlice=createSlice({
    name:'authentication',
    initialState:{
        isLoggedIn:false,
        role:0,
        status:''
    },
    reducers:{
        loginHandler(state,action){
            data=action.payload
            console.log(data)
            if(data.auth){
                console.log(data.auth)
                state.isLoggedIn=!state.isLoggedIn;
                console.log(state.isLoggedIn)
                state.role=data.role
                state.status=data.status
                localStorage.setItem('token',data.token)

            }
            else{
                state.isLoggedIn=false
            }
        },
        logoutHandler(state){
            console.log('happening')
            state.isLoggedIn=false;
            localStorage.removeItem('token')
            state.role=0
        }
    }
    

})

export const authActions=authSlice.actions;
export default authSlice.reducer;