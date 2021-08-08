import { Conteinner, Title} from "./style";

const ConteinnerDay = ({title, children}) => {
     return(
          <Conteinner>
               <Title>{title}</Title>
               {children}
          </Conteinner>
     )
}

export default ConteinnerDay;