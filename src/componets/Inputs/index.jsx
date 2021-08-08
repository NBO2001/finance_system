import { InputDefaul } from "./style";
const Inputs = ({defaultValue,value,type,name,onChange, placeholder}) => {
     return(
          <InputDefaul
          defaultValue={defaultValue}
          value={value} type={type}
          name={name} onChange={onChange} placeholder={placeholder}/>
     )
}

export default Inputs;