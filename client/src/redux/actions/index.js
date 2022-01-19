/* eslint-disable no-unreachable */
import axios from 'axios';
import { ALL_COUNTRIES, ALL_ACTIVITIES, COUNTRY_BY_ID, NEW_ACTIVITY, ACTIVITIES_BY_COUNTRY_ID, SEARCH_COUNTRIES, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, FILTER_BY_SEASON, ORDER_BY_COUNTRY, ORDER_BY_POPULATION } from './actionNames';

export const getAllCountries = () => {
    return async (dispatch) => {
        var results = await axios.get('http://localhost:3001/countries');
        return dispatch({
            type: ALL_COUNTRIES,
            payload: results.data
        })
    }
}

export const getSearchCountries = (payload) => {
    try {
        return async (dispatch) => {
            var results = await axios.get('http://localhost:3001/countries?name=' + payload)
                .catch(e => {
                    if(e.response.status === 404){
                        return dispatch({
                            type: SEARCH_COUNTRIES,
                            payload: []
                        })
                    }
                })
            return dispatch({
                type: SEARCH_COUNTRIES,
                payload: results.data
            })
        }
    }
    catch(error){
        console.log(error)
    }
};

export const filterByContinent = (payload) => {
    try {
        return {
            type: FILTER_BY_CONTINENT,
            payload
        }
    } catch (error) {
        console.log(error);
    }
}

export const filterByActivity = (payload) => {
    try {
        return {
            type: FILTER_BY_ACTIVITY,
            payload
        }
    } catch (error) {
        console.log(error);
    }
}

export const filterBySeason = (payload) => {
    try {
        return {
            type: FILTER_BY_SEASON,
            payload
        }
    } catch (error) {
        console.log(error);
    }
}

export const getCountryById = (id) => {
    return async (dispatch) => {
        let results = await axios.get("http://localhost:3001/countries/" + id);
        dispatch({
            type: COUNTRY_BY_ID,
            payload: results.data
        })
    }
};

export const orderCountriesByName = (payload) => {
    try {
        return {
            type: ORDER_BY_COUNTRY,
            payload
        }
    } catch (error) {
        console.log(error);
    }
}

export const orderCountriesByPopulation = (payload) => {
    try {
        return {
            type: ORDER_BY_POPULATION,
            payload
        }
    } catch (error) {
        console.log(error);
    }
}

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

export const getAllActivities = () => {
    try {
        return async (dispatch) => {
            let results = await axios.get('http://localhost:3001/activities');
            dispatch({
                type: ALL_ACTIVITIES,
                payload: results.data
            })
        }
    } catch (error) {
        console.log(error)
    }
}