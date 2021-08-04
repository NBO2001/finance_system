import { memo, useState, useEffect } from "react";
import { useSelector } from "react-redux";

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
        <div>
            <p>Year: {yearName}</p>
            <div>
                <p>Gastos: {valsYear && valsYear.desp}</p>
                <p>Receita: {valsYear && valsYear.invs}</p>
                <p>Investimentos:{valsYear && valsYear.recp}</p> 
            </div>
        </div>
    )
}

export default memo(DivYear);