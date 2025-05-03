const SubCategores = require("../models/subCategory.model");
const fs = require("fs");
const { cloudinaryImage, deleteCloudinaryImage } = require("../utils/cloudinary");

const getsubCategores = async (req, res) => {
  try {
    const subcategores = await SubCategores.find();

    if (!subcategores) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "Error",
      });
    }

    return res.status(200).json({
      success: true,
      data: subcategores,
      message: "All SubCategores List Succesfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: null,
      message: "Internal server Error" + error.message,
    });
  }
};

const postsubCategores = async (req, res) => {
  try {

    console.log("ssss", req.body, req.file);

    const cImage = await cloudinaryImage(req.file.path, "subCategory")

    console.log("cloudinaryImage:", cImage);

    const subCategory = await SubCategores.create({ ...req.body, subcat_img: { url: cImage.url, public_id: cImage.public_id } })

    if (!subCategory) {
      return res.status(400).json({
        success: false,
        data: [],
        message: "Error",
      });
    }
    return res.status(201).json({
      success: true,
      data: subCategory,
      message: "new subCategory created",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: [],
      message: "Internal server Error: " + error.message,
    });
  }
};

const putsubCategores = async (req, res) => {
  try {

    let subcategores
    const OldSubCategory = await SubCategores.findById(req.params.id);

    if (req.file) {

      await deleteCloudinaryImage(OldSubCategory?.subcat_img?.public_id)

        const cImage = await cloudinaryImage(req.file?.path, "subCategory")
      
            console.log("UpdateCloudinaryImage:", cImage);
      
            subcategores = await SubCategores.findByIdAndUpdate(req.params.id, { ...req.body, subcat_img: { url: cImage.url, public_id: cImage.public_id } }, { new: true })
      

    } else {
      subcategores = await SubCategores.findByIdAndUpdate(req.params.id, req.body, { new: true})
    }

    // const subcategores = await SubCategores.findByIdAndUpdate(
    //   req.params.id,
    //   updatedAll,
    //   { new: true, runValidators: true }
    // );

    if (!subcategores) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "Error during the update.",
      });
    }

    res.status(200).json({
      success: true,
      data: subcategores,
      message: "category updated successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
      message: "Internal server error:" + error.message,
    });
  }
};

const deletesubCategores = async (req, res) => {
  try {

    const subcategory = await SubCategores.findByIdAndDelete(req.params.id);

    if (!subcategory) {
      return res.status(400).json({
        success: false,
        data: [],
        message: "Error",
      });
    }

        deleteCloudinaryImage(subcategory.subcat_img.public_id)
    

    // fs.unlink(subcategory.subcat_img, (err) => {
    //   if (err) {
    //     return res.status(400).json({
    //       success: false,
    //       data: null,
    //       message: "Error",
    //     });
    //   }
    // });

    return res.status(200).json({
      success: true,
      data: subcategory,
      message: "subcategory delete Succesfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: [],
      message: "Internal server Error" + error.message,
    });
  }
};

module.exports = {
  getsubCategores,
  postsubCategores,
  putsubCategores,
  deletesubCategores,
};
