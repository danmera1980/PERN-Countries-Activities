import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByContinent, filterByActivity, filterBySeason, getAllActivities, filterByPopulation } from '../../redux/actions';
import './Filter.css'

export const Filter = ({filterSelection, setFilterSelection}) => {

    const dispatch = useDispatch();
    const activities = useSelector(state => state.activities.activities)

    useEffect(() => {
        dispatch(getAllActivities())
    }, [dispatch])

    const handleSelectContinent = (e) => {
        // console.log(e.target.value)
        e.preventDefault();
        dispatch(filterByContinent(e.target.value))
        setFilterSelection({
            continent: e.target.value
        })
    };

    const handleSelectSeason = (e) => {
        // console.log(e.target.value)
        e.preventDefault();
        dispatch(filterBySeason(e.target.value))
        setFilterSelection({
            season: e.target.value
        })
    };

    const handleSelectActivity = (e) => {
        // console.log(e.target.value)
        e.preventDefault();
        dispatch(filterByActivity(e.target.value))
        setFilterSelection({
            activity: e.target.value
        })
    };

    const handleSelectPopulation = (e)=> {
        e.preventDefault();
        dispatch(filterByPopulation(e.target.value))
        // setFilterSelection({
        //     population: e.target.value
        // })
    }

    return (
        <div>
            <div className='filters'>
                <label>Continent</label>
                <select onChange={e => handleSelectContinent(e)} value={filterSelection}>
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
                <select onChange={e => handleSelectSeason(e)} value={filterSelection}>
                    <option value='All'>All</option>
                    <option value='Winter'>Winter</option>
                    <option value='Spring'>Spring</option>
                    <option value='Summer'>Summer</option>
                    <option value='Fall'>Fall</option>
                </select>
            </div>  
            <div className='filters'>
                <label>Population</label>
                <select onChange={e => handleSelectPopulation(e)} value={filterSelection}>
                    <option value='All'>All</option>
                    <option value='50000'>50000</option>
                </select>
            </div> 
            <div className='filters'>
                <label>Activity</label>
                <select onChange={e => handleSelectActivity(e)} value={filterSelection}>
                    <option value='All'>All</option>
                    {activities && activities?.map(a => (
                        <option value={a.name} key={a.id}>{a.name}</option>
                    ))}
                </select>
            </div>       
        </div>
    )
}
