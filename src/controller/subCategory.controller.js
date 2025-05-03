const SubCategores = require("../models/subCategory.model");
const fs = require("fs");
const { cloudinaryImage } = require("../utils/cloudinary");

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
    let updatedAll;
    const OldCategory = await SubCategores.findById(req.params.id);
    if (req.file) {
      updatedAll = { ...req.body, subcat_img: req.file.path };
      // fs.unlink(OldCategory.subcat_img, (err) => {
      //   if (err) {
      //     return res.status(400).json({
      //       success: false,
      //       data: null,
      //       message: "Error in update category: ",
      //     });
      //   }
      // });
    } else {
      updatedAll = { ...req.body };
    }

    const subcategores = await SubCategores.findByIdAndUpdate(
      req.params.id,
      updatedAll,
      { new: true, runValidators: true }
    );

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

    fs.unlink(subcategory.subcat_img, (err) => {
      if (err) {
        return res.status(400).json({
          success: false,
          data: null,
          message: "Error",
        });
      }
    });

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
