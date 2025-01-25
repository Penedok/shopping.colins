import { api } from "../config/axios";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

  
  export async function loginUser(email:string, senha: string) {
    try {
 
      const response = await axios.get(`${api}/usuarios?email=${email}&senha=${senha}`);
      const usuarios = response.data;
  
      if (usuarios.length > 0) {
        const user = usuarios[0]; 
        await SecureStore.setItemAsync("user", JSON.stringify(user));
  
        return { success: true, user }; 
      } else {
        return { success: false, message: "Usuário ou senha incorretos." };
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      return { success: false, message: "Erro ao acessar o servidor." };
    }
  }
  
  export default loginUser;
  




