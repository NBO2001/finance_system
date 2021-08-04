import { memo } from "react";
import { useSelector } from "react-redux";

const TableRegists = () => {
    const dataMonth = useSelector(state => state.dataMonth);

    console.log(dataMonth);
    return(
        <p>Hey</p>
    )

}

export default memo(TableRegists);