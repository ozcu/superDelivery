const BaseService = require('./base-service')
const User = require('../models/user')

class UserService extends BaseService {
    async findByName(name) {
        return this.findBy('name', name)
    }
    async findById(id) {
        return this.findBy('_id', id)
    }
    async findByEmail(email) {
        return this.findBy('email', email)
    }
}

module.exports = new UserService(User)
