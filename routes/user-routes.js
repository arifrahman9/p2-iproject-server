const router = require("express").Router()
const UserController = require("../controller/userController")
const authorization = require("../middlewares/authorization")
const authentication = require("../middlewares/authentication")

router.post("/register", UserController.register)
router.post("/login", UserController.login)

router.use(authentication)
router.patch("/:userId", authorization, UserController.switchStatus)

module.exports = router
