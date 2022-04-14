class BaseService {
  constructor(model) {
    this.model = model
  }

  async save(object) {
    return await this.model.create(object)
  }

  async findOne(value) {
    return await this.model.findOne({ email: value })
  }

  async find(id) {
    return this.model.findById(id)
  }
}

module.exports = BaseService
