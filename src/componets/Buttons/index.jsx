import { ButtonDefault,ButtonSuccess } from "./style"

const Buttons = ({onClick,children,type}) => {
     switch(type){
          case "success":
               return(
                    <ButtonSuccess onClick={onClick}>{children}</ButtonSuccess>
               )
          default:
               return(
                    <ButtonDefault onClick={onClick}>{children}</ButtonDefault>
               )
     }
    
}

export default Buttons;