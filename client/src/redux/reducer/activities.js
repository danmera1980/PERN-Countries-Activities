import { ALL_ACTIVITIES, NEW_ACTIVITY, ACTIVITIES_BY_COUNTRY_ID } from "../actions/actionNames";

const initialState = {
    activities: [],
    activityCountries: []
}

const activityReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
                activitiesCountries: action.payload
            }
            
        case NEW_ACTIVITY:
            return {
                ...state,
                activityCountries: action.payload
            }

        case ACTIVITIES_BY_COUNTRY_ID:
            return {
                ...state,
                activitiesCountries: action.payload
            }
    
        default:
            return state;
    }
}

export default activityReducer