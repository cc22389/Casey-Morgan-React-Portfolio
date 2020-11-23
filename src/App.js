import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Project from "./Components/Project/Project";
import Portfolio from "./Pages/Portfolio"

const navbar = { backgroundColor: 'black' };

function App() {
  return (
    <Router>
      <div>
        <Header style={navbar} />
        <Switch>
          <Route exact path="/" component={Project} />
          <Route exact path="/portfolio" component={Portfolio}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
