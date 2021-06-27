import React, {useEffect, useState, useCallback} from "react";
import "./Overview.css";
import Grid from '@material-ui/core/Grid'
import axios from "axios";

const Overview = () => {
  const [stats, setStats] = useState([])
  const [total, setTotal] = useState([])

  const fetchData = useCallback(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:5000/stats'
    }).then((response) => {
      setStats(response.data.data)
      setTotal(response.data.data.totalPayments[0])
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
      <Grid container spacing={5}>
        <Grid item xs={10} sm={6} className="grid-item">
          <h3 className="stats-text">Events</h3>
          <h4 className="stats-value">{ stats.totalEvents }</h4>
        </Grid>
        <Grid item xs={10} sm={6} className="grid-item">
        <h3 className="stats-text">Participants</h3>
        <h4 className="stats-value">{ stats.totalParticipants }</h4>
        </Grid>
        <Grid item xs={10} sm={6} className="grid-item">
        <h3 className="stats-text">Publications</h3>
        <h4 className="stats-value">{ stats.totalSubmissions }</h4>
        </Grid>
        <Grid item xs={10} sm={6} className="grid-item">
        <h3 className="stats-text">Payments</h3>
        <h4 className="stats-value">Rs. {total.total}</h4>
        </Grid>
      </Grid>
      </div>
    </div>
  );
};

export default Overview;
