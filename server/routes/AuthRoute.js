const express = require('express');
const signup = require('../controllers/AuthController.js');

const authRoute = express.Router();
authRoute.post('/signup', signup);

module.exports = authRoute;