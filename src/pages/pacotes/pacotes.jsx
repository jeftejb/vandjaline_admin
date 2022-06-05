import React from "react";
import NavBar from "../../components/navBar/Navbar"
import Rodape from "../../components/rodape/Rodape"
//import ElementOne from "./../../components/ElementOne"
//import {useLocation} from "react-router-dom"
import "./pacotes.css"
import { Link } from "react-router-dom";





 const  Pacotes = ()=>{
    // const location =  useLocation()
  
   
    return(
     <div>
         
        <NavBar/>

        <div className="containerInicio">
            <span className="infInicio">O vandjaline possui pacotes acessíveis para o serviço de divulgação de produtos e serviços  da sua empresa, escolha um dos pacotes a baixo e comece a comesse a expandir os teus negócios !!  </span>
            <div className="containerPacotesInicio">
            <div className="pacoteInicio">
                <div className="circuloInicio"><h5 style={{color:"#40e45b"}} >Disponivel</h5> </div>
                <div className="containerImagemInicio">
                    <img className="imgInicio" alt="Serviço" src="/image/baner-1.png"/>
                </div>
                <div className="containerInfoInicio">
                    <h3 className="tituloInicio"> Pacote grátis  </h3>
                    <span className="precoInicio">Kz 0/100% de Deconto</span>
                   
                    
                    <span className="descricaoInicio">
                    Este pacote permite  ao utilizador usufluir de todos os serviços que a plataforma oferece por um período determinado que servirá como um período de teste.

                    <h4>Serviços disponíveis </h4> 
                    <ul>
                        <li>Acesso a área de gerenciamento   de produtos </li>
                        <li> Gerenciamento  de pedidos  de compra</li>
                        <li>Pagamentos online</li>
                        <li>Serviço de afiliados </li>
                    </ul>
                    </span>
                </div>
                <Link to="/pagarpacote?gratis?0" className="butaoInicio" > Escolher</Link>
            </div>

            <div className="pacoteInicio" >
            <div className="circuloInicio"><h5 style={{color:"#E60023"}} >Indisponivel</h5> </div>
                <div className="containerImagemInicio">
                    <img className="imgInicio" alt="Serviço" src="/image/baner-1.png"/>
                </div>
                <div className="containerInfoInicio">
                    <h3 className="tituloInicio"> Pacote facilíta </h3>
                    <span className="precoInicio">kz 3.720,00/ Mês</span>
                    <span className="descricaoInicio">
                    Este pacote permite ao usuário efectuar tarefas  simples como cadastrar produtos,  editar e eliminar produtos , ou seja terá acesso a área de administração de produtos  e ao serviço de afiliados sem contar com o serviço de pagamentos online .   
                    <h4>Serviços disponíveis </h4> 
                    <ul>
                        <li>Acesso a área de gerenciamento   de produtos </li>
                     
                        <li>Serviço de afiliados </li>
                    </ul>
                    </span>
                </div>
                
            </div>

            <div className="pacoteInicio">
            <div className="circuloInicio"><h5 style={{color:"#E60023"}}>Indisponivel</h5> </div>
                <div className="containerImagemInicio">
                    <img className="imgInicio" alt="Serviço" src="/image/baner-1.png"/>
                </div>
                <div className="containerInfoInicio">
                    <h3 className="tituloInicio">Pacote  completo</h3>
                    <span className="precoInicio">kz 7.550,00/ Mês </span>
                    <span className="descricaoInicio">
                    Este pacote permite ao usuário utilizar todos so serviços disponíveis na plataforma 
                   
                   
                   <h4>Serviços disponíveis </h4> 
                    <ul>
                        <li>Acesso a área de gerenciamento   de produtos </li>
                        <li> Gerenciamento  de pedidos  de compra</li>
                        <li>Pagamentos online</li>
                        <li>Serviço de afiliados </li>
                    </ul>

                    </span>

                </div>
                
            </div>

            </div>
        </div>

         <Rodape/>
     </div>
    );

}


export default Pacotes;