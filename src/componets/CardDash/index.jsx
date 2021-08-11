import {useState} from "react";
import {Conteinner} from "./style";
import {Buttons, DivMonthDeth} from "../../componets";
import prevAndNextMonth from "../../utils/format/prevAndNextMonth";
import AddRegistersDispatch from "../../utils/functions/AddRegistersDispatch";
import AddSumMonthDispatch from "../../utils/functions/AddSumMonthDispatch";
import getNowDate from"../../utils/format/getNowDate";

const CardDash = () => {
     const [ date, setDate  ] = useState({...getNowDate()});
     
     AddSumMonthDispatch(date.month, date.year);
     AddRegistersDispatch(date.month, date.year);

     const next = (direction) => {
          setDate(prevAndNextMonth(date, direction))
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