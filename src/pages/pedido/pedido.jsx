import "./pedido.css";
import {useState, useEffect} from "react"
import {userRequest} from "../../requestMetodos"
import{useLocation} from"react-router-dom"

export default function Pedido() {
  const [Orders, setOrders] = useState([])
   const location = useLocation()
   const id = location.pathname.split("/")[2]
   //const produtos = Orders.produtos
 
  useEffect(() => {
    const statu = {estatos:"Visto"} 
    let inpro = true
    const getUsers = async ()=> {
      try{

        const res = await userRequest.get("/fatura/"+id)
          if(res.estatos !== "Negado" || res.estatos !== "Canselado"){
        await userRequest.put(`/fatura/${id}`, statu) 
          }
          if(inpro){
        setOrders(res.data)
          }
       

      }catch{}
    }
   getUsers();
   return ()=> inpro = false
  }, [id, Orders])

  

  const Button = ({ type }) => {
    return <button  className={"widgetLgButton " + type}>{type}</button>;
  };

  const handelClickAceitarPedido = (cod)=>{
  
    const dados = {pontos :10, produtosVendidos:1}
    const statu = {estatus:"Aprovado", id:cod.id} 
    const _id = Orders[0]?._id
    const idUsu = Orders[0]?.id_usuario
   const upStatus = async ()=>{
    if(cod.cod !== undefined) {
      try{
       await userRequest.put(`/fatura/produ/${_id}`, statu) 
       await userRequest.put(`/users/${idUsu}`, dados)  
      }catch{}
    }
      else{
        try{
         
          await userRequest.put(`/fatura/produ/${_id}`, statu)
       
      }catch{}
    
    }
  }
  upStatus()
}
  
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">{Orders[0]?.nomeUsuario+"/"+Orders[0]?.endereco}</h3>
      <table className="widgetLgTable">
        <thead>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Imagem</th>
          <th className="widgetLgTh">Quantidade</th>
          <th className="widgetLgTh">Preço</th>
          <th className="WidgetlgTh">Status</th>
        </tr>
        </thead>
        <tbody>
        {Orders[0]?.produtos.map((fatura, i)=>(
        
        <tr className="widgetLgTr" key={i}>
        
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">{fatura?.titulo }</span>
          </td>
          <td className="widgetLgDate">{fatura?.quantidade}</td>
          <td className="widgetLgAmount">{Number(fatura?.preco).toFixed(2)}</td>
          <td className="widgetLgAmount"> <Button  type={fatura?.estatus} /> </td>
          <td className="widgetLgAmount">
          <button onClick={()=>handelClickAceitarPedido({cod:fatura.codInter,id:fatura._id })}>Aceitar pedido</button>
          </td>
         
        </tr>
    
        ))}
        </tbody>
      </table>
    </div>
  );
}
