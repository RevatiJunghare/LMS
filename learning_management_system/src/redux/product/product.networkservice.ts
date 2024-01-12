import axios from "axios"



export class productNetworkService{
    static getProducts(){
        return axios.get(`${APIs.productgetapi}`)
    }

    static signupUser(data:any){
        return axios.post(`${APIs.signupApi}`,data)
    }

    static signinUser(data:any){
        return axios.post(`${APIs.signinAPi}`,data)
    }
}

class APIs{
   static productgetapi = "https://jsonplaceholder.typicode.com/users";
   static signupApi = "http://localhost:5000/product/registration";
   static signinAPi = "http://localhost:5000/product/login"
}