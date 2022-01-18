import { ALL_COUNTRIES, COUNTRY_BY_ID, FILTER_BY_SEASON, FILTER_BY_ACTIVITY, FILTER_BY_CONTINENT, SEARCH_COUNTRIES, ORDER_BY_COUNTRY, ORDER_BY_POPULATION } from '../actions/actionNames';

const initialState = {
    countries: [],
    allCountries: [],
    countryDetails: []
}

const countryReducer = (state = initialState, action) => {
    switch(action.type){
        case ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            };
        case COUNTRY_BY_ID:
            return {
                ...state,
                countryDetails: action.payload
            };

        case SEARCH_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            };

        case FILTER_BY_CONTINENT:
            const allCountriesContinent = state.allCountries;
            const countriesFilteredContinent = action.payload === 'All' ? allCountriesContinent : allCountriesContinent.filter(c => c.continent === action.payload)
            return {
                ...state,
                countries: countriesFilteredContinent
            };

        case FILTER_BY_ACTIVITY:
            const allCountriesActivity = action.payload === 'All' ? state.allCountries : state.allCountries.filter(a => {
                var act = a.activities?.find(b => b.name === action.payload)
                return act !== undefined;
            })
        
            return {
                ...state,
                countries: allCountriesActivity
            }

        case FILTER_BY_SEASON:
            const allCountriesSeason = action.payload === 'All' ? state.allCountries : state.allCountries.filter(a => {
                var act = a.activities?.find(b => b.season === action.payload)
                return act !== undefined;
            })
            return {
                ...state,
                countries: allCountriesSeason
            }

        case ORDER_BY_COUNTRY:
            let countriesOrder = action.payload === 'ASC' ? state.countries.sort((a, b) => {
                if(a.name > b.name) return 1; 
                if(a.name < b.name) return -1; 
                return 0
            }):state.countries.sort((a, b) => {
                if(a.name < b.name) return 1; 
                if(a.name > b.name) return -1; 
                return 0
            })
            return {
                ...state,
                countries: countriesOrder
            }

        case ORDER_BY_POPULATION:
            let countriesOrderPop = action.payload === 'ASC' ? state.countries.sort((a, b) => {
                if(a.population > b.population) return 1; 
                if(a.population < b.population) return -1; 
                return 0
            }):state.countries.sort((a, b) => {
                if(a.population < b.population) return 1; 
                if(a.population > b.population) return -1; 
                return 0
            })
            return {
                ...state,
                countries: countriesOrderPop
            }

        default:
            return state;
    }
}

export default countryReducer;