import styled from "styled-components";

export const Value = styled.span`
     font-weight: bolder;
     color: ${(props) => props.theme.alerts.primary};
`;
export const ValueG = styled(Value)`
     color: ${(props) => props.theme.alerts.danger};
`;   
export const ValueI = styled(Value)`
     color: ${(props) => props.theme.alerts.alerta};
`;   
export const SpanConteinner = styled.span`
     color: ${(props) => props.theme.colors.text};
`;
const SpanValue = ({type, value}) => {
     switch(parseInt(type)){
          case 2:
               return(
                    <ValueI>- <SpanConteinner>{value}</SpanConteinner></ValueI>
               )
          case 3:
               return(
                    <ValueG>- <SpanConteinner>{value}</SpanConteinner></ValueG>
               )
          default:
               return(
                    <Value>+ <SpanConteinner>{value}</SpanConteinner></Value>
               )
     }
    
}

export default SpanValue;