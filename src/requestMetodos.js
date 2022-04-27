import axios from 'axios'


var TOKEN = ""

if(localStorage.getItem("persist:vandja") !== null){
 if (JSON?.parse(JSON.parse(localStorage.getItem("persist:vandja"))?.user).currentUser){
const res  =  JSON?.parse(JSON.parse(localStorage.getItem("persist:vandja"))?.user).currentUser?.acessoToken
TOKEN = res
}else {
 const  res = JSON?.parse(JSON.parse(localStorage.getItem("persist:vandja"))?.lojaLogin).currentLoja?.acessoToken
 TOKEN = res
}
}else{
    TOKEN = ""
}


const BASE_URL = "http://vandjaline-f.herokuapp.com/api/" //"http://localhost:8080/api/"
export const publicRequest = axios.create({
    baseURL:BASE_URL,
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
   headers:{token:`Bearer ${TOKEN}`}
})