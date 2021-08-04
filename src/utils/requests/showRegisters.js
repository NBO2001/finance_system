import api from "../../config";

const showRegisters = async (month, year) => {
    return await api.get(`/list/${month}/${year}`)
    .then((res) => res)
    .catch(() => false);
}

export default showRegisters;

