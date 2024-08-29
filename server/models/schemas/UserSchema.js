const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username : {
      type : String,
      required : false
    },
    firstname: {
      type: String,
      required: [true ,'Name is Required']
    },
    lastname: {
      type: String,
      required: [true ,'Sirname is Required']
    },
    image: {
      type: String,
      required: false
    },
    email :  {
      type : String,
      required : [true ,'E-mail is Required']
    },
    password :  {
      type : String,
      required : [true ,'Password is Required']
    },
    profileSetup :{
        type : Boolean,
        default : false
    }
  })  

const chatappuser = new mongoose.model('Users', userSchema)

module.exports = chatappuser