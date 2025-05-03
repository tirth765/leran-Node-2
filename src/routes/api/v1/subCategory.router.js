const express = require('express')
const { subCategoryController } = require('../../../controller')
const validation = require('../../../middleware/validation')
const { subCategoryValidation } = require('../../../validation')
const upload = require('../../../middleware/upload')
const auth = require('../../../middleware/auth')

const routes = express()

//http://localhost:8000/api/v1/subCategory/get-subCategores
routes.get(
    '/get-subCategores',

    subCategoryController.getsubCategores
)

//http://localhost:8000/api/v1/subCategory/post-subCategory
routes.post(
    '/post-subCategory',
    auth(["employee", "admin", "user"]),
    upload.single('subcat_img'), 
    validation(subCategoryValidation.addSubCategory),
    subCategoryController.postsubCategores
)

//http://localhost:8000/api/v1/subCategory/put-subCategory/:id
routes.put(
    '/put-subCategory/:id',
    upload.single('subcat_img'),
    validation(subCategoryValidation.updateSubCategory), 
    subCategoryController.putsubCategores
)

//http://localhost:8000/api/v1/subCategory/delete-subCategory/:id
routes.delete(
    '/delete-subCategory/:id',
    validation(subCategoryValidation.deleteSubCategory),
    subCategoryController.deletesubCategores
)

module.exports = routes;