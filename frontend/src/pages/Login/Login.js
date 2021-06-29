import React, { Component } from "react";
import { Link } from "react-router-dom";
import { auto } from "@popperjs/core";
import axios from "axios";
import swal from "sweetalert";

class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: "",
    };
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

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    axios.post("http://localhost:5000/login", user).then((res) => {
      if (res.data.success === true) {
        this.setState({
          email: "",
          password: "",
        });
        const id = res.data.user._id;
        const name = res.data.user.fullName;
        localStorage.setItem("logUserId", id);
        localStorage.setItem("logUserName", name);
        if (res.data.user.position == 1) {
          window.location = "/dashboard";
        } else {
          window.location = "/user";
        }
      }
      if (res.data.success === false) {
        swal({
          title: "Unsuccessfully Login !",
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
      <div
        className="container"
        style={{ width: "30%", margin: auto, marginTop: 150 }}
      >
        <form
          onSubmit={this.onSubmit}
          className="jumbotron"
          style={{ backgroundColor: "#F8DE7E" }}
        >
          <div className="form-group">
            <label>User Email: </label>
            <input
              type="email"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Sign in"
              style={{
                color: "#fff",
                backgroundColor: "#0097A7",
                fontWeight: "bold",
                width: "100%",
              }}
              className="btn"
            />
          </div>
          <div>
            <div className="row">
              <div className="col-6">
                <p>Don't have an account?</p>
              </div>
              <div className="col-6">
                <Link
                  to="/register"
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  Sign up here...
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
