import axios from 'axios';
import { ALL_COUNTRIES, COUNTRY_BY_ID, NEW_ACTIVITY, ACTIVITIES_BY_COUNTRY_ID } from './actionNames';

export const getAllCountries = () => {
    return async (dispatch) => {
        var results = await axios.get('http://192.168.50.106:3001/countries');
        // console.log(results.data);
        return dispatch({
            type: ALL_COUNTRIES,
            payload: results.data
        })
    }
}
export const getCountryById = (id) => {
    return async (dispatch) => {
        let results = await axios.get("http://192.168.50.106:3001/countries/" + id);
        dispatch({
            type: COUNTRY_BY_ID,
            payload: results.data
        })
    }
};

export const getActivitiesByCountryID = (id) => {
    return async (dispatch) => {
        let results = await axios.get("http://192.168.50.106:3001/activities/" + id);
        dispatch({
            type: ACTIVITIES_BY_COUNTRY_ID,
            payload: results.data
        })
    }
};

export const postNewActivity = (data) => {
    try {
        return async (dispatch) => {
            let results = await axios.post('htt[://192.168.50.106:3001/activity',data);
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