const app = require('../app');

const supertest = require('supertest');

describe('returns a 404 page if route does not exist', () => {
  it("GET /cryptotakl", async () => {
    await supertest(app).get("/cryptotakl")
      .expect(404)
      .then(response => {
        expect(response.text).toEqual("{\"error\":\"404 Page not found.\"}");
      });
  })
})

describe('returns a Welcome message at root route', () => {
  it("GET /", async () => {
    await supertest(app).get("/")
      .expect(200)
      .then(response => {
        expect(response.text).toEqual("Welcome to our Capstone Project");
      });
  });
});
