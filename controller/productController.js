const { Product } = require("../models")
const { Op } = require("sequelize")
const getPagination = require("../helpers/pagination")
const sendFile = require("../helpers/cloudinary")

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
  static async createProduct(req, res, next) {
    try {
      const { name, price, stock, categoryId, brandId } = req.body
      const imageUrl = await sendFile(req.file)
      const response = await Product.create({
        name,
        price,
        imageUrl,
        stock,
        categoryId,
        brandId,
      })
      res.status(201).json(response)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
  static async deleteProduct(req, res, next) {
    try {
      const productId = +req.params.productId
      if (typeof productId !== "number" || Number.isNaN(productId)) {
        throw { name: "Invalid productId" }
      }
      const response = await Product.destroy({
        where: {
          id: productId,
        },
      })
      if (!response) {
        throw { name: "Product not found" }
      }
      res.status(200).json({ message: "Product has been deleted" })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = ProductController
