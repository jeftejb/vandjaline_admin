import {
 
  Publish,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { publicRequest} from "../../requestMetodos";
import "./categoria.css";

export default function Categoria() {
  const id = useLocation().pathname.split("/")[2];
  const [dados , getDados] = useState()
  
    useEffect(() =>{

      const getUser = async ()=>{
      try{
              const res = await publicRequest.get(`/categorias/${id}`)
              getDados(res.data[0])
      }catch{}
    
    }
    getUser().then();

    },[id])
  
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Editar Categoria</h1>
        <Link to="/novaCategoria">
          <button className="userAddButton">Criar</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userUpdate">
          <span className="userUpdateTitle">Editar</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Categoria Nome</label>
                <input
                  type="text"
                  placeholder={`${dados?.nomeCat}`}
                  className="userUpdateInput"
                />
              </div>
             
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Actualizar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
