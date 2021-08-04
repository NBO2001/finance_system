import { memo, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { DivMonthDeth, TableRegists } from "../../componets";
import AddRegistersDispatch from "../../utils/functions/AddRegistersDispatch";
import AddSumMonthDispatch from "../../utils/functions/AddSumMonthDispatch";

const Month = () => {

    const [ date, setDate  ] = useState({
        month: 8,
        year: 2021
    })

    let history = useHistory();
    AddSumMonthDispatch(date.month, date.year);
    AddRegistersDispatch(date.month, date.year);
    useEffect( () => {
         
    }, [date])

    function handleClick() {
        history.push("/");
    }
    const prevMonth = () => {
        let valMonth;
        let yearNow = date.year;
        if(date.month > 1 && date.month <= 12){
            valMonth = date.month - 1;
        }
        else if(date.month === 1){
            valMonth = 12;
            yearNow = yearNow - 1;
        }
        setDate({
            month: valMonth,
            year: yearNow
        });
    }

    const nextMonth = () => {
        let valMonth;
        let yearNow = date.year;
        if(date.month >= 1 && date.month < 12){
            valMonth = date.month + 1;
        }
        else if(date.month === 12){
            valMonth = 1;
            yearNow = yearNow + 1;
        }
        setDate({
            month: valMonth,
            year: yearNow
        });
    }

    return(
        <>
            <button type="button" onClick={handleClick}>
                Go home
            </button>

            <div>
                <button type="button" onClick={prevMonth}> Anterior </button>
                    <p>{date && date.year}</p>
                    <DivMonthDeth />
                <button type="button" onClick={nextMonth}> Posterior </button>
            </div>
            <TableRegists />
       
        </>
    )

}

export default memo(Month);