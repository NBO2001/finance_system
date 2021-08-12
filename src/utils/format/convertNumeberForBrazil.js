
const convertNumeberForBrazil = (enPadrao) => {
     let tempVal = parseFloat(enPadrao).toFixed(2);
     let brPadrao = (`${tempVal}`).replace('.',',');

     return brPadrao;

}

export default convertNumeberForBrazil;