import React from "react";
import phoneIcon from "../images/phone-icon.jpeg";
import mailIcon from "../images/mail-icon.jpeg";

function Contacts(props) {
    return (
        <div className="contact-card">
            <img src={props.imageSrc}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={phoneIcon} />
                <p>{props.phoneNum}</p>
            </div>
            <div className="info-group">
                <img src={mailIcon} />
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Contacts;