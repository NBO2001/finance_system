import { memo, useState } from "react";
import { useHistory } from "react-router-dom";
import AddSumDispatch from "../../utils/functions/AddSumDispatch";
import { DivMonth, DivYear, Modal, SectionWhite,
    TopBar, Buttons, DivCards, FormAddRegister } from "../../componets";


const Home = () => {
    const month = 8;
    const year = 2021;
 
    let history = useHistory();
    const [modalOpened, setModalOpened] = useState(false);
    AddSumDispatch(month, year, false);
    
   const handleClick  = (away) => {
        history.push(`/${away}`);
    }
    const openModal = () => {
        setModalOpened(true);
    }
   
    return(
        <>
            <SectionWhite>
                <TopBar>
                    <Buttons typeButton="success" type="button"  onClick={() => openModal()}> Adicionar valor</Buttons>
                </TopBar>

                <DivCards>
                
                    <DivMonth monthName={month} onClick={() => handleClick("month")}/>
                    <DivYear yearName={year} onClick={() => handleClick("year")}/>
                    
                </DivCards>
            </SectionWhite>
    
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
                <FormAddRegister />
                <Buttons typeButton="exit" onClick={() => setModalOpened(false)}>Sair</Buttons>
            </Modal>
        </>
    )
}

export default memo(Home);