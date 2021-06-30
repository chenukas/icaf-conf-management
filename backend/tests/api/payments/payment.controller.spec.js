const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const server = require("../../../index");

chai.use(chaiHttp);

describe("POST /payments", () => {
  it("should return an error when \'type\' is not sent'", (done) => {
    chai
      .request(server)
      .post("/payments")
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });

  it("should return an error when \'payDate\' is not sent'", (done) => {
    chai
      .request(server)
      .post("/payments")
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
  it("should return an error when \'amount\' is not sent'", (done) => {
    chai
      .request(server)
      .post("/payments")
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
});
