import { ButtonR, ButtonG, ButtonI } from "./style";

const CicloButtons = ({ typeButton }) => {
     switch(parseInt(typeButton)){
          case 1:
               return(
                    <ButtonR>R</ButtonR>
               )
          case 2:
               return(
                    <ButtonI>I</ButtonI>
               )
          case 3:
               return(
                    <ButtonG>G</ButtonG>
               )
          default:
               return(
                    <button>EMpty</button>
               )
     }
}

export default CicloButtons;