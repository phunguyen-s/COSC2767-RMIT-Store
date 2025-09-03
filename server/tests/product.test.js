const request = require('supertest');
const app = require('../index'); // Express app
const { expect } = require('chai');

describe('GET /api/products', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/api/products');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });
});
