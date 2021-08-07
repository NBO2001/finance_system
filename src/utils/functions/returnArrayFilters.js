
const returnArrayFilters = (filter, filterValue) => {

     let type = filter.type;

     let valIdx = type.indexOf(filterValue);

     if(valIdx >= 0 && valIdx !== -1){
          type.splice(valIdx, 1);

         let tempTes = {
             ...filter,
             type
         }

       return tempTes;
     }else{
         let tempTes = {
             ...filter,
             type: [...type, filterValue]
         }

         return tempTes;
     }

}

export default returnArrayFilters;