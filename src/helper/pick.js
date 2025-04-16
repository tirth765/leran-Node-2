
const pick = (Object, keys) => {
    return keys.reduce((obj, v) => {
        if(Object && Object.hasOwnProperty(v)) {
            obj[v] = Object[v]

            return obj
        }
    }, {})
}

module.exports = pick