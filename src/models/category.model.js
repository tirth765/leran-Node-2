const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        description: {
            type: String,
            required: true,
            trim: true
        },
        // cat_img: {
        //     type: String,
        // }

        cat_img: {
            type: {
                public_id: String,
                url: String
            }
        }
    },
    {
        timestamps: true,
        versionKey: false
    }

);

const Categores = mongoose.model('Categores', CategorySchema);

module.exports = Categores
