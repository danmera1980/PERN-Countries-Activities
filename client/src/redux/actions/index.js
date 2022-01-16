import axios from 'axios';
import { ALL_COUNTRIES, COUNTRY_BY_ID } from './actionNames';

export const getAllCountries = () => {
    return async (dispatch) => {
        var results = await axios.get('http://localhost:3001/countries');
        // console.log(results.data);
        return dispatch({
            type: ALL_COUNTRIES,
            payload: results.data
        })
    }
}
export const countryById = (id) => {
    return async (dispatch) => {
        let results = await axios.get("http://localhost:3001/coutries/" + id);
        dispatch({
            type: COUNTRY_BY_ID,
            payload: results.data
        })
    }
}