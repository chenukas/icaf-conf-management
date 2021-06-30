const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const server = require("../../../index");

chai.use(chaiHttp);

describe("POST /files", () => {
  it("should return an error when a file is not sent", (done) => {
    chai
      .request(server)
      .post("/files")
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
});
