import React, { Component } from "react";
import { UncontrolledPopover, PopoverBody } from "reactstrap";

class ChangeUserPosition extends Component {
  constructor(props) {
    super(props);

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

  onChangeUserName = (e) => {
    this.setState({
      fullName: e.target.value,
    });
  };
  onChangeContactNumber = (e) => {
    this.setState({
      contactNumber: e.target.value,
    });
  };
  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  onChangePosition = (e) => {
    this.setState({
      type: e.target.value,
    });
  };
  onChangeCnfPassword = (e) => {
    this.setState({
      confirmPassword: e.target.value,
    });
  };

  render() {
    return (
      <div className="container" style={{ marginTop: 50, marginLeft: 30 }}>
        <div style={{ width: "75%", marginTop: 50, marginLeft: 500 }}>
          <h1>CHANGE USER POSITION</h1>
        </div>
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
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="email"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Contact Number: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.contactNumber}
              onChange={this.onChangeContactNumber}
              readOnly
            />
          </div>
          <div className="form-group">
            <label>User Position: </label>
            <input
              type="text"
              id="typePopover"
              className="form-control"
              value={this.state.position}
              onChange={this.onChangePosition}
            />
            <UncontrolledPopover
              trigger="legacy"
              placement="right"
              target="typePopover"
            >
              <PopoverBody>
                If Reviewer put <p style={{ fontWeight: "bold" }}>2</p>
                If Editor put <p style={{ fontWeight: "bold" }}>3</p>
              </PopoverBody>
            </UncontrolledPopover>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <input
                  type="submit"
                  value="UPDATE POSITION"
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

export default ChangeUserPosition;
