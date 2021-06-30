const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const server = require("../../../index");

chai.use(chaiHttp);

describe("POST /register", () => {
  it("should return an error when email is not sent", (done) => {
    chai
      .request(server)
      .post("/register")
      .expect(400)
      .send({
        fullName: "Heshan Denuka",
        contactNumber: "0764521456",
        position: "0",
        type: "RP",
        password: "#heshan1#",
        confirmPassword: "#heshan1#",
      })
      .end((res) => {
        res.body.should.property("success").eql(false);
        res.body.should.have.property("message").eql("Email is undefined");
        done();
      });
  });

  it("should return an error when password and confirm password are unmatching", (done) => {
    chai
      .request(server)
      .post("/register")
      .expect(400)
      .send({
        fullName: "Heshan Denuka",
        contactNumber: "0764521456",
        email: "heshan@gmail.com",
        position: "0",
        type: "RP",
        password: "#heshan1",
        confirmPassword: "#heshan1#",
      })
      .end((res) => {
        res.body.should.property("success").eql(false);
        res.body.should.have
          .property("message")
          .eql("Password and Confirm Password are not matching");
        done();
      });
  });

  it("should return a successful message when user is register", (done) => {
    chai
      .request(server)
      .post("/register")
      .expect(200)
      .send({
        fullName: "Heshan Denuka",
        contactNumber: "0764521456",
        email: "heshan@gmail.com",
        position: "0",
        type: "RP",
        password: "#heshan1#",
        confirmPassword: "#heshan1#",
      })
      .end((err, res) => {
        res.body.should.property("success").eql(true);
        res.body.should.have.property("message").eql("new User added");
        done();
      });
  });
});

describe("POST /login", () => {
  it("should return an error when email is not sent", (done) => {
    chai
      .request(server)
      .put("/login")
      .expect(400)
      .send({
        email: "",
        password: "#heshan1#",
      })
      .end((res) => {
        res.body.should.property("success").eql(false);
        res.body.should.have.property("message").eql("Email is undefined");
        done();
      });
  });

  it("should return a successful message when user is login ", (done) => {
    let user, token;
    chai
      .request(server)
      .post("/login")
      .expect(200)
      .send({
        email: "dananjaya@gmail.com",
        password: "#dananjaya1#",
      })
      .end((res) => {
        res.body.should.property("success").eql(true);
        res.body.should.have.property("message").eql("Token is assigned");
        user = res.body.data;
        token = res.body.token;
        done();
      });
  });
});

describe("PUT /change user position", () => {
  it("should return a successful message when admin is change user position ", (done) => {
    let user;
    chai
      .request(server)
      .put("/updatePosition")
      .expect(200)
      .send({ id: "60d9dca6c0d0a74de48d3906", position: "2" })
      .end((res) => {
        res.body.should.property("success").eql(true);
        user = res.body.data;
        done();
      });
  });
});

describe("GET /All users", () => {
  it("should return all the users", (done) => {
    let users;
    chai
      .request(server)
      .get("/")
      .expect(200)
      .send({})
      .end((res) => {
        res.body.should.property("success").eql(true);
        users = res.body.data;
        done();
      });
  });
});
