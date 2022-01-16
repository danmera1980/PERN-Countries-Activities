import countryReducer from "./country";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    countries: countryReducer
});

export default allReducers;
