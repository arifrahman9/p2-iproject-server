const { Product, Brand, Category } = require("../models")
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
        size = 10
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
        include: [Brand, Category],
      })

      res.status(200).json(response)
    } catch (err) {
      next(err)
    }
  }
  static async getOneProduct(req, res, next) {
    try {
      const { productId } = req.params
      const response = await Product.findByPk(productId)
      res.status(200).json(response)
    } catch (err) {
      next(err)
    }
  }
  static async createProduct(req, res, next) {
    try {
      const { name, price, stock, categoryId, brandId } = req.body
      if (!req.file) {
        throw { name: "Image not found" }
      }
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
  static async editProduct(req, res, next) {
    try {
      const productId = +req.params.productId
      if (typeof productId !== "number" || Number.isNaN(productId)) {
        throw { name: "Invalid productId" }
      }
      const { name, price, stock, categoryId, brandId } = req.body
      let imageUrl
      if (req.file) {
        imageUrl = await sendFile(req.file)
      }
      const response = await Product.update(
        {
          name,
          price,
          imageUrl,
          stock,
          categoryId,
          brandId,
        },
        {
          where: {
            id: productId,
          },
        }
      )
      if (response[0] === 0) {
        throw { name: "Product not found" }
      }
      res.status(200).json({ message: "Success edit product" })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = ProductController
