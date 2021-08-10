import {Form, Inputs, Selects, Buttons} from "../../componets";
import { useState, memo } from "react";
import updateItem from "../../utils/requests/updateItem";
import getItemDate from "../../utils/format/getItemDate";
import { useDispatch } from "react-redux";
import  { setAlert } from "../../redux/modules/alerts";


const FormAlterItem = ({id, data}) => {
     const dispatch = useDispatch();
     const [register, setRegister] = useState({
          id
     });
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
     const types = [
          {value: "1", label: "Receita", name:"type"},
          {value: "2", label: "Investiomento", name:"type"},
          {value: "3", label: "Dívida", name:"type"},
     ];
     const situation = [
          {value: "1", label: "Não-Paga", name:"situation"},
          {value: "2", label: "Paga", name:"situation"},
          {value: "3", label: "Recebido", name:"situation"},
          {value: "4", label: "Não-Recebido", name:"situation"},
     ];

     const sendBack =  (e) => {
          e.preventDefault();
          updateItem(register).then((res) => dispatch(setAlert(res)));
      }

     return(
          <Form onSubmit={sendBack}>
                    <Inputs type="text" defaultValue={data && data.name}  name='name' placeholder="Descrição"  onChange={addValue} />
                    <Inputs type="text" defaultValue={data && data.val} name='val' placeholder="Valor"  onChange={addValue}  />
                 
                    <Selects
                    defaultValue={types[data.type-1]}
                     options={types}/>
                    <Selects
                     defaultValue={situation[data.situation-1]}
                     options={situation}/>
                    <Inputs type="date" name="dataLan"  defaultValue={data && getItemDate(data, "full")} onChange={addValue} />
                    <Buttons typeButton="success-outline" type="submit">Alterar</Buttons>
          </Form>
     )
}

export default memo(FormAlterItem);