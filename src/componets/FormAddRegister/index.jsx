import {Form, Inputs, Selects, Buttons} from "../../componets";
import { useState, useMemo } from "react";
import addNewRegister from "../../utils/requests/addNewRegister";
import { useDispatch } from "react-redux";
import  { setAlert } from "../../redux/modules/alerts";
import getOptionsValues from "../../utils/format/getOptionsValues";
import validadeForm from "../../utils/functions/validadeForm";

const FormAddRegister = () => {
    const dispatch = useDispatch();
    const [register, setRegister] = useState({});

    const [ opt, setOpt ] = useState({});

    const opts = useMemo(() => ({opt, setOpt}),[opt, setOpt ]);

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
    const values= [
        {value: "1", label: opts.opt.one, name:"situation"},
        {value: "2", label: opts.opt.two, name:"situation"},
    ]
     const sendBack = async (e) => {
          e.preventDefault();
          const data = validadeForm(register);
          if(data){
              await addNewRegister(data).then((res) => {
                    dispatch(setAlert(res))
                   e.target.name.value = "";
                   e.target.val.value = "";
                   e.target.dataLan.value = "";
              });

          }else{
            dispatch(setAlert({
                error: true,
                mensage: "Preencha os campos"
            }))
          }
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
                     options={values}/>
                    <Inputs type="date" name="dataLan" onChange={addValue} />
                    <Buttons typeButton="success-outline" type="submit">Adicionar</Buttons>
          </Form>
     )

}

export default FormAddRegister;