import { InputDefaul } from "./style";
const Inputs = ({type,name,onChange, placeholder}) => {
     return(
          <InputDefaul type={type} name={name} onChange={onChange} placeholder={placeholder}/>
     )
}

export default Inputs;