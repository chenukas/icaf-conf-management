const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../../../index');

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
      }).end((err , res) => {
        res.should.have.status(200);
        res.body.should.have.property('success').eql(true);
        res.body.should.have.property('data').not.eql(null);
        done();
    });
  });
});
