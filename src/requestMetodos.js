import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

var TOKEN = ""
if(localStorage.getItem("persist:vandja") !== null ){
 if (JSON?.parse(JSON.parse(localStorage.getItem("persist:vandja"))?.user)?.currentUser){
 TOKEN  =  JSON?.parse(JSON.parse(localStorage.getItem("persist:vandja"))?.user)?.currentUser?.acessoToken
}else {
 TOKEN = JSON?.parse(JSON.parse(localStorage.getItem("persist:vandja"))?.lojaLogin)?.currentLoja?.acessoToken
 
}
}

const BASE_URL = process.env.REACT_APP_API_URL // "http://localhost:8080/api/"

export const publicRequest = axios.create({
    baseURL:BASE_URL,
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
   headers:{token:`Bearer ${TOKEN}`}
})