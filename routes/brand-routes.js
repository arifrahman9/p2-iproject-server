const router = require("express").Router()
const BrandController = require("../controller/brandController")
const authentication = require("../middlewares/authentication")
const authorization = require("../middlewares/authorization")

router.use(authentication)
router.post("/", authorization, BrandController.addBrand)
router.get("/", BrandController.getBrand)

module.exports = router
