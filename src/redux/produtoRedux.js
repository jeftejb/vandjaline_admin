import {createSlice} from "@reduxjs/toolkit"


const produtoSlice = createSlice({
    name:"produto", 
    initialState:{
      produtos:[], 
      isFetching:false,
      error:false, 
        
    }, 
    reducers:{
        //Buscar Todos
        getProdutoStart:(state)=>{
            state.isFetching = true
            state.error = false
        },
        getProdutoSuccess:(state, action)=>{
            state.isFetching = false
            state.produtos = action.payload
        }, 
        getProdutoFailer:(state)=>{
            state.isFetching = false
            state.error = true
        },
      
        //Deletar Produtos
        deleteProdutoStart:(state)=>{
            state.isFetching = true
            state.error = false
        },
        deleteProdutoSuccess:(state, action)=>{
            state.isFetching = false
            state.produtos.splice(
                state.produtos.findIndex((item)=>item._id === action.payload.id),1
            )
        }, 
        deleteProdutoFailer:(state)=>{
            state.isFetching = false
            state.error = true
        }, 

          //Actualizar  Produtos
          updateProdutoStart:(state)=>{
            state.isFetching = true
            state.error = false
        },
        updateProdutoSuccess:(state, action)=>{
            state.isFetching = false
            state.produtos[state.produtos.findIndex((item)=>item._id === action.payload.id)] = action.payload.produto
        }, 
        updateProdutoFailer:(state)=>{
            state.isFetching = false
            state.error = true
        }, 

         //Novo  Produto
         novoProdutoStart:(state)=>{
            state.isFetching = true
            state.error = false
        },
        novoProdutoSuccess:(state, action)=>{
            state.isFetching = false
            state.produtos.push(action.payload)
        }, 
        novoProdutoFailer:(state)=>{
            state.isFetching = false
            state.error = true
        }

    }, 
})

export const {getProdutoStart, 
    getProdutoSuccess, 
    getProdutoFailer, 
    deleteProdutoStart, 
    deleteProdutoSuccess, 
    deleteProdutoFailer , 
    updateProdutoStart, 
    updateProdutoSuccess, 
    updateProdutoFailer, 
    novoProdutoStart, 
    novoProdutoSuccess, 
    novoProdutoFailer
} = produtoSlice.actions; 
export default produtoSlice.reducer;