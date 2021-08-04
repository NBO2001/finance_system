import { useDispatch } from "react-redux";
import showRegisters from "../requests/showRegisters";

import { setRegData } from "../../redux/modules/dataMonth";

const AddRegistersDispatch = async (month, year, clear=false) => {
    const dispatch = useDispatch();
    if(month && year){
        clear && dispatch(setRegData());

        const { data } = await showRegisters(month, year)
        .then((res) => {
            return res;
        });

        if(data && !data.erro){
            dispatch(setRegData(data.resuls));
        }
    }else{
        return false;
    }


}

export default AddRegistersDispatch;

