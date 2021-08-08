import { memo, useState } from "react";
import { useHistory } from "react-router-dom";
import {SectionWhite, TopBar, Buttons,DivGeneric, CardDashYear, TableYear, Modal,FormAddRegister } from "../../componets";

const Year = () => {
     const [modalOpened, setModalOpened] = useState(false);
     let history = useHistory();
     const handleClick  = (away='') => {
          history.push(`/${away}`);
     }
     const openModal = () => setModalOpened(true);
      
     return(
          <>
          <SectionWhite>
               <TopBar>
                    <Buttons typeButton="success" type="button" onClick={() => openModal()} > Adicionar valor</Buttons>
               </TopBar>
               <DivGeneric typeDiv="with-margin">
                    <Buttons type="button" typeButton="default-outline" onClick={() => handleClick()}>Voltar</Buttons>
                </DivGeneric>
                
                <DivGeneric height="300px" typeDiv="alings-center">
                     <CardDashYear />
                </DivGeneric>
                <TableYear />
          </SectionWhite>


          <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
               <FormAddRegister />
               <Buttons typeButton="exit" onClick={() => setModalOpened(false)}>Fechar</Buttons>
          </Modal>

          </>
     )
}

export default memo(Year);