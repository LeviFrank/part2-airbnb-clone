import React from 'react';
import './styles.css';
import Hero from "./components/Hero.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";
import Contacts from "./components/Contacts.jsx";

function App () {
  return (
    <div className="App">
      {/* <Hero/>
      <Card/>
    <Footer/> */}
    <Contacts 
      img="./images/mrWhiskeron.jpeg" 
      name="Mr. Whiskerson"
      phoneNum="+1 212-555-1234"
      email="mr.whiskaz@catnap.meow"
    />
    <Contacts 
        img="./images/fluffykins.png"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
    />
    <Contacts
        img="./images/felix.png"
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
    />
    <Contacts
        img="./images/pumpkin.png"
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
    />
    </div>
  )
}

export default App;