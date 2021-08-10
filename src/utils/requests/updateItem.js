import api from "../../config";

const updateItem = (data) => {
     const headers = {
          'headers': {
              'Content-Type': 'application/json'
          }
     }
     return api.put('/alter-register', data, headers)
     .then((res) => {
          if(res.data.error){
               return {...res.data, mensage: "Registro não alterado!"}
          }else{
               return {...res.data, mensage: "Registro alterado!"}
          }
     })
     .catch((err) => ({error: true, mensage: "Erro de rede"}));
}

export default updateItem;