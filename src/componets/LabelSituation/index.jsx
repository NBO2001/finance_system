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
     @media screen and (max-width:370px) {
          width: 4rem;
          font-size: 0.7em;
     }
`;

export const PD = styled(P)`
     background: ${(props) => props.theme.alerts.alerta};
`;


const LabelSituation = ({situation, children}) => {
     switch(parseInt(situation)){
          case 1:
               return(
                    <P>{children}</P>
               )
          default:
               return(
                    <PD>{children}</PD>
               )
     }
    
};

export default LabelSituation;