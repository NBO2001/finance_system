import { useDispatch } from "react-redux";
import showSum from "../requests/showSum";

import { setConsultMonth } from "../../redux/modules/resulSum";

const AddSumMonthDispatch = async (month, year, clear) => {
    
    const dispatch = useDispatch();
    clear && dispatch(setConsultMonth());

    if(month && year){

        const { data } = await showSum(month, year)
        .then((res) => {
            return res;
        });
        if(data){
            let [ { inMonth }] = data;
            dispatch(setConsultMonth({inMonth, mon: month}));
        }

    }else{
        return false;
    }
    
}

export default AddSumMonthDispatch;
