import { memo } from "react";
import { useDispatch } from "react-redux";
import { setSums } from "../../redux/modules/resulSum";
import { useHistory } from "react-router-dom";

const Home = () => {
   const dispatch = useDispatch();

   dispatch(setSums({
       name: "Nael"
   }))
   let history = useHistory();

   function handleClick() {
        history.push("/month");
    }

    return(
        <div>
            <div onClick={handleClick}>
                <p>Month: August</p>
                <div>
                    <p>Gastos: 745.45</p>
                    <p>Receita: 2548.59</p>
                    <p>Investimentos: 558.45</p>
                </div>
            </div>

            <div>
                <p>Year: 2021</p>
                <div>
                    <p>Gastos: 4548.48</p>
                    <p>Receita: 8545.54</p>
                    <p>Investimentos: 4144.45</p> 
                </div>
            </div>
        </div>
    )
}

export default memo(Home);