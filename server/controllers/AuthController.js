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
         return res.status(400).json({msg:'User is Already Exist'});
    } else {
        const user = new User({
            email, firstname, lastname, password
        });
        await user.save();
        console.log('User Register Succesfull');
        return  res.status(201).json({ msg: 'User Registration Successful' });
    }

  } catch (error) {
      console.warn('Error is', error);
      return res.status(500).json({ msg: 'Internal Server Error' });
  }
}


const login = async (req,res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).exec();
     if (!user) {
         console.log('User with given E-mail was not Found');
        return res.status(400).json({ msg: 'User with given E-mail was not Found' });
      }
      if (user.password !== password) {
        console.log('Invalid Credentials')
        return res.status(401).json({ msg: 'Invalid Credentials' });
      }
      //create Token
      const jwttoken = JWT.sign({id:user._id}, process.env.JWTSECRETKEY, {expiresIn : '1h'});
      console.log('Login Successful');
      return res.status(200).json({ user :{
        msg : 'Login Succesfull',
        token : jwttoken,
        profileSetup: user.profileSetup
      }});
  } catch (error) {
      console.warn('Error is', error);
      return res.status(500).json({ msg: 'Internal Server Error' });
  }
}

const getuserinfo = async (req,res) => {
  try {
        const userdatabaseid = req.id
        console.log(userdatabaseid);
        const user = await User.findById(userdatabaseid);
        if(!user){
          return res.status(400).json({ msg: 'User not Found' });
        }
        const { firstname, lastname, email, profileSetup, username, image} = user;
        return res.status(200).json({ user:{
          firstname,
          lastname,
          email,
          profileSetup,
          username,
          image
        } });
  } catch (error) {
      console.warn('Error is', error);
      return res.status(500).json({ msg: 'Internal Server Error' });
  }
}

const profileSetup = async (req,res) => {
  try {
        const userdatabaseid = req.id
        const { username } = req.body;
        if (!username || !req.file) {
          return res.status(400).json({ msg: 'Username and Image are required' });
        }
        // Profile picture path
        const profilePicturePath = req.file.path;
        console.log('Profileimage',profilePicturePath);
        await User.findByIdAndUpdate(userdatabaseid, {
          username: username,
          image: profilePicturePath,
          profileSetup: true
        })
        return res.status(200).json({ msg: 'Profile Setup successfully' });
  } catch (error) {
      console.warn('Error is', error);
      return res.status(500).json({ msg: 'Internal Server Error' });
  }
}

module.exports = {signup, login, getuserinfo, profileSetup};