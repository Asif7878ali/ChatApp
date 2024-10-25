const Message = require('../models/schemas/MessageSchema.js');

const getMessages = async (req ,res) =>{
    console.log('Get Messages API Hit');
    console.log(req.body);
    const { senderId, recipientId } = req.body;
   try {
    if (!senderId || !recipientId) {
        return res.status(400).json({ msg: "Both Sender and Recipient IDs are required", status: false });
      }
     const getMessages = await Message.find({
        $or : [
            { sender: senderId, recipient: recipientId },
            { sender: recipientId, recipient: senderId },
        ]
     }).sort({ tiimestamp : 1});
        console.log(getMessages);
       return res.status(200).json({getMessages, status:true});
   } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error", status: false });
   }
}

module.exports = { getMessages };