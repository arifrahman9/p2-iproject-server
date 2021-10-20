const router = require("express").Router()
const BrandController = require("../controller/brandController")

router.post("/", BrandController.addBrand)

module.exports = router
