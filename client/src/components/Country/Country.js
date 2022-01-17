/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Nav from "../Nav/Nav";
import { useSelector, useDispatch} from 'react-redux';
import { getCountryById, getActivitiesByCountryID } from "../../redux/actions";
import './country.scss';

function Country(props){
    const dispatch = useDispatch();
    const country = useSelector(state => state.countries.countryDetails);
    const activities = useSelector(state => state.activities.activities.activities);

    useEffect(() => {
        dispatch(getCountryById(props.match.params.id));
    }, [dispatch])

    useEffect(() => {
        dispatch(getActivitiesByCountryID(props.match.params.id));
    }, [dispatch])

    console.log(activities)

    return(
        <div>
            <Nav/>
            <div className="details">
                <h2>{country.name}</h2>
                <div className="content">
                    <img className="flag" src={country.imageUrl} alt="Not found"/>
                    <div className="info">
                        <h3> CODE: <span>{country.id}</span></h3>
                        <h3>CONTINENT: <span>{country.continent}</span></h3>
                        <h3>CAPITAL: <span>{country.capital}</span></h3>
                        <h3>SUBREGION: <span>{country.subregion}</span></h3>
                        <h3>AREA: <span>{Number(country.area).toLocaleString()} km<sup>2</sup></span></h3>
                        <h3>POPULATION: <span>{Number(country.population).toLocaleString()} people</span></h3>
                    </div>

                </div>
                <div className="activities">
                    <h2>ACTIVITIES</h2>
                    {activities && activities?.map(a => (
                        <p key={a.id}>{a.name}</p>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Country;