import React, { useState, useEffect } from "react";
import CountryCards from "../Country/CountryCards";
import { useSelector, useDispatch } from 'react-redux';
import { getAllCountries } from "../../redux/actions";
import Nav from '../Nav/Nav';
import './Home.scss';
import { Pagination } from "../Pagination/Pagination";

function Home(){
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries.countries);
    const [ countriesPerPage ] = useState(10);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ loading, setLoading] = useState(false);



    useEffect(() => {
        setLoading(true);
        dispatch(getAllCountries());
        setLoading(false);
    }, [dispatch]);

    //Pagination reference: https://www.youtube.com/watch?v=HANSMtDy508
    const countriesFirstPage = 9;
    const differenceOfCountries = countriesPerPage - countriesFirstPage
    const indexOfLastCountry = currentPage===1? countriesFirstPage: countriesFirstPage*currentPage-differenceOfCountries;
    const indexOfFirstCountry = indexOfLastCountry - (currentPage===1?countriesFirstPage:countriesPerPage);
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <Nav/> 
            <div className="home">
                <CountryCards 
                    countries={currentCountries}
                />
                <Pagination
                    countriesPerPage={countriesPerPage}
                    totalCountries={countries.length}
                    paginate={paginate}
                    currentPage={currentPage}
                    firstPage={countriesFirstPage}
                />
            </div>
        </div>
    );

};

export default Home;