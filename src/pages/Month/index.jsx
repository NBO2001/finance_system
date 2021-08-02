import { memo } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Month = () => {
    useSelector((state) => console.log(state));

  
    let history = useHistory();
      
    function handleClick() {
        history.push("/");
    }
    
    return(
     <button type="button" onClick={handleClick}>
      Go home
    </button>
    )

}

export default memo(Month);