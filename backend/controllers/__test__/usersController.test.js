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

    it ('returns an array with an individual users interests', async () => {
        await supertest(app).get("/users")
        .expect(200)
        .then((response) => {
            // console.log(response.body[0].user_interests)
            expect(response.body[0].user_interests).toBeInstanceOf(Array);
            expect(response.body[0].user_interests.length).toBe(2);
        })
    })
})

