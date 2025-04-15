const mongoose = require('mongoose');

const connectDB = async() => {
    try {   
        await mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log("connect sucessfully");
        })
        .catch(() => {
            console.log("connection error", error);
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB