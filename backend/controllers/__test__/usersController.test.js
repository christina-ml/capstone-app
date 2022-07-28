const app = require('../../app.js');
const supertest = require('supertest');

describe('returns json data for all users', () => {
    it ('returns an object with all users', async () => {
        await supertest(app).get("/users")
            .expect(200)
            .then((response) => {
                // console.log(response.body)
                expect(response.body).toBeInstanceOf(Array);
                expect(response.body.length).toBe(15);
            })        
    })
})

