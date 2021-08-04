import { memo, useState } from "react";
import { useSelector } from "react-redux";
import dataFilterType from "../../utils/functions/dataFilterType";
const TableRegists = () => {
    const [filter, setFilter] = useState({
        type: [],
        situation: false

    });
    const { regData } = useSelector(state => state.dataMonth);

    console.log(filter);

    const addFilterState = (filterValue) => {

        let filterNow = filter.type;

        let valIdx = filterNow.indexOf(filterValue);

        if(valIdx >= 0 && valIdx !== -1){
            filterNow.splice(valIdx, 1);

            let tempTes = {
                ...filter,
                type: filterNow
            }

            setFilter(tempTes);
        }else{
            let tempTes = {
                ...filter,
                type: [...filterNow,filterValue]
            }

            setFilter(tempTes);
        }

    }

    const filteredData = dataFilterType(regData, filter.type);
    //console.log(filter);
    return(
       <>
            <div>
                <button type="button" onClick={() => addFilterState(1)}>Receitas</button>
                <button type="button" onClick={() => addFilterState(2)}>Investimentos</button>
                <button type="button" onClick={() => addFilterState(3)}>Gastos</button>
            </div>
       </>
    )

}

export default memo(TableRegists);