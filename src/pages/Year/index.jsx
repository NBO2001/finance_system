import { memo } from "react";
import { useHistory } from "react-router-dom";
import {SectionWhite, TopBar, Buttons,DivGeneric } from "../../componets";

const Year = () => {

     let history = useHistory();
     const handleClick  = (away='') => {
          history.push(`/${away}`);
     }

     return(
          <SectionWhite>
               <TopBar>
                    <Buttons typeButton="success" type="button"  > Adicionar valor</Buttons>
               </TopBar>
               <DivGeneric typeDiv="with-margin">
                    <Buttons type="button" typeButton="default-outline" onClick={() => handleClick()}>Voltar</Buttons>
                </DivGeneric>
          </SectionWhite>
     )
}

export default memo(Year);