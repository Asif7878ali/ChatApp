const mongoose = require('mongoose');

const directMessagesContactPersonSchema = new mongoose.Schema({
    participants : [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Users',
        required: true
      }       
    ],
    timeStamp:{
        type : Date,
        default : Date.now
    }

});  

const directMessagesContactPerson = new mongoose.model('directMessagesContactPersons', directMessagesContactPersonSchema);

module.exports = directMessagesContactPerson;