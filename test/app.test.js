const request = require('supertest');
const app = require('../app'); // Adjust the path if needed

describe('GET /', () => {
  it('should return 200 and the correct message', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Hello, DevOps POC!');
  });
});
