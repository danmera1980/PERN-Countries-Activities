import React from "react";
import CountryCard from "./CountryCard";
import "./country.scss";
import { Link } from "react-router-dom";

function CountryCards({countries}){

    return(
        <div className="cards">
            {countries && countries?.map(c => (
                <div key={c.id} className="card">
                    <Link to={`/country/${c.id}`}>
                        <CountryCard 
                            key={c.id}
                            name={c.name}
                            imageUrl={c.imageUrl}
                            continent={c.continent}
                        />
                    </Link>
                </div>
            ))}
        </div>
    )
};

export default CountryCards;