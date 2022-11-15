const bookService  = require('../service/book.service');
const logger = require('../logger/api.logger');
const pageService = require('../service/page.service');

class BookController {

    async getBooks() {
        logger.info('getBooks (all)');
        return await bookService.getBooks();
    }

    async getBook(bookId) {
        logger.info('getBook: ', bookId);
        return await bookService.getBook(bookId);
    }

    async getBooksByAuthor(author) {
        logger.info('Get books by author: ', author);
        return await bookService.findByAuthor(author)
    }

    async createBook(book) {
        logger.info('createBook: ', book);
        return await bookService.createBook(book);
    }

    async updateBook(book) {
        logger.info('updateBook: ', book);
        return await bookService.updateBook(book);
    }

    async deleteBook(bookId) {
        logger.info('deleteBook: ', bookId);
        return await bookService.deleteBook(bookId);
    }
    async getPage(title) {
        logger.info('page ', title);
        return await pageService.getPage(title);
    }
}
module.exports = new BookController();