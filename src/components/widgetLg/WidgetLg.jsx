import "./widgetLg.css";
import {useState, useEffect} from "react"
import {userRequest} from "../../requestMetodos"
import{Link} from"react-router-dom"

export default function WidgetLg() {
  const [Orders, setOrders] = useState([])
  const user = JSON?.parse(JSON.parse(localStorage.getItem("persist:vandja"))?.user)?.currentUser;
  const loja =  JSON?.parse(JSON.parse(localStorage.getItem("persist:vandja"))?.lojaLogin)?.currentLoja;
  const imagem = "https://firebasestorage.googleapis.com/v0/b/vandja-6d839.appspot.com/o/avatar%2Fkindpng_786207.png?alt=media&token=a59d158e-d6b7-459c-b760-002177d9f886"

  useEffect(() => {
    const getUsers = async ()=> {
     if (user?.isUser){
      try{
        const res = await userRequest.get("/fatura/")
          
        setOrders(res.data)
      }catch{}
       
     }else{
      try{
        const res = await userRequest.get(`/fatura/loja/${loja?._id}`)
        setOrders(res.data)
      }catch{}
     }
     
    }
   getUsers();
  }, [loja?._id,user?.isUser])

  
  const Button = ({ type }) => {
    return <button onClick={handelClickPedido} className={"widgetLgButton " + type}>{type}</button>;
  };

 

  const handelClickPedido = ()=>{
    console.log("ola")
  }
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Ultimas Tranzações</h3>
      <table className="widgetLgTable">
        <thead>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Nome</th>
          <th className="widgetLgTh">Data</th>
          <th className="widgetLgTh">Valor</th>
          <th className="widgetLgTh">Status</th>
          <th className="widgetLgTh">Detalhes</th>
        </tr>
        </thead>
        <tbody>
        {Orders.map(itens =>
          
        
        <tr className="widgetLgTr" key={itens._id}>
        
          <td className="widgetLgUser">
            <img
              src={imagem}
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">{itens.nomeUsuario}</span>
          </td>
          <td className="widgetLgDate">{itens.createdAt}</td>
          <td className="widgetLgAmount">{Number(itens.motante).toFixed(2)} Kz</td>
          <td className="widgetLgStatus">
            <Button  type={itens.estatos} />
          </td>
          <td className="widgetLgStatus">
          <Link className="widgetLgTr" to="/pedidos">Ver mais</Link>
          </td>
         
        </tr>
    
        )}
        </tbody>
      </table>
    </div>
  );
}
