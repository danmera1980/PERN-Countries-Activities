import axios from 'axios';
import { ALL_COUNTRIES, COUNTRY_BY_ID, NEW_ACTIVITY, ACTIVITIES_BY_COUNTRY_ID, COUNTRIES_SEARCH } from './actionNames';

export const getAllCountries = () => {
    return async (dispatch) => {
        var results = await axios.get('http://localhost:3001/countries');
        return dispatch({
            type: ALL_COUNTRIES,
            payload: results.data
        })
    }
}

export const getSearchCountries(payload) => {
    return async (dispatch) => {
        var results = await axios.get('http://localhost:3001/countries/' + payload);
        return dispatch({
            type: COUNTRIES_SEARCH,
            payload: results.data
        })
    }
};

export const getCountryById = (id) => {
    return async (dispatch) => {
        let results = await axios.get("http://localhost:3001/countries/" + id);
        dispatch({
            type: COUNTRY_BY_ID,
            payload: results.data
        })
    }
};

export const getActivitiesByCountryID = (id) => {
    return async (dispatch) => {
        let results = await axios.get("http://localhost:3001/activities/" + id);
        dispatch({
            type: ACTIVITIES_BY_COUNTRY_ID,
            payload: results.data
        })
    }
};

export const postNewActivity = (data) => {
    try {
        return async (dispatch) => {
            let results = await axios.post('http://localhost:3001/activities',data);
            dispatch({
                type: NEW_ACTIVITY,
                payload: results.data
            })
        }
    // eslint-disable-next-line no-unreachable
    } catch (e) {
        console.log(e.results.data);
    }

}