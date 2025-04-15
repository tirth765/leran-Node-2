const express = require('express')
const { subCategoryController } = require('../../../controller')
const upload = require('../../../middleware/upload')

const routes = express()

//http://localhost:8000/api/v1/subCategory/get-subCategores
routes.get(
    '/get-subCategores',

    subCategoryController.getsubCategores
)

//http://localhost:8000/api/v1/subCategory/post-subCategory
routes.post(
    '/post-subCategory',
    upload.single('subcat_img'), 
    subCategoryController.postsubCategores
)

//http://localhost:8000/api/v1/subCategory/put-subCategory/:id
routes.put(
    '/put-subCategory/:id',
    upload.single('subcat_img'), 
    subCategoryController.putsubCategores
)

//http://localhost:8000/api/v1/subCategory/delete-subCategory/:id
routes.delete(
    '/delete-subCategory/:id',
    
    subCategoryController.deletesubCategores
)

module.exports = routes;