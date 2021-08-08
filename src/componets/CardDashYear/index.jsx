import {memo, useState} from "react";
import {Conteinner} from "./style";
import {Buttons, DivDashYear} from "../../componets";
import AddPeriodInDispatch from "../../utils/functions/AddPeriodInDispatch";

const CardDashYear = () => {
     const [date, setDate ] = useState({
          year: 2021
     });
     AddPeriodInDispatch(date.year);
     const chanceYear = (direction) => {
          let year;
          switch(direction){
               case "left":
                    year = date.year-1;
                    setDate({...date, year});
                    return true;
               case "rigth":
                    year = date.year+1;
                    setDate({...date, year});
                    return true;
               default:
                    return false;
          }
     }
     return(
          <Conteinner>
               <Buttons onClick={() => chanceYear('left')} type="button" typeButton="arrow-left" />
                    <DivDashYear yearName={date.year}/>
               <Buttons onClick={() => chanceYear('rigth')} type="button" typeButton="arrow-right" />
          </Conteinner>
     )
}
export default memo(CardDashYear);