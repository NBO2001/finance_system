import { combineReducers  } from "redux";

import resulSum from '../modules/resulSum';
import dataMonth from "../modules/dataMonth";
import alerts from "../modules/alerts";

export default combineReducers({
    resulSum,
    dataMonth,
    alerts,
});