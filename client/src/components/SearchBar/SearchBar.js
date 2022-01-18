import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchCountries } from "../../redux/actions";

export const SearchBar = () => {
    const dispatch = useDispatch();
    const [ country, setCountry ] = useState('');

    const handleInputChange = (e) => {
        e.preventDefault()
        setCountry(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(getSearchCountries(country))
    }

    return (
        <div>
            <input name="searchCountry" type="text" placeholder="Search..." onChange={e => handleInputChange(e)}></input>
            <button type="submit" onClick={(e) => onSubmit(e)}>Search</button>
        </div>
    )
};
