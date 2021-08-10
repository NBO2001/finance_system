
import { useDispatch } from "react-redux";
import showSum from "../requests/showSum";
import PropTypes from "prop-types";

import { setSums, setConsultMonth } from "../../redux/modules/resulSum";

const AddSumDispatch = async (date, clear) => {
    
    const dispatch = useDispatch();
    clear && dispatch(setSums());

    const  datas  = await showSum(date.month, date.year);
    if(datas.error) return datas;

    const { data } = datas;
    if(data){
        dispatch(setSums(data));
        let [ { inMonth }] = data;
        dispatch(setConsultMonth({inMonth, mon: date.month}));
    }
    
}

export default AddSumDispatch;

AddSumDispatch.propType = {
    date: PropTypes.object
}
