import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

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

    return (
        <div className="container mt-5">
            <Link to="/addsubmission" style={{textDecoration: 'none'}}>
                <button type="button" class="btn btn-dark mb-5">Add Submission</button>
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
                                <p>
                                    <a href={s.fileURL} className="btn btn-outline-dark mt-3" target="_blank">Download PDF</a>
                                </p>
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
