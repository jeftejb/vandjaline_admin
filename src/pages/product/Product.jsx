import { Link,  useLocation } from "react-router-dom";
import "./product.css";
import { updateProduto } from "../../redux/apiCalls";
import { Publish } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "./../../firebase";
import { publicRequest } from "../../requestMetodos";
export default function Product() {
    const location = useLocation()
    const produtoId = location.pathname.split("/")[2]
    const [input, getInput] = useState()
    const [file, setFile] = useState(null)
    const [progress ,  getProgress] = useState(0)
    const [produto, getProduto] = useState()
const param = useState()

    const handelChange = (e)=>{
        getInput((prev)=>{
           return {...prev, [e.target.name]:e.target.value}
        })
    }
    

    useEffect(()=>{
      let inpro = true ;
        const getProduct = async ()=>{
         
          try{
            

                 const res = await publicRequest.get(`/produtos/${produtoId}?param = ${param}`)
               if(inpro){  getProduto(res.data)}

              
          }catch{}
        }
        getProduct()
        return () => inpro = false
    },[produtoId, param])

 
    const handelClick = (e)=>{
        e.preventDefault();
        if (file){
            const fileName = new Date().getTime()+ file.name;
            const storage = getStorage(app)
            const storageRef = ref (storage, `filesPro/${fileName}`)
        
            const uploadTask = uploadBytesResumable(storageRef, file);
        
        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
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
                const produtoinput = input? {...input, imagem:downloadURL} : {imagem:downloadURL}
              updateProduto(produto?._id, produtoinput)
            });
          }
        );

        }else{
            updateProduto(produtoId , input)
        }
       
    }    
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Produto</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Criar</button>
        </Link>
      </div>
      <div className="productTop">
          
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={produto?.imagem} alt="" className="productInfoImg" />
                  <span className="productName">{produto?.titulo}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{produto?._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Quanti Stock:</span>
                      <span className="productInfoValue">5123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">activo:</span>
                      <span className="productInfoValue">{String(produto?.activo)}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">stock:</span>
                      <span className="productInfoValue">{String(produto?.stock)}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Produto Name</label>
                  <input type="text" placeholder={produto?.titulo} name="titulo" onChange={handelChange} />
                  <label>Produto Preco</label>
                  <input type="number" step={0.12}  placeholder={Number(produto?.preco).toFixed(2)} name="preco" onChange={handelChange} />
                  <label>Produto Descrição</label>
                  <input type="text" placeholder={produto?.descricao} name="descricao" onChange={handelChange}/>
                  <label>Quantidade em Stock</label>
                  <input type="number" placeholder={produto?.quanti} name="quanti" onChange={handelChange}/>
                  <label> Stock</label>
                  <select name="stock" id="stock"  onChange={handelChange}>
                      <option value="true">Sim</option>
                      <option value="false">Não</option>
                  </select>
                  <label>Activo</label>
                  <select name="activo" id="activo"  onChange={handelChange}>
                  <option >Activar</option>
                      <option value="true">Sim</option>
                      <option value="false">Não</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img  src={produto?.imagem? produto?.imagem : file? URL.createObjectURL(file):''}  alt="" className="productUploadImg" />
                      <label >
                          
                          <Publish/>
                      </label>
                      <input type="file" accept="image/*" id="file" onChange={(e)=>setFile(e.target.files[0])} />
                            <span>Actualizar {progress} %</span>
                  </div>
                  <button className="productButton" onClick={handelClick}>Actualizar</button>
              </div>
          </form>
      </div>
    </div>
  );
}
