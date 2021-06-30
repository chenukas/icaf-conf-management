import React, {useState} from "react";
import "./AddSubmission.css";

const AddSubmission = () => {
  const [title, setTitle] = useState('');
  const [abstract, setAbstract] = useState([]);
  const [authors, setAuthors] = useState('');
  const [file, setFile] = useState('');

  const handleTitleChange = e => setTitle(e.target.value);

  const handleAbstractChange = e => setAbstract(e.target.value);

  const handleAuthorsChange = e => setAuthors(e.target.value.split(','));

  const createSubmission = () => console.log(title, abstract, authors);

  return (
    <div className="containersub" style={{marginTop: '20px'}}>
      <form >
        <div className="row">
          <h4>Add new Submission</h4>
          <div className="input-group">
            <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
            <div className="input-icon"></div>
          </div>
          <div className="input-group">
            <textarea className="form-control abstract" placeholder="Abstract" value={abstract} onChange={handleAbstractChange} />
            <div className="input-icon"></div>
          </div>
          <div className="input-group">
            <textarea
              class="form-control"
              placeholder="Authors"
              aria-label="With textarea"
              value={authors} onChange={handleAuthorsChange}
            ></textarea>
            <div className="input-icon"></div>
          </div>
          <small>Enter full name of each author, separated by a comma (,)</small>
          <div className="mt-2">
            {
              authors && authors.map(a => a !== "" && a !== " " ? <div className="author-badge">{a}</div> : <></>)
            }
          </div>
        </div>
        <div className="mb-4 mt-3">
          <label for="formFile" className="form-label">
            Choose a research paper
          </label>
          <input className="form-control" type="file" id="formFile" />
        </div>
        <button type="button" className="btn btn-dark" onClick={createSubmission}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddSubmission;
