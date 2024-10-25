const { Types } = require('mongoose');
const User = require('../models/schemas/UserSchema.js');
const Message = require('../models/schemas/MessageSchema.js');

const serachContacts = async (req, res) => {
  console.log('Search Contact API Hit');
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
  console.log('GetDM Contact API Hit');
  let { senderId } = req.body;

  // Validate senderId
  if (!senderId) {
    return res.status(400).json({ msg: 'Sender ID is required', status: false });
  }

  try {
    console.log('Sender ID:', senderId);
    // senderId = new Types.ObjectId(senderId); // Convert senderId to ObjectId

    // Fetch all messages where the user is either the sender or receiver
    const messages = await Message.find({
      $or: [{ senderId }, { receiverId: senderId }],
    }).sort({ createdAt: -1 }); // Sort messages by latest first

    console.log('Fetched Messages:', messages);

    // Extract unique contact IDs
    const contactIds = new Set(
      messages.map((msg) =>
        msg.senderId.toString() === senderId.toString()
          ? msg.receiverId.toString()
          : msg.senderId.toString()
      )
    );

    console.log('Contact IDs:', Array.from(contactIds)); // Debug contact IDs

    // Fetch contact details using the extracted IDs
    const contacts = await User.find({ _id: { $in: Array.from(contactIds) } });

    console.log('Fetched Contacts:', contacts);

    // Map contacts with their latest message time
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

    console.log('Contact List:', contactList);

    // Send the contact list as response
    // res.status(200).json({ data: contactList, status: true });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { serachContacts, getContactsDmMessage };