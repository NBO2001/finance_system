import styled from "styled-components";

export const InputDefaul = styled.input`
     height: 30px;
     border: 1px solid ${(props) => props.theme.colors.backgroudInputs};
     background-color: ${(props) => props.theme.colors.backgroudInputs};
     font-size: 1.2em;
     border-radius: 10px;
     padding: 0.5rem;
     ::placeholder{
          color: black;
          opacity: 0.8;
     }
`;