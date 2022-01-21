import React from "react";
import "./country.css"

function CountryCard({imageUrl, name, continent}){

    return(
        <div>
            <img src={imageUrl} alt="flag"/>
            <div className="cardDetails">
                <h3>{name}</h3>
                <h4>{continent}</h4>
            </div>
        </div>
    )
};

export default CountryCard;