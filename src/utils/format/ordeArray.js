import PropTypes from "prop-types";

const ordeArray = (array, ordem) => {
     if(!array) return false;
     
     switch(ordem){
          case "menor":
               return array.sort(function(a,b){
                    if(a > b) return 1;
                    if(a < b) return -1
                    return 0;
               });
          default:
               return array.sort(function(a,b){
                    if(a < b) return 1;
                    if(a > b) return -1
                    return 0;
               });
     }
     
}

export default ordeArray;

ordeArray.PropTypes = {
     array: PropTypes.array,
     ordem: PropTypes.string
}