const express = require('express');
const {signup, login, getuserinfo} = require('../controllers/AuthController.js');
const verifytoken = require('../middlewares/AuthMiddleware.js');

const authRoute = express.Router();
authRoute.post('/signup', signup);
authRoute.post('/login', login);
authRoute.get('/verify/login/user', verifytoken, getuserinfo);

module.exports = authRoute;