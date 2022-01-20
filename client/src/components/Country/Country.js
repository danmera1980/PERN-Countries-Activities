/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Nav from "../Nav/Nav";
import { useSelector, useDispatch} from 'react-redux';
import { getCountryById, getActivitiesByCountryID } from "../../redux/actions";
import './country.scss';

function Country(props){
    const dispatch = useDispatch();
    const country = useSelector(state => state.countries.countryDetails);
    const activities = useSelector(state => state.activities.activitiesCountries?.activities);
    // console.log(activities)

    useEffect(() => {
        dispatch(getCountryById(props.match.params.id));
    }, [dispatch])

    useEffect(() => {
        dispatch(getActivitiesByCountryID(props.match.params.id));
    }, [dispatch])

    // console.log(activities)

    return(
        <div>
            <Nav/>
            <div className="details">
                <h2 className="title">{country.name}</h2>
                <div className="content">
                    <img className="flag" src={country.imageUrl} alt="Not found"/>
                </div>
                <div className="info">
                    <h2>DETAILS</h2>
                    <h3>CODE: <span>{country.id}</span></h3>
                    <h3>CONTINENT: <span>{country.continent}</span></h3>
                    <h3>CAPITAL: <span>{country.capital}</span></h3>
                    <h3>SUBREGION: <span>{country.subregion}</span></h3>
                    <h3>AREA: <span>{Number(country.area).toLocaleString()} km<sup>2</sup></span></h3>
                    <h3>POPULATION: <span>{Number(country.population).toLocaleString()} people</span></h3>
                    <div className="activities">
                        <h2>ACTIVITIES</h2>
                        <ul>
                            {activities && activities?.map(a => (
                                <li key={a.id}>
                                    <div>{a.name} --</div>
                                    <div>> {a.season}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Country;