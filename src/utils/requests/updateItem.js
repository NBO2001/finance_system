import api from "../../config";

const updateItem = async (data) => {
     const headers = {
          'headers': {
              'Content-Type': 'application/json'
          }
     }
     return await api.put('/alter-register', data, headers)
     .then((res) => {
          return res;
     })
     .catch((err) => err);
}

export default updateItem;