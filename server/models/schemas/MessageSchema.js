const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    sender : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Users',
        required : true
    },
    recipient : {
       type : mongoose.Schema.Types.ObjectId,
       ref: 'Users',
       required : false
    },
    messageType : {
        type : String,
        enum : ['text', 'file'],
        required : true
    },
    content: { 
        type: String, 
        required: function(){
            return this.messageType ==='text';
        },
    },
    fileurl : {
        type: String, 
        required: function(){
            return this.messageType ==='file';
        },
    },
    timeStamp:{
        type : Date,
        default : Date.now
    }

});  

const Messsage = new mongoose.model('Messages', messageSchema);

module.exports = Messsage;