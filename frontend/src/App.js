import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Dashboard from "./components/Dashboard/Dashboard";
import Users from "./components/Dashboard/Users";
import Navbar from "./components/Home/Navbar/navbar";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/nav" component={Navbar} />
        <Route exact path="/admin" component={Dashboard} />
        <Route path="/admin/users" component={Users} />
      </Switch>
    </>
  );
}

export default App;
