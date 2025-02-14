const { User, Product, Transaction } = require("../models")

class TransactionController {
  static async createTransaction(req, res, next) {
    try {
      const { totalAmount, totalQuantity } = req.body
      const productId = +req.params.productId
      if (typeof productId !== "number" || Number.isNaN(productId)) {
        throw { name: "Invalid productId" }
      }
      const { id } = req.user
      const product = await Product.findByPk(productId)
      if (product === null) {
        throw { name: "Product not found" }
      }
      const response = await Transaction.create({
        userId: id,
        productId: product.id,
        totalAmount,
        totalQuantity,
        include: Product,
      })
      if (!response) {
        throw { name: "Transaction failed" }
      }
      res.status(201).json({ message: `Transaction with product ${product.name} successfully added` })
    } catch (err) {
      next(err)
    }
  }
  static async getTransaction(req, res, next) {
    try {
      const { id } = req.user
      const user = await User.findOne({
        where: {
          id,
        },
      })
      const response = await Transaction.findAndCountAll({
        where: {
          userId: user.id,
        },
        attributes: {
          include: ["id"],
        },
        include: [User, Product],
      })
      res.status(200).json(response)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = TransactionController
