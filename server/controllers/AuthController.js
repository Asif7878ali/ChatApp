const User = require('../models/schemas/UserSchema.js');

const signup = async (req,res) => {
    console.log('client', req.body);
  try {
    const { Email, Firstname, Lastname, Password } = req.body;
    // findone method me first paramemter database wali entry hogi second wali req se aaye body hogi
    const userExist = await User.findOne({email : Email}).exec();

    if(userExist){
        return res.status(400).json({msg:'User is Already Exist'});
    } else {
        const user = new User({
            Email, Firstname, Lastname, Password
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