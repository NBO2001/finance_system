import PropTypes from "prop-types";

const getItemDate = (date, index) => {
     if(!date){return false;}

     let dateSp = date.dataLan.split("T");
     let sepItens = dateSp[0].split("-");

     switch(index){
          case "full":
               return dateSp[0];
          case "year":
               return sepItens[0];
          case "month":
               return sepItens[1];
          default:
               return sepItens[2];
     }     
}

export default getItemDate;

getItemDate.PropTypes = {
     date: PropTypes.object,
     index: PropTypes.string
}