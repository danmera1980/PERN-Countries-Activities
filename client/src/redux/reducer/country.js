
import { ALL_COUNTRIES, COUNTRY_BY_ID } from '../actions/actionNames';

const initialState = {
    countries: [],
    countryDetails: []
}

const countryReducer = (state= initialState, action) => {
    switch(action.type){
        case ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            };
        case COUNTRY_BY_ID:
            return {
                ...state,
                countryDetails: action.payload
            };
        default:
            return state;
    }
}

export default countryReducer;