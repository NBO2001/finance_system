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
     color: ${(props) => props.theme.colors.backgroud};
     font-weight: bolder;
     font-size: 1.1em;
     border-width: 0;
     border-radius: 10px;
     cursor: pointer;
     :hover{
          font-size: 1.2em;
     }
`;