import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./component/home";
import "./App.css";
import "./css/homeStyle.css";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
