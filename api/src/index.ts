const dotenv = require('dotenv')
dotenv.config( { path: '../.env' })

const application = require('./app');
const port = process.env.API_

application.listen(process.env.API_PORT, () => {
  console.log(`API rodando em http://localhost:${port}`);
  console.log(`API rodando em http://${process.env.API_HOST}:${process.env.API_PORT}`);
});