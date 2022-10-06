import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { publicRequest } from '../../requestMetodos';
import "./style.css"


 const RecuperaPasseEstabelecimento = () => {
  const location = useLocation(); 
  const [input, setInput] = useState();
  const [confirm, setConfirm] = useState();
   const email  = location.pathname.split("/")[4];

  const handelPass = (e)=>{

    setInput((prev)=>{
        return{...prev, [e.target.name]:e.target.value}
    })
}

const handelPassConfirm = (e)=>{

    setConfirm((prev)=>{
        return{...prev, [e.target.name]:e.target.value}
    })
}


const nadelClickTerminar = (e)=>{
  e.preventDefault()
  console.log(input)


  
    if(input?.password === confirm?.senhaConfirm){
     
const dados = {...input , email : email}
  const enviarEmail = async ()=>{
     await publicRequest.put(`/users/mudar/pass/`, dados)
  }
  enviarEmail().catch(alert("Houve algum erro ao mudar a palavra passe, verifique o seu email, caso continuar por favor entre em contacto  Email: uservandja@gmail.com"));

}else{
    alert("Palavra passe Incopativeis")
}

}

  return (
    <div>

    <div className="user">
<div className="confirEmail">
<h1>Recuperar Palavra Passe !</h1>
 <span>Por favor insere seu email.</span>
 <form action="">
 <input type="password" name="password" placeholder='Nova Palavra passe' onChange={handelPass}/>
 <input type="password" name="senhaConfirm"  placeholder='Confirmar palavra passe' onChange={handelPassConfirm}/>
 <button onClick={nadelClickTerminar} >Mudar</button>
 <a className="button" href='/inicial'  >Pagina Inicial</a>
 </form>
 </div>

    </div>
   
       </div>

       
  );
}

export default  RecuperaPasseEstabelecimento;