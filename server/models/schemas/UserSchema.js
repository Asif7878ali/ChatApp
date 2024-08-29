const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username : {
      type : String,
      required : [true ,'Username is Required']
    },
    email :  {
      type : String,
      required : [true ,'E-mail is Required']
    },
    password :  {
      type : String,
      required : [true ,'Password is Required']
    }
  })  

const chatappuser = new mongoose.model('Users', userSchema)

module.exports = chatappuser