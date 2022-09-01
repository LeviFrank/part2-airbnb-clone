import React from "react";
import mapsMarker from "../images/mapsMarker.png";


function Card(props) {
    return (
        <div className="Card">
            <img src={props.image} className="placeImage"/>
            <img src={mapsMarker} className="mapsMarker"/>
            <h4 className="location">{props.location}</h4>
            <h5 className="googleMapsUrl"><u>{props.googleMapsUrl}</u> </h5>
            <h1 className="title">{props.title}</h1>
            <h3 className="dates">{props.dates}</h3>
            <p className="description">{props.description}</p>
            <hr className="cardLine"/>
        </div>
    )
}

export default Card;