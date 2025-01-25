import axios from "axios";
import { api } from "../config/axios";


export async function productsGet(){
    try {
        const response = await axios.get(`${api}produtos`, {
        })

       return response;
    }catch(erro){
        console.log('erro no sing',erro)
    }
}

export default productsGet;