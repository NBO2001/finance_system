import { memo } from "react";
import { useHistory } from "react-router-dom";
import AddSumDispatch from "../../utils/functions/AddSumDispatch";
import { DivMonth, DivYear } from "../../componets";

const Home = () => {
    
    AddSumDispatch(8, 2021, false);

   let history = useHistory();

   function handleClick() {
        history.push("/month");
    }

    return(
        <div>
           
            <DivMonth monthName="8" onClick={handleClick}/>
            <DivYear yearName="2021" />
        </div>
    )
}

export default memo(Home);