import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchCountries } from "../../redux/actions";
import {FaSearch} from 'react-icons/fa';
import './SearchBar.css';

export const SearchBar = ({setFilterSelection}) => {

    const defaultSelection = {
        name: "",
        population: "",
        continent: "All",
        season: "All",
        activity: "All"
    }

    const dispatch = useDispatch();
    const [ country, setCountry ] = useState('');

    const handleInputChange = (e) => {
        e.preventDefault()
        setCountry(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(getSearchCountries(country))
        setFilterSelection(defaultSelection);
    }

    return (
        <div className="search-box">
            <input className="search-text" name="searchCountry" type="text" placeholder="Search..." onChange={e => handleInputChange(e)}></input>
            <button className="search-btn" type="submit" onClick={(e) => onSubmit(e)}><FaSearch /></button>
        </div>
    )
};
