import React, { useState, useEffect } from "react";
import CountryCards from "../Country/CountryCards";
import { useSelector, useDispatch } from 'react-redux';
import { getAllCountries } from "../../redux/actions";
import Nav from '../Nav/Nav';
import './Home.scss';
import { Pagination } from "../Pagination/Pagination";
import { SearchBar } from '../SearchBar/SearchBar';
import { Filter } from "../Filter/Filter";
import { orderCountriesByName, orderCountriesByPopulation } from '../../redux/actions';

function Home(){
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries.countries);
    const [ countriesPerPage ] = useState(10);
    const [ currentPage, setCurrentPage ] = useState(1);
    // const [ loading, setLoading] = useState(false);
    // eslint-disable-next-line
    const [ orderName, setOrderName ] = useState('')
    const [ filterSelection, setFilterSelection ] = useState({
        name: "",
        population: "",
        continent: "All",
        season: "All",
        activity: "All"
    })



    useEffect(() => {
        // setLoading(true);
        dispatch(getAllCountries());
        // setLoading(false);
    }, [dispatch]);

    // eslint-disable-next-line
    // console.log(loading);

    //Pagination reference: https://www.youtube.com/watch?v=HANSMtDy508
    const countriesFirstPage = 9;
    const differenceOfCountries = countriesPerPage - countriesFirstPage
    const indexOfLastCountry = currentPage===1? countriesFirstPage: countriesPerPage*currentPage-differenceOfCountries;
    const indexOfFirstCountry = indexOfLastCountry - (currentPage===1?countriesFirstPage:countriesPerPage);
    const currentCountries = countries?.slice(indexOfFirstCountry, indexOfLastCountry);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);



    const handleOrderCountry = (e) => {
        e.preventDefault();
        dispatch(orderCountriesByName(e.target.value));
        setFilterSelection(e.target.value)
        setOrderName(e.target.value);
        setCurrentPage(1);
    }

    const handleOrderPopulation = (e) => {
        e.preventDefault();
        dispatch(orderCountriesByPopulation(e.target.value));
        setFilterSelection(e.target.value)
        setOrderName(e.target.value);
        setCurrentPage(1);
    }

    // console.log(countries)

    return (
        <div>
            <Nav/> 
            <SearchBar setFilterSelection={setFilterSelection}/>
            <div>
                <div className='filters'>
                    <label>Order By Name</label>
                    <select onChange={e => handleOrderCountry(e)} value={filterSelection}>
                        <option value=''>Select...</option>
                        <option value='ASC'>Ascending</option>
                        <option value='DES'>Descending</option>
                    </select>
                </div>
                <div className='filters'>
                    <label>Order By Population</label>
                    <select onChange={e => handleOrderPopulation(e)} value={filterSelection}>
                        <option value=''>Select...</option>
                        <option value='ASC'>Ascending</option>
                        <option value='DES'>Descending</option>
                    </select>
                </div>
            </div>
            <Filter filterSelection={filterSelection} setFilterSelection={setFilterSelection}/>
            <div className="home">
                {typeof(countries) !== "undefined" ? 
                    <Pagination
                        countriesPerPage={countriesPerPage}
                        totalCountries={countries.length}
                        paginate={paginate}
                        currentPage={currentPage}
                        firstPage={countriesFirstPage}
                    />
                :
                    null
                }
                {typeof(countries) !== "undefined" ?
                <CountryCards 
                    countries={currentCountries}
                />
                : 
                <h1 className="notFound">Countries with that name not found</h1>
                }
                {typeof(countries) !== "undefined" ? 
                    <Pagination
                        countriesPerPage={countriesPerPage}
                        totalCountries={countries.length}
                        paginate={paginate}
                        currentPage={currentPage}
                        firstPage={countriesFirstPage}
                    />
                :
                    null
                }
            </div>
        </div>
    );

};

export default Home;