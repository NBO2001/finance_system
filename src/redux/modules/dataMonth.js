const Types = {
    SET_REGDATA: "dataMonth/SET_REGDATA"
}

const initalState = [];

export default function reducer(state=initalState, action){
    switch(action.type){
        case Types.SET_REGDATA:
            return {...state, regData: action.playload}
        default:
            return {...state}
    }
}

export function setRegData(regData){
    return{
        type: Types.SET_REGDATA,
        playload: regData, 
    }
}