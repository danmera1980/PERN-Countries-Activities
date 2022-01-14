import React from "react";
import CountryCard from "./CountryCard";

function CountryCards(countries){
    // console.log(countries);
    return(
        <div>
            {countries.map(c => (
                <div>
                    <CountryCard 
                        key={c.id}
                        name={c.name}
                        imgFlag={c.imgFlag}
                        region={c.region}
                    />
                </div>
            ))}
        </div>
    )
};

export default CountryCards;