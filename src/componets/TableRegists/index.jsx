import { useEffect } from "react";
import { memo, useState } from "react";
import { useSelector } from "react-redux";
import dataFilterType from "../../utils/functions/dataFilterType";
import deleteRegister from "../../utils/requests/deleteRegister";
import returnArrayFilters from "../../utils/functions/returnArrayFilters";
import getSituation from "../../utils/format/getSituation";
import getItemDate from "../../utils/format/getItemDate";
import orderArray from "../../utils/format/ordeArray";
import { DivGeneric, ConteinnerDay, DivItem, CicloButtons,SpanValue, LabelSituation,Buttons } from "../../componets";

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

    const getDays = () => {
        let days = [];

        data && data.map((obj) => {

            let day = getItemDate(obj);

            if(days.indexOf(day) === -1){
                days.push(day);
                return true;
            }else{
                return false;
            }
        })
        return orderArray(days);
    }
   
    let days = getDays();

    useEffect(() => {
        const dataFilter = dataFilterType(regData, filter.type);
        setData(dataFilter);
    },[filter, regData])
    // {data && data.map((obj) => {
    //     return(
    //         <p key={obj.id}> {obj.name} --  {obj.val} -- {obj.type} <button onClick={() => regDelete(obj.id)}> Delete </button></p>
    //     )
    // })}
    return(
       <DivGeneric typeDiv="center-with-collumn">
            {days && days.map((day) => {
                return(
                    <ConteinnerDay key={`Day${day}`} title={day}>
                        {data && data.map((obj) => {
                            if(day ===  getItemDate(obj)){
                                return (
                                    <DivItem key={obj.id}>
                                        <DivGeneric width="350px" typeDiv="flex-row">

                                            <CicloButtons typeButton={obj.type}/>

                                            <DivGeneric height="55px">
                                                <p>{obj.name}</p>
                                                <p>R$: <SpanValue type={obj.type} value={(obj.val).toFixed(2)}/></p>
                                            </DivGeneric>

                                            <LabelSituation situation={obj.situation}> {getSituation(obj.situation)} </LabelSituation>

                                        </DivGeneric>


                                        <DivGeneric width="150px" typeDiv="flex-row">
                                            <Buttons typeButton='button-edit' />
                                            <Buttons typeButton='button-delete' />
                                        </DivGeneric>
                                    </DivItem>
                                )
                            }else{
                                return false;
                            }
                        })}
                    </ConteinnerDay>
                )
            })}
       </DivGeneric>
    )

}

export default memo(TableRegists);