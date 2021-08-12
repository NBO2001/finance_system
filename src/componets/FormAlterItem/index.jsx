import {Form, Inputs, Selects, Buttons} from "../../componets";
import { useState, memo, useContext, useMemo } from "react";
import updateItem from "../../utils/requests/updateItem";
import getItemDate from "../../utils/format/getItemDate";
import { useDispatch } from "react-redux";
import  { setAlert } from "../../redux/modules/alerts";
import { Update } from "../../pages/Month/Update";
import getOptionsValues from "../../utils/format/getOptionsValues";
import validateFormUpdate from "../../utils/functions/validateFormUpdate";
import getSituation from "../../utils/format/getSituation";

const FormAlterItem = ({id, data}) => {
     const dispatch = useDispatch();
     
     const [ val, setVal] = useContext(Update);

    const [ opt, setOpt ] = useState(getOptionsValues(parseInt(data.type)));

    const opts = useMemo(() => ({opt, setOpt}),[opt, setOpt ]);

     const [register, setRegister] = useState({
          id
     });

     const defaulSit = [
          {label: getSituation(data.type,data.situation)},
     ]
    
     const addValue = (e) => {
          let keyElement;
          let valElement;
          if(e.target){
              keyElement = e.target.name;
              valElement = e.target.value;
              
          }else{
              keyElement = e.name;
              valElement = e.value;
              if(keyElement === "type"){
               opts.setOpt(getOptionsValues(parseInt(valElement)));
             }
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
     const situation= [
          {value: "1", label: opts.opt.one, name:"situation"},
          {value: "2", label: opts.opt.two, name:"situation"},
     ]

     const sendBack =  (e) => {
          e.preventDefault();
          const update = validateFormUpdate(register);

          if(update){
               updateItem(update).then((res) => {
                    dispatch(setAlert(res))
                    setVal(!val)
               });
          }else{
               dispatch(setAlert({
                    error: true,
                    mensage: "Nenhum dado alterado"
               }))
          }
    
     }
     
   
     return(
          <Form onSubmit={sendBack}>
                    <Inputs type="text" defaultValue={data && data.name}  name='name' placeholder="Descrição"  onChange={addValue} />
                    <Inputs type="text" defaultValue={data && data.val} name='val' placeholder="Valor"  onChange={addValue}  />
                 
                    <Selects
                    defaultValue={types[data.type-1]}
                     options={types}/>
                    <Selects
                    defaultValue={defaulSit}
                    onChange={addValue}
                     options={situation}/>
                    <Inputs type="date" name="dataLan"  defaultValue={data && getItemDate(data, "full")} onChange={addValue} />
                    <Buttons typeButton="success-outline" type="submit">Alterar</Buttons>
          </Form>
     )
}

export default memo(FormAlterItem);