import { memo, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import retunNameOfMonth from "../../utils/format/retunNameOfMonth";
import { Conteinner, Title, ConteinterElementes } from "./style";
import convertNumeberForBrazil from "../../utils/format/convertNumeberForBrazil";
import { SpanValue } from "../../componets";
import calcBoxFree from "../../utils/functions/calcBoxFree";
import calcCustDay from "../../utils/functions/calcCustDay";

const DivMonthDeth = ({dateNow}) => {

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
        <Conteinner>

            <Title>{`${retunNameOfMonth(dateNow.month)} de ${dateNow.year}`}</Title>
            
            <ConteinterElementes>
                <p>Gastos: R$ <SpanValue type="3" value={valsMonth && convertNumeberForBrazil(valsMonth.desp)}/> </p>
                <p>Investimentos: R$ <SpanValue type="2" value={valsMonth && convertNumeberForBrazil(valsMonth.invs)} /></p>
                <p>Receita: R$ <SpanValue type="1" value={valsMonth && convertNumeberForBrazil(valsMonth.recp)}/> </p>
                <p>Livre: R$ {valsMonth && convertNumeberForBrazil(calcBoxFree(valsMonth))}</p>
                <p>Custo de vida: R$ {valsMonth && convertNumeberForBrazil(calcCustDay(dateNow, valsMonth.desp))}</p>
            </ConteinterElementes>

        </Conteinner>
    )
}

export default memo(DivMonthDeth);