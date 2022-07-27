import React from "react";
import airbnbLogo from "../images/airbnbLogo.png";

function Navbar() {
    return (
        <nav className="nav">
            <img src={airbnbLogo} className="navLogo" />
        </nav>
    )
}

export default Navbar;