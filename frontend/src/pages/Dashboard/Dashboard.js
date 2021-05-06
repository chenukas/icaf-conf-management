import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/admin/users">
        <h2>Users</h2>
      </Link>
    </div>
  );
};

export default Dashboard;
