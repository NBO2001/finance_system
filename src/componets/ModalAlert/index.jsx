import Portal from "./Portal";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { memo, useState, useMemo } from "react";

export const Alert = styled.div`
     
     height: 40px;
     
     top: 20px;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     box-shadow: 0px 0px 32px rgba(78, 89, 131, 0.2);
     background: ${(props) => props.theme.colors.backgroud};
     color: black;
     border-radius: 15px;
     align-items: center;
     font-size: 1.2em;
     padding: 15px;
     z-index: 999;

`;
export const Conteinner = styled.div`
     position: fixed;
     width: 90vw;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

`;
export const AlertDanger = styled(Alert)`
     background: ${(props) => props.theme.alerts.danger};
`;

export const AlertSuccess = styled(Alert)`
     background: ${(props) => props.theme.alerts.success};
`;

const ModalAlert = () => {

     const { alert } = useSelector((state) => state.alerts);
     const [content, setContent] = useState(null);
     const itemAlert = useMemo(() => {
          if(!alert) return null;
         
          return alert;
          
     }, [alert])

     useMemo(() => {
          
          if(itemAlert){
               if(itemAlert.error){
                    setContent(
                    <Portal>
                         <Conteinner>
                              <AlertDanger>
                                   {itemAlert.mensage}
                              </AlertDanger>
                         </Conteinner>
                    </Portal>)
               }else{
                    setContent( 
                    <Portal>
                         <Conteinner>
                              <AlertSuccess>
                                   {itemAlert.mensage}
                              </AlertSuccess>
                         </Conteinner>
                    </Portal>)
               }
               setTimeout(() => {setContent(null)},2500)
          }
 
     },[itemAlert])

     return content;
    
}

export default memo(ModalAlert);