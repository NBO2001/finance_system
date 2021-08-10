import api from "../../config";


const deleteRegister = async (id) => {
     if(!id){ return false; }

     const idd = parseInt(id);
     return api.delete(`/deletereg/${idd}`)
     .then((res) => {
          if(res.data.error){
               return {...res.data, mensage: "Registro não deletado!"}
          }else{
               return {...res.data, mensage: "Registro deletado!"}
          }
     })
     .catch((err) => ({error: true, mensage: "Erro de rede"}));
}

export default deleteRegister;