import api from "../../config";

const addNewRegister = async (data) => {

     const headers = {
          'headers': {
              'Content-Type': 'application/json'
          }
     }
     return await api.post('/addregister', data, headers)
     .then(() => {
          return true;
     })
     .catch((err) => err);
}

export default addNewRegister;