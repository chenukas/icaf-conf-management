import React, {useEffect, useState, useCallback} from "react";
import "./Overview.css";
import axios from "axios";

const Overview = () => {
  const [stats, setStats] = useState([])
  const fetchData = useCallback(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:5000/stats'
    }).then((response) => {
      setStats(response.data.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="overview-container">
      <h2 className="overview-header">Overview</h2>
      <div className="overview-container-grid">
        <div className="row">
          <div className="col-md-6 grid-item grid-item-top-left">
          <h3 className="stats-text">Events</h3>
          <h4 className="stats-value">{ stats.totalEvents }</h4>
          </div>
          <div className="col-md-6 grid-item grid-item-top-right" >
          <h3 className="stats-text">Participants</h3>
        <h4 className="stats-value">{ stats.totalParticipants }</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 grid-item grid-item-bottom-left">
          <h3 className="stats-text">Publications</h3>
          <h4 className="stats-value">{ stats.totalSubmissions }</h4>
          </div>
          <div className="col-md-6 grid-item grid-item-bottom-right" >
          <h3 className="stats-text">Payments</h3>
        <h4 className="stats-value">Rs. { stats.totalPayments }</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
