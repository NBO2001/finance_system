import {Conteinner} from "./style";
//temp
import { CicloButtons, DivGeneric, LabelSituation, SpanValue,Buttons } from "../../componets";

const DivItem = () => {
     return(
          <Conteinner>
               <DivGeneric width="350px" typeDiv="flex-row">
                    <CicloButtons typeButton="1"/>
                    <DivGeneric height="55px">
                         <p>Ufam</p>
                         <p>R$: <SpanValue value="248,48"/></p>
                    </DivGeneric>
                    <LabelSituation> Recebido </LabelSituation>
               </DivGeneric>
               <DivGeneric width="150px" typeDiv="flex-row">
                    <Buttons typeButton='button-edit' />
                    <Buttons typeButton='button-delete' />
               </DivGeneric>
          </Conteinner>
     )
}

export default DivItem;