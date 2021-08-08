import styled from "styled-components";

export const Conteinner = styled.div`

     display: flex;
     align-items: center;
     justify-content: space-between;
     width: 30vw;
     border-radius: 10px;
     padding: 0.5rem;
     min-height: 300px;
     background: ${(props) => props.theme.colors.backgroudcard};

`;