const router = require("express").Router()
const CategoryController = require("../controller/categoryController")
const authentication = require("../middlewares/authentication")
const authorization = require("../middlewares/authorization")

router.use(authentication)
router.post("/", authorization, CategoryController.addCategory)
router.get("/", CategoryController.getCategory)

module.exports = router
