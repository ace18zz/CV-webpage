import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import ParticlesBackground from './components/ParticlesBackground';


import "./App.css";

function App() {
  return (
    <div className="App">

      <ParticlesBackground />
      
      <header>
        <Navbar />
      </header>

      <div id="home-section">
        <Home />
      </div>

      <div id="projects-section">
        <Projects />
      </div>

      {/* <div id="about-section">
        <About />
      </div> */}

      {/* <div id="contact-section">
        <Contact />
      </div> */}

      <footer>
        <p>Created for learning purposes.</p>
      </footer>
    </div>
  );
}

export default App;
