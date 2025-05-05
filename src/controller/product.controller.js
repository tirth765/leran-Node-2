const Products = require("../models/product.model");
const fs = require("fs");
const SubCategores = require("../models/subCategory.model");
const { cloudinaryImage, deleteCloudinaryImage } = require("../utils/cloudinary");

const getproducts = async (req, res) => {
  try {
    const products = await Products.find()

    if (!products) {
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
        data: products,
        message: "All Product List Succesfully"
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

const getSubcat = async (req, res) => {
  try {
    console.log(req.params.id);

    const subcat = await SubCategores.find({ Category: req.params.id })

    if (!subcat) {
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
        data: subcat,
        message: "All Product List Succesfully"
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

const postproduct = async (req, res) => {
  try {
    console.log(req.body);

    const cImage = await cloudinaryImage(req.file.path, "product");

    console.log("cloudinaryImage:", cImage);

    const product = await Products.create({ ...req.body, product_img: { url: cImage.url, public_id: cImage.public_id } })

    if (!product) {
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
        data: product,
        message: "new product created"
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

const putproduct = async (req, res) => {
  try {
    let product;

    const OldProduct = await Products.findById(req.params.id);
    if (req.file) {

       await deleteCloudinaryImage(OldProduct.product_img.public_id)

            const cImage = await cloudinaryImage(req.file?.path, "product")
      
            console.log("UpdateCloudinaryImage:", cImage);
      
            product = await Products.findByIdAndUpdate(req.params.id, { ...req.body, product_img: { url: cImage.url, public_id: cImage.public_id } }, { new: true })
      

    } else {
      product = await Products.findByIdAndUpdate(req.params.id, req.body, { new: true})
    }

    if (!product) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "Error during the update."
      })
    }

    res.status(200).json({
      success: true,
      data: product,
      message: "updated successfully."
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
      message: "Internal server error:" + error.message
    })
  }
};

const deleteproduct = async (req, res) => {
  try {
    const product = await Products.findByIdAndDelete(req.params.id)

    if (!product) {
      return res.status(400)
        .json({
          success: false,
          data: [],
          message: "Error"
        })
    }

      deleteCloudinaryImage(product.product_img.public_id)

    return res.status(200)
      .json({
        success: true,
        data: product,
        message: "product delete Succesfully"
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
  getproducts,
  postproduct,
  putproduct,
  deleteproduct,
  getSubcat
}