import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import "./Submissions.css";

const Submissions = () => {

    const [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        getAllSubmissionsByUID();
    }, []);

    const getAllSubmissionsByUID = () => {
        const uid = localStorage.getItem("logUserId");
        axios.get("http://localhost:5000/users/" + uid + "/submissions")
            .then(response => {
                setSubmissions(response.data && response.data.data || []);
            }).catch(err => {
                // todo: show alert
            });
    }

    const onDeleteSub = (id) => {
      console.log(id)
      debugger
      axios({
          method: 'DELETE',
          url: `http://localhost:5000/submissions/${id}`
      }).then(response => {
        // show alert
        Swal.fire(
            'Successful!',
            'Deleted submission successfully!',
            'success'
        )
    }).catch(err => {
        Swal.fire(
            'Oopz!',
            (err.error && err.error.message) || 'Could not delete submission',
            'danger'
        );
    });
  }

    return (
        <div className="container mt-5">
            <Link to="/addsubmission" style={{textDecoration: 'none'}}>
                <button type="button" class="btn btn-dark mb-5"><i class="fa fa-plus" aria-hidden="true"></i>&nbsp;
Add Submission</button>
            </Link>

            <div className="row">
                <div className="col-md-12">
                    {
                        submissions && submissions.map(s =>
                            <div key={s._id} className="submissionWrapper">
                                <h5>{s.title}</h5>
                                <p>{s.abstract}</p>
                                {
                                    s.authors.map((a, index) => {
                                        return <span className="author-badge">{a}</span>
                                    })
                                }
                                <div className="row">
                                  <div className="col">
                                <p>
                                    <a href={s.fileURL} className="btn btn-outline-dark mt-3" target="_blank">Download PDF</a>
                                </p>
                                </div>
                                <div className="col">
                                <p className="delete">
                                    <a className="btn btn-outline-dark mt-3" onClick={() => onDeleteSub(s._id)} style={{background:"#464646"}} target="_blank">Delete</a>
                                </p>
                                </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className="row" hidden={submissions.length > 0}>
                <div className="col-md-12">
                    <p>No Submissions made yet!</p>
                </div>
            </div>
        </div>
    )
}

export default Submissions
