import "./pedidos.css";
import {useState, useEffect} from "react"
import {publicRequest, userRequest} from "./../../requestMetodos"
import{Link} from"react-router-dom"
import gerPdf from "./../files/userPdf"


export default function Pedidos() {
  const [Orders, setOrders] = useState([])
  const id = JSON.parse(JSON.parse(localStorage.getItem("persist:vandja"))?.lojaLogin)?.currentLoja?._id
  const user = JSON?.parse(JSON.parse(localStorage.getItem("persist:vandja"))?.user)?.currentUser;
  const loja = JSON.parse(JSON.parse(localStorage.getItem("persist:vandja"))?.lojaLogin)?.currentLoja
  const param = useState();
  const imagem = "https://firebasestorage.googleapis.com/v0/b/vandja-6d839.appspot.com/o/avatar%2Fkindpng_786207.png?alt=media&token=a59d158e-d6b7-459c-b760-002177d9f886"

  useEffect(() => {
    let inpro = true
    const getUsers = async ()=> {
      if(user?.isUser){
   try{
    const res = await userRequest.get(`/fatura/?param=${param}`)
    if(inpro){
      setOrders(res.data)
      }
  }catch(err){
    console.log(err)
  }
    }else{
     
      try{ const res = await userRequest.get(`/fatura/loja/${id}?param = ${param}`)
      if(inpro){
      setOrders(res.data)
    }}catch(err){
      console.log(err)
    }
 
       
    }
  }
   getUsers();
   return ()=> inpro = false;
  }, [id, user?.isUser, param])

  const Button = ({ type }) => {
    return <button  className={"widgetLgButton " + type}>{type}</button>;
  };
  
  const handelClickDelete = (id)=>{
    const dados = {estatosPedido:"Negado"}
    const deletePedido = async ()=>{
      try{
             await userRequest.put(`/fatura/${id}`, dados)
      }catch{}
    } 

    const EnviarEmail = async ()=>{
      
      try {
       const fatura =  await userRequest.get(`/fatura/${id}`)
        var result = fatura.data
      } catch (error) {
        
      }

      var dados = {email: result[0].emailUsuario, loja: loja.nomeLoja}
     
      try{
             await publicRequest.post(`/autenticacao/email/cancela`,dados)
      }catch(erro){

      }
    } 

    deletePedido();
    EnviarEmail();
  }
  
  const handelClickAprovar = (id)=>{
    const dados = {estatosPedido:"Aprovado"}
    const AprovarPedido = async ()=>{
      try{
             await userRequest.put(`/fatura/${id}`, dados)
      }catch{}

    
    } 
    const gerarPdf  = async ()=>{
      
      try{
        const res =  await publicRequest.get(`/fatura/pagamento/${id}`)
        const resultado = res.data
       const dadosLoja = {nome: loja?.nomeLoja , kamba:loja?.kamba , telefone:loja?.telefoneLoja , email:loja?.emailLoja}
        gerPdf(resultado, dadosLoja )
         }catch{}
         
    }

    AprovarPedido();

    gerarPdf();

  
    //gerPdf(dadosPro)
  }
  

  //pago 

  //const handelClickPago = ()=>{}
 

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Ultimas tranzações</h3>
      <table className="widgetLgTable">
        <thead>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Nome</th>
          <th className="widgetLgTh">Data</th>
          <th className="widgetLgTh">Preço</th>
          <th className="widgetLgTh">Status</th>
          <th className="widgetLgTh">Detalhes</th>
        </tr>
        </thead>
        <tbody>
        {Orders.map((fatura)=>(
        
        <tr className="widgetLgTr" key={fatura?._id}>
        
          <td className="widgetLgUser">
            <img
              src={imagem}
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">{fatura?.nomeUsuario}</span>
          </td>
          <td className="widgetLgDate">{fatura?.createdAt}</td>
          <td className="widgetLgAmount">{Number(fatura?.motante).toFixed(2)} Kz</td>
          <td className="widgetLgStatus">
            {fatura?.estatosPedido ?
          <> <Button  type={fatura?.estatos} /> <Button  type={`${fatura?.estatosPedido}`} /></> 
            : <Button  type={fatura?.estatos} />}
          </td>
         
          <td className="widgetLgStatus">
          <Link className="widgetLgTr" to={`/pedido/${fatura?._id}`}>Ver mais</Link>
          </td>
          
          <td>
            <button onClick={()=>handelClickDelete(fatura?._id)}>Negar</button>
            <button onClick={()=>handelClickAprovar(fatura?._id)}>Aprovar</button>
            
            
          </td>
         
        </tr>
    
        ))}
    
        </tbody>
      </table>
    </div>
  );
}
