const cloudinary = require('cloudinary').v2;

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadProfilePicture = async (req, res, next) =>{
  console.log(req.body);
  const { profilePicture } = req.body;
  if (!profilePicture) {
    return res.status(400).json({ msg: 'No profile picture provided', status: false });
  }
    try {
       // Upload image to Cloudinary
       const result = await cloudinary.uploader.upload(profilePicture, {
         folder: 'profilePicture',
         resource_type: 'image', // Ensures only image uploads
        });
        // Attach the image URL from Cloudinary to the request object
           req.body.profilePictureUrl = result.secure_url;
           console.log( req.body.profilePictureUrl);
           next();
    } catch (error) {
      console.error('Cloudinary upload error:', error);
      return res.status(500).json({ msg: 'Image upload failed', status: false });
    }
}
  
module.exports = uploadProfilePicture;