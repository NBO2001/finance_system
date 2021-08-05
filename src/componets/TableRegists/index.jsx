import { useEffect } from "react";
import { memo, useState } from "react";
import { useSelector } from "react-redux";
import dataFilterType from "../../utils/functions/dataFilterType";

const TableRegists = () => {
    let [filter, setFilter] = useState({
        type: [],
        situation: false

    });
    const [data, setData ] = useState();

    const { regData } = useSelector(state => state.dataMonth);
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

    useEffect(() => {
        const dataFilter = dataFilterType(regData, filter.type);
        setData(dataFilter);
    },[filter, regData])
    return(
       <>
            <div>
                <button type="button" onClick={() => addFilterState(2)}>Receitas</button>
                <button type="button" onClick={() => addFilterState(3)}>Investimentos</button>
                <button type="button" onClick={() => addFilterState(1)}>Gastos</button>
            </div>
            <div>
                {data && data.map((obj) => {
                    return(
                        <p key={obj.id}> {obj.name} --  {obj.val} </p>
                    )
                })}
            </div>
       </>
    )

}

export default memo(TableRegists);