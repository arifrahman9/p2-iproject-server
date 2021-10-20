const { Category } = require("../models")

class CategoryController {
  static async addCategory(req, res, next) {
    try {
      const { name } = req.body
      const response = await Category.create({
        name,
      })
      res.status(201).json({ message: "Success create new category" })
    } catch (err) {
      next(err)
    }
  }
  static async getCategory(req, res, next) {
    try {
      const response = await Category.findAll({
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

module.exports = CategoryController
