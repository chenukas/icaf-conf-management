import React from "react";
import "./AddSubmission.css";

const AddSubmission = () => {
  return (
    <div className="container" style={{marginTop: '20px'}}>
      <form >
        <div className="row">
          <h4>Add new Submission</h4>
          <div className="input-group input-group-icon">
            <input type="text" placeholder="Title" />
            <div className="input-icon"></div>
          </div>
          <div className="input-group input-group-icon">
            <input type="email" placeholder="Abstract" />
            <div className="input-icon"></div>
          </div>
          <div className="input-group input-group-icon">
            <textarea
              className="form-control"
              placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Authors"
              aria-label="With textarea"
            ></textarea>
            <div className="input-icon"></div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Choose a research paper
          </label>
          <input className="form-control" type="file" id="formFile" />
        </div>
        <button type="button" className="btn btn-dark">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddSubmission;
