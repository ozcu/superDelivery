
const BaseService= require('./base-service')
const User = require('../models/user')


class UserService extends BaseService {

  async findByName(name){
      return this.findBy('name',name)
  }

}

module.exports = new UserService(User)

