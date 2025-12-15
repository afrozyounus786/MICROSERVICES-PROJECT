const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    discription: {
        type: String,
    },
    price: {
        amount: {
            type: Number,
            required: true
        },
        currency: {
            type: String,
            enum: ['USD', 'INR',],
            default: 'INR'
        }
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,//We are not referencing User model here because the database is separate for each microservice
        required: true
    },
    images: [{
        url: String,
        thumbnail: String,
        id: String
    }]
})

module.exports = mongoose.model('Product', productSchema);