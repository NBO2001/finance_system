import { CardStyle, CardTitle } from "./style";
const Card = ({title, children}) => {
     return(
          <CardStyle>
                 <CardTitle>{title}</CardTitle>
                 {children}
         
          </CardStyle>
     )
}

export default Card;