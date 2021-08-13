import { memo, useState } from "react";
import { useHistory } from "react-router-dom";
import getNowDate from "../../utils/format/getNowDate";
import AddSumDispatch from "../../utils/functions/AddSumDispatch";
import { DivMonth, DivYear, Modal, SectionWhite,
    TopBar, Buttons, DivCards, FormAddRegister } from "../../componets";
import { useMemo } from "react";
import { UpdateAlert } from "../../UpdateAlert";


const Home = () => {
    
    const date = getNowDate();

    const [update, setUpdate] = useState(false);

    const updateAlert = useMemo(() => ({update, setUpdate}),[update, setUpdate])
    let history = useHistory();
    const [modalOpened, setModalOpened] = useState(false);

    if(updateAlert.update){
        AddSumDispatch(date, updateAlert.update);
        updateAlert.setUpdate(false)
    }else{
        AddSumDispatch(date, updateAlert.update);
    }

    const handleClick  = (away) => history.push(`/${away}`);

    const openModal = () => setModalOpened(true);

    return(
        <UpdateAlert.Provider value={updateAlert}>
            <SectionWhite>
                <TopBar>
                    <Buttons typeButton="success" type="button"  onClick={() => openModal()}> Adicionar valor</Buttons>
                </TopBar>

                <DivCards>
                
                    <DivMonth monthName={date.month} onClick={() => handleClick("month")}/>
                    <DivYear yearName={date.year} onClick={() => handleClick("year")}/>
                    
                </DivCards>
            </SectionWhite>
    
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
                <FormAddRegister />
                <Buttons typeButton="exit" onClick={() => setModalOpened(false)}>Sair</Buttons>
            </Modal>
        </UpdateAlert.Provider>
    )
}

export default memo(Home);