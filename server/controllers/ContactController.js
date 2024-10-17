const { default: mongoose } = require('mongoose');
const User = require('../models/schemas/UserSchema.js');
const Message = require('../models/schemas/MessageSchema.js');

const serachContacts = async (req, res) =>{
    const {search} = req.body;
    console.log(search);
   try {
       if(search === undefined || search === null){
          return res.status(500).json({ msg: 'Search Tern is Required', status: false });
       }
       const SanitizeSeach = search.replace( /[.*+?^${}()|[\]\\]/g, "//$&" );
       const regax = new RegExp(SanitizeSeach, "i");
       console.log('regax', regax)
       // Serach From Database
       const contacts = await User.find({$or :[ { firstname: regax }, {lastname: regax} ] }).limit(10);
       console.log('Serach Contact List', contacts)
       return res.status(200).json({ contacts });

   } catch (error) {
      console.error('Error searching contacts:', error);
      return res.status(500).json({ msg: 'Server error', status: false });
   }
}

const getContactsDmMessage = async (req, res) => {
   let { senderId } = req.body;
   console.log(senderId);
 
   try {
     senderId = new mongoose.Types.ObjectId(senderId);
 
     const contacts = await Message.aggregate([
       {
         $match: {
           $or: [{ sender: senderId }, { recipient: senderId }]
         }
       },
       {
         $sort: { timeStamp: -1 }
       },
       {
         $group: {
           _id: {
             $cond: {
               if: { $eq: ["$sender", senderId] },
               then: "$recipient",
               else: "$sender"
             }
           },
           lastMessageTime: { $first: "$timeStamp" }
         }
       },
       {
         $lookup: {
           from: "users",
           localField: "_id",
           foreignField: "_id",
           as: "contactInfo"
         }
       },
       { $unwind: "$contactInfo" },
       {
         $project: {
           _id: 1,
           lastMessageTime: 1,
           email: "$contactInfo.email",
           firstname: "$contactInfo.firstname",
           lastname: "$contactInfo.lastname",
           image: "$contactInfo.image"
         }
       },
       {
         $sort: { lastMessageTime: -1 }
       }
     ]);
 
     console.log("Contacts List:", contacts);
     res.status(200).json({ contacts });
   } catch (error) {
     console.error("Error fetching contacts:", error);
     res.status(500).json({ msg: "Server error", status: false });
   }
 };

module.exports = { serachContacts, getContactsDmMessage };