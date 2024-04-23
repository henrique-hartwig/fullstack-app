import test, { beforeEach } from "node:test"

const request = require('supertest')
const appTest = require('../../src/app')

test('should list all users', () => {
    request(appTest).get('/users')
        .then((response: any) => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveLength(1);
            expect(response.body[1]).toHaveProperty('name', 'Henrique')
        })
})
