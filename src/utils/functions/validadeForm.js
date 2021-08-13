import PropTypes from "prop-types";
import convertNumber from "../format/convertNumbers";
import validateString from "../format/validateString";

const validadeForm = (form) => {
     let formEnd = {...form}

     if(formEnd.name){
          let name = validateString(formEnd.name);
          formEnd = {...formEnd, name}
     }else{
          return false;
     }
     if(formEnd.val){
          let val = convertNumber(formEnd.val);
          formEnd = {...formEnd, val}
     }else{
          return false;
     }
     if(!formEnd.type) return false;
     if(!formEnd.situation) return false;
     if(!formEnd.dataLan) return false;
     if(!formEnd.submission) return false;

     return formEnd;
}

export default validadeForm;

validadeForm.PropTypes={
     form: PropTypes.object
}