import { useEffect } from "react";
import { memo, useState } from "react";
import { useSelector } from "react-redux";
import dataFilterType from "../../utils/functions/dataFilterType";
import deleteRegister from "../../utils/requests/deleteRegister";
import returnArrayFilters from "../../utils/functions/returnArrayFilters";
import { DivGeneric, ConteinnerDay } from "../../componets";

const TableRegists = () => {
    let [filter, setFilter] = useState({
        type: [],
        situation: false

    });
    const [data, setData ] = useState();

    const { regData } = useSelector(state => state.dataMonth);
    
    const addFilterState = (filterValue) => {
        setFilter(returnArrayFilters(filter, filterValue))
    }

    const regDelete = async (id) => {
        await deleteRegister(id)
        .then((res) => {
            console.log(regData)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        const dataFilter = dataFilterType(regData, filter.type);
        setData(dataFilter);
    },[filter, regData])
    
    return(
       <DivGeneric typeDiv="alings-center">
            <ConteinnerDay>
                {data && data.map((obj) => {
                    return(
                        <p key={obj.id}> {obj.name} --  {obj.val} -- {obj.type} <button onClick={() => regDelete(obj.id)}> Delete </button></p>
                    )
                })}
            </ConteinnerDay>
       </DivGeneric>
    )

}

export default memo(TableRegists);