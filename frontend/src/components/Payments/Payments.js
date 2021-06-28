import React, { Component } from "react";
import "./Payments.css";
import axios from "axios";

const initialState = {
  type: "",
  userId: "",
  payDate: "",
  amount: "",
};

class Payments extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    let payment = {
      type: this.state.type,
      userId: this.state.userId,
      payDate: this.state.payDate,
      amount: this.state.amount,
    };
    axios
      .post("http://localhost:5000/payments/add", payment)
      .then((res) => {
        alert("New Payment Is Done Successfully");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  }
  render() {
    return (
      <div className="payment-container">
        <h2 className="title">Payments</h2>
        <div className="container">
          <form onSubmit={this.onSubmit}>
            <div className="mb-3">
              <label htmlFor="type" className="form-label">
                User Title
              </label>
              <select
                type="text"
                className="form-control"
                id="type"
                name="type"
                value={this.state.type}
                onChange={this.onChange}
              >
                <option value="Select" hidden>
                  Select Your Title
                </option>
                <option value="Researcher">Researcher</option>
                <option value="Attendee">Attendee</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="userId" className="form-label">
                User ID
              </label>
              <input
                type="text"
                className="form-control"
                id="userId"
                name="userId"
                value={this.state.userId}
                onChange={this.onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="payDate" className="form-label">
                Date of Payment
              </label>
              <input
                type="date"
                className="form-control"
                id="payDate"
                name="payDate"
                value={this.state.payDate}
                onChange={this.onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="amount" className="form-label">
                Amount
              </label>
              <input
                type="number"
                className="form-control"
                id="amount"
                name="amount"
                value={this.state.amount}
                onChange={this.onChange}
              />
            </div>
            <button type="submit" className="btn">
              Checkout
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Payments;
