import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
//import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMetodos";

export default function Home() {
  const [userStats, setUserState] = useState([])
  const user = JSON?.parse(JSON.parse(localStorage.getItem("persist:vandja"))?.user).currentUser?.isUser;
  const MESES = useMemo(
    ()=>[

      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    []
  )
      useEffect(()=>{
      const getestatos = async ()=>{
        try{
             const res = await userRequest.get("/users/stato/log")
             res.data.map((item)=>
              setUserState((prev)=>[
                    ...prev, 
                {name:MESES[item._id-1], "Active User":item.total},
              ])
             )
        }catch{}
      }
      getestatos()
      },[MESES])

      
  
  return (
    <div className="home"  >
      {user? user &&
      <>
      <FeaturedInfo />

      <Chart data={userStats} title="Analise de usuarios" grid dataKey="Active User"/>
      </>:""}
      <div className="homeWidgets">
        {user? user &&
        <WidgetSm/>
        : ""}
        <WidgetLg/>
      </div>
    </div>
  );
}
