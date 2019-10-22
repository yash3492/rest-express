const supertest = require('supertest');
const should = require('should');

// This agent refers to PORT where program is running.
const appInstance = require('./../src')();

const server = supertest.agent(appInstance);

// UNIT test begin
describe('Rest API unit tests', function () {

    // #1 should return status of server
    it('should return status info', function (done) {

        //this.timeout(10000);
        // calling status api
        server
          .get('/')
          .expect('Content-type', /json/)
          .expect(200) // THis is HTTP response
          // .then(response => {
          //     assert(response.body.yash, undefined)
          // })
          .end(function (err, res) {
              should.exist(res.body);
              (res.body).success.should.be.exactly(true);
              (res.body).should.be.an.instanceOf(Object);
              done();
          });
    });

    it('should return two numbers', function (done) {

        this.timeout(10000);
        //calling POST api
        server
          .post('/test')
          .send({ num1: 10, num2: 20 })
          .expect('Content-type', /json/)
          .expect(200)
          .end(function (err, res) {
              res.status.should.equal(200);
              // res.body.error.should.equal(undefined);
              res.body.num1.should.equal(10);
              res.body.num2.should.equal(20);
              done();
          });
    });

});