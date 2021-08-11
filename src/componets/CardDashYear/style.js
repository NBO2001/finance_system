import styled from "styled-components";

export const Conteinner = styled.div`

     display: flex;
     align-items: center;
     justify-content: space-between;
     width: 50vw;
     border-radius: 10px;
     padding: 0.5rem;
     min-height: 300px;
     background: ${(props) => props.theme.colors.backgroudcard};
     @media screen and (max-width:922px) {
          margin-left:5px;
          width: 96vw;
     }
     @media screen and (max-width:512px) {
          margin-left:0px;
          margin-right: 0px;
          width: 100vw;
     }
     @media screen and (max-width:382px) {
          font-size: 0.9em;
     }
`;