import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import { withRouter } from "react-router";
import '@fontsource/roboto';

function App() {
  return (
    <>
    <Navbar />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/dashboard" component={withRouter(Dashboard)} />
      </Switch>
    </>
  );
}

export default App;
