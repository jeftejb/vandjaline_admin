import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();


if(localStorage.getItem("persist:vandja") ){
 if (JSON?.parse(JSON.parse(localStorage.getItem("persist:vandja"))?.user)?.currentUser){
 var TOKENUser  =  JSON?.parse(JSON.parse(localStorage.getItem("persist:vandja"))?.user)?.currentUser?.acessoToken
}else {
 var TOKENLoja = JSON?.parse(JSON.parse(localStorage.getItem("persist:vandja"))?.lojaLogin)?.currentLoja?.acessoToken
 
}
}
                      
//const BASE_URL = 'http://localhost:8080/api/'      
const BASE_URL = process.env.REACT_APP_API_URL

export const publicRequest = axios.create({
    baseURL:BASE_URL,
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
   headers:{token:`Bearer ${TOKENUser?TOKENUser:TOKENLoja}`}
})