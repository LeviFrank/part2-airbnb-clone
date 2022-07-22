import React from "react";
import zarefesPic from "../images/zarefesPic.png"
import star from "../images/star.png"

function Card() {
    return (
        <div className="card">
            <img src={zarefesPic} className="zarefesPic"/>
            <div className="cardAbout">
                <img src={star} className="star"/>
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><b>From $136</b> / person</p>
        </div>
    )
}

export default Card;