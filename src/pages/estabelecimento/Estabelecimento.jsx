import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { userRequest } from "../../requestMetodos";
import "./esta.css";

export default function Estabelecimento() {
 
  const id = useLocation().pathname.split("/")[2];
  const [dados , getDados] = useState()
    useEffect(() =>{

      const getEstabelecimento = async ()=>{
      try{
              const res = await userRequest.get(`/estabelecimento/${id}`)
              getDados(res.data)
      }catch{}
    }
    getEstabelecimento()

    },[id])
  
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Editar Estabelecimento</h1>
        <Link to="/newUser">
          <button className="userAddButton">Criar</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={dados?.imagem}
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{dados?.nomeLoja}</span>
              <span className="userShowUserTitle">{dados?.actuacao}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Detalhes da conta</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{dados?.nomeLoja}</span>
            </div>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{dados?.gerenteLoja}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{dados?.createdAt}</span>
            </div>
            <span className="userShowTitle">Conta</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{dados?.telefoneLoja}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{dados?.emailLoja}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{dados?.provinciaLoja}</span>
              <span className="userShowInfoTitle">{dados?.municipioLoja}</span>
              <span className="userShowInfoTitle">{dados?.enderecoLoja}</span>
            </div>

            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{dados?.estatuPagamento}</span>
              <span className="userShowInfoTitle">{dados?.plano}</span>
              <span className="userShowInfoTitle">{dados?.pagamento}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Editar</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Nome do estabelecimento ou empresa </label>
                <input
                  type="text"
                  placeholder={dados?.nomeLoja}
                  className="userUpdateInput"
                />
              </div>
             
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={dados?.emailLoja}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Telefone</label>
                <input
                  type="text"
                  placeholder={dados?.telefoneLoja}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Endereço</label>
                <input
                  type="text"
                  placeholder={dados?.enderecoLoja}
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src={dados?.imagem}
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
