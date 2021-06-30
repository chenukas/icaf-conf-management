import React from "react";
import "./Download.css";

const Download = () => {
  return (
    <div className="container">
      <div className="admission">
          <h4>Download Reaserch paper templates</h4>
          <br></br>
        <div className="row">
          <div className="col-6">
            <h5>IEEE Research Template</h5>
          </div>
          <div className="col-6">
            <button type="button" className="btn btn-dark download">
              <a
                className="download"
                href="https://storage.googleapis.com/af-icaf.appspot.com/5bddae1b43558f69a2e7fffcd3a0acd4.docx"
              >
                Download
              </a>
            </button>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div className="col-6">
            <h5>Research Proposal Template 1</h5>
          </div>
          <div className="col-6">
            <button type="button" className="btn btn-dark download">
              <a
                className="download"
                href="https://storage.googleapis.com/af-icaf.appspot.com/254ba28ee320b7f15d1cad09c356d19b.doc"
              >
                Download
              </a>
            </button>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div className="col-6">
            <h5>Research Proposal Template 2</h5>
          </div>
          <div className="col-6">
            <button type="button" className="btn btn-dark download">
              <a
                className="download"
                href="https://storage.googleapis.com/af-icaf.appspot.com/86135cbd516402bda63be9fc2a743892.pdf"
              >
                Download
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
