import styled from "styled-components";

export const Wrapper = styled.div`
     height: 80vh;
     width: 100vw;
     display: flex;
     align-items: center;
     justify-content: space-around;
     @media screen and (max-width:922px) {
          display: flex;
          flex-direction:column;
          align-items: center;
          justify-content: space-around;
     }
`;