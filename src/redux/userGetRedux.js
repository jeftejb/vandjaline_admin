import {createSlice} from "@reduxjs/toolkit"


const getUserSlice = createSlice({
    name:"user", 
    initialState:{
        users:[], 
        isFetching:false,
        error:false, 
        
    }, 
    reducers:{
       
//get Usuarios
       getUserStart:(state)=>{
        state.isFetching = true
        state.error = false
    },
    getUserSucess:(state, action)=>{
     state.isFetching = false;
     state.users = action.payload
    },
    getUserFailer:(state)=>{
     state.isFetching = false;
     state.error = true
    },

    //Deletar Produtos
    deleteUserStart:(state)=>{
        state.isFetching = true
        state.error = false
    },
    deleteUserSucess:(state, action)=>{
        state.isFetching = false
        state.users.splice(
            state.users.findIndex((item)=>item._id === action.payload.id),1
        )
    }, 
    deleteUserFailer:(state)=>{
        state.isFetching = false
        state.error = true
    }, 


    }, 
})

export const {
    getUserStart, 
    getUserSucess, 
    getUserFailer, 
    deleteUserStart, 
    deleteUserSucess, 
    deleteUserFailer, 

} = getUserSlice.actions; 
export default getUserSlice.reducer;