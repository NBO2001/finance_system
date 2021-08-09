import { useEffect } from "react";
import { memo, useState } from "react";
import { useSelector } from "react-redux";
import dataFilterType from "../../utils/functions/dataFilterType";
import deleteRegister from "../../utils/requests/deleteRegister";
import getSituation from "../../utils/format/getSituation";
import getItemDate from "../../utils/format/getItemDate";
import orderArray from "../../utils/format/ordeArray";
import returnItemForId from "../../utils/requests/returnItemForId";
import { DivGeneric, ConteinnerDay, DivItem, CicloButtons,SpanValue,
     LabelSituation, Buttons, Modal, FormAlterItem, SelectsMult } from "../../componets";

const TableRegists = () => {
    let [filter, setFilter] = useState({
        type: [],
        situation: false
    });
    const [content, setContent] = useState();
    const [modalOpened, setModalOpened] = useState(false);
    const [data, setData ] = useState();

    const { regData } = useSelector(state => state.dataMonth);
    
    const regDelete = async (id) => {
        if(!id) return false;
        await deleteRegister(id)
        .then((res) => {
            setModalOpened(false);
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
    const setDataItem = async (ind) => {
        return await returnItemForId(ind).then((res) => {
            return res.data.resul; 
        });
    }
    const buttonEdit = async (idd) => {
        return await setDataItem(idd).then((res) => {
            let [ val ] = res;
            setContent(
                <FormAlterItem id={idd} data={val}/>
            )
            setModalOpened(true);
        })
    }
    const addFilter = (e) => {
        let type = [];
        e.map((val) => {
            type.push(parseInt(val.value));
            return true;
        })
        setFilter({
            ...filter,
            type
        })
    }
    let days = getDays();
    const buttonDelete = (idd) => {
        setContent(
            <div>
                <p>Deseja excluir item? </p>
                <Buttons typeButton="success-outline" onClick={() => regDelete(idd)} >Sim</Buttons>
            </div>
        )
        setModalOpened(true);
    };
    const options = [
        {value:'1', label: 'Receita'},
        {value: '2', label: 'Investimento'},
        {value: '3', label: 'Dívida'}
    ];
    useEffect(() => {
        const dataFilter = dataFilterType(regData, filter.type);
        setData(dataFilter);
    },[filter, regData]);
    return(
        <>
        <DivGeneric typeDiv="with-margin">
           <SelectsMult defaultValue={[options[0],options[1],options[2]]} options={options} name="filters" onChange={addFilter} />
        </DivGeneric>

       <DivGeneric width="99vw" typeDiv="center-with-collumn">
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
                                            <Buttons typeButton='button-edit' onClick={() => buttonEdit(obj.id)} />
                                            <Buttons typeButton='button-delete' onClick={() => buttonDelete(obj.id)} />
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

       <Modal height="200px" open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
            {content}
            <Buttons typeButton="exit" onClick={() => setModalOpened(false)}>Fechar</Buttons>
        </Modal>
        </>
    )

}

export default memo(TableRegists);