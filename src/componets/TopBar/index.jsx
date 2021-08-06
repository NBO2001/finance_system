import { Bar, Title } from "./style";

const TopBar = ({children}) => {
     return (
          <Bar>
               <Title>My control</Title>
               {children}
          </Bar>
     )
}
export default TopBar;