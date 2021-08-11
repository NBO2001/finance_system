import styled from "styled-components";

export const Conteinner = styled.div`
     background: ${(props) => props.theme.colors.backgroud};
     height: 80px;
     border-radius: 10px;
     padding: 0.5rem;
     display: flex;
     flex-direction: row;
     justify-content: space-around;
     align-items: center;
     margin-bottom: 5px;
     @media screen and (max-width:570px) {
          display: flex;
          flex-direction: column;
          min-height: 7rem;
     }
`;