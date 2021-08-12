import { memo, useState, useEffect } from "react";
import { SpanValue,Skeletons } from "../../componets";
import { Conteinner, Title, ConteinterElementes } from "./style";
import getSumYear from "../../utils/requests/getSumYear";
import convertNumeberForBrazil from "../../utils/format/convertNumeberForBrazil";

const DivDashYear = ({yearName, onClick}) => {
    const [valsYear, setValsYear] = useState();

    useEffect(() => {

        getSumYear(yearName)
        .then((res) => {
            if(!res) return false;
            let [ obj ] = res.data;
            setValsYear(obj.inYear);
        })
        
    },[yearName]);
    if(!valsYear) return (<Skeletons  width="450px" height="300px" />);
    return(
        <Conteinner>
             <Title>{yearName}</Title>
            <ConteinterElementes>
                <p>Receita: <SpanValue type="1" value={valsYear && convertNumeberForBrazil(valsYear.recp)} /> </p>
                <p>Investimentos: <SpanValue type="2" value={valsYear && convertNumeberForBrazil(valsYear.invs)} /> </p> 
                <p>Gastos: <SpanValue type="3" value={valsYear && convertNumeberForBrazil(valsYear.desp)} /> </p>
            </ConteinterElementes>
        </Conteinner>
    )
}

export default memo(DivDashYear);