import { memo } from "react";
import { useSelector } from "react-redux";
import orderArray from "../../utils/format/ordeArray";
import retunNameOfMonth from "../../utils/format/retunNameOfMonth";
import { DivGeneric, ConteinnerDay, DivItem, CicloButtons,SpanValue} from "../../componets";

const TableYear = () => {

     const { period } = useSelector((state) => state.resulSum);
    
     const getMonth = () => {
               let months = [];

               period && period.map((obj) => {

               let month = obj.month;

               if(months.indexOf(month) === -1){
                    months.push(month);
                    return true;
               }else{
                    return false;
               }
               })
          return orderArray(months);
               
          }
     let months = getMonth();

     return(
          <DivGeneric typeDiv="center-with-collumn">
               {months && months.map((month) => {
                    return(
                         <ConteinnerDay key={`month-${month}`}  title={retunNameOfMonth(month)}>
                              {period && period.map((ped) => {
                                   if(parseInt(month) === parseInt(ped.month)){
                                        return(
                                             <DivItem key={`${Math.random()} - ${ped.sumtot}`} >
                                                  <DivGeneric width="200px" typeDiv="flex-row">
                                                       <CicloButtons typeButton={ped.type}/>
                                                       <p>R$: <SpanValue type={ped.type} value={(ped.sumtot).toFixed(2)} /></p>
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

export default memo(TableYear);