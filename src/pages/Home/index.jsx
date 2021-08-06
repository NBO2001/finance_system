import { memo, useState } from "react";
import { useHistory } from "react-router-dom";
import AddSumDispatch from "../../utils/functions/AddSumDispatch";
import { DivMonth, DivYear, Modal } from "../../componets";
import addNewRegister from "../../utils/requests/addNewRegister";

const Home = () => {
    const month = 8;
    const year = 2021;
    let history = useHistory();
    const [modalOpened, setModalOpened] = useState(false);
    const [register, setRegister] = useState({
        name: '',
        val: '',
        type: '',
        situation: '',
        dataLan: ''
    })
    AddSumDispatch(month, year, false);

   const handleClick  = () => {
        history.push("/month");
    }
    const openModal = () => {
        setModalOpened(true);
    }
    const addValue = (e) => {
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        });
    } 
    const sendBack = async (e) => {
        e.preventDefault();
        await addNewRegister(register).then(() => {
            setModalOpened(false)
        });
    }
    
    return(
        <>
            <button type="button" onClick={() => openModal()}> Adicionar Registro</button>
            <div>
            
                <DivMonth monthName={month} onClick={handleClick}/>
                <DivYear yearName={year}/>
            </div>

            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
                <form onSubmit={sendBack}>
                    <input type="text" name='name' onChange={addValue}/>
                    <input type="text" name='val'  onChange={addValue} />
                    <select name="type" onChange={addValue}>
                        <option >Options</option>
                        <option value="1">Receita</option>
                        <option value="2">Investimento</option>
                        <option value="3">Dívida</option>
                    </select>
                    <select name="situation" onChange={addValue}>
                        <option >Options</option>
                        <option value="2">Paga</option>
                        <option value="1">Não-Paga</option>
                    </select>
                    <input type="date" name="dataLan" onChange={addValue}/>
                    <button type="submit">Adicionar</button>
                </form>
            </Modal>
        </>
    )
}

export default memo(Home);