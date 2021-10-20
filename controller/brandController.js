const { Brand } = require("../models")

class BrandController {
  static async addBrand(req, res, next) {
    try {
      const { name } = req.body
      const response = await Brand.create({
        name,
      })
      res.status(201).json({ message: "Success create new brand" })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = BrandController
