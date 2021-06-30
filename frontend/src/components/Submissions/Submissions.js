import React from 'react'
import { Link } from "react-router-dom";

const Submissions = () => {
  return (
    <div className="container mt-5">
      <Link to="/addsubmission" style={{ textDecoration: 'none'}}>
      <button type="button" class="btn btn-dark">Add Submission</button>
      </Link>
    </div>
  )
}

export default Submissions
