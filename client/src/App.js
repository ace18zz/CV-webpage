import React from "react";
import Navbar from "./components/Navbar";
import HomeComponent from "./components/Home";
import AboutComponent from "./components/About";
import ContactComponent from "./components/Contact";
import ProjectsComponent from "./components/Projects";


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>

        <Routes>
          <Route path="about" element={<AboutComponent />} />
          <Route path="contact" element={<ContactComponent />} />
          <Route path="projects" element={<ProjectsComponent />} />
          <Route path="/" element={<HomeComponent />} />
        </Routes>

        <footer>
          <p>Created for learning purposes.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
