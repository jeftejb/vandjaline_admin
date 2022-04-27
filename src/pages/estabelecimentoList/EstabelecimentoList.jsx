import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { Check, DeleteOutline, Clear } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {  deleteEstabelecimento, updateEstabelecimento} from "../../redux/apiCalls";

import { publicRequest} from "../../requestMetodos";

export default function EstabelecimentoList() {

 const [estabelecimentos, getEstabelecimento] = useState([])
 const param = useState()
 
 useEffect(() => {
   let inpro = true;
const getEsta = async () =>{
  
    const res = await publicRequest.get(`/estabelecimento/?param=${param}`)
    if(inpro){
      getEstabelecimento(res.data)
    }
}
getEsta().catch(console.error());

return ()=> inpro = false;
 },[param])


 

  const handleDelete = (id) => {
  deleteEstabelecimento(id)
  };

  const handelActive = (id) => {
    const dados = {ativo:false}
    updateEstabelecimento(id,dados)
    };

    const handelDesative = (id) => {
      const dados = {ativo:true}
      updateEstabelecimento(id,dados)
      };
  
  
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "imagem",
      headerName: "Imagem",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={`${params.row?.imagem}`} alt="" />
            {params.row?.username}
          </div>
        );
      },
    },
    { field: "nomeLoja", headerName: "Nome", width: 150 },
    { field: "emailLoja", headerName: "Email", width: 150 },
    {
      field: "autorizacao",
      headerName: "Status",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="userListUser">
           {params.row?.ativo === true ? <Check onClick={()=>handelActive(params.row?._id)} /> :<Clear onClick={()=>handelDesative(params.row?._id)}/> }
          </div>
        );
      },
    },
    {
      field: "createdAt",
      headerName: "Data de Inscricao",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/estabelecimento/" + params.row?._id}>
              <button className="userListEdit">Editar</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row?._id)}
             
            />
            
          </>
         
        );
       
      },
    }
  ];

  return (
   <div className="userList">
      <DataGrid
        rows={estabelecimentos}
        disableSelectionOnClick
        columns={columns}
        getRowId = {(row)=> row._id}
        pageSize={8}
        rowsPerPageOptions = {[8]}
        checkboxSelection
      />
    </div>
  );
}
