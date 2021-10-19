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

  static async login(req, res, next) {
    try {
      const { email, password } = req.body
      if (!email) {
        throw { name: "Email is empty" }
      }
      if (!password) {
        throw { name: "Password is empty" }
      }
      const response = await User.findOne({
        where: {
          email,
        },
      })

      if (!response.email) {
        throw { name: "Invalid Email" }
      }

      if (!comparePassword(password, response.password)) {
        throw { name: "Invalid Password" }
      }
      if (response.status === "pending") {
        throw { name: "Waiting Approved" }
      }

      const payload = {
        id: response.id,
        email: response.email,
      }

      const access_token = createToken(payload)

      res.status(200).json({ access_token })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = UserController
