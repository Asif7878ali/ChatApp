const User = require('../models/schemas/UserSchema.js');

const signup = async (req,res) => {
    console.log('client', req.body);
  try {
    const { username, email, password } = req.body;
    const userExist = await User.findOne({email : email}).exec();

    if(userExist){
        return res.status(400).json({msg:'User is Already Exist'});
    } else {
        const user = new User({
            username, email, password
        });
        const document = await user.save();
        console.log(document);
        return  res.status(200).json({ msg: 'User Registration successful' });
    }

  } catch (error) {
      console.warn('Error is', error);
      return res.status(500).json({ message: 'Internal Server Error' });
  }
}
module.exports = signup;