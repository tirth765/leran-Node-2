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
        cat_img: {
            type: String,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }

);

const Categores = mongoose.model('Categores', CategorySchema);

module.exports = Categores
