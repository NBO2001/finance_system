const Types = {
    SET_SUM: "resulSum/SET_SUM",
    SET_SUMMONTH: "resulSum/SET_SUMMONTH",
    SET_PERIOD: "resulSum/SET_PERIOD",
}

const initalState = [];

export default function reducer(state=initalState, action){
    
    switch(action.type){
        case Types.SET_SUM:
            return { ...state, sum: action.playload}
        case Types.SET_SUMMONTH:
            return { ...state, month: action.playload}
        case Types.SET_PERIOD:
            return { ...state, period: action.playload}
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

export function setPeriod(period){
    return{
        type: Types.SET_PERIOD,
        playload: period,
    }
}