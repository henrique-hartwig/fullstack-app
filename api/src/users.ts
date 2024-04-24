module.exports = (app) => {
  app.get('/users', (request, response) => {
    const users = [{
      name: 'Henrique',
      email: 'henrique2805@gmail.com'
      }]
    response.status(200).json(users)
  })

  app.post('/users', (request, response) => {
    response.status(201).json(request.body)
  })
};