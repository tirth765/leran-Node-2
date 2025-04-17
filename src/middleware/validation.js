const Joi = require('joi');
const pick = require("../helper/pick");

const validation = (schema) => async (req, res, next) => {
    try {

        const object = pick(req, Object.keys(schema))

        console.log(object);

        const { value, error } = await Joi
            .compile(schema)
            .prefs({
                abortEarly: false
            })
            .validate(object);

        console.log(value, error);

        if (error) {
            const errMasag = error.details.map((v) => v.message).join(",\n")
            console.log(errMasag);

            return res.status(400).json({
                success: false,
                message: "Validation Error" + errMasag
            })

        }

        Object.assign(req.body, value?.body)
        Object.assign(req.params, value?.params)
        Object.assign(req.query, value?.query)
        next()

    } catch (error) {
        return res.status(500)
            .json({
                success: false,
                data: null,
                message: "Internal server Error" + error
            })
    }
}

module.exports = validation