import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMetodos";

export default function WidgetSm() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async ()=> {
      try{
        const res = await userRequest.get("/users/?new=true")
        setUsers(res.data)
      }catch{}
    }
   getUsers();
  }, [])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Novos membros</span>
      <ul className="widgetSmList">
        {users.map((user)=>(
        <li className="widgetSmListItem" key={user?._id}>
          <img
            src={user?.imagem|| ""}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user?.nomeUsuario}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        ))}
       
      </ul>
    </div>
  );
}
