import React from "react";
import "./country.scss"

function CountryCard({imageUrl, name, continent}){
    return(
        <div className="card">
            <img src={imageUrl} alt="flag"/>
            <h3>{name}</h3>
            <h4>{continent}</h4>
        </div>
    )
};

export default CountryCard;