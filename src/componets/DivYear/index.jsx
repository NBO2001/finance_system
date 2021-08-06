import { memo, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, Buttons, DivGeneric } from "../../componets";

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
                <p>Gastos: {valsYear && (valsYear.desp).toFixed(2)}</p>
                <p>Receita: {valsYear && (valsYear.invs).toFixed(2)}</p>
                <p>Investimentos:{valsYear && (valsYear.recp).toFixed(2)}</p> 
            </DivGeneric>
            <Buttons>Detalhes</Buttons>
        </Card>
    )
}

export default memo(DivYear);