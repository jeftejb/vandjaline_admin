import React from "react"
import { useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import {loginUser} from "./../../redux/apiCalls"

const Loginadmin = () => {
   
    const [nomeUsuario , setUserName] = useState("")
    const [password , setUserPass] = useState("")
    const {error} = useSelector((state)=>state?.user)
     const dispatch = useDispatch("")
     
   
  
    const handleClick = (e)=>{
        e.preventDefault()
           loginUser(dispatch,{nomeUsuario, password})
    }
    return (
        <div style = {{
            display:"flex",
            height: "100vh",
            flexDirection:"column", 
            alignItems:"center",
             justifyContent:"center", 
         
             
             }} >
        <div style = {{
            height:"400px" ,
            width:"80%" ,
            marginTop:"30px",
            display:"flex",
            flexWrap:"wrap",
            flexDirection:"column", 
            alignItems:"center",
             justifyContent:"center", 
             border:"2px solid #ccc", 
             backgroundColor: "#7392B7",
             boxShadow: "20px 15px 15px black"
             
             }} >
                 <form style={
                     {
                        height: "100vh",
                        display:"flex",
                        flexDirection:"column", 
                        alignItems:"center",
                         justifyContent:"center"
                     }
                 }>
                     <h2 style={{marginTop:"0px", marginBottom:"25px"}}>Login User</h2>
            <input style={{padding:10, marginBottom:20}} type="text" placeholder="Email" onChange = {(e)=>setUserName(e.target.value)}/>
            <input style={{padding:10, marginBottom:20}} type="password" placeholder="Palavra passe" onChange={(e)=>setUserPass(e.target.value)}/>
           
            <button style={{padding:10, width:100 }} onClick={handleClick}  >Login</button>
            {error && <span style={{color:"red"}}>Algo deu errado ...!</span>}
            </form>

        </div>
        </div>
    )
}

export default Loginadmin
