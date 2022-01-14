import countryReducer from "./country";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    countryReducer
});

export default allReducers;