import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import {useSelector, useDispatch} from 'react-redux';
import { getAllCountries } from "../../redux/actions";

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

    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch])

    const handleSubmit = (form) => {
        if( !form.name || !form.difficulty || !form.duration || !form.season || 
            !form.season==='' ||!form.difficulty===''){
                alert('Complete all the required fields');
        }
    };

    const handleChange = (data) => {
        setForm({
            ...form,
            [data.target.name]: data.target.value
        });
    };

    return(
        <div>
            <Nav />
            <div>
                <h1>New Activity</h1>
                <form className="form" onSubmit={(form) => handleSubmit(form)}>
                    <div>
                        <label>Activity Name:</label>
                        <input className="input" id="name" name="name" type='text' value={form.name} onChange={text => handleChange(text)} required/>
                    </div>
                    <div>
                        <label>Difficulty:</label>
                        <select className="input" name="difficulty" defaultValue={form.difficulty} onChange={option => handleChange(option)}>
                            <option value=''></option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                    </div>
                    <div>
                        <label>Time Length:</label>
                        <input className="input" name="duration" type='number' min='1' max='20' value={form.duration}/>
                    </div>
                    <div>
                        <label>Season:</label>
                        <select className="input" name="season" defaultValue={form.season} onChange={season => handleChange(season)}>
                            <option value=''></option>
                            <option value='Winter'>Winter</option>
                            <option value='Spring'>Spring</option>
                            <option value='Summer'>Summer</option>
                            <option value='Fall'>Fall</option>
                        </select>
                    </div>
                    <div>
                        <label>Countries:</label>
                        <select className="input" name="countries" defaultValue={form.countries} onChange={countries => handleChange(countries)} size="10" multiple>
                            {countries && countries?.map(c => (
                                <option value={c.id} key={c.id}>{c.name}</option>
                            ))}
                        </select>

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