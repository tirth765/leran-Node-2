const pick = require("../helper/pick");

const validation = (schema) => async (req, res, next) => {
    try {

        const object = pick(req, Object.keys(schema))

        console.log(object);
        
    } catch (error) {

    }
}

module.exports = validation