import { memo, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, Buttons, DivGeneric, SpanValue } from "../../componets";

const DivYear = ({yearName, onClick}) => {
    const [valsYear, setValsYear] = useState();

    const { sum } = useSelector((state) => state.resulSum);
    const mont = (sums) => {
        if(sums){
            const [ {inYear} ] = sums;
            return inYear;
        }
    }

    useEffect(() => {
        setValsYear(mont(sum))
    },[valsYear, sum]);

    return(
        <Card title={yearName}>
            
            <DivGeneric height="100px">
                <p>Receita: <SpanValue type="1" value={valsYear && (valsYear.recp).toFixed(2)} /> </p>
                <p>Investimentos: <SpanValue type="2" value={valsYear && (valsYear.invs).toFixed(2)} /> </p> 
                <p>Gastos: <SpanValue type="3" value={valsYear && (valsYear.desp).toFixed(2)} /> </p>
            </DivGeneric>
            <Buttons onClick={onClick}>Detalhes</Buttons>
        </Card>
    )
}

export default memo(DivYear);