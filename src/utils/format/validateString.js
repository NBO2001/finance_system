
const validateString = (name) => {
     let nameEnd = name.split(' ');
     let arrayValue = [];

     for(let a = 0; a < nameEnd.length; a++){
          if(nameEnd[a]){
               arrayValue.push(nameEnd[a])
          }
     }
     nameEnd = arrayValue.join(' ')
     return nameEnd;
}

export default validateString;