import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddWork from "./pages/AddWork";
import Home from "./pages/Home";
import "./App.css";

export const App = (props) => {
  return (
    <Router>
      <div className="App">
        <h1>School App</h1>
        <Route path="/" exact component={Home} />
        <Route path="/AddWork" component={AddWork} />
      </div>
    </Router>
  );
};

export default App;
