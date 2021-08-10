import {  SectionWhite,DivCards,
     TopBar, Buttons, DivGeneric } from "../../componets";
import { useHistory } from "react-router-dom";
const PageError = () => {
     let history = useHistory();
     const handleClick  = () => history.replace(`/`);
     return (
          <SectionWhite>
               <TopBar />

               <DivGeneric divType="alings-center" width="100vw" height="50vh">
                    <DivCards>
                         <p>Não achei o servidor!!</p>
                    </DivCards>
                    <Buttons onClick={handleClick} typeButton="default-outline">Recaregar</Buttons>
               </DivGeneric>

          </SectionWhite>
     )
}

export default PageError;