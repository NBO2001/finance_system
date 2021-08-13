import styled from "styled-components";


export const ButtonDefault = styled.button`
     margin-right: 1rem;
     height: 40px;
     min-width: 200px;
     background: ${(props) => props.theme.colors.contras};
     color: black;
     font-weight: normal;
     font-size: 1.3em;
     border-width: 0;
     margin-bottom: 1rem;
     border-radius: 10px;
     cursor: pointer;
     :hover{
          font-size: 1.4em;
     }
`;

export const ButtonSuccess = styled.button`
     margin-right: 1rem;
     height: 40px;
     min-width: 150px;
     background: ${(props) => props.theme.alerts.success};
     color: ${(props) => props.theme.colors.text};
     font-weight: bolder;
     font-size: 1.1em;
     border-width: 0;
     border-radius: 10px;
     cursor: pointer;
     :hover{
          font-size: 1.2em;
     }
`;
export const ButtonExit = styled.button`
     margin-right: 1rem;
     height: 40px;
     min-width: 150px;
     border: 1.2px solid ${(props) => props.theme.alerts.danger};
     color: ${(props) => props.theme.alerts.danger};
     background: ${(props) => props.theme.colors.backgroud};
     font-weight: bolder;
     font-size: 1.1em;
     border-radius: 10px;
     cursor: pointer;
     :hover{
          background: ${(props) => props.theme.alerts.danger};
          color: ${(props) => props.theme.colors.backgroud};
          font-size: 1.2em;
     }
`;

export const ButtonSuccessOutLine = styled(ButtonSuccess)`
     border: 1.2px solid ${(props) => props.theme.alerts.success};
     color: ${(props) => props.theme.alerts.success};
     background: ${(props) => props.theme.colors.backgroud};
     :hover{
          background: ${(props) => props.theme.alerts.success};
          color: ${(props) => props.theme.colors.backgroud};
     }
`;

export const Arrow = styled.button`
     border: 0;
     padding: 0.5rem;
     background-color: ${(props) => props.theme.colors.backgroudcard};
     font-size: 3em;
     cursor: pointer;
     :hover{
          color: ${(props) => props.theme.alerts.default};
     }
`;

export const ButtonEdit = styled.button`
     font-size: 1.5em;
     cursor: pointer;
     border: 0;
     border-radius: 50%;
     height: 60px;
     width: 60px;

     background: ${(props) => props.theme.alerts.alerta};
     :hover{
          color: ${(props) => props.theme.colors.backgroud};
     }
     @media screen and (max-width:370px) {
          height: 3rem;
          width: 3rem;
     }
`;

export const ButtonDelete = styled(ButtonEdit)`
     background: ${(props) => props.theme.alerts.danger};
`;

export const ButtonDefaultOutline = styled(ButtonDefault)`
     border: 1.2px solid ${(props) => props.theme.alerts.default};
     color: ${(props) => props.theme.alerts.default};
     background: ${(props) => props.theme.colors.backgroud};
     :hover{
          background: ${(props) => props.theme.alerts.default};
          color: ${(props) => props.theme.colors.backgroud};
     }
`;