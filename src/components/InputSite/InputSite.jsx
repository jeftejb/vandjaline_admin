import "./InputSite.css";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import{imgNova, infNova} from "../../redux/apiCalls"
import { useState } from "react";
import app from "./../../firebase";

export default function InputSite() {

  const [progress ,  getProgress] = useState(0)
  const [imput, setImput] = useState({})
  const [file, setFile] = useState(null)


  const handelchange = (e)=>{
    setImput((prev)=>{
      return{...prev, [e.target.name]:e.target.value}
    })
  }


  const handelClickInput = (e)=>{
infNova(imput)
  }
  

  if(file){


    const fileName = new Date().getTime()+ file?.name;
    const storage = getStorage(app)
    const storageRef = ref (storage, `filesPro/${fileName}`)

  
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
        const imagem = {imagem:downloadURL}
           imgNova(imagem)
      });
    }
  );
  
  console.log(file? URL.createObjectURL(file) :"")
      
      
    }else{
    // console.log("nem uma imagem selecionada")
    }
  
  
  
  

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Inserir dados do site</h3>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Nome </label>
          <input type="text" name="nome" placeholder="john"   onChange={handelchange} />
        </div>
        <div className="newUserItem">
          <label>SO</label>
          <input type="text" name="so" placeholder="John Smith"   onChange={handelchange}/>
        </div>
        <div className="newUserItem">
          <label>Email-1</label>
          <input type="email" placeholder="john@gmail.com"  onChange={handelchange} />
        </div>
      
        <div className="newUserItem">
          <label>Telefone-1</label>
          <input type="text" placeholder="+1 123 456 78"  onChange={handelchange} />
        </div>
        <div className="newUserItem">
          <label>Telefone-2</label>
          <input type="text" placeholder="+1 123 456 78"  onChange={handelchange} />
        </div>
        <div className="newUserItem">
          <label>Endereco</label>
          <input type="text" placeholder="New York | USA"  onChange={handelchange} />
        </div>
        <div className="newUserItem">
          <label>Descrição do Site</label>
          <textarea  onChange={handelchange}></textarea>
        </div>

        <div className="newUserItem">
          <label>Descricao do Slide -1</label>
          <textarea  onChange={handelchange}></textarea>
        </div>

        <div className="newUserItem">
          <label>Descricao do Slide-2</label>
          <textarea  onChange={handelchange}></textarea>
        </div>
        <button onClick={handelClickInput} className="newUserButton">Inserir</button>
      </form>

      <form className="addProductForm">

<div className="addProductItem">
    <label className="imageL">Image</label>
    <div >
      <img className="img" src={file? URL.createObjectURL(file) :""} alt="" />
    </div>
    <input type="file" accept="image/*" id="file" onChange={(e)=>setFile(e.target.files[0])} />
    <span>Upload {progress} %</span>
  </div>
  
  <div className="addProductItem">
    <label className="imageL">Image</label>
    <div >
      <img className="img" src={file? URL.createObjectURL(file) :""} alt="" />
    </div>
    <input type="file" accept="image/*" id="file" onChange={(e)=>setFile(e.target.files[0])} />
    <span>Upload {progress} %</span>
  </div>

  <div className="addProductItem">
    <label className="imageL">Image</label>
    <div >
      <img className="img" src={file? URL.createObjectURL(file) :""} alt="" />
    </div>
    <input type="file" accept="image/*" id="file" onChange={(e)=>setFile(e.target.files[0])} />
    <span>Upload {progress} %</span>
  </div>

  <button className="newUserButton">Inserir</button>
</form>
    </div>
  );
}
