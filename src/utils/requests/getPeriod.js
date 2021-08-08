import api from "../../config";

const getPeriod = async (period) => {
     return await api.get(`/dash-year/${period}`)
     .then((res) => res)
     .catch((err) => console.log(err))
}

export default getPeriod;