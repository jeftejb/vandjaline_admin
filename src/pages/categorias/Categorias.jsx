import "./categorias.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import { userRequest } from "../../requestMetodos";

export default function UserList() {

  const [cat, getUser] = useState([])
  const param = useState();

  useEffect(() => {
    let inpro = true;

    const getUsers = async ()=>{

 const res =  await userRequest.get(`/categorias/?param=${param}`)
 if(inpro){
  getUser(res?.data)
 }

    }


   getUsers().catch(console.error())

   return ()=> inpro = false ;
  },[param])


  const handleDelete = (id) => {
   
    const getUsers = async ()=>{
      try{
      await userRequest.delete("/categorias/"+id)  
      }catch{}
          }
         getUsers()

  };
  
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "imagemCat",
      headerName: "Cat",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row?.imagemCat} alt="" />
            {params.row.nomeCat}
          </div>
        );
      },
    },
   
     { field: "", headerName: 
     <Link to="/novaCategoria">
     <button className="userAddButton">Criar</button>
   </Link>
     , width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/categoria/" + params.row?._id}>
              <button className="userListEdit">Editar</button>
            </Link>
            
            <DeleteOutline
              className="userListDelete"
              onClick={(e) => handleDelete(params.row?._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={cat}
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
