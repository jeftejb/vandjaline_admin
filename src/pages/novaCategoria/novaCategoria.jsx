import "./novaCategoria.css";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase";
import { userRequest } from "../../requestMetodos";
import { useState } from "react";

export default function NovaCategoria() {
  const [progress ,  getProgress] = useState(0)
  const [imput, setImput] = useState({})
  const [file, setFile] = useState(null)


  const handelchange = (e)=>{
    setImput((prev)=>{
      return{...prev, [e.target.name]:e.target.value}
    })
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
      console.log({...imput, imagem:downloadURL});
      const categoria = {...imput, imagemCat:downloadURL}
      const inpCat = async () =>{
   try{
        await userRequest.post("/categorias/",categoria)
   }catch{}
      }
       inpCat()
    });
  }
);

console.log(file? URL.createObjectURL(file) :"")
    
    
  }else{
    const categoria = {...imput, imagemCat:""}
    const inpCat = async () =>{
      try{
           await userRequest.post("/categorias/",categoria)
      }catch{}
         }
          inpCat()
  }

}

 

  
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Nova categoria</h1>
      <form className="addProductForm">

      <div className="addProductItem">
          <label className="imageL">Imagem</label>
          <div >
            <img className="img" src={file? URL.createObjectURL(file) :""} alt="" />
          </div>
          <input type="file" accept="image/*" id="file" onChange={(e)=>setFile(e.target.files[0])} />
          <span>Actualizar {progress} %</span>
        </div>

      <div className="addProductItem">
          <label>Título</label>
          <input name="nomeCat" type="text" placeholder="Nome do Produto" onChange={handelchange} />
        </div>
        
        <button onClick={handelClick} className="addProductButton">Criar</button>
      </form>
    </div>
  );
}
