import api from "../../config";

const returnItemForId = async (id) => {
     return await api.get(`/get-item/${id}`)
     .then((res) => res )
     .catch((err) => err);
}

export default returnItemForId;