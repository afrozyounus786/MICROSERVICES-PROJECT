const mongoose = require('mongoose');
const { emit } = require('../app');


const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String,
    isDefault: {
        type: Boolean,
        default: false
    }
})

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        select: false//password will not be returned in the response whenever database query is performed
    },
    fullName: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true }
    },
    role: {
        type: String,
        enum: ['user', 'seller'],
        default: 'user'
    },
    address: [
        addressSchema
    ]
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;