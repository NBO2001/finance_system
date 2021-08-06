import styled from "styled-components";

export const Bar = styled.div`
     color: ${(props) => props.theme.colors.backgroud};
     height: 70px;
     background-color: ${(props) => props.theme.colors.contras};
     display: flex;
     align-items: center;
     justify-content: space-between;
`;

export const Title = styled.h1`
     font-family: ${(props) => props.theme.fonts.default};
     font-weight: bold;
     margin-left: 1rem;
     font-size: 1.8em;
     cursor: pointer;
`;