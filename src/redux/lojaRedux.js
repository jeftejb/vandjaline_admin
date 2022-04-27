import {createSlice} from "@reduxjs/toolkit"


const estabelecimentoSlice = createSlice({
    name:"estabelecimento", 
    initialState:{
        currentLoja:null, 
      estabelecimentos:[], 
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

export const {getEstabelecimentoStart, 
    loginStart, 
    loginSucess, 
    loginFailer, 
    logaut
} = estabelecimentoSlice.actions; 
export default estabelecimentoSlice.reducer;