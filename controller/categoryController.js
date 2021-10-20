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
}

module.exports = CategoryController
