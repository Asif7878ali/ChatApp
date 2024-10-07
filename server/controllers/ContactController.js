const User = require('../models/schemas/UserSchema.js');

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

const getContactsDmMessage = async (req, res) =>{
   
  try {
     

  } catch (error) {
     console.error('Error searching contacts:', error);
     return res.status(500).json({ msg: 'Server error', status: false });
  }
}

module.exports = { serachContacts, getContactsDmMessage };