const { verifyToken } = require("../helpers/jwt")
const { User } = require("../models")

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers
    if (!access_token) {
      throw { name: "No have access_token" }
    }

    const payload = verifyToken(access_token)

    const response = await User.findOne({
      where: {
        id: payload.id,
        email: payload.email,
      },
    })
    req.user = {
      id: response.id,
      email: response.email,
      role: response.role,
    }
    next()
  } catch (err) {
    next(err)
  }
}

module.exports = authentication
