const Types = {
    SET_SUM: "resulSum/SET_SUM"
}

const initalState = [];

export default function reducer(state=initalState, action){
    
    switch(action.type){
        case Types.SET_SUM:
            return { ...state, sum: action.playload}

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