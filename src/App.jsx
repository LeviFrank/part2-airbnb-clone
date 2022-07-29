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
                coverImg={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}
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