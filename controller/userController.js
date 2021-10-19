const { User } = require("../models")
const { comparePassword } = require("../helpers/bcrypt")
const { createToken } = require("../helpers/jwt")

class UserController {
  static async register(req, res, next) {
    try {
      const { username, email, password } = req.body
      const response = await User.create({ username, email, password })

      res.status(201).json({ email: response.email })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = UserController
