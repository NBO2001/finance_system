
const getOptionsValues = (type) => {
     switch(type){
          case 1:
               return {
                    one: "Recebido",
                    two: "A receber"
               }
          case 2:
               return {
                    one: "Investido",
                    two: "A investir"
               }
          case 3:
               return {
                    one: "Pago",
                    two: "A pagar"
               }
          default:
               return null;
     }
}

export default getOptionsValues;