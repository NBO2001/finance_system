import styled from "styled-components";

export const CardStyle = styled.div`
     background-color: ${(props) => props.theme.colors.backgroudcard};
     height: 450px;
     width: 430px;
     border-radius: 8px;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: space-between;
     @media screen and (max-width:922px) {
          width: 95vw;
          margin-top: 10px;
     }
`;

export const CardTitle = styled.h2`
     margin-top: 1rem;
     font-weight: 500;
     font-size: 1.8em;
`;