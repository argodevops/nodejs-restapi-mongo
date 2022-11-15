const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ _id: Number,
                name: String,
                pass: String });

const User = mongoose.model('users', userSchema);

module.exports = {
    User
}