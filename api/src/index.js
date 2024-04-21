var dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
var app = require('./app');
var port = process.env.API_;
app.listen(process.env.API_PORT, function () {
    console.log("API rodando em http://localhost:".concat(port));
    console.log("API rodando em http://".concat(process.env.API_HOST, ":").concat(process.env.API_PORT));
});
