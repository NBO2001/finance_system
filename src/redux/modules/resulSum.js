const Types = {
    SET_SUM: "resulSum/SET_SUM",
    SET_SUMMONTH: "resulSum/SET_SUMMONTH"
}

const initalState = [];

export default function reducer(state=initalState, action){
    
    switch(action.type){
        case Types.SET_SUM:
            return { ...state, sum: action.playload}
        case Types.SET_SUMMONTH:
            return { ...state, month: action.playload}
        default:
            return {...state}
    }

}

export function setSums(sum){
    
    return {
        type: Types.SET_SUM,
        playload: sum,
    }
}

export function setConsultMonth(month){
    return{
        type: Types.SET_SUMMONTH,
        playload: month,
    }
}