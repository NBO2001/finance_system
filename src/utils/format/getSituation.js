
const getSituation = (type, situation) => {
    switch(parseInt(type)){
        case 1:
            if(parseInt(situation) === 1){
                return "Recebido"
            }else{
                return "A receber"
            }
        case 2:
            if(parseInt(situation) === 1){
                return "Investido"
            }else{
                return "A investir"
            }
        case 3:
            if(parseInt(situation) === 1){
                return "Paga"
            }else{
                return "A pagar"
            }
        default:
            if(parseInt(situation) === 1){
                return "Recebido"
            }else{
                return "A receber"
            }
    }

}

export default getSituation;