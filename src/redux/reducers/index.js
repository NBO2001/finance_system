import { combineReducers  } from "redux";

import resulSum from '../modules/resulSum';
import dataMonth from "../modules/dataMonth";

export default combineReducers({
    resulSum,
    dataMonth,
});