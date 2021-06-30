import React, { Component } from "react";
import "./Payments.css";
import axios from "axios";

class Payments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payments: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/payments")
      .then((res) => {
        this.setState({ payments: res.data.data });
        console.log("DATA", res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="table-container">
        <h2 className="header"> Payment </h2>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {this.state.payments.length > 0 &&
                this.state.payments.map((item, index) => (
                  <tr>
                    <td>{item.userId}</td>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Payments;
