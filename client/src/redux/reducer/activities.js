import { NEW_ACTIVITY, ACTIVITIES_BY_COUNTRY_ID } from "../actions/actionNames";

const initialState = {
    activities: []
}

const activityReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_ACTIVITY:
            return{
                ...state,
                activities: action.payload
            }

        case ACTIVITIES_BY_COUNTRY_ID:
            return {
                ...state,
                activities: action.payload
            }
    
        default:
            return state;
    }
}

export default activityReducer