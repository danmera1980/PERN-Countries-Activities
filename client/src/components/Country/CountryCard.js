import React from "react";

function CountryCard(props){
    return(
        <div>
            <img src={props.imgFlag} alt="flag"/>
            <h3>{props.name}</h3>
            <h4>{props.region}</h4>
        </div>
    )
};

export default CountryCard;