import test, { beforeEach } from "node:test"

const appTest = require('../../src/app')

beforeEach(() => {
  // const supertest = require('supertest')
  // const request = supertest('http://localhost:4000')
})

test('should create App div', () => {
  const a = null
  expect(a).toBeNull()
})

test('should have name key at my object', () => {
  const person = {
    name: 'henrique',
    gender: 'male'
  }
  expect(person).toHaveProperty('name')
})

test('should return statu 200 of my API host', () => {
  const supertest = require('supertest')
  const request = supertest('http://localhost:4000')
  return request.get('/')
    .then((response: any) => {
      expect(response.status).toBe(400)
    })
})
