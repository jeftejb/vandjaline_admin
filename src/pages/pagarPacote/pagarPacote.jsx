import React from "react"
import NavBar from "../../components/navBar/Navbar"
import Rodape from "../../components/rodape/Rodape"
import { useState } from "react"
import {publicRequest} from "./../../requestMetodos" 
import{pacoteAc} from "./../../redux/apiCalls"

import "./pagar.css"




const PagarPacote = ()=>{
    const pacote =  window.location.href.split('?')[1] ;
   const valorInicial = window.location.href.split('?')[2];
   const dinheiro = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'AKZ' })
    
  const [input, setInput] = useState()
  const [dinh , setDinh] = useState()
  const [result, setResult] = useState()
  //const [valor, setValor] = useState()


  const handelEmail = (e)=>{
    setInput((prev)=>{
        return{...prev, [e.target.name]:e.target.value}
    })
}


const handelClick = (e)=>{
    e.preventDefault();
    const pesquisar = async ()=>{
        try{
            const res = await publicRequest.get("/estabelecimento/find/email/"+input.email)
            setResult(res.data)
         }catch(error){
            // console.log(error)
         }
    }

    pesquisar();

}


const calcularValor = (e)=>{
   const pegar = ()=>{ setDinh((prev)=>{
        return {[e.target.name]:e.target.value}
    })
}
pegar();





}

const val = Number(dinh?.mes)

const total = val? val * valorInicial : valorInicial

const subTotal  = total === valorInicial ? valorInicial :  val === 1  ? valorInicial : total - (total * 0.05) 

const statuPagamento = pacote ==="gratis"? "Aceite" : "Pendente";



const handelClickPagar =()=>{
    const enviaPagamento = async ()=>{

        try{
        await publicRequest.post("/autenticacao/email/pagamento/loja" , {email : input.email,  valor : subTotal, loja:result?.nomeLoja, pacote: pacote})
         }catch(error){
             //console.log(error)
         }
    }

    const alerta = ()=>{
        alert("Solicitacao de pagamento feita com  sucesso, já podes efectuar o login")
    }

    if(input){

    pacoteAc(subTotal, pacote, result._id, statuPagamento )
    enviaPagamento()
    alerta()

    }else{
        alert("Antes de finalizar precisamos de saber se a sua empresa existe no nosso banco de dados ! ")
    }
}


    return(
        <div>
            
           <NavBar/>
   
   <div className="containerPagar">
       <span> {pacote}</span>

       <div className="formPesquisa">
           <span>Coloque o email da sua empresa para verificarmos se ele existe no nosso banco de dados.</span>
       <form>
        <input type="email" name="email" id="" placeholder='Email' onChange={handelEmail} required/>
         <button onClick={handelClick} >Pesquisar</button>
        </form>

        {result ? <>
        <span>{`${result.nomeLoja}`}</span><br/>
        <span><p style={{color:"green"}}>Loja encontrada com seucesso!</p><br/> Por favor prossiga com o processo de pagamento prienchendo os campos a baixo</span>
        </> : <>
        <span style={{color:"red"}}>Nem um resultado encontrado  </span>
        <span>Por favor faça o cadastro da sua empresa. <a href={`${process.env.REACT_APP_SITE_LINK}/registro`}>Fazer cadastro</a> </span>
        </>}

       </div>

       <div className="container-pagar" >
           <span>Se o pagamento for superior a 1 mês é aplicado um desconto de 10%</span>
           <table className="tabela">
               <thead>
                   <tr>
                   <th>Pacote</th>
                   <th>Pre.Unitario</th>
                   <th>Resumo</th>
                   </tr>
               </thead>

               <tbody>
                   <tr>
                   <td>{pacote}</td>
                   <td><span>{dinheiro.format(Number(valorInicial))}</span> </td>
                   <td className="mudar">
                       {pacote !== "gratis" ?
                       <>
                       {
                        
                       }
                        <select name="mes" id ="" onChange={calcularValor}>
                          <option value="1" >1 Mês</option>
                          <option value="3">3 Mêses</option>
                          <option value="6">6 Mêses</option>
                          <option value="12">1 ano</option>
                        </select>
                        <span className="dinheiro">Total: {total ?dinheiro.format(total) : dinheiro.format(valorInicial)} </span>
                         <span className="dinheiro">Sub Total: {total ? `${dinheiro.format(subTotal)} Desc 5%` : "Desc 0%"}</span>
                                </>
                                 : 
                                "1 mes de servico gratis"
                                 }
                      
                    </td>
                   </tr>
               </tbody>
           </table>



           <div className="concluir">
            {result ? 
            result?.plano >= 0? <span>Este estabelecimento já tem um plano activo </span> : <button onClick={handelClickPagar} className="butaoPlano">Concluir</button>
           :""}
             </div>
       </div>

   </div>    
            <Rodape/>
        </div>
       );


}

export default PagarPacote