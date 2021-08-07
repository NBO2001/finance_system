import { ButtonDefault,ButtonSuccess, ButtonExit,
      ButtonSuccessOutLine, ButtonDefaultOutline, Arrow } from "./style"

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
          case "default-outline":
               return (
                    <ButtonDefaultOutline type={type} onClick={onClick}>{children}</ButtonDefaultOutline>
               )
          case "arrow-left":
               return (
                    <Arrow type={type} onClick={onClick}><i className="fas fa-arrow-alt-circle-left"></i></Arrow>
               )
          case "arrow-right":
               return (
                    <Arrow type={type} onClick={onClick}><i className="fas fa-arrow-alt-circle-right"></i></Arrow>
               )
          default:
               return(
                    <ButtonDefault type={type} onClick={onClick}>{children}</ButtonDefault>
               )
     }
    // 
}

export default Buttons;