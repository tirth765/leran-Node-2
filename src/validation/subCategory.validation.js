const Joi = require('joi');

const addSubCategory = {
    body: Joi.object().keys({
        Category: Joi.string().required(),
        name: Joi.string().required(),
        description: Joi.string().required(),
    })
}

const updateSubCategory = {
    params: Joi.object().keys( {
        id: Joi.string().required(),
    }),

    body: Joi.object().keys( {
        Category: Joi.string().required(),
        name: Joi.string().required(),
        description: Joi.string().required(),
    })
}

const deleteSubCategory = Joi.object().keys({
    params: Joi.object().keys( {
        id: Joi.string().required(),
    }),
})

module.exports = {
    addSubCategory,
    updateSubCategory,
    deleteSubCategory
}