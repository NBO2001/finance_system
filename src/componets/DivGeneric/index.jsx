import styled from "styled-components";

export const DivSty = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     height: ${(props) => props.height};
     font-style: normal;
     font-weight: 300;

`;


const DivGeneric = ({height, children}) => {
     return(
          <DivSty height={height}>
                {children}
          </DivSty>
     )
}

export default DivGeneric;