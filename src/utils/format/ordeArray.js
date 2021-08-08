
const ordeArray = (array) => {
 
     return array.sort(function(a,b){
          if(a < b) return 1;
          if(a > b) return -1
          return 0;
     });
}

export default ordeArray;