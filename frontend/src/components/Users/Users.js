import React, { Component } from "react";
import Edit from "../../images/edit.png";
import NoEdit from "../../images/noedit.png";
import { Link } from "react-router-dom";
import "./Users.css";
import axios from "axios";

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  navigateEditPage = (e, userID) => {
    window.location = `/change-user/${userID}`;
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/getUsers")
      .then((res) => {
        this.setState({
          users: res.data.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    if (this.state.position === 0) {
      this.setState({
        positionName: "Normal User",
      });
    }
  }

  render() {
    return (
      <div className="user-container">
        <h2 className="user-header">Manage Users</h2>
        <div className="user-table">
          <table className="table">
            <thead>
              <tr className="table-header">
                <th>User Name</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Position</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.length > 0 &&
                this.state.users.map((item, index) => (
                  <tr key={index}>
                    <td>{item.fullName}</td>
                    <td>{item.email}</td>
                    <td>{item.contactNumber}</td>
                    <td>{item.position}</td>
                    <td>
                      {item.position == 1 ? (
                        <Link>
                          <img
                            style={{ width: 25 }}
                            src={NoEdit}
                            alt="profile"
                          />
                        </Link>
                      ) : (
                        <div
                          onClick={(e) => this.navigateEditPage(e, item._id)}
                        >
                          <Link>
                            <img
                              style={{ width: 25 }}
                              src={Edit}
                              alt="profile"
                            />
                          </Link>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Users;
