import { useDispatch, useSelector } from "react-redux";
import showSum from "../requests/showSum";

import { setConsultMonth } from "../../redux/modules/resulSum";

const AddSumMonthDispatch = async (date, update) => {
    const dispatch = useDispatch();
    const select = useSelector((state) => state.resulSum);
    
    const callServer = async () => {
        const { data } = await showSum(date.month, date.year);

        if(data){
            let [ { inMonth }] = data;
            dispatch(setConsultMonth({inMonth, mon: date.month}));
        }
    }

    if(select.month){
        if(update){
            callServer()
        }
    }else{
        callServer()
    }
    
}

export default AddSumMonthDispatch;
