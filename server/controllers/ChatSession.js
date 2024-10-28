const directMessagesContactPerson = require('../models/schemas/DirectMessagesContactPerson.js');

const createOrUpdateChatSession = async (req, res)=>{
    console.log('Chat Session API Hit');
   const { senderId, receiverId } = req.body;
   console.log('Sender',senderId);
   console.log('Receiver',receiverId);

   try {
    
   } catch (error) {
    console.error('Error creating or updating chat session:', error);
    return res.status(500).json({ msg: 'Error in chat session', status: false });
   }
}

module.exports = {createOrUpdateChatSession};