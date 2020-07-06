// React
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Conponents
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackArrow from "./components/BackArrow";

// Containers
import Home from "./containers/Home";
import PersonagePage from "./containers/PersonagePage";

// Style
import "../src/App.css";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/people/:name">
          <PersonagePage />
          <BackArrow />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
