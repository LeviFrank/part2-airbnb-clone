import React from "react";
import world from "../images/world.png"

function Navbar(props) {
        return (
        <nav  className="nav">
            <img src={world} className="world" />
            <h2 className="mainTitle">My Travel Journal</h2>
        </nav>
    )
}

export default Navbar;