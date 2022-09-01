import React from "react";
import "./styles.css";
import data from "./data.js";
import Card from "./components/Card.jsx";
import Navbar from "./components/Navbar.jsx";


function App () {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })  
        
    return (
        <div>
            <Navbar/>
            {cards}
        </div>
    )
}

export default App;