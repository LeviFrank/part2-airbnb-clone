import React from "react";
import airbnbLogo from "../images/airbnbLogo.png";

function Navbar() {
    return (
        <nav className="nav">
            <div className="nav-logo">
                <img src={airbnbLogo}/>
            </div>
        </nav>
    )
}

export default Navbar;