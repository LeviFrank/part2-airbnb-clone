import React from "react";
import "../styles.css";
import data from "../data.js";
import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";


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
            <Header/>
            {cards}
        </div>
    )
}

export default App;