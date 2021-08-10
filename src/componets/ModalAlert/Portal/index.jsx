import reactDom from "react-dom";

const Portal = ({children}) => {

     const div = document.getElementById('alerts');

     return reactDom.createPortal(children, div);
}

export default Portal;