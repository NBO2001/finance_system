import { memo } from "react";
import { useHistory } from "react-router-dom";
import AddSumDispatch from "../../utils/functions/AddSumDispatch";
import { DivMonth, DivYear } from "../../componets";

const Home = () => {
    const month = 8;
    const year = 2021;
    let history = useHistory();
    
    AddSumDispatch(month, year, false);

   const handleClick  = () => {
        history.push("/month");
    }

    return(
        <div>
           
            <DivMonth monthName={month} onClick={handleClick}/>
            <DivYear yearName={year}/>
        </div>
    )
}

export default memo(Home);