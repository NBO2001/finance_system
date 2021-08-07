import { ButtonDefault,ButtonSuccess, ButtonExit, ButtonSuccessOutLine } from "./style"

const Buttons = ({onClick,children,typeButton,type}) => {
     switch(typeButton){
          case "success":
               return(
                    <ButtonSuccess type={type} onClick={onClick}>{children}</ButtonSuccess>
               )
          case "success-outline":
               return(
                    <ButtonSuccessOutLine type={type} onClick={onClick}>{children}</ButtonSuccessOutLine>
               )
          case "exit":
               return (
                    <ButtonExit type={type} onClick={onClick}>{children}</ButtonExit>
               )
          default:
               return(
                    <ButtonDefault type={type} onClick={onClick}>{children}</ButtonDefault>
               )
     }
    
}

export default Buttons;