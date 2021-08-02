
import { useDispatch } from "react-redux";
import showSum from "../requests/showSum";
import PropTypes from "prop-types";

import { setSums } from "../../redux/modules/resulSum";

const AddSumDispatch = async (month, year, clear) => {
    
    const dispatch = useDispatch();
    clear && dispatch(setSums());

    const { data } = await showSum(month, year)
    .then((res) => {
        return res;
    });
    data && dispatch(setSums(data));

}

export default AddSumDispatch;

AddSumDispatch.prototype = {
    month: PropTypes.number,
    year: PropTypes.number
}
