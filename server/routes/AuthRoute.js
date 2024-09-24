const express = require('express');
const {signup, login, getuserinfo} = require('../controllers/AuthController.js');
const verifytoken = require('../middlewares/AuthMiddleware.js');

const authRoute = express.Router();
authRoute.post('/signup', signup);
authRoute.post('/login', login);
//first is middleware 
authRoute.post('/verify/user', verifytoken, getuserinfo);
authRoute.post('/profile/setup', verifytoken);

module.exports = authRoute;