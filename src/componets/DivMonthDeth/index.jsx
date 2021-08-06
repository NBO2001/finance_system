import { memo, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import retunNameOfMonth from "../../utils/format/retunNameOfMonth";

const DivMonthDeth = () => {
    const [valsMonth, setValsMonth] = useState();

    const { month } = useSelector((state) => state.resulSum);
    
    const mont = (sums) => {
        if(sums){
            const  {inMonth}  = sums;
            return inMonth;
        }
    }

    useEffect(() => {
        setValsMonth(mont(month))
    },[valsMonth, month]);
    return(
        <div>
        <p>Month: {month && retunNameOfMonth(month.mon)} </p>
        <div>
            <p>Gastos: {valsMonth && valsMonth.desp}</p>
            <p>Investimentos: {valsMonth && valsMonth.invs}</p>
            <p>Receita: {valsMonth && valsMonth.recp}</p>
        </div>
    </div>
    )
}

export default memo(DivMonthDeth);