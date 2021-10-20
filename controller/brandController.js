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
  static async getBrand(req, res, next) {
    try {
      const response = await Brand.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      })
      res.status(200).json(response)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = BrandController
