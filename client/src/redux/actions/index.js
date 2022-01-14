import axios from 'axios';
import { ALL_COUNTRIES, COUNTRY_BY_ID } from './actionNames';

export let getAllCountries = () => {
    return async (dispatch) => {
        let results = await axios.get("http://localhost:3001/countries");
        console.log(results);
        dispatch({
            type: ALL_COUNTRIES,
            payload: results.data
        })
    }
}

export let countryById = (id) => {
    return async (dispatch) => {
        let results = await axios.get("http://localhost:3001/coutries/" + id);
        dispatch({
            type: COUNTRY_BY_ID,
            payload: results.data
        })
    }
}