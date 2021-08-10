import Portal from "./Portal";
import styled from "styled-components";
import { useSelector ,useDispatch } from "react-redux";
import { setAlert } from "../../redux/modules/alerts";
import { memo, useState, useContext, useMemo } from "react";
import { UseContext } from "../../UseContext";

export const Alert = styled.div`
     position: fixed;
     height: 50px;
     width: 400px;
     top: 20px;
     left: 30%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     box-shadow: 0px 0px 32px rgba(78, 89, 131, 0.2);
     background: ${(props) => props.theme.colors.backgroud};
     color: black;
     border-radius: 15px;
     align-items: center;
     font-size: 1.5em;
     padding: 15px;
     z-index: 999;

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
                    setContent( <Portal>
                         <AlertDanger>
                              {itemAlert.mensage}
                         </AlertDanger>
                    </Portal>)
               }else{
                    setContent( <Portal>
                         <AlertSuccess>
                              {itemAlert.mensage}
                         </AlertSuccess>
                    </Portal>)
               }
               setTimeout(() => {setContent(null)},2500)
          }
 
     },[itemAlert])

     return content;
    
}

export default memo(ModalAlert);