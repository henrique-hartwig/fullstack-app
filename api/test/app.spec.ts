const appTest = require('../src/app')

beforeEach(() => {
  // const supertest = require('supertest')
  // const request = supertest('http://localhost:4000')
})

it('should create App div', () => {
  const a = null
  expect(a).toBeNull()
})

it('should have name key at my object', () => {
  const person = {
    name: 'henrique',
    gender: 'male'
  }
  expect(person).toHaveProperty('name')
})

it('should return statu 200 of my API host', () => {
  const supertest = require('supertest')
  const request = supertest('http://localhost:4000')
  return request.get('/')
    .then((response: any) => {
      expect(response.status).toBe(404)
    })
})
