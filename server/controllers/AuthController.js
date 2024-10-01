require('dotenv').config()
const User = require('../models/schemas/UserSchema.js');
const JWT = require('jsonwebtoken')


const signup = async (req,res) => {
  try {
    const { email, firstname, lastname, password } = req.body;
    // findone method me first paramemter database wali entry hogi second wali req se aaye body hogi
    const userExist = await User.findOne({email : email}).exec();

    if(userExist){
         console.log('User is Already Exist')
         return res.status(208).json({msg:'User is Already Exist', status: false});
    } else {
        const user = new User({
            email, firstname, lastname, password
        });
        await user.save();
        console.log('User Register Succesfull');
        return  res.status(201).json({ msg: 'User Registration Successful', status: true });
    }

  } catch (error) {
      console.warn('Error is', error);
      return res.status(500).json({ msg: 'Internal Server Error', status: false });
  }
}


const login = async (req,res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).exec();
     if (!user) {
         console.log('User with given E-mail was not Found');
        return res.status(404).json({ msg: 'User with given E-mail was not Found', status: false });
      }
      if (user.password !== password) {
        console.log('Invalid Credentials')
        return res.status(403).json({ msg: 'Invalid Credentials', status: false });
      }
      //create Token
      const jwttoken = JWT.sign({id:user._id}, process.env.JWTSECRETKEY, {expiresIn : '1h'});
      console.log('Login Successful');
      return res.status(202).json({ user :{
        msg : 'Login Succesfull',
        token : jwttoken,
        profileSetup: user.profileSetup
      }, status: true});
  } catch (error) {
      console.warn('Error is', error);
      return res.status(500).json({ msg: 'Internal Server Error', status: false });
  }
}

const getuserinfo = async (req,res) => {
  try {
        const userdatabaseid = req.id
        console.log(userdatabaseid);
        const user = await User.findById(userdatabaseid);
        if(!user){
          return res.status(400).json({ msg: 'User not Found', status: false });
        }
        const { firstname, lastname, email, profileSetup, username, image} = user;
        return res.status(200).json({ user:{
          firstname,
          lastname,
          email,
          profileSetup,
          username,
          image
        }, status: true });
  } catch (error) {
      console.warn('Error is', error);
      return res.status(500).json({ msg: 'Internal Server Error',status: false });
  }
}

const profileSetup = async (req,res) => {
  try {
        const userdatabaseid = req.id
        const { username } = req.body;
       
        const profilePictureUrl = req.body.profilePictureUrl; //Comes from Cloudinary
        if (!username || !profilePictureUrl) {
          return res.status(406).json({ msg: 'Username and Image are required', status: false });
        }
       
        await User.findByIdAndUpdate(userdatabaseid, {
          username: username,
          image: profilePictureUrl,
          profileSetup: true
        })
        return res.status(201).json({ msg: 'Profile Setup successfully', status: true });
  } catch (error) {
      console.warn('Error is', error);
      return res.status(500).json({ msg: 'Internal Server Error', status: false });
  }
}

const logout = async (req, res) =>{
      try {
          console.log('logout...');
          res.clearCookie('token', { httpOnly: true, secure: true, sameSite: 'Strict' });
          return res.status(200).json({ msg: 'Logout successful', status: true });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Internal Server Error', status: false });
      }
}

module.exports = { signup, login, getuserinfo, profileSetup, logout };