import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Sidenav from "../../components/Sidenav/Sidenav";
import Overview from "../../components/Overview/Overview";
import Users from "../../components/Users/Users";
import Publications from "../../components/Publications/Publications";
import Payments from "../../components/Payments/Payments";

const Dashboard = () => {
  const match = useRouteMatch();
  return (
    <div>
      <h1>Dashboard</h1>
      <Sidenav />

      <Switch>
        <Route exact path={`${match.url}`} component={Overview} />
        <Route path={`${match.url}/users`} component={Users} />
        <Route path={`${match.url}/publications`} component={Publications} />
        <Route path={`${match.url}/payments`} component={Payments} />
      </Switch>
    </div>
  );
};

export default Dashboard;
