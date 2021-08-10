import { memo, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import getNowDate from "../../utils/format/getNowDate";
import AddSumDispatch from "../../utils/functions/AddSumDispatch";
import { DivMonth, DivYear, Modal, SectionWhite,
    TopBar, Buttons, DivCards, FormAddRegister, PageError } from "../../componets";
import { useMemo } from "react";


const Home = () => {
    
    const date = getNowDate();

    const [ net, setNet ] = useState();
    const memoNet = useMemo(() => ( {net, setNet} ),[ net, setNet ])

    let history = useHistory();
    const [modalOpened, setModalOpened] = useState(false);
    
    const addSum = useCallback(() => {
        const server = async () => {
            const res = await AddSumDispatch(date);
            
            if(res && res.error){
                memoNet.setNet(res.mensage)

            }else{
                memoNet.setNet(false)
            }
        }
        server();
    },[date,memoNet]);

    addSum();

    const handleClick  = (away) => history.push(`/${away}`);

    const openModal = () => setModalOpened(true);
    
    if(memoNet.net) return (<PageError />)

    return(
        <>
            <SectionWhite>
                <TopBar>
                    <Buttons typeButton="success" type="button"  onClick={() => openModal()}> Adicionar valor</Buttons>
                </TopBar>

                <DivCards>
                
                    <DivMonth monthName={date.month} onClick={() => handleClick("month")}/>
                    <DivYear yearName={date.year} onClick={() => handleClick("year")}/>
                    
                </DivCards>
            </SectionWhite>
    
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
                <FormAddRegister />
                <Buttons typeButton="exit" onClick={() => setModalOpened(false)}>Sair</Buttons>
            </Modal>
        </>
    )
}

export default memo(Home);