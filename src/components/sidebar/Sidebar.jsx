import "./sidebar.css";
import React, { useState } from 'react';
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  //MailOutline,
  //DynamicFeed,
  //ChatBubbleOutline,
  WorkOutline,
  //Report,
  Menu
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Logaut } from "../../redux/apiCalls";
import { logautUser } from "../../redux/userRedux";
import {useDispatch} from "react-redux";
import { ReactDimmer } from "react-dimmer";

export default function Sidebar() {
  const dispatch = useDispatch() 
  const user = JSON?.parse(JSON.parse(localStorage.getItem("persist:vandja"))?.user).currentUser?.isUser;
  const [isMenuOpen, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prevState) => !prevState);
  };
  
  const handleclikLogAutuser = (e)=>{
    if (window.confirm("Deseja sair de sua conta ?") === true) {
      dispatch(logautUser())
    } else {
     
    }
   
 }
 

  const handleclik = (e)=>{
    if (window.confirm("Deseja sair de sua conta ?") === true) {
      Logaut(dispatch)
    } else {
     
    }
   
  
  
  }
  return (
    <>
    <div className="Hamburger"><Menu className="Hamburger" onClick={handleMenu}></Menu> </div>
    <div className={`sidebar  ${isMenuOpen ? "menu-open" : ""} `}>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            {user? 
            <>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
            </>
                : ""}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu rapido</h3>
          <ul className="sidebarList">
           
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Produtos
              </li>
            </Link>
    
            <Link to="/pedidos" className="link">
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Pedidos
            </li>
            </Link>
            {user? 
            <>
            <Link to="/categorias" className="link">
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Categorias
            </li>
            </Link>
            <Link to="/pagamentos" className="link">
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Solicitação de Pagamento
            </li>
            </Link>
            <Link to="/estabelecimentos" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Estabelecimentos
              </li>
            </Link>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Usuarios
              </li>
            </Link>
            </>
              : ""}
             
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Rendimento
            </li>
          </ul>
        </div>
        {/*
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notificacoes</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Email
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Mensagens
            </li>
          </ul>
        </div>
        */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Configurações</h3>
          <ul className="sidebarList">
            <Link to="/site_config" className="link">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Site config
            </li>
            </Link>
            {/*
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
            */}
              <li className="sidebarListItem">
            <form>{user? <button className="botaoSair topbarIconContainer" onClick={handleclikLogAutuser}>Sair da conta</button>:<button className="botaoSair topbarIconContainer" onClick={handleclik}>Sair da conta</button>}</form>
            </li>
          </ul>
        </div>
      </div>
    </div>

<ReactDimmer
isOpen={isMenuOpen}
exitDimmer={setMenu}
zIndex={50}
blur={1.5}
/>
</>
  );
}
