import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Sidenav from "../../components/Sidenav/Sidenav";
import Overview from "../../components/Overview/Overview";
import Users from "../../components/Users/Users";
import Publications from "../../components/Publications/Publications";
import Payments from "../../components/Payments/Payments";
import "./Dashboard.css";

const Dashboard = () => {
  const match = useRouteMatch();
  return (
    <div className="dashboard">
      <div>
        <Sidenav />
      </div>
      <div>
        <br />
        <Switch>
          <Route exact path={`${match.url}`} component={Overview} />
          <Route path={`${match.url}/users`} component={Users} />
          <Route path={`${match.url}/publications`} component={Publications} />
          <Route path={`${match.url}/payments`} component={Payments} />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
