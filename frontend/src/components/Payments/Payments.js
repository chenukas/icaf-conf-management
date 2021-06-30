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
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="payment-container">
        <h2 className="payment-header">Payment</h2>
        <div className="payment-table">
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
                  <tr key={index}>
                    <td>{item.userId.fullName}</td>
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
