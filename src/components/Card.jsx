import star from "../images/star.png"          
import React from "react";

function Card(props) {
    let soldText
    if (props.item.openSpots === 0) {
        soldText = "SOLD OUT 😥"
    } else if (props.item.location === "Online") {
        soldText = "ONLINE 💻"
    }

    return (
        <div className="card">
            {soldText &&
            <div className="soldOutTag">{soldText}</div>}
               <img src={props.item.coverImg} className="cardImages"/>
            <div className="cardStats">
                <div className="rating">
                    <img src={star} className="star"/>
                    <span>{props.item.stats.rating}</span>
                </div>
                <span className="reviewCount">({props.item.stats.reviewCount}) • </span>
                <span className="location">{props.item.location}</span>
            </div>
            <p className="cardTitle">{props.item.title}</p>
            <p><span className="bold">From ${props.item.price} </span> 
            / person</p></div>
    )
}

export default Card;