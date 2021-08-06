import { memo, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import retunNameOfMonth from "../../utils/format/retunNameOfMonth";

const DivMonth = ({monthName, onClick}) => {

    const [valsMonth, setValsMonth] = useState();

    const { sum } = useSelector((state) => state.resulSum);
    const mont = (sums) => {
        if(sums){
            const [ {inMonth} ] = sums;
            return inMonth;
        }
    }

    useEffect(() => {
        setValsMonth(mont(sum))
    },[valsMonth, sum]);
    return(
        <div onClick={onClick}>
        <p>{retunNameOfMonth(monthName)}</p>
        <div>
            <p>Gastos: {valsMonth && valsMonth.desp}</p>
            <p>Investimentos: {valsMonth && valsMonth.invs}</p>
            <p>Receita: {valsMonth && valsMonth.recp}</p>
        </div>
    </div>
    )
}

export default memo(DivMonth);