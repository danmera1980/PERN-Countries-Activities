import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchCountries } from "../../redux/actions";
import './SearchBar.scss';
import {FaSearch} from 'react-icons/fa';

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
        <div className="search-box">
            <input className="search-text" name="searchCountry" type="text" placeholder="Search..." onChange={e => handleInputChange(e)}></input>
            <button className="search-btn" type="submit" onClick={(e) => onSubmit(e)}><FaSearch /></button>
        </div>
    )
};
