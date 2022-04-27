import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteProduto} from "../../redux/apiCalls";
import { publicRequest, userRequest } from "../../requestMetodos";

export default function ProductList() {
 

   
 const user = JSON?.parse(JSON.parse(localStorage.getItem("persist:vandja"))?.user)?.currentUser;
  const loja =  JSON?.parse(JSON.parse(localStorage.getItem("persist:vandja"))?.lojaLogin)?.currentLoja;

  const [produtos, getProduto] = useState([]);

  const param = useState();

  useEffect(()=>{
    let inpor = true
    const getPro = async ()=>{
        
          if(user?.isUser){

             const res = await userRequest.get(`/produtos/admin/pro?param=${param}`)

             if(inpor){
              getProduto(res.data);
             }
      
      
      }else{

        
        const res = await publicRequest.get(`/produtos/loja/admin/${loja?._id}?param=${param}`)
        if(inpor){
          getProduto(res.data);
         }
     }

    
    }
    
    getPro().catch(console.error());

    return ()=> inpor = false
  
  },[loja?._id,user?.isUser, param])


  const handleDelete = (id) => {
    deleteProduto(id)
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Imagem",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row?.imagem} alt="" />
            {params.row?.name}
          </div>
        );
      },
    },
    { field: "titulo", headerName: "Nome", width: 150},
    { 
      field: "stock" ,
       headerName: "Stock",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="productListItem">
              {String(params.row?.stock)}
              {` Q: ${params.row?.quanti}`}
            </div>
          );
        },
  },
  { 
    field: "activo" ,
     headerName: "Activo",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {String(params.row?.activo)}
            {` D: ${params.row?.quanti > 0? "true ": "false"}`}
          </div>
        );
      },
},
    {
      field: "loja",
      headerName: "Loja",
      width: 120,
    },
    {
      field: "preco",
      headerName: "Preco",
      width: 150,
    },
    {
      field: "action",
      headerName: "Accao",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row?._id}>
              <button className="productListEdit">Editar</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row?._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={produtos}
        disableSelectionOnClick
        columns={columns}
        getRowId = {(row)=> row?._id}
        pageSize={9}
        checkboxSelection
      />
    </div>
  );
}
