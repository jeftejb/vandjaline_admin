import { Facebook, Instagram, MailOutline, Phone, Twitter, YouTube } from "@material-ui/icons"
//import styled from "styled-components"
//import { mobile, PcGrande, tablet} from "../responsive"
import "./rodape.css" 

import  {Link}  from 'react-router-dom'




const Rodape = () => {
    return (
        
       <div className="ContainerRodape">
           <div className=" LeftRodape">
              <Link className="link"  to="/admin" > <h1 className= "LogoRodape" >Vandjaline</h1> </Link>
               <p className="DescRodape"> O vandjaline  é um projeto criado com o intuito de facilitar a vida de fornecedores , revendedores  
            e compradores de produtos diversos tanto produtos digitais como produtos físicos</p>

                   <div className="SocialContainerRodape">
                       <span className="SocialIconRodape" style={{backgroundColor:"#3B5999"}}>
                           <Facebook/>
                       </span>
                       <span className="SocialIconRodape" style={{backgroundColor:"#E4405F"}}>
                           <Instagram/>
                       </span>
                       <span className="SocialIconRodape" style={{backgroundColor:"#55ACEE"}}>
                           <Twitter/>
                       </span>
                       <span className="SocialIconRodape" style={{backgroundColor:"#E60023"}}>
                           <YouTube/>
                       </span>
                   </div>
           </div>
           <div className="CenterRodape">
               
           </div>
           <div className="RightRodape">
               <h3 className="TituloRodape">Contactos</h3>
               <div className="ContatoItemRodape"><Phone/>+244 948 992 170</div>
               <div className="ContatoItemRodape"><MailOutline/>uservandja@gmail.com</div>
           </div>
         
       </div>
     
    )
}

export default Rodape
