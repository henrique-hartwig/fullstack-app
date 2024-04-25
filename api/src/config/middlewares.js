
module.exports = (app) => {
  app.use(require('body-parser').json())
  app.use(require('cors')())
}
