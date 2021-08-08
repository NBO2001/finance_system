import getPeriod from "../requests/getPeriod";
import { useDispatch } from "react-redux";
import { setPeriod } from "../../redux/modules/resulSum";


const AddPeriodInDispatch = async (year) => {
     const dispatch = useDispatch();
     
     if(!year) return false;

     const period = parseInt(year);

     return await getPeriod(period)
     .then((res) => {
          if(res.data.error){
               console.log("erro")
          }else{
               dispatch(setPeriod(res.data.resul))
          }
     })
     .catch((err) => console.log(err));

}
export default AddPeriodInDispatch;
