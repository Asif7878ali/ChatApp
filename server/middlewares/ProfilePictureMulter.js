const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadDirectory = 'uploads/profile_pictures';
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}

// Multer storage configuration
const storage = multer.diskStorage({
    //file destination name
    destination: (req, file, cb) => {
      cb(null, 'uploads/profile_pictures'); // Folder to save images
    },
    //file name
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  });

  // Multer file filter for image types
const fileFilter = (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|webp|svg/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);
    
    if (mimeType && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only images are allowed'));
    }
  };

  // Setting multer with storage, file size limit, and file filter
const uploadProfilePictureMulter = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 }, // Limit to 5MB
    fileFilter: fileFilter
  }).single('profilePicture'); 
  

module.exports = uploadProfilePictureMulter;