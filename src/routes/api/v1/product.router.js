const express = require('express')
const { productController } = require('../../../controller')
const upload = require('../../../middleware/upload')
const { ProductValidation } = require('../../../validation')
const auth = require('../../../middleware/auth')
const validation = require('../../../middleware/validation')

const routes = express.Router()

//http://localhost:8000/api/v1/product/get-products
routes.get(
    '/get-products',
    productController.getproducts
)

// http://localhost:8000/api/v1/product/get-subcat  
routes.get(
    '/get-subcat/:id',
    productController.getSubcat

)

// http://localhost:8000/api/v1/product/post-product  
routes.post(
    '/post-product',
    auth(["employee", "admin", "user"]),
    (req, res, next) => {
        upload.single("product_img") (req, res, (err) => {
            if(err) {
                res.status(400).json({
                    message: "file type is  not allowed"
                  })
            }

            next()
        })  
    },
    
    validation(ProductValidation.addProduct),
    productController.postproduct
)

// http://localhost:8000/api/v1/product/put-product  
routes.put(
    '/put-product/:id',
    auth(["employee", "admin", "user"]),
    upload.single("product_img"),
    validation(ProductValidation.updateProduct),

    productController.putproduct
)

routes.delete(
    '/delete-product/:id',
    auth(["employee", "admin", "user"]),
    validation(ProductValidation.deleteProduct),
    productController.deleteproduct
)

module.exports = routes;