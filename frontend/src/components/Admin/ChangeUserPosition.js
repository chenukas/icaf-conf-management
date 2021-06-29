import React, { Component } from "react";
import { UncontrolledPopover, PopoverBody } from "reactstrap";
import "./ChangeUser.css";
import axios from "axios";
import swal from "sweetalert";

class ChangeUserPosition extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      fullName: "",
      email: "",
      contactNumber: "",
      position: 0,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/viewUser/" + this.props.match.params.id)
      .then((response) => {
        console.log(response.data);
        this.setState({
          id: response.data._id,
          fullName: response.data.fullName,
          email: response.data.email,
          contactNumber: response.data.contactNumber,
          position: response.data.position,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  onChangePosition = (e) => {
    this.setState({
      position: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const user = {
      id: this.state.id,
      position: this.state.position,
    };

    axios.put("http://localhost:5000/updatePosition", user).then((res) => {
      if (res.data.success === true) {
        window.location = "/dashboard/users";
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
  };

  render() {
    return (
      <div className="change-container">
        <div className="change-header">
          <h2>Change User Position</h2>
        </div>
        <form
          onSubmit={this.onSubmit}
          className="jumbotron"
          style={{ backgroundColor: "#fff", marginLeft: "5%" }}
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
                    backgroundColor: "#01bf71",
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
