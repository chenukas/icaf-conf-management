import React from "react";
import "./Download.css";

const Download = () => {
  return (
      
    <div className="container" style={{marginTop: "2em"}}>
      <div className="admission">
          <h4>Download Reaserch paper templates</h4>
          <br></br>
        <div className="row">
          <div className="col-6" style={{marginTop: "1rem"}}>
            <h5>IEEE Research Template</h5>
          </div>
          <div className="col-6" style={{paddingLeft: "50px"}}>
              <a
                className="btn btn-outline-dark mt-3"  target="_blank"
                href="https://storage.googleapis.com/af-icaf.appspot.com/5bddae1b43558f69a2e7fffcd3a0acd4.docx"
              >
                Download
              </a>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div className="col-6" style={{marginTop: "1rem"}}>
            <h5>Research Proposal Template 1</h5>
          </div>
          <div className="col-6"  style={{paddingLeft: "50px"}}>
              <a
                className="btn btn-outline-dark mt-3" target="_blank"
                href="https://storage.googleapis.com/af-icaf.appspot.com/254ba28ee320b7f15d1cad09c356d19b.doc"
              >
                Download
              </a>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div className="col-6" style={{marginTop: "1rem"}}>
            <h5>Research Proposal Template 2</h5>
          </div>
          <div className="col-6"  style={{paddingLeft: "50px"}}>
              <a
                className="btn btn-outline-dark mt-3" target="_blank"
                href="https://storage.googleapis.com/af-icaf.appspot.com/86135cbd516402bda63be9fc2a743892.pdf"
              >
                Download
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
