module.exports = (app) => {
  app.route('/users')
    .get(app.routes.user.getUsers)
    .post(app.routes.user.createUsers)
}