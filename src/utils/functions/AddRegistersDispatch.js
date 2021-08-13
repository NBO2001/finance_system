import { useDispatch, useSelector } from "react-redux";
import showRegisters from "../requests/showRegisters";

import { setRegData } from "../../redux/modules/dataMonth";

const AddRegistersDispatch = async (date, update) => {
    
    const dispatch = useDispatch();
    const select = useSelector((state) => state.dataMonth);

    const callServer = async () => {
        const { data } = await showRegisters(date.month, date.year);

        if(data){
            dispatch(setRegData(data.resuls));
        }
    }
    if(select.regData){
        if(update){
            callServer()
        }
    }else{
        callServer()
    }


}

export default AddRegistersDispatch;

