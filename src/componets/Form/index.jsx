import { MForm } from "./style";
const Form = ( {onSubmit, children}) => {

     return(
          <MForm onSubmit={onSubmit}>
                    {children}
          </MForm>
     )

}

export default Form;