import {createSlice} from "@reduxjs/toolkit"


const lojaSlice = createSlice({
    name:"currentLoja", 
    initialState:{
        currentLoja:null, 
      isFetching:false,
      error:false, 
        
    }, 
    reducers:{
        loginStart:(state)=>{
            state.isFetching = true
            state.error = false
        },
        loginSucess:(state, action)=>{
         state.isFetching = false;
         state.currentLoja = action.payload
        },
        loginFailer:(state)=>{
         state.isFetching = false;
         state.error = true
        },
        logaut:(state)=>{
            state.currentLoja = null;
        },
        
    }, 
})

export const {
    loginStart, 
    loginSucess, 
    loginFailer, 
    logaut
} = lojaSlice.actions; 
export default lojaSlice.reducer;