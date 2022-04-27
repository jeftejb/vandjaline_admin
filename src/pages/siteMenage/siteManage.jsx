import "./siteManage.css";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { userRequest } from "../../requestMetodos";
import SiteInput from "../../components/InputSite/InputSite";
import {updateEstabelecimento} from"./../../redux/apiCalls"

export default function SiteManage() {

  const [dados , getDados] = useState()
  const [imput, setImput] = useState();
  const loja = JSON?.parse(JSON.parse(localStorage.getItem("persist:vandja")).lojaLogin)?.currentLoja

    useEffect(() =>{

      const getInf = async ()=>{
      try{
              const res = await userRequest.get(`/site/inf`)
              getDados(res.data)
      }catch{}
    
    }
    getInf()

    },[])


    const handelChange = (e)=>{
      setImput((prev)=>{
          return{...prev, [e.target.name]:e.target.value}
      })
  }

  const handelClick = (e)=>{
    e.preventDefault()
updateEstabelecimento(loja._id, imput)
  }
    
  return (
    loja ? 
    
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Perfil da loja</h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={`${loja?.imagemLoja}`}
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{loja?.nomeLoja}</span>
              <span className="userShowUserTitle">{loja?.actuacao}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Detalhes da loja</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{loja?.nomeLoja}</span>
            </div>
            
            <span className="userShowTitle">Conta</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{loja?.telefoneLoja}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{loja?.emailLoja}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{loja?.enderecoLoja}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Editar</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Nome</label>
                <input
                  type="text"
                  placeholder={loja?.nomeLoja}
                  className="userUpdateInput"
                  name="nomeLoja"
                  onChange={handelChange }
                />
              </div>
              <div className="userUpdateItem">
                <label>Endereco</label>
                <input
                  type="text"
                  placeholder={loja?.enderecoLoja}
                  className="userUpdateInput"
                  name="enderecoLoja"
                  onChange={handelChange }
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="email"
                  placeholder={loja?.emailLoja}
                  className="userUpdateInput"
                  name="emailLoja"
                  onChange={handelChange }
                />
              </div>
              <div className="userUpdateItem">
                <label>Link de pagamento Kamba</label>
                <input
                  type="text"
                  placeholder={loja?.kamba}
                  className="userUpdateInput"
                  name="kamba"
                  onChange={handelChange }
                />
              </div>
             
              <span>A carteira digital "Kamba" é um aplicativo inovador 100% angolano que permite efectuar varios tipos de operações na internet como pagamentos transferencias e outros, link para fazer o download: <a href="https://m.usekamba.com/convite/86C210"> Clique aqui para baixar o App</a> </span>

              
            </div>
            <div className="userUpdateRight">
              
              <button className="userUpdateButton" onClick={handelClick}>Actualizar</button>
            </div>
          </form>
        </div>
      </div>
     
    </div>

    :  <div className="user">
    <div className="userTitleContainer">
      <h1 className="userTitle">Perfil do site</h1>
      <Link to="/newUser">
        <button className="userAddButton">Criar</button>
      </Link>
    </div>
    <div className="userContainer">
      <div className="userShow">
        <div className="userShowTop">
          <img
            src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="userShowImg"
          />
          <div className="userShowTopTitle">
            <span className="userShowUsername">{dados?.nomeCompleto}</span>
            <span className="userShowUserTitle">{dados?.intermediario}</span>
          </div>
        </div>
        <div className="userShowBottom">
          <span className="userShowTitle">Detalhes da conta</span>
          <div className="userShowInfo">
            <PermIdentity className="userShowIcon" />
            <span className="userShowInfoTitle">{dados?.nomeCompleto}</span>
          </div>
          <div className="userShowInfo">
            <CalendarToday className="userShowIcon" />
            <span className="userShowInfoTitle">{dados?.dataNascimento}</span>
          </div>
          <span className="userShowTitle">Conta</span>
          <div className="userShowInfo">
            <PhoneAndroid className="userShowIcon" />
            <span className="userShowInfoTitle">{dados?.numeroTelefone}</span>
          </div>
          <div className="userShowInfo">
            <MailOutline className="userShowIcon" />
            <span className="userShowInfoTitle">{dados?.email}</span>
          </div>
          <div className="userShowInfo">
            <LocationSearching className="userShowIcon" />
            <span className="userShowInfoTitle">{dados?.endereco}</span>
          </div>
        </div>
      </div>
      <div className="userUpdate">
        <span className="userUpdateTitle">Editar</span>
        <form className="userUpdateForm">
          <div className="userUpdateLeft">
            <div className="userUpdateItem">
              <label>Nome</label>
              <input
                type="text"
                placeholder="annabeck99"
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>SO</label>
              <input
                type="text"
                placeholder="Anna Becker"
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Email -1</label>
              <input
                type="text"
                placeholder="annabeck99@gmail.com"
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Email -2</label>
              <input
                type="text"
                placeholder="annabeck99@gmail.com"
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Phone-1</label>
              <input
                type="text"
                placeholder="+1 123 456 67"
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Phone-2</label>
              <input
                type="text"
                placeholder="+1 123 456 67"
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Endereco</label>
              <input
                type="text"
                placeholder="New York | USA"
                className="userUpdateInput"
              />
            </div>

            <div className="userUpdateItem">
              <label>Descricao site</label>
              <textarea   className="userUpdateInput"></textarea>
            </div>
            <div className="userUpdateItem">
              <label>Descricao slide-1</label>
              <textarea   className="userUpdateInput"></textarea>
            </div>
            <div className="userUpdateItem">
              <label>Descricao slide-2</label>
              <textarea   className="userUpdateInput"></textarea>
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
    <SiteInput/>
  </div>
  );
}
