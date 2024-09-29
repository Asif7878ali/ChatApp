const express = require('express');
const {signup, login, getuserinfo, profileSetup, logout} = require('../controllers/AuthController.js');
const verifytoken = require('../middlewares/AuthMiddleware.js');
const uploadProfilePictureMulter = require('../middlewares/ProfilePictureMulter.js');

const authRoute = express.Router();
authRoute.post( '/user/signup', signup );
authRoute.post( '/user/login', login );
//first is middleware 
authRoute.post( '/user/verify', verifytoken, getuserinfo );
authRoute.post( '/user/profile/setup', verifytoken, uploadProfilePictureMulter, profileSetup );
authRoute.post( '/user/logout', verifytoken, logout )

module.exports = authRoute;