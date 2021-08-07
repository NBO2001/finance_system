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
const SpanValue = ({type, value}) => {
     switch(type){
          case "yeallow":
               return(
                    <ValueI>- {value}</ValueI>
               )
          case "red":
               return(
                    <ValueG>- {value}</ValueG>
               )
          default:
               return(
                    <Value>+ {value}</Value>
               )
     }
    
}

export default SpanValue;