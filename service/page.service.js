const siteRepository  = require('../repository/site.repository');
// abandoned the point of this?
class PageService {

    constructor() {}

    async getPage(title) {
        return await siteRepository.getPage(title);
    }
}

module.exports = new PageService();