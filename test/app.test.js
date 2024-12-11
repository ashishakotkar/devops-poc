const request = require('supertest');

describe('GET /', () => {
  it('should return 200 and the correct message from the live app', async () => {
    const res = await request('https://devops-poc.onrender.com')  // Use the live URL
      .get('/');  // Send a GET request to the root endpoint
    expect(res.status).toBe(200);
    expect(res.text).toBe('Hello, DevOps POC!!');
  });
});
