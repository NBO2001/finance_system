import api from "../../config";

const getSumYear = async (year) => {
    return await api.get(`/sum-period/${year}`)
    .then((res) => res)
    .catch((err) => console.log(err))
}
export default getSumYear;

