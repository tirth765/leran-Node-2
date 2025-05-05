const Joi = require('joi');

const addProduct = {
    body: Joi.object().keys({
        Category: Joi.string().required(),
        SubCategory: Joi.string().required(),
        name: Joi.string().required().trim(),
        description: Joi.string().required(),
        price: Joi.number().required()
    })
}

const updateProduct = {
    params: Joi.object().keys( {
        id: Joi.string().required(),
    }),

    body: Joi.object().keys( {
        Category: Joi.string().required(),
        SubCategory: Joi.string().required(),
        name: Joi.string().required().trim(),
        description: Joi.string().required(),
        price: Joi.number().required(),
        product_img: Joi.object()
    })
}

const deleteProduct = Joi.object().keys({
    params: Joi.object().keys( {
        id: Joi.string().required(),
    }),
})

module.exports = {
    addProduct,
    updateProduct,
    deleteProduct
}