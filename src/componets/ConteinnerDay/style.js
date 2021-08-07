import styled from "styled-components";

export const Conteinner = styled.div`
     background: ${(props) => props.theme.colors.backgroudcard};
     width: 94%;
     border-radius: 10px;
     padding: 1rem;
     min-height: 150px;
`;

export const Title = styled.h2`
     font-size: 1.2em;
     font-weight: 300;
     margin-top: 3px;
     margin-bottom: 10px;
`;