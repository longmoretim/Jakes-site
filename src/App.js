import React from "react";
import Navbar from "./components/Navbar/Navbar";

import './App.css';
import { AboutUs, Header, Gallery, Laurels, Menu, Footer, ContactForm } from "./container";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <Gallery />
      <Laurels />
      <Menu />
      <ContactForm/>
      <Footer />
    </div>
  );
}

export default App;
