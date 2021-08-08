
const getSituation = (type) => {
     switch(parseInt(type)){
          case 1:
              return "Não-Paga";
          case 2:
              return "Paga"
          case 3:
              return "Recebido"
          case 4:
              return "Não-Recebido";
          default:
              return "Recebido";
      }
}

export default getSituation;