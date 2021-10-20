const { User } = require("../models")
const { comparePassword } = require("../helpers/bcrypt")
const { createToken } = require("../helpers/jwt")
const { confirmationRegistered, confirmationSwitchStatus } = require("../helpers/nodemailer")

class UserController {
  static async register(req, res, next) {
    try {
      const { username, email, password } = req.body
      const response = await User.create({ username, email, password })
      const content = `Hi Admin!, user with email ${response.email} has successfully registered, please check in Cashier App.`
      const subject = `Information Registered`
      confirmationRegistered(response, content, subject)

      res.status(201).json({ message: "Success Registered!" })
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
  static async switchStatus(req, res, next) {
    try {
      const userId = +req.params.userId
      if (typeof userId !== "number" || Number.isNaN(userId)) {
        throw { name: "Invalid UserId" }
      }
      const response = await User.update(
        { status: "active" },
        {
          where: {
            id: userId,
          },
        }
      )
      const user = await User.findByPk(userId)
      const content = `Hi Cashier! Your account has been active, please login again`
      const subject = `Information Status Active`
      confirmationSwitchStatus(user, content, subject)
      if (response[0] === 0) {
        throw { name: "User not found" }
      }
      res.status(200).json({ message: "User has been active!" })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = UserController
