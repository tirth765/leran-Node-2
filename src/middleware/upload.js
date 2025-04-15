const multer = require("multer")
const fs = require("fs")
const path = require("path")

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        console.log('aaa', file);

        const filePath = path.join('public', file.fieldname)
        console.log('bbb',filePath);
        
        fs.mkdir(filePath, { recursive: true }, (err) => {
            if (err) {
                console.log("not now",err);
            }
        })

        cb(null, filePath)
    },

    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })

module.exports = upload;