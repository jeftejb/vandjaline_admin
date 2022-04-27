import {createSlice} from "@reduxjs/toolkit"


const userSlice = createSlice({
    name:"user", 
    initialState:{
        currentUser:null, 
        isFetching:false,
        error:false, 
        
    }, 
    reducers:{
       loginUserStart:(state)=>{
           state.isFetching = true
           state.error = false
       },
       loginUserSucess:(state, action)=>{
        state.isFetching = false;
        state.currentUser = action.payload
       },
       loginUserFailer:(state)=>{
        state.isFetching = false;
        state.error = true
       },
       logautUser:(state)=>{
           state.currentUser = null;
       },

    }, 
})

export const {
    loginUserStart, 
    loginUserSucess, 
    loginUserFailer, 
    logautUser
} = userSlice.actions; 
export default userSlice.reducer;