import validateString from "../format/validateString";
import convertNumber from "../format/convertNumbers";

const validateFormUpdate = (update) => {
     if((Object.keys(update).length) === 1) return false;
     let formEnd = {...update}

     if(formEnd.name){
          let name = validateString(formEnd.name);
          formEnd = {...formEnd, name}
     }
     if(formEnd.val){
          let val = convertNumber(formEnd.val);
          formEnd = {...formEnd, val}
     }

     return formEnd;
}
export default validateFormUpdate;