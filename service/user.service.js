const siteRepository  = require('../repository/site.repository');
// abandoned the point of this?
class UserService {

    constructor() {}

    async getUser(userObj) {
        return await siteRepository.getUser(userObj);
    }
}

module.exports = new UserService();