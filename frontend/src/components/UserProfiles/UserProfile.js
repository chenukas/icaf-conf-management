import React, { Component } from "react";
import Admin from "../../images/adminProfile.png";
import axios from "axios";

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "Ravindu Dilhara Kariyawasam",
      email: "admin123@gmail.com",
      password: "",
      contactNumber: "0763941256",
      position: 0,
      type: "",
      typeName: "",
      confirmPassword: "",
      positionName: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:5000/viewUser/" + localStorage.getItem("logUserId")
      )
      .then((response) => {
        console.log(response.data);
        this.setState({
          fullName: response.data.fullName,
          email: response.data.email,
          contactNumber: response.data.contactNumber,
          position: response.data.position,
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
    if (this.state.position == 0) {
      this.setState({
        positionName: "Normal User",
      });
    } else if (this.state.position == 2) {
      this.setState({
        positionName: "Editor",
      });
    } else if (this.state.position == 3) {
      this.setState({
        positionName: "Reviewer",
      });
    }
  }

  navigatePayments() {
    window.location = "/payments";
  }

  render() {
    let button;
    if (this.state.type === "RP" || this.state.type == "A") {
      button = (
        <button
          type="button"
          class="btn btn-primary col-4"
          onClick={this.navigatePayments}
        >
          Go To Payment
        </button>
      );
    }
    return (
      <div
        className="container"
        style={{ width: "75%", marginTop: 50, marginLeft: 350 }}
      >
        <div className="row">
          <div className="col-3">
            <div>
              <img style={{ width: 280 }} src={Admin} alt="profile" />
            </div>
          </div>
          <div
            className="col-6"
            style={{
              marginTop: 30,
              fontWeight: "bolder",
              fontSize: 20,
              fontFamily: "cursive",
            }}
          >
            <div style={{ fontSize: 34, fontFamily: "monospace" }}>
              <label>{this.state.fullName}</label>
            </div>
            <div>
              <label>{this.state.email}</label>
            </div>
            <div>
              <label>{this.state.contactNumber}</label>
            </div>
            <div>
              <label>{this.state.typeName}</label>
            </div>
            <div>
              <label>{this.state.positionName}</label>
            </div>
          </div>
        </div>
        <div className="mt-5">{button}</div>
      </div>
    );
  }
}

export default UserProfile;
