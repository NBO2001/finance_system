import styled from "styled-components";

export const P = styled.p`
     height: 40px;
     width: 100px;
     border-radius: 10px;
     padding: 2px;
     display:flex;
     align-items: center;
     justify-content: center;
     background: ${(props) => props.theme.alerts.success};
`;

export const PD = styled(P)`
     background: ${(props) => props.theme.alerts.alerta};
`;


const LabelSituation = ({situation, children}) => {
     switch(parseInt(situation)){
          case 2:
               return(
                    <PD>{children}</PD>
               )
          default:
               return(
                    <P>{children}</P>
               )
     }
    
};

export default LabelSituation;