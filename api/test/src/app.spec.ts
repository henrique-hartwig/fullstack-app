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