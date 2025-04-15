const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        ProductId: {
            type : mongoose.Types.ObjectId,
            ref: 'SubCategores',
        }, 
        Category: {
            type: String,
            required: true
        },
        SubCategory: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        price: {
            type: Number,
            required: true
        },
        product_img: {
            type: String,
            required:true
        }
       
    },
    {
        timestamps: true,
        versionKey: false

    }
)


const Products = mongoose.model('Products', ProductSchema);

module.exports = Products