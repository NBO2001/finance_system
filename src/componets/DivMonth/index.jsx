import { memo, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import retunNameOfMonth from "../../utils/format/retunNameOfMonth";
import { Card, Buttons, DivGeneric, SpanValue,Skeletons } from "../../componets";

const DivMonth = ({dateNow, monthName, onClick}) => {
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
    if(!valsMonth) return (<Skeletons  width="450px" height="430px" />);
    
    return(
        <Card title={retunNameOfMonth(monthName)}>
            <DivGeneric height="100px">
                <p>Receita: R$ <SpanValue type="1" value={valsMonth && (valsMonth.recp).toFixed(2)}/> </p>
                <p>Investimentos: R$ <SpanValue type="2" value={valsMonth && (valsMonth.invs).toFixed(2)}/> </p>
                <p>Gastos: R$ <SpanValue type="3" value={valsMonth && (valsMonth.desp).toFixed(2)} /> </p>
            </DivGeneric>
            <Buttons onClick={onClick}>Detalhes</Buttons>
        </Card>
    )
}

export default memo(DivMonth);