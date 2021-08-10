const Types= {
     SET_ALERT: "alerts/SET_ALERT",
};

const initalState={};

export default function reducer(state=initalState, action){
     switch(action.type){
          case Types.SET_ALERT:
               return {...state, alert: action.playload}
          default:
               return {...state};
     }
}

export function setAlert(alert){
     return {
          type: Types.SET_ALERT,
          playload: alert,
     }
}