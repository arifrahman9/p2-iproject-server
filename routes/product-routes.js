const router = require("express").Router()
const ProductController = require("../controller/productController")

router.get("/", ProductController.getAllProduct)
router.post("/", ProductController.addProduct)

module.exports = router
