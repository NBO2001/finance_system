import styled from "styled-components";

export const DivSty = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     height: ${(props) => props.height};
     font-style: normal;
     font-weight: 300;

`;
export const DivMargin = styled.div`
     width: ${(props) => props.width? props.width: "50vw"};
     height: ${(props) => props.height};
     margin: 10px;
     @media screen and (max-width:922px) {
          width: 96vw;
     }
`;

export const FlexRow = styled.div`
     display:flex;
     align-items: center;
     justify-content: space-between;
     min-width: ${(props) => props.width};
     @media screen and (max-width:370px) {
          min-width: 95%;
     }
`;


export const DivItensCenter = styled.div`
     width: ${(props) => props.width? props.width: "100vw"};
     min-height: ${(props) => props.height? props.height: "50vh"};
     display: flex;
     margin-bottom: 1rem;
     flex-direction: row;
     justify-content: center;
     align-items: center;
`;

export const DivItensCenterColumn = styled.div`
     width: ${(props) => props.width? props.width: "100vw"};
     min-height: ${(props) => props.height? props.height: "50vh"};
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
`;
