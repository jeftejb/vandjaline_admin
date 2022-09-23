import React from 'react';
//import styled from 'styled-components'
//import {ShoppingCartOutlined, Menu} from '@material-ui/icons'
//import {Badge} from '@material-ui/core'
//import { ReactDimmer } from "react-dimmer";
//import {mobile, tablet} from "../responsive"
//import "./style.css"
//import { useEffect } from 'react'
import "./navBar.css";
//import{useSelector} from "react-redux"
import  {Link}  from 'react-router-dom';




const Navbar = () => {
   
    
  
    return (
        <>
        <div className ="ContainerNav">
           <div className='wrapperNav'>
            <div className="CenterrNav"> 
               <Link className='textNav' to="/inicial"><div id="menu1" className = "menuItem">Home</div></Link>
               <Link className='textNav' to="/sobre"><div id="menu2" className="menuItem">Sobre</div></Link>
               <Link className='textNav' to ="/login"> <div id="menu3" className="menuItem">Login</div> </Link>
                 </div>  
                 </div>
             </div>
            
       


</>
    )
}

export default Navbar
