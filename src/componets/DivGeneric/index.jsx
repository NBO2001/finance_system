import {DivMargin, DivSty, DivItensCenter} from "./style";

const DivGeneric = ({typeDiv,width ,height, children}) => {
     switch(typeDiv){
          case "with-margin":
               return(
                    <DivMargin width={width} height={height}>
                          {children}
                    </DivMargin>
               )
          case "alings-center":
               return(
                    <DivItensCenter width={width} height={height}>
                          {children}
                    </DivItensCenter>
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