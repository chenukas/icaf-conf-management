import React, { Component } from "react";
import { UncontrolledPopover, PopoverBody } from "reactstrap";
import axios from "axios";
import swal from "sweetalert";

class Register extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeCnfPassword = this.onChangeCnfPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      fullName: "",
      email: "",
      password: "",
      contactNumber: "",
      position: 0,
      type: "",
      confirmPassword: "",
    };
  }

  onChangeUserName(e) {
    this.setState({
      fullName: e.target.value,
    });
  }
  onChangeContactNumber(e) {
    this.setState({
      contactNumber: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangeType(e) {
    this.setState({
      type: e.target.value,
    });
  }
  onChangeCnfPassword(e) {
    this.setState({
      confirmPassword: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      fullName: this.state.fullName,
      email: this.state.email,
      contactNumber: this.state.contactNumber,
      position: this.state.position,
      type: this.state.type,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };

    axios.post("http://localhost:5000/register", user).then((res) => {
      if (res.data.success === true) {
        swal({
          title: "Registration Completed..!!",
          text: "You are Successfully Registered.",
          icon: "success",
          button: true,
        }).then(() => {
          this.setState({
            fname: "",
            lname: "",
            email: "",
            address: "",
            postal: "",
            country: "",
            password: "",
            confirmPassword: "",
          });
          window.location = "/login";
        });
      }
      if (res.data.success === false) {
        swal({
          title: "Wrong Registration !",
          text: res.data.message,
          icon: "error",
          button: true,
          dangerMode: true,
        });
      }
    });
  }

  render() {
    return (
      <div className="container" style={{ width: "75%", marginTop: 50 }}>
        <form
          onSubmit={this.onSubmit}
          className="jumbotron"
          style={{ backgroundColor: "#F8DE7E" }}
        >
          <div className="form-group">
            <label>Full Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.fullName}
              onChange={this.onChangeUserName}
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="email"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <label>Contact Number: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.contactNumber}
              onChange={this.onChangeContactNumber}
            />
          </div>
          <div className="form-group">
            <label>User Type: </label>
            <input
              type="text"
              id="typePopover"
              className="form-control"
              value={this.state.type}
              onChange={this.onChangeType}
            />
            <UncontrolledPopover
              trigger="legacy"
              placement="right"
              target="typePopover"
            >
              <PopoverBody>
                Are you Researcher put <p style={{ fontWeight: "bold" }}>R</p>
                Are you Workshop Presenter put{" "}
                <p style={{ fontWeight: "bold" }}>WP</p>
                Are you Attendee put <p style={{ fontWeight: "bold" }}>A</p>
              </PopoverBody>
            </UncontrolledPopover>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label>Password: </label>
                <input
                  type="password"
                  className="form-control"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Confirm Password: </label>
                <input
                  type="password"
                  className="form-control"
                  value={this.state.confirmPassword}
                  onChange={this.onChangeCnfPassword}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <input
                  type="submit"
                  value="Sign up"
                  data-toggle="popover"
                  title="Popover title"
                  data-content="And here's some amazing content. It's very engaging. Right?"
                  style={{
                    color: "#fff",
                    backgroundColor: "#0097A7",
                    fontWeight: "bold",
                    width: 400,
                  }}
                  className="btn"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
