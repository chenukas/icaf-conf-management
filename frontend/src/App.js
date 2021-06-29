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
import AddPayments from "./components/Add-Payments/add-payments";
import Download from "./components/Downloads/Download";
import Submissions from "./components/Submissions/Submissions";
import AddSubmission from "./components/AddSubmission/AddSubmission";

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
        <Route path="/user" component={UserProfile} exact={true} />
        <Route path="/users" component={Users} exact={true} />
        <Route path="/change-user/:id" component={ChangeUser} exact={true} />
        <Route path="/payments" component={AddPayments} exact={true} />
        <Route path="/download" component={Download} exact={true} />
        <Route path="/submission" component={Submissions} exact={true} />
        <Route path="/addsubmission" component={AddSubmission} exact={true} />
      
      </Switch>
    </>
  );
}

export default App;
