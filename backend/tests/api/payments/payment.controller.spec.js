const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const server = require("../../../index");

chai.use(chaiHttp);

describe("POST /payments", () => {
  it("should add new payment", (done) => {
    chai
      .request(server)
      .post("/payments")
      .send({
        type: "Attendee",
        userId: "60dc468dd354de2018e91e60",
        name: "Chamodi Thennakoon",
        payDate: 2021 - 07 - 09,
        amount: 3000,
      })
      .expect(200)
      .then((res) => {
        res.should.have.status(200);
        res.body.should.have.property("success").eql(true);
        done();
      });
  });
});
