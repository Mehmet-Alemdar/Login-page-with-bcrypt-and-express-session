class BaseService {
  constructor(model) {
    this.model = model
  }

  save(object) {
    return this.model.insertMany(object)
  }
}

module.exports = BaseService
