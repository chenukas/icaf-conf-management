import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import { withRouter } from "react-router";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/dashboard" component={withRouter(Dashboard)} />
      </Switch>
    </>
  );
}

export default App;
