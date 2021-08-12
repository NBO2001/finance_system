
const convertNumbers = (number) => {

     let num = number.replace(' ','');
     num = num.replace(',','.');
     let numSplit =  num.split('.');
     if(numSplit.length <= 2){
          return parseFloat(num);
     }
     let tempArray = [];
     for(let a=0; a < (numSplit.length-1); a++ ){
          tempArray.push(numSplit[a]);
     }
     num = tempArray.join('');
     
     const valueEnd = parseFloat(`${num}.${numSplit[numSplit.length-1]}`);
     return valueEnd;
}

export default convertNumbers;