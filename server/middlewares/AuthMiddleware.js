require('dotenv').config()
const JWT = require('jsonwebtoken');

const verifytoken = (req, res, next)=>{
   try {
      const token = req.cookies.token;
      console.log(token);
      if(!token){
         return res.status(400).json({ msg: 'You are not Authentication' });
      }
      JWT.verify(token, process.env.JWTSECRETKEY, async(error, payload)=>{
         if(error){
            return res.status(400).json({ msg: 'Token is not Valid' });
         }
         console.log(payload);
         req.id = payload.id; // Token se user ID set ki
         next();
      });
   } catch (error) {
       console.log(error);
       res.status(401).json({ msg: 'Authentication failed' });
   }
}

module.exports = verifytoken;