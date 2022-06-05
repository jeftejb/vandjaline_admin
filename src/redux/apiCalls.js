import {
     loginFailer, 
     loginStart, 
     loginSucess,  
     logaut
    } from "./lojaLoginRedux"
    import {
        loginUserFailer, 
        loginUserStart, 
        loginUserSucess,  
       } from "./userRedux"
import {publicRequest, userRequest} from "./../requestMetodos"






const reload = ()=>{
    window.location.reload();
  } 
  
  

//usuarios ///////////////////////////////
export const loginAdmin = async (dispatch,user)=>{
    dispatch(loginStart()); 
    try{
        const res = await publicRequest.post("/autenticacao/login/estabelecimento", user)
        dispatch(loginSucess(res.data))

        reload();
    }catch(erro){
        dispatch(loginFailer())
    }
}

export const loginUser = async (dispatch,user)=>{
    dispatch(loginUserStart()); 
    try{
        const res = await publicRequest.post("/autenticacao/login/usuario", user)
        dispatch(loginUserSucess(res.data))

        reload();
    }catch(erro){
        dispatch(loginUserFailer())
    }
}

export const Logaut = async (dispatch)=>{
   await  dispatch(
       logaut()
       )



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
    const notifica = ()=>{
        alert("Cadastro feito com sucesso !!")
      }
      const refress = ()=>{
        window.location.reload(false);
      }
    try{
         await publicRequest.post(`/produtos`, produto)
         notifica()
         refress()
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
         await userRequest.post(`/estabelecimento`,estabelecimento)
        
       
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




//pesquisa emial estabelecimento 

export const pacoteAc = async (valor, pacote, id, statuPagamento)=>{
const dados = {plano:pacote, pagamento: Number(valor) , estatuPagamento: statuPagamento } 
    try{
      await publicRequest.put("/estabelecimento/update/pacote/"+id, dados)
       
    }catch(error){
        console.log(error)
    }

}



/// desativar multiplos produtos da loja 

export const updateProdutoDesativar = async (id, produto)=>{
  
    try{
      await userRequest.put(`/produtos/desativar/produtos/loja/${id}`, produto)
    }catch(erro){
       
    }
}