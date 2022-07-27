import React from 'react';
import './styles.css';
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";
import zarefesPic from "./images/zaferesPic.png";

function App () {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <Card
            image={zarefesPic}
            rating="5.0"
            reviewCount="(6)"
            country="United States"
            title="Life lessons with Katie Zaferes"
            price="$136 / person"
        />
        <Footer/>
    </div>
  )
}

export default App;