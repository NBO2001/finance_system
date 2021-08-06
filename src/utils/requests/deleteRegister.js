import api from "../../config";


const deleteRegister = async (id) => {
     if(!id){ return false; }

     const idd = parseInt(id);
     return await api.delete(`/deletereg/${idd}`).then((res) => {
          return res;
     })
     .catch((err) => {
          return false;
     });
}

export default deleteRegister;