const { connect, disconnect } = require('../config/db.config');
const { Book } = require('../model/book.model');
const { User } = require('../model/user.model');
const { Page } = require('../model/page.model');
const logger = require('../logger/api.logger');

class SiteRepository {

    constructor() {
        connect();
    }

    async getBooks() {
        const books = await Book.find({});
        return books;
    }

   async getBook(bookId) {
        const book = await Book.find({_id: bookId});
        return book;
    }

    async getBooksBy(author) {
        return Book.find({ author });
    }

    async createBook(book) {
        let data = {};
        try {
            data = await Book.create(book);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateBook(book) {
        let data = {};
        try {
            data = await Book.updateOne(book);
        } catch(err) {
            logger.error('Error updating book:' + err);
        }
        return data;
    }

    async deleteBook(bookId) {
        let data = {};
        try {
            data = await Book.deleteOne({_id : bookId});
        } catch(err) {
            logger.error('Error deleting book: ' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

    async getUser(user) {
        const userLogin = await User.findOne(user);
        return userLogin;
    }

    async getPage(link) {
        return await Page.find({ link });
    }
}

module.exports = new SiteRepository();