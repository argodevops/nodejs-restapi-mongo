const userService  = require('../service/user.service');
const logger = require('../logger/api.logger');
// Pointless, there's no login mechanism.
class UserController {
    // absolutely no context of login/logout so just dummy auto-wrapped.
    async logoutUser(user, token) {
        logger.info('Controller: logoutUser ', user)
        return { status: 200 };
    }
    // just see if a user exists, this is all faux so...
    async loginUser(user,pass,token) {
        const userObj = {
            name: user,
            pass
        };
        logger.info('Login user ', userObj);
        const theUser = await userService.getUser(userObj);
        // just return some vague alternatives.
        if (!theUser) {
            return { status: 404 };
        }
        if (!token) {
            return { status: 401 };
        }
        return { status: 200 };
    }
}
module.exports = new UserController();