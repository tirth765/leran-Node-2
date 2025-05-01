const cloudinary = require('cloudinary').v2; 

const cloudinaryImage = async (filepath, foldername) => {

        // Configuration
        cloudinary.config({ 
            cloud_name: 'dcku9d4kk', 
            api_key: process.env.CLOUDINARY_KEY, 
            api_secret: process.env.CLOUDINARY_SECRET
        });
        
        // Upload an image
         const uploadResult = await cloudinary.uploader
           .upload(
            filepath, {
                public_id: foldername,
                folder: foldername
            }
           )
           .catch((error) => {
               console.log(error);
           });
        
        console.log(uploadResult);
        
      return  uploadResult
    
}

module.exports = cloudinaryImage