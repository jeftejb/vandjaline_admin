import "./newProduct.css";
import{useEffect, useState} from "react";
import { novoProduto } from "../../redux/apiCalls";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "./../../firebase";
import { publicRequest } from "../../requestMetodos";
import { cores } from "../../data";

export default function NewProduct() {
  const [progress ,  getProgress] = useState(0)
  const [imput, setImput] = useState({})
  const [file, setFile] = useState(null)
  const [categorias, setCategorias] = useState([])
  const [cat , getCat] = useState();
 
  console.log(cores[0])
  const loja =  JSON?.parse(JSON.parse(localStorage.getItem("persist:vandja"))?.lojaLogin).currentLoja;
   
   useEffect(()=>{
  let inpro = true;
  const getCate = async() =>{
      const  res  = await publicRequest.get("/categorias");
    if(inpro){ 
       getCat(res.data)
      }
  }
  getCate().catch(console.error());
  return ()=> inpro = false;
},[]);

  const handelchange = (e)=>{
    setImput((prev)=>{
      return{...prev, [e.target.name]:e.target.value}
    })
  }

  const handelCategoria = (e)=>{
    
    setCategorias(e.target.value.split(","))
  }

  const handelClick = (e)=>{

  e.preventDefault();

    const fileName = new Date().getTime()+ file?.name;
    const storage = getStorage(app)
    const storageRef = ref (storage, `filesPro/${fileName}`)

  

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
if(file){

  const uploadTask = uploadBytesResumable(storageRef, file);
uploadTask.on('state_changed',

  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = Math.round( (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
     getProgress(progress)
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
        default:
        
    }
  },
  (error) => {
    // Handle unsuccessful uploads
  },
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      const produto = {...imput, imagem:downloadURL,loja: loja?.nomeLoja, id_loja:loja?._id, categoria:categorias}
         novoProduto(produto)
    });
  }
);

console.log(file? URL.createObjectURL(file) :"")
    
    
  }else{
    const produto = {...imput, imagem:"",loja: loja?.nomeLoja, id_loja:loja?._id, categoria:categorias}
         novoProduto(produto)
  }

}

 

  
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Novo Produto</h1>
      <form className="addProductForm">

      <div className="addProductItem">
          <label className="imageL">Image</label>
          <div >
            <img className="img" src={file? URL.createObjectURL(file) :""} alt="" />
          </div>
          <input type="file" accept="image/*" id="file" onChange={(e)=>setFile(e.target.files[0])} />
          <span>Actualizar {progress} %</span>
        </div>

      <div className="addProductItem">
          <label>Título</label>
          <input name="titulo" type="text" placeholder="Nome do Produto" onChange={handelchange} />
        </div>
        <div className="addProductItem">
          <label>Descrição</label>
          <input name="descricao"  type="text" placeholder="Descrição" onChange={handelchange} />
        </div>
        
        <div className="addProductItem">
          <label>Categoria</label>
          
          <select name="categoria" id=""  onChange={handelCategoria}>
            {cat?.map((item, i)=>(
              <option key={i} value={item?.nomeCat}>{item?.nomeCat}</option>
            ))}
          </select>
        </div>
        <div className="addProductItem">
          <label>Tamanho</label> 
          <input name="tamanho"  type="text" placeholder="Tamanho" onChange={handelchange} />
        </div>
        <div className="addProductItem">
          <label>Cor</label>
          <select name="cor"  onChange={handelchange}>
          <option disabled>Celecione uma cor </option>
            <option   value="yellow" style={{color : "yellow"}}>Amarelo</option>
            <option   value="blue"style={{color : "blue"}}>Azul</option>
            <option   value="black"style={{color : "black"}}>Preto</option>
            <option   value="orange"style={{color : "orange"}}>Laranja</option>
            <option   value="green"style={{color : "green"}}>Verde</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Preço</label>
          <input name="preco" step={0.2} type="number" placeholder="Preco" onChange={handelchange} />
        </div>
        <div className="addProductItem">
          <label>Qunatidade em Stock</label>
          <input name="quanti"  type="number" placeholder="Quantidade me Stock" onChange={handelchange} />
        </div>
        <div className="addProductItem radio">
          <label>Novo</label>
          <div>  <label>Sim</label> <input  name="novo" type="radio"  id=""  value="Novo"  onChange={handelchange} /></div>
          <div> <label>Não</label> <input  name="novo" type="radio"  id="" value="Usado"  onChange={handelchange} /></div>
        </div>
        <div className="addProductItem radio">
          <label>Stock</label>
          <div>  <label>Sim</label> <input  name="stock" type="radio"  id=""  value="true"  onChange={handelchange} /></div>
          <div> <label>Não</label> <input  name="stock" type="radio"  id="" value="false"  onChange={handelchange} /></div>
        </div>
        <div className="addProductItem radio">
          <label>Etatus</label>
          <div>  <label>Activo</label> <input  name="activar" type="radio"  id=""  value="true" onChange={handelchange} /></div>
        </div>
        <div className="addProductItem">
          <label>Nome do Estabelecomento</label>
          <input name="loja"  type="text" placeholder="Estabelecimento" value={loja?.nomeLoja} disabled  />
        </div>
        <div className="addProductItem">
          <label>Tipo</label>
          <input name="actuacaoLoja"  type="text" placeholder="Estabelecimento" value={loja?.actuacao} disabled  />
        </div>
        <button onClick={handelClick} className="addProductButton">Criar</button>
      </form>
    </div>
  );
}
