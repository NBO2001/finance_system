import { memo, useState } from "react";
import { useHistory } from "react-router-dom";
import { TableRegists, SectionWhite,TopBar,Buttons,
     DivGeneric, CardDash, Modal, FormAddRegister } from "../../componets";

const Month = () => {

    let history = useHistory();

    const [modalOpened, setModalOpened] = useState(false);

    const handleClick  = (away='') => {
        
        history.push(`/${away}`);
   }


    const openModal = () => {
        setModalOpened(true);
    }

    return(
        <>
            <SectionWhite>

                <TopBar>
                    <Buttons onClick={() => openModal()} typeButton="success" type="button" > Adicionar valor</Buttons>
                </TopBar>

                <DivGeneric typeDiv="with-margin">
                    <Buttons type="button" typeButton="default-outline" onClick={() => handleClick()}>Voltar</Buttons>
                </DivGeneric>

                <DivGeneric height="300px" width="95vw" typeDiv="alings-center">
                    <CardDash />
                </DivGeneric>

                <TableRegists />
        
            </SectionWhite>

            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
                <FormAddRegister />
                <Buttons typeButton="exit" onClick={() => setModalOpened(false)}>Sair</Buttons>
            </Modal>
        </>
    )

}

export default memo(Month);