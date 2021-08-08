import { memo, useState, useEffect } from "react";
import { SpanValue } from "../../componets";
import { Conteinner, Title, ConteinterElementes } from "./style";
import getSumYear from "../../utils/requests/getSumYear";

const DivDashYear = ({yearName, onClick}) => {
    const [valsYear, setValsYear] = useState();

    useEffect(() => {

        getSumYear(yearName)
        .then((res) => {
            let [ obj ] = res.data;
            setValsYear(obj.inYear);
        })
        
    },[yearName]);

    return(
        <Conteinner>
             <Title>{yearName}</Title>
            <ConteinterElementes>
                <p>Receita: <SpanValue type="1" value={valsYear && (valsYear.recp).toFixed(2)} /> </p>
                <p>Investimentos: <SpanValue type="2" value={valsYear && (valsYear.invs).toFixed(2)} /> </p> 
                <p>Gastos: <SpanValue type="3" value={valsYear && (valsYear.desp).toFixed(2)} /> </p>
            </ConteinterElementes>
        </Conteinner>
    )
}

export default memo(DivDashYear);