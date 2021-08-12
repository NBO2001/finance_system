import { memo, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, Buttons, DivGeneric, SpanValue } from "../../componets";
import convertNumeberForBrazil from "../../utils/format/convertNumeberForBrazil";

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
                <p>Receita: <SpanValue type="1" value={valsYear && convertNumeberForBrazil(valsYear.recp)} /> </p>
                <p>Investimentos: <SpanValue type="2" value={valsYear && convertNumeberForBrazil(valsYear.invs)} /> </p> 
                <p>Gastos: <SpanValue type="3" value={valsYear && convertNumeberForBrazil(valsYear.desp)} /> </p>
            </DivGeneric>
            <Buttons onClick={onClick}>Detalhes</Buttons>
        </Card>
    )
}

export default memo(DivYear);