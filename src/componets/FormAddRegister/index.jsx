import {Form, Inputs, Selects, Buttons} from "../../componets";
import { useState } from "react";
import addNewRegister from "../../utils/requests/addNewRegister";
import { useDispatch } from "react-redux";
import  { setAlert } from "../../redux/modules/alerts";

const FormAddRegister = () => {
    const dispatch = useDispatch();
     const [register, setRegister] = useState({});
     
     const addValue = (e) => {
          let keyElement;
          let valElement;
          if(e.target){
              keyElement = e.target.name;
              valElement = e.target.value;
              
          }else{
              keyElement = e.name;
              valElement = e.value;
          }
          setRegister({
              ...register,
              [keyElement]: valElement
          });
     } 

     const sendBack = async (e) => {
          e.preventDefault();
          await addNewRegister(register).then((res) => {
                dispatch(setAlert(res))
               e.target.name.value = "";
               e.target.val.value = "";
               e.target.dataLan.value = "";
          });
      }

     return(
          <Form onSubmit={sendBack}>
                    <Inputs type="text" name='name' placeholder="Descrição"  onChange={addValue}/>
                    <Inputs type="text" name='val' placeholder="Valor" onChange={addValue}/>
                 
                    <Selects
                    onChange={addValue}
                     options={[
                        {value: "1", label: "Receita", name:"type"},
                        {value: "2", label: "Investiomento", name:"type"},
                        {value: "3", label: "Dívida", name:"type"},
                    ]}/>
                    <Selects
                    onChange={addValue}
                     options={[
                        {value: "2", label: "Paga", name:"situation"},
                        {value: "1", label: "Não-Paga", name:"situation"},
                        {value: "3", label: "Recebido", name:"situation"},
                        {value: "4", label: "Não-Recebido", name:"situation"},
                    ]}/>
                    <Inputs type="date" name="dataLan" onChange={addValue} />
                    <Buttons typeButton="success-outline" type="submit">Adicionar</Buttons>
          </Form>
     )

}

export default FormAddRegister;