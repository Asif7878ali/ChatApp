require('dotenv').config()
const JWT = require('jsonwebtoken');

const verifytoken = (req, res, next)=>{
   try {
      console.log(req.body.headers.Authorization);
      const token = req.body.headers.Authorization.split(' ')[1];
      console.log(token);
      const decoded = JWT.verify(token, process.env.JWTSECRETKEY);
      console.log(decoded);
      console.log(decoded.id);
      next();
   } catch (error) {
       console.log(error);
       res.status(401).json({ msg: 'Authentication failed' });
   }
}

module.exports = verifytoken;