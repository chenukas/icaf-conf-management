import React, { Component } from "react";
import Admin from "../../images/adminProfile.png";

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
      confirmPassword: "",
      positionName: "",
    };
  }

  componentDidMount() {
    if (this.state.position == 0) {
      this.setState({
        positionName: "Normal User",
      });
    }
  }

  render() {
    return (
      <div
        className="container"
        style={{ width: "75%", marginTop: 50, marginLeft: 350 }}
      >
        <div className="row">
          <div className="col-3">
            <div>
              <img style={{ width: 240 }} src={Admin} alt="profile" />
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
              <label>{this.state.positionName}</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
