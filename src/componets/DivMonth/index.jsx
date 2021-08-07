import { memo, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import retunNameOfMonth from "../../utils/format/retunNameOfMonth";
import { Card, Buttons, DivGeneric } from "../../componets";

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
        <Card title={retunNameOfMonth(monthName)}>
            <DivGeneric height="100px">
                <p>Receita: {valsMonth && (valsMonth.recp).toFixed(2)}</p>
                <p>Investimentos: {valsMonth && (valsMonth.invs).toFixed(2)}</p>
                <p>Gastos: {valsMonth && (valsMonth.desp).toFixed(2)}</p>
            </DivGeneric>
            <Buttons onClick={onClick}>Detalhes</Buttons>
        </Card>
    )
}

export default memo(DivMonth);