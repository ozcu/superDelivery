class BaseService {
    constructor(model) {
        this.model = model
    }

    save(objects) {
        return this.model.insertMany(objects)
    }

    load() {
        return this.model.find()
    }

    async insert(object) {
        try {
            return await this.model.create(object)
        } catch (err) {
            console.log(err)
        }
    }

    async removeBy(property, value) {
        return this.model.deleteOne({ [property]: value })
    }

    async update(id, object) {
        return this.model.findByIdAndUpdate(id, object)
    }

    async find(id) {
        return this.model.findById(id)
    }

    async query(obj) {
        return this.model.find(obj)
    }

    async findBy(property, value) {
        return this.model.find({ [property]: value })
    }
}

module.exports = BaseService
