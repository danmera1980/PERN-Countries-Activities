import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByContinent, filterByActivity, filterBySeason, getAllActivities } from '../../redux/actions';
import './Filter.scss'

export const Filter = () => {

    const dispatch = useDispatch();
    const activities = useSelector(state => state.activities.activities)

    useEffect(() => {
        dispatch(getAllActivities())
    }, [dispatch])

    const handleSelectContinent = (e) => {
        console.log(e.target.value)
        e.preventDefault();
        dispatch(filterByContinent(e.target.value))
    };

    const handleSelectSeason = (e) => {
        // console.log(e.target.value)
        e.preventDefault();
        dispatch(filterBySeason(e.target.value))
    };

    const handleSelectActivity = (e) => {
        // console.log(e.target.value)
        e.preventDefault();
        dispatch(filterByActivity(e.target.value))
    };

    return (
        <div>
            <div className='filters'>
                <label>Continent</label>
                <select onChange={e => handleSelectContinent(e)}>
                    <option value='All'>All</option>
                    <option value='Americas'>Americas</option>
                    <option value='Asia'>Asia</option>
                    <option value='Africa'>Africa</option>
                    <option value='Europe'>Europe</option>
                    <option value='Oceania'>Oceania</option>
                    <option value='Antarctic'>Antarctic</option>
                </select>
            </div> 
            <div className='filters'>
                <label>Season</label>
                <select onChange={e => handleSelectSeason(e)}>
                    <option value='All'>All</option>
                    <option value='Winter'>Winter</option>
                    <option value='Spring'>Spring</option>
                    <option value='Summer'>Summer</option>
                    <option value='Fall'>Fall</option>
                </select>
            </div> 
            <div className='filters'>
                <label>Activity</label>
                <select onChange={e => handleSelectActivity(e)}>
                    <option value='All'>All</option>
                    {activities && activities?.map(a => (
                        <option value={a.name} key={a.id}>{a.name}</option>
                    ))}
                </select>
            </div>       
        </div>
    )
}
