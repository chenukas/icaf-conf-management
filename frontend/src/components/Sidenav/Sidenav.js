import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

const Sidenav = () => {
  let match = useRouteMatch();

  return (
    <>
      <ul>
        <li>
          <Link to={`${match.url}`}>Overview</Link>
        </li>
        <li>
          <Link to={`${match.url}/users`}>Users</Link>
        </li>
        <li>
          <Link to={`${match.url}/publications`}>Publications</Link>
        </li>
        <li>
          <Link to={`${match.url}/payments`}>Payments</Link>
        </li>
      </ul>
    </>
  );
};

export default Sidenav;
