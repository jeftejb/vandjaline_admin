import React from "react"
import { useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import { loginAdmin} from "./../../redux/apiCalls"
import "./../../App.css"

const Login = () => {
    const [nomeUsuario , setUserName] = useState("")
    const [password , setUserPass] = useState("")
    const {error} = useSelector((state)=>state?.lojaLogin)
    const [loading, setLoading] = useState();
     const dispatch = useDispatch("")
     
   
     const handleClickAdmin = async (e)=>{
        e.preventDefault()
        setLoading(true)
        try{
         
            await loginAdmin(dispatch,{nomeUsuario, password})
            setLoading(false)
        }catch{
          setLoading(false)
        }
       

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
                     <h2 style={{marginTop:"0px", marginBottom:"25px"}}>Login Admin</h2>
            <input style={{padding:10, marginBottom:20}} type="texe" placeholder="Email" onChange = {(e)=>setUserName(e.target.value)}/>
            <input style={{padding:10, marginBottom:20}} type="password" placeholder="Palavra passe" onChange={(e)=>setUserPass(e.target.value)}/>
           
            <button style={{padding:10, width:100 }} disabled={loading} onClick={handleClickAdmin}>Login Admin </button>

            {loading && 
<div className="loading">
 <span>Processo</span>
</div>
}
          
            {error && <span style={{color:"red"}}>Nome ou password incorretos ...!</span>}
            </form>

        </div>
        </div>
    )
}

export default Login
