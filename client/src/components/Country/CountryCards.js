import React from "react";
import CountryCard from "./CountryCard";
import "./country.scss";

function CountryCards({countries}){

    return(
        <div className="cards">
            {countries && countries?.map(c => (
                <div key={c.id}>
                    <CountryCard 
                        key={c.id}
                        name={c.name}
                        imageUrl={c.imageUrl}
                        continent={c.continent}
                    />
                </div>
            ))}
        </div>
    )
};

export default CountryCards;