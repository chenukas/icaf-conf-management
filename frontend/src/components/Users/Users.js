import React, { Component } from "react";
import Edit from "../../images/edit.gif";
import { Link } from "react-router-dom";

class Users extends Component {
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
    };
  }

  render() {
    return (
      <div style={{ marginTop: 50, marginLeft: 30 }}>
        <div
          className="container"
          style={{ width: "75%", marginTop: 50, marginLeft: 500 }}
        >
          <h1>USERS OF CONFERENCE</h1>
        </div>
        <table class="table" style={{ width: 1300, marginLeft: 80 }}>
          <thead style={{ backgroundColor: "red", color: "white" }}>
            <tr>
              <th scope="col" style={{ width: 250 }}>
                User Name
              </th>
              <th scope="col" style={{ width: 250 }}>
                Email
              </th>
              <th scope="col" style={{ width: 250 }}>
                Contact Number
              </th>
              <th scope="col" style={{ width: 250 }}>
                Position
              </th>
              <th scope="col" style={{ width: 50 }}>
                Edit User Position
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gihan Perera</td>
              <td>Mark@gmail.com</td>
              <td>0764562109</td>
              <td>Normal User</td>
              <td>
                <Link>
                  <img style={{ width: 25 }} src={Edit} alt="profile" />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
