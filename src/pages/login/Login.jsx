import React from "react"
import { useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import {loginUser, loginAdmin} from "./../../redux/apiCalls"

const Login = () => {
    const [nomeUsuario , setUserName] = useState("")
    const [password , setUserPass] = useState("")
    const {isFetching,error} = useSelector((state)=>state?.user)
     const dispatch = useDispatch("")
     
   
     const handleClickAdmin = (e)=>{
        e.preventDefault()
        loginAdmin(dispatch,{nomeUsuario, password})

    }
    const handleClick = (e)=>{
        e.preventDefault()
           loginUser(dispatch,{nomeUsuario, password})
    }
    return (
        <div style = {{
            height: "100vh",
            display:"flex",
            flexDirection:"column", 
            alignItems:"center",
             justifyContent:"center", 
             
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
            <input style={{padding:10, marginBottom:20}} type="texe" placeholder="Email" onChange = {(e)=>setUserName(e.target.value)}/>
            <input style={{padding:10, marginBottom:20}} type="text" placeholder="Palavra passe" onChange={(e)=>setUserPass(e.target.value)}/>
           
            <button style={{padding:10, width:100 }} onClick={handleClickAdmin}>Login Admin </button>
            <button style={{padding:10, width:100 }} onClick={handleClick} disabled={isFetching} >Login</button>
            {error && <span style={{color:"red"}}>Algo deu errado ...!</span>}
            </form>

        </div>
    )
}

export default Login
