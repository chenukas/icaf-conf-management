import React, { Component } from "react";
import axios from "axios";
import "./add-payment.css";
import swal from "sweetalert";

const initialState = {
  type: "",
  userId: "",
  name: "",
  payDate: "",
  amount: 0.0,
  fullName: "",
  typeName: "",
};

class AddPayments extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:5000/viewUser/" + localStorage.getItem("logUserId")
      )
      .then((response) => {
        console.log(response.data);
        this.setState({
          userId: response.data._id,
          fullName: response.data.fullName,
          type: response.data.type,
        });
        if (this.state.type === "A") {
          console.log(this.state.type);
          this.setState({
            typeName: "Attendee",
          });
        } else if (this.state.type === "WP") {
          console.log(this.state.type);
          this.setState({
            typeName: "Workshop Presenter",
          });
        } else if (this.state.type === "RP") {
          console.log(this.state.type);
          this.setState({
            typeName: "Research Presenter",
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onSubmit(event) {
    event.preventDefault();
    let payment = {
      type: this.state.type,
      userId: this.state.userId,
      name: this.state.fullName,
      payDate: this.state.payDate,
      amount: this.state.amount,
    };
    axios
      .post("http://localhost:5000/payments", payment)
      .then((res) => {
        if (res.data.success === true) {
          swal({
            title: "New Payment is Successfull!",
            text: res.data.message,
            icon: "success",
            button: true,
            dangerMode: false,
          });
        }
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
                User Type
              </label>
              <input
                type="text"
                className="form-control"
                value={this.state.typeName}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="userId" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                value={this.state.fullName}
                readOnly
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

export default AddPayments;
