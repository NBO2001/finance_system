import styled from "styled-components";

export const ButtonR = styled.button`
     height: 60px;
     width: 60px;
     border: 0;
     background: ${(props) => props.theme.alerts.primary};
     font-size: 2em;
     font-weight: bold;
     border-radius: 50%;
`;
export const ButtonG = styled(ButtonR)`
     background: ${(props) => props.theme.alerts.danger};
`;

export const ButtonI = styled(ButtonR)`
     background: ${(props) => props.theme.alerts.alerta};
`;