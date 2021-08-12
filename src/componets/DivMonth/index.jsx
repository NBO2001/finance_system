import { memo, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import retunNameOfMonth from "../../utils/format/retunNameOfMonth";
import { Card, Buttons, DivGeneric, SpanValue,Skeletons } from "../../componets";
import convertNumeberForBrazil from "../../utils/format/convertNumeberForBrazil";

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
                <p>Receita: R$ <SpanValue type="1" value={valsMonth && convertNumeberForBrazil(valsMonth.recp)}/> </p>
                <p>Investimentos: R$ <SpanValue type="2" value={valsMonth && convertNumeberForBrazil(valsMonth.invs)}/> </p>
                <p>Gastos: R$ <SpanValue type="3" value={valsMonth && convertNumeberForBrazil(valsMonth.desp)} /> </p>
            </DivGeneric>
            <Buttons onClick={onClick}>Detalhes</Buttons>
        </Card>
    )
}

export default memo(DivMonth);