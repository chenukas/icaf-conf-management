const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../../../index');

chai.use(chaiHttp);

describe('POST /submissions', () => {
    it('should return an error when \'title\' is not sent', done => {
        chai.request(server)
            .post('/submissions')
            .send({})
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.have.property('success').eql(false);
                res.body.should.have.property('message').eql('Title is undefined');
                done();
            });
    });

    it('should return an error when \'abstract\' is not sent', done => {
        chai.request(server)
            .post('/submissions')
            .send({title: 'Sample Research Submission'})
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.property('success').eql(false);
                res.body.should.have.property('message').eql('Abstract is undefined');
                done();
            });
    });

    it('should return an error when \'fileURL\' is not sent', done => {

        const submissionData = {
            title: 'Sample Research Submission',
            abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }

        chai.request(server)
            .post('/submissions')
            .send(submissionData)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.property('success').eql(false);
                res.body.should.have.property('message').eql('File URL is undefined');
                done();
            });
    });
})
