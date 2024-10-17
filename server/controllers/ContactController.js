const { Types } = require('mongoose');
const User = require('../models/schemas/UserSchema.js');
const Message = require('../models/schemas/MessageSchema.js');

const serachContacts = async (req, res) => {
   const { search } = req.body;
   console.log(search);
   try {
      if (search === undefined || search === null) {
         return res.status(500).json({ msg: 'Search Tern is Required', status: false });
      }
      const SanitizeSeach = search.replace(/[.*+?^${}()|[\]\\]/g, "//$&");
      const regax = new RegExp(SanitizeSeach, "i");
      console.log('regax', regax)
      // Serach From Database
      const contacts = await User.find({ $or: [{ firstname: regax }, { lastname: regax }] }).limit(10);
      console.log('Serach Contact List', contacts)
      return res.status(200).json({ contacts });

   } catch (error) {
      console.error('Error searching contacts:', error);
      return res.status(500).json({ msg: 'Server error', status: false });
   }
}

const getContactsDmMessage = async (req, res) => {
   let { senderId } = req.body;
   if (!senderId) {
     return res.status(400).json({ msg: 'Sender ID is required', status: false });
   }
 
   console.log('Sender ID:', senderId);
   senderId = new Types.ObjectId(senderId);; // Convert to ObjectId
 
   try {
     const messages = await Message.find({
       $or: [{ senderId }, { receiverId: senderId }],
     }).sort({ createdAt: -1 });
 
     console.log('Fetched Messages:', messages); // Debug message fetching
 
     const contactIds = new Set(
       messages.map((msg) =>
         msg.senderId.toString() === senderId.toString()
           ? msg.receiverId.toString()
           : msg.senderId.toString()
       )
     );
 
     console.log('Contact IDs:', Array.from(contactIds)); // Debug extracted IDs
 
     const contacts = await User.find({ _id: { $in: Array.from(contactIds) } });
 
     console.log('Fetched Contacts:', contacts); // Debug contact fetching
 
     const contactList = contacts.map((contact) => {
       const lastMessage = messages.find(
         (msg) =>
           msg.senderId.toString() === contact._id.toString() ||
           msg.receiverId.toString() === contact._id.toString()
       );
 
       return {
         _id: contact._id,
         firstname: contact.firstname,
         lastname: contact.lastname,
         image: contact.image,
         lastMessageTime: lastMessage ? lastMessage.createdAt : null,
       };
     });
 
     console.log('Contact List:', contactList); // Debug contact list
 
     res.status(200).json({ contacts: contactList });
   } catch (error) {
     console.error('Error fetching contacts:', error);
     res.status(500).json({ message: 'Internal server error' });
   }
 };

module.exports = { serachContacts, getContactsDmMessage };