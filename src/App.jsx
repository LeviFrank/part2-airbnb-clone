import React from 'react';
import './styles.css';
import Hero from "./components/Hero.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";
import Contacts from "./components/Contacts.jsx";
import mrWhiskersonSrc from "./images/mrWhiskerson.jpeg"; 
import fluffyPantsSrc from "./images/fluffyPants.jpeg";
import samSrc from "./images/sam.jpeg";
import pumpkinSrc from "./images/pumpkin.jpeg";

function App () {
  return (
    <div className="App">
      {/* <Hero/>
      <Card/>
      <Footer/> */}
      <Contacts 
        imageSrc={mrWhiskersonSrc} 
        name="Mr. Whiskerson"
        phoneNum="212-555-1847"
        email="mr.whiskaz@catnap.gov"
      />
      <Contacts 
        imageSrc={fluffyPantsSrc} 
        name="Fluffy Pants"
        phoneNum="212-937-7496"
        email="fuffster@claws.com"
      />
      <Contacts
        imageSrc={samSrc} 
        name="Sam"
        phoneNum="212-395-9335"
        email="sam@thecat.org"
      />
      <Contacts
        imageSrc={pumpkinSrc} 
        name="Pumpkin"
        phoneNum="584-727-7648"
        email="pumpkin@gmail.com"
      />
    </div>
  )
}

export default App;