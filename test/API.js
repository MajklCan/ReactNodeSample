
import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../backend/server.js'
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('Restaurant test', () => {
/*
  * Test the /GET route
  */
  describe('/GET test', () => {
      it('Test /api/restaurants route', (done) => {
        chai.request(app)
            .get('/api/restaurants')
            .end((err, res) => {
                  res.body.should.be.a('array');
              done();
            });
      });
  });

});