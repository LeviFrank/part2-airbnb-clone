import star from "../images/star.png"          
import React from "react";

function Card(props) {
    let soldText
    if (props.openSpots === 0) {
        soldText = "SOLD OUT"
    } else if (props.location === "Online") {
        soldText = "ONLINE"
    }
    // SOLD OUT 😥
    return (
        <div className="card">
            {soldText &&
            <div className="soldOutTag">{soldText}</div>}
               <img src={props.coverImg} className="cardImages"/>
            <div className="cardStats">
                <img src={star} className="star"/>
                <span>{props.rating}</span>
                <span className="gray">{props.reviewCount} • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="cardTitle">{props.title}</p>
            <p><span className="bold">From ${props.price} </span> 
            / person</p></div>
    )
}

export default Card;