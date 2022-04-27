import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import {userRequest} from "../../requestMetodos"

export default function FeaturedInfo() {
  const [income, setIncome] = useState([])
  const [perc, setPerc] = useState(0)
  
  useEffect(()=>{
    const getIncome = async ()=>{
      try{
        const res = await userRequest.get("/fatura/income/resul")
        setIncome(res.data) 
        setPerc((res.data[0]?.total * 100) / (res.data[0]?.total -100))
       
      }catch{}
    }
    getIncome()
  }, [])

 
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Total de Vendas</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${Number(income[0]?.total).toFixed(2)}</span>
          <span className="featuredMoneyRate">
            %{Math.floor(perc)}{" "}
            {perc < 0 ?(
              <ArrowDownward  className="featuredIcon negative"/>
            ): (<ArrowUpward className="featuredIcon"/>)} 
          </span>
        </div>
        <span className="featuredSub">Comparação com o ultimo mês</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Ganhos</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Comparação com o ultimo mês</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Perdas</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Comparação com o ultimo mês</span>
      </div>
    </div>
  );
}
