import countryReducer from "./country";
import { combineReducers } from "redux";
import activityReducer from "./activities";

const allReducers = combineReducers({
    countries: countryReducer,
    activities: activityReducer
});

export default allReducers;
