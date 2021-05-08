import React from "react";
import "./Sidenav.css";
import { useRouteMatch, Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import PaymentIcon from "@material-ui/icons/Payment";
import PublishIcon from "@material-ui/icons/Publish";

const Sidenav = () => {
  let match = useRouteMatch();

  return (
    <div className="sidenav-container">
      <br />
      <ul className="sidebar-list">
        <Link style={{ textDecoration: "none" }} to={`${match.url}`}>
          <li className="sidebar-row">
            <div id="icon">
              <HomeIcon />
            </div>{" "}
            <div id="title">Overview</div>
          </li>
        </Link>
        <Link style={{ textDecoration: "none" }} to={`${match.url}/users`}>
          <li className="sidebar-row">
            <div id="icon">
              <PersonIcon />
            </div>{" "}
            <div id="title">Users</div>
          </li>
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          to={`${match.url}/publications`}
        >
          <li className="sidebar-row">
            <div id="icon">
              <PublishIcon />
            </div>{" "}
            <div id="title">Publications</div>
          </li>
        </Link>
        <Link style={{ textDecoration: "none" }} to={`${match.url}/payments`}>
          <li className="sidebar-row">
            <div id="icon">
              <PaymentIcon />
            </div>{" "}
            <div id="title">Payments</div>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidenav;
