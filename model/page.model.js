const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({ _id: Number,
                title: String,
                content: String,
                link: String });

const Page = mongoose.model('pages', pageSchema);

module.exports = {
    Page
}