const request = require('supertest')
const usersTest = require('../../src/routes/users')

it('should list all users', () => {
    return request(usersTest).get('/users')
        .then((response: any) => {            
            expect(response.status).toBe(200)
            expect(response.body).toHaveLength(1)
            expect(response.body[0]).toHaveProperty('name', 'Henrique')
        })
})

// it('should create a new user', () => {
//     request(usersTest).post('/users')
//         .send({ name: 'João', email: 'joao@mail.com' })
//         .then((response: any) => {            
//             expect(response.status).toBe(201)
//             expect(response.body).toHaveLength(1)
//             expect(response.body[0]).toHaveProperty('name', 'João')
//         })
// })
