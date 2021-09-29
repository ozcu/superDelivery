const BaseDatabase = require('./base-database')
const Product = require('../models/product')

class ProductDatabase extends BaseDatabase{

        async findByName(name){
            const objects = await this.load()
            return objects.find(o=>o.name == name) // o-> object kısaltması
        }
    
    }


module.exports = new ProductDatabase(Product)