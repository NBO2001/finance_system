import { memo, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import retunNameOfMonth from "../../utils/format/retunNameOfMonth";
import { Conteinner, Title, ConteinterElementes } from "./style";

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
                <p>Gastos: R$ {valsMonth && (valsMonth.desp).toFixed(2)}</p>
                <p>Investimentos: R$ {valsMonth && (valsMonth.invs).toFixed(2)}</p>
                <p>Receita: R$ {valsMonth && (valsMonth.recp).toFixed(2)}</p>
                <p>Livre: R$ 245,58</p>
            </ConteinterElementes>

        </Conteinner>
    )
}

export default memo(DivMonthDeth);