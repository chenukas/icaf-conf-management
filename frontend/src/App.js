import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Home/Navbar/navbar";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import { withRouter } from "react-router";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/nav" component={Navbar} />
        <Route path="/" component={Home} exact={true} />
        <Route path="/dashboard" component={withRouter(Dashboard)} />
      </Switch>
    </>
  );
}

export default App;
