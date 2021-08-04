import { memo, useState, useEffect } from "react";
import { useSelector } from "react-redux";

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
        <p>Month: {month && month.mon} </p>
        <div>
            <p>Gastos: {valsMonth && valsMonth.desp}</p>
            <p>Investimentos: {valsMonth && valsMonth.invs}</p>
            <p>Receita: {valsMonth && valsMonth.recp}</p>
        </div>
    </div>
    )
}

export default memo(DivMonthDeth);