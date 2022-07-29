import React from 'react';
import './styles.css';
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";
import data from "./data.js";


function App () {
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                item={item}
            />
        )
    })  
        
        return (
            <div>
                <Navbar/>
                <Hero/>
                <section className="cardsList">
                    {cards}
                </section>
                <Footer/>
            </div>
    )
}

export default App;