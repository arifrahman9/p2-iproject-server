const router = require("express").Router()
const CategoryController = require("../controller/categoryController")

router.post("/", CategoryController.addCategory)

module.exports = router
