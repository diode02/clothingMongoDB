import React from "react";
import "./App.css";

//components
import Header from "./components/header/header.com";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.com";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
