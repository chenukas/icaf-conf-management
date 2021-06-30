import React, {useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./AddSubmission.css";

const AddSubmission = () => {
    const [title, setTitle] = useState('');
    const [abstract, setAbstract] = useState('');
    const [authors, setAuthors] = useState([]);
    const [fileURL, setFileURL] = useState('');
    const [uploading, setUploading] = useState(false);

    const handleTitleChange = e => setTitle(e.target.value);

    const handleAbstractChange = e => setAbstract(e.target.value);

    const handleAuthorsChange = e => setAuthors(e.target.value.split(','));

    const clearForm = () => {
        setTitle('');
        setAbstract('');
        setAuthors([]);
        setFileURL('');
        document.getElementById("formFile").value = null;
    }

    const canSubmit = () => title &&
        abstract &&
        authors &&
        fileURL;

    const onFileChange = e => {
        setUploading(true);
        const selectedFile = e.target.files[0];
        const formData = new FormData();
        formData.append(
            "file",
            selectedFile,
            selectedFile.name
        );

        axios.post("http://localhost:5000/files", formData)
            .then(response => {
                console.log(response);
                setFileURL(response.data && response.data.publicURL);
                setUploading(false);
            }).catch(err => {
                Swal.fire(
                    'Oopz!',
                    (err.error && err.error.message) || 'Could not upload file',
                    'danger',
                );
                setUploading(false);
            }
        );

    }

    const createSubmission = () => {
        axios.post("http://localhost:5000/submissions", {
            title, abstract, authors, fileURL,
            uid: localStorage.getItem("logUserId")
        }).then(response => {
            // show alert
            Swal.fire(
                'Successful!',
                'Created submission successfully!',
                'success'
            ).then(() => clearForm());
        }).catch(err => {
            Swal.fire(
                'Oopz!',
                (err.error && err.error.message) || 'Could not create submission',
                'danger'
            );
        });
    }


    return (
        <div className="container" style={{marginTop: '20px'}}>
            <form>
                <div className="row">
                    <h4>Add new Submission</h4>
                    <div className="input-group">
                        <input type="text" placeholder="Title" value={title} onChange={handleTitleChange}/>
                        <div className="input-icon"></div>
                    </div>
                    <div className="input-group">
                        <textarea className="form-control abstract" placeholder="Abstract" value={abstract}
                                  onChange={handleAbstractChange}/>
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
                            authors && authors.map(a => a !== "" && a !== " " ?
                                <div key={a} className="author-badge">{a}</div> : <></>)
                        }
                    </div>
                </div>
                <div className="mb-4 mt-3">
                    <label for="formFile" className="form-label">
                        Choose a research paper
                    </label>
                    <input className="form-control" type="file" id="formFile" onChange={onFileChange}/>
                    <small className="text-danger" hidden={!uploading}>Uploading...</small>
                    <small className="text-success" hidden={!fileURL}>Uploaded</small>
                </div>
                <button type="button" className="btn btn-dark"
                        onClick={createSubmission}
                        disabled={!canSubmit()}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddSubmission;
