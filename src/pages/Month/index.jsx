import { memo } from "react";
import { useHistory } from "react-router-dom";
import { TableRegists, SectionWhite,TopBar,Buttons,
     DivGeneric, CardDash } from "../../componets";

const Month = () => {

    let history = useHistory();

    function handleClick() {
        history.push("/");
    }

    return(
        <SectionWhite>

            <TopBar>
                <Buttons typeButton="success" type="button" > Adicionar valor</Buttons>
            </TopBar>

            <DivGeneric typeDiv="with-margin">
                <Buttons type="button" typeButton="default-outline" onClick={handleClick}>Voltar</Buttons>
            </DivGeneric>

            <DivGeneric height="300px" typeDiv="alings-center">
                <CardDash />
            </DivGeneric>

            <TableRegists />
       
        </SectionWhite>
    )

}

export default memo(Month);