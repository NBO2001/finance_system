import api from "../../config";
import PropTypes from "prop-types";

const showSum = async (month, year) => {
    return await api.get(`/sumreg/${month}/${year}`)
    .then((res) => res)
    .catch(() => false);
}

export default showSum;


showSum.prototype = {
    month: PropTypes.number,
    year: PropTypes.number
}