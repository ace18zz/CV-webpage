import React from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Switch>
        <Route path="/about">
          {/* Your About component */}
        </Route>
        <Route path="/contact">
          {/* Your Contact component */}
        </Route>
        <Route path="/">
          <MainContent />
        </Route>
      </Switch>
      <footer>
        <p>Created for learning purposes.</p>
      </footer>
    </div>
  </Router>
  
  );
}

export default App;
