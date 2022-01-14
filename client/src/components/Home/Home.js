import React, { useEffect } from "react";
import CountryCards from "../Country/CountryCards";
import { useSelector, useDispatch } from 'react-redux';
import { getAllCountries } from "../../redux/actions";

function Home(){
    const countries = useSelector((state) => state.countries);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCountries)
    }, [dispatch]);
    console.log(countries);
    return (
        <div>
            <div>
                <CountryCards 
                    countries={countries}
                />
            </div>
        </div>
    );
};

export default Home;