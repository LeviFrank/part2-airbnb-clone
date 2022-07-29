import React from "react";
import airbnbLogo from "../images/airbnbLogo.png";

function Navbar(props) {
    return (
        <nav className="nav">
            <img src={airbnbLogo} className="navLogo" />
        </nav>
    )
}

export default Navbar;