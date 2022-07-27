import React from "react";
import adventurePics from "../images/adventurePics.png";

function Hero() {
    return (
        <section className="Hero">
            <img src={adventurePics} className="adventurePics"/>
            <h1 className="summaryTitle">Online Experiences</h1>
            <p className="mainSectionSummary">Join unique interactive 
                activities led by <br/>one-of-a-kind hosts—all without leaving 
                <br/>home.
            </p>
        </section>
    )
}
export default Hero;