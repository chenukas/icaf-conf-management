import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import { withRouter } from "react-router";
import "@fontsource/roboto";

import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import AdminProfile from "./components/UserProfiles/AdminProfile";
import UserProfile from "./components/UserProfiles/UserProfile";
import Users from "./components/Users/Users";
import ChangeUser from "./components/Admin/ChangeUserPosition";

function App() {
  return (
    <>
    <Navbar />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/dashboard" component={withRouter(Dashboard)} />
        <Route path="/register" component={Register} exact={true} />
        <Route path="/login" component={Login} exact={true} />
        <Route path="/admin" component={AdminProfile} exact={true} />
        <Route path="/user/:id" component={UserProfile} exact={true} />
        <Route path="/users" component={Users} exact={true} />
        <Route path="/change-user/:id" component={ChangeUser} exact={true} />
      </Switch>
    </>
  );
}

export default App;
