module.exports = () => {
  const getUsers = (request, response) => {
    const users = [{
      name: 'Henrique',
      email: 'henrique2805@gmail.com'
      }]
    response.status(200).json(users)
  }

  const createUsers = (request, response) => {
    response.status(201).json(request.body)
  }

  return { getUsers, createUsers }
}
