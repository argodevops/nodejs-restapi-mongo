const siteRepository  = require('../repository/site.repository');

class BookService {

    constructor() {}

    async getBooks() {
        return await siteRepository.getBooks();
    }

    async findByAuthor(author) {
        return await siteRepository.getBooksBy(author);
    }

    async getBook(bookId) {
        return await siteRepository.getBook(bookId);
    }

    async createBook(book) {
        return await siteRepository.createBook(book);
    }

    async updateBook(book) {
        return await siteRepository.updateBook(book);
    }

    async deleteBook(bookId) {
        return await siteRepository.deleteBook(bookId);
    }

}

module.exports = new BookService();