const cloudinary = require('cloudinary').v2; 

// Configuration
cloudinary.config({ 
    cloud_name: 'dcku9d4kk', 
    api_key: process.env.CLOUDINARY_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET
});

const cloudinaryImage = async (filepath, foldername) => {       
        
        // Upload an image
         const uploadResult = await cloudinary.uploader
           .upload(
            filepath, {
                folder: foldername
            }
           )
           .catch((error) => {
               console.log(error);
           });
        
        console.log(uploadResult);
        
      return  uploadResult
    
}

const deleteCloudinaryImage = async(public_id) => {
    try {
        console.log("public_id", public_id);
        
        await cloudinary.uploader.destroy(public_id)
    } catch (error) {
        console.log(error);
        
    }
}



module.exports = {
    cloudinaryImage,
    deleteCloudinaryImage
}