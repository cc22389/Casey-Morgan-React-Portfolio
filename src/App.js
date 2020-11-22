import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Portfolio from "./Pages/Portfolio"

const navbar = { backgroundColor: 'black' };

function App() {
  return (
    <Router>
      <div>
        <Navbar style={navbar} />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
