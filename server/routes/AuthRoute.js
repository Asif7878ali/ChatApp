const express = require('express');
const {signup, login, getuserinfo, profileSetup, logout} = require('../controllers/AuthController.js');
const verifytoken = require('../middlewares/AuthMiddleware.js');
const uploadProfilePicture = require('../middlewares/ProfilePictureMulter.js');
const { serachContacts, getContactsDmMessage } = require('../controllers/ContactController.js');
const {getMessages} = require('../controllers/MessageController.js');

const authRoute = express.Router();

authRoute.post( '/user/signup', signup );
authRoute.post( '/user/login', login );
authRoute.post( '/user/verify', verifytoken, getuserinfo ); //first is middleware 
authRoute.post( '/user/profile/setup',verifytoken, uploadProfilePicture, profileSetup ); //first and second is middleware
authRoute.post( '/user/logout', verifytoken, logout );
authRoute.post( '/search/contact', serachContacts);
authRoute.post( '/get/contact/dm/messages', getContactsDmMessage);
authRoute.post( '/get/messages', getMessages );

module.exports = authRoute;