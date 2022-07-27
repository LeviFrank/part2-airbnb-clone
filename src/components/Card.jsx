import React from "react";
import zaferesPic from "../images/zaferesPic.png"
import star from "../images/star.png"

function Card(props) {
    return (
        <div className="card">
            <img src={props.image} className="zaferesPic"/>
            <div className="cardAbout">
                <img src={star} className="star"/>
                <span>{props.rating}</span>
                <span className="gray">{props.reviewCount} • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><b>{props.price}</b></p>
        </div>
    )
}

export default Card; 