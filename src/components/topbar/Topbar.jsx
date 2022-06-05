import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings, } from "@material-ui/icons";
import { Logaut } from "../../redux/apiCalls";
import { logautUser } from "../../redux/userRedux";
import {useDispatch} from "react-redux"
import {Link}from "react-router-dom"


export default function Topbar() {
 const dispatch = useDispatch() 
const user  = JSON?.parse(JSON.parse(localStorage.getItem("persist:vandja"))?.user).currentUser?.isUser;
const loja  = JSON?.parse(JSON.parse(localStorage.getItem("persist:vandja"))?.lojaLogin)?.currentLoja;
 

  const handleclikLogAutuser = (e)=>{
    dispatch(logautUser())
 }
 

  const handleclik = (e)=>{
   
    Logaut(dispatch)
  
  }


  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Vandjaline/{loja?.nomeLoja}</span>
        </div>

        <div className="topbarIconContainer plano">
          <span className="">Conta: {loja?.estatuPagamento !=="Aceite" && loja?.ativo !== true ? <span style={{color:"red"}}>Desativada</span> : <span style={{color:"green"}}>Activa</span>} </span>
          </div>

        <div className="topRight">
        <div className="topbarIconContainer">
          {loja?.ativo === true ?
          <>
        <Link to="/newproduct">
          <button className="productAddButton">Criar</button>
        </Link>
        </>
               :""}
          </div>
        
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">0</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">0</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={loja?.imagem} alt="" className="topAvatar" />
           <form>{user? <button className="botaoSair topbarIconContainer" onClick={handleclikLogAutuser}>Sair</button>:<button className="botaoSair topbarIconContainer" onClick={handleclik}>Sair</button>}</form>
        </div>
      </div>
    </div>
  );
}
