import styled from "styled-components";

export const Conteinner = styled.div`

     min-height: 300px;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;

`;
export const Title = styled.h2`
     font-size: 1.5em;
     font-weight: 300;
     margin-bottom: 1.5rem;
     @media screen and (max-width:382px) {
          font-size: 1.3em;
     }
`;

export const ConteinterElementes = styled.div`
     min-height: 120px;
     display:flex;
     font-weight: 300;
     font-size: 1.1em;
     flex-direction: column;
     justify-content: space-around;
     @media screen and (max-width:382px) {
          font-size: 0.9em;
     }
`;