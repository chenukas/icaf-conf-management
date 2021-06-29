import React, { useState, useEffect, useCallback } from "react";
import './Publications.css'
import axios from "axios";

const Publications = () => {
  const [publications, setPublications] = useState([])

  const fetchData = useCallback(() => {
    axios({
        method: "GET",
        url: "http://localhost:5000/submissions",
      })
        .then((response) => {
          setPublications(response.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
}, [])

useEffect(() => {
   fetchData()
},[fetchData])

const approvePublication = (id) => {
  axios({
    method: 'PUT',
    url: `http://localhost:5000/submissions/${id}/status`
}).then(() => {
    fetchData()
}).catch((err) => {
    console.log(err);
})
}

  return (
      <div className="publications-container">
        <h2 className="publications-header" >Manage Publications</h2>
        <div className="publication-table-container">
          <table className="table">
            <thead>
              <tr className="table-header">
                <th>Title</th>
                <th>Abstract</th>
                <th>Authors</th>
                <th>Uploaded Date</th>
                <th>Status</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              { publications && publications.map((item, key) => (
                  <tr key={key}>
                   <td>{item.title}</td>
                   <td>{item.abstract}</td>
                   <td>{item.authors}</td>
                   <td>{item.createdAt}</td>
                   <td><span className={item.status == 'approved' ? "badge badge-success" : "badge badge-warning" }>{item.status}</span></td>
                   <td><button className={item.status == 'approved' ? "approve-button-disabled" : "approve-button" } disabled={item.status == 'approved'} onClick={() => approvePublication(item._id)}>Approve</button></td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Publications;
