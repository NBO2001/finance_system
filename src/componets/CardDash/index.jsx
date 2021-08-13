import {useContext, useState} from "react";
import {Conteinner} from "./style";
import {Buttons, DivMonthDeth} from "../../componets";
import prevAndNextMonth from "../../utils/format/prevAndNextMonth";
import AddRegistersDispatch from "../../utils/functions/AddRegistersDispatch";
import AddSumMonthDispatch from "../../utils/functions/AddSumMonthDispatch";
import getNowDate from"../../utils/format/getNowDate";
import {UpdateAlert} from "../../UpdateAlert";

const CardDash = () => {
     const [ date, setDate  ] = useState({...getNowDate()});
     const updateAlert = useContext(UpdateAlert)

    if(updateAlert.update){

          AddSumMonthDispatch(date,updateAlert.update);
          AddRegistersDispatch(date,updateAlert.update);
          updateAlert.setUpdate(false)

     }else{

          AddSumMonthDispatch(date,updateAlert.update);
          AddRegistersDispatch(date,updateAlert.update);

     }

     const next = (direction) => {
          setDate(prevAndNextMonth(date, direction))
          updateAlert.setUpdate(true)
     };

     return(
          <Conteinner>
               <Buttons onClick={() => next('prev')}  type="button" typeButton="arrow-left" />
            
               <DivMonthDeth dateNow={date}/>

               <Buttons onClick={() => next('next')} type="button" typeButton="arrow-right" />
          </Conteinner>
     )
}
export default CardDash;