import {
     loginFailer, 
     loginStart, 
     loginSucess,  
    } from "./lojaLoginRedux"
    import {
        loginUserFailer, 
        loginUserStart, 
        loginUserSucess,  
       } from "./userRedux"
import {publicRequest, userRequest} from "./../requestMetodos"






//usuarios ///////////////////////////////
export const loginAdmin = async (dispatch,user)=>{
    dispatch(loginStart()); 
    try{
        const res = await publicRequest.post("/autenticacao/login/estabelecimento", user)
        dispatch(loginSucess(res.data))
    }catch(erro){
        dispatch(loginFailer())
    }
}

export const loginUser = async (dispatch,user)=>{
    dispatch(loginUserStart()); 
    try{
        const res = await publicRequest.post("/autenticacao/login/usuario", user)
        dispatch(loginUserSucess(res.data))
    }catch(erro){
        dispatch(loginUserFailer())
    }
}

//Busacr todos 

export const getUsario = async ()=>{
   
    try{
           await userRequest.get("/users")  
    }catch(erro){
    }

}
//Deletar usuario

export const deletarUser = async (id)=>{

    try{
          await userRequest.delete(`/users/${id}`)
         
    }catch(erro){
      
    }

}


//produtso ////////////////////
export const getProduto = async ()=>{
    try{
     await publicRequest.get("/produtos")
    }catch(erro){
    }
}

export const deleteProduto = async (id)=>{
    try{
         await userRequest.delete(`/produtos/${id}`)  
    }catch(erro){
      
    }
}
//actualizar
export const updateProduto = async (id, produto)=>{
    try{
      await userRequest.put(`/produtos/${id}`, produto)
    }catch(erro){
       
    }
}
// novo produto

export const novoProduto = async (produto)=>{
    try{
         await userRequest.post(`/produtos/`, produto)
    }catch(erro){
      
    }
}





//estabeleicmnto ////////////////////

export const getEstabelecimento = async ()=>{
    try{
         await publicRequest.get("/estabelecimento")
       
    }catch(erro){

    }
}

export const deleteEstabelecimento = async (id)=>{
     

    try{
         await userRequest.delete(`/estabelecimento/${id}`)
        
       
    }catch(erro){
       
    }
}
//actualizar estabelecimento
export const updateEstabelecimento = async (id, dados)=>{
    try{
         await userRequest.put(`/estabelecimento/${id}`, dados)

    }catch(erro){
       
    }
}
// novo estabelecimento

export const novoEstabelecimento = async (estabelecimento)=>{

    try{
         await userRequest.post(`/estabelecimento/`,estabelecimento)
        
       
    }catch(erro){
     
    }
}


// siteInput

export const infNova = async (dados)=>{
    try{
         await userRequest.post(`/site/inf`, dados)
       
    }catch{}
}


// imgInput

export const imgNova = async (dados)=>{
    try{
       await userRequest.post(`/site/img`, dados)
       
    }catch{}
}





