const { Product } = require("../models")
const { Op } = require("sequelize")
const getPagination = require("../helpers/pagination")

class ProductController {
  static async getAllProduct(req, res, next) {
    try {
      let { page, size, category, name } = req.query

      if (!page) {
        page = 1
      }

      if (!size) {
        size = 4
      }

      const { limit, offset } = getPagination(page, size)

      let condition = {}

      if (category) {
        condition.category = +category
      }

      if (name) {
        condition.name = { [Op.iLike]: `%${name}` }
      }

      const response = await Product.findAndCountAll({
        limit,
        offset,
        where: condition,
      })

      res.status(200).json(response)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = ProductController
