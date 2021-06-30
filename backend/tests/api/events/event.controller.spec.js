const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../../../index');

chai.use(chaiHttp);

describe('PUT /submissions/:id/status', () => {
    it('should approve an submission successfully', done => {
        const data = {
            status: 'approved'
        }

        chai.request(server)
            .put('/submissions/60dc80d6f117d30008300666/status')
            .send(data)
            .end((err , res) => {
                res.should.have.status(200);
                res.body.should.have.property('success').eql(true);
                res.body.should.have.property('data').not.eql(null);
                res.body.data.should.have.property('status').eql(data.status);
                done();
            });
    });
})

describe('POST /events', () => {
    it('should create an event successfully', done => {
        const event = {
            name: "Keynote",
            description: "This is a test event",
            venue: "SLIIT Auditorium",
            start: "2021-07-02",
            end: "2021-07-03"
        }

        chai.request(server)
            .post('/events')
            .send(event)
            .end((err , res) => {
                res.should.have.status(200);
                res.body.should.have.property('success').eql(true);
                res.body.should.have.property('data').not.eql(null);
                res.body.data.should.have.property('name').eql(event.name);
                res.body.data.should.have.property('description').eql(event.description);
                res.body.data.should.have.property('venue').eql(event.venue);
                done();
            });
    });
})
