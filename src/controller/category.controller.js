const Categores = require("../models/category.model");
const fs = require("fs");
const {cloudinaryImage, deleteCloudinaryImage} = require("../utils/cloudinary");

const listCategores = async (req, res) => {
  try {
    const categores = await Categores.find()
    
    if (!categores) {
      return res.status(400)
        .json({
          success: false,
          data: null,
          message: "Error"
        })
    }

    return res.status(200) 
      .json({
        success: true,
        data: categores,
        message: "All Categores List Succesfully"
      })

  } catch (error) {
    return res.status(500)
      .json({
        success: false,
        data: null,
        message: "Internal server Error" + error.message
      })
  }
};

const getCategory = async (req, res) => {
  try {
    const category = await Categores.findById(req.params.id)
    res.json(category)
    if (!category) {
      return res.status(400)
        .json({
          success: false,
          data: null,
          message: "Error"
        })
    }

    return res.status(200)
      .json({
        success: true, 
        data: category,
        message: "All Category List Succesfully"
      })

  } catch (error) {
    return res.status(500)
      .json({
        success: false,
        data: null,
        message: "Internal server Error" + error.message
      })
  }
};

const addCategory = async (req, res) => {
  try {
    console.log("ssss",req.body, req.file);

    const cImage = await cloudinaryImage(req.file.path, "category")

    console.log("cloudinaryImage:",cImage);
    
    const category = await Categores.create({ ...req.body, cat_img: {url: cImage.url, public_id: cImage.public_id } })

    if (!category) {
      return res.status(400)
        .json({
          success: false,
          data: [],
          message: "Error"
        })
    }
    return res.status(201)
      .json({
        success: true,
        data: category,
        message: "new category created"
      })

  } catch (error) {
    return res.status(500)
      .json({
        success: false,
        data: [],
        message: "Internal server Error:" + error.message
      })
  }
};  

const updateCategory = async (req, res) => {
  try {
      let updatedAll;
      const OldCategory = await Categores.findById(req.params.id);
      if(req.file){
         updatedAll = {...req.body, cat_img: req.file.path};
          // fs.unlink(OldCategory.cat_img, (err) => {
          //     if(err){
          //         return res.status(400).json({
          //             success: false,
          //             data: null,
          //             message: "Error in update category: " 
          //         })
          //     }
          // })  
      } else {
          updatedAll =  {...req.body}
      }

      deleteCloudinaryImage(category.cat_img.public_id)

      const cImage = await cloudinaryImage(req.file.path, "category")

      console.log("UpdateCloudinaryImage:",cImage);
      
      const category = await Categores.findByIdAndUpdate(req.params.id, updatedAll, { ...req.body, cat_img: {url: cImage.url, public_id: cImage.public_id }}, { new: true, runValidators: true } )

      if (!category) {
          return res.status(400).json({
              success: false,
              data: null,
              message: "Error during the update."
          })
      }

      


      res.status(200).json({
          success: true,
          data: category,
          message: "category updated successfully."
      })

  } catch (error) {
      res.status(500).json({
          success: false,
          data: null,
          message: "Internal server error:" + error.message
      })
  }
}

const deleteCategory = async (req, res) => {
  console.log(req.params.id);
  
  try {
    const category = await Categores.findByIdAndDelete(req.params.id)

    if (!category) {
      return res.status(400)
        .json({
          success: false,
          data: [],
          message: "Error"
        })
    }

    deleteCloudinaryImage(category.cat_img.public_id)

    // fs.unlink(category.cat_img, (err) => {
    //   if(err) {
    //     return res.status(400)
    //     .json({
    //       success: false,
    //       data: null,
    //       message: "Error"
    //     })      
    //   } 

    
    // })


    return res.status(200)
      .json({
        success: true,
        data: category,
        message: "category delete Succesfully"
      })

  } catch (error) {
    return res.status(500)
      .json({
        success: false,
        data: [],
        message: "Internal server Error" + error.message
      })
  }
};

module.exports = {
  listCategores,
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory
};
