const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const server = require("../../../index");

const submissionService = require("../../../services/submission.service");

chai.use(chaiHttp);

describe("POST /submissions", () => {
  it("should return an error when \'uid\' is not sent", (done) => {
    chai
      .request(server)
      .post("/submissions")
      .send({})
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property("success").eql(false);
        res.body.should.have.property("message").eql("UID is undefined");
        done();
      });
  });

  it("should return an error when \'title\' is not sent", (done) => {
    chai
      .request(server)
      .post("/submissions")
      .send({ uid: "507f1f77bcf86cd799439011" })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property("success").eql(false);
        res.body.should.have.property("message").eql("Title is undefined");
        done();
      });
  });

  it("should return an error when \'abstract\' is not sent", (done) => {
    chai
      .request(server)
      .post("/submissions")
      .send({
        uid: "507f1f77bcf86cd799439011",
        title: "Sample Research Submission",
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.property("success").eql(false);
        res.body.should.have.property("message").eql("Abstract is undefined");
        done();
      });
  });

  it("should return an error when \'authors\' is not sent", (done) => {
    const submissionData = {
      uid: "507f1f77bcf86cd799439011",
      title: "Sample Research Submission",
      abstract:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    };

    chai
      .request(server)
      .post("/submissions")
      .send(submissionData)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.property("success").eql(false);
        res.body.should.have.property("message").eql("Authors required");
        done();
      });
  });

  it("should return an error when \'fileURL\' is not sent", (done) => {
    const submissionData = {
      uid: "507f1f77bcf86cd799439011",
      title: "Sample Research Submission",
      abstract:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      authors: ["Suhara Vithanage"],
    };

    chai
      .request(server)
      .post("/submissions")
      .send(submissionData)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.property("success").eql(false);
        res.body.should.have.property("message").eql("File URL is undefined");
        done();
      });
  });

  it("should create a submission record successfully", (done) => {
    const submissionData = {
      uid: "507f1f77bcf86cd799439011",
      title: "Sample Research Submission",
      abstract:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      authors: ["Suhara Vithanage"],
      fileURL: "https://example.com/sample.pdf",
    };

    let submission;

    chai
      .request(server)
      .post("/submissions")
      .send(submissionData)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("success").eql(true);
        res.body.should.have.property("data").not.eql(null);
        res.body.data.should.have.property("title").eql(submissionData.title);
        res.body.data.should.have
          .property("abstract")
          .eql(submissionData.abstract);
        res.body.data.should.have
          .property("fileURL")
          .eql(submissionData.fileURL);
        submission = res.body.data;
        done();
      });

    after(async () => {
      if (submission) {
        console.log(`Deleting record ${submission._id} after test`);
        await submissionService.deleteSubmissionRecord(submission._id);
      }
    });
  });
});
