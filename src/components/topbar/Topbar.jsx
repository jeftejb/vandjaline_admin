import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings, } from "@material-ui/icons";
import { logaut } from "../../redux/lojaLoginRedux";
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
    dispatch(logaut())
  }


  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Vandjaline/{loja?.nomeLoja}</span>
        </div>
        
        <div className="topRight">
        <div className="topbarIconContainer">
        <Link to="/newproduct">
          <button className="productAddButton">Criar</button>
        </Link>
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
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
           <form>{user? <button onClick={handleclikLogAutuser}>Sair</button>:<button onClick={handleclik}>Sair</button>}</form>
        </div>
      </div>
    </div>
  );
}
