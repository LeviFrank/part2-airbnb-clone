import React from "react";
import mrWhiskerson from "../images/mrWhiskerson.jpeg";
import phoneIcon from "../images/phone-icon.jpeg";
import mailIcon from "../images/mail-icon.jpeg";

function Contacts() {
    return (
        <div className="contact-card">
            <img src={mrWhiskerson}/>
            <h3>Mr. Whiskerson</h3>
            <div className="info-group">
                <img src={phoneIcon} />
                <p>(212) 555-1234</p>
            </div>
            <div className="info-group">
                <img src={mailIcon} />
                <p>mr.whiskaz@catnap.meow</p>
            </div>
        </div>
    )
}

export default Contacts;