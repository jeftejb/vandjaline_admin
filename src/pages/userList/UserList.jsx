import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";

import { deletarUser } from "../../redux/apiCalls";
import { userRequest } from "../../requestMetodos";

export default function UserList() {
  
  const [user, getUser] = useState([])


  useEffect(() => {
    let insub = true;
    const getUsers = async ()=>{

 const res =  await userRequest.get(`/users`)

if(insub){
  getUser(res.data)
}

    }
   getUsers().catch(console.error());
   return () => insub = false;
   
  }, [user])


  const handleDelete = (id) => {
   deletarUser(id)
  };
  
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "imagem",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row?.imagem} alt="" />
            {params.row?.nomeUsuario}
          </div>
        );
      },
    },
    { field: "nomeUsuario", headerName: "Nome", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "isAdmin",
      headerName: "Status",
      width: 120,
    },
    {
      field: "bi",
      headerName: "BI",
      width: 200,
    },
    { field: "pontos", headerName: "Pontos", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row?._id}>
              <button className="userListEdit">Editar</button>
            </Link>

            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row?._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={user}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row)=>row?._id}
        pageSize={8}
        rowsPerPageOptions = {[8]}
        checkboxSelection
      />
    </div>
  );
}
