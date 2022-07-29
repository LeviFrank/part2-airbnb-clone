import star from "../images/star.png"          
import React from "react";

function Card(props) {
    return (
        <div className="card">
               <img src={props.coverImg} className="cardImages"/>
            <div className="cardStats">
                <img src={star} className="star"/>
                <span>{props.rating}</span>
                <span className="gray">{props.reviewCount} • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="cardTitle">{props.title}</p>
            <p><span className="bold">From ${props.price}</span>
             / person</p></div>
    )
}

export default Card;