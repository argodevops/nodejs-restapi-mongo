const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({ _id: Number,
                name: String,
                author: String,
                publishDate: Date,
                isbn: String });

const Book = mongoose.model('books', bookSchema);

module.exports = {
    Book
}