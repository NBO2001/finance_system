import api from "../../config";

const addNewRegister = async (data) => {

     const headers = {
          'headers': {
              'Content-Type': 'application/json'
          }
     }
     return api.post('/addregister', data, headers)
     .then((res) => {
          if(res.data.error){
               return {...res.data, mensage: "Registro não adicionado!"}
          }else{
               return {...res.data, mensage: "Registro adicionado!"}
          }
     })
     .catch((err) => ({error: true, mensage: "Erro de rede"}));
}

export default addNewRegister;