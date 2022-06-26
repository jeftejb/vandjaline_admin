import "./pagamentos.css";
import {useState, useEffect} from "react"
import {userRequest} from "../../requestMetodos"


export default function PagamentosHistorico() {
  const [pagamentos, setPagamentos] = useState([])
const param =  useState();
  useEffect(() => {
    let inpro = true;

    const getPagamentos = async ()=> {
      
        const res = await userRequest.get(`/pagamentos/todos/?${param}`)
        if(inpro){
        setPagamentos(res.data)
        }
    }
   getPagamentos().catch(console.error());
   return ()=> inpro = false;
  }, [param])

  const Button = ({ type }) => {
    return <button  className={"widgetLgButton " + type}>{type}</button>;
  };
  



  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Pagamentos de Intermediarios</h3>
      <table className="widgetLgTable">
        <thead>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Id</th>
          <th className="widgetLgTh">Nome</th>
          <th className="widgetLgTh">Valor</th>
          <th className="widgetLgTh">Status</th>
        
        </tr>
        </thead>
        <tbody>
        {pagamentos?.map((pagamento)=>(
        
        <tr className="widgetLgTr" key={pagamento._id}>
        
          <td className="widgetLgUser">
            <span className="widgetLgName">{pagamento._id}</span>
          </td>
          <td className="widgetLgDate">{pagamento.nomeUsuario}<br/>{pagamento?.iban}<br/>{pagamento?.telefone}<br/>{ pagamento?.kamba ?<><a href={pagamento?.kamba}>Link de pagamento</a></>:""}</td>
          <td className="widgetLgAmount">{pagamento.valor}</td>
          <td className="widgetLgStatus">
            <Button  type={pagamento.estatos} />
          </td>
        
        </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
