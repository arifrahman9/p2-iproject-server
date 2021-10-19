const { User, Product, Transaction } = require("../models")

class TransactionController {
  static async createTransaction(req, res, next) {
    try {
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
      })
      if (!response) {
        throw { name: "Transaction failed" }
      }
      res.status(201).json({ message: `Transaction with product ${product.name} successfully added` })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = TransactionController
