const router = require("express").Router()
const UserController = require("../controller/userController")
const authorization = require("../middlewares/authorization")
const authentication = require("../middlewares/authentication")
const errorHandler = require("../helpers/errorHandler")

router.post("/register", UserController.register)
router.post("/login-google", UserController.loginGoogle)
router.post("/login", UserController.login)

router.use(authentication)
router.patch("/:userId", authorization, UserController.switchStatus)

router.use(errorHandler)
module.exports = router
