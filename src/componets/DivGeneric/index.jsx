import {DivMargin, DivSty, DivItensCenter, DivItensCenterColumn, FlexRow} from "./style";

const DivGeneric = ({typeDiv,width ,height, children}) => {
     switch(typeDiv){
          case "with-margin":
               return(
                    <DivMargin width={width} height={height}>
                          {children}
                    </DivMargin>
               )
          case "center-with-collumn":
               return(
                    <DivItensCenterColumn width={width} height={height}>
                         {children}
                    </DivItensCenterColumn>
               )
          case "alings-center":
               return(
                    <DivItensCenter width={width} height={height}>
                          {children}
                    </DivItensCenter>
               )
          case "flex-row":
               return(
                    <FlexRow width={width} height={height}>
                          {children}
                    </FlexRow>
               )
          default:
               return(
                    <DivSty height={height}>
                          {children}
                    </DivSty>
               )
     }
     
}

export default DivGeneric;