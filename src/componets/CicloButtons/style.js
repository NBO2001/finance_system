import styled from "styled-components";

export const ButtonR = styled.p`
     height: 60px;
     width: 60px;
     display:flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     border: 0;
     background: ${(props) => props.theme.alerts.primary};
     font-size: 2em;
     font-weight: bold;
     border-radius: 50%;
     @media screen and (max-width:370px) {
          height: 3rem;
          width: 3rem;
     }
`;
export const ButtonG = styled(ButtonR)`
     background: ${(props) => props.theme.alerts.danger};
`;

export const ButtonI = styled(ButtonR)`
     background: ${(props) => props.theme.alerts.alerta};
`;