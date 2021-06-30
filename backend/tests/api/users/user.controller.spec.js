const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const server = require("../../../index");

chai.use(chaiHttp);

describe("POST /login", () => {
  it("should give a user token when user log into site", (done) => {
    const user = {
      email: "dananjaya@gmail.com",
      password: "#dananjaya1#",
    };

    chai
      .request(server)
      .post("/login")
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("user").not.eql(null);
        res.body.should.have.property("success").eql(true);
        res.body.should.have.property("token").not.eql(null);
        done();
      });
  });
});

describe("PUT /updatePosition", () => {
  it("should change a user position successfully when admin change the user position", (done) => {
    const userData = {
      id: "60d9dca6c0d0a74de48d3906",
      position: "2",
    };

    chai
      .request(server)
      .put("/updatePosition")
      .send(userData)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("success").eql(true);
        res.body.should.have.property("data").not.eql(null);
        done();
      });
  });
});
