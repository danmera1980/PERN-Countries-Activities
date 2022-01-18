import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Nav from "../Nav/Nav";
import {useSelector, useDispatch} from 'react-redux';
import { getAllCountries, postNewActivity } from "../../redux/actions";
import './activity.scss';

function Activity(){
    const formState ={
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
    }
    const [ form, setForm ] = useState(formState);
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries.countries);
    const [ errors, setErrors ] = useState({});
    const history = useHistory();

    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch])

    const handleSubmit = (e) => {
        // console.log(form)
        // console.log(errors)
        
        e.preventDefault()
        if( !form.name || !form.difficulty || !form.duration || !form.season || 
            !form.season==='' ||!form.difficulty==='' || 
            errors.hasOwnProperty('name') || errors.hasOwnProperty('difficulty') || 
            errors.hasOwnProperty('duration') || errors.hasOwnProperty('season') || errors.hasOwnProperty('countries')){
                alert('Complete and correct all the required fields');
        } else {
            dispatch(postNewActivity(form));
            alert('New Activity Created!')
            setForm({
                name: '',
                difficulty: '',
                duration: '',
                season: '',
                countries: []
            })
            history.push('/home');
        }

    };

    const check = (data) => {
        let errors = {};
        if(data.name === ''){
            errors.name = 'Please enter a name for the activity';
        } else  if(!/^[a-zA-Z0-9\_\-\' ']{2,20}$/.test(data.name)) { // eslint-disable-line
            errors.name = 'Enter a name that has between 2 and 20 characters long. No symbols please!';
        }

        if(data.difficulty === ''){
            errors.difficulty = 'Please select a difficulty level!';
        }

        if(data.duration === ''){
            errors.duration = 'Please enter an amount of time!';
        } else if(!/^([0-1]?[0-9]|20)$/.test(data.duration) || /\D+/.test(data.duration)) {
            errors.duration = 'Only numbers from 0 t0 20 please!';
        } 

        if(data.season === ''){
            errors.season = 'Please select a season!';
        }

        if(data.countries.length === 0){
            errors.countries = 'Please select at least one country!';
        }

        return errors;
    }

    const handleChange = (data) => {
        if(data.target.name==='countries'){
            let value = Array.from(data.target.selectedOptions, option => option.value);
            setForm({
                ...form,
                countries: value
            })
            setErrors(check({
                ...form,
                countries: value
            }))
        } else {
            setForm({
                ...form,
                [data.target.name]: data.target.value
            });
            setErrors(check({
                ...form,
                [data.target.name]: data.target.value
            }))
        }
    };

    // console.log(form)

    return(
        <div>
            <Nav />
            <div className="activityMain">
                <h1>New Activity</h1>
                <form className="form" onSubmit={(form) => handleSubmit(form)}>
                    <div>
                        <label>Activity Name:</label>
                        <input className="input" id="name" name="name" type='text' value={form.name} onChange={text => handleChange(text)} required/>
                        {errors.name ? <span className="error">{errors.name}</span>: null}
                    </div>
                    <div>
                        <label>Difficulty:</label>
                        <select className="input" name="difficulty" defaultValue={form.difficulty} onChange={option => handleChange(option)} required>
                            <option value=''></option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                        {errors.difficulty ? <span className="error">{errors.difficulty}</span>: null}
                    </div>
                    <div>
                        <label>Time Length:</label>
                        <input className="input" name="duration" type='number' min='1' max='20' value={form.duration}  onChange={number => handleChange(number)} required/> hours
                        {errors.duration ? <span className="error">{errors.duration}</span>: null}
                    </div>
                    <div>
                        <label>Season:</label>
                        <select className="input" name="season" defaultValue={form.season} onChange={season => handleChange(season)} required>
                            <option value=''></option>
                            <option value='Winter'>Winter</option>
                            <option value='Spring'>Spring</option>
                            <option value='Summer'>Summer</option>
                            <option value='Fall'>Fall</option>
                        </select>
                        {errors.season ? <span className="error">{errors.season}</span>: null}
                    </div>
                    <div>
                        <label>Countries:</label>
                        <select className="input" name="countries" defaultValue={form.countries} onChange={countries => handleChange(countries)} size="10" multiple required>
                            {countries && countries?.map(c => (
                                <option value={c.id} key={c.id}>{c.name}</option>
                            ))}
                        </select>
                        {errors.countries ? <span className="error">{errors.countries}</span>: null}

                    </div>
                    <div>
                        <button className="newButton" type="submit">Create Activity</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Activity;